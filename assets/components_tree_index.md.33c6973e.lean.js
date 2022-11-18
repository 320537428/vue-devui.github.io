var R=Object.defineProperty;var T=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var I=(e,s,t)=>s in e?R(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,D=(e,s)=>{for(var t in s||(s={}))M.call(s,t)&&I(e,t,s[t]);if(T)for(var t of T(s))Z.call(s,t)&&I(e,t,s[t]);return e};import{_ as z,V as y,r as x,o as j,c as $,a as f,w as l,b as P,d as n,e as a}from"./app.d86bec19.js";const O={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,openBlock:t,createElementBlock:d}=y;function g(r,p){const u=e("d-tree");return t(),d("div",null,[s(u,{data:r.data},null,8,["data"])])}const{defineComponent:h,ref:k}=y,o=h({setup(){return{data:k([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}}});return D({render:g},o)}(),"render-demo-1":function(){const{resolveComponent:e,createVNode:s,openBlock:t,createElementBlock:d}=y;function g(r,p){const u=e("d-tree");return t(),d("div",null,[s(u,{data:r.data,onLazyLoad:r.lazyLoad},null,8,["data","onLazyLoad"])])}const{defineComponent:h,ref:k}=y,o=h({setup(){return{data:k([{label:"Parent node 1",children:[{label:"Parent node 1-1 - dynamic loading",isLeaf:!1},{label:"Leaf node 1-2"}]},{label:"Leaf node 2 - dynamic loading",isLeaf:!1}]),lazyLoad:(u,m)=>{setTimeout(()=>{m({treeItems:[{label:"child node 1",expanded:!0,children:[{label:"child node 1-1"},{label:"child node 1-2"}]},{label:"child node 2",children:[{label:"child node 2-1"}]}],node:u})},500)}}}});return D({render:g},o)}(),"render-demo-2":function(){const{createElementVNode:e,resolveComponent:s,createVNode:t,renderList:d,Fragment:g,openBlock:h,createElementBlock:k,toDisplayString:o,createTextVNode:r,withCtx:p,createBlock:u,createCommentVNode:m}=y,c={class:"flex flex-row",style:{height:"28px"}},i={class:"flex items-center mr-xl"},F=e("span",{class:"inline-block mr-xs"},"\u5F00\u542F\u52FE\u9009",-1);function E(v,A){const S=s("d-switch"),L=s("d-radio"),V=s("d-radio-group"),q=s("d-tree");return h(),k("div",null,[e("div",c,[e("label",i,[F,t(S,{modelValue:v.openCheck,"onUpdate:modelValue":A[0]||(A[0]=N=>v.openCheck=N)},null,8,["modelValue"])]),v.openCheck?(h(),u(V,{key:0,modelValue:v.currentStrategy,"onUpdate:modelValue":A[1]||(A[1]=N=>v.currentStrategy=N),direction:"row"},{default:p(()=>[(h(!0),k(g,null,d(v.checkStrategy,N=>(h(),u(L,{key:N,value:N},{default:p(()=>[r(o(N),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])):m("v-if",!0)]),t(q,{data:v.data,check:v.currentStrategy,onToggleChange:v.toggleChange,onCheckChange:v.checkChange,onSelectChange:v.selectChange,onNodeClick:v.nodeClick},null,8,["data","check","onToggleChange","onCheckChange","onSelectChange","onNodeClick"])])}const{defineComponent:B,ref:C,watch:b}=y,_=B({setup(){const v=C(!0),A=C(["both","downward","upward","none"]),S=C("both"),L=C([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"},{label:"Leaf node 1-1-2"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}]);return b(v,w=>{w===!1?S.value=!1:(S.value="both",L.value=[{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"},{label:"Leaf node 1-1-2"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}),{data:L,openCheck:v,checkStrategy:A,currentStrategy:S,toggleChange:w=>{console.log("toggleChange node:",w)},checkChange:w=>{console.log("checkChange node:",w)},selectChange:w=>{console.log("selectChange node:",w)},nodeClick:w=>{console.log("nodeClick node:",w)}}}});return D({render:E},_)}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:s,openBlock:t,createElementBlock:d}=y;function g(r,p){const u=e("d-tree");return t(),d("div",null,[s(u,{data:r.data,check:""},null,8,["data"])])}const{defineComponent:h,ref:k}=y,o=h({setup(){return{data:k([{label:"Parent node 1",expanded:!0,children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2",checked:!0}]},{label:"Leaf node 2",selected:!0}])}}});return D({render:g},o)}(),"render-demo-4":function(){const{resolveComponent:e,createVNode:s,openBlock:t,createElementBlock:d}=y;function g(r,p){const u=e("d-tree");return t(),d("div",null,[s(u,{data:r.data,check:""},null,8,["data"])])}const{defineComponent:h,ref:k}=y,o=h({setup(){return{data:k([{label:"Parent node 1",expanded:!0,children:[{label:"Parent node 1-1",disableToggle:!0,disableSelect:!0,disableCheck:!0,children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2",disableCheck:!0}]},{label:"Leaf node 2",disableSelect:!0}])}}});return D({render:g},o)}(),"render-demo-5":function(){const{createElementVNode:e,openBlock:s,createElementBlock:t,toDisplayString:d,createTextVNode:g,createCommentVNode:h,normalizeStyle:k,resolveComponent:o,withCtx:r,createVNode:p}=y,u={style:{"margin-right":"8px"},viewBox:"0 0 16 16",width:"16",height:"16"},m=["d"],c={key:0,class:"devui-tree-node__indent"},i=["onClick"],E=[e("path",{d:"M204.58705 951.162088 204.58705 72.836889 819.41295 511.998977Z",fill:"#8a8e99"},null,-1)];function B(v,A){const S=o("d-tree");return s(),t("div",null,[p(S,{data:v.data},{content:r(({nodeData:L})=>[(s(),t("svg",u,[e("path",{d:`${L.isLeaf?"M13,6 L9,6 L9,5 L9,2 L3,2 L3,14 L13,14 L13,6 Z M12.5857864,5 L10,2.41421356 L10,5 L12.5857864,5 Z M2,1 L10,1 L14,5 L14,15 L2,15 L2,1 Z":L.expanded?"M16,6 L14,14 L2,14 L0,6 L16,6 Z M14.7192236,7 L1.28077641,7 L2.78077641,13 L13.2192236,13 L14.7192236,7 Z M6,1 L8,3 L15,3 L15,5 L14,5 L14,4 L7.58578644,4 L5.58578644,2 L2,2 L2,5 L1,5 L1,1 L6,1 Z":"M14,6 L14,5 L7.58578644,5 L5.58578644,3 L2,3 L2,6 L14,6 Z M14,7 L2,7 L2,13 L14,13 L14,7 Z M1,2 L6,2 L8,4 L15,4 L15,14 L1,14 L1,2 Z"}`,"stroke-width":"1",fill:"#8a8e99"},null,8,m)])),g(" "+d(L.label),1)]),icon:r(({nodeData:L,toggleNode:V})=>[L.isLeaf?(s(),t("span",c)):(s(),t("span",{key:1,onClick:q=>{q.stopPropagation(),V(L)}},[(s(),t("svg",{style:k({transform:L.expanded?"rotate(90deg)":"",marginLeft:"-2.5px",marginRight:"14.5px",cursor:"pointer"}),viewBox:"0 0 1024 1024",width:"12",height:"12"},E,4))],8,i))]),_:1},8,["data"])])}const{defineComponent:C,ref:b}=y,_=C({setup(){return{data:b([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])}}});return D({render:B},_)}(),"render-demo-6":function(){const{resolveComponent:e,createVNode:s,openBlock:t,createElementBlock:d}=y;function g(p,u){const m=e("d-tree");return t(),d("div",null,[s(m,{data:p.data,ref:"treeRef"},null,8,["data"])])}const{defineComponent:h,ref:k,onMounted:o}=y,r=h({setup(){const p=k(null),u=k([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Parent node 1-1-1",children:[{label:"Parent node 1-1-1-1"}]}]}]},{label:"Parent node 2",children:[{label:"Parent node 2-1",children:[{label:"Leaf node 2-1-1"},{label:"Leaf node 2-1-2"}]}]},{label:"Parent node 3",children:[{label:"Leaf node 3-1",children:[{label:"Leaf node 3-1-1",children:[{label:"Leaf node 3-1-1-1"}]}]},{label:"Leaf node 3-2"}]}]);return o(()=>{p.value.treeFactory.mergeTreeNodes(),p.value.treeFactory.expandAllNodes()}),{data:u,treeRef:p}}});return D({render:g},r)}(),"render-demo-7":function(){const{resolveComponent:e,createVNode:s,createTextVNode:t,withCtx:d,openBlock:g,createElementBlock:h}=y,k=t("Add"),o=t("Delete");function r(c,i){const F=e("d-tree"),E=e("d-button");return g(),h("div",null,[s(F,{data:c.data,ref:"treeRef",operate:"",onSelectChange:c.selectChange},null,8,["data","onSelectChange"]),s(E,{variant:"solid",size:"sm",onClick:c.addNode},{default:d(()=>[k]),_:1},8,["onClick"]),s(E,{size:"sm",class:"ml-xs",onClick:c.deleteNode},{default:d(()=>[o]),_:1},8,["onClick"])])}const{defineComponent:p,ref:u}=y,m=p({setup(){const c=u(),i=u(),F=u([{label:"Parent node 1",id:"node-1",children:[{label:"Leaf node 1-1",id:"node-1-1",children:[{label:"Leaf node 1-1-1",id:"node-1-1-1"}]},{label:"Leaf node 1-2",id:"node-1-2"}]},{label:"Parent node 2",id:"node-2"}]);return{treeRef:c,data:F,addNode:()=>{if(!i.value)return;const b=c.value.treeFactory.getChildren(i.value);let _="new node";!b||b.length===0?_=i.value.label+"-1":b.length>0&&(_=i.value.label+`-${b.length+1}`),_.startsWith("Parent")&&(_=_.replace("Parent","Leaf")),c.value.treeFactory.insertBefore(i.value,{label:_})},deleteNode:()=>{!i.value||c.value.treeFactory.removeNode(i.value)},selectChange:b=>{i.value=b}}}});return D({render:r},m)}(),"render-demo-8":function(){const{resolveComponent:e,createVNode:s,withCtx:t,createElementVNode:d,openBlock:g,createElementBlock:h}=y,k={class:"ml8"},o={class:"ml8"};function r(c,i){const F=e("d-search"),E=e("d-icon"),B=e("d-tooltip"),C=e("d-row"),b=e("d-tree");return g(),h("div",null,[s(F,{class:"mb10",style:{width:"300px"},"is-keyup-search":"",placeholder:"search your node...",delay:1e3,onSearch:c.onSearch},null,8,["onSearch"]),s(F,{class:"mb10",style:{width:"300px"},"is-keyup-search":"",placeholder:"filter your node...",delay:1e3,onSearch:c.onSearch1},null,8,["onSearch"]),s(C,{class:"mb10",align:"middle"},{default:t(()=>[s(F,{style:{width:"300px"},"is-keyup-search":"",placeholder:"filter your node by custom key...",delay:1e3,onSearch:c.onSearch2},null,8,["onSearch"]),d("span",k,[s(B,{position:"top",content:"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684\u5C5E\u6027\u641C\u7D22\u5339\u914D\u6811\u8282\u70B9"},{default:t(()=>[s(E,{name:"help"})]),_:1})])]),_:1}),s(C,{class:"mb10",align:"middle"},{default:t(()=>[s(F,{style:{width:"300px"},"is-keyup-search":"",placeholder:"filter your node by Regex...",delay:1e3,onSearch:c.onSearch3},null,8,["onSearch"]),d("span",o,[s(B,{position:"top",content:"\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u9650\u5B9A\u641C\u7D22\u8303\u56F4"},{default:t(()=>[s(E,{name:"help"})]),_:1})])]),_:1}),s(b,{ref:"treeRef",data:c.data},null,8,["data"])])}const{defineComponent:p,ref:u}=y,m=p({setup(){const c=u(),i=u([{label:"parent node 1",customSearchValue:"a"},{label:"parent node 2",customSearchValue:"b",children:[{label:"child node 2-1",customSearchValue:"c",children:[{label:"child node 2-1-1",customSearchValue:"d"},{label:"child node 2-1-2",customSearchValue:"e"}]},{label:"child node 2-2",customSearchValue:"f",children:[{label:"child node 2-2-1",customSearchValue:"g"},{label:"child node 2-2-2",customSearchValue:"h"}]}]},{label:"parent node 3",customSearchValue:"i",children:[{label:"child node 3-1",customSearchValue:"j"},{label:"child node 3-2",customSearchValue:"k"}]},{label:"parent node 4",customSearchValue:"l",children:[{label:"child node 4-1",customSearchValue:"m"},{label:"child node 4-2",customSearchValue:"n"}]},{label:"parent node 5",customSearchValue:"o",children:[{label:"child node 5-1",customSearchValue:"p"},{label:"child node 5-2",customSearchValue:"q"}]}]);return{treeRef:c,data:i,onSearch:b=>{c.value.treeFactory.searchTree(b,{isFilter:!1})},onSearch1:b=>{c.value.treeFactory.searchTree(b,{isFilter:!0})},onSearch2:b=>{c.value.treeFactory.searchTree(b,{isFilter:!0,matchKey:"customSearchValue"})},onSearch3:b=>{const _=new RegExp("^"+b+"[sS]*");c.value.treeFactory.searchTree(b,{isFilter:!0,pattern:_})}}}});return D({render:r},m)}(),"render-demo-9":function(){const{resolveComponent:e,createVNode:s,openBlock:t,createElementBlock:d}=y;function g(p,u){const m=e("d-search"),c=e("d-tree");return t(),d("div",null,[s(m,{class:"mb10",style:{width:"300px"},"is-keyup-search":"",placeholder:"search your node...",delay:1e3,onSearch:p.onSearch},null,8,["onSearch"]),s(m,{class:"mb10",style:{width:"300px"},"is-keyup-search":"",placeholder:"filter your node...",delay:1e3,onSearch:p.onSearch1},null,8,["onSearch"]),s(c,{data:p.data,height:300,ref:"treeRef"},null,8,["data"])])}const{defineComponent:h,ref:k,onMounted:o}=y,r=h({setup(){const p=k(null),u=k([...Array.from({length:100}).map((i,F)=>({label:"Parent node "+F,children:F%2===0?Array.from({length:10}).map((E,B)=>({label:"Leaf node "+F+"-"+B})):void 0}))]);return o(()=>{p.value.treeFactory.expandAllNodes()}),{data:u,treeRef:p,onSearch:i=>{p.value.treeFactory.searchTree(i,{isFilter:!1})},onSearch1:i=>{p.value.treeFactory.searchTree(i,{isFilter:!0})}}}});return D({render:g},r)}(),"render-demo-10":function(){const{createElementVNode:e,resolveComponent:s,createVNode:t,openBlock:d,createElementBlock:g}=y,h=e("div",{class:"mb-0"},"Default",-1),k=e("div",{class:"mb-0"},"Sortable",-1);function o(m,c){const i=s("d-tree");return d(),g("div",null,[h,t(i,{class:"mb-2",data:m.data,dragdrop:""},null,8,["data"]),k,t(i,{class:"mb-2",data:m.data,dragdrop:{dropPrev:!0,dropNext:!0,dropInner:!0}},null,8,["data"])])}const{defineComponent:r,ref:p}=y,u=r({setup(){return{data:p([{label:"parent node 1"},{label:"parent node 2",expanded:!0,children:[{label:"leaf node 2-1",expanded:!0,children:[{label:"leaf node 2-1-1"},{label:"leaf node 2-1-2"}]},{label:"leaf node 2-2",children:[{label:"leaf node 2-2-1"},{label:"leaf node 2-2-2"}]}]},{label:"parent node 3",expanded:!0,children:[{label:"leaf node 3-1"},{label:"leaf node 3-2"}]},{label:"parent node 4",expanded:!0,children:[{label:"leaf node 4-1"},{label:"leaf node 4-2"}]},{label:"parent node 5",expanded:!0,children:[{label:"leaf node 5-1"},{label:"leaf node 5-2"}]}])}}});return D({render:o},u)}()}},wn='{"title":"Tree \u6811","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8282\u70B9\u61D2\u52A0\u8F7D","slug":"\u8282\u70B9\u61D2\u52A0\u8F7D"},{"level":3,"title":"\u53EF\u52FE\u9009","slug":"\u53EF\u52FE\u9009"},{"level":3,"title":"\u9ED8\u8BA4\u72B6\u6001","slug":"\u9ED8\u8BA4\u72B6\u6001"},{"level":3,"title":"\u7981\u7528\u72B6\u6001","slug":"\u7981\u7528\u72B6\u6001"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u56FE\u6807","slug":"\u81EA\u5B9A\u4E49\u56FE\u6807"},{"level":3,"title":"\u8282\u70B9\u5408\u5E76","slug":"\u8282\u70B9\u5408\u5E76"},{"level":3,"title":"\u64CD\u4F5C\u6309\u94AE","slug":"\u64CD\u4F5C\u6309\u94AE"},{"level":3,"title":"\u641C\u7D22\u8FC7\u6EE4","slug":"\u641C\u7D22\u8FC7\u6EE4"},{"level":3,"title":"\u865A\u62DF\u6EDA\u52A8","slug":"\u865A\u62DF\u6EDA\u52A8"},{"level":3,"title":"\u53EF\u62D6\u62FD\u6811","slug":"\u53EF\u62D6\u62FD\u6811"},{"level":3,"title":"Tree \u53C2\u6570","slug":"tree-\u53C2\u6570"},{"level":3,"title":"Tree \u4E8B\u4EF6","slug":"tree-\u4E8B\u4EF6"},{"level":3,"title":"Tree \u63D2\u69FD","slug":"tree-\u63D2\u69FD"},{"level":3,"title":"TreeNode \u53C2\u6570","slug":"treenode-\u53C2\u6570"},{"level":3,"title":"Tree \u7C7B\u578B\u5B9A\u4E49","slug":"tree-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"treeFactory","slug":"treefactory"}],"relativePath":"components/tree/index.md","lastUpdated":1662174068922}',K=P('<h1 id="tree-\u6811" tabindex="-1">Tree \u6811 <a class="header-anchor" href="#tree-\u6811" aria-hidden="true">#</a></h1><p>\u4E00\u79CD\u5448\u73B0\u5D4C\u5957\u7ED3\u6784\u7684\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u6587\u4EF6\u5939\u3001\u7EC4\u7EC7\u67B6\u6784\u3001\u751F\u7269\u5206\u7C7B\u3001\u56FD\u5BB6\u5730\u533A\u7B49\u7B49\uFF0C\u4E16\u95F4\u4E07\u7269\u7684\u5927\u591A\u6570\u7ED3\u6784\u90FD\u662F\u6811\u5F62\u7ED3\u6784\u3002\u4F7F\u7528\u6811\u7EC4\u4EF6\u53EF\u4EE5\u5B8C\u6574\u5C55\u73B0\u5176\u4E2D\u7684\u5C42\u7EA7\u5173\u7CFB\uFF0C\u5E76\u5177\u6709\u5C55\u5F00/\u6536\u8D77\u3001\u9009\u62E9\u7B49\u4EA4\u4E92\u529F\u80FD\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),U=n("div",null,[a("\u5C55\u793A\u5D4C\u5957\u6811\u5F62\u7ED3\u6784\u7684\u5448\u73B0\u3001\u8FDE\u63A5\u7EBF\u3001\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u7B49\u529F\u80FD\u3002\u52A8\u753B\u6548\u679C\u4F9D\u8D56\u6811\u8282\u70B9\u7684\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u9AD8\u5EA6\u4E3A"),n("code",null,"30px"),a("\uFF0C\u81EA\u5B9A\u4E49\u6811\u8282\u70B9\u65F6\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u52A8\u753B\u6548\u679C\u6B63\u5E38\u663E\u793A\uFF0C\u5EFA\u8BAE\u663E\u5F0F\u8BBE\u7F6E\u6811\u8282\u70B9\u9AD8\u5EA6\u3002")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),H=n("h3",{id:"\u8282\u70B9\u61D2\u52A0\u8F7D",tabindex:"-1"},[a("\u8282\u70B9\u61D2\u52A0\u8F7D "),n("a",{class:"header-anchor",href:"#\u8282\u70B9\u61D2\u52A0\u8F7D","aria-hidden":"true"},"#")],-1),G=n("div",null,[a("\u901A\u8FC7\u8BBE\u7F6E\u8BE5\u8282\u70B9 "),n("code",null,"isLeaf"),a(" \u53C2\u6570\u4E3A "),n("code",null,"false"),a(", \u7EC4\u4EF6\u56DE\u8C03 "),n("code",null,"lazyLoad"),a(" \u65B9\u6CD5\u5B9E\u73B0\u8282\u70B9\u61D2\u52A0\u8F7D\u3002")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),Q=n("h3",{id:"\u53EF\u52FE\u9009",tabindex:"-1"},[a("\u53EF\u52FE\u9009 "),n("a",{class:"header-anchor",href:"#\u53EF\u52FE\u9009","aria-hidden":"true"},"#")],-1),X=n("div",null,[a("\u901A\u8FC7"),n("code",null,"check"),a("\u5F00\u542F\u52FE\u9009\u529F\u80FD\u3002")],-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),nn=n("h3",{id:"\u9ED8\u8BA4\u72B6\u6001",tabindex:"-1"},[a("\u9ED8\u8BA4\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u9ED8\u8BA4\u72B6\u6001","aria-hidden":"true"},"#")],-1),an=n("div",null,[a("\u901A\u8FC7"),n("code",null,"expanded"),a("/"),n("code",null,"selected"),a("/"),n("code",null,"checked"),a("\u5206\u522B\u8BBE\u7F6E\u9ED8\u8BA4\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u3001\u52FE\u9009\u72B6\u6001\u3002")],-1),sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),tn=n("h3",{id:"\u7981\u7528\u72B6\u6001",tabindex:"-1"},[a("\u7981\u7528\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u7981\u7528\u72B6\u6001","aria-hidden":"true"},"#")],-1),en=n("div",null,[a("\u901A\u8FC7"),n("code",null,"disableToggle"),a("/"),n("code",null,"disableSelect"),a("/"),n("code",null,"disableCheck"),a("\u5206\u522B\u7981\u7528\u5C55\u5F00/\u6536\u8D77\u3001\u70B9\u51FB\u9009\u62E9\u3001\u52FE\u9009\u72B6\u6001\u3002")],-1),on=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-1-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-1-1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-1-1-1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Leaf node 1-2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-1-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Parent node 2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'node-2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"addNode"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" childs "),n("span",{class:"token operator"},"="),a(" treeRef"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getChildren"),n("span",{class:"token punctuation"},"("),a("selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"let"),a(" labelName "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'new node'"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("childs "),n("span",{class:"token operator"},"||"),a(" childs"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        labelName `),n("span",{class:"token operator"},"="),a(" selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("label "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"else"),a(),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("childs"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        labelName `),n("span",{class:"token operator"},"="),a(" selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("label "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"-"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("childs"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("labelName"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"startsWith"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Parent'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        labelName `),n("span",{class:"token operator"},"="),a(" labelName"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Parent'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Leaf'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      treeRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("treeFactory"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insertBefore"),n("span",{class:"token punctuation"},"("),a("selectedNode"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(" labelName "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
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
`)])])],-1),mn=n("h3",{id:"\u865A\u62DF\u6EDA\u52A8",tabindex:"-1"},[a("\u865A\u62DF\u6EDA\u52A8 "),n("a",{class:"header-anchor",href:"#\u865A\u62DF\u6EDA\u52A8","aria-hidden":"true"},"#")],-1),bn=n("div",null,"\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8\u5904\u7406\u5927\u6570\u636E\u91CF\u7684\u52A0\u8F7D\u95EE\u9898\u3002",-1),Fn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),vn=n("h3",{id:"\u53EF\u62D6\u62FD\u6811",tabindex:"-1"},[a("\u53EF\u62D6\u62FD\u6811 "),n("a",{class:"header-anchor",href:"#\u53EF\u62D6\u62FD\u6811","aria-hidden":"true"},"#")],-1),En=n("div",null,"\u901A\u8FC7 OperableTree \u7684 dragdrop \u5C5E\u6027\u914D\u7F6E\u8282\u70B9\u7684\u62D6\u62FD\u529F\u80FD\uFF0C\u5E76\u652F\u6301\u5916\u90E8\u5143\u7D20\u62D6\u62FD\u5165\u6811\u3002",-1),Cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"dragdrop"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Sortable"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tree")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":dragdrop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ dropPrev: true, dropNext: true, dropInner: true }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tree")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 2-1'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 2-1-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 2-1-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 2-2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 2-2-1'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 2-2-2'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 3-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 3-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 4-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 4-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'parent node 5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"expanded"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 5-1'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'leaf node 5-2'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Bn=P(`<h3 id="tree-\u53C2\u6570" tabindex="-1">Tree \u53C2\u6570 <a class="header-anchor" href="#tree-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><a href="#itreenode">ITreeNode[]</a></td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6811\u5F62\u7ED3\u6784\u6570\u636E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">check</td><td style="text-align:left;"><a href="#icheck">ICheck</a></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u52FE\u9009\u529F\u80FD</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">dragdrop</td><td style="text-align:left;"><a href="#idragdrop">IDragdrop</a></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u53EF\u62D6\u62FD\u529F\u80FD</td><td style="text-align:left;"><a href="#%E5%8F%AF%E6%8B%96%E6%8B%BD%E6%A0%91">\u53EF\u62D6\u62FD\u6811</a></td></tr></tbody></table><h3 id="tree-\u4E8B\u4EF6" tabindex="-1">Tree \u4E8B\u4EF6 <a class="header-anchor" href="#tree-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">toggle-change</td><td style="text-align:left;"><code>Function(node)</code></td><td style="text-align:left;">\u8282\u70B9\u5C55\u5F00/\u6536\u8D77\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u8282\u70B9\u5BF9\u8C61</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">check-change</td><td style="text-align:left;"><code>Function(node)</code></td><td style="text-align:left;">\u8282\u70B9\u52FE\u9009\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u8282\u70B9\u5BF9\u8C61</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">select-change</td><td style="text-align:left;"><code>Function(node)</code></td><td style="text-align:left;">\u8282\u70B9\u9009\u4E2D\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u8282\u70B9\u5BF9\u8C61</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">node-click</td><td style="text-align:left;"><code>Function(node)</code></td><td style="text-align:left;">\u8282\u70B9\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u70B9\u51FB\u7684\u8282\u70B9\u5BF9\u8C61</td><td style="text-align:left;"><a href="#%E5%8F%AF%E5%8B%BE%E9%80%89">\u53EF\u52FE\u9009</a></td></tr><tr><td style="text-align:left;">lazy-node</td><td style="text-align:left;"><code>Function(node, callback)</code></td><td style="text-align:left;">\u8282\u70B9\u61D2\u52A0\u8F7D\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u70B9\u51FB\u7684\u8282\u70B9\u5BF9\u8C61\u53CA\u56DE\u8C03\u51FD\u6570</td><td style="text-align:left;"><a href="#%E8%8A%82%E7%82%B9%E6%87%92%E5%8A%A0%E8%BD%BD">\u8282\u70B9\u61D2\u52A0\u8F7D</a></td></tr></tbody></table><h3 id="tree-\u63D2\u69FD" tabindex="-1">Tree \u63D2\u69FD <a class="header-anchor" href="#tree-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u8282\u70B9</td></tr><tr><td style="text-align:left;">content</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u8282\u70B9\u5185\u5BB9</td></tr><tr><td style="text-align:left;">icon</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u5C55\u5F00/\u6536\u8D77\u6309\u94AE</td></tr><tr><td style="text-align:left;">loading</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u8282\u70B9\u61D2\u52A0\u8F7D\u65F6 loading \u663E\u793A\u5185\u5BB9</td></tr></tbody></table><h3 id="treenode-\u53C2\u6570" tabindex="-1">TreeNode \u53C2\u6570 <a class="header-anchor" href="#treenode-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><a href="#itreenode">ITreeNode</a></td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8282\u70B9\u6570\u636E</td></tr><tr><td style="text-align:left;">check</td><td style="text-align:left;"><a href="#icheck">ICheck</a></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u52FE\u9009\u529F\u80FD</td></tr><tr><td style="text-align:left;">dragdrop</td><td style="text-align:left;"><a href="#idragdrop">IDragdrop</a></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u53EF\u62D6\u62FD\u529F\u80FD</td></tr><tr><td style="text-align:left;">height</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>-</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u542F\u7528\u865A\u62DF\u6EDA\u52A8</td></tr></tbody></table><h3 id="tree-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Tree \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#tree-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="itreenode" tabindex="-1">ITreeNode <a class="header-anchor" href="#itreenode" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
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
</code></pre></div><h4 id="idragdrop" tabindex="-1">IDragdrop <a class="header-anchor" href="#idragdrop" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IDragdrop</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token builtin">boolean</span>
  <span class="token operator">|</span> <span class="token punctuation">{</span>
      dropPrev<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
      dropNext<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
      dropInner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="treefactory" tabindex="-1">treeFactory <a class="header-anchor" href="#treefactory" aria-hidden="true">#</a></h3><p><code>treeFactory</code>\u662F\u7EC4\u4EF6\u5185\u90E8\u66B4\u9732\u51FA\u6765\u7684\u4E00\u4E9B\u6570\u636E\u548C\u65B9\u6CD5\uFF0C\u5F53\u81EA\u5B9A\u4E49\u6811\u7ED3\u6784\u7684\u65F6\u5019\u4F1A\u7528\u5230\u3002</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">TreeFactory</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6241\u5E73\u5316\u5904\u7406\u540E\u7684\u6570\u636E\uFF0CIInnerTreeNode \u89C1\u4E0B\u8868</span>
  treeData<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>IInnerTreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u8282\u70B9\u5C42\u7EA7</span>
  <span class="token function-variable function">getLevel</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u67D0\u4E2A\u8282\u70B9\u7684\u5B50\u8282\u70B9</span>
  getChildren<span class="token operator">:</span> <span class="token punctuation">(</span>
    node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">,</span>
    config<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      expanded<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u53EA\u4ECE\u5C55\u5F00\u4E86\u7684\u8282\u70B9\u4E2D\u83B7\u53D6\u6570\u636E</span>
      recursive<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u9700\u8981\u83B7\u53D6\u975E\u76F4\u63A5\u5B50\u8282\u70B9</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IInnerTreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u67D0\u4E2A\u8282\u70B9\u7684\u7236\u8282\u70B9</span>
  <span class="token function-variable function">getParent</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IInnerTreeNode<span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u5F53\u524D\u662F\u5C55\u5F00\u72B6\u6001\u7684\u8282\u70B9</span>
  <span class="token function-variable function">getExpendedTree</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> ComputedRef<span class="token operator">&lt;</span>IInnerTreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u67D0\u4E2A\u8282\u70B9\u5728\u6241\u5E73\u5316\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u7D22\u5F15</span>
  <span class="token function-variable function">getIndex</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8BBE\u7F6E\u67D0\u4E2A\u8282\u70B9\u7684\u5C5E\u6027\u503C</span>
  <span class="token function-variable function">setNodeValue</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token keyword">keyof</span> IInnerTreeNode<span class="token punctuation">,</span> value<span class="token operator">:</span> valueof<span class="token operator">&lt;</span>IInnerTreeNode<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5C55\u5F00\u8282\u70B9\uFF0C\u5E76\u89E6\u53D1\`toggle-change\`\u4E8B\u4EF6</span>
  <span class="token function-variable function">expandNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6536\u8D77\u8282\u70B9\uFF0C\u5E76\u89E6\u53D1\`toggle-change\`\u4E8B\u4EF6</span>
  <span class="token function-variable function">collapseNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5C55\u5F00/\u6536\u8D77\u8282\u70B9</span>
  <span class="token function-variable function">toggleNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5C55\u5F00\u6240\u6709\u8282\u70B9</span>
  <span class="token function-variable function">expandAllNodes</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5355\u9009\uFF0C\u5E76\u89E6\u53D1\`select-change\`\u4E8B\u4EF6</span>
  <span class="token function-variable function">selectNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u53D6\u6D88\u5355\u9009\uFF0C\u5E76\u89E6\u53D1\`select-change\`\u4E8B\u4EF6</span>
  <span class="token function-variable function">deselectNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5355\u9009/\u53D6\u6D88\u5355\u9009\uFF0C\u5E76\u89E6\u53D1\`select-change\`\u4E8B\u4EF6</span>
  <span class="token function-variable function">toggleSelectNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u5DF2\u5355\u9009\u7684\u8282\u70B9</span>
  <span class="token function-variable function">getSelectedNode</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IInnerTreeNode<span class="token punctuation">;</span>

  <span class="token comment">// \u52FE\u9009\uFF0C\u5E76\u89E6\u53D1\`check-change\`\u4E8B\u4EF6</span>
  <span class="token function-variable function">checkNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u53D6\u6D88\u52FE\u9009\uFF0C\u5E76\u89E6\u53D1\`check-change\`\u4E8B\u4EF6</span>
  <span class="token function-variable function">uncheckNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u52FE\u9009/\u53D6\u6D88\u52FE\u9009\uFF0C\u5E76\u89E6\u53D1\`check-change\`\u4E8B\u4EF6</span>
  <span class="token function-variable function">toggleCheckNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u83B7\u53D6\u5DF2\u52FE\u9009\u7684\u8282\u70B9</span>
  <span class="token function-variable function">getCheckedNodes</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> IInnerTreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7981\u7528\u8282\u70B9\u5355\u9009</span>
  <span class="token function-variable function">disableSelectNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7981\u7528\u8282\u70B9\u52FE\u9009</span>
  <span class="token function-variable function">disableCheckNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u7981\u7528\u8282\u70B9\u5C55\u5F00/\u6536\u8D77</span>
  <span class="token function-variable function">disableToggleNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u542F\u7528\u8282\u70B9\u5355\u9009</span>
  <span class="token function-variable function">enableSelectNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u542F\u7528\u8282\u70B9\u52FE\u9009</span>
  <span class="token function-variable function">enableCheckNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u542F\u7528\u8282\u70B9\u5C55\u5F00/\u6536\u8D77</span>
  <span class="token function-variable function">enableToggleNode</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5F53\u8282\u70B9\u53EA\u6709\u4E00\u4E2A\u5B50\u8282\u70B9\u65F6\uFF0C\u5408\u5E76\u663E\u793A</span>
  <span class="token function-variable function">mergeTreeNodes</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u61D2\u52A0\u8F7D\u67D0\u4E2A\u8282\u70B9\u7684\u5B50\u8282\u70B9</span>
  <span class="token function-variable function">lazyLoadNodes</span><span class="token operator">:</span> <span class="token punctuation">(</span>node<span class="token operator">:</span> IInnerTreeNode<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token comment">// \u641C\u7D22\u8282\u70B9\uFF0C\u53C2\u6570\u4E3A\u641C\u7D22\u5173\u952E\u5B57\u548C\u641C\u7D22\u914D\u7F6E\u9879\uFF0CSearchFilterOption \u89C1\u4E0B\u8868</span>
  <span class="token function-variable function">searchTree</span><span class="token operator">:</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> option<span class="token operator">:</span> SearchFilterOption<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="iinnertreenode" tabindex="-1">IInnerTreeNode <a class="header-anchor" href="#iinnertreenode" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">IInnerTreeNode</span> <span class="token keyword">extends</span> <span class="token class-name">ITreeNode</span> <span class="token punctuation">{</span>
  level<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  idType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;random&#39;</span><span class="token punctuation">;</span>
  parentId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  isLeaf<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  parentChildNodeCount<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  currentIndex<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  loading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u8282\u70B9\u662F\u5426\u663E\u793A\u52A0\u8F7D\u4E2D</span>
  childNodeCount<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u8BE5\u8282\u70B9\u7684\u5B50\u8282\u70B9\u7684\u6570\u91CF</span>
  isMatched<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u641C\u7D22\u8FC7\u6EE4\u65F6\u662F\u5426\u5339\u914D\u8BE5\u8282\u70B9</span>
  childrenMatched<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u641C\u7D22\u8FC7\u6EE4\u65F6\u662F\u5426\u6709\u5B50\u8282\u70B9\u5B58\u5728\u5339\u914D</span>
  isHide<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u8FC7\u6EE4\u540E\u662F\u5426\u4E0D\u663E\u793A\u8BE5\u8282\u70B9</span>
  matchedText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u8282\u70B9\u5339\u914D\u7684\u6587\u5B57\uFF08\u9700\u8981\u9AD8\u4EAE\u663E\u793A\uFF09</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="searchfilteroption" tabindex="-1">SearchFilterOption <a class="header-anchor" href="#searchfilteroption" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">SearchFilterOption</span> <span class="token punctuation">{</span>
  isFilter<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u662F\u5426\u662F\u8FC7\u6EE4\u8282\u70B9</span>
  matchKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// node\u8282\u70B9\u4E2D\u5339\u914D\u641C\u7D22\u8FC7\u6EE4\u7684\u5B57\u6BB5\u540D</span>
  pattern<span class="token operator">?</span><span class="token operator">:</span> RegExp<span class="token punctuation">;</span> <span class="token comment">// \u641C\u7D22\u8FC7\u6EE4\u65F6\u5339\u914D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</span>
<span class="token punctuation">}</span>
</code></pre></div>`,22);function _n(e,s,t,d,g,h){const k=x("render-demo-0"),o=x("demo"),r=x("render-demo-1"),p=x("render-demo-2"),u=x("render-demo-3"),m=x("render-demo-4"),c=x("render-demo-5"),i=x("render-demo-6"),F=x("render-demo-7"),E=x("render-demo-8"),B=x("render-demo-9"),C=x("render-demo-10");return j(),$("div",null,[K,f(o,{sourceCode:`<template>
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
`},{description:l(()=>[U]),highlight:l(()=>[W]),default:l(()=>[f(k)]),_:1}),H,f(o,{sourceCode:`<template>
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
`},{description:l(()=>[G]),highlight:l(()=>[J]),default:l(()=>[f(r)]),_:1}),Q,f(o,{sourceCode:`<template>
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
`},{description:l(()=>[X]),highlight:l(()=>[Y]),default:l(()=>[f(p)]),_:1}),nn,f(o,{sourceCode:`<template>
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
`},{description:l(()=>[an]),highlight:l(()=>[sn]),default:l(()=>[f(u)]),_:1}),tn,f(o,{sourceCode:`<template>
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
`},{description:l(()=>[en]),highlight:l(()=>[on]),default:l(()=>[f(m)]),_:1}),pn,f(o,{sourceCode:`<template>
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
`},{description:l(()=>[cn]),highlight:l(()=>[ln]),default:l(()=>[f(c)]),_:1}),un,f(o,{sourceCode:`<template>
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
`},{highlight:l(()=>[rn]),default:l(()=>[f(i)]),_:1}),kn,f(o,{sourceCode:`<template>
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
            label: 'Leaf node 1-1',
            id: 'node-1-1',
            children: [{ label: 'Leaf node 1-1-1', id: 'node-1-1-1' }],
          },
          { label: 'Leaf node 1-2', id: 'node-1-2' },
        ],
      },
      { label: 'Parent node 2', id: 'node-2' },
    ]);

    const addNode = () => {
      if (!selectedNode.value) {
        return;
      }
      const childs = treeRef.value.treeFactory.getChildren(selectedNode.value);
      let labelName = 'new node';
      if (!childs || childs.length === 0) {
        labelName = selectedNode.value.label + '-1';
      } else if (childs.length > 0) {
        labelName = selectedNode.value.label + \`-\${childs.length + 1}\`;
      }
      if (labelName.startsWith('Parent')) {
        labelName = labelName.replace('Parent', 'Leaf');
      }
      treeRef.value.treeFactory.insertBefore(selectedNode.value, { label: labelName });
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
`},{description:l(()=>[dn]),highlight:l(()=>[hn]),default:l(()=>[f(F)]),_:1}),gn,f(o,{sourceCode:`<template>
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
`},{description:l(()=>[yn]),highlight:l(()=>[fn]),default:l(()=>[f(E)]),_:1}),mn,f(o,{sourceCode:`<template>
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
`},{description:l(()=>[bn]),highlight:l(()=>[Fn]),default:l(()=>[f(B)]),_:1}),vn,f(o,{sourceCode:`<template>
  <div class="mb-0">Default</div>
  <d-tree class="mb-2" :data="data" dragdrop></d-tree>
  <div class="mb-0">Sortable</div>
  <d-tree class="mb-2" :data="data" :dragdrop="{ dropPrev: true, dropNext: true, dropInner: true }"></d-tree>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        label: 'parent node 1',
      },
      {
        label: 'parent node 2',
        expanded: true,
        children: [
          {
            label: 'leaf node 2-1',
            expanded: true,
            children: [
              {
                label: 'leaf node 2-1-1',
              },
              {
                label: 'leaf node 2-1-2',
              },
            ],
          },
          {
            label: 'leaf node 2-2',
            children: [
              {
                label: 'leaf node 2-2-1',
              },
              {
                label: 'leaf node 2-2-2',
              },
            ],
          },
        ],
      },
      {
        label: 'parent node 3',
        expanded: true,
        children: [
          {
            label: 'leaf node 3-1',
          },
          {
            label: 'leaf node 3-2',
          },
        ],
      },
      {
        label: 'parent node 4',
        expanded: true,
        children: [
          {
            label: 'leaf node 4-1',
          },
          {
            label: 'leaf node 4-2',
          },
        ],
      },
      {
        label: 'parent node 5',
        expanded: true,
        children: [
          {
            label: 'leaf node 5-1',
          },
          {
            label: 'leaf node 5-2',
          },
        ],
      },
    ]);
    return {
      data,
    };
  },
});
<\/script>
`},{description:l(()=>[En]),highlight:l(()=>[Cn]),default:l(()=>[f(C)]),_:1}),Bn])}var Nn=z(O,[["render",_n]]);export{wn as __pageData,Nn as default};
