var Y=Object.defineProperty;var K=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable;var Q=(e,o,s)=>o in e?Y(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,H=(e,o)=>{for(var s in o||(o={}))Z.call(o,s)&&Q(e,s,o[s]);if(K)for(var s of K(o))nn.call(o,s)&&Q(e,s,o[s]);return e};import{_ as an,V as W,r as J,c as tn,a as R,w as B,b as X,d as n,e as a,o as sn}from"./app.020d8265.js";const on={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:e,resolveComponent:o,withCtx:s,createVNode:t,openBlock:V,createElementBlock:y}=W,f=e("Name"),i=e("Description"),M=e("Select"),p=e("Tags"),q=e("Radio"),S=e("Manual execution"),U=e("Daily execution"),I=e("Weekly execution"),_=e("Switch"),D=e("Execution day"),T=e("\u63D0\u4EA4"),O=e("\u53D6\u6D88");function L(l,u){const c=o("d-form-label"),g=o("d-input"),r=o("d-form-control"),v=o("d-form-item"),N=o("d-textarea"),A=o("d-select"),P=o("d-tag-input"),E=o("d-radio"),G=o("d-radio-group"),w=o("d-switch"),b=o("d-checkbox"),$=o("d-checkbox-group"),j=o("d-button"),F=o("d-form-operation"),h=o("d-form");return V(),y("div",null,[t(h,{data:l.formModel},{default:s(()=>[t(v,{field:"name"},{default:s(()=>[t(c,{"help-tips":"This is the plan name."},{default:s(()=>[f]),_:1}),t(r,{"extra-info":"Enter a short name that meets reading habits."},{default:s(()=>[t(g,{modelValue:l.formModel.name,"onUpdate:modelValue":u[0]||(u[0]=k=>l.formModel.name=k)},null,8,["modelValue"])]),_:1})]),_:1}),t(v,{field:"description"},{default:s(()=>[t(c,null,{default:s(()=>[i]),_:1}),t(r,null,{default:s(()=>[t(N,{value:l.formModel.description,"onUpdate:value":u[1]||(u[1]=k=>l.formModel.description=k)},null,8,["value"])]),_:1})]),_:1}),t(v,{field:"select"},{default:s(()=>[t(c,null,{default:s(()=>[M]),_:1}),t(r,null,{default:s(()=>[t(A,{modelValue:l.formModel.select,"onUpdate:modelValue":u[2]||(u[2]=k=>l.formModel.select=k),options:l.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(v,{field:"tags"},{default:s(()=>[t(c,null,{default:s(()=>[p]),_:1}),t(r,null,{default:s(()=>[t(P,{tags:l.formModel.tags,"onUpdate:tags":u[3]||(u[3]=k=>l.formModel.tags=k),suggestionList:l.tagLists,"onUpdate:suggestionList":u[4]||(u[4]=k=>l.tagLists=k),"display-property":"name",placeholder:"Tags","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(v,{field:"radio"},{default:s(()=>[t(c,null,{default:s(()=>[q]),_:1}),t(r,null,{default:s(()=>[t(G,{direction:"row",modelValue:l.formModel.radio,"onUpdate:modelValue":u[5]||(u[5]=k=>l.formModel.radio=k)},{default:s(()=>[t(E,{value:"0"},{default:s(()=>[S]),_:1}),t(E,{value:"1"},{default:s(()=>[U]),_:1}),t(E,{value:"2"},{default:s(()=>[I]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(v,{field:"switch"},{default:s(()=>[t(c,null,{default:s(()=>[_]),_:1}),t(r,null,{default:s(()=>[t(w,{checked:l.formModel.switch,"onUpdate:checked":u[6]||(u[6]=k=>l.formModel.switch=k)},null,8,["checked"])]),_:1})]),_:1}),t(v,{field:"executionDay"},{default:s(()=>[t(c,null,{default:s(()=>[D]),_:1}),t(r,null,{default:s(()=>[t($,{modelValue:l.formModel.executionDay,"onUpdate:modelValue":u[7]||(u[7]=k=>l.formModel.executionDay=k),label:"Execution day",direction:"row"},{default:s(()=>[t(b,{label:"Mon",value:"Mon"}),t(b,{label:"Tue",value:"Tue"}),t(b,{label:"Wed",value:"Wed"}),t(b,{label:"Thur",value:"Thur"}),t(b,{label:"Fri",value:"Fri"}),t(b,{label:"Sat",value:"Sat"}),t(b,{label:"Sun",value:"Sun"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(F,{class:"form-demo-form-operation"},{default:s(()=>[t(j,{variant:"solid"},{default:s(()=>[T]),_:1}),t(j,null,{default:s(()=>[O]),_:1})]),_:1})]),_:1},8,["data"])])}const{defineComponent:C,reactive:x,ref:z,nextTick:m}=W,d=C({setup(){let l=x({name:"",description:"",select:"Options2",tags:[{name:"Options1"}],radio:"0",switch:!0,executionDay:[]});const u=x(["Options1","Options2","Options3"]);return{formModel:l,selectOptions:u,tagLists:[{name:"Options1"},{name:"Options2"},{name:"Options3"}]}}});return H({render:L},d)}(),"render-demo-1":function(){const{renderList:e,Fragment:o,openBlock:s,createElementBlock:t,toDisplayString:V,createTextVNode:y,resolveComponent:f,withCtx:i,createBlock:M,createVNode:p,createElementVNode:q}=W,S={class:"form-btn-groups"},U={class:"form-btn"},I=y(" \u5927\u5C0F\uFF1A "),_={class:"form-btn"},D=y(" \u5BF9\u9F50\u65B9\u5F0F\uFF1A "),T=y("Name"),O=y("Description"),L=y("Execution day"),C=y("\u63D0\u4EA4"),x=y("\u53D6\u6D88");function z(c,g){const r=f("d-radio"),v=f("d-radio-group"),N=f("d-form-label"),A=f("d-input"),P=f("d-form-control"),E=f("d-form-item"),G=f("d-textarea"),w=f("d-checkbox"),b=f("d-checkbox-group"),$=f("d-button"),j=f("d-form-operation"),F=f("d-form");return s(),t("div",null,[q("div",S,[q("div",U,[I,p(v,{direction:"row",modelValue:c.size,"onUpdate:modelValue":g[0]||(g[0]=h=>c.size=h)},{default:i(()=>[(s(!0),t(o,null,e(c.sizeList,h=>(s(),M(r,{key:h.label,value:h.value},{default:i(()=>[y(V(h.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),q("div",_,[D,p(v,{direction:"row",modelValue:c.align,"onUpdate:modelValue":g[1]||(g[1]=h=>c.align=h)},{default:i(()=>[(s(!0),t(o,null,e(c.alignList,h=>(s(),M(r,{key:h.label,value:h.value},{default:i(()=>[y(V(h.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])]),p(F,{data:c.formModel,"label-size":c.size,"label-align":c.align},{default:i(()=>[p(E,{field:"name"},{default:i(()=>[p(N,null,{default:i(()=>[T]),_:1}),p(P,null,{default:i(()=>[p(A,{modelValue:c.formModel.name,"onUpdate:modelValue":g[2]||(g[2]=h=>c.formModel.name=h)},null,8,["modelValue"])]),_:1})]),_:1}),p(E,{field:"description"},{default:i(()=>[p(N,null,{default:i(()=>[O]),_:1}),p(P,null,{default:i(()=>[p(G,{value:c.formModel.description,"onUpdate:value":g[3]||(g[3]=h=>c.formModel.description=h)},null,8,["value"])]),_:1})]),_:1}),p(E,{field:"executionDay"},{default:i(()=>[p(N,null,{default:i(()=>[L]),_:1}),p(P,null,{default:i(()=>[p(b,{modelValue:c.formModel.executionDay,"onUpdate:modelValue":g[4]||(g[4]=h=>c.formModel.executionDay=h),label:"Execution day",direction:"row"},{default:i(()=>[p(w,{label:"Mon",value:"Mon"}),p(w,{label:"Tue",value:"Tue"}),p(w,{label:"Wed",value:"Wed"}),p(w,{label:"Thur",value:"Thur"}),p(w,{label:"Fri",value:"Fri"}),p(w,{label:"Sat",value:"Sat"}),p(w,{label:"Sun",value:"Sun"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),p(j,{class:"form-demo-form-operation"},{default:i(()=>[p($,{variant:"solid"},{default:i(()=>[C]),_:1}),p($,null,{default:i(()=>[x]),_:1})]),_:1})]),_:1},8,["data","label-size","label-align"])])}const{defineComponent:m,reactive:d,ref:l}=W,u=m({setup(){let c=d({name:"",description:"",executionDay:[]});const g=l("md"),r=l("start");return{formModel:c,size:g,sizeList:[{label:"Small",value:"sm"},{label:"Middle",value:"md"},{label:"Large",value:"lg"}],align:r,alignList:[{label:"Start",value:"start"},{label:"Center",value:"center"},{label:"End",value:"end"}]}}});return H({render:z},u)}(),"render-demo-2":function(){const{createTextVNode:e,resolveComponent:o,withCtx:s,createVNode:t,openBlock:V,createElementBlock:y}=W,f=e("Name"),i=e("Description"),M=e("Select"),p=e("Tags"),q=e("Radio"),S=e("Manual execution"),U=e("Daily execution"),I=e("Weekly execution"),_=e("Switch"),D=e("Execution day"),T=e("\u63D0\u4EA4"),O=e("\u53D6\u6D88");function L(l,u){const c=o("d-form-label"),g=o("d-input"),r=o("d-form-control"),v=o("d-form-item"),N=o("d-textarea"),A=o("d-select"),P=o("d-tag-input"),E=o("d-radio"),G=o("d-radio-group"),w=o("d-switch"),b=o("d-checkbox"),$=o("d-checkbox-group"),j=o("d-button"),F=o("d-form-operation"),h=o("d-form");return V(),y("div",null,[t(h,{layout:"vertical",data:l.formModel},{default:s(()=>[t(v,{field:"name"},{default:s(()=>[t(c,null,{default:s(()=>[f]),_:1}),t(r,null,{default:s(()=>[t(g,{modelValue:l.formModel.name,"onUpdate:modelValue":u[0]||(u[0]=k=>l.formModel.name=k)},null,8,["modelValue"])]),_:1})]),_:1}),t(v,{field:"description"},{default:s(()=>[t(c,null,{default:s(()=>[i]),_:1}),t(r,null,{default:s(()=>[t(N,{value:l.formModel.description,"onUpdate:value":u[1]||(u[1]=k=>l.formModel.description=k)},null,8,["value"])]),_:1})]),_:1}),t(v,{field:"select"},{default:s(()=>[t(c,null,{default:s(()=>[M]),_:1}),t(r,null,{default:s(()=>[t(A,{modelValue:l.formModel.select,"onUpdate:modelValue":u[2]||(u[2]=k=>l.formModel.select=k),options:l.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(v,{field:"tags"},{default:s(()=>[t(c,null,{default:s(()=>[p]),_:1}),t(r,null,{default:s(()=>[t(P,{tags:l.formModel.tags,"onUpdate:tags":u[3]||(u[3]=k=>l.formModel.tags=k),suggestionList:l.tagLists,"onUpdate:suggestionList":u[4]||(u[4]=k=>l.tagLists=k),"display-property":"name",placeholder:"Tags","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(v,{field:"radio"},{default:s(()=>[t(c,null,{default:s(()=>[q]),_:1}),t(r,null,{default:s(()=>[t(G,{direction:"row",modelValue:l.formModel.radio,"onUpdate:modelValue":u[5]||(u[5]=k=>l.formModel.radio=k)},{default:s(()=>[t(E,{value:"0"},{default:s(()=>[S]),_:1}),t(E,{value:"1"},{default:s(()=>[U]),_:1}),t(E,{value:"2"},{default:s(()=>[I]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(v,{field:"switch"},{default:s(()=>[t(c,null,{default:s(()=>[_]),_:1}),t(r,null,{default:s(()=>[t(w,{checked:l.formModel.switch,"onUpdate:checked":u[6]||(u[6]=k=>l.formModel.switch=k)},null,8,["checked"])]),_:1})]),_:1}),t(v,{field:"executionDay"},{default:s(()=>[t(c,null,{default:s(()=>[D]),_:1}),t(r,null,{default:s(()=>[t($,{modelValue:l.formModel.executionDay,"onUpdate:modelValue":u[7]||(u[7]=k=>l.formModel.executionDay=k),label:"Execution day",direction:"row"},{default:s(()=>[t(b,{label:"Mon",value:"Mon"}),t(b,{label:"Tue",value:"Tue"}),t(b,{label:"Wed",value:"Wed"}),t(b,{label:"Thur",value:"Thur"}),t(b,{label:"Fri",value:"Fri"}),t(b,{label:"Sat",value:"Sat"}),t(b,{label:"Sun",value:"Sun"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(F,{class:"form-demo-form-operation"},{default:s(()=>[t(j,{variant:"solid"},{default:s(()=>[T]),_:1}),t(j,null,{default:s(()=>[O]),_:1})]),_:1})]),_:1},8,["data"])])}const{defineComponent:C,reactive:x,ref:z,nextTick:m}=W,d=C({setup(){let l=x({name:"",description:"",select:"Options2",tags:[{name:"Options1"}],radio:"0",switch:!0,executionDay:[]});const u=x(["Options1","Options2","Options3"]);return{formModel:l,selectOptions:u,tagLists:[{name:"Options1"},{name:"Options2"},{name:"Options3"}]}}});return H({render:L},d)}(),"render-demo-3":function(){const{createTextVNode:e,resolveComponent:o,withCtx:s,createVNode:t,openBlock:V,createElementBlock:y}=W,f=e("Name"),i=e("Select"),M=e("Multiple Select"),p=e("Execution day"),q=e("Radio"),S=e("Manual execution"),U=e("Daily execution"),I=e("Weekly execution"),_=e("Switch"),D=e("\u63D0\u4EA4"),T=e("\u53D6\u6D88");function O(m,d){const l=o("d-form-label"),u=o("d-input"),c=o("d-form-control"),g=o("d-form-item"),r=o("d-col"),v=o("d-select"),N=o("d-row"),A=o("d-checkbox"),P=o("d-checkbox-group"),E=o("d-radio"),G=o("d-radio-group"),w=o("d-switch"),b=o("d-button"),$=o("d-form-operation"),j=o("d-form");return V(),y("div",null,[t(j,{layout:"vertical",data:m.formModel},{default:s(()=>[t(N,{gutter:16},{default:s(()=>[t(r,{span:7},{default:s(()=>[t(g,{field:"name"},{default:s(()=>[t(l,{"help-tips":"This is the plan name."},{default:s(()=>[f]),_:1}),t(c,null,{default:s(()=>[t(u,{modelValue:m.formModel.name,"onUpdate:modelValue":d[0]||(d[0]=F=>m.formModel.name=F)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(r,{span:7},{default:s(()=>[t(g,{field:"select"},{default:s(()=>[t(l,null,{default:s(()=>[i]),_:1}),t(c,null,{default:s(()=>[t(v,{modelValue:m.formModel.select,"onUpdate:modelValue":d[1]||(d[1]=F=>m.formModel.select=F),options:m.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1}),t(r,{span:7},{default:s(()=>[t(g,{field:"multiSelect"},{default:s(()=>[t(l,null,{default:s(()=>[M]),_:1}),t(c,null,{default:s(()=>[t(v,{modelValue:m.formModel.multiSelect,"onUpdate:modelValue":d[2]||(d[2]=F=>m.formModel.multiSelect=F),options:m.selectOptions,multiple:""},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1})]),_:1}),t(N,{gutter:16},{default:s(()=>[t(r,{span:7},{default:s(()=>[t(g,{field:"executionDay"},{default:s(()=>[t(l,null,{default:s(()=>[p]),_:1}),t(c,null,{default:s(()=>[t(P,{modelValue:m.formModel.executionDay,"onUpdate:modelValue":d[3]||(d[3]=F=>m.formModel.executionDay=F),label:"Execution day"},{default:s(()=>[t(A,{label:"Mon",value:"Mon"}),t(A,{label:"Tue",value:"Tue"}),t(A,{label:"Wed",value:"Wed"}),t(A,{label:"Thur",value:"Thur"}),t(A,{label:"Fri",value:"Fri"}),t(A,{label:"Sat",value:"Sat"}),t(A,{label:"Sun",value:"Sun"})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(r,{span:7},{default:s(()=>[t(g,{field:"radio"},{default:s(()=>[t(l,null,{default:s(()=>[q]),_:1}),t(c,null,{default:s(()=>[t(G,{direction:"row",modelValue:m.formModel.radio,"onUpdate:modelValue":d[4]||(d[4]=F=>m.formModel.radio=F)},{default:s(()=>[t(E,{value:"0"},{default:s(()=>[S]),_:1}),t(E,{value:"1"},{default:s(()=>[U]),_:1}),t(E,{value:"2"},{default:s(()=>[I]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(r,{span:7},{default:s(()=>[t(g,{field:"switch"},{default:s(()=>[t(l,null,{default:s(()=>[_]),_:1}),t(c,null,{default:s(()=>[t(w,{checked:m.formModel.switch,"onUpdate:checked":d[5]||(d[5]=F=>m.formModel.switch=F)},null,8,["checked"])]),_:1})]),_:1})]),_:1})]),_:1}),t($,{class:"form-demo-form-operation"},{default:s(()=>[t(b,{variant:"solid"},{default:s(()=>[D]),_:1}),t(b,null,{default:s(()=>[T]),_:1})]),_:1})]),_:1},8,["data"])])}const{defineComponent:L,reactive:C,ref:x}=W,z=L({setup(){const m=C({name:"",select:"Options2",multiSelect:x([]),executionDay:[],radio:"0",switch:!0}),d=C(["Options1","Options2","Options3"]);return{formModel:m,selectOptions:d}}});return H({render:O},z)}(),"render-demo-4":function(){const{createTextVNode:e,resolveComponent:o,withCtx:s,createVNode:t,openBlock:V,createElementBlock:y}=W,f=e("\u7528\u6237\u540D"),i=e("\u5E74\u9F84"),M=e("\u63D0\u4EA4");function p(_,D){const T=o("d-form-label"),O=o("d-input"),L=o("d-form-control"),C=o("d-form-item"),x=o("d-button"),z=o("d-form-operation"),m=o("d-form");return V(),y("div",null,[t(m,{ref:"formRef",layout:"vertical",data:_.formData,rules:_.rules},{default:s(()=>[t(C,{field:"username",rules:[{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]},{default:s(()=>[t(T,null,{default:s(()=>[f]),_:1}),t(L,{"extra-info":"some extra info"},{default:s(()=>[t(O,{modelValue:_.formData.username,"onUpdate:modelValue":D[0]||(D[0]=d=>_.formData.username=d)},null,8,["modelValue"])]),_:1})]),_:1}),t(C,{field:"age"},{default:s(()=>[t(T,null,{default:s(()=>[i]),_:1}),t(L,null,{default:s(()=>[t(O,{modelValue:_.formData.age,"onUpdate:modelValue":D[1]||(D[1]=d=>_.formData.age=d)},null,8,["modelValue"])]),_:1})]),_:1}),t(z,null,{default:s(()=>[t(x,{onClick:_.onClick},{default:s(()=>[M]),_:1},8,["onClick"])]),_:1})]),_:1},8,["data","rules"])])}const{defineComponent:q,reactive:S,ref:U}=W,I=q({setup(){const _=U(null),D=S({username:"",age:""});return{formRef:_,formData:D,rules:{username:[{min:3,max:6,message:"\u7528\u6237\u540D\u9700\u4E0D\u5C0F\u4E8E3\u4E2A\u5B57\u7B26\uFF0C\u4E0D\u5927\u4E8E6\u4E2A\u5B57\u7B26",trigger:"change"}],age:[{validator:(C,x,z)=>{if(!x)return z(new Error("\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A"));setTimeout(()=>{if(x<18)return z(new Error("\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E18"))},1e3)}}]},onClick:()=>{_.value.validate((C,x)=>{console.log(C),console.log(x)})}}}});return H({render:p},I)}()}},En='{"title":"Form \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u8868\u5355\u6837\u5F0F","slug":"\u8868\u5355\u6837\u5F0F"},{"level":3,"title":"\u5782\u76F4\u6392\u5217","slug":"\u5782\u76F4\u6392\u5217"},{"level":3,"title":"\u591A\u5217\u8868\u5355","slug":"\u591A\u5217\u8868\u5355"},{"level":3,"title":"\u8868\u5355\u6821\u9A8C","slug":"\u8868\u5355\u6821\u9A8C"},{"level":3,"title":"Form \u53C2\u6570","slug":"form-\u53C2\u6570"},{"level":3,"title":"Form \u65B9\u6CD5","slug":"form-\u65B9\u6CD5"},{"level":3,"title":"Form \u63D2\u69FD","slug":"form-\u63D2\u69FD"},{"level":3,"title":"FormItem \u53C2\u6570","slug":"formitem-\u53C2\u6570"},{"level":3,"title":"FormItem \u63D2\u69FD","slug":"formitem-\u63D2\u69FD"},{"level":3,"title":"FormLabel \u53C2\u6570","slug":"formlabel-\u53C2\u6570"},{"level":3,"title":"FormLabel \u63D2\u69FD","slug":"formlabel-\u63D2\u69FD"},{"level":3,"title":"FormControl \u53C2\u6570","slug":"formcontrol-\u53C2\u6570"},{"level":3,"title":"FormControl \u63D2\u69FD","slug":"formcontrol-\u63D2\u69FD"},{"level":3,"title":"Form \u7C7B\u578B\u5B9A\u4E49","slug":"form-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"FormItem \u7C7B\u578B\u5B9A\u4E49","slug":"formitem-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"FormControl \u7C7B\u578B\u5B9A\u4E49","slug":"formcontrol-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/form/index.md","lastUpdated":1650966993995}',en=X('<h1 id="form-\u8868\u5355" tabindex="-1">Form \u8868\u5355 <a class="header-anchor" href="#form-\u8868\u5355" aria-hidden="true">#</a></h1><p>\u5177\u6709\u6570\u636E\u6536\u96C6\u3001\u6821\u9A8C\u548C\u63D0\u4EA4\u529F\u80FD\u7684\u8868\u5355\uFF0C\u5305\u542B\u590D\u9009\u6846\u3001\u5355\u9009\u6846\u3001\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u9009\u62E9\u6846\u7B49\u5143\u7D20\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u9700\u8981\u8FDB\u884C\u6570\u636E\u6536\u96C6\u3001\u6570\u636E\u6821\u9A8C\u3001\u6570\u636E\u63D0\u4EA4\u529F\u80FD\u65F6\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),ln=n("div",null,[a("\u9ED8\u8BA4\u63D0\u4F9B\u6C34\u5E73\u5E03\u5C40\uFF0C"),n("code",null,"data"),a("\u53C2\u6570\u7528\u4E8E\u8BBE\u7F6E\u8868\u5355\u6570\u636E\u3002")],-1),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"help-tips"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("This is the plan name."),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extra-info"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Enter a short name that meets reading habits."),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("description"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Description"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-textarea")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.description"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Select"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.select"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Tags"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.tags"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagLists"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tags"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Radio"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Manual execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Daily execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Weekly execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("switch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Switch"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.switch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("executionDay"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Execution day"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.executionDay"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Execution day"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mon"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mon"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Wed"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Wed"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Thur"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Thur"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Fri"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Fri"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sun"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sun"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("solid"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"select"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"tags"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"radio"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token keyword"},"switch"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"executionDay"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Options1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Options2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Options3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagLists "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options3'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      tagLists`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation > *"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),un=n("h3",{id:"\u8868\u5355\u6837\u5F0F",tabindex:"-1"},[a("\u8868\u5355\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u8868\u5355\u6837\u5F0F","aria-hidden":"true"},"#")],-1),pn=n("div",null,[a("\u6C34\u5E73\u6392\u5217\u6A21\u5F0F\u4E0B\uFF0C"),n("code",null,"label-size"),a("\u53EF\u4EE5\u8BBE\u7F6E"),n("code",null,"label"),a("\u7684\u5BBD\u5EA6\uFF0C\u63D0\u4F9B"),n("code",null,"sm"),a("\u3001"),n("code",null,"md"),a("\u3001"),n("code",null,"lg"),a("\u4E09\u79CD\u5927\u5C0F\uFF0C\u5206\u522B\u5BF9\u5E94"),n("code",null,"80px"),a("\u3001"),n("code",null,"100px"),a("\u3001"),n("code",null,"150px"),a("\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"md"),a("\uFF1B"),n("code",null,"label-align"),a("\u53EF\u4EE5\u8BBE\u7F6E"),n("code",null,"label"),a("\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A"),n("code",null,"start"),a("\u3001"),n("code",null,"center"),a("\u3001"),n("code",null,"end"),a("\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"start"),a("\u3002")],-1),kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-btn-groups"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u5927\u5C0F\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in sizeList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.label"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ item.label }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u5BF9\u9F50\u65B9\u5F0F\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("align"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in alignList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.label"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ item.label }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":label-size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":label-align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("align"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("description"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Description"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-textarea")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.description"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("executionDay"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Execution day"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.executionDay"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Execution day"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mon"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mon"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Wed"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Wed"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Thur"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Thur"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Fri"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Fri"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sun"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sun"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("solid"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"executionDay"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" size "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" align "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" sizeList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Small'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'sm'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Middle'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Large'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lg'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" alignList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Start'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'start'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Center'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'center'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'End'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'end'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      size`),n("span",{class:"token punctuation"},","),a(`
      sizeList`),n("span",{class:"token punctuation"},","),a(`
      align`),n("span",{class:"token punctuation"},","),a(`
      alignList`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-btn-groups"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"flex-wrap"),n("span",{class:"token punctuation"},":"),a(" wrap"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" flex-start"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 1rem"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),rn=n("h3",{id:"\u5782\u76F4\u6392\u5217",tabindex:"-1"},[a("\u5782\u76F4\u6392\u5217 "),n("a",{class:"header-anchor",href:"#\u5782\u76F4\u6392\u5217","aria-hidden":"true"},"#")],-1),dn=n("div",null,[a("\u8BBE\u7F6E"),n("code",null,"layout"),a("\u53C2\u6570\u4E3A"),n("code",null,"vertical"),a("\u53EF\u542F\u7528\u5782\u76F4\u5E03\u5C40\uFF0C\u5373"),n("code",null,"label"),a("\u5728\u8F93\u5165\u63A7\u4EF6\u7684\u4E0A\u65B9\u3002")],-1),mn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("description"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Description"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-textarea")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.description"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Select"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.select"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tags"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Tags"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.tags"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tagLists"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tags"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Radio"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Manual execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Daily execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Weekly execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("switch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Switch"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.switch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("executionDay"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Execution day"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.executionDay"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Execution day"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mon"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mon"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Wed"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Wed"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Thur"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Thur"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Fri"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Fri"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sun"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sun"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("solid"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"description"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"select"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"tags"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"radio"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token keyword"},"switch"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"executionDay"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Options1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Options2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Options3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tagLists "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options1'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options2'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options3'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      tagLists`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),gn=n("h3",{id:"\u591A\u5217\u8868\u5355",tabindex:"-1"},[a("\u591A\u5217\u8868\u5355 "),n("a",{class:"header-anchor",href:"#\u591A\u5217\u8868\u5355","aria-hidden":"true"},"#")],-1),fn=n("div",null,[a("\u642D\u914D"),n("code",null,"Grid"),a("\u6805\u683C\u5E03\u5C40\u65B9\u6848\uFF0C\u5373\u53EF\u65B9\u4FBF\u7684\u5B9E\u73B0\u591A\u5217\u8868\u5355\u5E03\u5C40\u6548\u679C\u3002")],-1),vn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-row")]),a(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-col")]),a(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"help-tips"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("This is the plan name."),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-col")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-col")]),a(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("select"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Select"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.select"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-col")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-col")]),a(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("multiSelect"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Multiple Select"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.multiSelect"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"multiple"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-col")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-row")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-row")]),a(),n("span",{class:"token attr-name"},":gutter"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("16"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-col")]),a(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("executionDay"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Execution day"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.executionDay"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Execution day"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mon"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mon"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Tue"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Wed"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Wed"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Thur"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Thur"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Fri"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Fri"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sat"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sun"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Sun"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-col")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-col")]),a(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Radio"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.radio"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Manual execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Daily execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Weekly execution"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-col")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-col")]),a(),n("span",{class:"token attr-name"},":span"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("switch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Switch"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.switch"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-col")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-row")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("solid"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a("\u53D6\u6D88"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"select"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Options2'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"multiSelect"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"executionDay"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"radio"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token keyword"},"switch"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Options1'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Options2'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Options3'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" formModel"),n("span",{class:"token punctuation"},","),a(" selectOptions "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),hn=n("h3",{id:"\u8868\u5355\u6821\u9A8C",tabindex:"-1"},[a("\u8868\u5355\u6821\u9A8C "),n("a",{class:"header-anchor",href:"#\u8868\u5355\u6821\u9A8C","aria-hidden":"true"},"#")],-1),bn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rules"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("username"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[{ required: true, message: "),n("span",{class:"token punctuation"},"'"),a("\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A"),n("span",{class:"token punctuation"},"'"),a(", trigger: "),n("span",{class:"token punctuation"},"'"),a("blur"),n("span",{class:"token punctuation"},"'"),a(" }]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u7528\u6237\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extra-info"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("some extra info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formData.username"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formData.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" formRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" formData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"checkAge"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token punctuation"},","),a(" callback")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("value "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),a(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E18'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" rules "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"min"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"max"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7528\u6237\u540D\u9700\u4E0D\u5C0F\u4E8E3\u4E2A\u5B57\u7B26\uFF0C\u4E0D\u5927\u4E8E6\u4E2A\u5B57\u7B26'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'change'"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"validator"),n("span",{class:"token operator"},":"),a(" checkAge "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      formRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"validate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("isValid"),n("span",{class:"token punctuation"},","),a(" invalidFields")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("isValid"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("invalidFields"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" formRef"),n("span",{class:"token punctuation"},","),a(" formData"),n("span",{class:"token punctuation"},","),a(" rules"),n("span",{class:"token punctuation"},","),a(" onClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),yn=X(`<h3 id="form-\u53C2\u6570" tabindex="-1">Form \u53C2\u6570 <a class="header-anchor" href="#form-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C demo</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">{}</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u8868\u5355\u6570\u636E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">layout</td><td style="text-align:left;"><a href="#layout">Layout</a></td><td style="text-align:left;">&#39;horizontal&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8868\u5355\u7684\u6392\u5217\u65B9\u5F0F</td><td style="text-align:left;"><a href="#%E5%9E%82%E7%9B%B4%E6%8E%92%E5%88%97">\u5782\u76F4\u6392\u5217</a></td></tr><tr><td style="text-align:left;">label-size</td><td style="text-align:left;"><a href="#labelsize">LabelSize</a></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E label \u7684\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 100px\uFF0Csm \u5BF9\u5E94 80px\uFF0Clg \u5BF9\u5E94 150px</td><td style="text-align:left;"><a href="#%E8%A1%A8%E5%8D%95%E6%A0%B7%E5%BC%8F">\u8868\u5355\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">label-align</td><td style="text-align:left;"><a href="#labelalign">LabelAlign</a></td><td style="text-align:left;">&#39;start&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6C34\u5E73\u5E03\u5C40\u65B9\u5F0F\u4E0B\uFF0Clabel \u5BF9\u9F50\u65B9\u5F0F</td><td style="text-align:left;"><a href="#%E8%A1%A8%E5%8D%95%E6%A0%B7%E5%BC%8F">\u8868\u5355\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;"><a href="#formrules">FormRules</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8868\u5355\u7684\u6821\u9A8C\u89C4\u5219</td><td style="text-align:left;"><a href="#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C">\u8868\u5355\u6821\u9A8C</a></td></tr><tr><td style="text-align:left;">message-type</td><td style="text-align:left;"><a href="#messagetype">MessageType</a></td><td style="text-align:left;">&#39;popover&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6821\u9A8C\u4FE1\u606F\u7684\u63D0\u793A\u65B9\u5F0F</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pop-position</td><td style="text-align:left;"><a href="#popposition">PopPosition</a></td><td style="text-align:left;">[&#39;right&#39;,&#39;bottom&#39;]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6D88\u606F\u663E\u793A\u4E3A popover \u65F6\uFF0Cpopover \u5F39\u51FA\u65B9\u5411</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="form-\u65B9\u6CD5" tabindex="-1">Form \u65B9\u6CD5 <a class="header-anchor" href="#form-\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">validate</td><td style="text-align:left;"><code>(callback?: FormValidateCallback) =&gt; Promise</code></td><td style="text-align:left;">\u8868\u5355\u6821\u9A8C\u51FD\u6570</td><td style="text-align:left;"><a href="#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C">\u8868\u5355\u6821\u9A8C</a></td></tr></tbody></table><h3 id="form-\u63D2\u69FD" tabindex="-1">Form \u63D2\u69FD <a class="header-anchor" href="#form-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u5305\u88F9\u6574\u4E2A\u8868\u5355\u5185\u5BB9</td></tr></tbody></table><h3 id="formitem-\u53C2\u6570" tabindex="-1">FormItem \u53C2\u6570 <a class="header-anchor" href="#formitem-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C demo</th></tr></thead><tbody><tr><td style="text-align:left;">field</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A\u9A8C\u8BC1\u8868\u5355\u9700\u9A8C\u8BC1\u7684\u5B57\u6BB5\uFF0C\u9A8C\u8BC1\u8868\u5355\u65F6\u5FC5\u9009\u8BE5\u5C5E\u6027</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">required</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u5355\u9009\u9879\u662F\u5426\u5FC5\u586B</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">rules</td><td style="text-align:left;"><a href="#formruleitem">FormRuleItem | FormRuleItem[]</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u5355\u9879\u7684\u6821\u9A8C\u89C4\u5219</td><td style="text-align:left;"><a href="#%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C">\u8868\u5355\u6821\u9A8C</a></td></tr><tr><td style="text-align:left;">message-type</td><td style="text-align:left;"><a href="#messagetype">MessageType</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u6CD5\u540C\u7236\u7EC4\u4EF6<code>message-type</code>\u53C2\u6570\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u7236\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u7EE7\u627F\u7236\u7EC4\u4EF6\u7684\u503C</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">pop-position</td><td style="text-align:left;"><a href="#popposition">PopPosition</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u6CD5\u540C\u7236\u7EC4\u4EF6<code>pop-position</code>\u53C2\u6570\uFF0C\u4F18\u5148\u7EA7\u9AD8\u4E8E\u7236\u7EC4\u4EF6\uFF0C\u9ED8\u8BA4\u7EE7\u627F\u7236\u7EC4\u4EF6\u7684\u503C</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="formitem-\u63D2\u69FD" tabindex="-1">FormItem \u63D2\u69FD <a class="header-anchor" href="#formitem-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u5305\u88F9\u5355\u4E2A\u8868\u5355\u9879</td></tr></tbody></table><h3 id="formlabel-\u53C2\u6570" tabindex="-1">FormLabel \u53C2\u6570 <a class="header-anchor" href="#formlabel-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C demo</th></tr></thead><tbody><tr><td style="text-align:left;">help-tips</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u5355\u9879\u5E2E\u52A9\u6307\u5F15\u63D0\u793A\u5185\u5BB9\uFF0C\u7A7A\u5B57\u7B26\u4E32\u8868\u793A\u4E0D\u8BBE\u7F6E\u63D0\u793A\u5185\u5BB9\u3002</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr></tbody></table><h3 id="formlabel-\u63D2\u69FD" tabindex="-1">FormLabel \u63D2\u69FD <a class="header-anchor" href="#formlabel-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u5305\u88F9\u5355\u4E2A\u8868\u5355\u9879\u7684\u5B57\u6BB5\u8BF4\u660E</td></tr></tbody></table><h3 id="formcontrol-\u53C2\u6570" tabindex="-1">FormControl \u53C2\u6570 <a class="header-anchor" href="#formcontrol-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C demo</th></tr></thead><tbody><tr><td style="text-align:left;">extra-info</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9644\u4EF6\u4FE1\u606F\uFF0C\u4E00\u822C\u7528\u4E8E\u8865\u5145\u8868\u5355\u9009\u9879\u7684\u8BF4\u660E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">feedback-status</td><td style="text-align:left;"><a href="#feedbackstatus">FeedbackStatus</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u624B\u52A8\u6307\u5B9A\u5F53\u524D control \u72B6\u6001\u53CD\u9988</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="formcontrol-\u63D2\u69FD" tabindex="-1">FormControl \u63D2\u69FD <a class="header-anchor" href="#formcontrol-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u5305\u88F9\u5355\u4E2A\u8868\u5355\u9879\u7684\u8F93\u5165\u63A7\u4EF6</td></tr></tbody></table><h3 id="form-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Form \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#form-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="layout" tabindex="-1">Layout <a class="header-anchor" href="#layout" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Layout</span> <span class="token operator">=</span> <span class="token string">&#39;horizontal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;vertical&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="labelsize" tabindex="-1">LabelSize <a class="header-anchor" href="#labelsize" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">LabelSize</span> <span class="token operator">=</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="labelalign" tabindex="-1">LabelAlign <a class="header-anchor" href="#labelalign" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">LabelAlign</span> <span class="token operator">=</span> <span class="token string">&#39;start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;end&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="formrules" tabindex="-1">FormRules <a class="header-anchor" href="#formrules" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">FormRules</span> <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>FormRuleItem<span class="token operator">&gt;&gt;&gt;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="messagetype" tabindex="-1">MessageType <a class="header-anchor" href="#messagetype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">MessageType</span> <span class="token operator">=</span> <span class="token string">&#39;popover&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="popposition" tabindex="-1">PopPosition <a class="header-anchor" href="#popposition" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">PopPosition</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;top&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;top-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;right-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;bottom-end&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-start&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;left-end&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="formvalidatecallback" tabindex="-1">FormValidateCallback <a class="header-anchor" href="#formvalidatecallback" aria-hidden="true">#</a></h4><p><code>ValidateFieldsError</code>\u7C7B\u578B\u53C2\u8003<a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a>\u3002</p><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">FormValidateCallback</span> <span class="token operator">=</span> <span class="token punctuation">(</span>isValid<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> invalidFields<span class="token operator">?</span><span class="token operator">:</span> ValidateFieldsError<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="formitem-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">FormItem \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#formitem-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="formruleitem" tabindex="-1">FormRuleItem <a class="header-anchor" href="#formruleitem" aria-hidden="true">#</a></h4><p><code>RuleItem</code>\u7C7B\u578B\u53C2\u8003<a href="https://github.com/yiminghe/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a>\u3002</p><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">FormRuleItem</span> <span class="token keyword">extends</span> <span class="token class-name">RuleItem</span> <span class="token punctuation">{</span>
  trigger<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="formcontrol-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">FormControl \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#formcontrol-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="feedbackstatus" tabindex="-1">FeedbackStatus <a class="header-anchor" href="#feedbackstatus" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">FeedbackStatus</span> <span class="token operator">=</span> <span class="token string">&#39;success&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;error&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,41);function _n(e,o,s,t,V,y){const f=J("render-demo-0"),i=J("demo"),M=J("render-demo-1"),p=J("render-demo-2"),q=J("render-demo-3"),S=J("render-demo-4");return sn(),tn("div",null,[en,R(i,{sourceCode:`<template>
  <d-form :data="formModel">
    <d-form-item field="name">
      <d-form-label help-tips="This is the plan name.">Name</d-form-label>
      <d-form-control extra-info="Enter a short name that meets reading habits.">
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="description">
      <d-form-label>Description</d-form-label>
      <d-form-control>
        <d-textarea v-model:value="formModel.description" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="select">
      <d-form-label>Select</d-form-label>
      <d-form-control>
        <d-select v-model="formModel.select" :options="selectOptions" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="tags">
      <d-form-label>Tags</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.tags"
          v-model:suggestionList="tagLists"
          display-property="name"
          placeholder="Tags"
          no-data="\u6682\u65E0\u6570\u636E"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item field="radio">
      <d-form-label>Radio</d-form-label>
      <d-form-control>
        <d-radio-group direction="row" v-model="formModel.radio">
          <d-radio value="0">Manual execution</d-radio>
          <d-radio value="1">Daily execution</d-radio>
          <d-radio value="2">Weekly execution</d-radio>
        </d-radio-group>
      </d-form-control>
    </d-form-item>
    <d-form-item field="switch">
      <d-form-label>Switch</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.switch"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item field="executionDay">
      <d-form-label>Execution day</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.executionDay" label="Execution day" direction="row">
          <d-checkbox label="Mon" value="Mon" />
          <d-checkbox label="Tue" value="Tue" />
          <d-checkbox label="Wed" value="Wed" />
          <d-checkbox label="Thur" value="Thur" />
          <d-checkbox label="Fri" value="Fri" />
          <d-checkbox label="Sat" value="Sat" />
          <d-checkbox label="Sun" value="Sun" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button variant="solid">\u63D0\u4EA4</d-button>
      <d-button>\u53D6\u6D88</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import { defineComponent, reactive, ref, nextTick } from 'vue';

export default defineComponent({
  setup() {
    let formModel = reactive({
      name: '',
      description: '',
      select: 'Options2',
      tags: [{ name: 'Options1' }],
      radio: '0',
      switch: true,
      executionDay: [],
    });
    const selectOptions = reactive(['Options1', 'Options2', 'Options3']);
    const tagLists = [{ name: 'Options1' }, { name: 'Options2' }, { name: 'Options3' }];
    return {
      formModel,
      selectOptions,
      tagLists,
    };
  },
});
<\/script>

<style>
.form-demo-form-operation > * {
  margin-right: 8px;
}
</style>
`},{description:B(()=>[ln]),highlight:B(()=>[cn]),default:B(()=>[R(f)]),_:1}),un,R(i,{sourceCode:`<template>
  <div class="form-btn-groups">
    <div class="form-btn">
      \u5927\u5C0F\uFF1A
      <d-radio-group direction="row" v-model="size">
        <d-radio v-for="item in sizeList" :key="item.label" :value="item.value">
          {{ item.label }}
        </d-radio>
      </d-radio-group>
    </div>
    <div class="form-btn">
      \u5BF9\u9F50\u65B9\u5F0F\uFF1A
      <d-radio-group direction="row" v-model="align">
        <d-radio v-for="item in alignList" :key="item.label" :value="item.value">
          {{ item.label }}
        </d-radio>
      </d-radio-group>
    </div>
  </div>
  <d-form :data="formModel" :label-size="size" :label-align="align">
    <d-form-item field="name">
      <d-form-label>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="description">
      <d-form-label>Description</d-form-label>
      <d-form-control>
        <d-textarea v-model:value="formModel.description" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="executionDay">
      <d-form-label>Execution day</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.executionDay" label="Execution day" direction="row">
          <d-checkbox label="Mon" value="Mon" />
          <d-checkbox label="Tue" value="Tue" />
          <d-checkbox label="Wed" value="Wed" />
          <d-checkbox label="Thur" value="Thur" />
          <d-checkbox label="Fri" value="Fri" />
          <d-checkbox label="Sat" value="Sat" />
          <d-checkbox label="Sun" value="Sun" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button variant="solid">\u63D0\u4EA4</d-button>
      <d-button>\u53D6\u6D88</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    let formModel = reactive({
      name: '',
      description: '',
      executionDay: [],
    });
    const size = ref('md');
    const align = ref('start');
    const sizeList = [
      {
        label: 'Small',
        value: 'sm',
      },
      {
        label: 'Middle',
        value: 'md',
      },
      {
        label: 'Large',
        value: 'lg',
      },
    ];
    const alignList = [
      {
        label: 'Start',
        value: 'start',
      },
      {
        label: 'Center',
        value: 'center',
      },
      {
        label: 'End',
        value: 'end',
      },
    ];

    return {
      formModel,
      size,
      sizeList,
      align,
      alignList,
    };
  },
});
<\/script>

<style>
.form-btn-groups {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.form-btn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1rem;
}
</style>
`},{description:B(()=>[pn]),highlight:B(()=>[kn]),default:B(()=>[R(M)]),_:1}),rn,R(i,{sourceCode:`<template>
  <d-form layout="vertical" :data="formModel">
    <d-form-item field="name">
      <d-form-label>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="description">
      <d-form-label>Description</d-form-label>
      <d-form-control>
        <d-textarea v-model:value="formModel.description" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="select">
      <d-form-label>Select</d-form-label>
      <d-form-control>
        <d-select v-model="formModel.select" :options="selectOptions" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="tags">
      <d-form-label>Tags</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.tags"
          v-model:suggestionList="tagLists"
          display-property="name"
          placeholder="Tags"
          no-data="\u6682\u65E0\u6570\u636E"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item field="radio">
      <d-form-label>Radio</d-form-label>
      <d-form-control>
        <d-radio-group direction="row" v-model="formModel.radio">
          <d-radio value="0">Manual execution</d-radio>
          <d-radio value="1">Daily execution</d-radio>
          <d-radio value="2">Weekly execution</d-radio>
        </d-radio-group>
      </d-form-control>
    </d-form-item>
    <d-form-item field="switch">
      <d-form-label>Switch</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.switch"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item field="executionDay">
      <d-form-label>Execution day</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.executionDay" label="Execution day" direction="row">
          <d-checkbox label="Mon" value="Mon" />
          <d-checkbox label="Tue" value="Tue" />
          <d-checkbox label="Wed" value="Wed" />
          <d-checkbox label="Thur" value="Thur" />
          <d-checkbox label="Fri" value="Fri" />
          <d-checkbox label="Sat" value="Sat" />
          <d-checkbox label="Sun" value="Sun" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button variant="solid">\u63D0\u4EA4</d-button>
      <d-button>\u53D6\u6D88</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import { defineComponent, reactive, ref, nextTick } from 'vue';

export default defineComponent({
  setup() {
    let formModel = reactive({
      name: '',
      description: '',
      select: 'Options2',
      tags: [{ name: 'Options1' }],
      radio: '0',
      switch: true,
      executionDay: [],
    });
    const selectOptions = reactive(['Options1', 'Options2', 'Options3']);
    const tagLists = [{ name: 'Options1' }, { name: 'Options2' }, { name: 'Options3' }];

    return {
      formModel,
      selectOptions,
      tagLists,
    };
  },
});
<\/script>
`},{description:B(()=>[dn]),highlight:B(()=>[mn]),default:B(()=>[R(p)]),_:1}),gn,R(i,{sourceCode:`<template>
  <d-form layout="vertical" :data="formModel">
    <d-row :gutter="16">
      <d-col :span="7">
        <d-form-item field="name">
          <d-form-label help-tips="This is the plan name.">Name</d-form-label>
          <d-form-control>
            <d-input v-model="formModel.name" />
          </d-form-control>
        </d-form-item>
      </d-col>
      <d-col :span="7">
        <d-form-item field="select">
          <d-form-label>Select</d-form-label>
          <d-form-control>
            <d-select v-model="formModel.select" :options="selectOptions" />
          </d-form-control>
        </d-form-item>
      </d-col>
      <d-col :span="7">
        <d-form-item field="multiSelect">
          <d-form-label>Multiple Select</d-form-label>
          <d-form-control>
            <d-select v-model="formModel.multiSelect" :options="selectOptions" multiple />
          </d-form-control>
        </d-form-item>
      </d-col>
    </d-row>
    <d-row :gutter="16">
      <d-col :span="7">
        <d-form-item field="executionDay">
          <d-form-label>Execution day</d-form-label>
          <d-form-control>
            <d-checkbox-group v-model="formModel.executionDay" label="Execution day">
              <d-checkbox label="Mon" value="Mon" />
              <d-checkbox label="Tue" value="Tue" />
              <d-checkbox label="Wed" value="Wed" />
              <d-checkbox label="Thur" value="Thur" />
              <d-checkbox label="Fri" value="Fri" />
              <d-checkbox label="Sat" value="Sat" />
              <d-checkbox label="Sun" value="Sun" />
            </d-checkbox-group>
          </d-form-control>
        </d-form-item>
      </d-col>
      <d-col :span="7">
        <d-form-item field="radio">
          <d-form-label>Radio</d-form-label>
          <d-form-control>
            <d-radio-group direction="row" v-model="formModel.radio">
              <d-radio value="0">Manual execution</d-radio>
              <d-radio value="1">Daily execution</d-radio>
              <d-radio value="2">Weekly execution</d-radio>
            </d-radio-group>
          </d-form-control>
        </d-form-item>
      </d-col>
      <d-col :span="7">
        <d-form-item field="switch">
          <d-form-label>Switch</d-form-label>
          <d-form-control>
            <d-switch v-model:checked="formModel.switch"></d-switch>
          </d-form-control>
        </d-form-item>
      </d-col>
    </d-row>
    <d-form-operation class="form-demo-form-operation">
      <d-button variant="solid">\u63D0\u4EA4</d-button>
      <d-button>\u53D6\u6D88</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const formModel = reactive({
      name: '',
      select: 'Options2',
      multiSelect: ref([]),
      executionDay: [],
      radio: '0',
      switch: true,
    });
    const selectOptions = reactive(['Options1', 'Options2', 'Options3']);

    return { formModel, selectOptions };
  },
});
<\/script>
`},{description:B(()=>[fn]),highlight:B(()=>[vn]),default:B(()=>[R(q)]),_:1}),hn,R(i,{sourceCode:`<template>
  <d-form ref="formRef" layout="vertical" :data="formData" :rules="rules">
    <d-form-item field="username" :rules="[{ required: true, message: '\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A', trigger: 'blur' }]">
      <d-form-label>\u7528\u6237\u540D</d-form-label>
      <d-form-control extra-info="some extra info">
        <d-input v-model="formData.username" />
      </d-form-control>
    </d-form-item>
    <d-form-item field="age">
      <d-form-label>\u5E74\u9F84</d-form-label>
      <d-form-control>
        <d-input v-model="formData.age" />
      </d-form-control>
    </d-form-item>
    <d-form-operation>
      <d-button @click="onClick">\u63D0\u4EA4</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const formRef = ref(null);
    const formData = reactive({
      username: '',
      age: '',
    });
    const checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('\u5E74\u9F84\u4E0D\u80FD\u4E3A\u7A7A'));
      }
      setTimeout(() => {
        if (value < 18) {
          return callback(new Error('\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E18'));
        }
      }, 1000);
    };
    const rules = {
      username: [{ min: 3, max: 6, message: '\u7528\u6237\u540D\u9700\u4E0D\u5C0F\u4E8E3\u4E2A\u5B57\u7B26\uFF0C\u4E0D\u5927\u4E8E6\u4E2A\u5B57\u7B26', trigger: 'change' }],
      age: [{ validator: checkAge }],
    };

    const onClick = () => {
      formRef.value.validate((isValid, invalidFields) => {
        console.log(isValid);
        console.log(invalidFields);
      });
    };

    return { formRef, formData, rules, onClick };
  },
});
<\/script>
`},{highlight:B(()=>[bn]),default:B(()=>[R(S)]),_:1}),yn])}var Dn=an(on,[["render",_n]]);export{En as __pageData,Dn as default};
