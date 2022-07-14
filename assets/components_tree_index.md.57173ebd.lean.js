var M=Object.defineProperty;var P=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var R=(e,t,s)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,B=(e,t)=>{for(var s in t||(t={}))Z.call(t,s)&&R(e,s,t[s]);if(P)for(var s of P(t))z.call(t,s)&&R(e,s,t[s]);return e};import{_ as j,V as y,r as x,c as I,a as f,w as u,b as T,d as n,e as a,o as $}from"./app.a2cc62c7.js";const K={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:i}=y;function h(r,p){const l=e("d-tree");return s(),i("div",null,[t(l,{data:r.data},null,8,["data"])])}const{defineComponent:d,ref:k}=y,o=d({setup(){return{data:k([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}}});return B({render:h},o)}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:i}=y;function h(r,p){const l=e("d-tree");return s(),i("div",null,[t(l,{data:r.data,onLazyLoad:r.lazyLoad},null,8,["data","onLazyLoad"])])}const{defineComponent:d,ref:k}=y,o=d({setup(){return{data:k([{label:"Parent node 1",children:[{label:"Parent node 1-1 - dynamic loading",isLeaf:!1},{label:"Leaf node 1-2"}]},{label:"Leaf node 2 - dynamic loading",isLeaf:!1}]),lazyLoad:(l,v)=>{setTimeout(()=>{v({treeItems:[{label:"child node 1",expanded:!0,children:[{label:"child node 1-1"},{label:"child node 1-2"}]},{label:"child node 2",children:[{label:"child node 2-1"}]}],node:l})},500)}}}});return B({render:h},o)}(),"render-demo-2":function(){const{createElementVNode:e,resolveComponent:t,createVNode:s,renderList:i,Fragment:h,openBlock:d,createElementBlock:k,toDisplayString:o,createTextVNode:r,withCtx:p,createBlock:l,createCommentVNode:v}=y,c={class:"flex flex-row",style:{height:"28px"}},g={class:"flex items-center mr-xl"},m=e("span",{class:"inline-block mr-xs"},"\u5F00\u542F\u52FE\u9009",-1);function F(b,D){const A=t("d-switch"),L=t("d-radio"),q=t("d-radio-group"),N=t("d-tree");return d(),k("div",null,[e("div",c,[e("label",g,[m,s(A,{modelValue:b.openCheck,"onUpdate:modelValue":D[0]||(D[0]=S=>b.openCheck=S)},null,8,["modelValue"])]),b.openCheck?(d(),l(q,{key:0,modelValue:b.currentStrategy,"onUpdate:modelValue":D[1]||(D[1]=S=>b.currentStrategy=S),direction:"row"},{default:p(()=>[(d(!0),k(h,null,i(b.checkStrategy,S=>(d(),l(L,{key:S,value:S},{default:p(()=>[r(o(S),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])):v("v-if",!0)]),s(N,{data:b.data,check:b.currentStrategy,onToggleChange:b.toggleChange,onCheckChange:b.checkChange,onSelectChange:b.selectChange,onNodeClick:b.nodeClick},null,8,["data","check","onToggleChange","onCheckChange","onSelectChange","onNodeClick"])])}const{defineComponent:E,ref:_,watch:C}=y,V=E({setup(){const b=_(!0),D=_(["both","downward","upward","none"]),A=_("both"),L=_([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"},{label:"Leaf node 1-1-2"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}]);return C(b,w=>{w===!1?A.value=!1:(A.value="both",L.value=[{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"},{label:"Leaf node 1-1-2"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}),{data:L,openCheck:b,checkStrategy:D,currentStrategy:A,toggleChange:w=>{console.log("toggleChange node:",w)},checkChange:w=>{console.log("checkChange node:",w)},selectChange:w=>{console.log("selectChange node:",w)},nodeClick:w=>{console.log("nodeClick node:",w)}}}});return B({render:F},V)}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:i}=y;function h(r,p){const l=e("d-tree");return s(),i("div",null,[t(l,{data:r.data,check:""},null,8,["data"])])}const{defineComponent:d,ref:k}=y,o=d({setup(){return{data:k([{label:"Parent node 1",expanded:!0,children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2",checked:!0}]},{label:"Leaf node 2",selected:!0}])}}});return B({render:h},o)}(),"render-demo-4":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:i}=y;function h(r,p){const l=e("d-tree");return s(),i("div",null,[t(l,{data:r.data,check:""},null,8,["data"])])}const{defineComponent:d,ref:k}=y,o=d({setup(){return{data:k([{label:"Parent node 1",expanded:!0,children:[{label:"Parent node 1-1",disableToggle:!0,disableSelect:!0,disableCheck:!0,children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2",disableCheck:!0}]},{label:"Leaf node 2",disableSelect:!0}])}}});return B({render:h},o)}(),"render-demo-5":function(){const{createElementVNode:e,openBlock:t,createElementBlock:s,toDisplayString:i,createTextVNode:h,createCommentVNode:d,normalizeStyle:k,resolveComponent:o,withCtx:r,createVNode:p}=y,l={style:{"margin-right":"8px"},viewBox:"0 0 16 16",width:"16",height:"16"},v=["d"],c={key:0,class:"devui-tree-node__indent"},g=["onClick"],F=[e("path",{d:"M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z",fill:"#8a8e99"},null,-1)];function E(b,D){const A=o("d-tree");return t(),s("div",null,[p(A,{data:b.data},{content:r(({nodeData:L})=>[(t(),s("svg",l,[e("path",{d:`${L.isLeaf?"M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z":L.expanded?"M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z":"M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z"}`,"stroke-width":"1",fill:"#8a8e99"},null,8,v)])),h(" "+i(L.label),1)]),icon:r(({nodeData:L,toggleNode:q})=>[L.isLeaf?(t(),s("span",c)):(t(),s("span",{key:1,onClick:N=>{N.stopPropagation(),q(L)}},[(t(),s("svg",{style:k({transform:L.expanded?"rotate(90deg)":"",marginLeft:"-2.5px",marginRight:"14.5px",cursor:"pointer"}),viewBox:"0 0 1024 1024",width:"12",height:"12"},F,4))],8,g))]),_:1},8,["data"])])}const{defineComponent:_,ref:C}=y,V=_({setup(){return{data:C([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}}});return B({render:E},V)}(),"render-demo-6":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:i}=y;function h(p,l){const v=e("d-tree");return s(),i("div",null,[t(v,{data:p.data,ref:"treeRef"},null,8,["data"])])}const{defineComponent:d,ref:k,onMounted:o}=y,r=d({setup(){const p=k(null),l=k([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Parent node 1-1-1",children:[{label:"Parent node 1-1-1-1"}]}]}]},{label:"Parent node 2",children:[{label:"Parent node 2-1",children:[{label:"Leaf node 2-1-1"},{label:"Leaf node 2-1-2"}]}]},{label:"Parent node 3",children:[{label:"Leaf node 3-1",children:[{label:"Leaf node 3-1-1",children:[{label:"Leaf node 3-1-1-1"}]}]},{label:"Leaf node 3-2"}]}]);return o(()=>{p.value.treeFactory.mergeTreeNodes(),p.value.treeFactory.expandAllNodes()}),{data:l,treeRef:p}}});return B({render:h},r)}(),"render-demo-7":function(){const{resolveComponent:e,createVNode:t,createTextVNode:s,withCtx:i,openBlock:h,createElementBlock:d}=y,k=s("Add"),o=s("Delete");function r(c,g){const m=e("d-tree"),F=e("d-button");return h(),d("div",null,[t(m,{data:c.data,ref:"treeRef",operate:"",onSelectChange:c.selectChange},null,8,["data","onSelectChange"]),t(F,{variant:"solid",size:"sm",onClick:c.addNode},{default:i(()=>[k]),_:1},8,["onClick"]),t(F,{size:"sm",class:"ml-xs",onClick:c.deleteNode},{default:i(()=>[o]),_:1},8,["onClick"])])}const{defineComponent:p,ref:l}=y,v=p({setup(){const c=l(),g=l(),m=l([{label:"Parent node 1",id:"node-1",children:[{label:"Parent node 1-1",id:"node-1-1",children:[{label:"Leaf node 1-1-1",id:"node-1-1-1"}]},{label:"Leaf node 1-2",id:"node-1-2"}]},{label:"Leaf node 2",id:"node-2"}]);return{treeRef:c,data:m,addNode:()=>{!g.value||c.value.treeFactory.insertBefore(g.value,{label:"\u65B0\u8282\u70B9"})},deleteNode:()=>{!g.value||c.value.treeFactory.removeNode(g.value)},selectChange:C=>{g.value=C}}}});return B({render:r},v)}(),"render-demo-8":function(){const{resolveComponent:e,createVNode:t,withCtx:s,createElementVNode:i,openBlock:h,createElementBlock:d}=y,k={class:"ml8"},o={class:"ml8"};function r(c,g){const m=e("d-search"),F=e("d-icon"),E=e("d-tooltip"),_=e("d-row"),C=e("d-tree");return h(),d("div",null,[t(m,{class:"mb10",style:{width:"300px"},"is-keyup-search":"",placeholder:"search your node...",delay:1e3,onSearch:c.onSearch},null,8,["onSearch"]),t(m,{class:"mb10",style:{width:"300px"},"is-keyup-search":"",placeholder:"filter your node...",delay:1e3,onSearch:c.onSearch1},null,8,["onSearch"]),t(_,{class:"mb10",align:"middle"},{default:s(()=>[t(m,{style:{width:"300px"},"is-keyup-search":"",placeholder:"filter your node by custom key...",delay:1e3,onSearch:c.onSearch2},null,8,["onSearch"]),i("span",k,[t(E,{position:"top",content:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u641C\u7D22\u5339\u914D\u6811\u8282\u70B9"},{default:s(()=>[t(F,{name:"help"})]),_:1})])]),_:1}),t(_,{class:"mb10",align:"middle"},{default:s(()=>[t(m,{style:{width:"300px"},"is-keyup-search":"",placeholder:"filter your node by Regex...",delay:1e3,onSearch:c.onSearch3},null,8,["onSearch"]),i("span",o,[t(E,{position:"top",content:"\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u9650\u5B9A\u641C\u7D22\u8303\u56F4"},{default:s(()=>[t(F,{name:"help"})]),_:1})])]),_:1}),t(C,{ref:"treeRef",data:c.data},null,8,["data"])])}const{defineComponent:p,ref:l}=y,v=p({setup(){const c=l(),g=l([{label:"parent node 1",customSearchValue:"a"},{label:"parent node 2",customSearchValue:"b",children:[{label:"child node 2-1",customSearchValue:"c",children:[{label:"child node 2-1-1",customSearchValue:"d"},{label:"child node 2-1-2",customSearchValue:"e"}]},{label:"child node 2-2",customSearchValue:"f",children:[{label:"child node 2-2-1",customSearchValue:"g"},{label:"child node 2-2-2",customSearchValue:"h"}]}]},{label:"parent node 3",customSearchValue:"i",children:[{label:"child node 3-1",customSearchValue:"j"},{label:"child node 3-2",customSearchValue:"k"}]},{label:"parent node 4",customSearchValue:"l",children:[{label:"child node 4-1",customSearchValue:"m"},{label:"child node 4-2",customSearchValue:"n"}]},{label:"parent node 5",customSearchValue:"o",children:[{label:"child node 5-1",customSearchValue:"p"},{label:"child node 5-2",customSearchValue:"q"}]}]);return{treeRef:c,data:g,onSearch:C=>{c.value.treeFactory.searchTree(C,{isFilter:!1})},onSearch1:C=>{c.value.treeFactory.searchTree(C,{isFilter:!0})},onSearch2:C=>{c.value.treeFactory.searchTree(C,{isFilter:!0,matchKey:"customSearchValue"})},onSearch3:C=>{const V=new RegExp("^"+C+"[sS]*");c.value.treeFactory.searchTree(C,{isFilter:!0,pattern:V})}}}});return B({render:r},v)}(),"render-demo-9":function(){const{resolveComponent:e,createVNode:t,openBlock:s,createElementBlock:i}=y;function h(p,l){const v=e("d-search"),c=e("d-tree");return s(),i("div",null,[t(v,{class:"mb10",style:{width:"300px"},"is-keyup-search":"",placeholder:"search your node...",delay:1e3,onSearch:p.onSearch},null,8,["onSearch"]),t(v,{class:"mb10",style:{width:"300px"},"is-keyup-search":"",placeholder:"filter your node...",delay:1e3,onSearch:p.onSearch1},null,8,["onSearch"]),t(c,{data:p.data,height:300,ref:"treeRef"},null,8,["data"])])}const{defineComponent:d,ref:k,onMounted:o}=y,r=d({setup(){const p=k(null),l=k([...Array.from({length:100}).map((g,m)=>({label:"Parent node "+m,children:m%2===0?Array.from({length:10}).map((F,E)=>({label:"Leaf node "+m+"-"+E})):void 0}))]);return o(()=>{p.value.treeFactory.expandAllNodes()}),{data:l,treeRef:p,onSearch:g=>{p.value.treeFactory.searchTree(g,{isFilter:!1})},onSearch1:g=>{p.value.treeFactory.searchTree(g,{isFilter:!0})}}}});return B({render:h},r)}()}},Bn='{"title":"Tree \u6811","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8282\u70B9\u61D2\u52A0\u8F7D","slug":"\u8282\u70B9\u61D2\u52A0\u8F7D"},{"level":3,"title":"\u53EF\u52FE\u9009","slug":"\u53EF\u52FE\u9009"},{"level":3,"title":"\u9ED8\u8BA4\u72B6\u6001","slug":"\u9ED8\u8BA4\u72B6\u6001"},{"level":3,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u56FE\u6807","slug":"\u81EA\u5B9A\u4E49\u56FE\u6807"},{"level":3,"title":"\u8282\u70B9\u5408\u5E76","slug":"\u8282\u70B9\u5408\u5E76"},{"level":3,"title":"\u64CD\u4F5C\u6309\u94AE","slug":"\u64CD\u4F5C\u6309\u94AE"},{"level":3,"title":"\u641C\u7D22\u8FC7\u6EE4","slug":"\u641C\u7D22\u8FC7\u6EE4"},{"level":3,"title":"\u865A\u62DF\u6EDA\u52A8","slug":"\u865A\u62DF\u6EDA\u52A8"},{"level":3,"title":"Tree \u53C2\u6570","slug":"tree-\u53C2\u6570"},{"level":3,"title":"Tree \u4E8B\u4EF6","slug":"tree-\u4E8B\u4EF6"},{"level":3,"title":"Tree \u63D2\u69FD","slug":"tree-\u63D2\u69FD"},{"level":3,"title":"TreeNode \u53C2\u6570","slug":"treenode-\u53C2\u6570"},{"level":3,"title":"Tree \u7C7B\u578B\u5B9A\u4E49","slug":"tree-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/tree/index.md","lastUpdated":1657785302949}',U=T('<h1 id="tree-\u6811" tabindex="-1">Tree \u6811 <a class="header-anchor" href="#tree-\u6811" aria-hidden="true">#</a></h1><p>\u4E00\u79CD\u5448\u73B0\u5D4C\u5957\u7ED3\u6784\u7684\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528\u6811\u7EC4\u4EF6\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00/\u6536\u8D77\u3001\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),G=n("div",null,"\u5C55\u793A\u5D4C\u5957\u6811\u5F62\u7ED3\u6784\u7684\u5448\u73B0\u3001\u8FDE\u63A5\u7EBF\u3001\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u7B49\u529F\u80FD\u3002",-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),J=n("h3",{id:"\u8282\u70B9\u61D2\u52A0\u8F7D",tabindex:"-1"},[a("\u8282\u70B9\u61D2\u52A0\u8F7D "),n("a",{class:"header-anchor",href:"#\u8282\u70B9\u61D2\u52A0\u8F7D","aria-hidden":"true"},"#")],-1),O=n("div",null,[a("\u901A\u8FC7\u8BBE\u7F6E\u8BE5\u8282\u70B9 "),n("code",null,"isLeaf"),a(" \u53C2\u6570\u4E3A "),n("code",null,"false"),a(", \u7EC4\u4EF6\u56DE\u8C03 "),n("code",null,"lazyLoad"),a(" \u65B9\u6CD5\u5B9E\u73B0\u8282\u70B9\u61D2\u52A0\u8F7D\u3002")],-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@lazy-load"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lazyLoad"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1 - dynamic loading'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2 - dynamic loading'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"isLeaf"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"lazyLoad"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("node"),n("span",{class:"token punctuation"},","),a(" callback")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 2-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"treeItems"),n("span",{class:"token operator"},":"),a(" data"),n("span",{class:"token punctuation"},","),a(`
          node`),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      lazyLoad`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),W=n("h3",{id:"\u53EF\u52FE\u9009",tabindex:"-1"},[a("\u53EF\u52FE\u9009 "),n("a",{class:"header-anchor",href:"#\u53EF\u52FE\u9009","aria-hidden":"true"},"#")],-1),X=n("div",null,[a("\u901A\u8FC7"),n("code",null,"check"),a("\u5F00\u542F\u52FE\u9009\u529F\u80FD\u3002")],-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex flex-row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 28px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("label")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex items-center mr-xl"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("inline-block mr-xs"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5F00\u542F\u52FE\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("openCheck"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("label")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("openCheck"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("currentStrategy"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("strategy of checkStrategy"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("strategy"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("strategy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("{{ strategy }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":check"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("currentStrategy"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@toggle-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@check-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@select-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@node-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nodeClick"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" openCheck "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" checkStrategy "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'both'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'downward'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'upward'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'none'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" currentStrategy "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'both'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("openCheck"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"newVal"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("newVal "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        currentStrategy`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token punctuation"},"{"),a(`
        currentStrategy`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'both'"),n("span",{class:"token punctuation"},";"),a(`

        data`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'toggleChange node:'"),n("span",{class:"token punctuation"},","),a(" node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"checkChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkChange node:'"),n("span",{class:"token punctuation"},","),a(" node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"selectChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectChange node:'"),n("span",{class:"token punctuation"},","),a(" node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"nodeClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'nodeClick node:'"),n("span",{class:"token punctuation"},","),a(" node"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      openCheck`),n("span",{class:"token punctuation"},","),a(`
      checkStrategy`),n("span",{class:"token punctuation"},","),a(`
      currentStrategy`),n("span",{class:"token punctuation"},","),a(`
      toggleChange`),n("span",{class:"token punctuation"},","),a(`
      checkChange`),n("span",{class:"token punctuation"},","),a(`
      selectChange`),n("span",{class:"token punctuation"},","),a(`
      nodeClick`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),nn=n("h3",{id:"\u9ED8\u8BA4\u72B6\u6001",tabindex:"-1"},[a("\u9ED8\u8BA4\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u9ED8\u8BA4\u72B6\u6001","aria-hidden":"true"},"#")],-1),an=n("div",null,[a("\u901A\u8FC7"),n("code",null,"expanded"),a("/"),n("code",null,"selected"),a("/"),n("code",null,"checked"),a("\u5206\u522B\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u3001\u52FE\u9009\u72B6\u6001\u3002")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"check"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"checked"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"selected"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),sn=n("h3",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[a("\u7981\u7528\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#")],-1),en=n("div",null,[a("\u901A\u8FC7"),n("code",null,"disableToggle"),a("/"),n("code",null,"disableSelect"),a("/"),n("code",null,"disableCheck"),a("\u5206\u522B\u7981\u7528\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u3001\u52FE\u9009\u72B6\u6001\u3002")],-1),on=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"check"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

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
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"disableCheck"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"disableSelect"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),pn=n("h3",{id:"\u81EA\u5B9A\u4E49\u56FE\u6807",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u56FE\u6807 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u56FE\u6807","aria-hidden":"true"},"#")],-1),cn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"content"),a("\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9\uFF0C\u6BD4\u5982\u5728\u8282\u70B9\u5185\u5BB9\u524D\u9762\u589E\u52A0\u4E00\u4E2A\u56FE\u6807\uFF1B\u901A\u8FC7"),n("code",null,"icon"),a("\u63D2\u69FD\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6536\u8D77\u7684\u56FE\u6807\u3002")],-1),ln=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ nodeData }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 8px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 16 16"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(`
          `),n("span",{class:"token attr-name"},":d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("`${\n            nodeData.isLeaf\n              ? "),n("span",{class:"token punctuation"},"'"),a("M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z"),n("span",{class:"token punctuation"},"'"),a(`
              : nodeData.expanded
              ? `),n("span",{class:"token punctuation"},"'"),a("M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z"),n("span",{class:"token punctuation"},"'"),a(`
              : `),n("span",{class:"token punctuation"},"'"),a("M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z"),n("span",{class:"token punctuation"},"'"),a("\n          }`"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"stroke-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#8a8e99"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("path")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
      {{ nodeData.label }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#icon"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ nodeData, toggleNode }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nodeData.isLeaf"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("devui-tree-node__indent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(`
        `),n("span",{class:"token attr-name"},"v-else"),a(`
        `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`
          (event) => {
            event.stopPropagation();
            toggleNode(nodeData);
          }
        `),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("svg")]),a(`
          `),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ transform: nodeData.expanded ? "),n("span",{class:"token punctuation"},"'"),a("rotate(90deg)"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),a(", marginLeft: "),n("span",{class:"token punctuation"},"'"),a("-2.5px"),n("span",{class:"token punctuation"},"'"),a(", marginRight: "),n("span",{class:"token punctuation"},"'"),a("14.5px"),n("span",{class:"token punctuation"},"'"),a(", cursor: "),n("span",{class:"token punctuation"},"'"),a("pointer"),n("span",{class:"token punctuation"},"'"),a(" }"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"viewBox"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0 0 1024 1024"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("12"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("path")]),a(),n("span",{class:"token attr-name"},"d"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"fill"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#8a8e99"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("path")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("svg")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
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
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),un=n("h3",{id:"\u8282\u70B9\u5408\u5E76",tabindex:"-1"},[a("\u8282\u70B9\u5408\u5E76 "),n("a",{class:"header-anchor",href:"#\u8282\u70B9\u5408\u5E76","aria-hidden":"true"},"#")],-1),rn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeRef"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" treeRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1-1'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                  `),n("span",{class:"token punctuation"},"{"),a(`
                    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1-1-1'"),n("span",{class:"token punctuation"},","),a(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 2-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2-1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 3-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 3-1-1'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                  `),n("span",{class:"token punctuation"},"{"),a(`
                    `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 3-1-1-1'"),n("span",{class:"token punctuation"},","),a(`
                  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 3-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"mergeTreeNodes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"expandAllNodes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      treeRef`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),kn=n("h3",{id:"\u64CD\u4F5C\u6309\u94AE",tabindex:"-1"},[a("\u64CD\u4F5C\u6309\u94AE "),n("a",{class:"header-anchor",href:"#\u64CD\u4F5C\u6309\u94AE","aria-hidden":"true"},"#")],-1),dn=n("div",null,"\u53EF\u5B9A\u4E49\u5916\u90E8\u64CD\u4F5C\u6309\u94AE\u3001\u60AC\u6D6E\u6309\u94AE\u3002",-1),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"operate"),a(),n("span",{class:"token attr-name"},"@select-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("solid"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("addNode"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Add"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ml-xs"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("deleteNode"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" treeRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectedNode "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"addNode"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertBefore"),n("span",{class:"token punctuation"},"("),a("selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u65B0\u8282\u70B9'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"deleteNode"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"removeNode"),n("span",{class:"token punctuation"},"("),a("selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"selectChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"selected"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      selectedNode`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" selected"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      addNode`),n("span",{class:"token punctuation"},","),a(`
      deleteNode`),n("span",{class:"token punctuation"},","),a(`
      selectChange`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),gn=n("h3",{id:"\u641C\u7D22\u8FC7\u6EE4",tabindex:"-1"},[a("\u641C\u7D22\u8FC7\u6EE4 "),n("a",{class:"header-anchor",href:"#\u641C\u7D22\u8FC7\u6EE4","aria-hidden":"true"},"#")],-1),yn=n("div",null,[a("\u901A\u8FC7 "),n("code",null,"treeFactory"),a(" \u4E2D\u7684"),n("code",null,"searchTree"),a("\u65B9\u6CD5\u53EF\u4EE5\u641C\u7D22\u8282\u70B9\u6216\u8005\u8FC7\u6EE4\u8282\u70B9\u3002")],-1),fn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-search")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"is-keyup-search"),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("search your node..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSearch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-search")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-search")]),a(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb10"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"is-keyup-search"),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filter your node..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1000"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSearch1"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-search")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-row")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("middle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-search")]),a(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
      `),n("span",{class:"token attr-name"},"is-keyup-search"),a(`
      `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filter your node by custom key..."),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1000"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSearch2"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-search")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ml8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tooltip")]),a(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("top"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u641C\u7D22\u5339\u914D\u6811\u8282\u70B9"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("help"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tooltip")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-row")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-row")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("middle"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-search")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"is-keyup-search"),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filter your node by Regex..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSearch3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-search")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ml8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tooltip")]),a(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("top"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u9650\u5B9A\u641C\u7D22\u8303\u56F4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("help"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tooltip")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-row")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" treeRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'a'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'b'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 2-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'c'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 2-1-1'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'d'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 2-1-2'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'e'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 2-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'f'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 2-2-1'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'g'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 2-2-2'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'h'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 3-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'j'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 3-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'k'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'l'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 4-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'m'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 4-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'n'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'o'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 5-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'p'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'child node 5-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"customSearchValue"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'q'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSearch"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchTree"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"isFilter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSearch1"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchTree"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"isFilter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSearch2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchTree"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"isFilter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"matchKey"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'customSearchValue'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSearch3"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" regex "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"RegExp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'^'"),a(),n("span",{class:"token operator"},"+"),a(" value "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token string"},"'[\\s\\S]*'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchTree"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"isFilter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"pattern"),n("span",{class:"token operator"},":"),a(" regex "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      onSearch`),n("span",{class:"token punctuation"},","),a(`
      onSearch1`),n("span",{class:"token punctuation"},","),a(`
      onSearch2`),n("span",{class:"token punctuation"},","),a(`
      onSearch3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".mb10"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".ml8"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-left"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),mn=n("h3",{id:"\u865A\u62DF\u6EDA\u52A8",tabindex:"-1"},[a("\u865A\u62DF\u6EDA\u52A8 "),n("a",{class:"header-anchor",href:"#\u865A\u62DF\u6EDA\u52A8","aria-hidden":"true"},"#")],-1),bn=n("div",null,"\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8\u5904\u7406\u5927\u6570\u636E\u91CF\u7684\u52A0\u8F7D\u95EE\u9898\u3002",-1),vn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-search")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb10"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token attr-name"},"is-keyup-search"),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("search your node..."),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1000"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSearch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-search")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-search")]),a(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb10"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 300px")]),n("span",{class:"token punctuation"},'"')])]),a(`
    `),n("span",{class:"token attr-name"},"is-keyup-search"),a(`
    `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filter your node..."),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":delay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1000"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSearch1"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-search")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("300"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeRef"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" treeRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token operator"},"..."),a("Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"100"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node '"),a(),n("span",{class:"token operator"},"+"),a(" index"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(`
          index `),n("span",{class:"token operator"},"%"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),a(`
            `),n("span",{class:"token operator"},"?"),a(" Array"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"from"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"length"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"10"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("_"),n("span",{class:"token punctuation"},","),a(" index2")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node '"),a(),n("span",{class:"token operator"},"+"),a(" index "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token string"},"'-'"),a(),n("span",{class:"token operator"},"+"),a(" index2"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
            `),n("span",{class:"token operator"},":"),a(),n("span",{class:"token keyword"},"undefined"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token function"},"onMounted"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"expandAllNodes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSearch"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchTree"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"isFilter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"false"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSearch1"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"searchTree"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"isFilter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      treeRef`),n("span",{class:"token punctuation"},","),a(`
      onSearch`),n("span",{class:"token punctuation"},","),a(`
      onSearch1`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Cn=T(`<h3 id="tree-\u53C2\u6570" tabindex="-1">Tree \u53C2\u6570 <a class="header-anchor" href="#tree-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><a href="#itreenode">ITreeNode[]</a></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6811\u5F62\u7ED3\u6784\u6570\u636E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">check</td><td style="text-align:left;"><a href="#icheck">ICheck</a></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u52FE\u9009\u529F\u80FD</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr></tbody></table><h3 id="tree-\u4E8B\u4EF6" tabindex="-1">Tree \u4E8B\u4EF6 <a class="header-anchor" href="#tree-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">toggle-change</td><td style="text-align:left;"><code>Function(node)</code></td><td style="text-align:left;">\u8282\u70B9\u5C55\u5F00/\u6536\u8D77\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u8282\u70B9\u5BF9\u8C61</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">check-change</td><td style="text-align:left;"><code>Function(node)</code></td><td style="text-align:left;">\u8282\u70B9\u52FE\u9009\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u8282\u70B9\u5BF9\u8C61</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">select-change</td><td style="text-align:left;"><code>Function(node)</code></td><td style="text-align:left;">\u8282\u70B9\u9009\u4E2D\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u8282\u70B9\u5BF9\u8C61</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">node-click</td><td style="text-align:left;"><code>Function(node)</code></td><td style="text-align:left;">\u8282\u70B9\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u70B9\u51FB\u7684\u8282\u70B9\u5BF9\u8C61</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">lazy-node</td><td style="text-align:left;"><code>Function(node, callback)</code></td><td style="text-align:left;">\u8282\u70B9\u61D2\u52A0\u8F7D\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u70B9\u51FB\u7684\u8282\u70B9\u5BF9\u8C61\u53CA\u56DE\u8C03\u51FD\u6570</td><td style="text-align:left;"><a href="#%E8%8A%82%E7%82%B9%E6%87%92%E5%8A%A0%E8%BD%BD">\u8282\u70B9\u61D2\u52A0\u8F7D</a></td></tr></tbody></table><h3 id="tree-\u63D2\u69FD" tabindex="-1">Tree \u63D2\u69FD <a class="header-anchor" href="#tree-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u8282\u70B9</td></tr><tr><td style="text-align:left;">content</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6536\u8D77\u6309\u94AE</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u8282\u70B9\u61D2\u52A0\u8F7D\u65F6 loading \u663E\u793A\u5185\u5BB9</td></tr></tbody></table><h3 id="treenode-\u53C2\u6570" tabindex="-1">TreeNode \u53C2\u6570 <a class="header-anchor" href="#treenode-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><a href="#itreenode">ITreeNode</a></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8282\u70B9\u6570\u636E</td></tr><tr><td style="text-align:left;">check</td><td style="text-align:left;"><a href="#icheck">ICheck</a></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u52FE\u9009\u529F\u80FD</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u542F\u7528\u865A\u62DF\u6EDA\u52A8</td></tr></tbody></table><h3 id="tree-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Tree \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#tree-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="itreenode" tabindex="-1">ITreeNode <a class="header-anchor" href="#itreenode" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,13);function Fn(e,t,s,i,h,d){const k=x("render-demo-0"),o=x("demo"),r=x("render-demo-1"),p=x("render-demo-2"),l=x("render-demo-3"),v=x("render-demo-4"),c=x("render-demo-5"),g=x("render-demo-6"),m=x("render-demo-7"),F=x("render-demo-8"),E=x("render-demo-9");return $(),I("div",null,[U,f(o,{sourceCode:`<template>
  <d-tree :data="data"></d-tree>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'Parent node 1',
        children: [
          {
            label: 'Parent node 1-1',
            children: [{ label: 'Leaf node 1-1-1' }],
          },
          { label: 'Leaf node 1-2' },
        ],
      },
      { label: 'Leaf node 2' },
    ]);

    return {
      data,
    };
  },
});
<\/script>
`},{description:u(()=>[G]),highlight:u(()=>[H]),default:u(()=>[f(k)]),_:1}),J,f(o,{sourceCode:`<template>
  <d-tree :data="data" @lazy-load="lazyLoad"></d-tree>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'Parent node 1',
        children: [
          {
            label: 'Parent node 1-1 - dynamic loading',
            isLeaf: false,
          },
          { label: 'Leaf node 1-2' },
        ],
      },
      { label: 'Leaf node 2 - dynamic loading', isLeaf: false },
    ]);

    const lazyLoad = (node, callback) => {
      setTimeout(() => {
        const data = [
          {
            label: 'child node 1',
            expanded: true,
            children: [
              {
                label: 'child node 1-1',
              },
              {
                label: 'child node 1-2',
              },
            ],
          },
          {
            label: 'child node 2',
            children: [
              {
                label: 'child node 2-1',
              },
            ],
          },
        ];
        callback({
          treeItems: data,
          node,
        });
      }, 500);
    };

    return {
      data,
      lazyLoad,
    };
  },
});
<\/script>
`},{description:u(()=>[O]),highlight:u(()=>[Q]),default:u(()=>[f(r)]),_:1}),W,f(o,{sourceCode:`<template>
  <div class="flex flex-row" style="height: 28px;">
    <label class="flex items-center mr-xl"><span class="inline-block mr-xs">\u5F00\u542F\u52FE\u9009</span><d-switch v-model="openCheck"></d-switch></label>
    <d-radio-group v-if="openCheck" v-model="currentStrategy" direction="row">
      <d-radio v-for="strategy of checkStrategy" :key="strategy" :value="strategy">{{ strategy }}</d-radio>
    </d-radio-group>
  </div>
  <d-tree
    :data="data"
    :check="currentStrategy"
    @toggle-change="toggleChange"
    @check-change="checkChange"
    @select-change="selectChange"
    @node-click="nodeClick"
  ></d-tree>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const openCheck = ref(true);
    const checkStrategy = ref(['both', 'downward', 'upward', 'none']);
    const currentStrategy = ref('both');

    const data = ref([
      {
        label: 'Parent node 1',
        children: [
          {
            label: 'Parent node 1-1',
            children: [{ label: 'Leaf node 1-1-1' }, { label: 'Leaf node 1-1-2' }],
          },
          { label: 'Leaf node 1-2' },
        ],
      },
      { label: 'Leaf node 2' },
    ]);

    watch(openCheck, (newVal) => {
      if (newVal === false) {
        currentStrategy.value = false;
      } else {
        currentStrategy.value = 'both';

        data.value = [
          {
            label: 'Parent node 1',
            children: [
              {
                label: 'Parent node 1-1',
                children: [{ label: 'Leaf node 1-1-1' }, { label: 'Leaf node 1-1-2' }],
              },
              { label: 'Leaf node 1-2' },
            ],
          },
          { label: 'Leaf node 2' },
        ];
      }
    });

    const toggleChange = (node) => {
      console.log('toggleChange node:', node);
    };

    const checkChange = (node) => {
      console.log('checkChange node:', node);
    };

    const selectChange = (node) => {
      console.log('selectChange node:', node);
    };

    const nodeClick = (node) => {
      console.log('nodeClick node:', node);
    };

    return {
      data,
      openCheck,
      checkStrategy,
      currentStrategy,
      toggleChange,
      checkChange,
      selectChange,
      nodeClick,
    };
  },
});
<\/script>
`},{description:u(()=>[X]),highlight:u(()=>[Y]),default:u(()=>[f(p)]),_:1}),nn,f(o,{sourceCode:`<template>
  <d-tree :data="data" check></d-tree>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'Parent node 1',
        expanded: true,
        children: [
          {
            label: 'Parent node 1-1',
            children: [{ label: 'Leaf node 1-1-1' }],
          },
          {
            label: 'Leaf node 1-2',
            checked: true,
          },
        ],
      },
      {
        label: 'Leaf node 2',
        selected: true,
      },
    ]);

    return {
      data,
    };
  },
});
<\/script>
`},{description:u(()=>[an]),highlight:u(()=>[tn]),default:u(()=>[f(l)]),_:1}),sn,f(o,{sourceCode:`<template>
  <d-tree :data="data" check></d-tree>
</template>

<script>
import { defineComponent, ref } from 'vue';

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
            children: [{ label: 'Leaf node 1-1-1' }],
          },
          {
            label: 'Leaf node 1-2',
            disableCheck: true,
          },
        ],
      },
      {
        label: 'Leaf node 2',
        disableSelect: true,
      },
    ]);

    return {
      data,
    };
  },
});
<\/script>
`},{description:u(()=>[en]),highlight:u(()=>[on]),default:u(()=>[f(v)]),_:1}),pn,f(o,{sourceCode:`<template>
  <d-tree :data="data">
    <template #content="{ nodeData }">
      <svg style="margin-right: 8px" viewBox="0 0 16 16" width="16" height="16">
        <path
          :d="\`\${
            nodeData.isLeaf
              ? 'M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z'
              : nodeData.expanded
              ? 'M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z'
              : 'M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z'
          }\`"
          stroke-width="1"
          fill="#8a8e99"
        ></path>
      </svg>
      {{ nodeData.label }}
    </template>
    <template #icon="{ nodeData, toggleNode }">
      <span v-if="nodeData.isLeaf" class="devui-tree-node__indent"></span>
      <span
        v-else
        @click="
          (event) => {
            event.stopPropagation();
            toggleNode(nodeData);
          }
        "
      >
        <svg
          :style="{ transform: nodeData.expanded ? 'rotate(90deg)' : '', marginLeft: '-2.5px', marginRight: '14.5px', cursor: 'pointer' }"
          viewBox="0 0 1024 1024"
          width="12"
          height="12"
        >
          <path d="M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z" fill="#8a8e99"></path>
        </svg>
      </span>
    </template>
  </d-tree>
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
            children: [{ label: 'Leaf node 1-1-1' }],
          },
          { label: 'Leaf node 1-2' },
        ],
      },
      { label: 'Leaf node 2' },
    ]);

    return {
      data,
    };
  },
});
<\/script>
`},{description:u(()=>[cn]),highlight:u(()=>[ln]),default:u(()=>[f(c)]),_:1}),un,f(o,{sourceCode:`<template>
  <d-tree :data="data" ref="treeRef"></d-tree>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const treeRef = ref(null);
    const data = ref([
      {
        label: 'Parent node 1',
        children: [
          {
            label: 'Parent node 1-1',
            children: [
              {
                label: 'Parent node 1-1-1',
                children: [
                  {
                    label: 'Parent node 1-1-1-1',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Parent node 2',
        children: [
          {
            label: 'Parent node 2-1',
            children: [
              {
                label: 'Leaf node 2-1-1',
              },
              {
                label: 'Leaf node 2-1-2',
              },
            ],
          },
        ],
      },
      {
        label: 'Parent node 3',
        children: [
          {
            label: 'Leaf node 3-1',
            children: [
              {
                label: 'Leaf node 3-1-1',
                children: [
                  {
                    label: 'Leaf node 3-1-1-1',
                  },
                ],
              },
            ],
          },
          {
            label: 'Leaf node 3-2',
          },
        ],
      },
    ]);

    onMounted(() => {
      treeRef.value.treeFactory.mergeTreeNodes();
      treeRef.value.treeFactory.expandAllNodes();
    });

    return {
      data,
      treeRef,
    };
  },
});
<\/script>
`},{highlight:u(()=>[rn]),default:u(()=>[f(g)]),_:1}),kn,f(o,{sourceCode:`<template>
  <d-tree :data="data" ref="treeRef" operate @select-change="selectChange"></d-tree>
  <d-button variant="solid" size="sm" @click="addNode">Add</d-button>
  <d-button size="sm" class="ml-xs" @click="deleteNode">Delete</d-button>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const treeRef = ref();
    const selectedNode = ref();
    const data = ref([
      {
        label: 'Parent node 1',
        id: 'node-1',
        children: [
          {
            label: 'Parent node 1-1',
            id: 'node-1-1',
            children: [{ label: 'Leaf node 1-1-1', id: 'node-1-1-1' }],
          },
          { label: 'Leaf node 1-2', id: 'node-1-2' },
        ],
      },
      { label: 'Leaf node 2', id: 'node-2' },
    ]);

    const addNode = () => {
      if (!selectedNode.value) {
        return;
      }
      treeRef.value.treeFactory.insertBefore(selectedNode.value, { label: '\u65B0\u8282\u70B9' });
    };

    const deleteNode = () => {
      if (!selectedNode.value) {
        return;
      }
      treeRef.value.treeFactory.removeNode(selectedNode.value);
    };

    const selectChange = (selected) => {
      selectedNode.value = selected;
    };

    return {
      treeRef,
      data,
      addNode,
      deleteNode,
      selectChange,
    };
  },
});
<\/script>
`},{description:u(()=>[dn]),highlight:u(()=>[hn]),default:u(()=>[f(m)]),_:1}),gn,f(o,{sourceCode:`<template>
  <d-search class="mb10" style="width: 300px" is-keyup-search placeholder="search your node..." :delay="1000" @search="onSearch"></d-search>
  <d-search
    class="mb10"
    style="width: 300px"
    is-keyup-search
    placeholder="filter your node..."
    :delay="1000"
    @search="onSearch1"
  ></d-search>
  <d-row class="mb10" align="middle">
    <d-search
      style="width: 300px"
      is-keyup-search
      placeholder="filter your node by custom key..."
      :delay="1000"
      @search="onSearch2"
    ></d-search>
    <span class="ml8">
      <d-tooltip position="top" content="\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u641C\u7D22\u5339\u914D\u6811\u8282\u70B9">
        <d-icon name="help" />
      </d-tooltip>
    </span>
  </d-row>
  <d-row class="mb10" align="middle">
    <d-search style="width: 300px" is-keyup-search placeholder="filter your node by Regex..." :delay="1000" @search="onSearch3"></d-search>
    <span class="ml8">
      <d-tooltip position="top" content="\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u9650\u5B9A\u641C\u7D22\u8303\u56F4">
        <d-icon name="help" />
      </d-tooltip>
    </span>
  </d-row>
  <d-tree ref="treeRef" :data="data"></d-tree>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const treeRef = ref();
    const data = ref([
      {
        label: 'parent node 1',
        customSearchValue: 'a',
      },
      {
        label: 'parent node 2',
        customSearchValue: 'b',
        children: [
          {
            label: 'child node 2-1',
            customSearchValue: 'c',
            children: [
              {
                label: 'child node 2-1-1',
                customSearchValue: 'd',
              },
              {
                label: 'child node 2-1-2',
                customSearchValue: 'e',
              },
            ],
          },
          {
            label: 'child node 2-2',
            customSearchValue: 'f',
            children: [
              {
                label: 'child node 2-2-1',
                customSearchValue: 'g',
              },
              {
                label: 'child node 2-2-2',
                customSearchValue: 'h',
              },
            ],
          },
        ],
      },
      {
        label: 'parent node 3',
        customSearchValue: 'i',
        children: [
          {
            label: 'child node 3-1',
            customSearchValue: 'j',
          },
          {
            label: 'child node 3-2',
            customSearchValue: 'k',
          },
        ],
      },
      {
        label: 'parent node 4',
        customSearchValue: 'l',
        children: [
          {
            label: 'child node 4-1',
            customSearchValue: 'm',
          },
          {
            label: 'child node 4-2',
            customSearchValue: 'n',
          },
        ],
      },
      {
        label: 'parent node 5',
        customSearchValue: 'o',
        children: [
          {
            label: 'child node 5-1',
            customSearchValue: 'p',
          },
          {
            label: 'child node 5-2',
            customSearchValue: 'q',
          },
        ],
      },
    ]);
    const onSearch = (value) => {
      treeRef.value.treeFactory.searchTree(value, { isFilter: false });
    };
    const onSearch1 = (value) => {
      treeRef.value.treeFactory.searchTree(value, { isFilter: true });
    };
    const onSearch2 = (value) => {
      treeRef.value.treeFactory.searchTree(value, { isFilter: true, matchKey: 'customSearchValue' });
    };
    const onSearch3 = (value) => {
      const regex = new RegExp('^' + value + '[\\s\\S]*');
      treeRef.value.treeFactory.searchTree(value, { isFilter: true, pattern: regex });
    };

    return {
      treeRef,
      data,
      onSearch,
      onSearch1,
      onSearch2,
      onSearch3,
    };
  },
});
<\/script>
<style>
.mb10 {
  margin-bottom: 10px;
}
.ml8 {
  margin-left: 8px;
}
</style>
`},{description:u(()=>[yn]),highlight:u(()=>[fn]),default:u(()=>[f(F)]),_:1}),mn,f(o,{sourceCode:`<template>
  <d-search class="mb10" style="width: 300px" is-keyup-search placeholder="search your node..." :delay="1000" @search="onSearch"></d-search>
  <d-search
    class="mb10"
    style="width: 300px"
    is-keyup-search
    placeholder="filter your node..."
    :delay="1000"
    @search="onSearch1"
  ></d-search>
  <d-tree :data="data" :height="300" ref="treeRef"></d-tree>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const treeRef = ref(null);
    const data = ref([
      ...Array.from({ length: 100 }).map((_, index) => ({
        label: 'Parent node ' + index,
        children:
          index % 2 === 0
            ? Array.from({ length: 10 }).map((_, index2) => ({
                label: 'Leaf node ' + index + '-' + index2,
              }))
            : undefined,
      })),
    ]);

    onMounted(() => {
      treeRef.value.treeFactory.expandAllNodes();
    });

    const onSearch = (value) => {
      treeRef.value.treeFactory.searchTree(value, { isFilter: false });
    };
    const onSearch1 = (value) => {
      treeRef.value.treeFactory.searchTree(value, { isFilter: true });
    };

    return {
      data,
      treeRef,
      onSearch,
      onSearch1,
    };
  },
});
<\/script>
`},{description:u(()=>[bn]),highlight:u(()=>[vn]),default:u(()=>[f(E)]),_:1}),Cn])}var xn=j(K,[["render",Fn]]);export{Bn as __pageData,xn as default};
