import{V as B}from"./framework.3495a366.js";import{_ as V,f as F,G as I,H as U,b as y,a1 as _,a3 as x,I as n,k as t}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const J={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:s,resolveComponent:p,withCtx:a,createVNode:u,openBlock:e,createElementBlock:h}=B,r=s("h1",null,"Let's see how to use ReadTip",-1),o=s("p",{class:"readtip-content"},"Set selector to display readtip",-1),i=s("p",null,"The following is the target you want to show readtip",-1),k=s("span",{class:"readtip-target"},"@Jack",-1);function d(g,m){const c=p("d-read-tip");return e(),h("div",null,[u(c,{"read-tip-options":g.readTipOptions},{default:a(()=>[r,o,i,k]),_:1},8,["read-tip-options"])])}return{render:d,...{setup(g,{expose:m}){m();const l={readTipOptions:{trigger:"hover",rules:{trigger:"hover",position:"top",selector:".readtip-target",title:"Name: Jack",content:"This is Jack's profile"}}};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}}}(),"render-demo-1":function(){const{createElementVNode:s,resolveComponent:p,withCtx:a,createVNode:u,openBlock:e,createElementBlock:h}=B,r=s("h1",null,"Multiple Readtips",-1),o=s("h2",{class:"introduction"},"You can pass in multiple rules to display different readtips",-1),i=s("p",{class:"first-content"},"Click here to display first content",-1),k=s("p",{class:"second-content"},"Click here to display second content",-1),d=s("h3",{class:"third-content"},"Hover here to display third content",-1),T=s("h3",{class:"third-content"},"Hover here to display third content",-1);function g(c,l){const v=p("d-read-tip");return e(),h("div",null,[u(v,{"read-tip-options":c.readTipOptions},{default:a(()=>[r,o,i,k,d,T]),_:1},8,["read-tip-options"])])}return{render:g,...{setup(c,{expose:l}){l();const f={readTipOptions:{trigger:"click",showAnimate:!1,mouseenterTime:100,mouseleaveTime:100,position:"top",overlayClassName:"read-tip-container",appendToBody:!1,rules:[{selector:".first-content",position:"top",title:"This Is the First Title",content:"Lorem ipsum dolor sit amet, consectetur ad.",overlayClassName:"red"},{selector:".second-content",position:"left",title:"This Is the Second Title",content:"Class aptent taciti sociosqu ad litora torquent per conubia nostra",overlayClassName:"child-class",overlayClassName:"red"},{trigger:"hover",selector:".third-content",position:"bottom",title:"This Is the Third Title",content:"Aenean libero urna, scelerisque tincidunt"},{trigger:"hover",selector:".four-content",position:"right",title:"This Is the Third Title",content:"Aenean libero urna, scelerisque tincidunt"}]}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}}}}(),"render-demo-2":function(){const{createElementVNode:s,resolveComponent:p,createVNode:a,createTextVNode:u,withCtx:e,openBlock:h,createElementBlock:r}=B,o=s("h1",null,"You can also pass in template",-1),i=s("p",{class:"readtip-content"},"Write your own template",-1),k=s("p",null,"The following is the target you want to show readtip",-1),d=s("h3",{class:"readtip-target2"},"DEVUI Course",-1),T=s("h3",{class:"readtip-target2"},"Another DEVUI Course with same class name",-1),g=u(" DEVUI Course "),m=s("span",null,"DevUI",-1),c=u(" DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are basedon... "),l={class:"card-block"},v=s("span",null,"12",-1),f={class:"card-block"},C=s("span",null,"8",-1),w={class:"card-block"},R=s("span",null,"8",-1);function N(b,A){const D=p("d-avatar"),E=p("d-icon"),O=p("d-card"),q=p("d-read-tip");return h(),r("div",null,[a(q,{"read-tip-options":b.readTipOptions},{content:e(()=>[a(O,{class:"d-card"},{avatar:e(()=>[a(D,{name:"DevUI"})]),title:e(()=>[g]),subtitle:e(()=>[a(E,{name:"company-member"}),m]),content:e(()=>[c]),actions:e(()=>[s("div",l,[a(E,{name:"like"}),v]),s("div",f,[a(E,{name:"star-o"}),C]),s("div",w,[a(E,{name:"message"}),R])]),_:1})]),default:e(()=>[o,i,k,d,T]),_:1},8,["read-tip-options"])])}return{render:N,...{setup(b,{expose:A}){A();const E={readTipOptions:{trigger:"click",rules:{trigger:"click",position:"top",selector:".readtip-target2",title:"Name: Jack",content:"This is Jack's profile"}}};return Object.defineProperty(E,"__isScriptSetup",{enumerable:!1,value:!0}),E}}}}(),"render-demo-3":function(){const{createElementVNode:s,resolveComponent:p,withCtx:a,createVNode:u,openBlock:e,createElementBlock:h}=B,r=s("h1",null,"You can pass data asynchronously",-1),o=s("p",{class:"readtip-content"},"Using function fullElement to pass data",-1),i=s("p",null,"The following is the target you want to show readtip",-1),k=s("h4",{class:"readtip-target"},"Display readtip",-1);function d(g,m){const c=p("d-read-tip");return e(),h("div",null,[u(c,{"read-tip-options":g.readTipOptions},{default:a(()=>[r,o,i,k]),_:1},8,["read-tip-options"])])}return{render:d,...{setup(g,{expose:m}){m();const c={trigger:"click",rules:{selector:"h4",trigger:"click",dataFn:l,key:"GetData"}};function l({element:f,rule:C}){return{content:f.innerHTML,title:C.key}}const v={readTipOptions:c,getDataFromDB:l};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}}}()}},tn='{"title":"ReadTip \u9605\u8BFB\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684 readtip","slug":"\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684-readtip"},{"level":3,"title":"\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9","slug":"\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9"},{"level":3,"title":"\u5F02\u6B65\u83B7\u53D6\u6570\u636E","slug":"\u5F02\u6B65\u83B7\u53D6\u6570\u636E"},{"level":3,"title":"ReadTip \u53C2\u6570","slug":"readtip-\u53C2\u6570"},{"level":3,"title":"ReadTip \u63D2\u69FD","slug":"readtip-\u63D2\u69FD"},{"level":3,"title":"ReadTip \u7C7B\u578B\u5B9A\u4E49","slug":"readtip-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/read-tip/index.md","lastUpdated":1650456022712}',S=x('<h1 id="readtip-\u9605\u8BFB\u63D0\u793A" tabindex="-1">ReadTip \u9605\u8BFB\u63D0\u793A <a class="header-anchor" href="#readtip-\u9605\u8BFB\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u9605\u8BFB\u63D0\u793A\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53 html \u6587\u6863\u4E2D\u9700\u8981\u5BF9\u7279\u5B9A\u5185\u5BB9\u8FDB\u884C\u63D0\u793A\u65F6\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u901A\u8FC7\u8BBE\u7F6E selector \u9009\u62E9\u9700\u8981\u663E\u793A readtip \u7684\u5143\u7D20\uFF0C\u4F20\u5165 title \u548C content \u8BBE\u7F6E\u663E\u793A\u7684\u5185\u5BB9\u3002</p>',6),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-read-tip")]),t(),n("span",{class:"token attr-name"},":read-tip-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readTipOptions"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h1")]),n("span",{class:"token punctuation"},">")]),t("Let's see how to use ReadTip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h1")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Set selector to display readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("The following is the target you want to show readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-target"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("@Jack"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-read-tip")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" readTipOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"selector"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.readtip-target'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name: Jack'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},`"This is Jack's profile"`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".source"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" visible"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".readtip-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),t(" underline"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),L=n("h3",{id:"\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684-readtip",tabindex:"-1"},[t("\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684 readtip "),n("a",{class:"header-anchor",href:"#\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684-readtip","aria-hidden":"true"},"#")],-1),P=n("p",null,"\u4F20\u5165\u591A\u4E2A rule\uFF0C\u8BBE\u7F6E\u4E0D\u540C\u5143\u7D20\u7684 readtip \u663E\u793A\u6A21\u5F0F\u3002",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-read-tip")]),t(),n("span",{class:"token attr-name"},":read-tip-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readTipOptions"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h1")]),n("span",{class:"token punctuation"},">")]),t("Multiple Readtips"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h1")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h2")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("introduction"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("You can pass in multiple rules to display different readtips"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h2")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("first-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Click here to display first content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("second-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Click here to display second content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("third-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Hover here to display third content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("third-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Hover here to display third content"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-read-tip")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" readTipOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"showAnimate"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"mouseenterTime"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"mouseleaveTime"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"overlayClassName"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'read-tip-container'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"appendToBody"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"selector"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.first-content'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This Is the First Title'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Lorem ipsum dolor sit amet, consectetur ad.'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"overlayClassName"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"selector"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.second-content'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'left'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This Is the Second Title'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Class aptent taciti sociosqu ad litora torquent per conubia nostra'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"overlayClassName"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'child-class'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"overlayClassName"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"selector"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.third-content'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'bottom'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This Is the Third Title'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Aenean libero urna, scelerisque tincidunt'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'hover'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"selector"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.four-content'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'right'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'This Is the Third Title'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Aenean libero urna, scelerisque tincidunt'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".source"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" visible"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".readtip-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),t(" underline"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".first-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 4px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".second-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".third-content"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".red"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" red"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=n("h3",{id:"\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9",tabindex:"-1"},[t("\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u4F20\u5165\u6A21\u677F\u663E\u793A\u5185\u5BB9","aria-hidden":"true"},"#")],-1),M=n("p",null,"\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165 template \u81EA\u5B9A\u4E49\u9700\u8981\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u4F20\u5165 template \u65F6\u4E0D\u5FC5\u518D\u4F20\u5165 title \u548C content\u3002",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-read-tip")]),t(),n("span",{class:"token attr-name"},":read-tip-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readTipOptions"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h1")]),n("span",{class:"token punctuation"},">")]),t("You can also pass in template"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h1")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Write your own template"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("The following is the target you want to show readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-target2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("DEVUI Course"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h3")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-target2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Another DEVUI Course with same class name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h3")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-card")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("d-card"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#avatar"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-avatar")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("DevUI"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-avatar")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#title"),n("span",{class:"token punctuation"},">")]),t(" DEVUI Course "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#subtitle"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("read-tip-demo-icon"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("company-member"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("DevUI"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
          DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are
          basedon...
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#actions"),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("like"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("12"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("star-o"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("card-block"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("message"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("8"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-card")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-read-tip")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" readTipOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"position"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'top'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"selector"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'.readtip-target2'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Name: Jack'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},`"This is Jack's profile"`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".read-tip-demo-icon"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".read-tip-demo-icon + span"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".card-block"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token selector"},"i"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token selector"},"i + span"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".card-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 350px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".action-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #8a8e99"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u5F02\u6B65\u83B7\u53D6\u6570\u636E",tabindex:"-1"},[t("\u5F02\u6B65\u83B7\u53D6\u6570\u636E "),n("a",{class:"header-anchor",href:"#\u5F02\u6B65\u83B7\u53D6\u6570\u636E","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-read-tip")]),t(),n("span",{class:"token attr-name"},":read-tip-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readTipOptions"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h1")]),n("span",{class:"token punctuation"},">")]),t("You can pass data asynchronously"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h1")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Using function fullElement to pass data"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("The following is the target you want to show readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("readtip-target"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Display readtip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-read-tip")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"setup"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"const"),t(" readTipOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token literal-property property"},"selector"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'h4'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'click'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"dataFn"),n("span",{class:"token operator"},":"),t(" getDataFromDB"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'GetData'"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getDataFromDB"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" element"),n("span",{class:"token punctuation"},","),t(" rule "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),t(" element"),n("span",{class:"token punctuation"},"."),t("innerHTML"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(" rule"),n("span",{class:"token punctuation"},"."),t("key "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".readtip-container"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" bold"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".readtip-target:hover"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"text-decoration"),n("span",{class:"token punctuation"},":"),t(" underline"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".red"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" red"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=x(`<h3 id="readtip-\u53C2\u6570" tabindex="-1">ReadTip \u53C2\u6570 <a class="header-anchor" href="#readtip-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">read-tip-options</td><td style="text-align:left;"><a href="#readtipoptions">ReadTipOptions</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u914D\u7F6E\u63D0\u793A\u9009\u9879</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">read-tip-options.rules</td><td style="text-align:left;"><a href="#readtiprules">ReadTipRules</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u914D\u7F6E readtip \u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%8C%85%E6%8B%AC%E5%A4%9A%E4%B8%AA%E6%8F%90%E7%A4%BA%E7%9A%84readtip">\u5305\u62EC\u591A\u4E2A\u63D0\u793A\u7684 readtip</a></td></tr></tbody></table><h3 id="readtip-\u63D2\u69FD" tabindex="-1">ReadTip \u63D2\u69FD <a class="header-anchor" href="#readtip-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">content</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table><h3 id="readtip-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">ReadTip \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#readtip-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="readtipoptions" tabindex="-1">ReadTipOptions <a class="header-anchor" href="#readtipoptions" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ReadTipOptions</span> <span class="token punctuation">{</span>
  trigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;hover&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u662F hover</span>
  showAnimate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u662F false</span>
  mouseenterTime<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u662F 100</span>
  mouseleaveTime<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u662F 100</span>
  position<span class="token operator">?</span><span class="token operator">:</span> PositionType <span class="token operator">|</span> PositionType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u662F &#39;top&#39;</span>
  overlayClassName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u4E3A\u7A7A\u5B57\u7B26\u4E32</span>
  appendToBody<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u9ED8\u8BA4\u503C\u4E3Atrue</span>
  rules<span class="token operator">:</span> ReadTipRules<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="readtiprules" tabindex="-1">ReadTipRules <a class="header-anchor" href="#readtiprules" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ReadTipRules</span> <span class="token operator">=</span> ReadTipRule <span class="token operator">|</span> ReadTipRule<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="readtiprule" tabindex="-1">ReadTipRule <a class="header-anchor" href="#readtiprule" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ReadTipRule</span> <span class="token punctuation">{</span>
  key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  selector<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  trigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;hover&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;click&#39;</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  showAnimate<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions</span>
  mouseenterTime<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions</span>
  mouseleaveTime<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions</span>
  position<span class="token operator">?</span><span class="token operator">:</span> PositionType <span class="token operator">|</span> PositionType<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions</span>
  overlayClassName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOptions</span>
  appendToBody<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">//\u53EF\u4EE5\u7EE7\u627F\u81EA ReadTipOtions</span>
  <span class="token comment">//customData\u4E0Etemplate\u642D\u914D\u4F7F\u7528\uFF0CcustomData\u4E3A\u4F20\u5165\u6A21\u677F\u7684\u4E0A\u4E0B\u6587\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6A21\u677F\u5185\u5BB9</span>
  dataFn<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    element<span class="token punctuation">,</span>
    rule<span class="token operator">:</span> ReadTipRule<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Observable<span class="token operator">&lt;</span><span class="token punctuation">{</span> title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> content<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> template<span class="token operator">?</span><span class="token operator">:</span> TemplateRef<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">;</span> customData<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11);function K(s,p,a,u,e,h){const r=F("render-demo-0"),o=F("demo"),i=F("render-demo-1"),k=F("render-demo-2"),d=F("render-demo-3");return I(),U("div",null,[S,y(o,{sourceCode:`<template>
  <d-read-tip :read-tip-options="readTipOptions">
    <h1>Let's see how to use ReadTip</h1>
    <p class="readtip-content">Set selector to display readtip</p>
    <p>The following is the target you want to show readtip</p>
    <span class="readtip-target">@Jack</span>
  </d-read-tip>
</template>

<script setup>
const readTipOptions = {
  trigger: 'hover',
  rules: {
    trigger: 'hover',
    position: 'top',
    selector: '.readtip-target',
    title: 'Name: Jack',
    content: "This is Jack's profile",
  },
};
<\/script>

<style>
.source {
  overflow: visible;
}
.readtip-container {
  padding: 12px;
}

.readtip-target {
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.readtip-target:hover {
  text-decoration: underline;
}
</style>
`},{highlight:_(()=>[H]),default:_(()=>[y(r)]),_:1}),L,P,y(o,{sourceCode:`<template>
  <d-read-tip :read-tip-options="readTipOptions">
    <h1>Multiple Readtips</h1>
    <h2 class="introduction">You can pass in multiple rules to display different readtips</h2>
    <p class="first-content">Click here to display first content</p>
    <p class="second-content">Click here to display second content</p>
    <h3 class="third-content">Hover here to display third content</h3>
    <h3 class="third-content">Hover here to display third content</h3>
  </d-read-tip>
</template>

<script setup>
const readTipOptions = {
  trigger: 'click',
  showAnimate: false,
  mouseenterTime: 100,
  mouseleaveTime: 100,
  position: 'top',
  overlayClassName: 'read-tip-container',
  appendToBody: false,
  rules: [
    {
      selector: '.first-content',
      position: 'top',
      title: 'This Is the First Title',
      content: 'Lorem ipsum dolor sit amet, consectetur ad.',
      overlayClassName: 'red',
    },
    {
      selector: '.second-content',
      position: 'left',
      title: 'This Is the Second Title',
      content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra',
      overlayClassName: 'child-class',
      overlayClassName: 'red',
    },
    {
      trigger: 'hover',
      selector: '.third-content',
      position: 'bottom',
      title: 'This Is the Third Title',
      content: 'Aenean libero urna, scelerisque tincidunt',
    },
    {
      trigger: 'hover',
      selector: '.four-content',
      position: 'right',
      title: 'This Is the Third Title',
      content: 'Aenean libero urna, scelerisque tincidunt',
    },
  ],
};
<\/script>

<style>
.source {
  overflow: visible;
}
.readtip-container {
  padding: 12px;
}

.readtip-target {
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.readtip-target:hover {
  text-decoration: underline;
}

.first-content {
  font-weight: bold;
  margin-bottom: 4px;
  cursor: pointer;
}

.second-content {
  font-weight: bold;
  cursor: pointer;
}

.third-content {
  cursor: pointer;
}

.red {
  color: red;
}
</style>
`},{highlight:_(()=>[Y]),default:_(()=>[y(i)]),_:1}),j,M,y(o,{sourceCode:`<template>
  <d-read-tip :read-tip-options="readTipOptions">
    <h1>You can also pass in template</h1>
    <p class="readtip-content">Write your own template</p>
    <p>The following is the target you want to show readtip</p>
    <h3 class="readtip-target2">DEVUI Course</h3>
    <h3 class="readtip-target2">Another DEVUI Course with same class name</h3>
    <template #content>
      <d-card class="d-card">
        <template #avatar>
          <d-avatar name="DevUI"></d-avatar>
        </template>
        <template #title> DEVUI Course </template>
        <template #subtitle class="read-tip-demo-icon"> <d-icon name="company-member"></d-icon><span>DevUI</span> </template>
        <template #content>
          DEVUI is a free open-source and common solution for the front end of enterprise mid- and back-end products. Its design values are
          basedon...
        </template>
        <template #actions>
          <div class="card-block"><d-icon name="like"></d-icon><span>12</span></div>
          <div class="card-block"><d-icon name="star-o"></d-icon><span>8</span></div>
          <div class="card-block"><d-icon name="message"></d-icon><span>8</span></div>
        </template>
      </d-card>
    </template>
  </d-read-tip>
</template>

<script setup>
const readTipOptions = {
  trigger: 'click',
  rules: {
    trigger: 'click',
    position: 'top',
    selector: '.readtip-target2',
    title: 'Name: Jack',
    content: "This is Jack's profile",
  },
};
<\/script>

<style>
.read-tip-demo-icon {
  cursor: pointer;
  font-size: 16px;
  margin-right: 8px;
  vertical-align: middle;
}
.read-tip-demo-icon + span {
  vertical-align: middle;
}
.card-block {
  margin-right: 16px;
  i {
    cursor: pointer;
    font-size: 16px;
    margin-right: 8px;
    vertical-align: middle;
  }
  i + span {
    vertical-align: middle;
  }
}
.card-container {
  width: 350px;
}
.action-text {
  color: #8a8e99;
}
</style>
`},{highlight:_(()=>[z]),default:_(()=>[y(k)]),_:1}),G,y(o,{sourceCode:`<template>
  <d-read-tip :read-tip-options="readTipOptions">
    <h1>You can pass data asynchronously</h1>
    <p class="readtip-content">Using function fullElement to pass data</p>
    <p>The following is the target you want to show readtip</p>
    <h4 class="readtip-target">Display readtip</h4>
  </d-read-tip>
</template>

<script setup>
const readTipOptions = {
  trigger: 'click',
  rules: {
    selector: 'h4',
    trigger: 'click',
    dataFn: getDataFromDB,
    key: 'GetData',
  },
};
function getDataFromDB({ element, rule }) {
  return { content: element.innerHTML, title: rule.key };
}
<\/script>

<style>
.readtip-container {
  padding: 12px;
}

.readtip-target {
  font-weight: bold;
  cursor: pointer;
  margin-top: 16px;
}

.readtip-target:hover {
  text-decoration: underline;
}
.red {
  color: red;
}
</style>
`},{highlight:_(()=>[$]),default:_(()=>[y(d)]),_:1}),W])}var sn=V(J,[["render",K]]);export{tn as __pageData,sn as default};
