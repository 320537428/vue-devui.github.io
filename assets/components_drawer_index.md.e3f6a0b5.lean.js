var S=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var y=(u,s,a)=>s in u?S(u,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):u[s]=a,v=(u,s)=>{for(var a in s||(s={}))N.call(s,a)&&y(u,a,s[a]);if(b)for(var a of b(s))V.call(s,a)&&y(u,a,s[a]);return u};import{_ as q,V as f,r as B,c as H,b as E,w as g,a as x,d as n,e as t,o as O}from"./app.fb1a4d98.js";const W={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:u,createTextVNode:s,resolveComponent:a,withCtx:i,createVNode:d,openBlock:k,createBlock:C,createCommentVNode:p,createElementBlock:w}=f;function F(e,c){const o=a("d-button"),l=a("d-drawer");return k(),w("div",null,[d(o,{onClick:e.drawerShow},{default:i(()=>[s(" drawer "+u(e.btnName),1)]),_:1},8,["onClick"]),e.isDrawerShow?(k(),C(l,{key:0,visible:e.isDrawerShow,"onUpdate:visible":c[0]||(c[0]=h=>e.isDrawerShow=h),width:e.drawerWidth,isCover:e.isCover,backdropCloseable:e.backdropCloseable,beforeHidden:e.beforeHidden,position:"right",onClose:e.drawerClose,onAfterOpened:e.drawerAfterOpened},null,8,["visible","width","isCover","backdropCloseable","beforeHidden","onClose","onAfterOpened"])):p("v-if",!0)])}const{ref:r}=f;return v({render:F},{setup(){let e=r(!1),c=r("close"),o=r("15vw"),l=r(!1),h=r(!0);return{isDrawerShow:e,btnName:c,drawerWidth:o,drawerShow:()=>{e.value=!0,c.value="open"},drawerClose:()=>{c.value="close"},drawerAfterOpened:()=>{console.log("open")},isCover:l,backdropCloseable:h,beforeHidden:()=>new Promise(_=>{_(!1)})}}})}(),"render-demo-1":function(){const{createTextVNode:u,resolveComponent:s,withCtx:a,createVNode:i,createElementVNode:d,openBlock:k,createElementBlock:C}=f,p=u(" drawer "),w=u(" \u5185\u5BB9\u533A\u63D2\u69FD "),r=[d("span",{class:"icon icon-close"},null,-1)];function m(o,l){const h=s("d-button"),D=s("d-drawer");return k(),C("div",null,[i(h,{onClick:o.drawerShow},{default:a(()=>[p]),_:1},8,["onClick"]),i(D,{visible:o.isDrawerShow,"onUpdate:visible":l[1]||(l[1]=A=>o.isDrawerShow=A),isCover:!1},{default:a(()=>[w]),header:a(()=>[d("div",{onClick:l[0]||(l[0]=(...A)=>o.drawerClose&&o.drawerClose(...A))},r)]),_:1},8,["visible"])])}const{ref:e}=f;return v({render:m},{setup(){let o=e(!1);return{isDrawerShow:o,drawerShow:()=>{o.value=!o.value},drawerClose:()=>{o.value=!1}}}})}(),"render-demo-2":function(){const{createTextVNode:u,resolveComponent:s,withCtx:a,createVNode:i,openBlock:d,createElementBlock:k}=f,C=u("click me");function p(e,c){const o=s("d-button");return d(),k("div",null,[i(o,{onClick:c[0]||(c[0]=l=>e.open())},{default:a(()=>[C]),_:1})])}const{defineComponent:w,ref:F,h:r}=f,m=w({setup(e,c){F(null);function o(){this.$drawerService.show({visible:!0,isCover:!1})}return{open:o}}});return v({render:p},m)}()}},R='{"title":"Drawer \u62BD\u5C49\u677F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6A21\u677F","slug":"\u81EA\u5B9A\u4E49\u6A21\u677F"},{"level":3,"title":"\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528","slug":"\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528"},{"level":3,"title":"\u53C2\u6570\u53CAAPI","slug":"\u53C2\u6570\u53CAapi"},{"level":3,"title":"\u63D2\u69FD","slug":"\u63D2\u69FD"}],"relativePath":"components/drawer/index.md","lastUpdated":1640619429520}',$=x('<h1 id="drawer-\u62BD\u5C49\u677F" tabindex="-1">Drawer \u62BD\u5C49\u677F <a class="header-anchor" href="#drawer-\u62BD\u5C49\u677F" aria-hidden="true">#</a></h1><p>\u5C4F\u5E55\u8FB9\u7F18\u6ED1\u51FA\u7684\u6D6E\u5C42\u9762\u677F\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u62BD\u5C49\u4ECE\u7236\u7A97\u4F53\u8FB9\u7F18\u6ED1\u5165\uFF0C\u8986\u76D6\u4F4F\u90E8\u5206\u7236\u7A97\u4F53\u5185\u5BB9\u3002\u7528\u6237\u5728\u62BD\u5C49\u5185\u64CD\u4F5C\u65F6\u4E0D\u5FC5\u79BB\u5F00\u5F53\u524D\u4EFB\u52A1\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5E73\u6ED1\u5730\u56DE\u5230\u5230\u539F\u4EFB\u52A1\u3002</li><li>\u5F53\u9700\u8981\u4E00\u4E2A\u9644\u52A0\u7684\u9762\u677F\u6765\u63A7\u5236\u7236\u7A97\u4F53\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u9762\u677F\u5728\u9700\u8981\u65F6\u547C\u51FA\u3002\u6BD4\u5982\uFF0C\u63A7\u5236\u754C\u9762\u5C55\u793A\u6837\u5F0F\uFF0C\u5F80\u754C\u9762\u4E2D\u6DFB\u52A0\u5185\u5BB9\u3002</li><li>\u5F53\u9700\u8981\u5728\u5F53\u524D\u4EFB\u52A1\u6D41\u4E2D\u63D2\u5165\u4E34\u65F6\u4EFB\u52A1\uFF0C\u521B\u5EFA\u6216\u9884\u89C8\u9644\u52A0\u5185\u5BB9\u3002\u6BD4\u5982\u5C55\u793A\u534F\u8BAE\u6761\u6B3E\uFF0C\u521B\u5EFA\u5B50\u5BF9\u8C61\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><h4>\u57FA\u672C\u7528\u6CD5\uFF0C\u53EF\u4EE5\u63A7\u5236\u5168\u5C4F\u3001\u5173\u95ED\u548C\u8BBE\u7F6E\u5BBD\u5EA6\u3002</h4>',6),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drawerShow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" drawer {{ btnName }} "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-drawer")]),t(`
    `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isDrawerShow"),n("span",{class:"token punctuation"},'"')]),t(`
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

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" isDrawerShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" btnName "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'close'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" drawerWidth "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'15vw'"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" isCover "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" backdropCloseable "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

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
        `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
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
      beforeHidden`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"\u81EA\u5B9A\u4E49\u6A21\u677F",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6A21\u677F","aria-hidden":"true"},"#")],-1),j=n("h4",null,"\u81EA\u5B9A\u4E49\u62BD\u5C49\u677F\u6A21\u677F\u3002",-1),I=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t("  "),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drawerShow"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" drawer "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-drawer")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isDrawerShow"),n("span",{class:"token punctuation"},'"')]),t(` 
    `),n("span",{class:"token attr-name"},":isCover"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(` 
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"v-slot"),n("span",{class:"token punctuation"},">")]),t(`
      \u5185\u5BB9\u533A\u63D2\u69FD
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("header")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("drawerClose"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("icon icon-close"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-drawer")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" isDrawerShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"drawerShow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isDrawerShow`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("isDrawerShow"),n("span",{class:"token punctuation"},"."),t(`value
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"drawerClose"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isDrawerShow`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isDrawerShow`),n("span",{class:"token punctuation"},","),t(`
      drawerShow`),n("span",{class:"token punctuation"},","),t(`
      drawerClose`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),U=n("h3",{id:"\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528",tabindex:"-1"},[t("\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528 "),n("a",{class:"header-anchor",href:"#\u4EE5\u670D\u52A1\u7684\u65B9\u5F0F\u8C03\u7528","aria-hidden":"true"},"#")],-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("open()"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("click me"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" results "),n("span",{class:"token operator"},"="),t("  "),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$drawerService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        visible`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
        isCover`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      open`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=x('<h3 id="\u53C2\u6570\u53CAapi" tabindex="-1">\u53C2\u6570\u53CAAPI <a class="header-anchor" href="#\u53C2\u6570\u53CAapi" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">v-model:visible</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u8BBE\u7F6E\u62BD\u5C49\u677F\u662F\u5426\u53EF\u89C1</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">width</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>300px</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u62BD\u5C49\u677F\u5BBD\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">zIndex</td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1000</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E drawer \u7684 z-index \u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">isCover</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u6709\u906E\u7F69\u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">escKeyCloseable</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u53EF\u5426\u901A\u8FC7 esc \u6309\u952E\u6765\u5173\u95ED drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">position</td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;">&#39;right&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u62BD\u5C49\u677F\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF0C&#39;left&#39;\u6216\u8005&#39;right&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">backdropCloseable</td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u53EF\u5426\u901A\u8FC7\u70B9\u51FB\u80CC\u666F\u6765\u5173\u95ED drawer \u5C42</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">beforeHidden</td><td style="text-align:center;"><code>Function | Promise</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED\u7A97\u53E3\u4E4B\u524D\u7684\u56DE\u8C03</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">onClose</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5173\u95ED drawer \u65F6\u5019\u8C03\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">onAfterOpened</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6253\u5F00 drawer \u540E\u65F6\u5019\u8C03\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="\u63D2\u69FD" tabindex="-1">\u63D2\u69FD <a class="header-anchor" href="#\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u540D\u79F0</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">default</td><td style="text-align:center;">\u9ED8\u8BA4</td><td style="text-align:center;">\u62BD\u5C49\u677F\u5185\u5BB9</td><td style="text-align:center;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF">\u81EA\u5B9A\u4E49\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">header</td><td style="text-align:center;">\u5934\u90E8</td><td style="text-align:center;">\u62BD\u5C49\u677F\u5934\u90E8</td><td style="text-align:center;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF">\u81EA\u5B9A\u4E49\u6A21\u677F</a></td></tr></tbody></table>',4);function G(u,s,a,i,d,k){const C=B("render-demo-0"),p=B("demo"),w=B("render-demo-1"),F=B("render-demo-2");return O(),H("div",null,[$,E(p,{sourceCode:`<template>
  <d-button  @click="drawerShow"> drawer {{ btnName }} </d-button>
  <d-drawer
    v-if="isDrawerShow"
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

export default ({
  setup() {
    let isDrawerShow = ref(false)
    let btnName = ref('close')
    let drawerWidth = ref('15vw')
    let isCover = ref(false)
    let backdropCloseable = ref(true);

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
        resolve(false);
      });
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
      beforeHidden,
    }
  }
})
<\/script>
`},{highlight:g(()=>[P]),default:g(()=>[E(C)]),_:1}),T,j,E(p,{sourceCode:`<template>
  <d-button  @click="drawerShow"> drawer </d-button>
  <d-drawer
    v-model:visible="isDrawerShow" 
    :isCover="false" 
  >
    <template v-slot>
      \u5185\u5BB9\u533A\u63D2\u69FD
    </template>
    <template v-slot:header>
      <div @click="drawerClose">
        <span class="icon icon-close" />
      </div>
    </template>
  </d-drawer>
</template>
<script>
import { ref } from 'vue'

export default ({
  setup() {
    let isDrawerShow = ref(false)

    const drawerShow = () => {
      isDrawerShow.value = !isDrawerShow.value
    }

    const drawerClose = () => {
      isDrawerShow.value = false;
    }

    return {
      isDrawerShow,
      drawerShow,
      drawerClose,
    }
  }
})
<\/script>
`},{highlight:g(()=>[I]),default:g(()=>[E(w)]),_:1}),U,E(p,{sourceCode:`<template>
<d-button @click="open()">click me</d-button>
</template>
<script>
import { defineComponent, ref, h } from 'vue'
export default defineComponent({
  setup(props, ctx) {
    const results =  ref(null);
    function open() {
      this.$drawerService.show({
        visible: true,
        isCover: false,
      });
    }
    return {
      open,
    }
  }
})
<\/script>
`},{highlight:g(()=>[z]),default:g(()=>[E(F)]),_:1}),K])}var X=q(W,[["render",G]]);export{R as __pageData,X as default};
