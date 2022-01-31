var O=Object.defineProperty;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var _=(o,e,a)=>e in o?O(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,D=(o,e)=>{for(var a in e||(e={}))T.call(e,a)&&_(o,a,e[a]);if(x)for(var a of x(e))V.call(e,a)&&_(o,a,e[a]);return o};import{_ as q,V as f,r as m,c as H,b as g,w as v,a as S,d as n,e as t,o as $}from"./app.14dd1803.js";const W={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:o,createTextVNode:e,resolveComponent:a,withCtx:F,createVNode:r,openBlock:E,createElementBlock:C}=f;function i(s,l){const d=a("d-button"),k=a("d-drawer");return E(),C("div",null,[r(d,{onClick:s.drawerShow},{default:F(()=>[e("drawer "+o(s.btnName),1)]),_:1},8,["onClick"]),r(k,{visible:s.isDrawerShow,"onUpdate:visible":l[0]||(l[0]=u=>s.isDrawerShow=u),width:s.drawerWidth,isCover:s.isCover,backdropCloseable:s.backdropCloseable,beforeHidden:s.beforeHidden,position:"right",onClose:s.drawerClose,onAfterOpened:s.drawerAfterOpened},null,8,["visible","width","isCover","backdropCloseable","beforeHidden","onClose","onAfterOpened"])])}const{ref:c}=f;return D({render:i},{setup(){let s=c(!1),l=c("close"),d=c("15vw"),k=c(!1),u=c(!0);return{isDrawerShow:s,btnName:l,drawerWidth:d,drawerShow:()=>{s.value=!0,l.value="open"},drawerClose:()=>{l.value="close"},drawerAfterOpened:()=>{console.log("open")},isCover:k,backdropCloseable:u,beforeHidden:()=>new Promise(B=>{B(!1)})}}})}(),"render-demo-1":function(){const{createTextVNode:o,resolveComponent:e,withCtx:a,createVNode:F,createElementVNode:r,openBlock:E,createElementBlock:C}=f,i=o("drawer"),c=o("\u5185\u5BB9\u533A\u63D2\u69FD"),h={style:{display:"flex"}},s=["onClick"],l=o(" \xA0\xA0 "),d=["onClick"];function k(p,A){const b=e("d-button"),B=e("d-drawer");return E(),C("div",null,[F(b,{onClick:p.drawerShow},{default:a(()=>[i]),_:1},8,["onClick"]),F(B,{visible:p.isDrawerShow,"onUpdate:visible":A[0]||(A[0]=y=>p.isDrawerShow=y),isCover:!1},{content:a(()=>[c]),header:a(({fullscreen:y,closeDrawer:N})=>[r("div",h,[r("div",{onClick:N},"\u5173\u95ED",8,s),l,r("div",{onClick:y},"\u5168\u5C4F\u5207\u6362",8,d)])]),_:1},8,["visible"])])}const{ref:u}=f;return D({render:k},{setup(){let p=u(!1);return{isDrawerShow:p,drawerShow:()=>{p.value=!p.value}}}})}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:e,withCtx:a,createVNode:F,openBlock:r,createElementBlock:E}=f,C=o("click me");function i(d,k){const u=e("d-button");return r(),E("div",null,[F(u,{onClick:k[0]||(k[0]=w=>d.open())},{default:a(()=>[C]),_:1})])}const{defineComponent:c,ref:h,h:s}=f,l=c({setup(d,k){const u=h(null),w=h(null);function p(){w.value=this.$drawerService.create({width:"50%",data:{"update:visible":!0},content:()=>s("div",{onClick:()=>{w.value.destroy()}},"destroy Two")},w.value),w.value.show(),u.value=this.$drawerService.create({content:()=>[s("div",{onClick:()=>{u.value.hide()}},"hide One"),s("div",{onClick:()=>{w.value.destroy()}},"destroy Two")]},u.value),u.value.show()}return{open:p}}});return D({render:i},l)}()}},R='{"title":"Drawer \u62BD\u5C49\u677F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6A21\u677F","slug":"\u81EA\u5B9A\u4E49\u6A21\u677F"},{"level":3,"title":"\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528","slug":"\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528"},{"level":3,"title":"\u53C2\u6570\u53CA API","slug":"\u53C2\u6570\u53CA-api"},{"level":3,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"components/drawer/index.md","lastUpdated":1643624258243}',P=S('<h1 id="drawer-\u62BD\u5C49\u677F" tabindex="-1">Drawer \u62BD\u5C49\u677F <a class="header-anchor" href="#drawer-\u62BD\u5C49\u677F" aria-hidden="true">#</a></h1><p>\u5C4F\u5E55\u8FB9\u7F18\u6ED1\u51FA\u7684\u6D6E\u5C42\u9762\u677F\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u62BD\u5C49\u4ECE\u7236\u7A97\u4F53\u8FB9\u7F18\u6ED1\u5165\uFF0C\u8986\u76D6\u4F4F\u90E8\u5206\u7236\u7A97\u4F53\u5185\u5BB9\u3002\u7528\u6237\u5728\u62BD\u5C49\u5185\u64CD\u4F5C\u65F6\u4E0D\u5FC5\u79BB\u5F00\u5F53\u524D\u4EFB\u52A1\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5E73\u6ED1\u5730\u56DE\u5230\u5230\u539F\u4EFB\u52A1\u3002</li><li>\u5F53\u9700\u8981\u4E00\u4E2A\u9644\u52A0\u7684\u9762\u677F\u6765\u63A7\u5236\u7236\u7A97\u4F53\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u9762\u677F\u5728\u9700\u8981\u65F6\u547C\u51FA\u3002\u6BD4\u5982\uFF0C\u63A7\u5236\u754C\u9762\u5C55\u793A\u6837\u5F0F\uFF0C\u5F80\u754C\u9762\u4E2D\u6DFB\u52A0\u5185\u5BB9\u3002</li><li>\u5F53\u9700\u8981\u5728\u5F53\u524D\u4EFB\u52A1\u6D41\u4E2D\u63D2\u5165\u4E34\u65F6\u4EFB\u52A1\uFF0C\u521B\u5EFA\u6216\u9884\u89C8\u9644\u52A0\u5185\u5BB9\u3002\u6BD4\u5982\u5C55\u793A\u534F\u8BAE\u6761\u6B3E\uFF0C\u521B\u5EFA\u5B50\u5BF9\u8C61\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><h4>\u57FA\u672C\u7528\u6CD5\uFF0C\u53EF\u4EE5\u63A7\u5236\u5168\u5C4F\u3001\u5173\u95ED\u548C\u8BBE\u7F6E\u5BBD\u5EA6\u3002</h4>',6),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drawerShow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("drawer {{ btnName }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-drawer")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isDrawerShow"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drawerWidth"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":isCover"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isCover"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":backdropCloseable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("backdropCloseable"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":beforeHidden"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeHidden"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("right"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drawerClose"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@afterOpened"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drawerAfterOpened"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" isDrawerShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" btnName "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'close'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" drawerWidth "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'15vw'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" isCover "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" backdropCloseable "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"drawerShow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isDrawerShow`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
      btnName`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'open'"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"drawerClose"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      btnName`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'close'"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"drawerAfterOpened"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'open'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"beforeHidden"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isDrawerShow`),n("span",{class:"token punctuation"},","),t(`
      btnName`),n("span",{class:"token punctuation"},","),t(`
      drawerWidth`),n("span",{class:"token punctuation"},","),t(`
      drawerShow`),n("span",{class:"token punctuation"},","),t(`
      drawerClose`),n("span",{class:"token punctuation"},","),t(`
      drawerAfterOpened`),n("span",{class:"token punctuation"},","),t(`
      isCover`),n("span",{class:"token punctuation"},","),t(`
      backdropCloseable`),n("span",{class:"token punctuation"},","),t(`
      beforeHidden
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),I=n("h3",{id:"\u81EA\u5B9A\u4E49\u6A21\u677F",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6A21\u677F","aria-hidden":"true"},"#")],-1),U=n("h4",null,"\u81EA\u5B9A\u4E49\u62BD\u5C49\u677F\u6A21\u677F\u3002",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drawerShow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("drawer"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-drawer")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isDrawerShow"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isCover"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("content")]),n("span",{class:"token punctuation"},">")]),t("\u5185\u5BB9\u533A\u63D2\u69FD"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("header")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ fullscreen, closeDrawer }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("closeDrawer"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u5173\u95ED"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),n("span",{class:"token entity named-entity",title:"\xA0"},"&nbsp;"),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fullscreen"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u5168\u5C4F\u5207\u6362"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-drawer")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" isDrawerShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"drawerShow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isDrawerShow`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("isDrawerShow"),n("span",{class:"token punctuation"},"."),t(`value
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isDrawerShow`),n("span",{class:"token punctuation"},","),t(`
      drawerShow
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h3",{id:"\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528",tabindex:"-1"},[t("\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528 "),n("a",{class:"header-anchor",href:"#\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528","aria-hidden":"true"},"#")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("click me"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" drawerOne "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" drawerTwo "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      drawerTwo`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$drawerService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          width`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'50%'"),n("span",{class:"token punctuation"},","),t(`
          data`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token string"},"'update:visible'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
              `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token punctuation"},"{"),t(`
                `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                  drawerTwo`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"destroy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
                `),n("span",{class:"token punctuation"},"}"),t(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token string"},"'destroy Two'"),t(`
            `),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        drawerTwo`),n("span",{class:"token punctuation"},"."),t(`value
      `),n("span",{class:"token punctuation"},")"),t(`
      drawerTwo`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      drawerOne`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$drawerService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),t(`
        `),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function-variable function"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"["),t(`
              `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
                `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    drawerOne`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"hide"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
                  `),n("span",{class:"token punctuation"},"}"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token string"},"'hide One'"),t(`
              `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
                `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                  `),n("span",{class:"token function-variable function"},"onClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    drawerTwo`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"destroy"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
                  `),n("span",{class:"token punctuation"},"}"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token string"},"'destroy Two'"),t(`
              `),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        drawerOne`),n("span",{class:"token punctuation"},"."),t(`value
      `),n("span",{class:"token punctuation"},")"),t(`
      drawerOne`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      open
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=S('<h3 id="\u53C2\u6570\u53CA-api" tabindex="-1">\u53C2\u6570\u53CA API <a class="header-anchor" href="#\u53C2\u6570\u53CA-api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">v-model:visible</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u8BBE\u7F6E\u62BD\u5C49\u677F\u662F\u5426\u53EF\u89C1</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>300px</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u62BD\u5C49\u677F\u5BBD\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1000</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E drawer \u7684 z-index \u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">isCover</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u6709\u906E\u7F69\u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">escKeyCloseable</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u53EF\u5426\u901A\u8FC7 esc \u6309\u952E\u6765\u5173\u95ED drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">position</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">&#39;right&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u62BD\u5C49\u677F\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C&#39;left&#39;\u6216\u8005&#39;right&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">backdropCloseable</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u53EF\u5426\u901A\u8FC7\u70B9\u51FB\u80CC\u666F\u6765\u5173\u95ED drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">destroyOnHide</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u662F\u5426\u5728\u9690\u85CF\u65F6\u9500\u6BC1 drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">beforeHidden</td><td style="text-align:center;"><code>Function | Promise</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u7A97\u53E3\u4E4B\u524D\u7684\u56DE\u8C03</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">onClose</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED drawer \u65F6\u5019\u8C03\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">onAfterOpened</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6253\u5F00 drawer \u540E\u65F6\u5019\u8C03\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u540D\u79F0</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">content</td><td style="text-align:center;">\u5177\u540D\u63D2\u69FD</td><td style="text-align:center;">\u62BD\u5C49\u677F\u5185\u5BB9</td><td style="text-align:center;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF">\u81EA\u5B9A\u4E49\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">header</td><td style="text-align:center;">\u4F5C\u7528\u57DF\u63D2\u69FD</td><td style="text-align:center;">\u62BD\u5C49\u677F\u5934\u90E8</td><td style="text-align:center;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF">\u81EA\u5B9A\u4E49\u6A21\u677F</a></td></tr></tbody></table><h4 id="\u4F5C\u7528\u57DF\u63D2\u69FD\u53C2\u6570" tabindex="-1">\u4F5C\u7528\u57DF\u63D2\u69FD\u53C2\u6570 <a class="header-anchor" href="#\u4F5C\u7528\u57DF\u63D2\u69FD\u53C2\u6570" aria-hidden="true">#</a></h4><table><thead><tr><th style="text-align:center;">\u540D\u79F0</th><th style="text-align:center;">\u4F5C\u7528</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">fullscreen</td><td style="text-align:center;">\u5207\u6362\u5168\u5C4F</td><td style="text-align:center;">--</td><td style="text-align:center;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF">\u81EA\u5B9A\u4E49\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">closeDrawer</td><td style="text-align:center;">\u5173\u95ED\u62BD\u5C49\u677F</td><td style="text-align:center;">\u5728\u5173\u95ED\u62BD\u5C49\u677F\u65F6\u5FC5\u987B\u8C03\u7528\u8BE5\u65B9\u6CD5\uFF0C\u5426\u5219 <code>beforeHidden</code> \u548C <code>close</code> \u5C5E\u6027\u4E0D\u751F\u6548</td><td style="text-align:center;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF">\u81EA\u5B9A\u4E49\u6A21\u677F</a></td></tr></tbody></table>',6);function L(o,e,a,F,r,E){const C=m("render-demo-0"),i=m("demo"),c=m("render-demo-1"),h=m("render-demo-2");return $(),H("div",null,[P,g(i,{sourceCode:`<template>
  <d-button @click="drawerShow">drawer {{ btnName }}</d-button>
  <d-drawer
    v-model:visible="isDrawerShow"
    :width="drawerWidth"
    :isCover="isCover"
    :backdropCloseable="backdropCloseable"
    :beforeHidden="beforeHidden"
    position="right"
    @close="drawerClose"
    @afterOpened="drawerAfterOpened"
  />
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    let isDrawerShow = ref(false)
    let btnName = ref('close')
    let drawerWidth = ref('15vw')
    let isCover = ref(false)
    let backdropCloseable = ref(true)

    const drawerShow = () => {
      isDrawerShow.value = true
      btnName.value = 'open'
    }

    const drawerClose = () => {
      btnName.value = 'close'
    }

    const drawerAfterOpened = () => {
      console.log('open')
    }

    const beforeHidden = () => {
      return new Promise((resolve) => {
        resolve(false)
      })
    }

    return {
      isDrawerShow,
      btnName,
      drawerWidth,
      drawerShow,
      drawerClose,
      drawerAfterOpened,
      isCover,
      backdropCloseable,
      beforeHidden
    }
  }
}
<\/script>
`},{highlight:v(()=>[j]),default:v(()=>[g(C)]),_:1}),I,U,g(i,{sourceCode:`<template>
  <d-button @click="drawerShow">drawer</d-button>
  <d-drawer v-model:visible="isDrawerShow" :isCover="false">
    <template v-slot:content>\u5185\u5BB9\u533A\u63D2\u69FD</template>
    <template v-slot:header="{ fullscreen, closeDrawer }">
      <div style="display: flex;">
        <div @click="closeDrawer">\u5173\u95ED</div>
        &nbsp;&nbsp;
        <div @click="fullscreen">\u5168\u5C4F\u5207\u6362</div>
      </div>
    </template>
  </d-drawer>
</template>
<script>
import { ref } from 'vue'

export default {
  setup() {
    let isDrawerShow = ref(false)

    const drawerShow = () => {
      isDrawerShow.value = !isDrawerShow.value
    }

    return {
      isDrawerShow,
      drawerShow
    }
  }
}
<\/script>
`},{highlight:v(()=>[z]),default:v(()=>[g(c)]),_:1}),K,g(i,{sourceCode:`<template>
  <d-button @click="open()">click me</d-button>
</template>
<script>
import { defineComponent, ref, h } from 'vue'
export default defineComponent({
  setup(props, ctx) {
    const drawerOne = ref(null)
    const drawerTwo = ref(null)
    function open() {
      drawerTwo.value = this.$drawerService.create(
        {
          width: '50%',
          data: {
            'update:visible': true
          },
          content: () => {
            return h(
              'div',
              {
                onClick: () => {
                  drawerTwo.value.destroy()
                }
              },
              'destroy Two'
            )
          }
        },
        drawerTwo.value
      )
      drawerTwo.value.show()
      drawerOne.value = this.$drawerService.create(
        {
          content: () => {
            return [
              h(
                'div',
                {
                  onClick: () => {
                    drawerOne.value.hide()
                  }
                },
                'hide One'
              ),
              h(
                'div',
                {
                  onClick: () => {
                    drawerTwo.value.destroy()
                  }
                },
                'destroy Two'
              )
            ]
          }
        },
        drawerOne.value
      )
      drawerOne.value.show()
    }
    return {
      open
    }
  }
})
<\/script>
`},{highlight:v(()=>[G]),default:v(()=>[g(h)]),_:1}),J])}var X=q(W,[["render",L]]);export{R as __pageData,X as default};
