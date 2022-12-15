var W=Object.defineProperty;var O=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(l,e,o)=>e in l?W(l,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):l[e]=o,D=(l,e)=>{for(var o in e||(e={}))$.call(e,o)&&N(l,o,e[o]);if(O)for(var o of O(e))L.call(e,o)&&N(l,o,e[o]);return l};import{_ as P,V as y,r as z,o as M,c as J,a as B,w as A,b as G,d as n,e as t}from"./app.d8dfdb43.js";const K={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:l,createVNode:e,createElementVNode:o,withCtx:f,openBlock:E,createElementBlock:F}=y,v={class:"checkbox-basic-demo"},g={class:"inline-row",style:{display:"inline-flex"}},x=o("span",null,"Custom label template",-1);function b(a,s){const r=l("d-checkbox"),C=l("d-select");return E(),F("div",null,[o("div",v,[e(r,{label:"Checked",isShowTitle:!1,modelValue:a.checked,"onUpdate:modelValue":s[0]||(s[0]=c=>a.checked=c)},null,8,["modelValue"]),e(r,{label:"Not checked",isShowTitle:!1,modelValue:a.unchecked,"onUpdate:modelValue":s[1]||(s[1]=c=>a.unchecked=c)},null,8,["modelValue"]),e(r,{label:"Custom title",isShowTitle:!0,title:"my title",modelValue:a.unchecked2,"onUpdate:modelValue":s[2]||(s[2]=c=>a.unchecked2=c)},null,8,["modelValue"]),e(r,{label:"No Animation",isShowTitle:!1,modelValue:a.checked2,"onUpdate:modelValue":s[3]||(s[3]=c=>a.checked2=c),showAnimation:!1},null,8,["modelValue"]),e(r,{label:"Disabled",isShowTitle:!1,modelValue:a.checked,"onUpdate:modelValue":s[4]||(s[4]=c=>a.checked=c),disabled:!0},null,8,["modelValue"]),e(r,{label:"Disabled",isShowTitle:!1,modelValue:a.unchecked,"onUpdate:modelValue":s[5]||(s[5]=c=>a.unchecked=c),disabled:!0},null,8,["modelValue"]),e(r,{label:"Half-checked",isShowTitle:!1,"half-checked":a.halfCheck,modelValue:a.allCheck,"onUpdate:modelValue":s[6]||(s[6]=c=>a.allCheck=c),onChange:a.onHalfCheckboxChange},null,8,["half-checked","modelValue","onChange"]),e(r,{label:"Half-checked",isShowTitle:!1,"half-checked":a.halfCheck,modelValue:a.allCheck,"onUpdate:modelValue":s[7]||(s[7]=c=>a.allCheck=c),onChange:a.onHalfCheckboxChange,disabled:!0},null,8,["half-checked","modelValue","onChange"]),e(r,{label:"Custom color",isShowTitle:!1,modelValue:a.customCheck,"onUpdate:modelValue":s[8]||(s[8]=c=>a.customCheck=c),color:"RGB(255, 193, 7)"},null,8,["modelValue"]),e(r,{label:"Half-checked",isShowTitle:!1,"half-checked":a.halfCheck2,modelValue:a.allCheck2,"onUpdate:modelValue":s[9]||(s[9]=c=>a.allCheck2=c),onChange:a.onHalfCheckboxChange2,color:"RGB(255, 193, 7)"},null,8,["half-checked","modelValue","onChange"]),e(r,{isShowTitle:!1,modelValue:a.unchecked3,"onUpdate:modelValue":s[11]||(s[11]=c=>a.unchecked3=c)},{default:f(()=>[o("div",g,[e(C,{modelValue:a.value1,"onUpdate:modelValue":s[10]||(s[10]=c=>a.value1=c),options:[1,2,3,4],size:"sm",onClick:a.handleChange},null,8,["modelValue","onClick"]),x])]),_:1},8,["modelValue"])])])}const{defineComponent:k,ref:p}=y,d=k({setup(){const a=p(!0),s=p(!0),r=p(!1),C=p(!1),c=p(!1),V=p(!0),q=p(!0),u=p(!1),T=p(!1),i=p(!0),m=p(null);return{checked:a,checked2:s,unchecked:r,unchecked2:C,unchecked3:c,halfCheck:V,halfCheck2:q,allCheck:u,allCheck2:T,onHalfCheckboxChange:S=>{V.value=!u.value,console.log("halfCheckbox checked:",S)},customCheck:i,onHalfCheckboxChange2:S=>{q.value=!T.value,console.log("halfCheckbox checked:",S)},handleChange:S=>{S.preventDefault(),S.stopPropagation()},value1:m}}});return D({render:b},d)}(),"render-demo-1":function(){const{createElementVNode:l,resolveComponent:e,createVNode:o,renderList:f,Fragment:E,openBlock:F,createElementBlock:v,createBlock:g,withCtx:x}=y,b={class:"checkbox-group-demo"},k=l("h4",{class:"title"},"Input Object Array",-1),p=l("h4",{class:"title"},"Input String Array",-1),d=l("h4",{class:"title"},"Disabled Group",-1),a=l("h4",{class:"title"},"Custom Selected Color",-1),s=l("h4",{class:"title"},"Set showAnimation false",-1),r=l("h4",{class:"title"},"Multi-line Checkbox",-1),C=l("h4",{class:"title"},"\u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236",-1),c=l("h4",{class:"title"},"\u63D2\u69FD\u65B9\u5F0F",-1);function V(i,m){const w=e("d-checkbox-group"),_=e("d-checkbox");return F(),v("div",null,[l("div",b,[k,o(w,{modelValue:i.values1,"onUpdate:modelValue":m[0]||(m[0]=h=>i.values1=h),options:i.options1,direction:"row"},null,8,["modelValue","options"]),p,o(w,{modelValue:i.values2,"onUpdate:modelValue":m[1]||(m[1]=h=>i.values2=h),options:i.options2,isShowTitle:!1,direction:"row"},null,8,["modelValue","options"]),d,o(w,{modelValue:i.values2,"onUpdate:modelValue":m[2]||(m[2]=h=>i.values2=h),options:i.options2,isShowTitle:!1,direction:"row",disabled:!0},null,8,["modelValue","options"]),a,o(w,{modelValue:i.values3,"onUpdate:modelValue":m[3]||(m[3]=h=>i.values3=h),options:i.options3,isShowTitle:!1,direction:"row",color:"RGB(255, 193, 7)"},null,8,["modelValue","options"]),s,o(w,{modelValue:i.values4,"onUpdate:modelValue":m[4]||(m[4]=h=>i.values4=h),options:i.options3,isShowTitle:!1,direction:"row",showAnimation:!1},null,8,["modelValue","options"]),r,o(w,{modelValue:i.values5,"onUpdate:modelValue":m[5]||(m[5]=h=>i.values5=h),options:i.options5,isShowTitle:!1,direction:"row",itemWidth:94},null,8,["modelValue","options"]),C,o(w,{modelValue:i.values6,"onUpdate:modelValue":m[6]||(m[6]=h=>i.values6=h),options:i.options5,isShowTitle:!1,direction:"row",itemWidth:94,max:3},null,8,["modelValue","options"]),c,o(w,{modelValue:i.values7,"onUpdate:modelValue":m[7]||(m[7]=h=>i.values7=h),isShowTitle:!1,direction:"row",itemWidth:94,max:3},{default:x(()=>[(F(!0),v(E,null,f(i.options1,h=>(F(),g(_,{key:h.value,label:h.name,value:h.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])])])}const{defineComponent:q,ref:u}=y,T=q({setup(){const i=u([{name:"data1",disabled:!0,value:"1",id:1},{name:"data2",value:"2",id:2},{name:"data3",value:"3",id:3}]),m=u([{name:"data2",value:"2",id:2}]),w=u(["data1","data2","data3","data4","data5","data6","data7"]),_=u(["data1","data2"]),h=u(["data1","data2","data3","data4","data5","data6","data7"]),S=u(["data1","data2"]),H=u(["data2","data3"]),U=u(["data00000000000000001","data2","data3","data4","data5","data6","data7","data8","data9","data10","data11","data12","data13","data14","data15"]),I=u(["data2","data3"]),j=u(["data2","data3"]),R=u(["2","3"]);return{options1:i,values1:m,options2:w,values2:_,options3:h,values3:S,values4:H,options5:U,values5:I,values6:j,values7:R}}});return D({render:V},T)}(),"render-demo-2":function(){const{createElementVNode:l,resolveComponent:e,createVNode:o,openBlock:f,createElementBlock:E}=y,F=l("h4",null,"Small",-1),v=l("h4",null,"Middle",-1),g=l("h4",null,"Large",-1);function x(d,a){const s=e("d-checkbox-group");return f(),E("div",null,[F,o(s,{modelValue:d.borderSizeValues1,"onUpdate:modelValue":a[0]||(a[0]=r=>d.borderSizeValues1=r),options:d.borderSizeOptions1,direction:"row",size:"sm",border:""},null,8,["modelValue","options"]),v,o(s,{modelValue:d.borderSizeValues2,"onUpdate:modelValue":a[1]||(a[1]=r=>d.borderSizeValues2=r),options:d.borderSizeOptions1,direction:"row",size:"md",border:""},null,8,["modelValue","options"]),g,o(s,{modelValue:d.borderSizeValues3,"onUpdate:modelValue":a[2]||(a[2]=r=>d.borderSizeValues3=r),options:d.borderSizeOptions1,direction:"row",size:"lg",border:""},null,8,["modelValue","options"])])}const{defineComponent:b,ref:k}=y,p=b({setup(){const d=k([{name:"Summer",value:"1",id:1},{name:"Spring",disabled:!0,value:"2",id:2}]),a=k([{name:"Summer",value:"1",id:1}]),s=k([{name:"Summer",value:"1",id:1}]),r=k([{name:"Summer",value:"1",id:1}]);return{borderSizeValues1:a,borderSizeValues2:s,borderSizeValues3:r,borderSizeOptions1:d}}});return D({render:x},p)}(),"render-demo-3":function(){const{createElementVNode:l,renderList:e,Fragment:o,openBlock:f,createElementBlock:E,resolveComponent:F,createBlock:v,withCtx:g,createVNode:x}=y,b=l("h4",null,"\u7981\u7528",-1),k=l("h4",null,"\u9ED8\u8BA4",-1),p=l("h4",null,"\u81EA\u5B9A\u4E49\u586B\u5145\u989C\u8272\u3001\u6587\u5B57\u989C\u8272",-1);function d(C,c){const V=F("d-checkbox-button"),q=F("d-checkbox-group");return f(),E("div",null,[b,x(q,{modelValue:C.buttonValues1,"onUpdate:modelValue":c[0]||(c[0]=u=>C.buttonValues1=u),size:"sm",direction:"row"},{default:g(()=>[(f(!0),E(o,null,e(C.buttonOptions1,u=>(f(),v(V,{label:u.label,value:u.value,key:u.value,disabled:u.disabled},null,8,["label","value","disabled"]))),128))]),_:1},8,["modelValue"]),k,x(q,{modelValue:C.buttonValues2,"onUpdate:modelValue":c[1]||(c[1]=u=>C.buttonValues2=u),direction:"row"},{default:g(()=>[(f(!0),E(o,null,e(C.buttonOptions1,u=>(f(),v(V,{label:u.label,value:u.value,key:u.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),p,x(q,{modelValue:C.buttonValues3,"onUpdate:modelValue":c[2]||(c[2]=u=>C.buttonValues3=u),size:"lg","is-show-title":"",color:"#FA9841","text-color":"#fff",direction:"row"},{default:g(()=>[(f(!0),E(o,null,e(C.buttonOptions1,u=>(f(),v(V,{label:u.label,value:u.value,key:u.value,title:u.title},null,8,["label","value","title"]))),128))]),_:1},8,["modelValue"])])}const{defineComponent:a,ref:s}=y,r=a({setup(){const C=s([{label:"\u9009\u98791",disabled:!0,value:2,id:1,title:"\u81EA\u5B9A\u4E49title1"},{label:"\u9009\u98792",value:3,id:2,title:"\u81EA\u5B9A\u4E49title2"},{label:"\u9009\u98793",value:4,id:3,title:"\u81EA\u5B9A\u4E49title3"}]),c=s([2]),V=s([2]),q=s([2]);return{buttonValues1:c,buttonValues2:V,buttonValues3:q,buttonOptions1:C}}});return D({render:d},r)}(),"render-demo-4":function(){const{resolveComponent:l,createVNode:e,createElementVNode:o,openBlock:f,createElementBlock:E}=y,F={style:{"margin-bottom":"10px"}};function v(k,p){const d=l("d-checkbox");return f(),E("div",null,[o("div",F,[e(d,{label:"Conditional Callback Allowed",isShowTitle:!1,modelValue:k.checkboxChecked1,"onUpdate:modelValue":p[0]||(p[0]=a=>k.checkboxChecked1=a),onChange:k.onCheckboxEndChange,beforeChange:k.endBeforeChange},null,8,["modelValue","onChange","beforeChange"])]),o("div",null,[e(d,{label:"Conditional Judgment Callback Interception Selected",isShowTitle:!1,modelValue:k.checkboxChecked2,"onUpdate:modelValue":p[1]||(p[1]=a=>k.checkboxChecked2=a),onChange:k.onCheckboxEndChange,beforeChange:k.endBeforeChange},null,8,["modelValue","onChange","beforeChange"])])])}const{defineComponent:g,ref:x}=y,b=g({setup(){const k=x(!0),p=x(!1);return{checkboxChecked1:k,checkboxChecked2:p,onCheckboxEndChange:s=>{console.log("checkbox1 checked:",s)},endBeforeChange:(s,r)=>r==="Conditional Callback Allowed"}}});return D({render:v},b)}(),"render-demo-5":function(){const{resolveComponent:l,createVNode:e,createElementVNode:o,openBlock:f,createElementBlock:E}=y;function F(b,k){const p=l("d-checkbox-group");return f(),E("div",null,[o("div",null,[e(p,{modelValue:b.interceptValues,"onUpdate:modelValue":k[0]||(k[0]=d=>b.interceptValues=d),options:b.interceptOptions,isShowTitle:!1,direction:"row",onChange:b.onCheckboxInterceptChange,beforeChange:b.interceptBeforeChange},null,8,["modelValue","options","onChange","beforeChange"])])])}const{defineComponent:v,ref:g}=y,x=v({setup(){const b=g(["data1","data2","intercept","intercept2","data5","data6","data7"]),k=g(["data2","intercept"]);return{interceptOptions:b,interceptValues:k,onCheckboxInterceptChange:a=>{console.log("checkbox1 checked:",a)},interceptBeforeChange:(a,s)=>!s.includes("intercept")}}});return D({render:F},x)}()}},mn='{"title":"CheckBox \u590D\u9009\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4F7F\u7528 CheckBoxGroup","slug":"\u4F7F\u7528-checkboxgroup"},{"level":3,"title":"\u5C3A\u5BF8\u548C\u8FB9\u6846","slug":"\u5C3A\u5BF8\u548C\u8FB9\u6846"},{"level":3,"title":"\u6309\u94AE\u5F62\u6001","slug":"\u6309\u94AE\u5F62\u6001"},{"level":3,"title":"checkbox \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001","slug":"checkbox-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001"},{"level":3,"title":"checkbox-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001","slug":"checkbox-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001"},{"level":3,"title":"Checkbox \u53C2\u6570","slug":"checkbox-\u53C2\u6570"},{"level":3,"title":"Checkbox \u4E8B\u4EF6","slug":"checkbox-\u4E8B\u4EF6"},{"level":3,"title":"CheckboxGroup \u53C2\u6570","slug":"checkboxgroup-\u53C2\u6570"},{"level":3,"title":"CheckboxGroup \u4E8B\u4EF6","slug":"checkboxgroup-\u4E8B\u4EF6"},{"level":3,"title":"CheckboxButton \u53C2\u6570","slug":"checkboxbutton-\u53C2\u6570"},{"level":3,"title":"Checkbox \u7C7B\u578B\u5B9A\u4E49","slug":"checkbox-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/checkbox/index.md","lastUpdated":1670856951507}',Q=G('<h1 id="checkbox-\u590D\u9009\u6846" tabindex="-1">CheckBox \u590D\u9009\u6846 <a class="header-anchor" href="#checkbox-\u590D\u9009\u6846" aria-hidden="true">#</a></h1><p>\u591A\u9009\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><ol><li>\u5728\u4E00\u7EC4\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9879\u9009\u62E9\uFF1B</li><li>\u5355\u72EC\u4F7F\u7528\u53EF\u4EE5\u8868\u793A\u5728\u4E24\u4E2A\u72B6\u6001\u4E4B\u95F4\u5207\u6362\uFF0C\u53EF\u4EE5\u548C\u63D0\u4EA4\u64CD\u4F5C\u7ED3\u5408\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checkbox-basic-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Checked"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checked"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Not checked"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("unchecked"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Custom title"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("my title"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("unchecked2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("No Animation"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checked2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Disabled"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checked"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Disabled"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("unchecked"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Half-checked"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":half-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("halfCheck"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("allCheck"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onHalfCheckboxChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Half-checked"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":half-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("halfCheck"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("allCheck"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onHalfCheckboxChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Custom color"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("customCheck"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("RGB(255, 193, 7)"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Half-checked"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":half-checked"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("halfCheck2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("allCheck2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onHalfCheckboxChange2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("RGB(255, 193, 7)"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("unchecked3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("inline-row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-flex")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-select")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("value1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("[1, 2, 3, 4]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-select")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("Custom label template"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" checked "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" checked2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" unchecked "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" unchecked2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" unchecked3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" halfCheck "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" halfCheck2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" allCheck "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" allCheck2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" customCheck "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" value1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onHalfCheckboxChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      halfCheck`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("allCheck"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'halfCheckbox checked:'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onHalfCheckboxChange2"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      halfCheck2`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("allCheck2"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'halfCheckbox checked:'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"$event"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      $event`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"preventDefault"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      $event`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopPropagation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      checked`),n("span",{class:"token punctuation"},","),t(`
      checked2`),n("span",{class:"token punctuation"},","),t(`
      unchecked`),n("span",{class:"token punctuation"},","),t(`
      unchecked2`),n("span",{class:"token punctuation"},","),t(`
      unchecked3`),n("span",{class:"token punctuation"},","),t(`
      halfCheck`),n("span",{class:"token punctuation"},","),t(`
      halfCheck2`),n("span",{class:"token punctuation"},","),t(`
      allCheck`),n("span",{class:"token punctuation"},","),t(`
      allCheck2`),n("span",{class:"token punctuation"},","),t(`
      onHalfCheckboxChange`),n("span",{class:"token punctuation"},","),t(`
      customCheck`),n("span",{class:"token punctuation"},","),t(`
      onHalfCheckboxChange2`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      value1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".checkbox-basic-demo .devui-checkbox"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".checkbox-basic-demo .inline-row .devui-select"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 150px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Y=n("h3",{id:"\u4F7F\u7528-checkboxgroup",tabindex:"-1"},[t("\u4F7F\u7528 CheckBoxGroup "),n("a",{class:"header-anchor",href:"#\u4F7F\u7528-checkboxgroup","aria-hidden":"true"},"#")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checkbox-group-demo"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Input Object Array"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("values1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Input String Array"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("values2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Disabled Group"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("values2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Custom Selected Color"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("values3"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options3"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("RGB(255, 193, 7)"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Set showAnimation false"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("values4"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Multi-line Checkbox"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("values5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options5"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":itemWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("94"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("values6"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("options5"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":itemWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("94"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("title"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u63D2\u69FD\u65B9\u5F0F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("values7"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":itemWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("94"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":max"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in options1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.name"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" values1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data4'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data5'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data6'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data7'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" values2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data4'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data5'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data6'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data7'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" values3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" values4 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" options5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token string"},"'data00000000000000001'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data4'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data5'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data6'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data7'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data8'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data9'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data10'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data11'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data12'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data13'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data14'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token string"},"'data15'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" values5 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" values6 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" values7 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      options1`),n("span",{class:"token punctuation"},","),t(`
      values1`),n("span",{class:"token punctuation"},","),t(`
      options2`),n("span",{class:"token punctuation"},","),t(`
      values2`),n("span",{class:"token punctuation"},","),t(`
      options3`),n("span",{class:"token punctuation"},","),t(`
      values3`),n("span",{class:"token punctuation"},","),t(`
      values4`),n("span",{class:"token punctuation"},","),t(`
      options5`),n("span",{class:"token punctuation"},","),t(`
      values5`),n("span",{class:"token punctuation"},","),t(`
      values6`),n("span",{class:"token punctuation"},","),t(`
      values7`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".checkbox-group-demo .title"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 20px 0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=n("h3",{id:"\u5C3A\u5BF8\u548C\u8FB9\u6846",tabindex:"-1"},[t("\u5C3A\u5BF8\u548C\u8FB9\u6846 "),n("a",{class:"header-anchor",href:"#\u5C3A\u5BF8\u548C\u8FB9\u6846","aria-hidden":"true"},"#")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Small"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("borderSizeValues1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("borderSizeOptions1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"border"),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Middle"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("borderSizeValues2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("borderSizeOptions1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("md"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"border"),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("Large"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("borderSizeValues3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("borderSizeOptions1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"border"),t(`
  `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" borderSizeOptions1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Spring'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" borderSizeValues1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" borderSizeValues2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" borderSizeValues3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Summer'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      borderSizeValues1`),n("span",{class:"token punctuation"},","),t(`
      borderSizeValues2`),n("span",{class:"token punctuation"},","),t(`
      borderSizeValues3`),n("span",{class:"token punctuation"},","),t(`
      borderSizeOptions1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=n("h3",{id:"\u6309\u94AE\u5F62\u6001",tabindex:"-1"},[t("\u6309\u94AE\u5F62\u6001 "),n("a",{class:"header-anchor",href:"#\u6309\u94AE\u5F62\u6001","aria-hidden":"true"},"#")],-1),sn=n("p",null,[t("\u9700\u8981\u628A "),n("code",null,"d-checkbox"),t(" \u66FF\u6362\u6210 "),n("code",null,"d-checkbox-button"),t("\uFF0C \u6570\u7EC4\u6E90\u53EF\u4E3A\u666E\u901A\u6570\u7EC4\u3001\u5BF9\u8C61\u6570\u7EC4\u7B49\u3002")],-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("\u7981\u7528"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("buttonValues1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("sm"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-button")]),t(`
      `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in buttonOptions1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.label"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.disabled"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("\u9ED8\u8BA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("buttonValues2"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-button")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in buttonOptions1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.label"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("h4")]),n("span",{class:"token punctuation"},">")]),t("\u81EA\u5B9A\u4E49\u586B\u5145\u989C\u8272\u3001\u6587\u5B57\u989C\u8272"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("h4")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("buttonValues3"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lg"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"is-show-title"),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#FA9841"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"text-color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("#fff"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-button")]),t(`
      `),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in buttonOptions1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.label"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.title"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" buttonOptions1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98791'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u81EA\u5B9A\u4E49title1'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98792'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u81EA\u5B9A\u4E49title2'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u9009\u98793'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token literal-property property"},"title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'\u81EA\u5B9A\u4E49title3'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" buttonValues1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" buttonValues2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" buttonValues3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      buttonValues1`),n("span",{class:"token punctuation"},","),t(`
      buttonValues2`),n("span",{class:"token punctuation"},","),t(`
      buttonValues3`),n("span",{class:"token punctuation"},","),t(`
      buttonOptions1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),on=n("h3",{id:"checkbox-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001",tabindex:"-1"},[t("checkbox \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#checkbox-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001","aria-hidden":"true"},"#")],-1),cn=n("p",null,"\u6839\u636E\u6761\u4EF6\u5224\u65AD\uFF0Clabel \u4E3A'\u6761\u4EF6\u5224\u65AD\u56DE\u8C03\u7981\u6B62\u9009\u4E2D'\u7684 checkbox \u7EC8\u6B62\u5207\u6362\u72B6\u6001\u3002",-1),un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 10px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Conditional Callback Allowed"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checkboxChecked1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onCheckboxEndChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("endBeforeChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox")]),t(`
      `),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("Conditional Judgment Callback Interception Selected"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("checkboxChecked2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onCheckboxEndChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("endBeforeChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" checkboxChecked1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" checkboxChecked2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onCheckboxEndChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkbox1 checked:'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"endBeforeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("isChecked"),n("span",{class:"token punctuation"},","),t(" label")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" label "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'Conditional Callback Allowed'"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      checkboxChecked1`),n("span",{class:"token punctuation"},","),t(`
      checkboxChecked2`),n("span",{class:"token punctuation"},","),t(`
      onCheckboxEndChange`),n("span",{class:"token punctuation"},","),t(`
      endBeforeChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),ln=n("h3",{id:"checkbox-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001",tabindex:"-1"},[t("checkbox-group \u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#checkbox-group-\u6839\u636E\u6761\u4EF6\u7EC8\u6B62\u5207\u6362\u72B6\u6001","aria-hidden":"true"},"#")],-1),pn=n("p",null,"\u9009\u9879\u5305\u542B'\u62E6\u622A'\u5B57\u6BB5\u7684 checkbox \u65E0\u6CD5\u5207\u6362\u72B6\u6001\u3002",-1),kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-checkbox-group")]),t(`
      `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("interceptValues"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("interceptOptions"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":isShowTitle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onCheckboxInterceptChange"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":beforeChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("interceptBeforeChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" interceptOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data1'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'intercept'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'intercept2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data5'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data6'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'data7'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" interceptValues "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'data2'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'intercept'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onCheckboxInterceptChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checkbox1 checked:'"),n("span",{class:"token punctuation"},","),t(" value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"interceptBeforeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("isChecked"),n("span",{class:"token punctuation"},","),t(" label")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token operator"},"!"),t("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'intercept'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      interceptOptions`),n("span",{class:"token punctuation"},","),t(`
      interceptValues`),n("span",{class:"token punctuation"},","),t(`
      onCheckboxInterceptChange`),n("span",{class:"token punctuation"},","),t(`
      interceptBeforeChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),rn=G(`<h3 id="checkbox-\u53C2\u6570" tabindex="-1">Checkbox \u53C2\u6570 <a class="header-anchor" href="#checkbox-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u5355\u57DF\u540D\uFF0Cinput \u539F\u751F name \u5C5E\u6027</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u6807\u7B7E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string|number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728 checkbox-group \u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u4E3A array \u65F6\u6709\u6548\uFF09</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:left;">half-checked</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u534A\u9009\u72B6\u6001</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">is-show-title</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A title \u63D0\u793A\uFF0C<br>\u9ED8\u8BA4\u663E\u793A\u53C2\u6570<code>label</code>\u7684\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u81EA\u5B9A\u4E49 title \u63D0\u793A\u5185\u5BB9</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">color</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u590D\u9009\u6846\u989C\u8272</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">show-animation</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u63A7\u5236\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">before-change</td><td style="text-align:left;"><code>Function|Promise&lt;boolean&gt;</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Ccheckbox \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE boolean \u7C7B\u578B\uFF0C\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 checkbox \u5207\u6362</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#icheckboxsize">ICheckboxSize</a></td><td style="text-align:left;">md</td><td style="text-align:left;">\u53EF\u9009\uFF0C checkbox \u5C3A\u5BF8\uFF0C\u53EA\u6709\u5728 border \u5C5E\u6027\u5B58\u5728\u65F6\u751F\u6548</td><td><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u5C3A\u5BF8</a></td></tr><tr><td style="text-align:left;">border</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u662F\u5426\u6709\u8FB9\u6846</td><td><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u8FB9\u6846</a></td></tr></tbody></table><h3 id="checkbox-\u4E8B\u4EF6" tabindex="-1">Checkbox \u4E8B\u4EF6 <a class="header-anchor" href="#checkbox-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">change</td><td style="text-align:center;">\u590D\u9009\u6846\u7684\u503C\u6539\u53D8\u65F6\u53D1\u51FA\u7684\u4E8B\u4EF6\uFF0C\u503C\u662F\u5F53\u524D\u72B6\u6001</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="checkboxgroup-\u53C2\u6570" tabindex="-1">CheckboxGroup \u53C2\u6570 <a class="header-anchor" href="#checkboxgroup-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">name</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u5355\u57DF\u540D\uFF0Cinput \u539F\u751F name \u5C5E\u6027</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">direction</td><td style="text-align:center;"><code>&#39;row&#39; | &#39;column&#39;</code></td><td style="text-align:center;">&#39;column&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u65B9\u5411</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">item-width</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u793A\u6BCF\u4E00\u9879 checkbox \u7684\u5BBD\u5EA6(px)</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">options</td><td style="text-align:center;"><code>array</code></td><td style="text-align:center;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u590D\u9009\u6846\u9009\u9879\u6570\u7EC4</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">half-checked</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u534A\u9009\u72B6\u6001</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">is-show-title</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A title \u63D0\u793A\uFF0C<br>\u9ED8\u8BA4\u663E\u793A\u53C2\u6570<code>label</code>\u7684\u503C</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u590D\u9009\u6846\u989C\u8272</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">show-animation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u63A7\u5236\u662F\u5426\u663E\u793A\u52A8\u753B,\u6309\u94AE\u5F62\u6001\u4E0D\u53EF\u7528</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">disabled</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">max</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u53EF\u88AB\u52FE\u9009\u7684 checkbox \u7684\u6700\u5927\u6570\u91CF</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">before-change</td><td style="text-align:center;"><code>Function</code>|<br><code>Promise&lt;boolean&gt;</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Ccheckbox \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 checkbox \u5207\u6362</td><td><a href="#%E4%BD%BF%E7%94%A8-checkboxgroup">\u4F7F\u7528 CheckBoxGroup</a></td></tr><tr><td style="text-align:center;">size</td><td style="text-align:center;"><a href="#icheckboxsize">ICheckboxSize</a></td><td style="text-align:center;">md</td><td style="text-align:left;">\u53EF\u9009\uFF0C checkbox \u5C3A\u5BF8\uFF0C\u53EA\u6709\u5728 border \u5C5E\u6027\u5B58\u5728\u65F6\u751F\u6548</td><td><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u5C3A\u5BF8</a></td></tr><tr><td style="text-align:center;">border</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u662F\u5426\u6709\u8FB9\u6846</td><td><a href="#%E5%B0%BA%E5%AF%B8%E5%92%8C%E8%BE%B9%E6%A1%86">\u8FB9\u6846</a></td></tr><tr><td style="text-align:center;">text-color</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C \u6309\u94AE\u88AB\u9009\u4E2D\u7684\u5B57\u4F53\u6837\u5F0F\uFF0C\u53EA\u5B58\u5728\u4E8E\u6309\u94AE\u5F62\u6001\u4E2D</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr></tbody></table><h3 id="checkboxgroup-\u4E8B\u4EF6" tabindex="-1">CheckboxGroup \u4E8B\u4EF6 <a class="header-anchor" href="#checkboxgroup-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">change</td><td style="text-align:left;">checkbox \u503C\u6539\u53D8\u4E8B\u4EF6</td><td style="text-align:left;"><a href="#checkbox-%E6%A0%B9%E6%8D%AE%E6%9D%A1%E4%BB%B6%E7%BB%88%E6%AD%A2%E5%88%87%E6%8D%A2%E7%8A%B6%E6%80%81">\u4F7F\u7528 change \u4E8B\u4EF6</a></td></tr></tbody></table><h3 id="checkboxbutton-\u53C2\u6570" tabindex="-1">CheckboxButton \u53C2\u6570 <a class="header-anchor" href="#checkboxbutton-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u5355\u57DF\u540D\uFF0Cinput \u539F\u751F name \u5C5E\u6027</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">label</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u6807\u7B7E</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">value</td><td style="text-align:left;"><code>string|number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9009\u4E2D\u72B6\u6001\u7684\u503C\uFF08\u53EA\u6709\u5728 checkbox-group \u6216\u8005\u7ED1\u5B9A\u5BF9\u8C61\u4E3A array \u65F6\u6709\u6548\uFF09</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">is-show-title</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A title \u63D0\u793A\uFF0C<br>\u9ED8\u8BA4\u663E\u793A\u53C2\u6570<code>label</code>\u7684\u503C</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u81EA\u5B9A\u4E49 title \u63D0\u793A\u5185\u5BB9</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">before-change</td><td style="text-align:left;"><code>Function|Promise&lt;boolean&gt;</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Ccheckbox \u5207\u6362\u524D\u7684\u56DE\u8C03\u51FD\u6570\uFF0C<br>\u8FD4\u56DE boolean \u7C7B\u578B\uFF0C\u8FD4\u56DE false \u53EF\u4EE5\u963B\u6B62 checkbox \u5207\u6362</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#icheckboxsize">ICheckboxSize</a></td><td style="text-align:left;">md</td><td style="text-align:left;">\u53EF\u9009\uFF0C checkbox \u5C3A\u5BF8</td><td><a href="#%E6%8C%89%E9%92%AE%E5%BD%A2%E6%80%81">\u6309\u94AE\u5F62\u6001</a></td></tr></tbody></table><h3 id="checkbox-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Checkbox \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#checkbox-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="icheckboxsize" tabindex="-1">ICheckboxSize <a class="header-anchor" href="#icheckboxsize" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ICheckboxSize</span> <span class="token operator">=</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,13);function dn(l,e,o,f,E,F){const v=z("render-demo-0"),g=z("demo"),x=z("render-demo-1"),b=z("render-demo-2"),k=z("render-demo-3"),p=z("render-demo-4"),d=z("render-demo-5");return M(),J("div",null,[Q,B(g,{sourceCode:`<template>
  <div class="checkbox-basic-demo">
    <d-checkbox label="Checked" :isShowTitle="false" v-model="checked" />
    <d-checkbox label="Not checked" :isShowTitle="false" v-model="unchecked" />
    <d-checkbox label="Custom title" :isShowTitle="true" title="my title" v-model="unchecked2" />
    <d-checkbox label="No Animation" :isShowTitle="false" v-model="checked2" :showAnimation="false" />
    <d-checkbox label="Disabled" :isShowTitle="false" v-model="checked" :disabled="true" />
    <d-checkbox label="Disabled" :isShowTitle="false" v-model="unchecked" :disabled="true" />
    <d-checkbox label="Half-checked" :isShowTitle="false" :half-checked="halfCheck" v-model="allCheck" @change="onHalfCheckboxChange" />
    <d-checkbox
      label="Half-checked"
      :isShowTitle="false"
      :half-checked="halfCheck"
      v-model="allCheck"
      @change="onHalfCheckboxChange"
      :disabled="true"
    />
    <d-checkbox label="Custom color" :isShowTitle="false" v-model="customCheck" color="RGB(255, 193, 7)" />
    <d-checkbox
      label="Half-checked"
      :isShowTitle="false"
      :half-checked="halfCheck2"
      v-model="allCheck2"
      @change="onHalfCheckboxChange2"
      color="RGB(255, 193, 7)"
    />
    <d-checkbox :isShowTitle="false" v-model="unchecked3">
      <div class="inline-row" style="display: inline-flex">
        <d-select v-model="value1" :options="[1, 2, 3, 4]" size="sm" @click="handleChange"></d-select>
        <span>Custom label template</span>
      </div>
    </d-checkbox>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const checked = ref(true);
    const checked2 = ref(true);
    const unchecked = ref(false);
    const unchecked2 = ref(false);
    const unchecked3 = ref(false);
    const halfCheck = ref(true);
    const halfCheck2 = ref(true);
    const allCheck = ref(false);
    const allCheck2 = ref(false);
    const customCheck = ref(true);
    const value1 = ref(null);

    const onHalfCheckboxChange = (value) => {
      halfCheck.value = !allCheck.value;
      console.log('halfCheckbox checked:', value);
    };
    const onHalfCheckboxChange2 = (value) => {
      halfCheck2.value = !allCheck2.value;
      console.log('halfCheckbox checked:', value);
    };
    const handleChange = ($event) => {
      $event.preventDefault();
      $event.stopPropagation();
    };
    return {
      checked,
      checked2,
      unchecked,
      unchecked2,
      unchecked3,
      halfCheck,
      halfCheck2,
      allCheck,
      allCheck2,
      onHalfCheckboxChange,
      customCheck,
      onHalfCheckboxChange2,
      handleChange,
      value1,
    };
  },
});
<\/script>
<style>
.checkbox-basic-demo .devui-checkbox {
  margin-bottom: 10px;
}

.checkbox-basic-demo .inline-row .devui-select {
  width: 150px;
  margin-right: 10px;
}
</style>
`},{highlight:A(()=>[X]),default:A(()=>[B(v)]),_:1}),Y,B(g,{sourceCode:`
<template>
  <div class="checkbox-group-demo">
    <h4 class="title">Input Object Array</h4>
    <d-checkbox-group v-model="values1" :options="options1" direction="row"></d-checkbox-group>

    <h4 class="title">Input String Array</h4>
    <d-checkbox-group v-model="values2" :options="options2" :isShowTitle="false" direction="row"></d-checkbox-group>

    <h4 class="title">Disabled Group</h4>
    <d-checkbox-group v-model="values2" :options="options2" :isShowTitle="false" direction="row" :disabled="true"
    ></d-checkbox-group>

    <h4 class="title">Custom Selected Color</h4>
    <d-checkbox-group
      v-model="values3"
      :options="options3"
      :isShowTitle="false"
      direction="row"
      color="RGB(255, 193, 7)"
    ></d-checkbox-group>

    <h4 class="title">Set showAnimation false</h4>
    <d-checkbox-group v-model="values4" :options="options3" :isShowTitle="false" direction="row" :showAnimation="false"
    ></d-checkbox-group>

    <h4 class="title">Multi-line Checkbox</h4>
    <d-checkbox-group v-model="values5" :options="options5" :isShowTitle="false" direction="row" :itemWidth="94"
    ></d-checkbox-group>

    <h4 class="title">\u53EF\u9009\u9879\u76EE\u6570\u91CF\u7684\u9650\u5236</h4>
    <d-checkbox-group
      v-model="values6"
      :options="options5"
      :isShowTitle="false"
      direction="row"
      :itemWidth="94"
      :max="3"
    ></d-checkbox-group>
    <h4 class="title">\u63D2\u69FD\u65B9\u5F0F</h4>
    <d-checkbox-group v-model="values7" :isShowTitle="false" direction="row" :itemWidth="94" :max="3">
      <d-checkbox v-for="item in options1" :key="item.value" :label="item.name" :value="item.value"></d-checkbox>
    </d-checkbox-group>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const options1 = ref([
      { name: 'data1', disabled: true, value: '1', id: 1 },
      { name: 'data2', value: '2', id: 2 },
      { name: 'data3', value: '3', id: 3 },
    ]);
    const values1 = ref([{ name: 'data2', value: '2', id: 2 }]);
    const options2 = ref(['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7']);
    const values2 = ref(['data1', 'data2']);
    const options3 = ref(['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7']);
    const values3 = ref(['data1', 'data2']);
    const values4 = ref(['data2', 'data3']);
    const options5 = ref([
      'data00000000000000001',
      'data2',
      'data3',
      'data4',
      'data5',
      'data6',
      'data7',
      'data8',
      'data9',
      'data10',
      'data11',
      'data12',
      'data13',
      'data14',
      'data15',
    ]);
    const values5 = ref(['data2', 'data3']);
    const values6 = ref(['data2', 'data3']);
    const values7 = ref(['2', '3']);
    return {
      options1,
      values1,
      options2,
      values2,
      options3,
      values3,
      values4,
      options5,
      values5,
      values6,
      values7,
    };
  },
});
<\/script>
<style>
.checkbox-group-demo .title {
  margin: 20px 0;
}
</style>
`},{highlight:A(()=>[Z]),default:A(()=>[B(x)]),_:1}),nn,B(g,{sourceCode:`
<template>
  <h4>Small</h4>
  <d-checkbox-group v-model="borderSizeValues1" :options="borderSizeOptions1" direction="row" size="sm" border
  ></d-checkbox-group>

  <h4>Middle</h4>
  <d-checkbox-group v-model="borderSizeValues2" :options="borderSizeOptions1" direction="row" size="md" border
  ></d-checkbox-group>

  <h4>Large</h4>
  <d-checkbox-group v-model="borderSizeValues3" :options="borderSizeOptions1" direction="row" size="lg" border
  ></d-checkbox-group>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const borderSizeOptions1 = ref([
      { name: 'Summer', value: '1', id: 1 },
      { name: 'Spring', disabled: true, value: '2', id: 2 },
    ]);
    const borderSizeValues1 = ref([{ name: 'Summer', value: '1', id: 1 }]);
    const borderSizeValues2 = ref([{ name: 'Summer', value: '1', id: 1 }]);
    const borderSizeValues3 = ref([{ name: 'Summer', value: '1', id: 1 }]);

    return {
      borderSizeValues1,
      borderSizeValues2,
      borderSizeValues3,
      borderSizeOptions1,
    };
  },
});
<\/script>
`},{highlight:A(()=>[tn]),default:A(()=>[B(b)]),_:1}),an,sn,B(g,{sourceCode:`
<template>
  <h4>\u7981\u7528</h4>
  <d-checkbox-group v-model="buttonValues1" size="sm" direction="row">
    <d-checkbox-button
      v-for="item in buttonOptions1"
      :label="item.label"
      :value="item.value"
      :key="item.value"
      :disabled="item.disabled"
    >
    </d-checkbox-button>
  </d-checkbox-group>

  <h4>\u9ED8\u8BA4</h4>
  <d-checkbox-group v-model="buttonValues2" direction="row">
    <d-checkbox-button v-for="item in buttonOptions1" :label="item.label" :value="item.value" :key="item.value"
    ></d-checkbox-button>
  </d-checkbox-group>

  <h4>\u81EA\u5B9A\u4E49\u586B\u5145\u989C\u8272\u3001\u6587\u5B57\u989C\u8272</h4>
  <d-checkbox-group v-model="buttonValues3" size="lg" is-show-title color="#FA9841" text-color="#fff" direction="row">
    <d-checkbox-button
      v-for="item in buttonOptions1"
      :label="item.label"
      :value="item.value"
      :key="item.value"
      :title="item.title"
    >
    </d-checkbox-button>
  </d-checkbox-group>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const buttonOptions1 = ref([
      { label: '\u9009\u98791', disabled: true, value: 2, id: 1, title: '\u81EA\u5B9A\u4E49title1' },
      { label: '\u9009\u98792', value: 3, id: 2, title: '\u81EA\u5B9A\u4E49title2' },
      { label: '\u9009\u98793', value: 4, id: 3, title: '\u81EA\u5B9A\u4E49title3' },
    ]);
    const buttonValues1 = ref([2]);
    const buttonValues2 = ref([2]);
    const buttonValues3 = ref([2]);

    return {
      buttonValues1,
      buttonValues2,
      buttonValues3,
      buttonOptions1,
    };
  },
});
<\/script>
`},{highlight:A(()=>[en]),default:A(()=>[B(k)]),_:1}),on,cn,B(g,{sourceCode:`
<template>
  <div style="margin-bottom: 10px">
    <d-checkbox
      label="Conditional Callback Allowed"
      :isShowTitle="false"
      v-model="checkboxChecked1"
      @change="onCheckboxEndChange"
      :beforeChange="endBeforeChange"
    />
  </div>
  <div>
    <d-checkbox
      label="Conditional Judgment Callback Interception Selected"
      :isShowTitle="false"
      v-model="checkboxChecked2"
      @change="onCheckboxEndChange"
      :beforeChange="endBeforeChange"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const checkboxChecked1 = ref(true);
    const checkboxChecked2 = ref(false);

    const onCheckboxEndChange = (value) => {
      console.log('checkbox1 checked:', value);
    };

    const endBeforeChange = (isChecked, label) => {
      return label === 'Conditional Callback Allowed';
    };
    return {
      checkboxChecked1,
      checkboxChecked2,
      onCheckboxEndChange,
      endBeforeChange,
    };
  },
});
<\/script>
`},{highlight:A(()=>[un]),default:A(()=>[B(p)]),_:1}),ln,pn,B(g,{sourceCode:`
<template>
  <div>
    <d-checkbox-group
      v-model="interceptValues"
      :options="interceptOptions"
      :isShowTitle="false"
      direction="row"
      @change="onCheckboxInterceptChange"
      :beforeChange="interceptBeforeChange"
    />
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const interceptOptions = ref(['data1', 'data2', 'intercept', 'intercept2', 'data5', 'data6', 'data7']);
    const interceptValues = ref(['data2', 'intercept']);
    const onCheckboxInterceptChange = (value) => {
      console.log('checkbox1 checked:', value);
    };

    const interceptBeforeChange = (isChecked, label) => {
      return !label.includes('intercept');
    };

    return {
      interceptOptions,
      interceptValues,
      onCheckboxInterceptChange,
      interceptBeforeChange,
    };
  },
});
<\/script>
`},{highlight:A(()=>[kn]),default:A(()=>[B(d)]),_:1}),rn])}var bn=P(K,[["render",dn]]);export{mn as __pageData,bn as default};
