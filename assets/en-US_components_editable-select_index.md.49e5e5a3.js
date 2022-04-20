var N=Object.defineProperty;var q=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var O=(l,a,e)=>a in l?N(l,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[a]=e,_=(l,a)=>{for(var e in a||(a={}))z.call(a,e)&&O(l,e,a[e]);if(q)for(var e of q(a))D.call(a,e)&&O(l,e,a[e]);return l};import{_ as T,V as f,r as C,c as M,a as h,w as g,b as S,d as n,e as t,o as U}from"./app.0c19a03b.js";const P={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:a,openBlock:e,createElementBlock:k}=f;function m(o,s){const p=l("d-editable-select");return e(),k("div",null,[a(p,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=c=>o.value=c),options:o.options,"filter-option":"",width:450},null,8,["modelValue","options"])])}const{defineComponent:b,reactive:v,ref:i}=f,d=b({setup(){const o=i(""),s=v([{label:"label0",value:0},{label:"label1",value:1},{label:"label2",value:2}]);return{value:o,options:s}}});return _({render:m},d)}(),"render-demo-1":function(){const{resolveComponent:l,createVNode:a,createElementVNode:e,openBlock:k,createElementBlock:m}=f,b=e("br",null,null,-1);function v(p,c){const u=l("d-editable-select");return k(),m("div",null,[a(u,{modelValue:p.value,"onUpdate:modelValue":c[0]||(c[0]=r=>p.value=r),disabled:"","filter-option":"",width:450,options:p.options},null,8,["modelValue","options"]),b,a(u,{modelValue:p.value1,"onUpdate:modelValue":c[1]||(c[1]=r=>p.value1=r),"filter-option":"",width:450,options:p.options1,"option-disabled-key":"disabled"},null,8,["modelValue","options"])])}const{defineComponent:i,reactive:d,ref:o}=f,s=i({setup(){const p=o(""),c=o(""),u=d(["label0","label1","label2"]),r=d([{label:"label0",value:0},{label:"label1",value:1,disabled:!0},{label:"label2",value:2,disabled:!1}]);return{value:p,value1:c,options:u,options1:r}}});return _({render:v},s)}(),"render-demo-2":function(){const{resolveComponent:l,createVNode:a,openBlock:e,createElementBlock:k}=f;function m(o,s){const p=l("d-editable-select");return e(),k("div",null,[a(p,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=c=>o.value=c),width:450,options:o.options,"filter-option":o.filterOption},null,8,["modelValue","options","filter-option"])])}const{defineComponent:b,ref:v,reactive:i}=f,d=b({setup(){const o=v(""),s=i([{label:"label0",value:0},{label:"label1",value:1,disabled:!0},{label:"label2",value:2,disabled:!1}]);return{value:o,options:s,filterOption:(c,u)=>u.label.indexOf(c)>-1}}});return _({render:m},d)}(),"render-demo-3":function(){const{toDisplayString:l,createElementVNode:a,resolveComponent:e,withCtx:k,createVNode:m,openBlock:b,createElementBlock:v}=f,i=a("div",null,l("\u6CA1\u6709\u5339\u914D\u9879"),-1);function d(u,r){const V=e("d-editable-select");return b(),v("div",null,[m(V,{modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=y=>u.value=y),width:450,"filter-option":"",options:u.options},{item:k(y=>[a("div",null,"\u7B2C"+l(y.value)+"\u9879: "+l(y.label),1)]),noResultItem:k(()=>[i]),_:1},8,["modelValue","options"])])}const{defineComponent:o,ref:s,reactive:p}=f,c=o({setup(){const u=s(""),r=p([{label:"label0",value:0},{label:"label1",value:1,disabled:!0},{label:"label2",value:2,disabled:!1}]);return{value:u,options:r}}});return _({render:d},c)}(),"render-demo-4":function(){const{resolveComponent:l,createVNode:a,openBlock:e,createElementBlock:k}=f;function m(s,p){const c=l("d-editable-select");return e(),k("div",null,[a(c,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=u=>s.value=u),options:s.options,"filter-option":!1,"max-height":300,width:450,loading:s.loading,onLoadMore:s.loadeMore,onSearch:s.handleSearch},null,8,["modelValue","options","loading","onLoadMore","onSearch"])])}const{defineComponent:b,reactive:v,ref:i,getCurrentInstance:d}=f,o=b({setup(s,p){let c=0;const u=i([]),r=i(""),V=i(!1);let y=null;const E=()=>new Promise(w=>{const x=[];V.value=!0,y&&(clearTimeout(y),y=null),y=setTimeout(()=>{for(let B=1;B<=15;B++)x.push({label:`label${B+c}`,value:B});c+=15,V.value=!1,w(x)},2e3)});return{options:u,value:r,loading:V,handleSearch:async w=>{if(w!==""){const x=await E();u.value=x}},loadeMore:async()=>{const w=await E();console.log("data: ",w),u.value=[...u.value,...w]}}}});return _({render:m},o)}()}},an='{"title":"EditableSelect","description":"","frontmatter":{},"headers":[{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":3,"title":"Set disable options","slug":"set-disable-options"},{"level":3,"title":"Customized data matching method","slug":"customized-data-matching-method"},{"level":3,"title":"Custom template display","slug":"custom-template-display"},{"level":3,"title":"Enable lazy load","slug":"enable-lazy-load"},{"level":3,"title":"d-editable-select","slug":"d-editable-select"}],"relativePath":"en-US/components/editable-select/index.md","lastUpdated":1650439126631}',I=S('<h1 id="editableselect" tabindex="-1">EditableSelect <a class="header-anchor" href="#editableselect" aria-hidden="true">#</a></h1><p>You can enter or select a value from the drop-down list box.</p><h4 id="when-to-use" tabindex="-1">When To Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h4><p>You can use it easily when you want to search existed data.</p><h3 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>Set source to a data source.</p>',6),$=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"filter-option"),t(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label0'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),A=n("h3",{id:"set-disable-options",tabindex:"-1"},[t("Set disable options "),n("a",{class:"header-anchor",href:"#set-disable-options","aria-hidden":"true"},"#")],-1),j=n("p",null,"Disable specified data or disable it as a whole",-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token attr-name"},"filter-option"),t(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"filter-option"),t(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"option-disabled-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("disabled"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
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
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"customized-data-matching-method",tabindex:"-1"},[t("Customized data matching method "),n("a",{class:"header-anchor",href:"#customized-data-matching-method","aria-hidden":"true"},"#")],-1),L=n("p",null,"Use filter-optio to customize the data matching method.",-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("filterOption"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label0'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"filterOption"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token literal-property property"},"inputValue"),n("span",{class:"token operator"},":"),t(" string"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"option"),n("span",{class:"token operator"},":"),t(" any")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" option"),n("span",{class:"token punctuation"},"."),t("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("inputValue"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      filterOption`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"custom-template-display",tabindex:"-1"},[t("Custom template display "),n("a",{class:"header-anchor",href:"#custom-template-display","aria-hidden":"true"},"#")],-1),F=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"filter-option"),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#item"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("\u7B2C{{ slotProps.value }}\u9879: {{ slotProps.label }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#noResultItem"),n("span",{class:"token punctuation"},">")]),t(`
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
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'label2'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),G=n("h3",{id:"enable-lazy-load",tabindex:"-1"},[t("Enable lazy load "),n("a",{class:"header-anchor",href:"#enable-lazy-load","aria-hidden":"true"},"#")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-editable-select")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":filter-option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":max-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("300"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("450"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@load-more"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loadeMore"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleSearch"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-editable-select")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" getCurrentInstance "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("props"),n("span",{class:"token punctuation"},","),t(" ctx")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"let"),t(" timer "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fetch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("timer"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"clearTimeout"),n("span",{class:"token punctuation"},"("),t("timer"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          timer `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        timer `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
            data`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"label"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("i "),n("span",{class:"token operator"},"+"),t(" count"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
              `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(" i"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),t(`
          count `),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},";"),t(`
          loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),t("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleSearch"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("val "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" data"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"loadeMore"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" data "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'data: '"),n("span",{class:"token punctuation"},","),t(" data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      options`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("options"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token operator"},"..."),t("data"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      options`),n("span",{class:"token punctuation"},","),t(`
      value`),n("span",{class:"token punctuation"},","),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      handleSearch`),n("span",{class:"token punctuation"},","),t(`
      loadeMore`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),K=S('<h3 id="d-editable-select" tabindex="-1">d-editable-select <a class="header-anchor" href="#d-editable-select" aria-hidden="true">#</a></h3><p>d-editable-select Attributes</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>options</td><td><code>Array</code></td><td>[]</td><td>Optional. Data list</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>placeholder</td><td><code>string</code></td><td><code>Search</code></td><td>Optional. This field is displayed when no item is selected.</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>max-height</td><td><code>number</code></td><td>--</td><td>Optional. Maximum height of the drop-down list box</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>width</td><td><code>number</code></td><td>--</td><td>Optional. Controls the width of the drop-down list box.</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>Optional. The value true indicates that the drop-down list box is disabled.</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>option-disabled-key</td><td><code>string</code></td><td>--</td><td>Optional. Sets the key value of the disabled option.</td><td><a href="#set-disable-options">Set disable options</a></td></tr><tr><td>loading</td><td><code>boolean</code></td><td>false</td><td>Optional, controls the loading state</td><td><a href="#enable-lazy-load">Enable-lazy-load</a></td></tr><tr><td>filter-option</td><td><code>boolean| (inputvalue,options)=&gt;boolean</code></td><td>true</td><td>Optional, when it is a function, it will receive two parameters of inputvalue option, when option meets the filter conditions, it should return true, otherwise return false.</td><td></td></tr></tbody></table><p>d-editable-select Events</p><table><thead><tr><th>Event Name</th><th>Type</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>load-more</td><td><code>(inputvalue:string)=&gt;void</code></td><td>Optional. lazy loading trigger event. This event is used together with `filter-option&#39;</td><td><a href="#enable-lazy-load">Enable-lazy-load</a></td></tr><tr><td>search</td><td><code>(inputvalue:string)=&gt;void</code></td><td>Optional. callback when the textbox value changes</td><td><a href="#customized-data-matching-method">Customized-data-matching-method</a></td></tr></tbody></table><p>d-editable-select Slots</p><table><thead><tr><th>Name</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>item</td><td>Optional, Dropdown list item template</td><td><a href="#custom-template-display">Custom template display</a></td></tr><tr><td>noResultItem</td><td>Optional. Template for which no result is found after the drop-down list item is searched.</td><td><a href="#custom-template-display">Custom template display</a></td></tr></tbody></table>',7);function Q(l,a,e,k,m,b){const v=C("render-demo-0"),i=C("demo"),d=C("render-demo-1"),o=C("render-demo-2"),s=C("render-demo-3"),p=C("render-demo-4");return U(),M("div",null,[I,h(i,{sourceCode:`<template>
  <d-editable-select v-model="value" :options="options" filter-option :width="450"></d-editable-select>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('');
    const options = reactive([
      {
        label: 'label0',
        value: 0,
      },
      {
        label: 'label1',
        value: 1,
      },
      {
        label: 'label2',
        value: 2,
      },
    ]);
    return {
      value,
      options,
    };
  },
});
<\/script>
`},{highlight:g(()=>[$]),default:g(()=>[h(v)]),_:1}),A,j,h(i,{sourceCode:`<template>
  <d-editable-select v-model="value" disabled filter-option :width="450" :options="options"></d-editable-select>
  <br />
  <d-editable-select v-model="value1" filter-option :width="450" :options="options1" option-disabled-key="disabled"></d-editable-select>
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
        value: 0,
      },
      {
        label: 'label1',
        value: 1,
        disabled: true,
      },
      {
        label: 'label2',
        value: 2,
        disabled: false,
      },
    ]);
    return {
      value,
      value1,
      options,
      options1,
    };
  },
});
<\/script>
`},{highlight:g(()=>[R]),default:g(()=>[h(d)]),_:1}),J,L,h(i,{sourceCode:`<template>
  <d-editable-select v-model="value" :width="450" :options="options" :filter-option="filterOption"></d-editable-select>
</template>
<script>
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  setup() {
    const value = ref('');
    const options = reactive([
      {
        label: 'label0',
        value: 0,
      },
      {
        label: 'label1',
        value: 1,
        disabled: true,
      },
      {
        label: 'label2',
        value: 2,
        disabled: false,
      },
    ]);
    const filterOption = (inputValue: string, option: any) => option.label.indexOf(inputValue) > -1;
    return {
      value,
      options,
      filterOption,
    };
  },
});
<\/script>
`},{highlight:g(()=>[Y]),default:g(()=>[h(o)]),_:1}),W,h(i,{sourceCode:`<template>
  <d-editable-select v-model="value" :width="450" filter-option :options="options">
    <template #item="slotProps">
      <div>\u7B2C{{ slotProps.value }}\u9879: {{ slotProps.label }}</div>
    </template>
    <template #noResultItem>
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
        value: 0,
      },
      {
        label: 'label1',
        value: 1,
        disabled: true,
      },
      {
        label: 'label2',
        value: 2,
        disabled: false,
      },
    ]);
    return {
      value,
      options,
    };
  },
});
<\/script>
`},{highlight:g(()=>[F]),default:g(()=>[h(s)]),_:1}),G,h(i,{sourceCode:`<template>
  <d-editable-select
    v-model="value"
    :options="options"
    :filter-option="false"
    :max-height="300"
    :width="450"
    :loading="loading"
    @load-more="loadeMore"
    @search="handleSearch"
  ></d-editable-select>
</template>

<script>
import { defineComponent, reactive, ref, getCurrentInstance } from 'vue';

export default defineComponent({
  setup(props, ctx) {
    let count = 0;
    const options = ref([]);
    const value = ref('');
    const loading = ref(false);
    let timer = null;
    const fetch = () => {
      return new Promise((resolve) => {
        const data = [];
        loading.value = true;
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(() => {
          for (let i = 1; i <= 15; i++) {
            data.push({
              label: \`label\${i + count}\`,
              value: i,
            });
          }
          count += 15;
          loading.value = false;
          resolve(data);
        }, 2000);
      });
    };
    const handleSearch = async (val) => {
      if (val !== '') {
        const data = await fetch();
        options.value = data;
      }
    };
    const loadeMore = async () => {
      const data = await fetch();
      console.log('data: ', data);
      options.value = [...options.value, ...data];
    };
    return {
      options,
      value,
      loading,
      handleSearch,
      loadeMore,
    };
  },
});
<\/script>
`},{highlight:g(()=>[H]),default:g(()=>[h(p)]),_:1}),K])}var sn=T(P,[["render",Q]]);export{an as __pageData,sn as default};
