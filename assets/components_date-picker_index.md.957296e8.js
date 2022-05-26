var B=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var _=(e,s,a)=>s in e?B(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,h=(e,s)=>{for(var a in s||(s={}))A.call(s,a)&&_(e,a,s[a]);if(y)for(var a of y(s))b.call(s,a)&&_(e,a,s[a]);return e};import{_ as D,V as g,r as f,c as V,a as m,w as F,b as C,d as n,e as t,o as w}from"./app.0ce8509b.js";const M={name:"component-doc",components:{"render-demo-0":function(){const{toDisplayString:e,createElementVNode:s,resolveComponent:a,createVNode:k,openBlock:i,createElementBlock:r}=g;function l(c,E){const o=a("d-datepicker");return i(),r("div",null,[s("p",null,"\u9009\u4E2D\u7684\u65E5\u671F\uFF1A "+e(c.eventValue),1),k(o,{"selected-date-change":c.handleEventValue},null,8,["selected-date-change"])])}const{defineComponent:u,ref:d}=g,p=u({setup(){const c=d("");return{eventValue:c,handleEventValue:o=>{c.value=o}}}});return h({render:l},p)}(),"render-demo-1":function(){const{createElementVNode:e,resolveComponent:s,createVNode:a,openBlock:k,createElementBlock:i}=g,r=e("p",null,"\u5F00\u542F auto-close",-1),l=e("p",null,"\u5173\u95ED auto-close",-1);function u(c,E){const o=s("d-datepicker");return k(),i("div",null,[r,a(o,{"auto-close":"",class:"mb20"}),a(o,{"auto-close":!0}),l,a(o,{class:"mb20"}),a(o,{"auto-close":!1})])}const{defineComponent:d}=g,p=d({setup(){}});return h({render:u},p)}(),"render-demo-2":function(){const{createElementVNode:e,resolveComponent:s,createVNode:a,openBlock:k,createElementBlock:i}=g,r=e("p",null,"\u5F00\u542F range",-1),l=e("p",null,"\u5173\u95ED range",-1);function u(c,E){const o=s("d-datepicker");return k(),i("div",null,[r,a(o,{range:"",class:"mb20"}),a(o,{range:!0}),l,a(o,{class:"mb20"}),a(o,{range:!1})])}const{defineComponent:d}=g,p=d({setup(){}});return h({render:u},p)}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:s,openBlock:a,createElementBlock:k}=g;function i(u,d){const p=e("d-datepicker");return a(),k("div",null,[s(p,{format:"yyyy-MM-dd hh:mm:ss",class:"mb20"}),s(p,{format:"yy-MM-dd",range:""})])}const{defineComponent:r}=g,l=r({setup(){}});return h({render:i},l)}(),"render-demo-4":function(){const{resolveComponent:e,createVNode:s,createElementVNode:a,openBlock:k,createElementBlock:i}=g,r=a("p",null,null,-1);function l(c,E){const o=e("d-input"),v=e("d-datepicker");return k(),i("div",null,[s(o,{modelValue:c.splitterText,"onUpdate:modelValue":E[0]||(E[0]=x=>c.splitterText=x),"max-length":1,class:"mb20 wh200"},null,8,["modelValue"]),r,s(v,{range:"","range-spliter":c.splitterText},null,8,["range-spliter"])])}const{defineComponent:u,ref:d}=g,p=u({setup(){return{splitterText:d("\u81F3")}}});return h({render:l},p)}()}},L='{"title":"DatePicker \u65E5\u671F\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u52A8\u5173\u95ED\u65E5\u671F\u9762\u677F","slug":"\u81EA\u52A8\u5173\u95ED\u65E5\u671F\u9762\u677F"},{"level":3,"title":"\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5668","slug":"\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5668"},{"level":3,"title":"\u65E5\u671F\u683C\u5F0F\u5316","slug":"\u65E5\u671F\u683C\u5F0F\u5316"},{"level":3,"title":"\u65E5\u671F\u8D77\u6B62\u65F6\u95F4\u5206\u9694\u7B26","slug":"\u65E5\u671F\u8D77\u6B62\u65F6\u95F4\u5206\u9694\u7B26"},{"level":3,"title":"DatePicker \u53C2\u6570","slug":"datepicker-\u53C2\u6570"},{"level":3,"title":"\u65E5\u671F\u683C\u5F0F\u5316\u5B57\u7B26","slug":"\u65E5\u671F\u683C\u5F0F\u5316\u5B57\u7B26"}],"relativePath":"components/date-picker/index.md","lastUpdated":1650879611434}',N=C('<h1 id="datepicker-\u65E5\u671F\u9009\u62E9\u5668" tabindex="-1">DatePicker \u65E5\u671F\u9009\u62E9\u5668 <a class="header-anchor" href="#datepicker-\u65E5\u671F\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><p>\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\u65F6\uFF1B\u9700\u8981\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("\u9009\u4E2D\u7684\u65E5\u671F\uFF1A {{eventValue}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},":selected-date-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleEventValue"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" eventValue "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleEventValue"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      eventValue`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" val"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      eventValue`),n("span",{class:"token punctuation"},","),t(`
      handleEventValue`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".mb20"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".wh200"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),T=n("h3",{id:"\u81EA\u52A8\u5173\u95ED\u65E5\u671F\u9762\u677F",tabindex:"-1"},[t("\u81EA\u52A8\u5173\u95ED\u65E5\u671F\u9762\u677F "),n("a",{class:"header-anchor",href:"#\u81EA\u52A8\u5173\u95ED\u65E5\u671F\u9762\u677F","aria-hidden":"true"},"#")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("\u5F00\u542F auto-close"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},"auto-close"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},":auto-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("\u5173\u95ED auto-close"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},":auto-close"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".mb20"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),P=n("h3",{id:"\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5668",tabindex:"-1"},[t("\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5668 "),n("a",{class:"header-anchor",href:"#\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("\u5F00\u542F range"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},"range"),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},":range"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),t("\u5173\u95ED range"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},":range"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".mb20"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),S=n("h3",{id:"\u65E5\u671F\u683C\u5F0F\u5316",tabindex:"-1"},[t("\u65E5\u671F\u683C\u5F0F\u5316 "),n("a",{class:"header-anchor",href:"#\u65E5\u671F\u683C\u5F0F\u5316","aria-hidden":"true"},"#")],-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("yyyy-MM-dd hh:mm:ss"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("yy-MM-dd"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"range"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".mb20"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),z=n("h3",{id:"\u65E5\u671F\u8D77\u6B62\u65F6\u95F4\u5206\u9694\u7B26",tabindex:"-1"},[t("\u65E5\u671F\u8D77\u6B62\u65F6\u95F4\u5206\u9694\u7B26 "),n("a",{class:"header-anchor",href:"#\u65E5\u671F\u8D77\u6B62\u65F6\u95F4\u5206\u9694\u7B26","aria-hidden":"true"},"#")],-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-input")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("splitterText"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":max-length"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("mb20 wh200"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-input")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-datepicker")]),t(),n("span",{class:"token attr-name"},"range"),t(),n("span",{class:"token attr-name"},":range-spliter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("splitterText"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" splitterText "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u81F3'"),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      splitterText
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".mb20"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".wh200"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=C('<h3 id="datepicker-\u53C2\u6570" tabindex="-1">DatePicker \u53C2\u6570 <a class="header-anchor" href="#datepicker-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">auto-close</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9009\u62E9\u65E5\u671F\u540E\uFF0C\u662F\u5426\u81EA\u52A8\u5173\u95ED\u65E5\u671F\u9762\u677F</td><td><a href="#%E8%87%AA%E5%8A%A8%E5%85%B3%E9%97%AD%E6%97%A5%E6%9C%9F%E9%9D%A2%E6%9D%BF">\u81EA\u52A8\u5173\u95ED\u65E5\u671F\u9762\u677F</a></td></tr><tr><td style="text-align:left;">range</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5F00\u542F\u65E5\u671F\u533A\u95F4\u9009\u62E9</td><td><a href="#%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u65E5\u671F\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">y/MM/dd</td><td style="text-align:left;">\u53EF\u9009\uFF0C<a href="#%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F%E5%8C%96%E5%AD%97%E7%AC%A6">\u65E5\u671F\u503C\u683C\u5F0F</a></td><td><a href="#%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F%E5%8C%96">\u65E5\u671F\u683C\u5F0F\u5316</a></td></tr><tr><td style="text-align:left;">range-spliter</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5728\u533A\u95F4\u9009\u62E9\u6A21\u5F0F\u4E0B\uFF0C\u5206\u9694\u8D77\u6B62\u65F6\u95F4\u7684\u5B57\u7B26\u3002</td><td><a href="#%E6%97%A5%E6%9C%9F%E8%B5%B7%E6%AD%A2%E6%97%B6%E9%97%B4%E5%88%86%E9%9A%94%E7%AC%A6">\u65E5\u671F\u8D77\u6B62\u65F6\u95F4\u5206\u9694\u7B26</a></td></tr><tr><td style="text-align:left;">selected-date-change</td><td style="text-align:left;"><code>Function</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5B50\u9879\u5207\u6362\u7684\u65F6\u5019\u4F1A\u53D1\u51FA\u65B0\u6FC0\u6D3B\u7684\u5B50\u9879\u7684\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="\u65E5\u671F\u683C\u5F0F\u5316\u5B57\u7B26" tabindex="-1">\u65E5\u671F\u683C\u5F0F\u5316\u5B57\u7B26 <a class="header-anchor" href="#\u65E5\u671F\u683C\u5F0F\u5316\u5B57\u7B26" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5B57\u7B26</th><th>\u8BF4\u660E</th><th>\u89C4\u5219</th></tr></thead><tbody><tr><td>y, yy, yyyy</td><td>year</td><td>\u4F7F\u7528<code>yy</code>\u65F6\uFF0C\u53EA\u663E\u793A\u540E2\u4F4D\u5E74\u4EFD\uFF0C\u5176\u4ED6\u60C5\u51B5\u663E\u793A4\u4F4D\u5E74\u4EFD\u3002\u6BD4\u5982<code>yy/MM/dd -&gt; 21/01/02</code>\uFF0C <code>y/MM/dd -&gt; 2021/01/02</code></td></tr><tr><td>M,MM</td><td>month</td><td>\u4F7F\u7528<code>MM</code>\u65F6\uFF0C\u4E00\u4F4D\u6570\u6570\u5B57\u5DE6\u4FA7\u81EA\u52A8\u8865<code>0</code>\u3002\u6BD4\u5982<code>y/MM/dd -&gt; 2021/01/02</code>\uFF0C<code>y/M/d -&gt; 2021/1/2</code></td></tr><tr><td>d,dd</td><td>date</td><td>\u89C4\u5219\u540C<code>M</code></td></tr><tr><td>h,hh</td><td>hour</td><td>\u89C4\u5219\u540C<code>M</code>\uFF1B\u4F7F\u752824\u5C0F\u65F6\u8868\u793A\u3002</td></tr><tr><td>m,mm</td><td>minute</td><td>\u89C4\u5219\u540C<code>M</code></td></tr><tr><td>s,ss</td><td>second</td><td>\u89C4\u5219\u540C<code>M</code></td></tr></tbody></table>',4);function I(e,s,a,k,i,r){const l=f("render-demo-0"),u=f("demo"),d=f("render-demo-1"),p=f("render-demo-2"),c=f("render-demo-3"),E=f("render-demo-4");return w(),V("div",null,[N,m(u,{sourceCode:`
<template>
  <p>\u9009\u4E2D\u7684\u65E5\u671F\uFF1A {{eventValue}}</p>
  <d-datepicker :selected-date-change="handleEventValue" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const eventValue = ref<string>('')
    const handleEventValue = (val: string) => {
      eventValue.value = val;
    }

    return {
      eventValue,
      handleEventValue,
    };
  }
});
<\/script>

<style>
.mb20 {
  margin-bottom: 20px;
}

.wh200 {
  width: 200px;
}
</style>
`},{highlight:F(()=>[q]),default:F(()=>[m(l)]),_:1}),T,m(u,{sourceCode:`
<template>
  <p>\u5F00\u542F auto-close</p>
  <d-datepicker auto-close class="mb20" />
  <d-datepicker :auto-close="true" />

  <p>\u5173\u95ED auto-close</p>
  <d-datepicker class="mb20" />
  <d-datepicker :auto-close="false" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  }
});
<\/script>

<style>
.mb20 {
  margin-bottom: 20px;
}
</style>
`},{highlight:F(()=>[j]),default:F(()=>[m(d)]),_:1}),P,m(u,{sourceCode:`
<template>
  <p>\u5F00\u542F range</p>
  <d-datepicker range class="mb20" />
  <d-datepicker :range="true" />

  <p>\u5173\u95ED range</p>
  <d-datepicker class="mb20" />
  <d-datepicker :range="false" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  }
});
<\/script>

<style>
.mb20 {
  margin-bottom: 20px;
}
</style>
`},{highlight:F(()=>[$]),default:F(()=>[m(p)]),_:1}),S,m(u,{sourceCode:`
<template>
  <d-datepicker format="yyyy-MM-dd hh:mm:ss" class="mb20" />
  <d-datepicker format="yy-MM-dd" range />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  }
});
<\/script>

<style>
.mb20 {
  margin-bottom: 20px;
}
</style>
`},{highlight:F(()=>[U]),default:F(()=>[m(c)]),_:1}),z,m(u,{sourceCode:`
<template>
  <d-input v-model="splitterText" :max-length="1" class="mb20 wh200"></d-input>
  <p></p>
  <d-datepicker range :range-spliter="splitterText" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const splitterText = ref('\u81F3')

    return {
      splitterText
    }
  }
});
<\/script>

<style>
.mb20 {
  margin-bottom: 20px;
}

.wh200 {
  width: 200px;
}
</style>
`},{highlight:F(()=>[G]),default:F(()=>[m(E)]),_:1}),H])}var O=D(M,[["render",I]]);export{L as __pageData,O as default};
