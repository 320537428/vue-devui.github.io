var V=Object.defineProperty;var q=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var b=(e,a,s)=>a in e?V(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,v=(e,a)=>{for(var s in a||(a={}))E.call(a,s)&&b(e,s,a[s]);if(q)for(var s of q(a))B.call(a,s)&&b(e,s,a[s]);return e};import{_ as U,r as f,c as A,b as g,w as m,a as S,d as t,e as n,o as R,V as y}from"./app.345333c6.js";const T={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:a,withCtx:s,createTextVNode:o,openBlock:i,createElementBlock:r}=y,k=o();function l(d,x){const c=e("d-statistic"),p=e("d-col"),u=e("d-row");return i(),r("div",null,[a(u,null,{default:s(()=>[a(p,{span:12},{default:s(()=>[a(c,{title:"Users Sales",value:5201314,style:{position:"absolute"}})]),_:1}),a(p,{span:12},{default:s(()=>[a(c,{title:"Account Weekly Sales (CNY)",value:999999})]),_:1}),k]),_:1})])}return v({render:l},{})}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:a,withCtx:s,openBlock:o,createElementBlock:i}=y;function r(l,_){const d=e("d-icon"),x=e("d-statistic"),c=e("d-card"),p=e("d-col"),u=e("d-row");return o(),i("div",null,[a(u,{gutter:16},{default:s(()=>[a(p,{span:12},{default:s(()=>[a(c,null,{default:s(()=>[a(x,{title:"Growth Rate",value:68.28,precision:3,suffix:"%"},{prefix:s(()=>[a(d,{name:"experice-new"})]),_:1},8,["value"])]),_:1})]),_:1}),a(p,{span:12},{default:s(()=>[a(c,null,{default:s(()=>[a(x,{title:"Decline Rate",value:38.3,suffix:"%",class:"demo-class"},{prefix:s(()=>[a(d,{name:"bold"})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})])}return v({render:r},{})}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:a,withCtx:s,createElementVNode:o,createTextVNode:i,openBlock:r,createElementBlock:k}=y,l=o("span",null,"%",-1),_=i("Start");function d(c,p){const u=e("d-statistic"),h=e("d-card"),w=e("d-col"),C=e("d-button"),N=e("d-row");return r(),k("div",null,[a(N,{gutter:16},{default:s(()=>[a(w,{span:12},{default:s(()=>[a(h,null,{default:s(()=>[a(u,{title:"Animation Growth Rate",value:88.265,suffix:"%","value-from":0,start:c.start,"animation-duration":5e3,animation:""},null,8,["value","start"])]),_:1})]),_:1}),a(w,{span:12},{default:s(()=>[a(h,null,{default:s(()=>[a(u,{title:"Animation Decline Rate",value:"53",precision:3,"value-from":0,start:c.controlStart,animation:""},{suffix:s(()=>[l,a(C,{onClick:p[0]||(p[0]=Q=>c.controlStart=!0)},{default:s(()=>[_]),_:1})]),_:1},8,["start"])]),_:1})]),_:1})]),_:1})])}return v({render:d},{data(){return{start:!0,controlStart:!1}}})}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:a,withCtx:s,createVNode:o,createElementVNode:i,openBlock:r,createElementBlock:k}=y,l=e(" % "),_=i("span",null,"/ 100",-1);function d(c,p){const u=a("d-statistic"),h=a("d-col"),w=a("d-row");return r(),k("div",null,[o(w,{gutter:16},{default:s(()=>[o(h,{span:12},{default:s(()=>[o(u,{title:"Active User Number",value:1128,showGroupSeparator:!0,style:{"margin-right":"50px"}},{suffix:s(()=>[l]),_:1})]),_:1}),o(h,{span:12},{default:s(()=>[o(u,{title:"Scale",value:"93"},{suffix:s(()=>[_]),_:1})]),_:1})]),_:1})])}return v({render:d},{})}(),"render-demo-4":function(){const{createTextVNode:e,resolveComponent:a,withCtx:s,createVNode:o,openBlock:i,createElementBlock:r}=y,k=e("%");function l(d,x){const c=a("d-statistic"),p=a("d-col"),u=a("d-row");return i(),r("div",null,[o(u,{gutter:16},{default:s(()=>[o(p,{span:12},{default:s(()=>[o(c,{title:"Custom Style",value:88,"content-style":{color:"#fba"},"title-style":{color:"#abf"}},{suffix:s(()=>[k]),_:1})]),_:1}),o(p,{span:12},{default:s(()=>[o(c,{title:"Scale",value:5e3,"group-separator":".",precision:3,prefix:"$","content-style":{fontSize:"30px",color:"#5e7ce0"}})]),_:1})]),_:1})])}return v({render:l},{})}()}},tt='{"title":"Statistic","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Use in card","slug":"use-in-card"},{"level":3,"title":"Numerical animation","slug":"numerical-animation"},{"level":3,"title":"Use of slots","slug":"use-of-slots"},{"level":3,"title":"Custom Style","slug":"custom-style"},{"level":3,"title":"d-statistic","slug":"d-statistic"}],"relativePath":"en-US/components/statistic/index.md","lastUpdated":1641649058902}',D=S('<h1 id="statistic" tabindex="-1">Statistic <a class="header-anchor" href="#statistic" aria-hidden="true">#</a></h1><h3 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Used when it is necessary to display statistical data with description</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',4),G=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Users Sales"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5201314"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"position"),t("span",{class:"token punctuation"},":"),n(" absolute")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
        
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Account Weekly Sales (CNY)"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("999999"),t("span",{class:"token punctuation"},'"')]),n(` 
       `),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-cow")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),$=t("h3",{id:"use-in-card",tabindex:"-1"},[n("Use in card "),t("a",{class:"header-anchor",href:"#use-in-card","aria-hidden":"true"},"#")],-1),W=t("p",null,"Display statistics in cards.",-1),Y=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Growth Rate"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("68.28"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":precision"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("%"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#prefix"),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("experice-new"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Decline Rate"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("38.3"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("%"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("demo-class"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#prefix"),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bold"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),z=t("h3",{id:"numerical-animation",tabindex:"-1"},[n("Numerical animation "),t("a",{class:"header-anchor",href:"#numerical-animation","aria-hidden":"true"},"#")],-1),P=t("p",null,"We can start numerical animation by setting the animation attribute. You can start the animation when the page loads, or you can control it manually",-1),j=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Animation Growth Rate"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("88.265"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("%"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value-from"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("0"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":start"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("start"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":animation-duration"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5000"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"animation"),n(`
        `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Animation Decline Rate"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("53"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":precision"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":value-from"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("0"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},":start"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("controlStart"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token attr-name"},"animation"),n(`
        `),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#suffix"),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("%"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("controlStart = true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Start"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"data"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      start`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
      controlStart`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),O=t("h3",{id:"use-of-slots",tabindex:"-1"},[n("Use of slots "),t("a",{class:"header-anchor",href:"#use-of-slots","aria-hidden":"true"},"#")],-1),F=t("p",null,"Prefix and suffix slots",-1),H=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Active User Number"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1128"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":showGroupSeparator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 50px")]),t("span",{class:"token punctuation"},'"')])]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#suffix"),t("span",{class:"token punctuation"},">")]),n(`
          %
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Scale"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("93"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#suffix"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("/ 100"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),I=t("h3",{id:"custom-style",tabindex:"-1"},[n("Custom Style "),t("a",{class:"header-anchor",href:"#custom-style","aria-hidden":"true"},"#")],-1),J=t("p",null,"Provide custom attributes to facilitate adding styles",-1),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Custom Style"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("88"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":content-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ color: "),t("span",{class:"token punctuation"},"'"),n("#fba"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":title-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ color: "),t("span",{class:"token punctuation"},"'"),n("#abf"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#suffix"),t("span",{class:"token punctuation"},">")]),n("%"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Scale"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5000"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"group-separator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("."),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":precision"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"prefix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("$"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":content-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ fontSize: "),t("span",{class:"token punctuation"},"'"),n("30px"),t("span",{class:"token punctuation"},"'"),n(", color: "),t("span",{class:"token punctuation"},"'"),n("#5e7ce0"),t("span",{class:"token punctuation"},"'"),n("}"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),L=S('<h3 id="d-statistic" tabindex="-1">d-statistic <a class="header-anchor" href="#d-statistic" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">parameter</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">introduce</th></tr></thead><tbody><tr><td style="text-align:center;">title</td><td style="text-align:center;"><code>string | v-slot</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Title of value</td></tr><tr><td style="text-align:center;">extra</td><td style="text-align:center;"><code>string | v-slot</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Extra content</td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;"><code>number | string</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Value content</td></tr><tr><td style="text-align:center;">group-separator</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">,</td><td style="text-align:center;">Set group-separator</td></tr><tr><td style="text-align:center;">precision</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Set numeric precision</td></tr><tr><td style="text-align:center;">suffix</td><td style="text-align:center;"><code>string | v-slot</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Sets the suffix of the value</td></tr><tr><td style="text-align:center;">prefix</td><td style="text-align:center;"><code>string | v-slot</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Sets the prefix of the value</td></tr><tr><td style="text-align:center;">title-style</td><td style="text-align:center;"><code>style</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Title Style</td></tr><tr><td style="text-align:center;">content-style</td><td style="text-align:center;"><code>style</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Content style</td></tr><tr><td style="text-align:center;">animation-duration</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">2000</td><td style="text-align:center;">Animation duration</td></tr><tr><td style="text-align:center;">delay</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:center;">Delay animation time</td></tr><tr><td style="text-align:center;">value-from</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:center;">Animation initial value</td></tr><tr><td style="text-align:center;">animation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Turn on animation</td></tr><tr><td style="text-align:center;">easing</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">quartOut</td><td style="text-align:center;">Digital animation effect</td></tr><tr><td style="text-align:center;">start</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Start animation</td></tr></tbody></table>',2);function M(e,a,s,o,i,r){const k=f("render-demo-0"),l=f("demo"),_=f("render-demo-1"),d=f("render-demo-2"),x=f("render-demo-3"),c=f("render-demo-4");return R(),A("div",null,[D,g(l,{sourceCode:`<template>
  <d-row>
    <d-col :span="12">
      <d-statistic
        title="Users Sales"
        :value="5201314"
        style="position: absolute">
      </d-statistic>
        
    </d-col>
    <d-col :span="12">
      <d-statistic title="Account Weekly Sales (CNY)" :value="999999" 
       />
    </d-col>
  </d-cow>
</template>
`},{highlight:m(()=>[G]),default:m(()=>[g(k)]),_:1}),$,W,g(l,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-card>
        <d-statistic
          title="Growth Rate"
          :value="68.28"
          :precision="3"
          suffix="%"
        >
          <template #prefix>
            <d-icon name="experice-new" />
          </template>
        </d-statistic>
      </d-card>
    </d-col>
    <d-col :span="12">
      <d-card>
        <d-statistic
          title="Decline Rate"
          :value="38.3"
          suffix="%"
          class="demo-class"
        >
          <template #prefix>
            <d-icon name="bold" />
          </template>
        </d-statistic>
      </d-card>
    </d-col>
  </d-row>
</template>
`},{highlight:m(()=>[Y]),default:m(()=>[g(_)]),_:1}),z,P,g(l,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-card>
        <d-statistic
          title="Animation Growth Rate"
          :value="88.265"
          suffix="%"
          :value-from="0"
          :start="start"
          :animation-duration="5000"
          animation
        ></d-statistic>
      </d-card>
    </d-col>
    <d-col :span="12">
      <d-card>
        <d-statistic
          title="Animation Decline Rate"
          value="53"
          :precision="3"
          :value-from="0"
          :start="controlStart"
          animation
        >
          <template #suffix>
            <span>%</span>
            <d-button @click="controlStart = true">Start</d-button>
          </template>
        </d-statistic>
      </d-card>
    </d-col>
  </d-row>
</template>
<script>
export default {
  data() {
    return {
      start: true,
      controlStart: false
    }
  }
}
<\/script>
`},{highlight:m(()=>[j]),default:m(()=>[g(d)]),_:1}),O,F,g(l,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-statistic
        title="Active User Number"
        :value="1128"
        :showGroupSeparator="true"
        style="margin-right: 50px"
      >
        <template #suffix>
          %
        </template>
      </d-statistic>
    </d-col>
    <d-col :span="12">
      <d-statistic title="Scale" value="93">
        <template #suffix>
          <span>/ 100</span>
        </template>
      </d-statistic>
    </d-col>
  </d-row>
</template>
`},{highlight:m(()=>[H]),default:m(()=>[g(x)]),_:1}),I,J,g(l,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-statistic
        title="Custom Style"
        :value="88"
        :content-style="{ color: '#fba' }"
        :title-style="{ color: '#abf' }"
      >
        <template #suffix>%</template>
      </d-statistic>
    </d-col>
    <d-col :span="12">
      <d-statistic
        title="Scale"
        :value="5000"
        group-separator="."
        :precision="3"
        prefix="$"
        :content-style="{ fontSize: '30px', color: '#5e7ce0'}"
      >
    </d-col>
  </d-row>
</template>
`},{highlight:m(()=>[K]),default:m(()=>[g(c)]),_:1}),L])}var nt=U(T,[["render",M]]);export{tt as __pageData,nt as default};
