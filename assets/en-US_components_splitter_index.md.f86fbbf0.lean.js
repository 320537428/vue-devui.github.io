var D=Object.defineProperty;var w=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var B=(a,o,s)=>o in a?D(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,_=(a,o)=>{for(var s in o||(o={}))q.call(o,s)&&B(a,s,o[s]);if(w)for(var s of w(o))V.call(o,s)&&B(a,s,o[s]);return a};import{_ as E,V as f,r as C,c as P,a as y,w as z,d as n,e as t,b as N,o as T}from"./app.a2cc62c7.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:a,resolveComponent:o,withCtx:s,createVNode:e,openBlock:m,createElementBlock:v}=f,d=a("div",{class:"pane-content"},[a("h2",null,"Left"),a("div",null,"width: 30%, min-width: 20%")],-1),k=a("div",{class:"pane-content"},[a("h2",null,"Right"),a("div",null,"Content")],-1);function g(l,i){const u=o("d-splitter-pane"),p=o("d-splitter");return m(),v("div",null,[a("section",null,[e(p,{class:"splitter-border",orientation:l.orientation,splitBarSize:l.splitBarSize,style:{height:"300px"}},{DSplitterPane:s(()=>[e(u,{collapseDirection:"before",size:l.size,minSize:l.minSize,collapsible:!0,onSizeChange:l.sizeChange,onCollapsedChange:l.collapsedChange},{default:s(()=>[d]),_:1},8,["size","minSize","onSizeChange","onCollapsedChange"]),e(u,{minSize:"15%"},{default:s(()=>[k]),_:1})]),_:1},8,["orientation","splitBarSize"])])])}const{defineComponent:h,ref:r}=f,x=h({name:"DSplitterDemoBasic",setup(){const l=r("horizontal"),i="2px",u=r("30%"),p=r("20%"),c=r("60%");return{orientation:l,splitBarSize:i,size:u,minSize:p,maxSize:c,sizeChange:S=>{console.log(S)},collapsedChange:S=>{console.log(S)}}}});return _({render:g},x)}(),"render-demo-1":function(){const{createElementVNode:a,resolveComponent:o,withCtx:s,createVNode:e,openBlock:m,createElementBlock:v}=f,d=a("div",{class:"pane-content"},[a("h2",null,"Top"),a("div",null,"height: 200px")],-1),k=a("div",{class:"pane-content"},[a("h2",null,"Center"),a("div",null,"height: auto")],-1),g=a("div",{class:"pane-content"},[a("h2",null,"Bottom"),a("div",null,"height: 150px, resizable: false")],-1);function h(i,u){const p=o("d-splitter-pane"),c=o("d-splitter");return m(),v("div",null,[a("section",null,[e(c,{style:{height:"500px"},class:"splitter-border",orientation:"vertical",disableBarSize:i.disableBarSize},{DSplitterPane:s(()=>[e(p,{size:"200px",minSize:"150px",collapsed:i.collapsed,collapsible:!0,onSizeChange:i.sizeChange},{default:s(()=>[d]),_:1},8,["collapsed","onSizeChange"]),e(p,{style:{overflow:"hidden"}},{default:s(()=>[k]),_:1}),e(p,{size:"150px",resizable:!1,collapsible:!0},{default:s(()=>[g]),_:1})]),_:1},8,["disableBarSize"])])])}const{defineComponent:r,ref:x}=f,l=r({name:"DSplitterDemoVertical",setup(){const i=x(!0);return{disableBarSize:"2px",collapsed:i,sizeChange:c=>{console.log(c)}}}});return _({render:h},l)}(),"render-demo-2":function(){const{createElementVNode:a,resolveComponent:o,withCtx:s,createVNode:e,openBlock:m,createElementBlock:v}=f,d=a("div",{class:"pane-content"},[a("h2",null,"Left"),a("div",null,"width: 30%, min-width: 20%")],-1),k=a("div",{class:"pane-content"},[a("h2",null,"Top"),a("div",null,"height: 50%")],-1),g=a("div",{class:"pane-content"},[a("h2",null,"Bottom"),a("div",null,"height: auto")],-1),h=a("div",{class:"pane-content"},[a("h2",null,"Bottom"),a("div",null,"height: auto")],-1);function r(u,p){const c=o("d-splitter-pane"),b=o("d-splitter");return m(),v("div",null,[a("section",null,[e(b,{class:"splitter-border",style:{height:"600px"},orientation:"vertical"},{DSplitterPane:s(()=>[e(c,{size:"400px",minSize:"100px",sizeChange:u.sizeChange},{default:s(()=>[e(b,{style:{height:"100%"}},{DSplitterPane:s(()=>[e(c,{size:"30%",minSize:"20%",sizeChange:u.sizeChange},{default:s(()=>[d]),_:1},8,["sizeChange"]),e(c,{minSize:"15%"},{default:s(()=>[e(b,{style:{height:"100%"},orientation:"vertical"},{DSplitterPane:s(()=>[e(c,{size:"50%",style:{overflow:"hidden"}},{default:s(()=>[k]),_:1}),e(c,{style:{overflow:"hidden"}},{default:s(()=>[g]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["sizeChange"]),e(c,{style:{overflow:"hidden"}},{default:s(()=>[h]),_:1})]),_:1})])])}const{defineComponent:x,ref:l}=f,i=x({name:"DSplitterDemoMulti",setup(){return{sizeChange:p=>{console.log(p)}}}});return _({render:r},i)}(),"render-demo-3":function(){const{createElementVNode:a,resolveComponent:o,withCtx:s,createVNode:e,openBlock:m,createElementBlock:v}=f,d=a("div",{class:"pane-content"},[a("h2",null,"Left"),a("div",null,"width: 30%, min-width: 20%")],-1),k=a("div",{class:"pane-content"},[a("h2",null,"Center"),a("div",null,"Specify the folding and retracting direction to fold forward")],-1),g=a("div",{class:"pane-content"},[a("h2",null,"Right"),a("div",null,"Content")],-1);function h(i,u){const p=o("d-splitter-pane"),c=o("d-splitter");return m(),v("div",null,[a("section",null,[e(c,{class:"splitter-border",style:{height:"300px"}},{DSplitterPane:s(()=>[e(p,{size:"30%",minSize:"20%",sizeChange:i.sizeChange},{default:s(()=>[d]),_:1},8,["sizeChange"]),e(p,{minSize:"15%",collapsible:!0,collapseDirection:"before"},{default:s(()=>[k]),_:1}),e(p,{minSize:"15%"},{default:s(()=>[g]),_:1})]),_:1})])])}const{defineComponent:r,ref:x}=f,l=r({name:"DSplitterDemoDirection",setup(){return{sizeChange:u=>{console.log(u)}}}});return _({render:h},l)}()}},Z='{"title":"Splitter","description":"","frontmatter":{},"headers":[{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Vertical Layout Usage","slug":"vertical-layout-usage"},{"level":3,"title":"Combination Layout Usage","slug":"combination-layout-usage"},{"level":3,"title":"Specifies the folding direction","slug":"specifies-the-folding-direction"},{"level":3,"title":"Collapse and collapse menu \u3010TODO\u3011","slug":"collapse-and-collapse-menu-\u3010todo\u3011"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"d-splitter parameters","slug":"d-splitter-parameters"},{"level":3,"title":"d-splitter-pane parameters","slug":"d-splitter-pane-parameters"},{"level":3,"title":"d-splitter-pane event","slug":"d-splitter-pane-event"}],"relativePath":"en-US/components/splitter/index.md","lastUpdated":1650439126647}',L=n("h1",{id:"splitter",tabindex:"-1"},[t("Splitter "),n("a",{class:"header-anchor",href:"#splitter","aria-hidden":"true"},"#")],-1),U=n("p",null,"Split page.",-1),j=n("p",null,[n("strong",null,"When To Use")],-1),R=n("p",null,"When you want to dynamically adjust the size of different page layout areas.",-1),W=n("h3",{id:"basic-usage",tabindex:"-1"},[t("Basic Usage "),n("a",{class:"header-anchor",href:"#basic-usage","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("splitter-border"),n("span",{class:"token punctuation"},'"')]),t("  "),n("span",{class:"token attr-name"},":orientation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("orientation"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":splitBarSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("splitBarSize"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 300px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("DSplitterPane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"collapseDirection"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("before"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("minSize"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":collapsible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@sizeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sizeChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@collapsedChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("collapsedChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("width: 30%, min-width: 20%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("15%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("Content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"DSplitterDemoBasic"'),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" orientation "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"horizontal"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" splitBarSize "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'2px'"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token comment"},"// splitter pane input"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" size "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"30%"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" minSize "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"20%"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" maxSize "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"60%"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"sizeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"size"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"collapsedChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      orientation`),n("span",{class:"token punctuation"},","),t(`
      splitBarSize`),n("span",{class:"token punctuation"},","),t(`
      size`),n("span",{class:"token punctuation"},","),t(`
      minSize`),n("span",{class:"token punctuation"},","),t(`
      maxSize`),n("span",{class:"token punctuation"},","),t(`
      sizeChange`),n("span",{class:"token punctuation"},","),t(`
      collapsedChange
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(` 
`),n("span",{class:"token selector"},".pane-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 0 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".splitter-border"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px solid #dfe1e6"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),I=n("h3",{id:"vertical-layout-usage",tabindex:"-1"},[t("Vertical Layout Usage "),n("a",{class:"header-anchor",href:"#vertical-layout-usage","aria-hidden":"true"},"#")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 500px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("splitter-border"),n("span",{class:"token punctuation"},'"')]),t("  "),n("span",{class:"token attr-name"},"orientation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disableBarSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disableBarSize"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("DSplitterPane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("200px"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("150px"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":collapsed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("collapsed"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":collapsible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@sizeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sizeChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("height: 200px"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("height: auto"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("150px"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":resizable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":collapsible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("height: 150px, resizable: false"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"DSplitterDemoVertical"'),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" collapsed "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" disableBarSize "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'2px'"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"sizeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"size"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      disableBarSize`),n("span",{class:"token punctuation"},","),t(`
      collapsed`),n("span",{class:"token punctuation"},","),t(`
      sizeChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(` 
`),n("span",{class:"token selector"},".pane-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 0 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".splitter-border"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px solid #dfe1e6"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),M=n("h3",{id:"combination-layout-usage",tabindex:"-1"},[t("Combination Layout Usage "),n("a",{class:"header-anchor",href:"#combination-layout-usage","aria-hidden":"true"},"#")],-1),A=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("splitter-border"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 600px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"orientation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("DSplitterPane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("400px"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100px"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":sizeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sizeChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("DSplitterPane")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":sizeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sizeChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
                  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("width: 30%, min-width: 20%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("15%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"orientation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("DSplitterPane")]),n("span",{class:"token punctuation"},">")]),t(`
                      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
                          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("height: 50%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
                      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
                          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("height: auto"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
                   `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("height: auto"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"DSplitterDemoMulti"'),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"sizeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"size"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      sizeChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(` 
`),n("span",{class:"token selector"},".pane-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 0 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".splitter-border"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px solid #dfe1e6"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),F=n("h3",{id:"specifies-the-folding-direction",tabindex:"-1"},[t("Specifies the folding direction "),n("a",{class:"header-anchor",href:"#specifies-the-folding-direction","aria-hidden":"true"},"#")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("splitter-border"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 300px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("DSplitterPane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("30%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":sizeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sizeChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("width: 30%, min-width: 20%"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("15%"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":collapsible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"collapseDirection"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("before"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Center"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("Specify the folding and retracting direction to fold forward"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-splitter-pane")]),t(),n("span",{class:"token attr-name"},"minSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("15%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("pane-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),n("span",{class:"token punctuation"},">")]),t("Right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("Content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter-pane")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-splitter")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("section")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"DSplitterDemoDirection"'),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"sizeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"size"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      sizeChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(` 
`),n("span",{class:"token selector"},".pane-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 0 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".splitter-border"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px solid #dfe1e6"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=N('<h3 id="collapse-and-collapse-menu-\u3010todo\u3011" tabindex="-1">Collapse and collapse menu \u3010TODO\u3011 <a class="header-anchor" href="#collapse-and-collapse-menu-\u3010todo\u3011" aria-hidden="true">#</a></h3><h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><h3 id="d-splitter-parameters" tabindex="-1">d-splitter parameters <a class="header-anchor" href="#d-splitter-parameters" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:left;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">orientation</td><td style="text-align:center;"><code>&#39;vertical&#39; | &#39;horizontal&#39;</code></td><td style="text-align:center;">&#39;horizontal&#39;</td><td style="text-align:center;">Optional. It specifies the split direction of the splitter. The value can be&#39;vertical&#39;|&#39;horizontal&#39;</td><td style="text-align:left;"><a href="#basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">splitBarSize</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;2px&#39;</td><td style="text-align:center;">Optional. The default value is 2px.</td><td style="text-align:left;"><a href="#basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">disabledBarSize</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;1px&#39;</td><td style="text-align:center;">Optional. This parameter is valid when the unadjustable width is set for the panel.</td><td style="text-align:left;"><a href="#vertical-layout-usage">Vertical layout usage</a></td></tr><tr><td style="text-align:center;">showCollapseButton</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional. Whether to display the collapse/expand button</td><td style="text-align:left;"><a href="#collapse-and-collapse-menu-todo">Collapse and collapse menu</a></td></tr></tbody></table><h3 id="d-splitter-pane-parameters" tabindex="-1">d-splitter-pane parameters <a class="header-anchor" href="#d-splitter-pane-parameters" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:center;">Description</th><th style="text-align:left;">Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">size</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Specifies the width of the pane and sets the pixel value or percentage.</td><td style="text-align:left;"><a href="#basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">minSize</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. Specifies the minimum width of the pane and sets the pixel value or percentage.</td><td style="text-align:left;"><a href="#basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">maxSize</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:center;">Optional. This parameter specifies the maximum width of the pane and sets the pixel value or percentage.</td><td style="text-align:left;"><a href="#basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">resizable</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">Optional. Specifies whether the size of a pane can be adjusted, which affects adjacent panes.</td><td style="text-align:left;"><a href="#vertical-layout-usage">Vertical layout usage</a></td></tr><tr><td style="text-align:center;">collapsible</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Specifies whether the pane can be collapsed or collapsed.</td><td style="text-align:left;"><a href="#basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">collapsed</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">Optional. Specifies whether to collapse the pane during initialization. This parameter is used together with <code>collapsible</code>.</td><td style="text-align:left;"><a href="#vertical-layout-usage">Vertical layout usage</a></td></tr><tr><td style="text-align:center;">collapseDirection</td><td style="text-align:center;"><code>&#39;before&#39; | &#39;after&#39; | &#39;both&#39;</code></td><td style="text-align:center;">&#39;both&#39;</td><td style="text-align:center;">Optional. This parameter specifies the folding direction of a non-edge pane. This parameter is used together with <code>collapsible</code>.</td><td style="text-align:left;"><a href="#collapse-and-collapse-menu-todo">Collapse and collapse menu</a></td></tr></tbody></table><h3 id="d-splitter-pane-event" tabindex="-1">d-splitter-pane event <a class="header-anchor" href="#d-splitter-pane-event" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Event</th><th style="text-align:center;">Type</th><th style="text-align:center;">Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td style="text-align:center;">sizeChange</td><td style="text-align:center;"><code>EventEmitter&lt;string&gt;</code></td><td style="text-align:center;">When the size changes, the changed value (pixel value or percentage) is returned.</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td style="text-align:center;">collapsedChange</td><td style="text-align:center;"><code>EventEmitter&lt;boolean&gt;</code></td><td style="text-align:center;">Whether the current pane is collapsed or expanded.</td><td><a href="#basic-usage">Basic usage</a></td></tr></tbody></table>',8);function K(a,o,s,e,m,v){const d=C("render-demo-0"),k=C("demo"),g=C("render-demo-1"),h=C("render-demo-2"),r=C("render-demo-3");return T(),P("div",null,[L,U,j,R,W,y(k,{sourceCode:`<template>
  <section>
    <d-splitter class="splitter-border"  :orientation="orientation" :splitBarSize="splitBarSize" style="height: 300px">
      <template v-slot:DSplitterPane>
        <d-splitter-pane collapseDirection="before" :size="size" :minSize="minSize" :collapsible="true" @sizeChange="sizeChange" @collapsedChange="collapsedChange">
          <div class="pane-content">
            <h2>Left</h2>
            <div>width: 30%, min-width: 20%</div>
          </div>
        </d-splitter-pane>
        <d-splitter-pane minSize="15%">
          <div class="pane-content">
            <h2>Right</h2>
            <div>Content</div>
          </div>
        </d-splitter-pane>
      </template>
    </d-splitter>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "DSplitterDemoBasic",
  setup() {
    const orientation = ref("horizontal");
    const splitBarSize = '2px';
    // splitter pane input
    const size = ref("30%");
    const minSize = ref("20%");
    const maxSize = ref("60%");
    const sizeChange = (size) => {
      console.log(size);
    }
    const collapsedChange = (event) => {
      console.log(event);
    }

    return {
      orientation,
      splitBarSize,
      size,
      minSize,
      maxSize,
      sizeChange,
      collapsedChange
    }
  },
})
<\/script>

<style> 
.pane-content {
  padding: 0 12px;
}

.splitter-border {
  border: 1px solid #dfe1e6;
}

</style>
`},{highlight:z(()=>[$]),default:z(()=>[y(d)]),_:1}),I,y(k,{sourceCode:`<template>
  <section>
    <d-splitter style="height: 500px" class="splitter-border"  orientation="vertical" :disableBarSize="disableBarSize" >
      <template v-slot:DSplitterPane>
        <d-splitter-pane size="200px" minSize="150px" :collapsed="collapsed" :collapsible="true" @sizeChange="sizeChange">
          <div class="pane-content">
            <h2>Top</h2>
            <div>height: 200px</div>
          </div>
        </d-splitter-pane>
        <d-splitter-pane style="overflow: hidden">
          <div class="pane-content">
            <h2>Center</h2>
            <div>height: auto</div>
          </div>
        </d-splitter-pane>
        <d-splitter-pane size="150px" :resizable="false" :collapsible="true">
          <div class="pane-content">
            <h2>Bottom</h2>
            <div>height: 150px, resizable: false</div>
          </div>
        </d-splitter-pane>
      </template>
    </d-splitter>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "DSplitterDemoVertical",
  setup() {
    const collapsed = ref(true);
    const disableBarSize = '2px';

    const sizeChange = (size) => {
      console.log(size);
    }

    return {
      disableBarSize,
      collapsed,
      sizeChange,
    }
  },
})
<\/script>

<style> 
.pane-content {
  padding: 0 12px;
}

.splitter-border {
  border: 1px solid #dfe1e6;
}

</style>
`},{highlight:z(()=>[J]),default:z(()=>[y(g)]),_:1}),M,y(k,{sourceCode:`<template>
  <section>
    <d-splitter class="splitter-border" style="height: 600px" orientation="vertical">
      <template v-slot:DSplitterPane>
        <d-splitter-pane size="400px" minSize="100px" :sizeChange="sizeChange">
          <d-splitter style="height: 100%">
            <template v-slot:DSplitterPane>
              <d-splitter-pane size="30%" minSize="20%" :sizeChange="sizeChange">
                <div class="pane-content">
                  <h2>Left</h2>
                  <div>width: 30%, min-width: 20%</div>
                </div>
              </d-splitter-pane>
              <d-splitter-pane minSize="15%">
                <d-splitter style="height: 100%" orientation="vertical">
                    <template v-slot:DSplitterPane>
                      <d-splitter-pane size="50%" style="overflow: hidden">
                        <div class="pane-content">
                          <h2>Top</h2>
                          <div>height: 50%</div>
                        </div>
                      </d-splitter-pane>
                      <d-splitter-pane style="overflow: hidden">
                        <div class="pane-content">
                          <h2>Bottom</h2>
                          <div>height: auto</div>
                        </div>
                      </d-splitter-pane>
                   </template>
                </d-splitter>
              </d-splitter-pane>
            </template>
          </d-splitter>
        </d-splitter-pane>
        <d-splitter-pane style="overflow: hidden">
          <div class="pane-content">
            <h2>Bottom</h2>
            <div>height: auto</div>
          </div>
        </d-splitter-pane>
      </template>
    </d-splitter>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "DSplitterDemoMulti",
  setup() {

    const sizeChange = (size) => {
      console.log(size);
    }

    return {
      sizeChange,
    }
  },
})
<\/script>

<style> 
.pane-content {
  padding: 0 12px;
}

.splitter-border {
  border: 1px solid #dfe1e6;
}

</style>
`},{highlight:z(()=>[A]),default:z(()=>[y(h)]),_:1}),F,y(k,{sourceCode:`<template>
  <section>
    <d-splitter class="splitter-border" style="height: 300px">
      <template v-slot:DSplitterPane>
        <d-splitter-pane size="30%" minSize="20%" :sizeChange="sizeChange">
          <div class="pane-content">
            <h2>Left</h2>
            <div>width: 30%, min-width: 20%</div>
          </div>
        </d-splitter-pane>
        <d-splitter-pane minSize="15%" :collapsible="true" collapseDirection="before">
          <div class="pane-content">
            <h2>Center</h2>
            <div>Specify the folding and retracting direction to fold forward</div>
          </div>
        </d-splitter-pane>
        <d-splitter-pane minSize="15%">
          <div class="pane-content">
            <h2>Right</h2>
            <div>Content</div>
          </div>
        </d-splitter-pane>
      </template>
    </d-splitter>
  </section>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "DSplitterDemoDirection",
  setup() {

    const sizeChange = (size) => {
      console.log(size);
    }

    return {
      sizeChange,
    }
  },
})
<\/script>

<style> 
.pane-content {
  padding: 0 12px;
}

.splitter-border {
  border: 1px solid #dfe1e6;
}

</style>
`},{highlight:z(()=>[G]),default:z(()=>[y(r)]),_:1}),H])}var nn=E(O,[["render",K]]);export{Z as __pageData,nn as default};
