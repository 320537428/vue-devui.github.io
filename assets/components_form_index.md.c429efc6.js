var Y=Object.defineProperty;var K=Object.getOwnPropertySymbols;var nn=Object.prototype.hasOwnProperty,an=Object.prototype.propertyIsEnumerable;var G=(u,o,s)=>o in u?Y(u,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[o]=s,R=(u,o)=>{for(var s in o||(o={}))nn.call(o,s)&&G(u,s,o[s]);if(K)for(var s of K(o))an.call(o,s)&&G(u,s,o[s]);return u};import{_ as tn,V as w,r as j,c as sn,b as x,w as S,a as Z,d as n,e as a,o as on}from"./app.824968f6.js";const en={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:D,createElementBlock:v}=w,g=u("\u59D3\u540D"),p=u("\u5E74\u9F84"),M=u("\u57CE\u5E02"),V=u("\u559C\u6B22\u7684\u6C34\u679C"),h=u("\u6027\u522B"),q=u("\u7537"),y=u("\u5973"),C=u("\u4E0B\u73ED\u4E86\u5417"),E=u("\u5174\u8DA3\u9886\u57DF"),k=u("\u63D0\u4EA4"),i=u("\u91CD\u7F6E");function l(e,m){const B=o("d-form-label"),b=o("d-input"),f=o("d-form-control"),A=o("d-form-item"),H=o("d-select"),I=o("d-tag-input"),P=o("d-radio"),z=o("d-switch"),N=o("d-checkbox"),W=o("d-checkbox-group"),$=o("d-button"),O=o("d-form-operation"),L=o("d-form");return D(),v("div",null,[t(L,{ref:"dFormBasic",formData:e.formModel,layout:"vertical",onSubmit:e.onSubmitForm},{default:s(()=>[t(A,{prop:"name"},{default:s(()=>[t(B,{required:"",hasHelp:"",helpTips:"\u53EF\u4EE5\u8F93\u5165\u4E2D\u6587\u540D\u5B57\u6216\u8005\u82F1\u6587\u540D\u5B57"},{default:s(()=>[g]),_:1}),t(f,{extraInfo:"\u8BF7\u8F93\u5165\u60A8\u7684\u540D\u5B57"},{default:s(()=>[t(b,{modelValue:e.formModel.name,"onUpdate:modelValue":m[0]||(m[0]=T=>e.formModel.name=T)},null,8,["modelValue"])]),_:1})]),_:1}),t(A,{prop:"age"},{default:s(()=>[t(B,null,{default:s(()=>[p]),_:1}),t(f,null,{default:s(()=>[t(b,{modelValue:e.formModel.age,"onUpdate:modelValue":m[1]||(m[1]=T=>e.formModel.age=T)},null,8,["modelValue"])]),_:1})]),_:1}),t(A,{prop:"city"},{default:s(()=>[t(B,null,{default:s(()=>[M]),_:1}),t(f,null,{default:s(()=>[t(H,{modelValue:e.formModel.city,"onUpdate:modelValue":m[2]||(m[2]=T=>e.formModel.city=T),options:e.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(A,{prop:"loveFruits"},{default:s(()=>[t(B,null,{default:s(()=>[V]),_:1}),t(f,null,{default:s(()=>[t(I,{tags:e.formModel.loveFruits,"onUpdate:tags":m[3]||(m[3]=T=>e.formModel.loveFruits=T),suggestionList:e.formModel.suggestionList,"onUpdate:suggestionList":m[4]||(m[4]=T=>e.formModel.suggestionList=T),"display-property":"name",placeholder:"\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(A,{prop:"sex"},{default:s(()=>[t(B,null,{default:s(()=>[h]),_:1}),t(f,null,{default:s(()=>[t(P,{modelValue:e.formModel.sex,"onUpdate:modelValue":m[5]||(m[5]=T=>e.formModel.sex=T),value:"0"},{default:s(()=>[q]),_:1},8,["modelValue"]),t(P,{modelValue:e.formModel.sex,"onUpdate:modelValue":m[6]||(m[6]=T=>e.formModel.sex=T),value:"1"},{default:s(()=>[y]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(A,{prop:"workOn"},{default:s(()=>[t(B,null,{default:s(()=>[C]),_:1}),t(f,null,{default:s(()=>[t(z,{checked:e.formModel.workOn,"onUpdate:checked":m[7]||(m[7]=T=>e.formModel.workOn=T)},null,8,["checked"])]),_:1})]),_:1}),t(A,{prop:"interestedDomain"},{default:s(()=>[t(B,null,{default:s(()=>[E]),_:1}),t(f,null,{default:s(()=>[t(W,{modelValue:e.formModel.interestedDomain,"onUpdate:modelValue":m[8]||(m[8]=T=>e.formModel.interestedDomain=T),label:"\u5174\u8DA3\u9886\u57DF"},{default:s(()=>[t(N,{label:"\u524D\u7AEF",value:"frontend"}),t(N,{label:"\u540E\u7AEF",value:"backend"}),t(N,{label:"\u79FB\u52A8\u7AEF",value:"mobileend"}),t(N,{label:"\u4EBA\u5DE5\u667A\u80FD",value:"ai"}),t(N,{label:"\u7B97\u6CD5",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(O,{class:"form-demo-form-operation"},{default:s(()=>[t($,{type:"submit",class:"form-demo-btn"},{default:s(()=>[k]),_:1}),t($,{bsStyle:"common",onClick:e.resetForm},{default:s(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:F,nextTick:_}=w,c=r({setup(e,m){const B=F(null);let b=d({name:"AlanLee",age:"24",city:"\u6DF1\u5733",loveFruits:[{name:"\u82F9\u679C"}],suggestionList:[{name:"\u82F9\u679C"},{name:"\u897F\u74DC"},{name:"\u6843\u5B50"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const f=d(["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733"]);return{dFormBasic:B,formModel:b,selectOptions:f,resetForm:()=>{console.log("formData reset before",B.value.formData),B.value.resetFormFields(),console.log("formData reset after",B.value.formData)},onSubmitForm:()=>{console.log("onSubmitForm formModel",b)}}}});return R({render:l},c)}(),"render-demo-1":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:D,createElementBlock:v}=w,g=u("\u59D3\u540D"),p=u("\u5E74\u9F84"),M=u("\u57CE\u5E02"),V=u("\u559C\u6B22\u7684\u6C34\u679C"),h=u("\u6027\u522B"),q=u("\u7537"),y=u("\u5973"),C=u("\u4E0B\u73ED\u4E86\u5417"),E=u("\u5174\u8DA3\u9886\u57DF"),k=u("\u63D0\u4EA4"),i=u("\u91CD\u7F6E");function l(c,e){const m=o("d-form-label"),B=o("d-input"),b=o("d-form-control"),f=o("d-form-item"),A=o("d-select"),H=o("d-tag-input"),I=o("d-radio"),P=o("d-switch"),z=o("d-checkbox"),N=o("d-checkbox-group"),W=o("d-button"),$=o("d-form-operation"),O=o("d-form");return D(),v("div",null,[t(O,{ref:"dFormHorizontal",formData:c.formModel,layout:"horizontal",labelSize:"lg",onSubmit:c.onSubmitForm},{default:s(()=>[t(f,{prop:"name"},{default:s(()=>[t(m,{required:""},{default:s(()=>[g]),_:1}),t(b,null,{default:s(()=>[t(B,{modelValue:c.formModel.name,"onUpdate:modelValue":e[0]||(e[0]=L=>c.formModel.name=L)},null,8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"age"},{default:s(()=>[t(m,null,{default:s(()=>[p]),_:1}),t(b,null,{default:s(()=>[t(B,{modelValue:c.formModel.age,"onUpdate:modelValue":e[1]||(e[1]=L=>c.formModel.age=L)},null,8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"city"},{default:s(()=>[t(m,null,{default:s(()=>[M]),_:1}),t(b,null,{default:s(()=>[t(A,{modelValue:c.formModel.city,"onUpdate:modelValue":e[2]||(e[2]=L=>c.formModel.city=L),options:c.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(f,{prop:"loveFruits"},{default:s(()=>[t(m,null,{default:s(()=>[V]),_:1}),t(b,null,{default:s(()=>[t(H,{tags:c.formModel.loveFruits,"onUpdate:tags":e[3]||(e[3]=L=>c.formModel.loveFruits=L),suggestionList:c.formModel.suggestionList,"onUpdate:suggestionList":e[4]||(e[4]=L=>c.formModel.suggestionList=L),"display-property":"name",placeholder:"\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(f,{prop:"sex"},{default:s(()=>[t(m,null,{default:s(()=>[h]),_:1}),t(b,null,{default:s(()=>[t(I,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[5]||(e[5]=L=>c.formModel.sex=L),value:"0"},{default:s(()=>[q]),_:1},8,["modelValue"]),t(I,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[6]||(e[6]=L=>c.formModel.sex=L),value:"1"},{default:s(()=>[y]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"workOn"},{default:s(()=>[t(m,null,{default:s(()=>[C]),_:1}),t(b,null,{default:s(()=>[t(P,{checked:c.formModel.workOn,"onUpdate:checked":e[7]||(e[7]=L=>c.formModel.workOn=L)},null,8,["checked"])]),_:1})]),_:1}),t(f,{prop:"interestedDomain"},{default:s(()=>[t(m,null,{default:s(()=>[E]),_:1}),t(b,null,{default:s(()=>[t(N,{modelValue:c.formModel.interestedDomain,"onUpdate:modelValue":e[8]||(e[8]=L=>c.formModel.interestedDomain=L),label:"\u5174\u8DA3\u9886\u57DF"},{default:s(()=>[t(z,{label:"\u524D\u7AEF",value:"frontend"}),t(z,{label:"\u540E\u7AEF",value:"backend"}),t(z,{label:"\u79FB\u52A8\u7AEF",value:"mobileend"}),t(z,{label:"\u4EBA\u5DE5\u667A\u80FD",value:"ai"}),t(z,{label:"\u7B97\u6CD5",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t($,{class:"form-demo-form-operation"},{default:s(()=>[t(W,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[k]),_:1}),t(W,{bsStyle:"common",onClick:c.resetForm},{default:s(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:F}=w,_=r({setup(c,e){const m=F(null);let B=d({name:"AlanLee",age:"24",city:"\u6DF1\u5733",loveFruits:[{name:"\u82F9\u679C"}],suggestionList:[{name:"\u82F9\u679C"},{name:"\u897F\u74DC"},{name:"\u6843\u5B50"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const b=d(["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733"]);return{dFormHorizontal:m,formModel:B,selectOptions:b,resetForm:()=>{console.log("dFormHorizontal",m.value),m.value.resetFormFields()},onSubmitForm:()=>{console.log("onSubmitForm formModel",B)}}}});return R({render:l},_)}(),"render-demo-2":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,createElementVNode:D,vShow:v,withDirectives:g,openBlock:p,createElementBlock:M}=w,V=u("\u6253\u5F00\u5F39\u7A97"),h={class:"form-demo-modal-content"},q=u("\u59D3\u540D"),y=u("\u5E74\u9F84"),C=u("\u57CE\u5E02"),E=u("\u559C\u6B22\u7684\u6C34\u679C"),k=u("\u6027\u522B"),i=u("\u7537"),l=u("\u5973"),r=u("\u4E0B\u73ED\u4E86\u5417"),d=u("\u5174\u8DA3\u9886\u57DF"),F=u("\u63D0\u4EA4"),_=u("\u91CD\u7F6E");function c(f,A){const H=o("d-button"),I=o("d-form-label"),P=o("d-input"),z=o("d-form-control"),N=o("d-form-item"),W=o("d-select"),$=o("d-tag-input"),O=o("d-radio"),L=o("d-switch"),T=o("d-checkbox"),J=o("d-checkbox-group"),Q=o("d-form-operation"),X=o("d-form");return p(),M("div",null,[t(H,{onClick:f.openModal},{default:s(()=>[V]),_:1},8,["onClick"]),g(D("div",{class:"form-demo-modal",onClick:A[9]||(A[9]=(...U)=>f.closeModal&&f.closeModal(...U))},[D("div",h,[t(X,{ref:"dFormModal",formData:f.formModel,layout:"horizontal",labelSize:"lg",onSubmit:f.onSubmitForm},{default:s(()=>[t(N,{prop:"name"},{default:s(()=>[t(I,{required:""},{default:s(()=>[q]),_:1}),t(z,null,{default:s(()=>[t(P,{modelValue:f.formModel.name,"onUpdate:modelValue":A[0]||(A[0]=U=>f.formModel.name=U)},null,8,["modelValue"])]),_:1})]),_:1}),t(N,{prop:"age"},{default:s(()=>[t(I,null,{default:s(()=>[y]),_:1}),t(z,null,{default:s(()=>[t(P,{modelValue:f.formModel.age,"onUpdate:modelValue":A[1]||(A[1]=U=>f.formModel.age=U)},null,8,["modelValue"])]),_:1})]),_:1}),t(N,{prop:"city"},{default:s(()=>[t(I,null,{default:s(()=>[C]),_:1}),t(z,null,{default:s(()=>[t(W,{modelValue:f.formModel.city,"onUpdate:modelValue":A[2]||(A[2]=U=>f.formModel.city=U),options:f.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(N,{prop:"loveFruits"},{default:s(()=>[t(I,null,{default:s(()=>[E]),_:1}),t(z,null,{default:s(()=>[t($,{tags:f.formModel.loveFruits,"onUpdate:tags":A[3]||(A[3]=U=>f.formModel.loveFruits=U),suggestionList:f.formModel.suggestionList,"onUpdate:suggestionList":A[4]||(A[4]=U=>f.formModel.suggestionList=U),"display-property":"name",placeholder:"\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(N,{prop:"sex"},{default:s(()=>[t(I,null,{default:s(()=>[k]),_:1}),t(z,null,{default:s(()=>[t(O,{modelValue:f.formModel.sex,"onUpdate:modelValue":A[5]||(A[5]=U=>f.formModel.sex=U),value:"0"},{default:s(()=>[i]),_:1},8,["modelValue"]),t(O,{modelValue:f.formModel.sex,"onUpdate:modelValue":A[6]||(A[6]=U=>f.formModel.sex=U),value:"1"},{default:s(()=>[l]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(N,{prop:"workOn"},{default:s(()=>[t(I,null,{default:s(()=>[r]),_:1}),t(z,null,{default:s(()=>[t(L,{checked:f.formModel.workOn,"onUpdate:checked":A[7]||(A[7]=U=>f.formModel.workOn=U)},null,8,["checked"])]),_:1})]),_:1}),t(N,{prop:"interestedDomain"},{default:s(()=>[t(I,null,{default:s(()=>[d]),_:1}),t(z,null,{default:s(()=>[t(J,{modelValue:f.formModel.interestedDomain,"onUpdate:modelValue":A[8]||(A[8]=U=>f.formModel.interestedDomain=U),label:"\u5174\u8DA3\u9886\u57DF"},{default:s(()=>[t(T,{label:"\u524D\u7AEF",value:"frontend"}),t(T,{label:"\u540E\u7AEF",value:"backend"}),t(T,{label:"\u79FB\u52A8\u7AEF",value:"mobileend"}),t(T,{label:"\u4EBA\u5DE5\u667A\u80FD",value:"ai"}),t(T,{label:"\u7B97\u6CD5",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(Q,{class:"form-demo-form-operation"},{default:s(()=>[t(H,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[F]),_:1}),t(H,{bsStyle:"common",onClick:f.resetForm},{default:s(()=>[_]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])],512),[[v,f.showModal]])])}const{defineComponent:e,reactive:m,ref:B}=w,b=e({setup(f,A){const H=B(null);let I=m({name:"AlanLee",age:"24",city:"\u6DF1\u5733",loveFruits:[{name:"\u82F9\u679C"}],suggestionList:[{name:"\u82F9\u679C"},{name:"\u897F\u74DC"},{name:"\u6843\u5B50"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const P=m(["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733"]),z=()=>{console.log("dFormModal",H.value),H.value.resetFormFields()},N=()=>{console.log("onSubmitForm formModel",I)},W=B(!1);return{dFormModal:H,formModel:I,selectOptions:P,resetForm:z,onSubmitForm:N,showModal:W,openModal:()=>{W.value=!0},closeModal:()=>{W.value=!1}}}});return R({render:c},b)}(),"render-demo-3":function(){const{renderList:u,Fragment:o,openBlock:s,createElementBlock:t,createTextVNode:D,resolveComponent:v,withCtx:g,createVNode:p}=w,M=D("\u59D3\u540D"),V=D("\u559C\u6B22\u7684\u6C34\u679C"),h=D("\u6027\u522B"),q=D("\u7537"),y=D("\u5973"),C=D("\u4E0B\u73ED\u4E86\u5417"),E=D("\u5174\u8DA3\u9886\u57DF"),k=D("\u63D0\u4EA4"),i=D("\u91CD\u7F6E");function l(c,e){const m=v("d-form-label"),B=v("d-input"),b=v("d-form-control"),f=v("d-form-item"),A=v("d-tag-input"),H=v("d-radio"),I=v("d-switch"),P=v("d-checkbox"),z=v("d-checkbox-group"),N=v("d-button"),W=v("d-form-operation"),$=v("d-form");return s(),t("div",null,[p($,{ref:"dFormColumn",layout:"columns",columnsClass:"u-1-3",formData:c.formModel,onSubmit:c.onSubmitForm},{default:g(()=>[(s(),t(o,null,u(6,O=>p(f,{prop:"name",key:O,class:"column-item"},{default:g(()=>[p(m,{required:"",hasHelp:""},{default:g(()=>[M]),_:1}),p(b,null,{default:g(()=>[p(B)]),_:1})]),_:2},1024)),64)),p(f,{prop:"loveFruits",class:"column-item"},{default:g(()=>[p(m,null,{default:g(()=>[V]),_:1}),p(b,null,{default:g(()=>[p(A,{tags:c.formModel.loveFruits,"onUpdate:tags":e[0]||(e[0]=O=>c.formModel.loveFruits=O),suggestionList:c.formModel.suggestionList,"onUpdate:suggestionList":e[1]||(e[1]=O=>c.formModel.suggestionList=O),"display-property":"name",placeholder:"\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C","no-data":"\u6682\u65E0\u6570\u636E"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),p(f,{prop:"sex",class:"column-item"},{default:g(()=>[p(m,null,{default:g(()=>[h]),_:1}),p(b,null,{default:g(()=>[p(H,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[2]||(e[2]=O=>c.formModel.sex=O),value:"0"},{default:g(()=>[q]),_:1},8,["modelValue"]),p(H,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[3]||(e[3]=O=>c.formModel.sex=O),value:"1"},{default:g(()=>[y]),_:1},8,["modelValue"])]),_:1})]),_:1}),p(f,{prop:"goOffWork",class:"column-item"},{default:g(()=>[p(m,null,{default:g(()=>[C]),_:1}),p(b,null,{default:g(()=>[p(I,{checked:c.formModel.workOn,"onUpdate:checked":e[4]||(e[4]=O=>c.formModel.workOn=O)},null,8,["checked"])]),_:1})]),_:1}),p(f,{prop:"interestedDomain",class:"column-item"},{default:g(()=>[p(m,null,{default:g(()=>[E]),_:1}),p(b,null,{default:g(()=>[p(z,{modelValue:c.formModel.interestedDomain,"onUpdate:modelValue":e[5]||(e[5]=O=>c.formModel.interestedDomain=O),label:"\u5174\u8DA3\u9886\u57DF"},{default:g(()=>[p(P,{label:"\u524D\u7AEF",value:"frontend"}),p(P,{label:"\u540E\u7AEF",value:"backend"}),p(P,{label:"\u79FB\u52A8\u7AEF",value:"mobileend"}),p(P,{label:"\u4EBA\u5DE5\u667A\u80FD",value:"ai"}),p(P,{label:"\u7B97\u6CD5",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),p(W,{class:"form-demo-form-operation"},{default:g(()=>[p(N,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:g(()=>[k]),_:1}),p(N,{bsStyle:"common",onClick:c.resetForm},{default:g(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:F}=w,_=r({setup(c,e){const m=F(null);let B=d({name:"AlanLee",age:"24",city:"\u6DF1\u5733",loveFruits:[{name:"\u82F9\u679C"}],suggestionList:[{name:"\u82F9\u679C"},{name:"\u897F\u74DC"},{name:"\u6843\u5B50"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const b=d(["\u5317\u4EAC","\u4E0A\u6D77","\u5E7F\u5DDE","\u6DF1\u5733"]);return{dFormColumn:m,formModel:B,selectOptions:b,resetForm:()=>{console.log("dFormColumn",m.value),m.value.resetFormFields()},onSubmitForm:()=>{console.log("onSubmitForm formModel",B)}}}});return R({render:l},_)}(),"render-demo-4":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:D,withDirectives:v,openBlock:g,createElementBlock:p}=w,M=u("\u7528\u6237\u540D");function V(E,k){const i=o("d-form-label"),l=o("d-input"),r=o("d-form-control"),d=o("d-form-item"),F=o("d-form"),_=D("d-validate-rules");return g(),p("div",null,[t(F,{ref:"dFormTemplateValidate1",formData:E.formModel,labelSize:"lg"},{default:s(()=>[t(d,{prop:"username"},{default:s(()=>[t(i,{required:""},{default:s(()=>[M]),_:1}),t(r,null,{default:s(()=>[v(t(l,{modelValue:E.formModel.username,"onUpdate:modelValue":k[0]||(k[0]=c=>E.formModel.username=c)},null,8,["modelValue"]),[[_,[{maxlength:8},{pattern:/^[a-zA-Z\d]+(\s+[a-zA-Z\d]+)*$/,message:{"zh-cn":"\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26","en-us":"The value cannot contain characters except uppercase and lowercase letters.",default:"\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26"}}]]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:h,reactive:q,ref:y}=w,C=h({setup(E,k){const i=y(null);let l=q({username:"AlanLee"});return{dFormTemplateValidate1:i,formModel:l}}});return R({render:V},C)}(),"render-demo-5":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:D,withDirectives:v,openBlock:g,createElementBlock:p}=w,M=u("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),V=u("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09");function h(k,i){const l=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),F=o("d-form-item"),_=o("d-form"),c=D("d-validate-rules");return g(),p("div",null,[t(_,{ref:"dFormTemplateValidate2",formData:k.formModel,labelSize:"lg"},{default:s(()=>[t(F,{prop:"sum"},{default:s(()=>[t(l,null,{default:s(()=>[M]),_:1}),t(d,null,{default:s(()=>[v(t(r,{modelValue:k.formModel.sum,"onUpdate:modelValue":i[0]||(i[0]=e=>k.formModel.sum=e)},null,8,["modelValue"]),[[c,{validators:[{message:"\u4E0D\u5BF9\u5594\uFF01",validator:k.customValidator},{message:"\u7B54\u5BF9\u5566\uFF01",validator:k.customValidator2}]}]])]),_:1})]),_:1}),t(F,{prop:"asyncSum"},{default:s(()=>[t(l,null,{default:s(()=>[V]),_:1}),t(d,null,{default:s(()=>[v(t(r,{modelValue:k.formModel.asyncSum,"onUpdate:modelValue":i[1]||(i[1]=e=>k.formModel.asyncSum=e)},null,8,["modelValue"]),[[c,{asyncValidators:[{message:"\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09",asyncValidator:k.customAsyncValidator},{message:"\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09",asyncValidator:k.customAsyncValidator2}]}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:q,reactive:y,ref:C}=w,E=q({setup(k,i){const l=C(null);let r=y({sum:"",asyncSum:""});return{dFormTemplateValidate2:l,formModel:r,customValidator:(e,m)=>m=="2",customValidator2:(e,m)=>m!="2",customAsyncValidator:(e,m)=>m=="3",customAsyncValidator2:(e,m)=>m!="3"}}});return R({render:h},E)}(),"render-demo-6":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:D,withDirectives:v,openBlock:g,createElementBlock:p}=w,M=u("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),V=u("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09"),h=u("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F");function q(i,l){const r=o("d-form-label"),d=o("d-input"),F=o("d-form-control"),_=o("d-form-item"),c=o("d-form"),e=D("d-validate-rules");return g(),p("div",null,[t(c,{ref:"dFormTemplateValidate3",formData:i.formModel,labelSize:"lg"},{default:s(()=>[t(_,{prop:"sum"},{default:s(()=>[t(r,null,{default:s(()=>[M]),_:1}),t(F,{extraInfo:"updateOn\u4E3Achange\uFF0C\u5F53\u8F93\u5165\u5B8C\u6210\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"},{default:s(()=>[v(t(d,{modelValue:i.formModel.sum,"onUpdate:modelValue":l[0]||(l[0]=m=>i.formModel.sum=m)},null,8,["modelValue"]),[[e,{rules:{validators:[{message:"\u4E0D\u5BF9\u5594\uFF01",validator:i.customValidator},{message:"\u7B54\u5BF9\u5566\uFF01",validator:i.customValidator2}]},options:{updateOn:"change"}}]])]),_:1})]),_:1}),t(_,{prop:"asyncSum"},{default:s(()=>[t(r,null,{default:s(()=>[V]),_:1}),t(F,{extraInfo:"updateOn\u4E3Ainput\uFF0C\u5F53\u6B63\u5728\u8F93\u5165\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"},{default:s(()=>[v(t(d,{modelValue:i.formModel.asyncSum,"onUpdate:modelValue":l[1]||(l[1]=m=>i.formModel.asyncSum=m)},null,8,["modelValue"]),[[e,{rules:{asyncValidators:[{message:"\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09",asyncValidator:i.customAsyncValidator},{message:"\u53EA\u80FD\u8F93\u5165\u6570\u5B57\uFF01",asyncValidator:i.customAsyncValidator2}]},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(_,{prop:"errorSum"},{default:s(()=>[t(r,null,{default:s(()=>[h]),_:1}),t(F,{extraInfo:"errorStrategy\u4E3Apristine\uFF0C\u521D\u59CB\u5316\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"},{default:s(()=>[v(t(d,{modelValue:i.formModel.errorSum,"onUpdate:modelValue":l[2]||(l[2]=m=>i.formModel.errorSum=m)},null,8,["modelValue"]),[[e,{errorStrategy:"pristine",rules:{validators:[{message:"\u4E0D\u5BF9\u5594\uFF01",validator:i.customValidator3}]},options:{updateOn:"input"}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:y,reactive:C,ref:E}=w,k=y({setup(i,l){const r=E(null);let d=C({sum:"",asyncSum:"",errorSum:"3"});return{dFormTemplateValidate3:r,formModel:d,customValidator:(B,b)=>b=="2",customValidator2:(B,b)=>b!="2",customAsyncValidator:(B,b)=>b=="3",customAsyncValidator2:(B,b)=>/^[\d]+(\s+[\d]+)*$/.test(b),customValidator3:(B,b)=>b=="2"}}});return R({render:q},k)}(),"render-demo-7":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:D,withDirectives:v,openBlock:g,createElementBlock:p}=w,M=u("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),V=u("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F");function h(k,i){const l=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),F=o("d-form-item"),_=o("d-form"),c=D("d-validate-rules");return g(),p("div",null,[t(_,{ref:"dFormTemplateValidate4",formData:k.formModel,labelSize:"lg"},{default:s(()=>[t(F,{prop:"sum"},{default:s(()=>[t(l,null,{default:s(()=>[M]),_:1}),t(d,{extraInfo:"messageShowType\u4E3Anone\uFF0C\u4E0D\u663E\u793A\u63D0\u793A\u6587\u5B57"},{default:s(()=>[v(t(r,{modelValue:k.formModel.sum,"onUpdate:modelValue":i[0]||(i[0]=e=>k.formModel.sum=e)},null,8,["modelValue"]),[[c,{messageShowType:"none",rules:{validators:[{message:"\u4E0D\u5BF9\u5594\uFF01",validator:k.customValidator}]},options:{updateOn:"change"}}]])]),_:1})]),_:1}),t(F,{prop:"asyncSum"},{default:s(()=>[t(l,null,{default:s(()=>[V]),_:1}),t(d,{extraInfo:"messageShowType\u4E3Apopover\uFF0C\u4F7F\u7528popover\u8FDB\u884C\u63D0\u793A"},{default:s(()=>[v(t(r,{modelValue:k.formModel.asyncSum,"onUpdate:modelValue":i[1]||(i[1]=e=>k.formModel.asyncSum=e)},null,8,["modelValue"]),[[c,{rules:{asyncValidators:[{message:"\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09",asyncValidator:k.customAsyncValidator}]},options:{updateOn:"input",messageShowType:"popover",popPosition:"bottom"}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:q,reactive:y,ref:C}=w,E=q({setup(k,i){const l=C(null);let r=y({sum:"",asyncSum:""});return{dFormTemplateValidate4:l,formModel:r,customValidator:(_,c)=>c=="2",customAsyncValidator:(_,c)=>c=="3"}}});return R({render:h},E)}(),"render-demo-8":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:D,withDirectives:v,openBlock:g,createElementBlock:p}=w,M=u("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09");function V(E,k){const i=o("d-form-label"),l=o("d-input"),r=o("d-form-control"),d=o("d-form-item"),F=o("d-form"),_=D("d-validate-rules");return g(),p("div",null,[t(F,{ref:"dFormTemplateValidate5",formData:E.formModel,labelSize:"lg"},{default:s(()=>[t(d,{prop:"asyncSum"},{default:s(()=>[t(i,null,{default:s(()=>[M]),_:1}),t(r,{extraInfo:"asyncDebounceTime\u4E3A500"},{default:s(()=>[v(t(l,{modelValue:E.formModel.asyncSum,"onUpdate:modelValue":k[0]||(k[0]=c=>E.formModel.asyncSum=c)},null,8,["modelValue"]),[[_,{rules:{asyncValidators:[{message:"\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09",asyncValidator:E.customAsyncValidator}]},options:{updateOn:"input",asyncDebounceTime:500}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:h,reactive:q,ref:y}=w,C=h({setup(E,k){const i=y(null);let l=q({asyncSum:""});return{dFormTemplateValidate5:i,formModel:l,customAsyncValidator:(d,F)=>F=="3"}}});return R({render:V},C)}(),"render-demo-9":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:D,withDirectives:v,openBlock:g,createElementBlock:p}=w,M=u("\u59D3\u540D"),V=u("\u5E74\u9F84"),h=u("\u63D0\u4EA4"),q=u("\u91CD\u7F6E");function y(l,r){const d=o("d-form-label"),F=o("d-input"),_=o("d-form-control"),c=o("d-form-item"),e=o("d-button"),m=o("d-form-operation"),B=o("d-form"),b=D("d-validate-rules");return g(),p("div",null,[t(B,{name:"userInfoForm",ref:"dFormTemplateValidate6",formData:l.formModel,labelSize:"lg",onSubmit:l.onSubmit},{default:s(()=>[t(c,{prop:"name"},{default:s(()=>[t(d,null,{default:s(()=>[M]),_:1}),t(_,null,{default:s(()=>[v(t(F,{modelValue:l.formModel.name,"onUpdate:modelValue":r[0]||(r[0]=f=>l.formModel.name=f)},null,8,["modelValue"]),[[b,{rules:{minlength:2,message:"\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(c,{prop:"age"},{default:s(()=>[t(d,null,{default:s(()=>[V]),_:1}),t(_,null,{default:s(()=>[v(t(F,{modelValue:l.formModel.age,"onUpdate:modelValue":r[1]||(r[1]=f=>l.formModel.age=f)},null,8,["modelValue"]),[[b,{rules:{min:1,message:"\u5E74\u9F84\u9700\u5927\u4E8E0"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(m,{class:"form-demo-form-operation"},{default:s(()=>[t(e,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[h]),_:1}),t(e,{bsStyle:"common",onClick:l.resetForm},{default:s(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:C,reactive:E,ref:k}=w,i=C({setup(l,r){const d=k(null);let F=E({name:"",age:""});return{dFormTemplateValidate6:d,formModel:F,onSubmit:e=>{console.log("@submit")},resetForm:()=>{d.value.resetFormFields()}}}});return R({render:y},i)}(),"render-demo-10":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:D,withDirectives:v,openBlock:g,createElementBlock:p}=w,M=u("\u59D3\u540D"),V=u("\u5E74\u9F84"),h=u("\u63D0\u4EA4"),q=u("\u91CD\u7F6E");function y(l,r){const d=o("d-form-label"),F=o("d-input"),_=o("d-form-control"),c=o("d-form-item"),e=o("d-button"),m=o("d-form-operation"),B=o("d-form"),b=D("d-validate-rules");return g(),p("div",null,[v(t(B,{name:"userInfoForm2",ref:"dFormTemplateValidate7",formData:l.formModel,labelSize:"lg",onSubmit:l.onSubmit,messageShowType:"text"},{default:s(()=>[t(c,{prop:"name"},{default:s(()=>[t(d,null,{default:s(()=>[M]),_:1}),t(_,null,{default:s(()=>[v(t(F,{modelValue:l.formModel.name,"onUpdate:modelValue":r[0]||(r[0]=f=>l.formModel.name=f)},null,8,["modelValue"]),[[b,{rules:{minlength:2,message:"\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(c,{prop:"age"},{default:s(()=>[t(d,null,{default:s(()=>[V]),_:1}),t(_,null,{default:s(()=>[v(t(F,{modelValue:l.formModel.age,"onUpdate:modelValue":r[1]||(r[1]=f=>l.formModel.age=f)},null,8,["modelValue"]),[[b,{rules:{min:1,message:"\u5E74\u9F84\u9700\u5927\u4E8E0"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(m,{class:"form-demo-form-operation"},{default:s(()=>[t(e,{type:"submit",class:"form-demo-demo-btn"},{default:s(()=>[h]),_:1}),t(e,{bsStyle:"common",onClick:l.resetForm},{default:s(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"]),[[b,{rules:{message:"\u8868\u5355\u9A8C\u8BC1\u672A\u901A\u8FC7"}}]])])}const{defineComponent:C,reactive:E,ref:k}=w,i=C({setup(l,r){const d=k(null);let F=E({name:"",age:""});return{dFormTemplateValidate7:d,formModel:F,onSubmit:e=>{console.log("@submit")},resetForm:()=>{d.value.resetFormFields()}}}});return R({render:y},i)}(),"render-demo-11":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:D,createElementBlock:v}=w,g=u("\u59D3\u540D"),p=u("\u5E74\u9F84");function M(C,E){const k=o("d-form-label"),i=o("d-input"),l=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return D(),v("div",null,[t(d,{ref:"dFormReactiveValidate","form-data":C.validateFormModel,rules:C.rules},{default:s(()=>[t(r,{prop:"name"},{default:s(()=>[t(k,{required:!0},{default:s(()=>[g]),_:1}),t(l,null,{default:s(()=>[t(i,{modelValue:C.validateFormModel.name,"onUpdate:modelValue":E[0]||(E[0]=F=>C.validateFormModel.name=F)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,{prop:"age"},{default:s(()=>[t(k,{required:!0},{default:s(()=>[p]),_:1}),t(l,null,{default:s(()=>[t(i,{modelValue:C.validateFormModel.age,"onUpdate:modelValue":E[1]||(E[1]=F=>C.validateFormModel.age=F)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data","rules"])])}const{defineComponent:V,reactive:h,ref:q}=w,y=V({setup(C,E){const k=q(null);let i=h({name:"AlanLee",age:"24"});const l=h({name:[{required:!0,message:"\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}],age:[{required:!0,message:"\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E0",trigger:"blur",validator:(r,d)=>d>0},{required:!0,message:"\u5E74\u9F84\u4E0D\u80FD\u5927\u4E8E120",trigger:"input",validator:(r,d)=>d<120}]});return{dFormReactiveValidate:k,rules:l,validateFormModel:i}}});return R({render:M},y)}(),"render-demo-12":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:D,createElementBlock:v}=w,g=u("\u59D3\u540D"),p=u("\u6635\u79F0"),M=u("\u5E74\u9F84"),V=u("\u6027\u522B");function h(k,i){const l=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),F=o("d-form-item"),_=o("d-select"),c=o("d-form");return D(),v("div",null,[t(c,{ref:"dFormFeedback","form-data":k.formModel},{default:s(()=>[t(F,{prop:"name"},{default:s(()=>[t(l,{required:!0},{default:s(()=>[g]),_:1}),t(d,{feedbackStatus:"pending"},{default:s(()=>[t(r,{modelValue:k.formModel.name,"onUpdate:modelValue":i[0]||(i[0]=e=>k.formModel.name=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(F,{prop:"nickname"},{default:s(()=>[t(l,{required:!0},{default:s(()=>[p]),_:1}),t(d,{feedbackStatus:"success"},{default:s(()=>[t(r,{modelValue:k.formModel.nickname,"onUpdate:modelValue":i[1]||(i[1]=e=>k.formModel.nickname=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(F,{prop:"age"},{default:s(()=>[t(l,{required:!0},{default:s(()=>[M]),_:1}),t(d,{feedbackStatus:"error"},{default:s(()=>[t(r,{modelValue:k.formModel.age,"onUpdate:modelValue":i[2]||(i[2]=e=>k.formModel.age=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(F,{prop:"sex"},{default:s(()=>[t(l,{required:!0},{default:s(()=>[V]),_:1}),t(d,{feedbackStatus:"error"},{default:s(()=>[t(_,{modelValue:k.formModel.sex,"onUpdate:modelValue":i[3]||(i[3]=e=>k.formModel.sex=e),options:k.sexSelectOptions,placeholder:"Select your sex"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:q,reactive:y,ref:C}=w,E=q({setup(k,i){const l=C(null);let r=y({name:"AlanLee",nickname:"AlanLee97",age:"24",sex:"\u7537"});const d=y(["\u7537","\u5973"]);return{dFormFeedback:l,formModel:r,sexSelectOptions:d}}});return R({render:h},E)}(),"render-demo-13":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:D,createElementBlock:v}=w,g=u("\u5730\u5740");function p(y,C){const E=o("d-form-label"),k=o("d-input"),i=o("d-icon"),l=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return D(),v("div",null,[t(d,{ref:"dFormFeedback2","form-data":y.formModel},{default:s(()=>[t(r,{prop:"address"},{default:s(()=>[t(E,{required:!0},{default:s(()=>[g]),_:1}),t(l,null,{suffixTemplate:s(()=>[t(i,{name:"right-o",color:"rgb(61, 204, 166)"})]),default:s(()=>[t(k,{modelValue:y.formModel.address,"onUpdate:modelValue":C[0]||(C[0]=F=>y.formModel.address=F)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:M,reactive:V,ref:h}=w,q=M({setup(y,C){const E=h(null);let k=V({address:"\u6DF1\u5733\u5357\u5C71\u533A"});return{dFormFeedback2:E,formModel:k}}});return R({render:p},q)}(),"render-demo-14":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:D,withDirectives:v,openBlock:g,createElementBlock:p}=w,M=u("\u7528\u6237\u540D"),V=u("\u5BC6\u7801"),h=u("\u786E\u8BA4\u5BC6\u7801"),q=u("\u63D0\u4EA4"),y=u("\u91CD\u7F6E");function C(r,d){const F=o("d-form-label"),_=o("d-input"),c=o("d-form-control"),e=o("d-form-item"),m=o("d-button"),B=o("d-form-operation"),b=o("d-form"),f=D("d-validate-rules");return g(),p("div",null,[t(b,{name:"togetherValidateForm",ref:"dFormTogetherValidate","form-data":r.formModel,labelSize:"lg",onSubmit:r.onSubmit},{default:s(()=>[t(e,{prop:"username"},{default:s(()=>[t(F,{required:!0},{default:s(()=>[M]),_:1}),t(c,null,{default:s(()=>[v(t(_,{modelValue:r.formModel.username,"onUpdate:modelValue":d[0]||(d[0]=A=>r.formModel.username=A)},null,8,["modelValue"]),[[f,r.formRules.userNameRule]])]),_:1})]),_:1}),t(e,{prop:"password"},{default:s(()=>[t(F,{required:!0},{default:s(()=>[V]),_:1}),t(c,null,{default:s(()=>[v(t(_,{modelValue:r.formModel.password,"onUpdate:modelValue":d[1]||(d[1]=A=>r.formModel.password=A)},null,8,["modelValue"]),[[f,r.formRules.passwordRule]])]),_:1})]),_:1}),t(e,{prop:"confirmPassword"},{default:s(()=>[t(F,{required:!0},{default:s(()=>[h]),_:1}),t(c,null,{default:s(()=>[v(t(_,{modelValue:r.formModel.confirmPassword,"onUpdate:modelValue":d[2]||(d[2]=A=>r.formModel.confirmPassword=A)},null,8,["modelValue"]),[[f,r.formRules.confirmPasswordRule]])]),_:1})]),_:1}),t(B,{class:"form-demo-form-operation"},{default:s(()=>[t(m,{type:"submit",class:"form-demo-demo-btn"},{default:s(()=>[q]),_:1}),t(m,{bsStyle:"common",onClick:r.resetForm},{default:s(()=>[y]),_:1},8,["onClick"])]),_:1})]),_:1},8,["form-data","onSubmit"])])}const{defineComponent:E,reactive:k,ref:i}=w,l=E({setup(r,d){const F=i(null);let _=k({username:"",password:"",confirmPassword:""});return{dFormTogetherValidate:F,formModel:_,formRules:{userNameRule:{rules:{minlength:6,message:"\u6700\u5C0F6\u4E2A\u5B57\u7B26"}},passwordRule:{rules:{minlength:6,message:"\u6700\u5C0F6\u4E2A\u5B57\u7B26"}},confirmPasswordRule:{options:{updateOn:"input"},rules:{minlength:6,message:"\u6700\u5C0F6\u4E2A\u5B57\u7B26",validators:[{message:"\u786E\u8BA4\u5BC6\u7801\u4E0E\u5BC6\u7801\u4E0D\u76F8\u7B26",validator:(B,b)=>b===_.password}]}}},resetForm:()=>{F.value.resetFormFields()},onSubmit:B=>{console.log("@submit")}}}});return R({render:C},l)}(),"render-demo-15":function(){const{createTextVNode:u,resolveComponent:o,withCtx:s,createVNode:t,openBlock:D,createElementBlock:v}=w,g=u("\u59D3\u540D"),p=u("\u5E74\u9F84");function M(C,E){const k=o("d-form-label"),i=o("d-input"),l=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return D(),v("div",null,[t(d,{ref:"dFormWithComponent","form-data":C.formModel},{default:s(()=>[t(r,{prop:"name"},{default:s(()=>[t(k,{required:!0},{default:s(()=>[g]),_:1}),t(l,null,{default:s(()=>[t(i,{modelValue:C.formModel.name,"onUpdate:modelValue":E[0]||(E[0]=F=>C.formModel.name=F)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,{prop:"age"},{default:s(()=>[t(k,{required:!0},{default:s(()=>[p]),_:1}),t(l,null,{default:s(()=>[t(i,{modelValue:C.formModel.age,"onUpdate:modelValue":E[1]||(E[1]=F=>C.formModel.age=F)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:V,reactive:h,ref:q}=w,y=V({setup(C,E){const k=q(null);let i=h({name:"AlanLee",age:"24"});return{dFormWithComponent:k,formModel:i}}});return R({render:M},y)}()}},aa='{"title":"Form \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":3,"title":"\u6A2A\u5411\u6392\u5217","slug":"\u6A2A\u5411\u6392\u5217"},{"level":3,"title":"\u5F39\u6846\u8868\u5355","slug":"\u5F39\u6846\u8868\u5355"},{"level":3,"title":"\u591A\u5217\u8868\u5355","slug":"\u591A\u5217\u8868\u5355"},{"level":3,"title":"\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1","slug":"\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1"},{"level":3,"title":"\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1","slug":"\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1"},{"level":3,"title":"\u6307\u5B9A\u8868\u5355Feedback\u72B6\u6001","slug":"\u6307\u5B9A\u8868\u5355feedback\u72B6\u6001"},{"level":3,"title":"\u8868\u5355\u534F\u540C\u9A8C\u8BC1","slug":"\u8868\u5355\u534F\u540C\u9A8C\u8BC1"},{"level":3,"title":"\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1","slug":"\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"Directives","slug":"directives"},{"level":3,"title":"\u63A5\u53E3 & \u7C7B\u578B\u5B9A\u4E49","slug":"\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/form/index.md","lastUpdated":1641649058896}',un=Z('<h1 id="form-\u8868\u5355" tabindex="-1">Form \u8868\u5355 <a class="header-anchor" href="#form-\u8868\u5355" aria-hidden="true">#</a></h1><p>\u5177\u6709\u6570\u636E\u6536\u96C6\u3001\u6821\u9A8C\u548C\u63D0\u4EA4\u529F\u80FD\u7684\u8868\u5355\uFF0C\u5305\u542B\u590D\u9009\u6846\u3001\u5355\u9009\u6846\u3001\u8F93\u5165\u6846\u3001\u4E0B\u62C9\u9009\u62E9\u6846\u7B49\u5143\u7D20\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u9700\u8981\u8FDB\u884C\u6570\u636E\u6536\u96C6\u3001\u6570\u636E\u6821\u9A8C\u3001\u6570\u636E\u63D0\u4EA4\u529F\u80FD\u65F6\u3002</p><h3 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1">\u57FA\u7840\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u57FA\u672C\u7528\u6CD5\u5F53\u4E2D\uFF0CLabel\u662F\u5728\u6570\u636E\u6846\u7684\u4E0A\u9762\u3002</p>',6),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormBasic"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),a(),n("span",{class:"token attr-name"},"hasHelp"),a(),n("span",{class:"token attr-name"},"helpTips"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u53EF\u4EE5\u8F93\u5165\u4E2D\u6587\u540D\u5B57\u6216\u8005\u82F1\u6587\u540D\u5B57"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u60A8\u7684\u540D\u5B57"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u57CE\u5E02"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u6027\u522B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7537"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5973"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u4E0B\u73ED\u4E86\u5417"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("interestedDomain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5174\u8DA3\u9886\u57DF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5174\u8DA3\u9886\u57DF"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u524D\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u540E\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u79FB\u52A8\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4EBA\u5DE5\u667A\u80FD"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ai"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7B97\u6CD5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormBasic "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82F9\u679C'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82F9\u679C'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u74DC'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6843\u5B50'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      workOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      interestedDomain`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'formData reset before'"),n("span",{class:"token punctuation"},","),a(" dFormBasic"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("formData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dFormBasic`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'formData reset after'"),n("span",{class:"token punctuation"},","),a(" dFormBasic"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("formData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmitForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSubmitForm formModel'"),n("span",{class:"token punctuation"},","),a(" formModel"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormBasic`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmitForm
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),pn=n("h3",{id:"\u6A2A\u5411\u6392\u5217",tabindex:"-1"},[a("\u6A2A\u5411\u6392\u5217 "),n("a",{class:"header-anchor",href:"#\u6A2A\u5411\u6392\u5217","aria-hidden":"true"},"#")],-1),ln=n("p",null,"Label\u5DE6\u53F3\u5E03\u5C40\u65B9\u5F0F\u3002",-1),rn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormHorizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("horizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u57CE\u5E02"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u6027\u522B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7537"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5973"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u4E0B\u73ED\u4E86\u5417"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("interestedDomain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5174\u8DA3\u9886\u57DF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5174\u8DA3\u9886\u57DF"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u524D\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u540E\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u79FB\u52A8\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4EBA\u5DE5\u667A\u80FD"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ai"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7B97\u6CD5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormHorizontal "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82F9\u679C'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82F9\u679C'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u74DC'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6843\u5B50'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      workOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      interestedDomain`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dFormHorizontal'"),n("span",{class:"token punctuation"},","),a(" dFormHorizontal"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dFormHorizontal`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmitForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSubmitForm formModel'"),n("span",{class:"token punctuation"},","),a(" formModel"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormHorizontal`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmitForm
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),kn=n("h3",{id:"\u5F39\u6846\u8868\u5355",tabindex:"-1"},[a("\u5F39\u6846\u8868\u5355 "),n("a",{class:"header-anchor",href:"#\u5F39\u6846\u8868\u5355","aria-hidden":"true"},"#")],-1),dn=n("blockquote",null,[n("p",null,[a("todo "),n("br"),a(" \u5F85\u66FF\u6362\u4E3AModal\u7EC4\u4EF6")])],-1),mn=n("p",null,"\u5F39\u6846\u8868\u5355\uFF0C\u5F39\u6846\u5EFA\u8BAE\u662F400px\uFF0C550px\uFF0C700px\uFF0C900px\uFF0C\u5EFA\u8BAE\u5BBD\u9AD8\u6BD4\u662F16: 9\u30013: 2\u3002",-1),fn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("openModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6253\u5F00\u5F39\u7A97"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-modal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-modal-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("horizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u57CE\u5E02"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
              `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u6027\u522B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7537"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5973"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u4E0B\u73ED\u4E86\u5417"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("interestedDomain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5174\u8DA3\u9886\u57DF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5174\u8DA3\u9886\u57DF"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u524D\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u540E\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u79FB\u52A8\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4EBA\u5DE5\u667A\u80FD"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ai"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7B97\u6CD5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormModal "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82F9\u679C'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82F9\u679C'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u74DC'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6843\u5B50'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      workOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      interestedDomain`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dFormModal'"),n("span",{class:"token punctuation"},","),a(" dFormModal"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dFormModal`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmitForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSubmitForm formModel'"),n("span",{class:"token punctuation"},","),a(" formModel"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" showModal "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"openModal"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      showModal`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"closeModal"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      showModal`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormModal`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmitForm`),n("span",{class:"token punctuation"},","),a(`
      showModal`),n("span",{class:"token punctuation"},","),a(`
      openModal`),n("span",{class:"token punctuation"},","),a(`
      closeModal
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".form-demo-modal"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" fixed"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"bottom"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),a(" 0"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100vw"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 100vh"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"z-index"),n("span",{class:"token punctuation"},":"),a(" 10000"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" auto"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(),n("span",{class:"token function"},"rgba"),n("span",{class:"token punctuation"},"("),a("0"),n("span",{class:"token punctuation"},","),a(" 0"),n("span",{class:"token punctuation"},","),a(" 0"),n("span",{class:"token punctuation"},","),a(" 0.5"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".form-demo-modal-content"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #fff"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 40vw"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Fn=n("h3",{id:"\u591A\u5217\u8868\u5355",tabindex:"-1"},[a("\u591A\u5217\u8868\u5355 "),n("a",{class:"header-anchor",href:"#\u591A\u5217\u8868\u5355","aria-hidden":"true"},"#")],-1),gn=n("p",null,[a("\u591A\u5217\u8868\u5355\u3002layout\u7684\u5C5E\u6027\u4E3A"),n("code",null,"columns"),a('\uFF0C\u540C\u65F6\u642D\u914DcolumnsClass\u5C5E\u6027\uFF0C\u503C\u4E3A"u-[row]-[col]"\uFF0C\u4F8B\u5982'),n("code",null,"u-1-3"),a("\u4E3A1\u884C3\u5217\u3002")],-1),vn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormColumn"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"columnsClass"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("u-1-3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(item) in 6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),a(),n("span",{class:"token attr-name"},"hasHelp"),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u6682\u65E0\u6570\u636E"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u6027\u522B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7537"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u5973"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("goOffWork"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u4E0B\u73ED\u4E86\u5417"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5174\u8DA3\u9886\u57DF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u5174\u8DA3\u9886\u57DF"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u524D\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u540E\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u79FB\u52A8\u7AEF"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u4EBA\u5DE5\u667A\u80FD"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ai"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u7B97\u6CD5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormColumn "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82F9\u679C'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u82F9\u679C'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u897F\u74DC'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6843\u5B50'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      workOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      interestedDomain`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u6DF1\u5733'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'dFormColumn'"),n("span",{class:"token punctuation"},","),a(" dFormColumn"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dFormColumn`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmitForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onSubmitForm formModel'"),n("span",{class:"token punctuation"},","),a(" formModel"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormColumn`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      selectOptions`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmitForm
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),En=Z('<h3 id="\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1" tabindex="-1">\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1 <a class="header-anchor" href="#\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1" aria-hidden="true">#</a></h3><p>\u5728<code>d-form</code>\u3001<code>d-input</code>\u7B49\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E0A\u4F7F\u7528<code>v-d-validate-rules</code>\u6307\u4EE4\uFF0C\u914D\u7F6E\u6821\u9A8C\u89C4\u5219\u3002</p><h4 id="\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u4F7F\u7528\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u914D\u7F6Eerror-message" tabindex="-1">\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u4F7F\u7528\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u914D\u7F6Eerror message <a class="header-anchor" href="#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u4F7F\u7528\u5185\u7F6E\u6821\u9A8C\u5668\uFF0C\u914D\u7F6Eerror-message" aria-hidden="true">#</a></h4><p>\u5F53\u524DDevUI\u652F\u6301\u7684\u5185\u7F6E\u6821\u9A8C\u5668\u6709\uFF1A<code>required</code>\u3001<code>minlength</code>\u3001<code>maxlength</code>\u3001<code>min</code>\u3001<code>max</code>\u3001<code>requiredTrue</code>\u3001<code>email</code>\u3001<code>pattern</code>\u3001<code>whitespace</code>\u3002</p><ul><li><p>\u82E5\u9700\u9650\u5236\u7528\u6237\u8F93\u5165\u4E0D\u80FD\u5168\u4E3A\u7A7A\u683C\uFF0C\u53EF\u4F7F\u7528<code>whitespace</code>\u5185\u7F6E\u6821\u9A8C\u5668</p></li><li><p>\u82E5\u9700\u9650\u5236\u7528\u6237\u8F93\u5165\u957F\u5EA6\uFF0C\u5C06\u6700\u5927\u9650\u5236\u8BBE\u7F6E\u4E3A\u5B9E\u9645\u6821\u9A8C\u503C<code>+1</code>\u662F\u4E00\u4E2A\u597D\u7684\u529E\u6CD5\u3002</p></li><li><p>\u9664<code>pattern</code>\u5916\uFF0C\u5176\u4ED6\u5185\u7F6E\u6821\u9A8C\u5668\u6211\u4EEC\u4E5F\u63D0\u4F9B\u4E86\u5185\u7F6E\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F\uFF0C\u5728\u4F60\u672A\u81EA\u5B9A\u4E49\u63D0\u793A\u6D88\u606F\u65F6\uFF0C\u6211\u4EEC\u5C06\u4F7F\u7528\u9ED8\u8BA4\u7684\u63D0\u793A\u4FE1\u606F\u3002</p></li><li><p>message\u914D\u7F6E\u652F\u6301string\u4E0Eobject\u4E24\u79CD\u5F62\u5F0F\uFF08\u652F\u6301\u56FD\u9645\u5316\u8BCD\u6761\u914D\u7F6E\uFF0C\u5982<code>&#39;zh-cn&#39;</code>\uFF0C\u9ED8\u8BA4\u5C06\u53D6<code>&#39;default&#39;</code>\uFF09\u3002</p></li></ul>',5),Cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("username"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("\u7528\u6237\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.username"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`[
          {
            maxlength: 8,
          },
          {
            pattern: /^[a-zA-Z\\d]+(\\s+[a-zA-Z\\d]+)*$/, 
            message: {
              `),n("span",{class:"token punctuation"},"'"),a("zh-cn"),n("span",{class:"token punctuation"},"'"),a(": "),n("span",{class:"token punctuation"},"'"),a("\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26"),n("span",{class:"token punctuation"},"'"),a(`, 
              `),n("span",{class:"token punctuation"},"'"),a("en-us"),n("span",{class:"token punctuation"},"'"),a(": "),n("span",{class:"token punctuation"},"'"),a("The value cannot contain characters except uppercase and lowercase letters."),n("span",{class:"token punctuation"},"'"),a(`, 
              default: `),n("span",{class:"token punctuation"},"'"),a("\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26"),n("span",{class:"token punctuation"},"'"),a(`
            }
          }
        ]`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate1 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      username`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate1`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),bn=n("h4",{id:"\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668",tabindex:"-1"},[a("\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668 "),n("a",{class:"header-anchor",href:"#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668","aria-hidden":"true"},"#")],-1),An=n("p",null,[a("\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668\uFF0C\u53EF\u4F20\u5165"),n("code",null,"validators"),a("\u5B57\u6BB5\u914D\u7F6E\u6821\u9A8C\u89C4\u5219\uFF0C\u4F60\u53EF\u4EE5\u7B80\u5355\u8FD4\u56DE"),n("code",null,"true | false "),a("\u6765\u6807\u8BC6\u5F53\u524D\u6821\u9A8C\u662F\u5426\u901A\u8FC7\uFF0C\u6765\u6807\u8BC6\u5F53\u524D\u662F\u5426\u9519\u8BEF\u5E76\u8FD4\u56DE\u9519\u8BEF\u6D88\u606F\uFF0C\u9002\u7528\u4E8E\u52A8\u6001\u9519\u8BEF\u63D0\u793A\u3002\u5982\u679C\u662F\u5F02\u6B65\u6821\u9A8C\u5668\uFF0C\u53EF\u4F20\u5165"),n("code",null,"asyncValidators"),a("\u5B57\u6BB5\u914D\u7F6E\u6821\u9A8C\u89C4\u5219\u3002")],-1),Dn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          validators: [
            {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator},
            {message: `),n("span",{class:"token punctuation"},"'"),a("\u7B54\u5BF9\u5566\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator2}
          ]
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          asyncValidators: [
            {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator},
            {message: `),n("span",{class:"token punctuation"},"'"),a("\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator2}
          ]
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      sum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      asyncSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u4E0D\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u4E0D\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate2`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      customValidator`),n("span",{class:"token punctuation"},","),a(`
      customValidator2`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator2`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),_n=Z('<h4 id="\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u914D\u7F6E\u9519\u8BEF\u66F4\u65B0\u7B56\u7565errorstrategy\u3001\u6821\u9A8C\u65F6\u673Aupdateon" tabindex="-1">\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u914D\u7F6E\u9519\u8BEF\u66F4\u65B0\u7B56\u7565errorStrategy\u3001\u6821\u9A8C\u65F6\u673AupdateOn <a class="header-anchor" href="#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u914D\u7F6E\u9519\u8BEF\u66F4\u65B0\u7B56\u7565errorstrategy\u3001\u6821\u9A8C\u65F6\u673Aupdateon" aria-hidden="true">#</a></h4><ul><li><p>\u8BBE\u7F6E<code>errorStrategy</code>\u5C5E\u6027\u521D\u59CB\u5316\u65F6\u662F\u5426\u8FDB\u884C\u6821\u9A8C</p><ul><li>\u9ED8\u8BA4\u914D\u7F6E\u4E3A<code>dirty</code>\uFF0C\u6821\u9A8C\u4E0D\u901A\u8FC7\u8FDB\u884C\u9519\u8BEF\u63D0\u793A</li><li>\u82E5\u9700\u8981\u5728\u521D\u59CB\u5316\u65F6\u5C06\u9519\u8BEF\u629B\u51FA\uFF0C\u53EF\u914D\u7F6E\u4E3A<code>pristine</code></li></ul></li><li><p>\u8BBE\u7F6E<code>updateOn</code>\uFF0C\u6307\u5B9A\u6821\u9A8C\u7684\u65F6\u673A</p><ul><li>\u6821\u9A8C\u5668<code>updateOn</code>\u57FA\u4E8E\u4F60\u7ED1\u5B9A\u7684\u6A21\u578B\u7684<code>updateOn</code>\u8BBE\u7F6E\uFF0C \u4F60\u53EF\u4EE5\u901A\u8FC7<code>options</code>\u6765\u6307\u5B9A\uFF0C \u9ED8\u8BA4\u4E3A<code>change</code></li><li>\u53EF\u9009\u503C\u8FD8\u6709<code>blur</code> \u3001<code>input</code>\u3001<code>submit</code></li><li>\u8BBE\u7F6E\u4E3A<code>submit</code>\uFF0C\u5219\u5F53\u5143\u7D20\u6240\u5728\u8868\u5355\u8FDB\u884C\u63D0\u4EA4\u65F6\u5C06\u89E6\u53D1\u6821\u9A8C</li></ul></li></ul>',2),Bn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("updateOn\u4E3Achange\uFF0C\u5F53\u8F93\u5165\u5B8C\u6210\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator},
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u7B54\u5BF9\u5566\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator2}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("change"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("updateOn\u4E3Ainput\uFF0C\u5F53\u6B63\u5728\u8F93\u5165\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator},
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u53EA\u80FD\u8F93\u5165\u6570\u5B57\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator2}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("errorSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("errorStrategy\u4E3Apristine\uFF0C\u521D\u59CB\u5316\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.errorSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          errorStrategy: `),n("span",{class:"token punctuation"},"'"),a("pristine"),n("span",{class:"token punctuation"},"'"),a(`,
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator3},
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate3 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      sum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      asyncSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      errorSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u4E0D\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"let"),a(" reg "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^[\\d]+(\\s+[\\d]+)*$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" reg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(` 
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator3"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate3`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      customValidator`),n("span",{class:"token punctuation"},","),a(`
      customValidator2`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator2`),n("span",{class:"token punctuation"},","),a(`
      customValidator3`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),yn=Z('<h4 id="\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u7BA1\u7406\u6D88\u606F\u63D0\u793A" tabindex="-1">\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u7BA1\u7406\u6D88\u606F\u63D0\u793A <a class="header-anchor" href="#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49\u7BA1\u7406\u6D88\u606F\u63D0\u793A" aria-hidden="true">#</a></h4><p>\u914D\u7F6E<code>messageShowType</code>\u53EF\u9009\u62E9\u6D88\u606F\u81EA\u52A8\u63D0\u793A\u7684\u65B9\u5F0F\uFF0C\u9ED8\u8BA4\u4E3A<code>popover</code>\u3002</p><ul><li><p>\u8BBE\u7F6E\u4E3A<code>popover</code>\u9519\u8BEF\u4FE1\u606F\u5C06\u5728\u5143\u7D20\u805A\u7126\u65F6\u4EE5<code>popover</code>\u5F62\u5F0F\u5448\u73B0\u3002</p></li><li><p>\u8BBE\u7F6E\u4E3A<code>text</code>\u9519\u8BEF\u4FE1\u606F\u5C06\u81EA\u52A8\u4EE5\u6587\u672C\u65B9\u5F0F\u663E\u793A\u5728\u5143\u7D20\u4E0B\u65B9(\u9700\u8981\u4E0E\u8868\u5355\u63A7\u4EF6\u5BB9\u5668\u914D\u5408\u4F7F\u7528)\u3002</p></li><li><p>\u8BBE\u7F6E\u4E3A<code>none</code>\u9519\u8BEF\u4FE1\u606F\u5C06\u4E0D\u4F1A\u81EA\u52A8\u5448\u73B0\u5230\u89C6\u56FE\uFF0C \u53EF\u5728\u6A21\u677F\u4E2D\u83B7\u53D6<code>message</code>\u6216\u901A\u8FC7\u76D1\u542C<code>messageChange</code>\u4E8B\u4EF6\u83B7\u53D6\u9519\u8BEF<code>message</code>\uFF0C \u6216\u5728\u6A21\u677F\u4E2D\u76F4\u63A5\u901A\u8FC7\u5F15\u7528\u83B7\u53D6\u3002</p></li><li><p>\u5728 <code>options</code>\u4E2D\u914D\u7F6E <code>popPosition</code>\u53EF\u5728\u6D88\u606F\u63D0\u793A\u65B9\u5F0F\u4E3A<code>popover</code>\u65F6\uFF0C\u81EA\u5B9A\u4E49<code>popover</code>\u5185\u5BB9\u5F39\u51FA\u65B9\u5411\uFF0C \u9ED8\u8BA4\u4E3A<code>[&#39;right&#39;, &#39;bottom&#39;]</code>\u3002\u66F4\u591A\u53D6\u503C\u53C2\u8003popover\u7EC4\u4EF6\u3002</p></li></ul>',3),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("messageShowType\u4E3Anone\uFF0C\u4E0D\u663E\u793A\u63D0\u793A\u6587\u5B57"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          messageShowType: `),n("span",{class:"token punctuation"},"'"),a("none"),n("span",{class:"token punctuation"},"'"),a(`,
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("change"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("messageShowType\u4E3Apopover\uFF0C\u4F7F\u7528popover\u8FDB\u884C\u63D0\u793A"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
            messageShowType: `),n("span",{class:"token punctuation"},"'"),a("popover"),n("span",{class:"token punctuation"},"'"),a(`,
            popPosition: `),n("span",{class:"token punctuation"},"'"),a("bottom"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate4 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      sum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      asyncSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate4`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      customValidator`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Mn=n("h4",{id:"\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49asyncdebouncetime",tabindex:"-1"},[a("\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49asyncDebounceTime "),n("a",{class:"header-anchor",href:"#\u9A8C\u8BC1\u5355\u4E2A\u5143\u7D20\uFF0C\u81EA\u5B9A\u4E49asyncdebouncetime","aria-hidden":"true"},"#")],-1),Vn=n("p",null,[a("\u5BF9\u4E8E\u5F02\u6B65\u6821\u9A8C\u5668\uFF0C\u63D0\u4F9B\u9ED8\u8BA4300ms debounce time\u3002\u5728options\u4E2D\u8BBE\u7F6E"),n("code",null,"asyncDebounceTime"),a("\u663E\u793A\u8BBE\u7F6E\uFF08\u5355\u4F4Dms\uFF09\u3002")],-1),qn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncDebounceTime\u4E3A500"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
            asyncDebounceTime: 500
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate5 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      asyncSum`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(),n("span",{class:"token comment"},"// value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate5`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      customAsyncValidator`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),wn=n("h4",{id:"form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4",tabindex:"-1"},[a("Form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4 "),n("a",{class:"header-anchor",href:"#form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4","aria-hidden":"true"},"#")],-1),xn=n("p",null,"\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u65F6\u8FDB\u884C\u9A8C\u8BC1\uFF0C\u9700\u6307\u5B9Aname\u5C5E\u6027\uFF0C\u5E76\u540C\u65F6\u7ED1\u5B9Ad-form\u6807\u7B7E\u7684submit\u4E8B\u4EF6\u624D\u80FD\u751F\u6548\u3002",-1),Sn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("userInfoForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {minlength: 2, message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {min: 1, message: `),n("span",{class:"token punctuation"},"'"),a("\u5E74\u9F84\u9700\u5927\u4E8E0"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate6 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate6`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@submit'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate6`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      onSubmit`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Tn=n("h4",{id:"form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4\uFF0C\u7528\u6237\u6CE8\u518C\u573A\u666F",tabindex:"-1"},[a("Form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4\uFF0C\u7528\u6237\u6CE8\u518C\u573A\u666F "),n("a",{class:"header-anchor",href:"#form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4\uFF0C\u7528\u6237\u6CE8\u518C\u573A\u666F","aria-hidden":"true"},"#")],-1),On=n("p",null,[a("\u5BF9\u4E8E\u81EA\u52A8\u9519\u8BEF\u63D0\u793A\u7684\u65B9\u5F0F\uFF0C\u5728form\u4E2D\uFF0C \u5EFA\u8BAE\u5728dForm\u5C42\u7EDF\u4E00\u8BBE\u7F6E"),n("code",null,"messageShowType"),a("\uFF0C\u9700\u540C\u65F6\u8BBE\u7F6Eref\u5C5E\u6027\u624D\u80FD\u751F\u6548\u3002")],-1),Ln=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("userInfoForm2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate7"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {message: `),n("span",{class:"token punctuation"},"'"),a("\u8868\u5355\u9A8C\u8BC1\u672A\u901A\u8FC7"),n("span",{class:"token punctuation"},"'"),a(`},
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"messageShowType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {minlength: 2, message: `),n("span",{class:"token punctuation"},"'"),a("\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {min: 1, message: `),n("span",{class:"token punctuation"},"'"),a("\u5E74\u9F84\u9700\u5927\u4E8E0"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTemplateValidate7 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate7`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@submit'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTemplateValidate7`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      onSubmit`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Nn=n("h3",{id:"\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1",tabindex:"-1"},[a("\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1 "),n("a",{class:"header-anchor",href:"#\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1","aria-hidden":"true"},"#")],-1),zn=n("p",null,[a("\u5728"),n("code",null,"d-form"),a("\u6807\u7B7E\u4E2D\u6307\u5B9A\u6821\u9A8C\u89C4\u5219rules\uFF0C\u540C\u65F6\u5728"),n("code",null,"d-form-item"),a("\u4E2D\u6307\u5B9A"),n("code",null,"prop"),a("\u7684\u503C\u4E3A\u6821\u9A8C\u5B57\u6BB5\u540D\u3002")],-1),Un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormReactiveValidate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("validateFormModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rules"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("validateFormModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("validateFormModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormReactiveValidate "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" validateFormModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" rules "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(" required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(" message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u4E0D\u80FD\u4E3A\u7A7A'"),n("span",{class:"token punctuation"},","),a(" trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(` 
          required`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E0'"),n("span",{class:"token punctuation"},","),a(` 
          trigger`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" value "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"0"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(` 
          required`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u5E74\u9F84\u4E0D\u80FD\u5927\u4E8E120'"),n("span",{class:"token punctuation"},","),a(` 
          trigger`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" value "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"120"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormReactiveValidate`),n("span",{class:"token punctuation"},","),a(`
      rules`),n("span",{class:"token punctuation"},","),a(`
      validateFormModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),In=n("h3",{id:"\u6307\u5B9A\u8868\u5355feedback\u72B6\u6001",tabindex:"-1"},[a("\u6307\u5B9A\u8868\u5355Feedback\u72B6\u6001 "),n("a",{class:"header-anchor",href:"#\u6307\u5B9A\u8868\u5355feedback\u72B6\u6001","aria-hidden":"true"},"#")],-1),Rn=n("p",null,[a("\u4F60\u53EF\u901A\u8FC7\u5BF9d-form-control\u8BBE\u7F6EfeedbackStatus\u624B\u52A8\u6307\u5B9A\u53CD\u9988\u72B6\u6001\u3002\u5F53\u524D\u5DF2\u652F\u6301\u72B6\u6001\uFF1A"),n("code",null,"success"),a("\u3001"),n("code",null,"error"),a("\u3001"),n("code",null,"pending"),a("\u3002")],-1),jn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormFeedback"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("pending"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nickname"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u6635\u79F0"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.nickname"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u6027\u522B"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sexSelectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Select your sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-select")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormFeedback "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      nickname`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee97'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" sexSelectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'\u7537'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'\u5973'"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormFeedback`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      sexSelectOptions`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`


`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Hn=n("p",null,"\u53EF\u901A\u8FC7\u5BF9\u5177\u540D\u63D2\u69FDsuffixTemplate\u5728d-form-control\u4E2D\u81EA\u5B9A\u4E49\u53CD\u9988\u72B6\u6001icon\u3002",-1),Pn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormFeedback2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("address"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u5730\u5740"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.address"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),a("suffixTemplate")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("right-o"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rgb(61, 204, 166)"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormFeedback2 "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      address`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6DF1\u5733\u5357\u5C71\u533A'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormFeedback2`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Wn=n("h3",{id:"\u8868\u5355\u534F\u540C\u9A8C\u8BC1",tabindex:"-1"},[a("\u8868\u5355\u534F\u540C\u9A8C\u8BC1 "),n("a",{class:"header-anchor",href:"#\u8868\u5355\u534F\u540C\u9A8C\u8BC1","aria-hidden":"true"},"#")],-1),$n=n("p",null,"\u5728\u4E00\u4E9B\u573A\u666F\u4E0B\uFF0C\u4F60\u7684\u591A\u4E2A\u8868\u5355\u7EC4\u4EF6\u4E92\u76F8\u4F9D\u8D56\uFF0C\u9700\u5171\u540C\u6821\u9A8C\uFF08\u5982\u6CE8\u518C\u573A\u666F\u4E2D\u7684\u5BC6\u7801\u8F93\u5165\u4E0E\u786E\u8BA4\u5BC6\u7801\uFF09\uFF0C\u901A\u8FC7\u81EA\u5B9A\u4E49\u6821\u9A8C\u5668\u5B9E\u73B0\u6821\u9A8C\u89C4\u5219\uFF08\u5C06\u5BC6\u7801\u8F93\u5165\u4E0E\u786E\u8BA4\u5BC6\u7801\u7684\u503C\u8FDB\u884C\u6BD4\u8F83\uFF09\u3002",-1),Zn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("togetherValidateForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTogetherValidate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("username"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u7528\u6237\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.username"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.userNameRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("password"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u5BC6\u7801"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.password"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.passwordRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("confirmPassword"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u786E\u8BA4\u5BC6\u7801"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.confirmPassword"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.confirmPasswordRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u63D0\u4EA4"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u91CD\u7F6E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-operation")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormTogetherValidate "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      username`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      password`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      confirmPassword`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" formRules "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
      userNameRule`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        rules`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          minlength`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6700\u5C0F6\u4E2A\u5B57\u7B26'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      passwordRule`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        rules`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          minlength`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6700\u5C0F6\u4E2A\u5B57\u7B26'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      confirmPasswordRule`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          updateOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        rules`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          minlength`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u6700\u5C0F6\u4E2A\u5B57\u7B26'"),n("span",{class:"token punctuation"},","),a(`
          validators`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'\u786E\u8BA4\u5BC6\u7801\u4E0E\u5BC6\u7801\u4E0D\u76F8\u7B26'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"==="),a(" formModel"),n("span",{class:"token punctuation"},"."),a(`password
              `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"}"),a(`
          `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"resetForm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTogetherValidate`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"resetFormFields"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSubmit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'@submit'"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormTogetherValidate`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
      formRules`),n("span",{class:"token punctuation"},","),a(`
      resetForm`),n("span",{class:"token punctuation"},","),a(`
      onSubmit`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Kn=n("h3",{id:"\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1",tabindex:"-1"},[a("\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1 "),n("a",{class:"header-anchor",href:"#\u8DE8\u7EC4\u4EF6\u9A8C\u8BC1","aria-hidden":"true"},"#")],-1),Gn=n("blockquote",null,[n("p",null,"todo")],-1),Jn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormWithComponent"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("\u5E74\u9F84"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a("defineComponent"),n("span",{class:"token punctuation"},","),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("props"),n("span",{class:"token punctuation"},","),a(" ctx")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dFormWithComponent "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"let"),a(" formModel "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormWithComponent`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".form-demo-form-operation"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".form-demo-demo-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 10px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Qn=Z(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-form\u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6Cdemo</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8868\u5355name\u5C5E\u6027\uFF0C\u8FDB\u884C\u8868\u5355\u63D0\u4EA4\u9A8C\u8BC1\u65F6\u5FC5\u9009\u3002</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>formData</td><td>object</td><td></td><td>\u5FC5\u9009\uFF0C\u8868\u5355\u6570\u636E</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>layout</td><td>&#39;horizontal&#39; |&#39;vertical&#39; |&#39;columns&#39;</td><td>&#39;horizontal&#39;</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8868\u5355\u7684\u6392\u5217\u65B9\u5F0F</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>labelSize</td><td>&#39;sm&#39; |&#39;lg&#39;</td><td></td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E label \u7684\u5360\u5BBD\uFF0C\u672A\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A 100px\uFF0Csm\u5BF9\u5E94 80px\uFF0Clg\u5BF9\u5E94 150px</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>labelAlign</td><td>&#39;start&#39; |&#39;center&#39; |&#39;end&#39;</td><td>&#39;start&#39;</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u6C34\u5E73\u5E03\u5C40\u65B9\u5F0F\u4E0B\uFF0Clabel \u5BF9\u9F50\u65B9\u5F0F</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>columnsClass</td><td>string</td><td></td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u591A\u5217\u8868\u5355\u6837\u5F0F</td><td><a href="#%E5%A4%9A%E5%88%97%E8%A1%A8%E5%8D%95">\u591A\u5217\u8868\u5355</a></td></tr><tr><td>rules</td><td>object</td><td></td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8868\u5355\u6821\u9A8C\u89C4\u5219</td><td><a href="#%E5%93%8D%E5%BA%94%E5%BC%8F%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81">\u54CD\u5E94\u5F0F\u8868\u5355\u9A8C\u8BC1</a></td></tr></tbody></table><p>d-form\u4E8B\u4EF6</p><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6Cdemo</th></tr></thead><tbody><tr><td>submit</td><td>() =&gt; void</td><td>\u53EF\u9009\uFF0C\u63D0\u4EA4\u8868\u5355\u4E8B\u4EF6</td><td><a href="#Form%E9%AA%8C%E8%AF%81%E4%B8%8E%E6%8F%90%E4%BA%A4">Form\u9A8C\u8BC1\u4E0E\u63D0\u4EA4</a></td></tr></tbody></table><p>d-form-item\u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6Cdemo</th></tr></thead><tbody><tr><td>prop</td><td>string</td><td></td><td>\u53EF\u9009\uFF0C\u6307\u5B9A\u9A8C\u8BC1\u8868\u5355\u9700\u9A8C\u8BC1\u7684\u5B57\u6BB5\uFF0C\u9A8C\u8BC1\u8868\u5355\u65F6\u5FC5\u9009\u8BE5\u5C5E\u6027</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>dHasFeedback</td><td>boolean</td><td>&#39;false&#39;</td><td>\u53EF\u9009\uFF0C\u8BBE\u7F6E\u5F53\u524D formControl \u662F\u5426\u663E\u793A\u53CD\u9988\u56FE\u6807</td><td><a href="#%E6%8C%87%E5%AE%9A%E8%A1%A8%E5%8D%95Feedback%E7%8A%B6%E6%80%81">\u6307\u5B9A\u8868\u5355Feedback\u72B6\u6001</a></td></tr></tbody></table><p>d-form-label\u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6Cdemo</th></tr></thead><tbody><tr><td>required</td><td>boolean</td><td>&#39;false&#39;</td><td>\u53EF\u9009\uFF0C\u8868\u5355\u9009\u9879\u662F\u5426\u5FC5\u586B</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>hasHelp</td><td>boolean</td><td>&#39;false&#39;</td><td>\u53EF\u9009\uFF0C\u8868\u5355\u9879\u662F\u5426\u9700\u8981\u5E2E\u52A9\u6307\u5F15</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>helpTips</td><td>string</td><td></td><td>\u53EF\u9009\uFF0C\u8868\u5355\u9879\u5E2E\u52A9\u6307\u5F15\u63D0\u793A\u5185\u5BB9\uFF0C\u9700\u914D\u5408 <code>hasHelp</code>\u4F7F\u7528\uFF0C\u4E14<code>helpTips</code>\u7684\u503C\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26\u4E32\u624D\u4F1A\u751F\u6548\u3002</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr></tbody></table><p>d-form-control\u53C2\u6570</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6Cdemo</th></tr></thead><tbody><tr><td>extraInfo</td><td>string</td><td></td><td>\u53EF\u9009\uFF0C\u9644\u4EF6\u4FE1\u606F\uFF0C\u4E00\u822C\u7528\u4E8E\u8865\u5145\u8868\u5355\u9009\u9879\u7684\u8BF4\u660E</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>feedbackStatus</td><td>boolean</td><td>&#39;false&#39;</td><td>\u53EF\u9009\uFF0C\u624B\u52A8\u6307\u5B9A\u5F53\u524D control \u72B6\u6001\u53CD\u9988</td><td><a href="#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95">\u57FA\u7840\u7528\u6CD5</a></td></tr><tr><td>suffixTemplate</td><td>string</td><td></td><td>\u53EF\u9009\uFF0C\u53EF\u4F20\u5165\u56FE\u6807\u6A21\u677F\u4F5C\u4E3A\u8F93\u5165\u6846\u540E\u7F00\uFF08\u901A\u8FC7\u63D2\u69FD\u4F20\u5165icon\u7EC4\u4EF6\uFF09</td><td><a href="#%E6%8C%87%E5%AE%9A%E8%A1%A8%E5%8D%95Feedback%E7%8A%B6%E6%80%81">\u6307\u5B9A\u8868\u5355Feedback\u72B6\u6001</a></td></tr></tbody></table><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h3><p>v-d-validate-rules</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6Cdemo</th></tr></thead><tbody><tr><td>rules</td><td>object</td><td></td><td>\u5FC5\u9009\uFF0C\u8868\u5355\u6821\u9A8C\u89C4\u5219\uFF0C\u66F4\u591A\u89C4\u5219\u53C2\u8003<a href="https://www.npmjs.com/package/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a></td><td><a href="#%E6%A8%A1%E6%9D%BF%E9%A9%B1%E5%8A%A8%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81">\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1</a></td></tr><tr><td>options</td><td></td><td></td><td>\u53EF\u9009\uFF0C\u914D\u7F6E\u9009\u9879</td><td><a href="#%E6%A8%A1%E6%9D%BF%E9%A9%B1%E5%8A%A8%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81">\u6A21\u677F\u9A71\u52A8\u8868\u5355\u9A8C\u8BC1</a></td></tr></tbody></table><blockquote><p>\u8BE5\u6307\u4EE4\u4EC5\u5728<code>d-form</code>\u6807\u7B7E\u6216<code>d-input</code>\u7B49\u8868\u5355\u7C7B\u7EC4\u4EF6\u4E0A\u4F7F\u7528\u6709\u6548\u3002</p></blockquote><ul><li>rules\u683C\u5F0F\u5982\u4E0B</li></ul><div class="language-js"><pre><code><span class="token punctuation">{</span><span class="token punctuation">[</span>validatorKey<span class="token punctuation">]</span><span class="token operator">:</span> validatorValue<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&#39;some tip messages.&#39;</span><span class="token punctuation">}</span>
</code></pre></div><p>\u5F53\u524DDevUI\u652F\u6301\u7684\u5185\u7F6E\u6821\u9A8C\u5668validatorKey\u6709\uFF1A<code>required</code>\u3001<code>minlength</code>\u3001<code>maxlength</code>\u3001<code>min</code>\u3001<code>max</code>\u3001<code>requiredTrue</code>\u3001<code>email</code>\u3001<code>pattern</code>\u3001<code>whitespace</code>\u3002\u66F4\u591A\u89C4\u5219\u53C2\u8003<a href="https://www.npmjs.com/package/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a>\u3002</p><br><ul><li>options\u652F\u6301\u4EE5\u4E0B\u5B57\u6BB5 <ul><li><p>errorStrategy\uFF0C\u9519\u8BEF\u66F4\u65B0\u7B56\u7565\uFF1A<code>dirty</code>\uFF08\u9ED8\u8BA4\uFF09\u3001<code>prestine</code></p></li><li><p>updateOn\uFF0C\u6821\u9A8C\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u6709\uFF1A<code>change</code>\uFF08\u9ED8\u8BA4\uFF09\u3001 <code>blur</code>\u3001 <code>input</code></p></li><li><p>popPosition\uFF0C\u81EA\u5B9A\u4E49<code>popover</code>\u5185\u5BB9\u5F39\u51FA\u65B9\u5411\u3002 \u9ED8\u8BA4\u4E3A<code>[&#39;right&#39;, &#39;bottom&#39;]</code>\uFF0C\u66F4\u591A\u53D6\u503C\u53C2\u8003popover\u7EC4\u4EF6\u3002</p></li></ul></li></ul><h3 id="\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3 &amp; \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><p>IForm</p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IForm</span> <span class="token punctuation">{</span>
  formData<span class="token operator">:</span> <span class="token builtin">any</span>
  labelData<span class="token operator">:</span> IFormLabel
  formMitt<span class="token operator">:</span> Emitter<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
  rules<span class="token operator">:</span> <span class="token builtin">any</span>
  columnsClass<span class="token operator">:</span> <span class="token builtin">string</span>
  messageShowType<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span> 
</code></pre></div><p>IFormLabel</p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IFormLabel</span> <span class="token punctuation">{</span>
  layout<span class="token operator">:</span> <span class="token builtin">string</span>
  labelSize<span class="token operator">:</span> <span class="token builtin">string</span>
  labelAlign<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><p>IFormItem</p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IFormItem</span> <span class="token punctuation">{</span>
  dHasFeedback<span class="token operator">:</span> <span class="token builtin">boolean</span>
  prop<span class="token operator">:</span> <span class="token builtin">string</span>
  formItemMitt<span class="token operator">:</span> Emitter<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
  <span class="token function">resetField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre></div><p>IFormControl</p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IFormControl</span> <span class="token punctuation">{</span>
  feedbackStatus<span class="token operator">:</span> <span class="token builtin">string</span>
  extraInfo<span class="token operator">:</span> <span class="token builtin">string</span>
  formItemMitt<span class="token operator">:</span> Emitter<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span>
  <span class="token function">resetField</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>
</code></pre></div>`,29);function Xn(u,o,s,t,D,v){const g=j("render-demo-0"),p=j("demo"),M=j("render-demo-1"),V=j("render-demo-2"),h=j("render-demo-3"),q=j("render-demo-4"),y=j("render-demo-5"),C=j("render-demo-6"),E=j("render-demo-7"),k=j("render-demo-8"),i=j("render-demo-9"),l=j("render-demo-10"),r=j("render-demo-11"),d=j("render-demo-12"),F=j("render-demo-13"),_=j("render-demo-14"),c=j("render-demo-15");return on(),sn("div",null,[un,x(p,{sourceCode:`<template>
  <d-form ref="dFormBasic" :formData="formModel" layout="vertical" @submit="onSubmitForm">
    <d-form-item prop="name">
      <d-form-label required hasHelp helpTips="\u53EF\u4EE5\u8F93\u5165\u4E2D\u6587\u540D\u5B57\u6216\u8005\u82F1\u6587\u540D\u5B57">\u59D3\u540D</d-form-label>
      <d-form-control extraInfo="\u8BF7\u8F93\u5165\u60A8\u7684\u540D\u5B57">
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>\u5E74\u9F84</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="city">
      <d-form-label>\u57CE\u5E02</d-form-label>
      <d-form-control>
        <d-select v-model="formModel.city" :options="selectOptions" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits">
      <d-form-label>\u559C\u6B22\u7684\u6C34\u679C</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"
          no-data="\u6682\u65E0\u6570\u636E"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label>\u6027\u522B</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">\u7537</d-radio>
        <d-radio v-model="formModel.sex" value="1">\u5973</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="workOn">
      <d-form-label>\u4E0B\u73ED\u4E86\u5417</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.workOn"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="interestedDomain">
      <d-form-label>\u5174\u8DA3\u9886\u57DF</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.interestedDomain" label="\u5174\u8DA3\u9886\u57DF">
          <d-checkbox label="\u524D\u7AEF" value="frontend" />
          <d-checkbox label="\u540E\u7AEF" value="backend" />
          <d-checkbox label="\u79FB\u52A8\u7AEF" value="mobileend" />
          <d-checkbox label="\u4EBA\u5DE5\u667A\u80FD" value="ai" />
          <d-checkbox label="\u7B97\u6CD5" value="algorithm" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref, nextTick} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormBasic = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
      city: '\u6DF1\u5733',
      loveFruits: [{name: '\u82F9\u679C'}],
      suggestionList: [{name: '\u82F9\u679C'}, {name: '\u897F\u74DC'}, {name: '\u6843\u5B50'}],
      sex: '0',
      workOn: true,
      interestedDomain: ['frontend'],
    });
    const selectOptions = reactive([
      '\u5317\u4EAC', '\u4E0A\u6D77', '\u5E7F\u5DDE', '\u6DF1\u5733'
    ]);
    const resetForm = () => {
      console.log('formData reset before', dFormBasic.value.formData);
      dFormBasic.value.resetFormFields();
      console.log('formData reset after', dFormBasic.value.formData);
    }
    const onSubmitForm = () => {
      console.log('onSubmitForm formModel', formModel)
    }
    return {
      dFormBasic,
      formModel,
      selectOptions,
      resetForm,
      onSubmitForm
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-btn {
  margin-right: 10px;
}

</style>

`},{highlight:S(()=>[cn]),default:S(()=>[x(g)]),_:1}),pn,ln,x(p,{sourceCode:`<template>
  <d-form ref="dFormHorizontal" :formData="formModel" layout="horizontal" labelSize="lg" @submit="onSubmitForm">
    <d-form-item prop="name">
      <d-form-label required>\u59D3\u540D</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>\u5E74\u9F84</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="city">
      <d-form-label>\u57CE\u5E02</d-form-label>
      <d-form-control>
        <d-select v-model="formModel.city" :options="selectOptions" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits">
      <d-form-label>\u559C\u6B22\u7684\u6C34\u679C</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"
          no-data="\u6682\u65E0\u6570\u636E"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label>\u6027\u522B</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">\u7537</d-radio>
        <d-radio v-model="formModel.sex" value="1">\u5973</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="workOn">
      <d-form-label>\u4E0B\u73ED\u4E86\u5417</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.workOn"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="interestedDomain">
      <d-form-label>\u5174\u8DA3\u9886\u57DF</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.interestedDomain" label="\u5174\u8DA3\u9886\u57DF">
          <d-checkbox label="\u524D\u7AEF" value="frontend" />
          <d-checkbox label="\u540E\u7AEF" value="backend" />
          <d-checkbox label="\u79FB\u52A8\u7AEF" value="mobileend" />
          <d-checkbox label="\u4EBA\u5DE5\u667A\u80FD" value="ai" />
          <d-checkbox label="\u7B97\u6CD5" value="algorithm" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-form-demo-demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormHorizontal = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
      city: '\u6DF1\u5733',
      loveFruits: [{name: '\u82F9\u679C'}],
      suggestionList: [{name: '\u82F9\u679C'}, {name: '\u897F\u74DC'}, {name: '\u6843\u5B50'}],
      sex: '0',
      workOn: true,
      interestedDomain: ['frontend'],
    });
    const selectOptions = reactive([
      '\u5317\u4EAC', '\u4E0A\u6D77', '\u5E7F\u5DDE', '\u6DF1\u5733'
    ]);
    const resetForm = () => {
      console.log('dFormHorizontal', dFormHorizontal.value);
      dFormHorizontal.value.resetFormFields();
    }
    const onSubmitForm = () => {
      console.log('onSubmitForm formModel', formModel)
    }
    return {
      dFormHorizontal,
      formModel,
      selectOptions,
      resetForm,
      onSubmitForm
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[rn]),default:S(()=>[x(M)]),_:1}),kn,dn,mn,x(p,{sourceCode:`<template>
  <d-button @click="openModal">\u6253\u5F00\u5F39\u7A97</d-button>
  <div class="form-demo-modal" v-show="showModal" @click="closeModal">
    <div class="form-demo-modal-content">
      <d-form ref="dFormModal" :formData="formModel" layout="horizontal" labelSize="lg" @submit="onSubmitForm">
        <d-form-item prop="name">
          <d-form-label required>\u59D3\u540D</d-form-label>
          <d-form-control>
            <d-input v-model="formModel.name" />
          </d-form-control>
        </d-form-item>
        <d-form-item prop="age">
          <d-form-label>\u5E74\u9F84</d-form-label>
          <d-form-control>
            <d-input v-model="formModel.age" />
          </d-form-control>
        </d-form-item>
        <d-form-item prop="city">
          <d-form-label>\u57CE\u5E02</d-form-label>
          <d-form-control>
            <d-select v-model="formModel.city" :options="selectOptions" />
          </d-form-control>
        </d-form-item>
        <d-form-item prop="loveFruits">
          <d-form-label>\u559C\u6B22\u7684\u6C34\u679C</d-form-label>
          <d-form-control>
            <d-tag-input
              v-model:tags="formModel.loveFruits"
              v-model:suggestionList="formModel.suggestionList"
              display-property="name"
              placeholder="\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"
              no-data="\u6682\u65E0\u6570\u636E"
            ></d-tag-input>
          </d-form-control>
        </d-form-item>
        <d-form-item prop="sex">
          <d-form-label>\u6027\u522B</d-form-label>
          <d-form-control>
            <d-radio v-model="formModel.sex" value="0">\u7537</d-radio>
            <d-radio v-model="formModel.sex" value="1">\u5973</d-radio>
          </d-form-control>
        </d-form-item>
        <d-form-item prop="workOn">
          <d-form-label>\u4E0B\u73ED\u4E86\u5417</d-form-label>
          <d-form-control>
            <d-switch v-model:checked="formModel.workOn"></d-switch>
          </d-form-control>
        </d-form-item>
        <d-form-item prop="interestedDomain">
          <d-form-label>\u5174\u8DA3\u9886\u57DF</d-form-label>
          <d-form-control>
            <d-checkbox-group v-model="formModel.interestedDomain" label="\u5174\u8DA3\u9886\u57DF">
              <d-checkbox label="\u524D\u7AEF" value="frontend" />
              <d-checkbox label="\u540E\u7AEF" value="backend" />
              <d-checkbox label="\u79FB\u52A8\u7AEF" value="mobileend" />
              <d-checkbox label="\u4EBA\u5DE5\u667A\u80FD" value="ai" />
              <d-checkbox label="\u7B97\u6CD5" value="algorithm" />
            </d-checkbox-group>
          </d-form-control>
        </d-form-item>
        <d-form-operation class="form-demo-form-operation">
          <d-button type="submit" class="form-demo-form-demo-demo-btn">\u63D0\u4EA4</d-button>
          <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
        </d-form-operation>
      </d-form>
    </div>
  </div>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormModal = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
      city: '\u6DF1\u5733',
      loveFruits: [{name: '\u82F9\u679C'}],
      suggestionList: [{name: '\u82F9\u679C'}, {name: '\u897F\u74DC'}, {name: '\u6843\u5B50'}],
      sex: '0',
      workOn: true,
      interestedDomain: ['frontend'],
    });
    const selectOptions = reactive([
      '\u5317\u4EAC', '\u4E0A\u6D77', '\u5E7F\u5DDE', '\u6DF1\u5733'
    ]);
    const resetForm = () => {
      console.log('dFormModal', dFormModal.value);
      dFormModal.value.resetFormFields();
    }
    const onSubmitForm = () => {
      console.log('onSubmitForm formModel', formModel)
    }
    const showModal = ref(false);
    const openModal = () => {
      showModal.value = true;
    }
    const closeModal = () => {
      showModal.value = false;
    }
    return {
      dFormModal,
      formModel,
      selectOptions,
      resetForm,
      onSubmitForm,
      showModal,
      openModal,
      closeModal
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}

.form-demo-modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-demo-modal-content {
  background-color: #fff;
  width: 40vw;
  padding: 20px;
}
</style>

`},{highlight:S(()=>[fn]),default:S(()=>[x(V)]),_:1}),Fn,gn,x(p,{sourceCode:`<template>
  <d-form ref="dFormColumn" layout="columns" columnsClass="u-1-3" :formData="formModel" @submit="onSubmitForm">
    <d-form-item prop="name" v-for="(item) in 6" :key="item" class="column-item">
      <d-form-label required hasHelp>\u59D3\u540D</d-form-label>
      <d-form-control>
        <d-input />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits" class="column-item">
      <d-form-label>\u559C\u6B22\u7684\u6C34\u679C</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="\u8BF7\u8F93\u5165\u559C\u6B22\u7684\u6C34\u679C"
          no-data="\u6682\u65E0\u6570\u636E"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex" class="column-item">
      <d-form-label>\u6027\u522B</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">\u7537</d-radio>
        <d-radio v-model="formModel.sex" value="1">\u5973</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="goOffWork" class="column-item">
      <d-form-label>\u4E0B\u73ED\u4E86\u5417</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.workOn"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="interestedDomain" class="column-item">
      <d-form-label>\u5174\u8DA3\u9886\u57DF</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.interestedDomain" label="\u5174\u8DA3\u9886\u57DF">
              <d-checkbox label="\u524D\u7AEF" value="frontend" />
              <d-checkbox label="\u540E\u7AEF" value="backend" />
              <d-checkbox label="\u79FB\u52A8\u7AEF" value="mobileend" />
              <d-checkbox label="\u4EBA\u5DE5\u667A\u80FD" value="ai" />
              <d-checkbox label="\u7B97\u6CD5" value="algorithm" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>

    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-form-demo-demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormColumn = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
      city: '\u6DF1\u5733',
      loveFruits: [{name: '\u82F9\u679C'}],
      suggestionList: [{name: '\u82F9\u679C'}, {name: '\u897F\u74DC'}, {name: '\u6843\u5B50'}],
      sex: '0',
      workOn: true,
      interestedDomain: ['frontend'],
    });
    const selectOptions = reactive([
      '\u5317\u4EAC', '\u4E0A\u6D77', '\u5E7F\u5DDE', '\u6DF1\u5733'
    ]);
    const resetForm = () => {
      console.log('dFormColumn', dFormColumn.value);
      dFormColumn.value.resetFormFields();
    }
    const onSubmitForm = () => {
      console.log('onSubmitForm formModel', formModel)
    }
    return {
      dFormColumn,
      formModel,
      selectOptions,
      resetForm,
      onSubmitForm
    }
  }
})
<\/script>

<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[vn]),default:S(()=>[x(h)]),_:1}),En,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate1" :formData="formModel" labelSize="lg" >
    <d-form-item prop="username">
      <d-form-label required>\u7528\u6237\u540D</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.username" v-d-validate-rules="[
          {
            maxlength: 8,
          },
          {
            pattern: /^[a-zA-Z\\d]+(\\s+[a-zA-Z\\d]+)*$/, 
            message: {
              'zh-cn': '\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26', 
              'en-us': 'The value cannot contain characters except uppercase and lowercase letters.', 
              default: '\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26'
            }
          }
        ]" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate1 = ref(null);
    let formModel = reactive({
      username: 'AlanLee',
    });

    return {
      dFormTemplateValidate1,
      formModel,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Cn]),default:S(()=>[x(q)]),_:1}),bn,An,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate2" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          validators: [
            {message: '\u4E0D\u5BF9\u5594\uFF01', validator: customValidator},
            {message: '\u7B54\u5BF9\u5566\uFF01', validator: customValidator2}
          ]
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          asyncValidators: [
            {message: '\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator},
            {message: '\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator2}
          ]
        }" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate2 = ref(null);
    let formModel = reactive({
      sum: '',
      asyncSum: '',
    });

    const customValidator = (rule, value) => {
      return value == "2"; // value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09
    }
    const customValidator2 = (rule, value) => {
      return value != "2"; // value\u503C\u4E0D\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\u201D\uFF09
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3"; // value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09
    }
    const customAsyncValidator2 = (rule, value) => {
      return value != "3"; // value\u503C\u4E0D\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\uFF08async\uFF09\u201D\uFF09
    }
    return {
      dFormTemplateValidate2,
      formModel,
      customValidator,
      customValidator2,
      customAsyncValidator,
      customAsyncValidator2,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Dn]),default:S(()=>[x(y)]),_:1}),_n,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate3" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F</d-form-label>
      <d-form-control extraInfo="updateOn\u4E3Achange\uFF0C\u5F53\u8F93\u5165\u5B8C\u6210\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219">
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          rules: {
            validators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01', validator: customValidator},
              {message: '\u7B54\u5BF9\u5566\uFF01', validator: customValidator2}
            ]
          },
          options: {
            updateOn: 'change'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09</d-form-label>
      <d-form-control extraInfo="updateOn\u4E3Ainput\uFF0C\u5F53\u6B63\u5728\u8F93\u5165\u65F6\uFF0C\u8F93\u5165\u6846\u7684\u503C\u53D1\u751F\u6539\u53D8\u3002\u6B64\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator},
              {message: '\u53EA\u80FD\u8F93\u5165\u6570\u5B57\uFF01', asyncValidator: customAsyncValidator2}
            ]
          },
          options: {
            updateOn: 'input'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="errorSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F</d-form-label>
      <d-form-control extraInfo="errorStrategy\u4E3Apristine\uFF0C\u521D\u59CB\u5316\u65F6\u89E6\u53D1\u9A8C\u8BC1\u89C4\u5219">
        <d-input v-model="formModel.errorSum" v-d-validate-rules="{
          errorStrategy: 'pristine',
          rules: {
            validators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01', validator: customValidator3},
            ]
          },
          options: {
            updateOn: 'input'
          }
        }" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate3 = ref(null);
    let formModel = reactive({
      sum: '',
      asyncSum: '',
      errorSum: '3',
    });

    const customValidator = (rule, value) => {
      return value == "2"; // value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09
    }
    const customValidator2 = (rule, value) => {
      return value != "2"; // value\u503C\u4E0D\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u7B54\u5BF9\u5566\uFF01\u201D\uFF09
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3"; // value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09
    }
    const customAsyncValidator2 = (rule, value) => {
      let reg = /^[\\d]+(\\s+[\\d]+)*$/;
      return reg.test(value); 
    }

    const customValidator3 = (rule, value) => {
      return value == "2"; // value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message
    }
    return {
      dFormTemplateValidate3,
      formModel,
      customValidator,
      customValidator2,
      customAsyncValidator,
      customAsyncValidator2,
      customValidator3,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Bn]),default:S(()=>[x(C)]),_:1}),yn,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate4" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 1 = \uFF1F</d-form-label>
      <d-form-control extraInfo="messageShowType\u4E3Anone\uFF0C\u4E0D\u663E\u793A\u63D0\u793A\u6587\u5B57">
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          messageShowType: 'none',
          rules: {
            validators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01', validator: customValidator}
            ]
          },
          options: {
            updateOn: 'change'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F</d-form-label>
      <d-form-control extraInfo="messageShowType\u4E3Apopover\uFF0C\u4F7F\u7528popover\u8FDB\u884C\u63D0\u793A">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator}
            ]
          },
          options: {
            updateOn: 'input',
            messageShowType: 'popover',
            popPosition: 'bottom'
          }
        }" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate4 = ref(null);
    let formModel = reactive({
      sum: '',
      asyncSum: '',
    });

    const customValidator = (rule, value) => {
      return value == "2"; // value\u503C\u7B49\u4E8E2\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\u201D\uFF09
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3"; // value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09
    }

    return {
      dFormTemplateValidate4,
      formModel,
      customValidator,
      customAsyncValidator,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[hn]),default:S(()=>[x(E)]),_:1}),Mn,Vn,x(p,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate5" :formData="formModel" labelSize="lg" >
    <d-form-item prop="asyncSum">
      <d-form-label>\u8BA1\u7B97\uFF1A1 + 2 = \uFF1F\uFF08async\uFF09</d-form-label>
      <d-form-control extraInfo="asyncDebounceTime\u4E3A500">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: '\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09', asyncValidator: customAsyncValidator}
            ]
          },
          options: {
            updateOn: 'input',
            asyncDebounceTime: 500
          }
        }" />
      </d-form-control>
    </d-form-item>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate5 = ref(null);
    let formModel = reactive({
      asyncSum: '',
    });

    const customAsyncValidator = (rule, value) => {
      return value == "3"; // value\u503C\u7B49\u4E8E3\u7684\u65F6\u5019\uFF0C\u6821\u9A8C\u89C4\u5219\u901A\u8FC7\uFF0C\u4E0D\u63D0\u793A\u672C\u89C4\u5219\u4E2D\u81EA\u5B9A\u4E49\u7684message\uFF08\u201C\u4E0D\u5BF9\u5594\uFF01\uFF08async\uFF09\u201D\uFF09
    }
    return {
      dFormTemplateValidate5,
      formModel,
      customAsyncValidator,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[qn]),default:S(()=>[x(k)]),_:1}),wn,xn,x(p,{sourceCode:`<template>
  <d-form name="userInfoForm" ref="dFormTemplateValidate6" :formData="formModel" labelSize="lg" @submit="onSubmit">
    <d-form-item prop="name">
      <d-form-label>\u59D3\u540D</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" v-d-validate-rules="{
          rules: {minlength: 2, message: '\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>\u5E74\u9F84</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" v-d-validate-rules="{
          rules: {min: 1, message: '\u5E74\u9F84\u9700\u5927\u4E8E0'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-form-demo-demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate6 = ref(null);
    let formModel = reactive({
      name: '',
      age: '',
    });

    const resetForm = () => {
      dFormTemplateValidate6.value.resetFormFields();
    }

    const onSubmit = (e) => {
      console.log('@submit')
    }

    return {
      dFormTemplateValidate6,
      formModel,
      onSubmit,
      resetForm,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Sn]),default:S(()=>[x(i)]),_:1}),Tn,On,x(p,{sourceCode:`<template>
  <d-form name="userInfoForm2" ref="dFormTemplateValidate7" :formData="formModel" labelSize="lg" @submit="onSubmit" v-d-validate-rules="{
          rules: {message: '\u8868\u5355\u9A8C\u8BC1\u672A\u901A\u8FC7'},
        }" messageShowType="text">
    <d-form-item prop="name">
      <d-form-label>\u59D3\u540D</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" v-d-validate-rules="{
          rules: {minlength: 2, message: '\u4E0D\u80FD\u5C0F\u4E8E2\u4E2A\u5B57\u7B26'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>\u5E74\u9F84</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" v-d-validate-rules="{
          rules: {min: 1, message: '\u5E74\u9F84\u9700\u5927\u4E8E0'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTemplateValidate7 = ref(null);
    let formModel = reactive({
      name: '',
      age: '',
    });

    const resetForm = () => {
      dFormTemplateValidate7.value.resetFormFields();
    }

    const onSubmit = (e) => {
      console.log('@submit')
    }

    return {
      dFormTemplateValidate7,
      formModel,
      onSubmit,
      resetForm,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Ln]),default:S(()=>[x(l)]),_:1}),Nn,zn,x(p,{sourceCode:`<template>
  <d-form ref="dFormReactiveValidate" :form-data="validateFormModel" :rules="rules">
    <d-form-item prop="name">
      <d-form-label :required="true" >\u59D3\u540D</d-form-label>
      <d-form-control>
        <d-input v-model="validateFormModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >\u5E74\u9F84</d-form-label>
      <d-form-control>
        <d-input v-model="validateFormModel.age" />
      </d-form-control>
    </d-form-item>
  </d-form>

</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormReactiveValidate = ref(null);
    let validateFormModel = reactive({
      name: 'AlanLee',
      age: '24',
    });
    const rules = reactive({
      name: [{ required: true, message: '\u4E0D\u80FD\u4E3A\u7A7A', trigger: 'blur'}],
      age: [
        { 
          required: true, 
          message: '\u5E74\u9F84\u4E0D\u80FD\u5C0F\u4E8E0', 
          trigger: 'blur',
          validator: (rule, value) => value > 0
        },
        { 
          required: true, 
          message: '\u5E74\u9F84\u4E0D\u80FD\u5927\u4E8E120', 
          trigger: 'input',
          validator: (rule, value) => value < 120
        }
      ],
    });

    return {
      dFormReactiveValidate,
      rules,
      validateFormModel,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Un]),default:S(()=>[x(r)]),_:1}),In,Rn,x(p,{sourceCode:`<template>
  <d-form ref="dFormFeedback" :form-data="formModel">
    <d-form-item prop="name">
      <d-form-label :required="true" >\u59D3\u540D</d-form-label>
      <d-form-control feedbackStatus="pending">
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="nickname">
      <d-form-label :required="true" >\u6635\u79F0</d-form-label>
      <d-form-control feedbackStatus="success">
        <d-input v-model="formModel.nickname" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >\u5E74\u9F84</d-form-label>
      <d-form-control feedbackStatus="error">
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label :required="true">\u6027\u522B</d-form-label>
      <d-form-control feedbackStatus="error">
        <d-select v-model="formModel.sex" :options="sexSelectOptions" placeholder="Select your sex"></d-select>
      </d-form-control>
    </d-form-item>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormFeedback = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      nickname: 'AlanLee97',
      age: '24',
      sex: '\u7537',
    });

    const sexSelectOptions = reactive([
      '\u7537', '\u5973'
    ])
    
    return {
      dFormFeedback,
      formModel,
      sexSelectOptions,
    }
  }
})
<\/script>


<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[jn]),default:S(()=>[x(d)]),_:1}),Hn,x(p,{sourceCode:`<template>
  <d-form ref="dFormFeedback2" :form-data="formModel">
    <d-form-item prop="address">
      <d-form-label :required="true" >\u5730\u5740</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.address" />
        <template v-slot:suffixTemplate>
          <d-icon name="right-o" color="rgb(61, 204, 166)" />
        </template>
      </d-form-control>
    </d-form-item>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormFeedback2 = ref(null);
    let formModel = reactive({
      address: '\u6DF1\u5733\u5357\u5C71\u533A',
    });

    return {
      dFormFeedback2,
      formModel,
    }
  }
})
<\/script>

`},{highlight:S(()=>[Pn]),default:S(()=>[x(F)]),_:1}),Wn,$n,x(p,{sourceCode:`<template>
  <d-form name="togetherValidateForm" ref="dFormTogetherValidate" :form-data="formModel" labelSize="lg" @submit="onSubmit">
    <d-form-item prop="username">
      <d-form-label :required="true" >\u7528\u6237\u540D</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.username" v-d-validate-rules="formRules.userNameRule" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="password">
      <d-form-label :required="true" >\u5BC6\u7801</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.password" v-d-validate-rules="formRules.passwordRule" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="confirmPassword">
      <d-form-label :required="true" >\u786E\u8BA4\u5BC6\u7801</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.confirmPassword" v-d-validate-rules="formRules.confirmPasswordRule" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-demo-btn">\u63D0\u4EA4</d-button>
      <d-button bsStyle="common" @click="resetForm">\u91CD\u7F6E</d-button>
    </d-form-operation>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormTogetherValidate = ref(null);
    let formModel = reactive({
      username: '',
      password: '',
      confirmPassword: '',
    });

    const formRules = {
      userNameRule: {
        rules: {
          minlength: 6,
          message: '\u6700\u5C0F6\u4E2A\u5B57\u7B26'
        }
      },
      passwordRule: {
        rules: {
          minlength: 6,
          message: '\u6700\u5C0F6\u4E2A\u5B57\u7B26'
        }
      },
      confirmPasswordRule: {
        options: {
          updateOn: 'input',
        },
        rules: {
          minlength: 6,
          message: '\u6700\u5C0F6\u4E2A\u5B57\u7B26',
          validators: [
            {
              message: '\u786E\u8BA4\u5BC6\u7801\u4E0E\u5BC6\u7801\u4E0D\u76F8\u7B26',
              validator: (rule, value) => {
                return value === formModel.password
              }
            }
          ]
        }
      }
    }

    const resetForm = () => {
      dFormTogetherValidate.value.resetFormFields();
    }

    const onSubmit = (e) => {
      console.log('@submit')
    }

    return {
      dFormTogetherValidate,
      formModel,
      formRules,
      resetForm,
      onSubmit,
    }
  }
})
<\/script>

<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Zn]),default:S(()=>[x(_)]),_:1}),Kn,Gn,x(p,{sourceCode:`<template>
  <d-form ref="dFormWithComponent" :form-data="formModel">
    <d-form-item prop="name">
      <d-form-label :required="true" >\u59D3\u540D</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >\u5E74\u9F84</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
  </d-form>
</template>

<script>
import {defineComponent, reactive, ref} from 'vue';

export default defineComponent({
  setup(props, ctx) {
    const dFormWithComponent = ref(null);
    let formModel = reactive({
      name: 'AlanLee',
      age: '24',
    });

    return {
      dFormWithComponent,
      formModel,
    }
  }
})
<\/script>

<style>
.form-demo-form-operation {
  display: flex;
  align-items: center;
}
.form-demo-demo-btn {
  margin-right: 10px;
}
</style>

`},{highlight:S(()=>[Jn]),default:S(()=>[x(c)]),_:1}),Qn])}var ta=tn(en,[["render",Xn]]);export{aa as __pageData,ta as default};
