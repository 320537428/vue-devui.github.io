var j=Object.defineProperty;var S=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var L=(e,o,u)=>o in e?j(e,o,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[o]=u,q=(e,o)=>{for(var u in o||(o={}))T.call(o,u)&&L(e,u,o[u]);if(S)for(var u of S(o))M.call(o,u)&&L(e,u,o[u]);return e};import{_ as P,V as w,r as O,c as G,a as b,w as _,b as U,d as n,e as t,o as H}from"./app.0ce8509b.js";const I={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:o,createElementVNode:u,createTextVNode:i,openBlock:F,createElementBlock:C}=w,y=i(" Small "),k=u("br",null,null,-1),B=i(" Middle "),d=u("br",null,null,-1),f=i(" Large "),r=u("br",null,null,-1),p=i(" Underlined ");function l(a,v){const A=e("d-select");return F(),C("div",null,[u("div",null,[y,o(A,{modelValue:a.value1,"onUpdate:modelValue":v[0]||(v[0]=s=>a.value1=s),options:a.options,size:"sm"},null,8,["modelValue","options"]),k,B,o(A,{modelValue:a.value2,"onUpdate:modelValue":v[1]||(v[1]=s=>a.value2=s),options:a.options},null,8,["modelValue","options"]),d,f,o(A,{modelValue:a.value3,"onUpdate:modelValue":v[2]||(v[2]=s=>a.value3=s),options:a.options,size:"lg"},null,8,["modelValue","options"]),r,p,o(A,{modelValue:a.value4,"onUpdate:modelValue":v[3]||(v[3]=s=>a.value4=s),options:a.options,size:"lg",overview:"underlined"},null,8,["modelValue","options"])])])}const{defineComponent:E,reactive:c,ref:g}=w,m=E({setup(){const a=g(""),v=g(""),A=g(""),s=g(""),x=new Array(6).fill(0).map((D,h)=>`Option ${h+1}`),V=c(x);return{value1:a,value2:v,value3:A,value4:s,options:V}}});return q({render:l},m)}(),"render-demo-1":function(){const{createElementVNode:e,resolveComponent:o,createVNode:u,openBlock:i,createElementBlock:F}=w,C=e("div",null,"\u57FA\u7840\u591A\u9009",-1),y=e("br",null,null,-1),k=e("div",null,"collapse-tags",-1),B=e("br",null,null,-1),d=e("div",null,"collapse-tags-tooltip",-1);function f(c,g){const m=o("d-select");return i(),F("div",null,[C,u(m,{modelValue:c.value1,"onUpdate:modelValue":g[0]||(g[0]=a=>c.value1=a),options:c.options,multiple:!0},null,8,["modelValue","options"]),y,k,u(m,{modelValue:c.value2,"onUpdate:modelValue":g[1]||(g[1]=a=>c.value2=a),options:c.options,multiple:!0,"collapse-tags":!0},null,8,["modelValue","options"]),B,d,u(m,{modelValue:c.value3,"onUpdate:modelValue":g[2]||(g[2]=a=>c.value3=a),options:c.options,multiple:!0,"collapse-tags":!0,"collapse-tags-tooltip":!0},null,8,["modelValue","options"])])}const{defineComponent:r,reactive:p,ref:l}=w,E=r({setup(){const c=l([]),g=l([]),m=l([]),a=new Array(6).fill(0).map((A,s)=>`Option ${s+1}`),v=p(a);return{value1:c,value2:g,value3:m,options:v}}});return q({render:f},E)}(),"render-demo-2":function(){const{resolveComponent:e,createVNode:o,createElementVNode:u,openBlock:i,createElementBlock:F}=w,C=u("br",null,null,-1),y=u("br",null,null,-1);function k(p,l){const E=e("d-select");return i(),F("div",null,[o(E,{modelValue:p.value1,"onUpdate:modelValue":l[0]||(l[0]=c=>p.value1=c),options:p.options1,disabled:!0},null,8,["modelValue","options"]),C,o(E,{modelValue:p.value2,"onUpdate:modelValue":l[1]||(l[1]=c=>p.value2=c),options:p.options2,"option-disabled-key":"disabled"},null,8,["modelValue","options"]),y,o(E,{modelValue:p.value3,"onUpdate:modelValue":l[2]||(l[2]=c=>p.value3=c),options:p.options3,multiple:!0,"option-disabled-key":"notAllow"},null,8,["modelValue","options"])])}const{defineComponent:B,reactive:d,ref:f}=w,r=B({setup(){const p=f(""),l=f(""),E=f([]),c=new Array(6).fill(0).map((v,A)=>`Option ${A+1}`),g=d(c),m=d([{name:"Option 1",value:0},{name:"Option 2",value:1},{name:"Option 3",value:2,disabled:!0}]),a=d([{name:"Option 1",value:0},{name:"Option 2",value:1,notAllow:!0},{name:"Option 3",value:2}]);return{value1:p,value2:l,value3:E,options1:g,options2:m,options3:a}}});return q({render:k},r)}(),"render-demo-3":function(){const{resolveComponent:e,createVNode:o,createElementVNode:u,openBlock:i,createElementBlock:F}=w,C=u("br",null,null,-1);function y(r,p){const l=e("d-select");return i(),F("div",null,[o(l,{modelValue:r.value1,"onUpdate:modelValue":p[0]||(p[0]=E=>r.value1=E),options:r.options,"allow-clear":!0},null,8,["modelValue","options"]),C,o(l,{modelValue:r.value2,"onUpdate:modelValue":p[1]||(p[1]=E=>r.value2=E),options:r.options,multiple:!0,"allow-clear":!0},null,8,["modelValue","options"])])}const{defineComponent:k,reactive:B,ref:d}=w,f=k({setup(){const r=d(""),p=d([]),l=new Array(6).fill(0).map((c,g)=>`Option ${g+1}`),E=B(l);return{value1:r,value2:p,options:E}}});return q({render:y},f)}(),"render-demo-4":function(){const{createElementVNode:e,renderList:o,Fragment:u,openBlock:i,createElementBlock:F,resolveComponent:C,createBlock:y,withCtx:k,createVNode:B,toDisplayString:d}=w,f=e("div",null,"d-option",-1),r=e("br",null,null,-1),p=e("div",null,"d-option\u81EA\u5B9A\u4E49\u5185\u5BB9\u53CA\u6837\u5F0F",-1),l={class:"clear-float"},E={style:{float:"left"}},c={style:{float:"right"}};function g(s,x){const V=C("d-option"),D=C("d-select");return i(),F("div",null,[f,B(D,{modelValue:s.value1,"onUpdate:modelValue":x[0]||(x[0]=h=>s.value1=h),"allow-clear":!0},{default:k(()=>[(i(!0),F(u,null,o(s.options.data,(h,$)=>(i(),y(V,{key:$,value:h.value,name:h.name},null,8,["value","name"]))),128))]),_:1},8,["modelValue"]),r,p,B(D,{modelValue:s.value2,"onUpdate:modelValue":x[1]||(x[1]=h=>s.value2=h),"allow-clear":!0},{default:k(()=>[(i(!0),F(u,null,o(s.options1.data,(h,$)=>(i(),y(V,{key:$,value:h},{default:k(()=>[e("div",l,[e("span",E,d(h),1),e("span",c,d($+1),1)])]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:m,reactive:a,ref:v}=w,A=m({setup(){const s=v(""),x=v(""),V=new Array(6).fill(0).map((z,N)=>({value:`Option ${N+1}`,name:`Option ${N+1}`})),D=new Array(6).fill(0).map((z,N)=>`Option ${N+1}`),h=a({data:V}),$=a({data:D});return{value1:s,value2:x,options:h,options1:$}}});return q({render:g},A)}(),"render-demo-5":function(){const{createElementVNode:e,renderList:o,Fragment:u,openBlock:i,createElementBlock:F,resolveComponent:C,createBlock:y,withCtx:k,createVNode:B}=w,d=e("div",null,"\u9ED8\u8BA4\u7B5B\u9009",-1),f=e("br",null,null,-1),r=e("div",null,"\u8FDC\u7A0B\u641C\u7D22",-1);function p(m,a){const v=C("d-option"),A=C("d-select");return i(),F("div",null,[d,B(A,{modelValue:m.value1,"onUpdate:modelValue":a[0]||(a[0]=s=>m.value1=s),options:m.options.data,"allow-clear":!0,filter:""},{default:k(()=>[(i(!0),F(u,null,o(m.options.data,(s,x)=>(i(),y(v,{key:x,value:s.value,name:s.name},null,8,["value","name"]))),128))]),_:1},8,["modelValue","options"]),f,r,B(A,{modelValue:m.value2,"onUpdate:modelValue":a[1]||(a[1]=s=>m.value2=s),"allow-clear":!0,filter:m.filterFunc,remote:""},{default:k(()=>[(i(!0),F(u,null,o(m.options1.data,(s,x)=>(i(),y(v,{key:x,value:s.value,name:s.name},null,8,["value","name"]))),128))]),_:1},8,["modelValue","filter"])])}const{defineComponent:l,reactive:E,ref:c}=w,g=l({setup(){const m=c(""),a=c(""),v=new Array(6).fill(0).map((V,D)=>({value:`Option ${D+1}`,name:`Option ${D+1}`})),A=E({data:v}),s=E({data:[]});return{value1:m,value2:a,options:A,options1:s,filterFunc:(V,D)=>{V?(setTimeout(()=>{s.data=v.filter(h=>h.name.toLowerCase().includes(V.toLowerCase()))},200),D&&D()):(s.data=[],D&&D())}}}});return q({render:p},g)}(),"render-demo-6":function(){const{resolveComponent:e,createVNode:o,openBlock:u,createElementBlock:i}=w;function F(d,f){const r=e("d-select");return u(),i("div",null,[o(r,{modelValue:d.value,"onUpdate:modelValue":f[0]||(f[0]=p=>d.value=p),options:d.options,"allow-clear":!0,multiple:"",filter:"","allow-create":""},null,8,["modelValue","options"])])}const{defineComponent:C,reactive:y,ref:k}=w,B=C({setup(){const d=k([]),f=new Array(6).fill(0).map((p,l)=>`Option ${l+1}`),r=y(f);return{value:d,options:r}}});return q({render:F},B)}()}},vn='{"title":"Select \u4E0B\u62C9\u9009\u62E9\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u9009","slug":"\u591A\u9009"},{"level":3,"title":"\u7981\u7528","slug":"\u7981\u7528"},{"level":3,"title":"\u53EF\u6E05\u7A7A","slug":"\u53EF\u6E05\u7A7A"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9762\u677F\u663E\u793A","slug":"\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9762\u677F\u663E\u793A"},{"level":3,"title":"\u7B5B\u9009\u3001\u641C\u7D22\u9009\u9879","slug":"\u7B5B\u9009\u3001\u641C\u7D22\u9009\u9879"},{"level":3,"title":"\u65B0\u589E\u9009\u9879","slug":"\u65B0\u589E\u9009\u9879"},{"level":3,"title":"Select \u53C2\u6570","slug":"select-\u53C2\u6570"},{"level":3,"title":"Select \u4E8B\u4EF6","slug":"select-\u4E8B\u4EF6"},{"level":3,"title":"Select \u63D2\u69FD","slug":"select-\u63D2\u69FD"},{"level":3,"title":"Option \u53C2\u6570","slug":"option-\u53C2\u6570"},{"level":3,"title":"Option \u63D2\u69FD","slug":"option-\u63D2\u69FD"}],"relativePath":"components/select/index.md","lastUpdated":1653565681637}',J=U('<h1 id="select-\u4E0B\u62C9\u9009\u62E9\u6846" tabindex="-1">Select \u4E0B\u62C9\u9009\u62E9\u6846 <a class="header-anchor" href="#select-\u4E0B\u62C9\u9009\u62E9\u6846" aria-hidden="true">#</a></h1><p>\u4E0B\u62C9\u9009\u62E9\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u7528\u6237\u53EF\u4EE5\u4ECE\u591A\u4E2A\u9009\u9879\u4E2D\u9009\u62E9\u4E00\u9879\u6216\u51E0\u9879\uFF1B\u4EC5\u652F\u6301\u7528\u6237\u5728\u4E0B\u62C9\u9009\u9879\u4E2D\u9009\u62E9\u548C\u641C\u7D22\u7CFB\u7EDF\u63D0\u4F9B\u7684\u9009\u9879\uFF0C\u4E0D\u652F\u6301\u8F93\u5165\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u901A\u8FC7<code>size</code>\uFF1A<code>sm</code>\uFF0C<code>md(\u9ED8\u8BA4)</code>\uFF0C<code>lg</code>\u6765\u8BBE\u7F6E<code>Select</code>\u5927\u5C0F\uFF0C\u901A\u8FC7<code>overview</code>\uFF1A<code>underlined</code>\u8BBE\u7F6E\u53EA\u6709\u4E0B\u8FB9\u6846\u6837\u5F0F</p>',6),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    Small
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    Middle
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    Large
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    Underlined
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"overview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("underlined"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      value3`),n("span",{class:"token punctuation"},","),t(`
      value4`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Q=n("h3",{id:"\u591A\u9009",tabindex:"-1"},[t("\u591A\u9009 "),n("a",{class:"header-anchor",href:"#\u591A\u9009","aria-hidden":"true"},"#")],-1),R=n("p",null,[t("\u901A\u8FC7"),n("code",null,"multiple"),t("\uFF1A"),n("code",null,"true"),t("\u6765\u5F00\u542F\u591A\u9009")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\u57FA\u7840\u591A\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("collapse-tags"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":collapse-tags"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("collapse-tags-tooltip"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":collapse-tags"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":collapse-tags-tooltip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      value3`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".source"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" unset "),n("span",{class:"token important"},"!important"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=U('<h3 id="\u7981\u7528" tabindex="-1">\u7981\u7528 <a class="header-anchor" href="#\u7981\u7528" aria-hidden="true">#</a></h3><p>\u901A\u8FC7<code>disabled</code>\uFF1A<code>true</code>\u6765\u7981\u7528<code>Select</code>\uFF0C\u901A\u8FC7<code>option-disabled-key</code>\u6765\u8BBE\u7F6E\u5355\u4E2A\u9009\u9879\u7981\u7528\uFF0C\u6BD4\u5982\u8BBE\u7F6E<code>disabled</code>\u5B57\u6BB5\uFF0C\u5219\u5BF9\u8C61\u4E0A disabled \u4E3A<code>true</code>\u65F6\u4E0D\u53EF\u9009\u62E9</p>',2),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"option-disabled-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"option-disabled-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("notAllow"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 3'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"notAllow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Option 3'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      value3`),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
      options2`),n("span",{class:"token punctuation"},","),t(`
      options3`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("h3",{id:"\u53EF\u6E05\u7A7A",tabindex:"-1"},[t("\u53EF\u6E05\u7A7A "),n("a",{class:"header-anchor",href:"#\u53EF\u6E05\u7A7A","aria-hidden":"true"},"#")],-1),nn=n("p",null,[t("\u901A\u8FC7"),n("code",null,"allow-clear"),t("\uFF1A"),n("code",null,"true"),t("\u6765\u8BBE\u7F6E"),n("code",null,"Select"),t("\u53EF\u6E05\u7A7A")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("items"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=n("h3",{id:"\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9762\u677F\u663E\u793A",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9762\u677F\u663E\u793A "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9762\u677F\u663E\u793A","aria-hidden":"true"},"#")],-1),sn=n("p",null,"\u901A\u8FC7 d-option \u8BBE\u7F6E\u5355\u4E2A\u5185\u5BB9",-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("d-option"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in options.data"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-option")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("d-option\u81EA\u5B9A\u4E49\u5185\u5BB9\u53CA\u6837\u5F0F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in options1.data"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clear-float"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" left"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ item }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("{{ index + 1 }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-option")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(" items"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(" items1"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".clear-float:after"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"content"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"clear"),n("span",{class:"token punctuation"},":"),t(" both"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),on=U('<h3 id="\u7B5B\u9009\u3001\u641C\u7D22\u9009\u9879" tabindex="-1">\u7B5B\u9009\u3001\u641C\u7D22\u9009\u9879 <a class="header-anchor" href="#\u7B5B\u9009\u3001\u641C\u7D22\u9009\u9879" aria-hidden="true">#</a></h3><p>\u53EF\u4EE5\u5229\u7528\u7B5B\u9009\u3001\u641C\u7D22\u529F\u80FD\u5FEB\u901F\u67E5\u627E\u9009\u9879</p><p>\u6DFB\u52A0 <code>filter</code> \u5C5E\u6027\u5F00\u542F\u7B5B\u9009\u529F\u80FD\u3002\u4F20\u4EBA\u503C\u4E3A <code>true</code> \u65F6\uFF0C\u9ED8\u8BA4\u627E\u51FA <code>name</code> \u5C5E\u6027\u5305\u542B\u8F93\u5165\u503C\u5F97\u9009\u9879\u3002 \u5982\u679C\u5E0C\u671B\u901A\u8FC7\u5176\u5B83\u7B5B\u9009\u903B\u8F91\uFF0C<code>filter</code> \u53EF\u4F20\u5165\u4E00\u4E2A <code>Function</code>, \u8F93\u5165\u503C\u53D1\u751F\u53D8\u5316\u65F6\u8C03\u7528\uFF0C\u53C2\u6570\u503C\u4E3A\u8F93\u5165\u503C\u548C\u4E00\u4E2A\u53EF\u9009\u53C2\u6570<code>callback</code>, \u6B64 <code>callback</code> \u4E3B\u8981\u4F5C\u7528\u662F\u7B5B\u9009\u5B8C\u6210\u540E\u901A\u77E5<code>select</code>\u7EC4\u4EF6\u3002 \u6DFB\u52A0 <code>remote</code> \u5C5E\u6027\u5F00\u542F\u8FDC\u7A0B\u7B5B\u9009\u529F\u80FD\u3002\u5F53\u4E3A\u8FDC\u7A0B\u641C\u7D22\u65F6\uFF0C<code>callback</code>\u53C2\u6570\u4F1A\u975E\u5E38\u6709\u7528\u3002</p>',3),un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\u9ED8\u8BA4\u7B5B\u9009"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options.data"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"filter"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in options.data"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-option")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\u8FDC\u7A0B\u641C\u7D22"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":filter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterFunc"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"remote"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-option")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(item, index) in options1.data"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-option")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" items "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(" items"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"filterFunc"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("query"),n("span",{class:"token punctuation"},","),t(" callback")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("query"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          options1`),n("span",{class:"token punctuation"},"."),t("data "),n("span",{class:"token operator"},"="),t(" items"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(" item"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),t("query"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"200"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("callback"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        options1`),n("span",{class:"token punctuation"},"."),t("data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("callback"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      value2`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
      filterFunc`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),pn=n("h3",{id:"\u65B0\u589E\u9009\u9879",tabindex:"-1"},[t("\u65B0\u589E\u9009\u9879 "),n("a",{class:"header-anchor",href:"#\u65B0\u589E\u9009\u9879","aria-hidden":"true"},"#")],-1),ln=n("p",null,[t("\u6DFB\u52A0 "),n("code",null,"allow-create"),t(" \u5C5E\u6027\u5F00\u542F\u65B0\u589E\u9009\u9879\u529F\u80FD\u3002\u4E3A\u4E86\u4F7F "),n("code",null,"allow-create"),t(" \u6B63\u786E\u7684\u5DE5\u4F5C\uFF0C"),n("code",null,"filter"),t(" \u7684\u503C\u5FC5\u987B\u4E3A "),n("code",null,"true"),t("\u3002")],-1),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":allow-clear"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"multiple"),t(),n("span",{class:"token attr-name"},"filter"),t(),n("span",{class:"token attr-name"},"allow-create"),n("span",{class:"token punctuation"},">")]),t(),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("item"),n("span",{class:"token punctuation"},","),t(" i")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"Option "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),t("list"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),kn=U('<h3 id="select-\u53C2\u6570" tabindex="-1">Select \u53C2\u6570 <a class="header-anchor" href="#select-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">options</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009, \u548C\u4F7F\u7528 option \u5B50\u7EC4\u4EF6\u4E92\u65A5\uFF0C\u4E24\u8005\u5FC5\u987B\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u3002</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009,\u662F\u5426\u652F\u6301\u591A\u9009</td><td><a href="#%E5%A4%9A%E9%80%89">\u591A\u9009</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009,\u4E0B\u62C9\u9009\u6846\u5C3A\u5BF8,\u6709\u4E09\u79CD\u9009\u62E9&#39;lg&#39;,&#39;md&#39;,&#39;sm&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009,\u662F\u5426\u7981\u7528\u4E0B\u62C9\u6846</td><td><a href="#%E7%A6%81%E7%94%A8">\u7981\u7528</a></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;\u8BF7\u9009\u62E9&#39;</td><td style="text-align:left;">\u53EF\u9009,\u8F93\u5165\u6846\u7684 placeholder</td><td></td></tr><tr><td style="text-align:left;">overview</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;border&#39;</td><td style="text-align:left;">\u53EF\u9009,\u51B3\u5B9A\u9009\u62E9\u6846\u6837\u5F0F\u663E\u793A,\u9ED8\u8BA4\u6709\u8FB9\u6846&#39;border&#39;,&#39;underlined&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">option-disabled-key</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009,\u7981\u7528\u5355\u4E2A\u9009\u9879;<br>\u5F53\u4F20\u5165\u8D44\u6E90 options \u7C7B\u578B\u4E3A Object,\u6BD4\u5982\u8BBE\u7F6E\u4E3A&#39;disabled&#39;,<br>\u5219\u5F53\u5BF9\u8C61\u7684 disabled \u5C5E\u6027\u4E3A true \u65F6,\u8BE5\u9009\u9879\u5C06\u7981\u7528;<br>\u5F53\u8BBE\u7F6E\u4E3A&#39;&#39;\u65F6\u4E0D\u7981\u7528\u5355\u4E2A\u9009\u9879</td><td><a href="#%E7%A6%81%E7%94%A8">\u7981\u7528</a></td></tr><tr><td style="text-align:left;">allow-clear</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009, \u914D\u7F6E\u662F\u5426\u5141\u8BB8\u6E05\u7A7A\u9009\u503C\uFF0C\u4EC5\u5355\u9009\u573A\u666F\u9002\u7528</td><td><a href="#%E5%8F%AF%E6%B8%85%E7%A9%BA">\u53EF\u6E05\u7A7A</a></td></tr><tr><td style="text-align:left;">collapse-tags</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009, \u914D\u7F6E\u662F\u5426\u5141\u8BB8\u5C06\u6240\u9009\u9879\u5408\u5E76\u4E3A\u6570\u91CF\u663E\u793A</td><td><a href="#%E5%A4%9A%E9%80%89">\u591A\u9009</a></td></tr><tr><td style="text-align:left;">collapse-tags-tooltip</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009, \u914D\u7F6E\u662F\u5426\u542F\u7528\u9F20\u6807\u60AC\u505C\u6298\u53E0\u6587\u5B57\u4EE5\u663E\u793A\u5177\u4F53\u6240\u9009\u503C</td><td><a href="#%E5%A4%9A%E9%80%89">\u591A\u9009</a></td></tr><tr><td style="text-align:left;">filter</td><td style="text-align:left;"><code>boolean | function</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009, \u914D\u7F6E\u662F\u5426\u5F00\u542F\u7B5B\u9009\u529F\u80FD\uFF1B\u914D\u7F6E\u4E3A\u51FD\u6570\uFF0C\u4E3A\u81EA\u5B9A\u4E49\u641C\u7D22\u8FC7\u6EE4\u65B9\u6CD5\u503C</td><td><a href="#%E7%AD%9B%E9%80%89%E3%80%81%E6%90%9C%E7%B4%A2%E9%80%89%E9%A1%B9">\u7B5B\u9009\u3001\u641C\u7D22\u9009\u9879</a></td></tr><tr><td style="text-align:left;">remote</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009, \u914D\u7F6E\u662F\u5426\u542F\u7528\u8FDC\u7A0B\u641C\u7D22\uFF0C\u914D\u5408 filter \u51FD\u6570\u4F7F\u7528\u503C</td><td><a href="#%E7%AD%9B%E9%80%89%E3%80%81%E6%90%9C%E7%B4%A2%E9%80%89%E9%A1%B9">\u7B5B\u9009\u3001\u641C\u7D22\u9009\u9879</a></td></tr><tr><td style="text-align:left;">allow-create</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009, \u914D\u7F6E\u662F\u5426\u542F\u7528\u65B0\u589E\u9009\u9879\uFF0C\u914D\u5408 filter \u4E3A true \u65F6\u4F7F\u7528\u503C</td><td><a href="#%E6%96%B0%E5%A2%9E%E9%80%89%E9%A1%B9">\u65B0\u589E\u9009\u9879</a></td></tr></tbody></table><h3 id="select-\u4E8B\u4EF6" tabindex="-1">Select \u4E8B\u4EF6 <a class="header-anchor" href="#select-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">value-change</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u51FA\u51FD\u6570,\u5F53\u9009\u4E2D\u67D0\u4E2A\u9009\u9879\u540E,\u5C06\u4F1A\u8C03\u7528\u6B64\u51FD\u6570,\u53C2\u6570\u4E3A\u5F53\u524D\u9009\u62E9\u9879\u7684\u503C</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">toggle-change</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u51FA\u51FD\u6570,\u4E0B\u62C9\u6253\u5F00\u5173\u95ED toggle \u4E8B\u4EF6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>Function(e: FocusEvent)</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>Function(e: FocusEvent)</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="select-\u63D2\u69FD" tabindex="-1">Select \u63D2\u69FD <a class="header-anchor" href="#select-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 Select \u4E0B\u62C9\u9762\u677F\u5185\u5BB9</td></tr></tbody></table><h3 id="option-\u53C2\u6570" tabindex="-1">Option \u53C2\u6570 <a class="header-anchor" href="#option-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string | number</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u5FC5\u586B\uFF0C\u9009\u9879\u552F\u4E00\u6807\u8BC6</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%8B%E6%8B%89%E9%9D%A2%E6%9D%BF%E6%98%BE%E7%A4%BA">\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9762\u677F\u663E\u793A</a></td></tr><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9009\u9879\u663E\u793A\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%8B%E6%8B%89%E9%9D%A2%E6%9D%BF%E6%98%BE%E7%A4%BA">\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9762\u677F\u663E\u793A</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7981\u7528\u5355\u4E2A\u9009\u9879</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%8B%E6%8B%89%E9%9D%A2%E6%9D%BF%E6%98%BE%E7%A4%BA">\u81EA\u5B9A\u4E49\u4E0B\u62C9\u9762\u677F\u663E\u793A</a></td></tr></tbody></table><h3 id="option-\u63D2\u69FD" tabindex="-1">Option \u63D2\u69FD <a class="header-anchor" href="#option-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u5355\u4E2A\u9009\u9879\u663E\u793A\u5185\u5BB9</td></tr></tbody></table>',10);function rn(e,o,u,i,F,C){const y=O("render-demo-0"),k=O("demo"),B=O("render-demo-1"),d=O("render-demo-2"),f=O("render-demo-3"),r=O("render-demo-4"),p=O("render-demo-5"),l=O("render-demo-6");return H(),G("div",null,[J,b(k,{sourceCode:`<template>
  <div>
    Small
    <d-select v-model="value1" :options="options" size="sm"></d-select>
    <br />
    Middle
    <d-select v-model="value2" :options="options"></d-select>
    <br />
    Large
    <d-select v-model="value3" :options="options" size="lg"></d-select>
    <br />
    Underlined
    <d-select v-model="value4" :options="options" size="lg" overview="underlined"></d-select>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref('');
    const value4 = ref('');
    const items = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options = reactive(items);
    return {
      value1,
      value2,
      value3,
      value4,
      options,
    };
  },
});
<\/script>
`},{highlight:_(()=>[K]),default:_(()=>[b(y)]),_:1}),Q,R,b(k,{sourceCode:`<template>
  <div>\u57FA\u7840\u591A\u9009</div>
  <d-select v-model="value1" :options="options" :multiple="true" />
  <br />
  <div>collapse-tags</div>
  <d-select v-model="value2" :options="options" :multiple="true" :collapse-tags="true" />
  <br />
  <div>collapse-tags-tooltip</div>
  <d-select v-model="value3" :options="options" :multiple="true" :collapse-tags="true" :collapse-tags-tooltip="true" />
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref([]);
    const value2 = ref([]);
    const value3 = ref([]);
    const items = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options = reactive(items);

    return {
      value1,
      value2,
      value3,
      options,
    };
  },
});
<\/script>
<style>
.source {
  overflow: unset !important;
}
</style>
`},{highlight:_(()=>[W]),default:_(()=>[b(B)]),_:1}),X,b(k,{sourceCode:`<template>
  <d-select v-model="value1" :options="options1" :disabled="true" />
  <br />
  <d-select v-model="value2" :options="options2" option-disabled-key="disabled" />
  <br />
  <d-select v-model="value3" :options="options3" :multiple="true" option-disabled-key="notAllow" />
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref([]);
    const items = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options1 = reactive(items);
    const options2 = reactive([
      {
        name: 'Option 1',
        value: 0,
      },
      {
        name: 'Option 2',
        value: 1,
      },
      {
        name: 'Option 3',
        value: 2,
        disabled: true,
      },
    ]);
    const options3 = reactive([
      {
        name: 'Option 1',
        value: 0,
      },
      {
        name: 'Option 2',
        value: 1,
        notAllow: true,
      },
      {
        name: 'Option 3',
        value: 2,
      },
    ]);

    return {
      value1,
      value2,
      value3,
      options1,
      options2,
      options3,
    };
  },
});
<\/script>
`},{highlight:_(()=>[Y]),default:_(()=>[b(d)]),_:1}),Z,nn,b(k,{sourceCode:`<template>
  <d-select v-model="value1" :options="options" :allow-clear="true" />
  <br />
  <d-select v-model="value2" :options="options" :multiple="true" :allow-clear="true" />
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const value2 = ref([]);
    const items = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options = reactive(items);

    return {
      value1,
      value2,
      options,
    };
  },
});
<\/script>
`},{highlight:_(()=>[tn]),default:_(()=>[b(f)]),_:1}),an,sn,b(k,{sourceCode:`<template>
  <div>d-option</div>
  <d-select v-model="value1" :allow-clear="true">
    <d-option v-for="(item, index) in options.data" :key="index" :value="item.value" :name="item.name"></d-option>
  </d-select>
  <br />
  <div>d-option\u81EA\u5B9A\u4E49\u5185\u5BB9\u53CA\u6837\u5F0F</div>
  <d-select v-model="value2" :allow-clear="true">
    <d-option v-for="(item, index) in options1.data" :key="index" :value="item">
      <div class="clear-float">
        <span style="float: left;">{{ item }}</span>
        <span style="float: right;">{{ index + 1 }}</span>
      </div>
    </d-option>
  </d-select>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const items = new Array(6).fill(0).map((item, i) => {
      return {
        value: \`Option \${i + 1}\`,
        name: \`Option \${i + 1}\`,
      };
    });
    const items1 = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options = reactive({
      data: items,
    });
    const options1 = reactive({
      data: items1,
    });
    return {
      value1,
      value2,
      options,
      options1,
    };
  },
});
<\/script>
<style>
.clear-float:after {
  content: '';
  display: block;
  height: 0;
  clear: both;
}
</style>
`},{highlight:_(()=>[en]),default:_(()=>[b(r)]),_:1}),on,b(k,{sourceCode:`<template>
  <div>\u9ED8\u8BA4\u7B5B\u9009</div>
  <d-select v-model="value1" :options="options.data" :allow-clear="true" filter>
    <d-option v-for="(item, index) in options.data" :key="index" :value="item.value" :name="item.name"></d-option>
  </d-select>
  <br />
  <div>\u8FDC\u7A0B\u641C\u7D22</div>
  <d-select v-model="value2" :allow-clear="true" :filter="filterFunc" remote>
    <d-option v-for="(item, index) in options1.data" :key="index" :value="item.value" :name="item.name"></d-option>
  </d-select>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const items = new Array(6).fill(0).map((item, i) => {
      return {
        value: \`Option \${i + 1}\`,
        name: \`Option \${i + 1}\`,
      };
    });
    const options = reactive({
      data: items,
    });
    const options1 = reactive({
      data: [],
    });
    const filterFunc = (query, callback) => {
      if (query) {
        setTimeout(() => {
          options1.data = items.filter((item) => {
            return item.name.toLowerCase().includes(query.toLowerCase());
          });
        }, 200);
        if (callback) {
          callback();
        }
      } else {
        options1.data = [];
        if (callback) {
          callback();
        }
      }
    };
    return {
      value1,
      value2,
      options,
      options1,
      filterFunc,
    };
  },
});
<\/script>
`},{highlight:_(()=>[un]),default:_(()=>[b(p)]),_:1}),pn,ln,b(k,{sourceCode:`<template>
  <d-select v-model="value" :options="options" :allow-clear="true" multiple filter allow-create> </d-select>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref([]);
    const list = new Array(6).fill(0).map((item, i) => \`Option \${i + 1}\`);
    const options = reactive(list);
    return {
      value,
      options,
    };
  },
});
<\/script>
`},{highlight:_(()=>[cn]),default:_(()=>[b(l)]),_:1}),kn])}var gn=P(I,[["render",rn]]);export{vn as __pageData,gn as default};
