var W=Object.defineProperty;var f=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var C=(c,u,e)=>u in c?W(c,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[u]=e,A=(c,u)=>{for(var e in u||(u={}))X.call(u,e)&&C(c,e,u[e]);if(f)for(var e of f(u))Y.call(u,e)&&C(c,e,u[e]);return c};import{_ as Z,V as B,r as y,c as nn,b as D,w as _,a as b,o as an,d as n,e as a}from"./app.28b0be16.js";const sn={name:"component-doc",components:{"render-demo-0":function(){const{renderList:c,Fragment:u,openBlock:e,createElementBlock:m,toDisplayString:g,createTextVNode:l,resolveComponent:r,withCtx:i,createBlock:v,createVNode:k,createElementVNode:o,vShow:q,withDirectives:O}=B,M={class:"space-y-s"},S={class:"flex items-center"},x=l(" \u89E6\u53D1\u65B9\u5F0F\uFF1A "),L={class:"flex items-center"},V=l(" \u5173\u95ED\u533A\u57DF\uFF1A "),I={class:"flex items-center"},N=l(" \u4EC5\u5F53\u9F20\u6807\u4ECE\u83DC\u5355\u79FB\u9664\u65F6\u624D\u5173\u95ED\uFF1A "),T={class:"flex items-center"},U=l(" \u52A8\u753B\u5F00\u5173\uFF1A "),$={class:"flex items-center"},P=l(" \u81EA\u5B9A\u4E49\u5BBD\u5EA6\uFF1A "),j=l(" px "),z=l("More"),G=o("ul",{class:"devui-dropdown-menu",role:"menu"},[o("li",{role:"menuitem"},[o("a",{class:"devui-dropdown-item"},"Item 1")]),o("li",{class:"disabled",role:"menuitem"},[o("a",{class:"devui-dropdown-item disabled"},"Item 2")]),o("li",{role:"menuitem"},[o("a",{class:"devui-dropdown-item"},"Item 3")]),o("li",{role:"menuitem"},[o("a",{class:"devui-dropdown-item"},"Item 4")])],-1);function H(s,p){const F=r("d-radio"),h=r("d-radio-group"),w=r("d-switch"),Q=r("d-input-number"),E=r("d-button"),R=r("d-dropdown");return e(),m("div",null,[o("div",M,[o("div",S,[x,k(h,{direction:"row",modelValue:s.trigger,"onUpdate:modelValue":p[0]||(p[0]=t=>s.trigger=t)},{default:i(()=>[(e(!0),m(u,null,c(s.triggerList,t=>(e(),v(F,{key:t,value:t},{default:i(()=>[l(g(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),o("div",L,[V,k(h,{direction:"row",modelValue:s.closeScope,"onUpdate:modelValue":p[1]||(p[1]=t=>s.closeScope=t)},{default:i(()=>[(e(!0),m(u,null,c(s.closeScopeAreas,t=>(e(),v(F,{key:t,value:t},{default:i(()=>[l(g(t),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),o("div",I,[N,k(w,{checked:s.closeOnMouseLeaveMenu,"onUpdate:checked":p[2]||(p[2]=t=>s.closeOnMouseLeaveMenu=t)},null,8,["checked"])]),o("div",T,[U,k(w,{checked:s.showAnimation,"onUpdate:checked":p[3]||(p[3]=t=>s.showAnimation=t)},null,8,["checked"])]),o("div",$,[P,k(Q,{modelValue:s.width,"onUpdate:modelValue":p[4]||(p[4]=t=>s.width=t),max:400,min:100,step:100},null,8,["modelValue"]),j])]),k(E,{ref:"origin",style:{"margin-top":"20px","margin-right":"10px"}},{default:i(()=>[z]),_:1},512),O(k(E,{onClick:p[5]||(p[5]=t=>s.isOpen=!s.isOpen)},{default:i(()=>[l(g(s.isOpen?"close dropdown":"show dropdown"),1)]),_:1},512),[[q,s.trigger==="manually"]]),k(R,{origin:s.origin,isOpen:s.isOpen,trigger:s.trigger,closeScope:s.closeScope,closeOnMouseLeaveMenu:s.closeOnMouseLeaveMenu,showAnimation:s.showAnimation,width:s.width},{default:i(()=>[G]),_:1},8,["origin","isOpen","trigger","closeScope","closeOnMouseLeaveMenu","showAnimation","width"])])}const{defineComponent:J,ref:d}=B,K=J({setup(){return{origin:d(),isOpen:d(!1),trigger:d("click"),triggerList:["click","hover","manually"],closeScope:d("blank"),closeScopeAreas:["all","blank","none"],closeOnMouseLeaveMenu:d(!1),showAnimation:d(!0),width:d(100)}}});return A({render:H},K)}()}},ln='{"title":"Dropdown \u4E0B\u62C9\u83DC\u5355","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"d-dropdown","slug":"d-dropdown"}],"relativePath":"components/dropdown/index.md","lastUpdated":1645285927509}',tn=b('<h1 id="dropdown-\u4E0B\u62C9\u83DC\u5355" tabindex="-1">Dropdown \u4E0B\u62C9\u83DC\u5355 <a class="header-anchor" href="#dropdown-\u4E0B\u62C9\u83DC\u5355" aria-hidden="true">#</a></h1><p>\u6309\u4E0B\u5F39\u51FA\u5217\u8868\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9875\u9762\u4E0A\u7684\u64CD\u4F5C\u547D\u4EE4\u8FC7\u591A\u65F6\uFF0C\u7528\u6B64\u7EC4\u4EF6\u53EF\u4EE5\u6536\u7EB3\u64CD\u4F5C\u5143\u7D20\u3002\u70B9\u51FB\u6216\u79FB\u5165\u89E6\u70B9\uFF0C\u4F1A\u51FA\u73B0\u4E00\u4E2A\u4E0B\u62C9\u83DC\u5355\u3002\u53EF\u5728\u5217\u8868\u4E2D\u8FDB\u884C\u9009\u62E9\uFF0C\u5E76\u6267\u884C\u76F8\u5E94\u7684\u547D\u4EE4\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("space-y-s"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex items-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u89E6\u53D1\u65B9\u5F0F\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("trigger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in triggerList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ item }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex items-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u5173\u95ED\u533A\u57DF\uFF1A 
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeScope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in closeScopeAreas"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ item }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex items-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u4EC5\u5F53\u9F20\u6807\u4ECE\u83DC\u5355\u79FB\u9664\u65F6\u624D\u5173\u95ED\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeOnMouseLeaveMenu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex items-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u52A8\u753B\u5F00\u5173\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showAnimation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("flex items-center"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u81EA\u5B9A\u4E49\u5BBD\u5EA6\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input-number")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("width"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("400"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":min"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":step"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(` px
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("origin"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("More"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(` 
    `),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("trigger === "),n("span",{class:"token punctuation"},"'"),a("manually"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),a(` 
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("isOpen = !isOpen"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    {{!isOpen ? 'show dropdown' : 'close dropdown'}}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-dropdown")]),a(` 
    `),n("span",{class:"token attr-name"},":origin"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("origin"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":isOpen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("isOpen"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("trigger"),n("span",{class:"token punctuation"},'"')]),a(` 
    `),n("span",{class:"token attr-name"},":closeScope"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeScope"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":closeOnMouseLeaveMenu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeOnMouseLeaveMenu"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showAnimation"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("width"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("ul")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("devui-dropdown-menu"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("menuitem"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("devui-dropdown-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Item 1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("disabled"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("menuitem"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("devui-dropdown-item disabled"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Item 2"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("menuitem"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("devui-dropdown-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Item 3"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("li")]),a(),n("span",{class:"token attr-name"},"role"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("menuitem"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("devui-dropdown-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Item 4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("li")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("ul")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-dropdown")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"origin"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"isOpen"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"triggerList"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'manually'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`

      `),n("span",{class:"token literal-property property"},"closeScope"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'blank'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"closeScopeAreas"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'all'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'blank'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'none'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"closeOnMouseLeaveMenu"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"showAnimation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"width"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},"ul.devui-dropdown-menu"),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".devui-dropdown-menu li"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".devui-dropdown-menu a"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" unset"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".devui-dropdown-menu a:hover"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),a(" none "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),on=b(`<h3 id="d-dropdown" tabindex="-1">d-dropdown <a class="header-anchor" href="#d-dropdown" aria-hidden="true">#</a></h3><p>d-dropdown \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>origin</td><td><code>Element | ComponentPublicInstance</code></td><td>\u65E0</td><td>\u5FC5\u9009\uFF0C\u5FC5\u987B\u6307\u5B9A dropdown \u7684\u5173\u8054\u5143\u7D20</td></tr><tr><td>isOpen</td><td><code>boolean</code></td><td><code>false</code></td><td>\u53EF\u9009\uFF0C\u53EF\u4EE5\u663E\u793A\u6307\u5B9A dropdown \u662F\u5426\u6253\u5F00</td></tr><tr><td>disabled</td><td><code>boolean</code></td><td><code>false</code></td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u4E3A true \u7981\u7528 dropdown</td></tr><tr><td>trigger</td><td><code>TriggerType</code></td><td><code>click</code></td><td>\u53EF\u9009\uFF0Cdropdown \u89E6\u53D1\u65B9\u5F0F, click \u4E3A\u70B9\u51FB\uFF0Chover \u4E3A\u60AC\u505C\uFF08\u4E5F\u5305\u542B\u70B9\u51FB\uFF09\u3001manually \u4E3A\u5B8C\u5168\u624B\u52A8\u63A7\u5236</td></tr><tr><td>closeScope</td><td><code>CloseScopeArea</code></td><td><code>all</code></td><td>\u53EF\u9009\uFF0C\u70B9\u51FB\u5173\u95ED\u533A\u57DF\uFF0Cblank \u70B9\u51FB\u975E\u83DC\u5355\u7A7A\u767D\u624D\u5173\u95ED, all \u70B9\u51FB\u83DC\u5355\u5185\u5916\u90FD\u5173\u95ED\uFF0Cnone \u83DC\u5355\u5185\u5916\u5747\u4E0D\u5173\u95ED\u4EC5\u4E0B\u62C9\u6309\u952E\u53EF\u4EE5\u5173\u95ED</td></tr><tr><td>closeOnMouseLeaveMenu</td><td><code>boolean</code></td><td><code>false</code></td><td>\u53EF\u9009\uFF0C\u662F\u5426\u8FDB\u5165\u83DC\u5355\u540E\u79BB\u5F00\u83DC\u5355\u7684\u65F6\u5019\u5173\u95ED\u83DC\u5355</td></tr><tr><td>showAnimation</td><td><code>boolean</code></td><td><code>true</code></td><td>\u53EF\u9009\uFF0C\u662F\u5426\u5F00\u542F\u52A8\u753B</td></tr><tr><td>width</td><td><code>number | string</code></td><td><code>102px</code></td><td>\u53EF\u9009\uFF0C\u5BF9 dropdown \u5185\u5BB9\u7684\u5BBD\u5EA6\u8FDB\u884C\u81EA\u5B9A\u4E49</td></tr></tbody></table><p>TriggerType \u7C7B\u578B</p><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">TriggerType</span> <span class="token operator">=</span> <span class="token string">&#39;click&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hover&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;manually&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>CloseScopeArea \u7C7B\u578B</p><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">CloseScopeArea</span> <span class="token operator">=</span> <span class="token string">&#39;all&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;blank&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,7);function un(c,u,e,m,g,l){const r=y("render-demo-0"),i=y("demo");return an(),nn("div",null,[tn,D(i,{sourceCode:`<template>
  <div class="space-y-s">
    <div class="flex items-center">
      \u89E6\u53D1\u65B9\u5F0F\uFF1A
      <d-radio-group direction="row" v-model="trigger">
        <d-radio v-for="item in triggerList" :key="item" :value="item">
          {{ item }}
        </d-radio>
      </d-radio-group>
    </div>
    <div class="flex items-center">
      \u5173\u95ED\u533A\u57DF\uFF1A 
      <d-radio-group direction="row" v-model="closeScope">
        <d-radio v-for="item in closeScopeAreas" :key="item" :value="item">
          {{ item }}
        </d-radio>
      </d-radio-group>
    </div>

    <div class="flex items-center">
      \u4EC5\u5F53\u9F20\u6807\u4ECE\u83DC\u5355\u79FB\u9664\u65F6\u624D\u5173\u95ED\uFF1A
      <d-switch v-model:checked="closeOnMouseLeaveMenu"></d-switch>
    </div>

    <div class="flex items-center">
      \u52A8\u753B\u5F00\u5173\uFF1A
      <d-switch v-model:checked="showAnimation"></d-switch>
    </div>
    <div class="flex items-center">
      \u81EA\u5B9A\u4E49\u5BBD\u5EA6\uFF1A
      <d-input-number v-model="width" :max="400" :min="100" :step="100" /> px
    </div>
  </div>
  <d-button ref="origin" style="margin-top: 20px; margin-right: 10px">More</d-button>
  <d-button 
    v-show="trigger === 'manually'" 
    @click="isOpen = !isOpen"
  >
    {{!isOpen ? 'show dropdown' : 'close dropdown'}}
  </d-button>
  <d-dropdown 
    :origin="origin"
    :isOpen="isOpen"
    :trigger="trigger" 
    :closeScope="closeScope"
    :closeOnMouseLeaveMenu="closeOnMouseLeaveMenu"
    :showAnimation="showAnimation"
    :width="width"
  >
    <ul class="devui-dropdown-menu" role="menu">
      <li role="menuitem">
        <a class="devui-dropdown-item">Item 1</a>
      </li>
      <li class="disabled" role="menuitem">
        <a class="devui-dropdown-item disabled">Item 2</a>
      </li>
      <li role="menuitem">
        <a class="devui-dropdown-item">Item 3</a>
      </li>
      <li role="menuitem">
        <a class="devui-dropdown-item">Item 4</a>
      </li>
    </ul>
  </d-dropdown>
</template>
<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      origin: ref(),
      isOpen: ref(false),
      trigger: ref('click'),
      triggerList: ['click', 'hover', 'manually'],

      closeScope: ref('blank'),
      closeScopeAreas: ['all', 'blank', 'none'],
      closeOnMouseLeaveMenu: ref(false),
      showAnimation: ref(true),
      width: ref(100)
    }
  }
})
<\/script>

<style>
ul.devui-dropdown-menu{
  padding-left: 0;
}
.devui-dropdown-menu li {
  padding-left: 0;
}

.devui-dropdown-menu a {
  color: unset;
}
.devui-dropdown-menu a:hover {
  text-decoration: none !important;
}

</style>
`},{highlight:_(()=>[en]),default:_(()=>[D(r)]),_:1}),on])}var rn=Z(sn,[["render",un]]);export{ln as __pageData,rn as default};
