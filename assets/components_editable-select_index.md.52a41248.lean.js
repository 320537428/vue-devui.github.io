var N=Object.defineProperty;var D=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var V=(l,a,e)=>a in l?N(l,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[a]=e,C=(l,a)=>{for(var e in a||(a={}))M.call(a,e)&&V(l,e,a[e]);if(D)for(var e of D(a))O.call(a,e)&&V(l,e,a[e]);return l};import{_ as S,V as h,r as B,c as z,a as y,w as m,b as x,d as n,e as t,o as L}from"./app.bfbf33a4.js";const I={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:a,openBlock:e,createElementBlock:k}=h;function v(o,s){const p=l("d-editable-select");return e(),k("div",null,[a(p,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=c=>o.value=c),options:o.options,"filter-option":"",appendToBody:"",width:450},null,8,["modelValue","options"])])}const{defineComponent:f,reactive:b,ref:i}=h,d=f({setup(){const o=i(""),s=b([{label:"label0",value:0},{label:"label1",value:1},{label:"label2",value:2}]);return{value:o,options:s}}});return C({render:v},d)}(),"render-demo-1":function(){const{resolveComponent:l,createVNode:a,createElementVNode:e,openBlock:k,createElementBlock:v}=h,f=e("br",null,null,-1);function b(p,c){const u=l("d-editable-select");return k(),v("div",null,[a(u,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=r=>p.value=r),disabled:"","filter-option":"",appendToBody:"",width:450,options:p.options},null,8,["modelValue","options"]),f,a(u,{modelValue:p.value1,"onUpdate:modelValue":c[1]||(c[1]=r=>p.value1=r),"filter-option":"",appendToBody:"",width:450,options:p.options1,"option-disabled-key":"disabled"},null,8,["modelValue","options"])])}const{defineComponent:i,reactive:d,ref:o}=h,s=i({setup(){const p=o(""),c=o(""),u=d(["label0","label1","label2"]),r=d([{label:"label0",value:0},{label:"label1",value:1,disabled:!0},{label:"label2",value:2,disabled:!1}]);return{value:p,value1:c,options:u,options1:r}}});return C({render:b},s)}(),"render-demo-2":function(){const{resolveComponent:l,createVNode:a,openBlock:e,createElementBlock:k}=h;function v(o,s){const p=l("d-editable-select");return e(),k("div",null,[a(p,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=c=>o.value=c),appendToBody:"",width:450,options:o.options,"filter-option":o.filterOption},null,8,["modelValue","options","filter-option"])])}const{defineComponent:f,ref:b,reactive:i}=h,d=f({setup(){const o=b(""),s=i([{label:"label0",value:0},{label:"label1",value:1,disabled:!0},{label:"label2",value:2,disabled:!1}]);return{value:o,options:s,filterOption:(c,u)=>u.label.indexOf(c)>-1}}});return C({render:v},d)}(),"render-demo-3":function(){const{toDisplayString:l,createElementVNode:a,resolveComponent:e,withCtx:k,createVNode:v,openBlock:f,createElementBlock:b}=h,i=a("div",null,l("\u6CA1\u6709\u5339\u914D\u9879"),-1);function d(u,r){const A=e("d-editable-select");return f(),b("div",null,[v(A,{modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=F=>u.value=F),appendToBody:"",width:450,"filter-option":"",options:u.options},{itemTemplate:k(F=>[a("div",null,"\u7B2C"+l(F.value)+"\u9879: "+l(F.label),1)]),noResultItemTemplate:k(()=>[i]),_:1},8,["modelValue","options"])])}const{defineComponent:o,ref:s,reactive:p}=h,c=o({setup(){const u=s(""),r=p([{label:"label0",value:0},{label:"label1",value:1,disabled:!0},{label:"label2",value:2,disabled:!1}]);return{value:u,options:r}}});return C({render:d},c)}(),"render-demo-4":function(){const{resolveComponent:l,createVNode:a,openBlock:e,createElementBlock:k}=h;function v(s,p){const c=l("d-editable-select");return e(),k("div",null,[a(c,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=u=>s.value=u),appendToBody:"",options:s.options,"filter-option":!1,"max-height":300,width:450,loading:s.loading,"load-more":s.loadMore,onSearch:s.handleSearch},null,8,["modelValue","options","loading","load-more","onSearch"])])}const{defineComponent:f,reactive:b,ref:i,getCurrentInstance:d}=h,o=f({setup(s,p){const c=i(""),u=i([]),r=i(!1),A=20;let F=0;const T=g=>{g!==""?(r.value=!0,setTimeout(()=>{const E=w();u.value=_(E,g),r.value=!1},3e3)):u.value=[]},_=(g,E)=>g.filter(q=>q.label.toLowerCase().indexOf(E.toLowerCase())>-1),w=()=>{const g=[];for(let E=1;E<=A;E++)g.push({label:`label${E+F}`,value:E});return F+=A,g};return{value:c,options:u,loading:r,handleSearch:T,loadMore:g=>{g!==""?(r.value=!0,setTimeout(()=>{const E=w();u.value=[...u.value,..._(E,g)],r.value=!1},3e3)):u.value=[]}}}});return C({render:v},o)}()}},an='{"title":"EditableSelect \u53EF\u8F93\u5165\u4E0B\u62C9\u9009\u62E9\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8BBE\u7F6E\u7981\u7528","slug":"\u8BBE\u7F6E\u7981\u7528"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5","slug":"\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A","slug":"\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A"},{"level":3,"title":"\u61D2\u52A0\u8F7D","slug":"\u61D2\u52A0\u8F7D"},{"level":3,"title":"d-editable-select","slug":"d-editable-select"}],"relativePath":"components/editable-select/index.md","lastUpdated":1647843975013}',U=x('<h1 id="editableselect-\u53EF\u8F93\u5165\u4E0B\u62C9\u9009\u62E9\u6846" tabindex="-1">EditableSelect \u53EF\u8F93\u5165\u4E0B\u62C9\u9009\u62E9\u6846 <a class="header-anchor" href="#editableselect-\u53EF\u8F93\u5165\u4E0B\u62C9\u9009\u62E9\u6846" aria-hidden="true">#</a></h1><p>\u540C\u65F6\u652F\u6301\u8F93\u5165\u548C\u4E0B\u62C9\u9009\u62E9\u7684\u8F93\u5165\u6846\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u540C\u65F6\u652F\u6301\u7528\u6237\u8F93\u5165\u6570\u636E\u548C\u9009\u62E9\u5DF2\u6709\u6570\u636E\u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u52A0\u5165\u8F93\u5165\u8054\u60F3\u529F\u80FD\uFF0C\u65B9\u4FBF\u7528\u6237\u641C\u7D22\u5DF2\u6709\u6570\u636E\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u901A\u8FC7 source \u8BBE\u7F6E\u6570\u636E\u6E90\u3002</p>',6),$=n("div",null,"// todo \u5C55\u5F00\u4EE3\u7801\u7684\u5185\u90E8\u63CF\u8FF0",-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"filter-option"),t(`
    `),n("span",{class:"token attr-name"},"appendToBody"),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label0'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),j=n("h3",{id:"\u8BBE\u7F6E\u7981\u7528",tabindex:"-1"},[t("\u8BBE\u7F6E\u7981\u7528 "),n("a",{class:"header-anchor",href:"#\u8BBE\u7F6E\u7981\u7528","aria-hidden":"true"},"#")],-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"disabled"),t(`
    `),n("span",{class:"token attr-name"},"filter-option"),t(`
    `),n("span",{class:"token attr-name"},"appendToBody"),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"filter-option"),t(`
    `),n("span",{class:"token attr-name"},"appendToBody"),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"option-disabled-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'label0'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label0'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      options1
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=n("h3",{id:"\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5","aria-hidden":"true"},"#")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"appendToBody"),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterOption"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label0'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"filterOption"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"inputValue"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),t(" any")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" option"),n("span",{class:"token punctuation"},"."),t("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("inputValue"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      filterOption
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A","aria-hidden":"true"},"#")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"appendToBody"),t(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"filter-option"),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#itemTemplate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\u7B2C{{ slotProps.value }}\u9879: {{ slotProps.label }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#noResultItemTemplate"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\n        {{ `\u6CA1\u6709\u5339\u914D\u9879` }}\n      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label0'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Q=n("h3",{id:"\u61D2\u52A0\u8F7D",tabindex:"-1"},[t("\u61D2\u52A0\u8F7D "),n("a",{class:"header-anchor",href:"#\u61D2\u52A0\u8F7D","aria-hidden":"true"},"#")],-1),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"appendToBody"),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("300"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":load-more"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loadMore"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" getCurrentInstance "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" size "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"filterMethod"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"filterMethod"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("options"),n("span",{class:"token punctuation"},","),t(" val")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" options"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"option"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" option"),n("span",{class:"token punctuation"},"."),t("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("val"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fetch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" size"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"label"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(" index"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(` i
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      index `),n("span",{class:"token operator"},"+="),t(" size"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" data"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"loadMore"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"val"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("options"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token operator"},"..."),n("span",{class:"token function"},"filterMethod"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},","),t(" val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
          loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
        options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
      loadMore
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),X=x('<h3 id="d-editable-select" tabindex="-1">d-editable-select <a class="header-anchor" href="#d-editable-select" aria-hidden="true">#</a></h3><p>d-editable-select \u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>options</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u6570\u636E\u5217\u8868</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>appendToBody</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u4E0B\u62C9\u662F\u5426 appendToBody</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>placeholder</td><td><code>string</code></td><td><code>Search</code></td><td>\u4E0B\u62C9\u6846\u7684\u9ED8\u8BA4\u63D0\u793A\u6587\u5B57</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>maxHeight</td><td>number</td><td></td><td></td><td></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u503C\u4E3A true \u7981\u7528\u4E0B\u62C9\u6846</td><td><a href="#%E8%AE%BE%E7%BD%AE%E7%A6%81%E7%94%A8">\u8BBE\u7F6E\u7981\u7528</a></td></tr><tr><td>disabledKey</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u7981\u7528\u9009\u9879\u7684 Key \u503C</td><td><a href="#%E8%AE%BE%E7%BD%AE%E7%A6%81%E7%94%A8">\u8BBE\u7F6E\u7981\u7528</a></td></tr><tr><td>filterOption</td><td><code>boolean|(inputValue,options)=&gt;boolean</code></td><td>true</td><td>\u5F53\u5176\u4E3A\u4E00\u4E2A\u51FD\u6570\u65F6\uFF0C\u4F1A\u63A5\u6536 inputValue option \u4E24\u4E2A\u53C2\u6570\uFF0C\u5F53 option \u7B26\u5408\u7B5B\u9009\u6761\u4EF6\u65F6\uFF0C\u5E94\u8FD4\u56DE true\uFF0C\u53CD\u4E4B\u5219\u8FD4\u56DE false\u3002</td><td></td></tr></tbody></table><p>d-editable-select \u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>loadMore</td><td><code>(inputvalue:string)=&gt;void </code></td><td>\u61D2\u52A0\u8F7D\u89E6\u53D1\u4E8B\u4EF6\uFF0C\u914D\u5408 enableLazyLoad \u4F7F\u7528</td><td><a href="#%E6%87%92%E5%8A%A0%E8%BD%BD">\u61D2\u52A0\u8F7D</a></td></tr><tr><td>search</td><td><code> (inputvalue:string)=&gt;bolean</code></td><td>\u6587\u672C\u6846\u503C\u53D8\u5316\u65F6\u56DE\u8C03</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%95%B0%E6%8D%AE%E5%8C%B9%E9%85%8D%E6%96%B9%E6%B3%95">\u81EA\u5B9A\u4E49\u6570\u636E\u5339\u914D\u65B9\u6CD5</a></td></tr></tbody></table><p>d-editable-select \u63D2\u69FD</p><table><thead><tr><th>\u63D2\u69FD\u540D</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>itemTemplate</td><td>\u53EF\u9009\uFF0C\u4E0B\u62C9\u83DC\u5355\u6761\u76EE\u7684\u6A21\u677F</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF%E5%B1%95%E7%A4%BA">\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A</a></td></tr><tr><td>noResultItemTemplate</td><td>\u53EF\u9009\uFF0C\u4E0B\u62C9\u83DC\u5355\u6761\u76EE\u641C\u7D22\u540E\u6CA1\u6709\u7ED3\u679C\u7684\u6A21\u677F</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E6%9D%BF%E5%B1%95%E7%A4%BA">\u81EA\u5B9A\u4E49\u6A21\u677F\u5C55\u793A</a></td></tr></tbody></table>',7);function Y(l,a,e,k,v,f){const b=B("render-demo-0"),i=B("demo"),d=B("render-demo-1"),o=B("render-demo-2"),s=B("render-demo-3"),p=B("render-demo-4");return L(),z("div",null,[U,y(i,{sourceCode:`<template>
  <d-editable-select
    v-model="value"
    :options="options"
    filter-option
    appendToBody
    :width="450"
  ></d-editable-select>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');
    const options = reactive([
      {
        label: 'label0',
        value: 0
      },
      {
        label: 'label1',
        value: 1
      },
      {
        label: 'label2',
        value: 2
      }
    ]);
    return {
      value,
      options
    };
  }
});
<\/script>
`},{description:m(()=>[$]),highlight:m(()=>[P]),default:m(()=>[y(b)]),_:1}),j,y(i,{sourceCode:`<template>
  <d-editable-select
    v-model="value"
    disabled
    filter-option
    appendToBody
    :width="450"
    :options="options"
  ></d-editable-select>
  <br />
  <d-editable-select
    v-model="value1"
    filter-option
    appendToBody
    :width="450"
    :options="options1"
    option-disabled-key="disabled"
  ></d-editable-select>
</template>
<script>
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const value1 = ref('');
    const options = reactive(['label0', 'label1', 'label2']);
    const options1 = reactive([
      {
        label: 'label0',
        value: 0
      },
      {
        label: 'label1',
        value: 1,
        disabled: true
      },
      {
        label: 'label2',
        value: 2,
        disabled: false
      }
    ]);
    return {
      value,
      value1,
      options,
      options1
    };
  }
});
<\/script>
`},{highlight:m(()=>[R]),default:m(()=>[y(d)]),_:1}),K,y(i,{sourceCode:`<template>
  <d-editable-select
    v-model="value"
    appendToBody
    :width="450"
    :options="options"
    :filter-option="filterOption"
  ></d-editable-select>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const options = reactive([
      {
        label: 'label0',
        value: 0
      },
      {
        label: 'label1',
        value: 1,
        disabled: true
      },
      {
        label: 'label2',
        value: 2,
        disabled: false
      }
    ]);
    const filterOption = (inputValue: string, option: any) => option.label.indexOf(inputValue) > -1;
    return {
      value,
      options,
      filterOption
    };
  }
});
<\/script>
`},{highlight:m(()=>[H]),default:m(()=>[y(o)]),_:1}),G,y(i,{sourceCode:`<template>
  <d-editable-select v-model="value" appendToBody :width="450" filter-option :options="options">
    <template #itemTemplate="slotProps">
      <div>\u7B2C{{ slotProps.value }}\u9879: {{ slotProps.label }}</div>
    </template>
    <template #noResultItemTemplate>
      <div>
        {{ \`\u6CA1\u6709\u5339\u914D\u9879\` }}
      </div>
    </template>
  </d-editable-select>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const options = reactive([
      {
        label: 'label0',
        value: 0
      },
      {
        label: 'label1',
        value: 1,
        disabled: true
      },
      {
        label: 'label2',
        value: 2,
        disabled: false
      }
    ]);
    return {
      value,
      options
    };
  }
});
<\/script>
`},{highlight:m(()=>[J]),default:m(()=>[y(s)]),_:1}),Q,y(i,{sourceCode:`<template>
  <d-editable-select
    v-model="value"
    appendToBody
    :options="options"
    :filter-option="false"
    :max-height="300"
    :width="450"
    :loading="loading"
    :load-more="loadMore"
    @search="handleSearch"
  ></d-editable-select>
</template>

<script>
import { defineComponent, reactive, ref, getCurrentInstance } from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const value = ref('');
    const options = ref([]);
    const loading = ref(false);
    const size = 20;
    let index = 0;
    const handleSearch = (val: string) => {
      if (val !== '') {
        loading.value = true;
        setTimeout(() => {
          const data = fetch();
          options.value = filterMethod(data, val);
          loading.value = false;
        }, 3000);
      } else {
        options.value = [];
      }
    };
    const filterMethod = (options, val) => {
      return options.filter((option) => {
        return option.label.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    };
    const fetch = () => {
      const data = [];
      for (let i = 1; i <= size; i++) {
        data.push({
          label: \`label\${i + index}\`,
          value: i
        });
      }
      index += size;
      return data;
    };
    const loadMore = (val: string) => {
      if (val !== '') {
        loading.value = true;
        setTimeout(() => {
          const data = fetch();
          options.value = [...options.value, ...filterMethod(data, val)];
          loading.value = false;
        }, 3000);
      } else {
        options.value = [];
      }
    };
    return {
      value,
      options,
      loading,
      handleSearch,
      loadMore
    };
  }
});
<\/script>
`},{highlight:m(()=>[W]),default:m(()=>[y(p)]),_:1}),X])}var sn=S(I,[["render",Y]]);export{an as __pageData,sn as default};
