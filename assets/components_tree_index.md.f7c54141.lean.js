var Z=Object.defineProperty;var _=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var E=(e,t,s)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,L=(e,t)=>{for(var s in t||(t={}))q.call(t,s)&&E(e,s,t[s]);if(_)for(var s of _(t))V.call(t,s)&&E(e,s,t[s]);return e};import{_ as T,V as k,r as m,c as S,a as d,w as c,b as F,d as n,e as a,o as I}from"./app.74859d28.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:r}=k;function i(o,h){const u=e("d-new-tree");return s(),r("div",null,[t(u,{data:o.data},null,8,["data"])])}const{defineComponent:g,ref:l}=k,p=g({setup(){return{data:l([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}}});return L({render:i},p)}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:r}=k;function i(o,h){const u=e("d-new-tree");return s(),r("div",null,[t(u,{data:o.data,check:""},null,8,["data"])])}const{defineComponent:g,ref:l}=k,p=g({setup(){return{data:l([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}}});return L({render:i},p)}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:r}=k;function i(o,h){const u=e("d-new-tree");return s(),r("div",null,[t(u,{data:o.data,check:""},null,8,["data"])])}const{defineComponent:g,ref:l}=k,p=g({setup(){return{data:l([{label:"Parent node 1",expanded:!0,children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2",checked:!0}]},{label:"Leaf node 2",selected:!0}])}}});return L({render:i},p)}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:r}=k;function i(o,h){const u=e("d-new-tree");return s(),r("div",null,[t(u,{data:o.data,check:""},null,8,["data"])])}const{defineComponent:g,ref:l}=k,p=g({setup(){return{data:l([{label:"Parent node 1",expanded:!0,children:[{label:"Parent node 1-1",disableToggle:!0,disableSelect:!0,disableCheck:!0,children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2",disableCheck:!0}]},{label:"Leaf node 2",disableSelect:!0}])}}});return L({render:i},p)}(),"render-demo-4":function(){const{createElementVNode:e,openBlock:t,createElementBlock:s,toDisplayString:r,createTextVNode:i,createCommentVNode:g,normalizeStyle:l,resolveComponent:p,withCtx:o,createVNode:h}=k,u={style:{"margin-right":"8px"},viewBox:"0 0 16 16",width:"16",height:"16"},y=["d"],C={key:0,class:"devui-tree-node__indent"},B=["onClick"],v=[e("path",{d:"M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z",fill:"#8a8e99"},null,-1)];function x(b,on){const P=p("d-new-tree");return t(),s("div",null,[h(P,{data:b.data},{content:o(({nodeData:f})=>[(t(),s("svg",u,[e("path",{d:`${f.isLeaf?"M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z":f.expanded?"M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z":"M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z"}`,"stroke-width":"1",fill:"#8a8e99"},null,8,y)])),i(" "+r(f.label),1)]),icon:o(({nodeData:f,toggleNode:N})=>[f.isLeaf?(t(),s("span",C)):(t(),s("span",{key:1,onClick:M=>{M.stopPropagation(),N(f)}},[(t(),s("svg",{style:l({transform:f.expanded?"rotate(90deg)":"",marginLeft:"-2.5px",marginRight:"14.5px",cursor:"pointer"}),viewBox:"0 0 1024 1024",width:"12",height:"12"},v,4))],8,B))]),_:1},8,["data"])])}const{defineComponent:w,ref:D}=k,A=w({setup(){return{data:D([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}}});return L({render:x},A)}()}},ln='{"title":"Tree \u6811","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u53EF\u52FE\u9009","slug":"\u53EF\u52FE\u9009"},{"level":3,"title":"\u9ED8\u8BA4\u72B6\u6001","slug":"\u9ED8\u8BA4\u72B6\u6001"},{"level":3,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u56FE\u6807","slug":"\u81EA\u5B9A\u4E49\u56FE\u6807"},{"level":3,"title":"Tree \u53C2\u6570","slug":"tree-\u53C2\u6570"},{"level":3,"title":"Tree \u63D2\u69FD","slug":"tree-\u63D2\u69FD"},{"level":3,"title":"TreeNode \u53C2\u6570","slug":"treenode-\u53C2\u6570"},{"level":3,"title":"\u7C7B\u578B","slug":"\u7C7B\u578B"}],"relativePath":"components/tree/index.md","lastUpdated":1649728324797}',j=F('<h1 id="tree-\u6811" tabindex="-1">Tree \u6811 <a class="header-anchor" href="#tree-\u6811" aria-hidden="true">#</a></h1><p>\u4E00\u79CD\u5448\u73B0\u5D4C\u5957\u7ED3\u6784\u7684\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528\u6811\u7EC4\u4EF6\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00/\u6536\u8D77\u3001\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),R=n("div",null,"\u5C55\u793A\u5D4C\u5957\u6811\u5F62\u7ED3\u6784\u7684\u5448\u73B0\u3001\u8FDE\u63A5\u7EBF\u3001\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u7B49\u529F\u80FD\u3002",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-new-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-new-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),a(),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),U=n("h3",{id:"\u53EF\u52FE\u9009",tabindex:"-1"},[a("\u53EF\u52FE\u9009 "),n("a",{class:"header-anchor",href:"#\u53EF\u52FE\u9009","aria-hidden":"true"},"#")],-1),G=n("div",null,[a("\u901A\u8FC7"),n("code",null,"check"),a("\u5F00\u542F\u52FE\u9009\u529F\u80FD\u3002")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-new-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"check"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-new-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),a(),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),J=n("h3",{id:"\u9ED8\u8BA4\u72B6\u6001",tabindex:"-1"},[a("\u9ED8\u8BA4\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u9ED8\u8BA4\u72B6\u6001","aria-hidden":"true"},"#")],-1),K=n("div",null,[a("\u901A\u8FC7"),n("code",null,"expanded"),a("/"),n("code",null,"selected"),a("/"),n("code",null,"checked"),a("\u5206\u522B\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u3001\u52FE\u9009\u72B6\u6001\u3002")],-1),O=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-new-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"check"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-new-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"checked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"selected"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Q=n("h3",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[a("\u7981\u7528\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#")],-1),W=n("div",null,[a("\u901A\u8FC7"),n("code",null,"disableToggle"),a("/"),n("code",null,"disableSelect"),a("/"),n("code",null,"disableCheck"),a("\u5206\u522B\u7981\u7528\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u3001\u52FE\u9009\u72B6\u6001\u3002")],-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-new-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"check"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-new-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"disableToggle"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"disableSelect"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"disableCheck"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"disableCheck"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
          `),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disableSelect"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=n("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u56FE\u6807 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u56FE\u6807","aria-hidden":"true"},"#")],-1),nn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"content"),a("\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9\uFF0C\u6BD4\u5982\u5728\u8282\u70B9\u5185\u5BB9\u524D\u9762\u589E\u52A0\u4E00\u4E2A\u56FE\u6807\uFF1B\u901A\u8FC7"),n("code",null,"icon"),a("\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6536\u8D77\u7684\u56FE\u6807\u3002")],-1),an=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-new-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{nodeData}"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 8px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 16 16"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(),n("span",{class:"token attr-name"},":d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`${\n        nodeData.isLeaf\n        ? "),n("span",{class:"token punctuation"},"'"),a("M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z"),n("span",{class:"token punctuation"},"'"),a(`
        : nodeData.expanded
          ? `),n("span",{class:"token punctuation"},"'"),a("M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z"),n("span",{class:"token punctuation"},"'"),a(`
          : `),n("span",{class:"token punctuation"},"'"),a("M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z"),n("span",{class:"token punctuation"},"'"),a("\n      }`"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"stroke-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#8a8e99"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("path")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
      {{nodeData.label}}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{nodeData, toggleNode}"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nodeData.isLeaf"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("devui-tree-node__indent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-else"),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`(event) => {
          event.stopPropagation();
          toggleNode(nodeData);
        }`),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ transform: nodeData.expanded ? "),n("span",{class:"token punctuation"},"'"),a("rotate(90deg)"),n("span",{class:"token punctuation"},"'"),a(": "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),a(", marginLeft: "),n("span",{class:"token punctuation"},"'"),a("-2.5px"),n("span",{class:"token punctuation"},"'"),a(", marginRight: "),n("span",{class:"token punctuation"},"'"),a("14.5px"),n("span",{class:"token punctuation"},"'"),a(", cursor: "),n("span",{class:"token punctuation"},"'"),a("pointer"),n("span",{class:"token punctuation"},"'"),a(" }"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 1024 1024"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#8a8e99"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("path")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-new-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),a(),n("span",{class:"token punctuation"},"}"),a(`
        `),n("span",{class:"token punctuation"},"]"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),tn=F(`<h3 id="tree-\u53C2\u6570" tabindex="-1">Tree \u53C2\u6570 <a class="header-anchor" href="#tree-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><a href="#itreenode">ITreeNode[]</a></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6811\u5F62\u7ED3\u6784\u6570\u636E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">check</td><td style="text-align:left;"><a href="#icheck">ICheck</a></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u52FE\u9009\u529F\u80FD</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr></tbody></table><h3 id="tree-\u63D2\u69FD" tabindex="-1">Tree \u63D2\u69FD <a class="header-anchor" href="#tree-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u8282\u70B9</td></tr><tr><td style="text-align:left;">content</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6536\u8D77\u6309\u94AE</td></tr></tbody></table><h3 id="treenode-\u53C2\u6570" tabindex="-1">TreeNode \u53C2\u6570 <a class="header-anchor" href="#treenode-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><a href="#itreenode">ITreeNode</a></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8282\u70B9\u6570\u636E</td></tr><tr><td style="text-align:left;">check</td><td style="text-align:left;"><a href="#icheck">ICheck</a></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u52FE\u9009\u529F\u80FD</td></tr></tbody></table><h3 id="\u7C7B\u578B" tabindex="-1">\u7C7B\u578B <a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a></h3><h4 id="itreenode" tabindex="-1">ITreeNode <a class="header-anchor" href="#itreenode" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
  label<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  children<span class="token operator">?</span><span class="token operator">:</span> ITreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  selected<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  checked<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  expanded<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>

  disableSelect<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  disableCheck<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  disableToggle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="icheck" tabindex="-1">ICheck <a class="header-anchor" href="#icheck" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ICheck</span> <span class="token operator">=</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token string">&#39;upward&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;downward&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;both&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,11);function sn(e,t,s,r,i,g){const l=m("render-demo-0"),p=m("demo"),o=m("render-demo-1"),h=m("render-demo-2"),u=m("render-demo-3"),y=m("render-demo-4");return I(),S("div",null,[j,d(p,{sourceCode:`<template>
  <d-new-tree :data="data"></d-new-tree>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'Parent node 1',
        children: [
          {
            label: 'Parent node 1-1',
            children: [
              { label: 'Leaf node 1-1-1' }
            ]
          },
          { label: 'Leaf node 1-2' }
        ]
      },
      { label: 'Leaf node 2' }
    ]);

    return {
      data
    }
  }
})
<\/script>
`},{description:c(()=>[R]),highlight:c(()=>[z]),default:c(()=>[d(l)]),_:1}),U,d(p,{sourceCode:`<template>
  <d-new-tree :data="data" check></d-new-tree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'Parent node 1',
        children: [
          {
            label: 'Parent node 1-1',
            children: [
              { label: 'Leaf node 1-1-1' }
            ]
          },
          { label: 'Leaf node 1-2' }
        ]
      },
      { label: 'Leaf node 2' }
    ]);
    
    return {
      data
    }
  }
})
<\/script>
`},{description:c(()=>[G]),highlight:c(()=>[H]),default:c(()=>[d(o)]),_:1}),J,d(p,{sourceCode:`<template>
  <d-new-tree :data="data" check></d-new-tree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'Parent node 1',
        expanded: true,
        children: [
          {
            label: 'Parent node 1-1',
            children: [
              { label: 'Leaf node 1-1-1' }
            ]
          },
          {
            label: 'Leaf node 1-2',
            checked: true
          }
        ]
      },
      {
        label: 'Leaf node 2',
        selected: true
      }
    ]);
    
    return {
      data
    }
  }
})
<\/script>
`},{description:c(()=>[K]),highlight:c(()=>[O]),default:c(()=>[d(h)]),_:1}),Q,d(p,{sourceCode:`<template>
  <d-new-tree :data="data" check></d-new-tree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'Parent node 1',
        expanded: true,
        children: [
          {
            label: 'Parent node 1-1',
            disableToggle: true,
            disableSelect: true,
            disableCheck: true,
            children: [
              { label: 'Leaf node 1-1-1' }
            ]
          },
          {
            label: 'Leaf node 1-2',
            disableCheck: true
          }
        ]
      },
      {
        label: 'Leaf node 2',
        disableSelect: true
      }
    ]);
    
    return {
      data,
    }
  }
})
<\/script>
`},{description:c(()=>[W]),highlight:c(()=>[X]),default:c(()=>[d(u)]),_:1}),Y,d(p,{sourceCode:`<template>
  <d-new-tree :data="data">
    <template #content="{nodeData}">
      <svg style="margin-right: 8px" viewBox="0 0 16 16" width="16" height="16"><path :d="\`\${
        nodeData.isLeaf
        ? 'M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z'
        : nodeData.expanded
          ? 'M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z'
          : 'M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z'
      }\`" stroke-width="1" fill="#8a8e99"></path></svg>
      {{nodeData.label}}
    </template>
    <template #icon="{nodeData, toggleNode}">
      <span v-if="nodeData.isLeaf" class="devui-tree-node__indent"></span>
      <span v-else @click="(event) => {
          event.stopPropagation();
          toggleNode(nodeData);
        }"
      >
        <svg :style="{ transform: nodeData.expanded ? 'rotate(90deg)': '', marginLeft: '-2.5px', marginRight: '14.5px', cursor: 'pointer' }" viewBox="0 0 1024 1024" width="12" height="12"><path d="M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z" fill="#8a8e99"></path></svg>
      </span>
    </template>
  </d-new-tree>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'Parent node 1',
        children: [
          {
            label: 'Parent node 1-1',
            children: [
              { label: 'Leaf node 1-1-1' }
            ]
          },
          { label: 'Leaf node 1-2' }
        ]
      },
      { label: 'Leaf node 2' }
    ]);

    return {
      data,
    }
  }
})
<\/script>
`},{description:c(()=>[nn]),highlight:c(()=>[an]),default:c(()=>[d(y)]),_:1}),tn])}var un=T($,[["render",sn]]);export{ln as __pageData,un as default};
