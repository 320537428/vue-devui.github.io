import{V as m}from"./framework.3495a366.js";import{_ as q,f as C,G as N,H as O,b as g,a1 as f,a3 as _,I as n,k as s}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const Y={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:o,createElementVNode:u,openBlock:k,createElementBlock:r}=m;function d(t,i){const a=c("d-countdown");return k(),r("div",null,[u("div",null,[o(a,{value:t.deadline,onOnChange:t.changeTime,onOnFinish:t.finishTime},null,8,["value","onOnChange","onOnFinish"])])])}const{defineComponent:p,ref:e}=m,l=p({setup(){const t=e(Date.now()+1e5);return{msg:"Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B",deadline:t,changeTime:F=>{},finishTime:()=>{}}}});return{render:d,...l}}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:o,createElementVNode:u,openBlock:k,createElementBlock:r}=m;function d(t,i){const a=c("d-countdown");return k(),r("div",null,[u("div",null,[o(a,{value:t.deadline,format:"HH:mm:ss:SSS",onOnChange:t.changeTime,onOnFinish:t.finishTime},null,8,["value","onOnChange","onOnFinish"])])])}const{defineComponent:p,ref:e}=m,l=p({setup(){const t=e(Date.now()+72e5);return{msg:"Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B",deadline:t,changeTime:F=>{},finishTime:()=>{}}}});return{render:d,...l}}(),"render-demo-2":function(){const{resolveComponent:c,createVNode:o,createElementVNode:u,openBlock:k,createElementBlock:r}=m;function d(t,i){const a=c("d-countdown");return k(),r("div",null,[u("div",null,[o(a,{value:t.deadline,format:"YYYY \u5E74 MM \u6708 DD \u5929 HH \u65F6 mm \u5206 ss \u79D2",onOnChange:t.changeTime,onOnFinish:t.finishTime},null,8,["value","onOnChange","onOnFinish"])])])}const{defineComponent:p,ref:e}=m,l=p({setup(){return{deadline:e(new Date().getTime()+318816e5+5e3),msg:"Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B",changeTime:F=>{},finishTime:()=>{}}}});return{render:d,...l}}(),"render-demo-3":function(){const{resolveComponent:c,createVNode:o,createElementVNode:u,openBlock:k,createElementBlock:r}=m;function d(t,i){const a=c("d-countdown");return k(),r("div",null,[u("div",null,[o(a,{value:t.deadline,format:"YYYY\u5E74DD\u5929 HH\u65F6mm\u5206ss\u79D2",onOnChange:t.changeTime,onOnFinish:t.finishTime},null,8,["value","onOnChange","onOnFinish"])])])}const{defineComponent:p,ref:e}=m,l=p({setup(){const t=e(new Date().getTime()+6048e7+5e3);return{msg:"Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B",deadline:t,changeTime:F=>{},finishTime:()=>{}}}});return{render:d,...l}}(),"render-demo-4":function(){const{resolveComponent:c,createVNode:o,createElementVNode:u,openBlock:k,createElementBlock:r}=m;function d(t,i){const a=c("d-countdown");return k(),r("div",null,[u("div",null,[o(a,{value:Date.now()+5e4,format:"HH\u65F6mm\u5206ss\u79D2",prefix:"\u8FD8\u6709 ",suffix:" \u7ED3\u675F\uFF01",onOnChange:t.changeTime,onOnFinish:t.finishTime},null,8,["value","onOnChange","onOnFinish"])])])}const{defineComponent:p,ref:e}=m,l=p({setup(){return{msg:"Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B",changeTime:a=>{},finishTime:()=>{}}}});return{render:d,...l}}(),"render-demo-5":function(){const{resolveComponent:c,createVNode:o,createElementVNode:u,openBlock:k,createElementBlock:r}=m;function d(t,i){const a=c("d-countdown");return k(),r("div",null,[u("div",null,[o(a,{value:t.deadline,valueStyle:t.styles,onOnChange:t.changeTime,onOnFinish:t.finishTime},null,8,["value","valueStyle","onOnChange","onOnFinish"])])])}const{defineComponent:p,ref:e}=m,l=p({setup(){const t=e(new Date().getTime()+864e6);return{msg:"Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B",deadline:t,styles:{color:"#5e7ce0"},changeTime:v=>{},finishTime:()=>{}}}});return{render:d,...l}}(),"render-demo-6":function(){const{toDisplayString:c,createElementVNode:o,createTextVNode:u,resolveComponent:k,withCtx:r,createVNode:d,openBlock:p,createElementBlock:e}=m,l={class:"countdown-main"},t=u(" \u8DDD\u79BB\u6D3B\u52A8\u7ED3\u675F\u8FD8\u6709 "),i={class:"time-num"},a=u(" \u65F6 "),F={class:"time-num"},v=u(" \u5206 "),D={class:"time-num"},A=u(" \u79D2 ");function x(h,w){const y=k("d-countdown");return p(),e("div",null,[o("div",null,[d(y,{format:h.format,value:h.deadline,onOnChange:h.changeTime,onOnFinish:h.finishTime},{default:r(()=>[o("div",l,[t,o("span",i,c(h.leftTime.H),1),a,o("span",F,c(h.leftTime.m),1),v,o("span",D,c(h.leftTime.s),1),A])]),_:1},8,["format","value","onOnChange","onOnFinish"])])])}const{defineComponent:b,ref:B,reactive:H}=m,V=b({setup(){const h=B("HH:mm:ss"),w=B(new Date().getTime()+10*24*60*60*1e3+5e3),y=H({H:0,m:0,s:0});return{msg:"Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B",deadline:w,leftTime:y,changeTime:({legalTime:T})=>{for(const E of T.keys())E in y&&(y[E]=T.get(E))},finishTime:()=>{},format:h}}});return{render:x,...V}}()}},un='{"title":"Countdown \u5012\u8BA1\u65F6","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u65F6\u95F4\u683C\u5F0F","slug":"\u65F6\u95F4\u683C\u5F0F"},{"level":3,"title":"\u524D\u7F00\u548C\u540E\u7F00","slug":"\u524D\u7F00\u548C\u540E\u7F00"},{"level":3,"title":"\u8BBE\u7F6Estyle","slug":"\u8BBE\u7F6Estyle"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{"level":3,"title":"Countdown \u53C2\u6570","slug":"countdown-\u53C2\u6570"},{"level":3,"title":"Countdown \u4E8B\u4EF6","slug":"countdown-\u4E8B\u4EF6"},{"level":3,"title":"Countdown \u63D2\u69FD","slug":"countdown-\u63D2\u69FD"}],"relativePath":"components/countdown/index.md","lastUpdated":1656484249210}',S=_('<h1 id="countdown-\u5012\u8BA1\u65F6" tabindex="-1">Countdown \u5012\u8BA1\u65F6 <a class="header-anchor" href="#countdown-\u5012\u8BA1\u65F6" aria-hidden="true">#</a></h1><p>\u5012\u8BA1\u65F6</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u5012\u8BA1\u65F6\u65F6\u4F7F\u7528</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u9ED8\u8BA4\uFF1A\u65F6\u5206\u79D2:</p>',6),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-countdown")]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deadline"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeTime"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onFinish"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("finishTime"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" deadline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"100"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"finishTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),n("span",{class:"token punctuation"},","),s(`
      deadline`),n("span",{class:"token punctuation"},","),s(`
      changeTime`),n("span",{class:"token punctuation"},","),s(`
      finishTime
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),M=n("h3",{id:"\u65F6\u95F4\u683C\u5F0F",tabindex:"-1"},[s("\u65F6\u95F4\u683C\u5F0F "),n("a",{class:"header-anchor",href:"#\u65F6\u95F4\u683C\u5F0F","aria-hidden":"true"},"#")],-1),$=n("p",null,"\u65F6\u5206\u79D2\u6BEB\u79D2:",-1),z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-countdown")]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deadline"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("HH:mm:ss:SSS"),n("span",{class:"token punctuation"},"'")]),s(),n("span",{class:"token attr-name"},"@onChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeTime"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onFinish"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("finishTime"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" deadline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),s("Date"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"now"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"finishTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),n("span",{class:"token punctuation"},","),s(`
      deadline`),n("span",{class:"token punctuation"},","),s(`
      changeTime`),n("span",{class:"token punctuation"},","),s(`
      finishTime
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),P=n("p",null,"\u5E74\u6708\u65E5\u65F6\u5206\u79D2:",-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-countdown")]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deadline"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("YYYY \u5E74 MM \u6708 DD \u5929 HH \u65F6 mm \u5206 ss \u79D2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeTime"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onFinish"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("finishTime"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" deadline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"369"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1000"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"5000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"finishTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      deadline`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),n("span",{class:"token punctuation"},","),s(`
      changeTime`),n("span",{class:"token punctuation"},","),s(`
      finishTime
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),I=n("p",null,"\u6CE8\uFF1A\u5F53 format \u67D0\u4E00\u9879\u65F6\u95F4\u6CA1\u6709\u7684\u60C5\u51B5\u4E0B\uFF0C\u4F1A\u5C06\u6CA1\u6709\u7684\u90A3\u4E00\u9879\u503C\u7D2F\u79EF\u5230\u4E0B\u4E00\u9879\u3002 \u4F8B\u5982\uFF1A\u5F53\u6CA1\u6709 M(\u6708)\u7684\u65F6\u5019\uFF0C\u4F1A\u5C06\u6708\u7684\u503C *30 \u7D2F\u52A0\u5230\u65E5\uFF0C\u6839\u636E format \u683C\u5F0F\u5316\u7684\u503C\u4F1A\u4ECE\u901A\u8FC7\u65F6\u95F4 onchange \u7684 legalTime \u503C\u8FD4\u56DE\uFF0C\u5982\u4E0B\uFF1A",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-countdown")]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deadline"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),s("YYYY\u5E74DD\u5929 HH\u65F6mm\u5206ss\u79D2"),n("span",{class:"token punctuation"},"'")]),s(),n("span",{class:"token attr-name"},"@onChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeTime"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onFinish"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("finishTime"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" deadline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"700"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"1000"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"5000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"finishTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),n("span",{class:"token punctuation"},","),s(`
      deadline`),n("span",{class:"token punctuation"},","),s(`
      changeTime`),n("span",{class:"token punctuation"},","),s(`
      finishTime
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),J=n("h3",{id:"\u524D\u7F00\u548C\u540E\u7F00",tabindex:"-1"},[s("\u524D\u7F00\u548C\u540E\u7F00 "),n("a",{class:"header-anchor",href:"#\u524D\u7F00\u548C\u540E\u7F00","aria-hidden":"true"},"#")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-countdown")]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("Date.now() + 50000"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("HH\u65F6mm\u5206ss\u79D2"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"prefix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("\u8FD8\u6709 "),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"suffix"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s(" \u7ED3\u675F\uFF01"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeTime"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onFinish"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("finishTime"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"finishTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),n("span",{class:"token punctuation"},","),s(`
      changeTime`),n("span",{class:"token punctuation"},","),s(`
      finishTime
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),L=n("h3",{id:"\u8BBE\u7F6Estyle",tabindex:"-1"},[s("\u8BBE\u7F6Estyle "),n("a",{class:"header-anchor",href:"#\u8BBE\u7F6Estyle","aria-hidden":"true"},"#")],-1),Q=n("p",null,"\u8BBE\u7F6E\u5012\u8BA1\u65F6\u6587\u5B57\u6837\u5F0F:",-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-countdown")]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deadline"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":valueStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("styles"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeTime"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onFinish"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("finishTime"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},"/>")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" deadline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" styles "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"color"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#5e7ce0'"),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"finishTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),n("span",{class:"token punctuation"},","),s(`
      deadline`),n("span",{class:"token punctuation"},","),s(`
      styles`),n("span",{class:"token punctuation"},","),s(`
      changeTime`),n("span",{class:"token punctuation"},","),s(`
      finishTime
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},`

`)]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),W=n("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9",tabindex:"-1"},[s("\u81EA\u5B9A\u4E49\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9","aria-hidden":"true"},"#")],-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-countdown")]),s(),n("span",{class:"token attr-name"},":format"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("format"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("deadline"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeTime"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@onFinish"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("finishTime"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("countdown-main"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        \u8DDD\u79BB\u6D3B\u52A8\u7ED3\u675F\u8FD8\u6709
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("time-num"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ leftTime.H }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        \u65F6
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("time-num"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ leftTime.m }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        \u5206
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("span")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("time-num"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{ leftTime.s }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("span")]),n("span",{class:"token punctuation"},">")]),s(`
        \u79D2
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-countdown")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" format "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"HH:mm:ss"'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" deadline "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getTime"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"10"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),n("span",{class:"token number"},"1000"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"5000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" leftTime "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string-property property"},"'H'"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),n("span",{class:"token string-property property"},"'m'"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),n("span",{class:"token string-property property"},"'s'"),n("span",{class:"token operator"},":"),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s("legalTime"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      
      `),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" k "),n("span",{class:"token keyword"},"of"),s(" legalTime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("k "),n("span",{class:"token keyword"},"in"),s(" leftTime"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          leftTime`),n("span",{class:"token punctuation"},"["),s("k"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" legalTime"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("k"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"finishTime"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"msg"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B'"),n("span",{class:"token punctuation"},","),s(`
      deadline`),n("span",{class:"token punctuation"},","),s(`
      leftTime`),n("span",{class:"token punctuation"},","),s(`
      changeTime`),n("span",{class:"token punctuation"},","),s(`
      finishTime`),n("span",{class:"token punctuation"},","),s(`
      format
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".countdown-main .time-num"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),s(" 400"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" inline-block"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),s(" 1px solid #f4f4f4"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0 4px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),s(" 4px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"min-width"),n("span",{class:"token punctuation"},":"),s(" 48px"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),s(" #f4f4f4"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),s(" 18px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Z=_('<h3 id="countdown-\u53C2\u6570" tabindex="-1">Countdown \u53C2\u6570 <a class="header-anchor" href="#countdown-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6Cdemo</th></tr></thead><tbody><tr><td style="text-align:left;">format</td><td style="text-align:left;">string</td><td style="text-align:left;">HH:mm:ss</td><td style="text-align:left;">\u683C\u5F0F\u5316\u5012\u8BA1\u65F6\u5C55\u793A\uFF0C\u53C2\u8003moment</td><td style="text-align:left;"><a href="#%E6%97%B6%E9%97%B4%E6%A0%BC%E5%BC%8F">\u65F6\u95F4\u683C\u5F0F</a></td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;">number</td><td style="text-align:left;">-</td><td style="text-align:left;">\u6570\u503C\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">prefix</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">\u8BBE\u7F6E\u6570\u503C\u7684\u524D\u7F00</td><td style="text-align:left;"><a href="#%E5%89%8D%E7%BC%80%E5%92%8C%E5%90%8E%E7%BC%80">\u524D\u7F00\u548C\u540E\u7F00</a></td></tr><tr><td style="text-align:left;">suffix</td><td style="text-align:left;">string</td><td style="text-align:left;">-</td><td style="text-align:left;">\u8BBE\u7F6E\u6570\u503C\u7684\u540E\u7F00</td><td style="text-align:left;"><a href="#%E5%89%8D%E7%BC%80%E5%92%8C%E5%90%8E%E7%BC%80">\u524D\u7F00\u548C\u540E\u7F00</a></td></tr><tr><td style="text-align:left;">value-style</td><td style="text-align:left;">CSSProperties</td><td style="text-align:left;">-</td><td style="text-align:left;">\u8BBE\u7F6E\u6570\u503C\u7684\u6837\u5F0F</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AEstyle">\u8BBE\u7F6Estyle</a></td></tr></tbody></table><h3 id="countdown-\u4E8B\u4EF6" tabindex="-1">Countdown \u4E8B\u4EF6 <a class="header-anchor" href="#countdown-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">on-change</td><td style="text-align:left;">({leftTime,formatTime,legalTime}) =&gt; void</td><td style="text-align:left;">\u5012\u8BA1\u65F6\u65F6\u95F4\u53D8\u5316\u65F6\u89E6\u53D1\u3002<br>leftTime:\u5012\u8BA1\u65F6\u5269\u4F59\u5F97\u65F6\u95F4\u6233\uFF1B<br>formatTime\uFF1A\u5E74\u6708\u65E5\u65F6\u5206\u79D2\u6BEB\u79D2\u683C\u5F0F\u5012\u8BA1\u65F6\uFF1B<br>legalTime\uFF1A\u6839\u636Eformat\u683C\u5F0F\u5316\u540E\u7684\u503C\u3002</td></tr><tr><td style="text-align:left;">on-finish</td><td style="text-align:left;">() =&gt; void</td><td style="text-align:left;">\u5012\u8BA1\u65F6\u5B8C\u6210\u65F6\u89E6\u53D1</td></tr></tbody></table><h3 id="countdown-\u63D2\u69FD" tabindex="-1">Countdown \u63D2\u69FD <a class="header-anchor" href="#countdown-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr></tbody></table>',6);function nn(c,o,u,k,r,d){const p=C("render-demo-0"),e=C("demo"),l=C("render-demo-1"),t=C("render-demo-2"),i=C("render-demo-3"),a=C("render-demo-4"),F=C("render-demo-5"),v=C("render-demo-6");return N(),O("div",null,[S,g(e,{sourceCode:`<template>
  <div>
  <d-countdown :value="deadline" @onChange="changeTime" @onFinish="finishTime"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const deadline = ref(Date.now() + 100 * 1000);
    const changeTime = (n) => {
    }
    const finishTime = () => {
    }
    return {
      msg: 'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B',
      deadline,
      changeTime,
      finishTime
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:f(()=>[j]),default:f(()=>[g(p)]),_:1}),M,$,g(e,{sourceCode:`<template>
  <div>
  <d-countdown :value="deadline" format='HH:mm:ss:SSS' @onChange="changeTime" @onFinish="finishTime"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const deadline = ref(Date.now() + 2 * 60 * 60 * 1000);
    const changeTime = (n) => {
    }
    const finishTime = () => {
    }
    return {
      msg: 'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B',
      deadline,
      changeTime,
      finishTime
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:f(()=>[z]),default:f(()=>[g(l)]),_:1}),P,g(e,{sourceCode:`<template>
  <div>
  <d-countdown :value="deadline" format="YYYY \u5E74 MM \u6708 DD \u5929 HH \u65F6 mm \u5206 ss \u79D2" @onChange="changeTime" @onFinish="finishTime"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const deadline = ref(new Date().getTime() + 369 * 24 * 60 * 60 * 1000 + 5000);

    const changeTime = (n) => {
    }
    const finishTime = () => {
    }
    return {
      deadline,
      msg: 'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B',
      changeTime,
      finishTime
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:f(()=>[G]),default:f(()=>[g(t)]),_:1}),I,g(e,{sourceCode:`<template>
  <div>
  <d-countdown :value="deadline" format='YYYY\u5E74DD\u5929 HH\u65F6mm\u5206ss\u79D2' @onChange="changeTime" @onFinish="finishTime"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const deadline = ref(new Date().getTime() + 700 * 24 * 60 * 60 *1000 + 5000);
    const changeTime = (n) => {
    }
    const finishTime = () => {
    }
    return {
      msg: 'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B',
      deadline,
      changeTime,
      finishTime
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:f(()=>[U]),default:f(()=>[g(i)]),_:1}),J,g(e,{sourceCode:`<template>
  <div>
  <d-countdown :value="Date.now() + 50000" format="HH\u65F6mm\u5206ss\u79D2" prefix="\u8FD8\u6709 " suffix=" \u7ED3\u675F\uFF01" @onChange="changeTime" @onFinish="finishTime"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const changeTime = (n) => {
    }
    const finishTime = () => {
    }
    return {
      msg: 'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B',
      changeTime,
      finishTime
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:f(()=>[K]),default:f(()=>[g(a)]),_:1}),L,Q,g(e,{sourceCode:`<template>
  <div>
  <d-countdown :value="deadline" :valueStyle="styles" @onChange="changeTime" @onFinish="finishTime"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const deadline = ref(new Date().getTime() + 10 * 24 * 60 * 60 *1000);
    const styles = {color: '#5e7ce0'}
    const changeTime = (n) => {
    }
    const finishTime = () => {
    }
    return {
      msg: 'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B',
      deadline,
      styles,
      changeTime,
      finishTime
    }
  }
})
<\/script>

<style>

</style>
`},{highlight:f(()=>[R]),default:f(()=>[g(F)]),_:1}),W,g(e,{sourceCode:`<template>
  <div>
    <d-countdown :format="format" :value="deadline" @onChange="changeTime" @onFinish="finishTime">
      <div class="countdown-main">
        \u8DDD\u79BB\u6D3B\u52A8\u7ED3\u675F\u8FD8\u6709
        <span class="time-num">{{ leftTime.H }}</span>
        \u65F6
        <span class="time-num">{{ leftTime.m }}</span>
        \u5206
        <span class="time-num">{{ leftTime.s }}</span>
        \u79D2
      </div>
    </d-countdown>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const format = ref("HH:mm:ss");
    const deadline = ref(new Date().getTime() + 10 * 24 * 60 * 60 *1000 + 5000);
    const leftTime = reactive({'H':0,'m':0,'s':0})
    const changeTime = ({legalTime}) => {
      
      for (const k of legalTime.keys()) {
        if (k in leftTime) {
          leftTime[k] = legalTime.get(k);
        }
      }
    }
    const finishTime = () => {
    }
    return {
      msg: 'Countdown \u5012\u8BA1\u65F6 \u7EC4\u4EF6\u6587\u6863\u793A\u4F8B',
      deadline,
      leftTime,
      changeTime,
      finishTime,
      format
    }
  }
})
<\/script>

<style lang="scss">
.countdown-main .time-num{
    font-weight: 400;
    display: inline-block;
    border: 1px solid #f4f4f4;
    padding: 0 4px;
    border-radius: 4px;
    min-width: 48px;
    text-align: center;
    background-color: #f4f4f4;
    font-size: 18px;
  }
</style>
`},{highlight:f(()=>[X]),default:f(()=>[g(v)]),_:1}),Z])}var cn=q(Y,[["render",nn]]);export{un as __pageData,cn as default};
