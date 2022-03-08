var R=Object.defineProperty;var C=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var S=(e,s,a)=>s in e?R(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,h=(e,s)=>{for(var a in s||(s={}))E.call(s,a)&&S(e,a,s[a]);if(C)for(var a of C(s))B.call(s,a)&&S(e,a,s[a]);return e};import{_ as V,r as y,c as z,b as r,w as d,a as N,d as t,e as n,o as A,V as b}from"./app.36ea4c54.js";const U={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,withCtx:a,openBlock:o,createElementBlock:i}=b;function k(p,m){const c=e("d-statistic"),l=e("d-col"),u=e("d-row");return o(),i("div",null,[s(u,null,{default:a(()=>[s(l,{span:12},{default:a(()=>[s(c,{title:"Users Sales","group-separator":",",value:5201314})]),_:1}),s(l,{span:12},{default:a(()=>[s(c,{title:"Account Weekly Sales (CNY)","group-separator":".",value:999999})]),_:1})]),_:1})])}return h({render:k},{})}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:s,withCtx:a,createElementVNode:o,createTextVNode:i,openBlock:k,createElementBlock:g}=b,p=o("span",null,"%",-1),m=i("Start");function c(u,x){const f=e("d-statistic"),v=e("d-card"),_=e("d-col"),q=e("d-button"),w=e("d-row");return k(),g("div",null,[s(w,{gutter:16},{default:a(()=>[s(_,{span:12},{default:a(()=>[s(v,null,{default:a(()=>[s(f,{title:"Animation Growth Rate",value:88.265,suffix:"%","value-from":0,start:u.start,"animation-duration":5e3,animation:""},null,8,["value","start"])]),_:1})]),_:1}),s(_,{span:12},{default:a(()=>[s(v,null,{default:a(()=>[s(f,{title:"Animation Decline Rate",value:"53",precision:3,"value-from":0,start:u.controlStart,animation:""},{suffix:a(()=>[p,s(q,{onClick:x[0]||(x[0]=L=>u.controlStart=!0)},{default:a(()=>[m]),_:1})]),_:1},8,["start"])]),_:1})]),_:1})]),_:1})])}return h({render:c},{data(){return{start:!0,controlStart:!1}}})}(),"render-demo-2":function(){const{createElementVNode:e,resolveComponent:s,createVNode:a,withCtx:o,openBlock:i,createElementBlock:k}=b,g=e("span",{style:{marginRight:"10px"}},"Number of articles read",-1),p=e("span",{style:{fontSize:"13px",marginRight:"10px"}},"Compared before yesterday",-1),m=e("span",{style:{marginRight:"10px"}},"Number of article likes",-1),c=e("span",{style:{fontSize:"13px",marginRight:"10px"}},"Compared before yesterday",-1);function l(x,f){const v=s("d-icon"),_=s("d-statistic"),q=s("d-col"),w=s("d-row");return i(),k("div",null,[a(w,{gutter:16},{default:o(()=>[a(q,{span:12},{default:o(()=>[a(_,{value:336969,style:{"margin-right":"50px"},"group-separator":",","value-style":{fontWeight:"bold",fontSize:"30px"},animation:""},{title:o(()=>[g,a(v,{name:"help"})]),extra:o(()=>[p,a(v,{color:"#F56C6C",name:"arrow-down"}),a(_,{style:{display:"inline-block"},"group-separator":",","value-style":{fontSize:"15px",color:"#F56C6C",letterSpacing:"2px"},value:"1399",animation:""})]),_:1})]),_:1}),a(q,{span:12},{default:o(()=>[a(_,{value:5565566,style:{"margin-right":"50px"},"group-separator":",","value-style":{fontWeight:"bold",fontSize:"30px"},animation:"","animation-duration":5e3},{title:o(()=>[m,a(v,{name:"help"})]),extra:o(()=>[c,a(v,{color:"#67C23A",name:"arrow-up"}),a(_,{style:{display:"inline-block"},"value-style":{fontSize:"15px",color:"#67C23A",letterSpacing:"2px"},value:"6669",animation:"","group-separator":",","animation-duration":5e3})]),_:1})]),_:1})]),_:1})])}return h({render:l},{})}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:s,withCtx:a,openBlock:o,createElementBlock:i}=b;function k(p,m){const c=e("d-icon"),l=e("d-statistic"),u=e("d-card"),x=e("d-col"),f=e("d-row");return o(),i("div",null,[s(f,{gutter:16},{default:a(()=>[s(x,{span:12},{default:a(()=>[s(u,null,{default:a(()=>[s(l,{"value-style":{color:"#fba"},title:"Growth Rate",value:68.28,precision:3,suffix:"%"},{prefix:a(()=>[s(c,{name:"experice-new"})]),_:1},8,["value"])]),_:1})]),_:1}),s(x,{span:12},{default:a(()=>[s(u,null,{default:a(()=>[s(l,{"value-style":{color:"#abf"},title:"Decline Rate",value:38.3,suffix:"%"},{prefix:a(()=>[s(c,{name:"bold"})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})])}return h({render:k},{})}()}},Q='{"title":"Statistic","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Numerical animation","slug":"numerical-animation"},{"level":3,"title":"Use of slots","slug":"use-of-slots"},{"level":3,"title":"Use in card","slug":"use-in-card"},{"level":3,"title":"d-statistic","slug":"d-statistic"}],"relativePath":"en-US/components/statistic/index.md","lastUpdated":1646628391428}',W=N('<h1 id="statistic" tabindex="-1">Statistic <a class="header-anchor" href="#statistic" aria-hidden="true">#</a></h1><h3 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Used when it is necessary to display statistical data with description</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3>',4),D=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Users Sales"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"group-separator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(","),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5201314"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Account Weekly Sales (CNY)"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"group-separator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("."),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("999999"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),F=t("h3",{id:"numerical-animation",tabindex:"-1"},[n("Numerical animation "),t("a",{class:"header-anchor",href:"#numerical-animation","aria-hidden":"true"},"#")],-1),G=t("p",null,"We can start numerical animation by setting the animation attribute. You can start the animation when the page loads, or you can control it manually",-1),T=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
      `),t("span",{class:"token literal-property property"},"start"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token literal-property property"},"controlStart"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"false"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),$=t("h3",{id:"use-of-slots",tabindex:"-1"},[n("Use of slots "),t("a",{class:"header-anchor",href:"#use-of-slots","aria-hidden":"true"},"#")],-1),Y=t("p",null,"Prefix slot, suffix slot, extra slot",-1),P=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("336969"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 50px")]),t("span",{class:"token punctuation"},'"')])]),n(`
        `),t("span",{class:"token attr-name"},"group-separator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(","),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ fontWeight: "),t("span",{class:"token punctuation"},"'"),n("bold"),t("span",{class:"token punctuation"},"'"),n(", fontSize: "),t("span",{class:"token punctuation"},"'"),n("30px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"animation"),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#title"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{marginRight: "),t("span",{class:"token punctuation"},"'"),n("10px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Number of articles read"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("help"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#extra"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ fontSize: "),t("span",{class:"token punctuation"},"'"),n("13px"),t("span",{class:"token punctuation"},"'"),n(", marginRight: "),t("span",{class:"token punctuation"},"'"),n("10px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Compared before yesterday"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#F56C6C"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("arrow-down"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
            `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" inline-block"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(`
            `),t("span",{class:"token attr-name"},"group-separator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(","),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},":value-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ fontSize: "),t("span",{class:"token punctuation"},"'"),n("15px"),t("span",{class:"token punctuation"},"'"),n(", color: "),t("span",{class:"token punctuation"},"'"),n("#F56C6C"),t("span",{class:"token punctuation"},"'"),n(", letterSpacing: "),t("span",{class:"token punctuation"},"'"),n("2px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1399"),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},"animation"),n(`
          `),t("span",{class:"token punctuation"},"/>")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
        `),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5565566"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 50px")]),t("span",{class:"token punctuation"},'"')])]),n(`
        `),t("span",{class:"token attr-name"},"group-separator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(","),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":value-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ fontWeight: "),t("span",{class:"token punctuation"},"'"),n("bold"),t("span",{class:"token punctuation"},"'"),n(", fontSize: "),t("span",{class:"token punctuation"},"'"),n("30px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"animation"),n(`
        `),t("span",{class:"token attr-name"},":animation-duration"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5000"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#title"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{marginRight: "),t("span",{class:"token punctuation"},"'"),n("10px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Number of article likes"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("help"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#extra"),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ fontSize: "),t("span",{class:"token punctuation"},"'"),n("13px"),t("span",{class:"token punctuation"},"'"),n(", marginRight: "),t("span",{class:"token punctuation"},"'"),n("10px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Compared before yesterday"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("#67C23A"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("arrow-up"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
            `),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" inline-block"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(`
            `),t("span",{class:"token attr-name"},":value-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ fontSize: "),t("span",{class:"token punctuation"},"'"),n("15px"),t("span",{class:"token punctuation"},"'"),n(", color: "),t("span",{class:"token punctuation"},"'"),n("#67C23A"),t("span",{class:"token punctuation"},"'"),n(", letterSpacing: "),t("span",{class:"token punctuation"},"'"),n("2px"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("6669"),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},"animation"),n(`
            `),t("span",{class:"token attr-name"},"group-separator"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(","),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token attr-name"},":animation-duration"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5000"),t("span",{class:"token punctuation"},'"')]),n(`
          `),t("span",{class:"token punctuation"},"/>")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),j=t("h3",{id:"use-in-card",tabindex:"-1"},[n("Use in card "),t("a",{class:"header-anchor",href:"#use-in-card","aria-hidden":"true"},"#")],-1),H=t("p",null,"Display statistics in cards.",-1),I=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-row")]),n(),t("span",{class:"token attr-name"},":gutter"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("16"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-col")]),n(),t("span",{class:"token attr-name"},":span"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("12"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(`
          `),t("span",{class:"token attr-name"},":value-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ color: "),t("span",{class:"token punctuation"},"'"),n("#fba"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(`
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
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-statistic")]),n(),t("span",{class:"token attr-name"},":value-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ color: "),t("span",{class:"token punctuation"},"'"),n("#abf"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Decline Rate"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("38.3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"suffix"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("%"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#prefix"),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-icon")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("bold"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-statistic")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-card")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-col")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-row")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),J=N('<h3 id="d-statistic" tabindex="-1">d-statistic <a class="header-anchor" href="#d-statistic" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">parameter</th><th style="text-align:center;">type</th><th style="text-align:center;">default</th><th style="text-align:center;">introduce</th></tr></thead><tbody><tr><td style="text-align:center;">title</td><td style="text-align:center;"><code>string | v-slot</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Title of value</td></tr><tr><td style="text-align:center;">extra</td><td style="text-align:center;"><code>string | v-slot</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Extra content</td></tr><tr><td style="text-align:center;">value</td><td style="text-align:center;"><code>number | string</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Value content</td></tr><tr><td style="text-align:center;">group-separator</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">,</td><td style="text-align:center;">Set group-separator</td></tr><tr><td style="text-align:center;">precision</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Set numeric precision</td></tr><tr><td style="text-align:center;">suffix</td><td style="text-align:center;"><code>string | v-slot</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Sets the suffix of the value</td></tr><tr><td style="text-align:center;">prefix</td><td style="text-align:center;"><code>string | v-slot</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Sets the prefix of the value</td></tr><tr><td style="text-align:center;">content-style</td><td style="text-align:center;"><code>style</code></td><td style="text-align:center;">-</td><td style="text-align:center;">Content style</td></tr><tr><td style="text-align:center;">animation-duration</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">2000</td><td style="text-align:center;">Animation duration</td></tr><tr><td style="text-align:center;">value-from</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">0</td><td style="text-align:center;">Animation initial value</td></tr><tr><td style="text-align:center;">animation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Turn on animation</td></tr><tr><td style="text-align:center;">start</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Start animation</td></tr></tbody></table>',2);function K(e,s,a,o,i,k){const g=y("render-demo-0"),p=y("demo"),m=y("render-demo-1"),c=y("render-demo-2"),l=y("render-demo-3");return A(),z("div",null,[W,r(p,{sourceCode:`<template>
  <d-row>
    <d-col :span="12">
      <d-statistic
        title="Users Sales"
        group-separator=","
        :value="5201314">
      </d-statistic>
    </d-col>
    <d-col :span="12">
      <d-statistic
        title="Account Weekly Sales (CNY)"
        group-separator="."
        :value="999999">
      </d-statistic>
    </d-col>
  </d-row>
</template>
`},{highlight:d(()=>[D]),default:d(()=>[r(g)]),_:1}),F,G,r(p,{sourceCode:`<template>
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
`},{highlight:d(()=>[T]),default:d(()=>[r(m)]),_:1}),$,Y,r(p,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-statistic
        :value="336969"
        style="margin-right: 50px"
        group-separator=","
        :value-style="{ fontWeight: 'bold', fontSize: '30px' }"
        animation
      >
        <template #title>
          <span :style="{marginRight: '10px' }">Number of articles read</span>
          <d-icon name="help" />
        </template>
        <template #extra>
          <span :style="{ fontSize: '13px', marginRight: '10px' }">Compared before yesterday</span>
          <d-icon color="#F56C6C" name="arrow-down" />
          <d-statistic
            style="display: inline-block;"
            group-separator=","
            :value-style="{ fontSize: '15px', color: '#F56C6C', letterSpacing: '2px' }"
            value="1399"
            animation
          />
        </template>
      </d-statistic>
    </d-col>
    <d-col :span="12">
      <d-statistic
        :value="5565566"
        style="margin-right: 50px"
        group-separator=","
        :value-style="{ fontWeight: 'bold', fontSize: '30px' }"
        animation
        :animation-duration="5000"
      >
        <template #title>
          <span :style="{marginRight: '10px' }">Number of article likes</span>
          <d-icon name="help" />
        </template>
        <template #extra>
          <span :style="{ fontSize: '13px', marginRight: '10px' }">Compared before yesterday</span>
          <d-icon color="#67C23A" name="arrow-up" />
          <d-statistic
            style="display: inline-block;"
            :value-style="{ fontSize: '15px', color: '#67C23A', letterSpacing: '2px' }"
            value="6669"
            animation
            group-separator=","
            :animation-duration="5000"
          />
        </template>
      </d-statistic>
    </d-col>
  </d-row>
</template>
`},{highlight:d(()=>[P]),default:d(()=>[r(c)]),_:1}),j,H,r(p,{sourceCode:`<template>
  <d-row :gutter="16">
    <d-col :span="12">
      <d-card>
        <d-statistic
          :value-style="{ color: '#fba' }"
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
        <d-statistic :value-style="{ color: '#abf' }" title="Decline Rate" :value="38.3" suffix="%">
          <template #prefix>
            <d-icon name="bold" />
          </template>
        </d-statistic>
      </d-card>
    </d-col>
  </d-row>
</template>
`},{highlight:d(()=>[I]),default:d(()=>[r(l)]),_:1}),J])}var X=V(U,[["render",K]]);export{Q as __pageData,X as default};
