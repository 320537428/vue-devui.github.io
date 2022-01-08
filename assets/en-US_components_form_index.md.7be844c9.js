var X=Object.defineProperty;var J=Object.getOwnPropertySymbols;var nn=Object.prototype.hasOwnProperty,an=Object.prototype.propertyIsEnumerable;var Z=(c,o,s)=>o in c?X(c,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[o]=s,E=(c,o)=>{for(var s in o||(o={}))nn.call(o,s)&&Z(c,s,o[s]);if(J)for(var s of J(o))an.call(o,s)&&Z(c,s,o[s]);return c};import{_ as tn,V as T,r as j,c as sn,b as A,w as O,a as $,d as n,e as a,o as on}from"./app.824968f6.js";const en={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,openBlock:w,createElementBlock:b}=T,v=c("Name"),l=c("Age"),S=c("City"),C=c("Favorite Fruits"),x=c("Sex"),D=c("Male"),q=c("Female"),_=c("Did you get off work?"),h=c("Interested Domain"),i=c("Submit"),k=c("Reset");function u(e,m){const V=o("d-form-label"),y=o("d-input"),f=o("d-form-control"),F=o("d-form-item"),P=o("d-select"),U=o("d-tag-input"),W=o("d-radio"),L=o("d-switch"),I=o("d-checkbox"),H=o("d-checkbox-group"),G=o("d-button"),B=o("d-form-operation"),N=o("d-form");return w(),b("div",null,[t(N,{ref:"dFormBasic",formData:e.formModel,layout:"vertical",onSubmit:e.onSubmitForm},{default:s(()=>[t(F,{prop:"name"},{default:s(()=>[t(V,{required:"",hasHelp:"",helpTips:"You can input name or username"},{default:s(()=>[v]),_:1}),t(f,{extraInfo:"Input your name"},{default:s(()=>[t(y,{modelValue:e.formModel.name,"onUpdate:modelValue":m[0]||(m[0]=z=>e.formModel.name=z)},null,8,["modelValue"])]),_:1})]),_:1}),t(F,{prop:"age"},{default:s(()=>[t(V,null,{default:s(()=>[l]),_:1}),t(f,null,{default:s(()=>[t(y,{modelValue:e.formModel.age,"onUpdate:modelValue":m[1]||(m[1]=z=>e.formModel.age=z)},null,8,["modelValue"])]),_:1})]),_:1}),t(F,{prop:"city"},{default:s(()=>[t(V,null,{default:s(()=>[S]),_:1}),t(f,null,{default:s(()=>[t(P,{modelValue:e.formModel.city,"onUpdate:modelValue":m[2]||(m[2]=z=>e.formModel.city=z),options:e.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(F,{prop:"loveFruits"},{default:s(()=>[t(V,null,{default:s(()=>[C]),_:1}),t(f,null,{default:s(()=>[t(U,{tags:e.formModel.loveFruits,"onUpdate:tags":m[3]||(m[3]=z=>e.formModel.loveFruits=z),suggestionList:e.formModel.suggestionList,"onUpdate:suggestionList":m[4]||(m[4]=z=>e.formModel.suggestionList=z),"display-property":"name",placeholder:"Input what fruits you like ","no-data":"No Data"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(F,{prop:"sex"},{default:s(()=>[t(V,null,{default:s(()=>[x]),_:1}),t(f,null,{default:s(()=>[t(W,{modelValue:e.formModel.sex,"onUpdate:modelValue":m[5]||(m[5]=z=>e.formModel.sex=z),value:"0"},{default:s(()=>[D]),_:1},8,["modelValue"]),t(W,{modelValue:e.formModel.sex,"onUpdate:modelValue":m[6]||(m[6]=z=>e.formModel.sex=z),value:"1"},{default:s(()=>[q]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(F,{prop:"workOn"},{default:s(()=>[t(V,null,{default:s(()=>[_]),_:1}),t(f,null,{default:s(()=>[t(L,{checked:e.formModel.workOn,"onUpdate:checked":m[7]||(m[7]=z=>e.formModel.workOn=z)},null,8,["checked"])]),_:1})]),_:1}),t(F,{prop:"interestedDomain"},{default:s(()=>[t(V,null,{default:s(()=>[h]),_:1}),t(f,null,{default:s(()=>[t(H,{modelValue:e.formModel.interestedDomain,"onUpdate:modelValue":m[8]||(m[8]=z=>e.formModel.interestedDomain=z),label:"Interested Domain"},{default:s(()=>[t(I,{label:"Frontend",value:"frontend"}),t(I,{label:"Backend",value:"backend"}),t(I,{label:"Mobileend",value:"mobileend"}),t(I,{label:"AI",value:"ai"}),t(I,{label:"Algorithm",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(B,{class:"form-demo-form-operation"},{default:s(()=>[t(G,{type:"submit",class:"form-demo-btn"},{default:s(()=>[i]),_:1}),t(G,{bsStyle:"common",onClick:e.resetForm},{default:s(()=>[k]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:g,nextTick:M}=T,p=r({setup(e,m){const V=g(null);let y=d({name:"AlanLee",age:"24",city:"Shenzhen",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermelon"},{name:"peach"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const f=d(["Beijing","Shanghai","Guangzhou","Shenzhen"]);return{dFormBasic:V,formModel:y,selectOptions:f,resetForm:()=>{console.log("formData reset before",V.value.formData),V.value.resetFormFields(),console.log("formData reset after",V.value.formData)},onSubmitForm:()=>{console.log("onSubmitForm formModel",y)}}}});return E({render:u},p)}(),"render-demo-1":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,openBlock:w,createElementBlock:b}=T,v=c("Name"),l=c("Age"),S=c("City"),C=c("Favorite Fruits"),x=c("Sex"),D=c("Male"),q=c("Female"),_=c("Did you get off work?"),h=c("Interested Domain"),i=c("Submit"),k=c("Reset");function u(p,e){const m=o("d-form-label"),V=o("d-input"),y=o("d-form-control"),f=o("d-form-item"),F=o("d-select"),P=o("d-tag-input"),U=o("d-radio"),W=o("d-switch"),L=o("d-checkbox"),I=o("d-checkbox-group"),H=o("d-button"),G=o("d-form-operation"),B=o("d-form");return w(),b("div",null,[t(B,{ref:"dFormHorizontal",formData:p.formModel,layout:"horizontal",labelSize:"lg",onSubmit:p.onSubmitForm},{default:s(()=>[t(f,{prop:"name"},{default:s(()=>[t(m,{required:""},{default:s(()=>[v]),_:1}),t(y,null,{default:s(()=>[t(V,{modelValue:p.formModel.name,"onUpdate:modelValue":e[0]||(e[0]=N=>p.formModel.name=N)},null,8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"age"},{default:s(()=>[t(m,null,{default:s(()=>[l]),_:1}),t(y,null,{default:s(()=>[t(V,{modelValue:p.formModel.age,"onUpdate:modelValue":e[1]||(e[1]=N=>p.formModel.age=N)},null,8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"city"},{default:s(()=>[t(m,null,{default:s(()=>[S]),_:1}),t(y,null,{default:s(()=>[t(F,{modelValue:p.formModel.city,"onUpdate:modelValue":e[2]||(e[2]=N=>p.formModel.city=N),options:p.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(f,{prop:"loveFruits"},{default:s(()=>[t(m,null,{default:s(()=>[C]),_:1}),t(y,null,{default:s(()=>[t(P,{tags:p.formModel.loveFruits,"onUpdate:tags":e[3]||(e[3]=N=>p.formModel.loveFruits=N),suggestionList:p.formModel.suggestionList,"onUpdate:suggestionList":e[4]||(e[4]=N=>p.formModel.suggestionList=N),"display-property":"name",placeholder:"Input what fruits you like ","no-data":"No Data"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(f,{prop:"sex"},{default:s(()=>[t(m,null,{default:s(()=>[x]),_:1}),t(y,null,{default:s(()=>[t(U,{modelValue:p.formModel.sex,"onUpdate:modelValue":e[5]||(e[5]=N=>p.formModel.sex=N),value:"0"},{default:s(()=>[D]),_:1},8,["modelValue"]),t(U,{modelValue:p.formModel.sex,"onUpdate:modelValue":e[6]||(e[6]=N=>p.formModel.sex=N),value:"1"},{default:s(()=>[q]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(f,{prop:"workOn"},{default:s(()=>[t(m,null,{default:s(()=>[_]),_:1}),t(y,null,{default:s(()=>[t(W,{checked:p.formModel.workOn,"onUpdate:checked":e[7]||(e[7]=N=>p.formModel.workOn=N)},null,8,["checked"])]),_:1})]),_:1}),t(f,{prop:"interestedDomain"},{default:s(()=>[t(m,null,{default:s(()=>[h]),_:1}),t(y,null,{default:s(()=>[t(I,{modelValue:p.formModel.interestedDomain,"onUpdate:modelValue":e[8]||(e[8]=N=>p.formModel.interestedDomain=N),label:"Interested Domain"},{default:s(()=>[t(L,{label:"Frontend",value:"frontend"}),t(L,{label:"Backend",value:"backend"}),t(L,{label:"Mobileend",value:"mobileend"}),t(L,{label:"AI",value:"ai"}),t(L,{label:"Algorithm",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(G,{class:"form-demo-form-operation"},{default:s(()=>[t(H,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[i]),_:1}),t(H,{bsStyle:"common",onClick:p.resetForm},{default:s(()=>[k]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:g}=T,M=r({setup(p,e){const m=g(null);let V=d({name:"AlanLee",age:"24",city:"Shenzhen",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermelon"},{name:"peach"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const y=d(["Beijing","Shanghai","Guangzhou","Shenzhen"]);return{dFormHorizontal:m,formModel:V,selectOptions:y,resetForm:()=>{console.log("dFormHorizontal",m.value),m.value.resetFormFields()},onSubmitForm:()=>{console.log("onSubmitForm formModel",V)}}}});return E({render:u},M)}(),"render-demo-2":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,createElementVNode:w,vShow:b,withDirectives:v,openBlock:l,createElementBlock:S}=T,C=c("Open Modal"),x={class:"form-demo-modal-content"},D=c("Name"),q=c("Age"),_=c("City"),h=c("Favorite Fruits"),i=c("Sex"),k=c("Male"),u=c("Female"),r=c("Did you get off work?"),d=c("Interested Domain"),g=c("Submit"),M=c("Reset");function p(f,F){const P=o("d-button"),U=o("d-form-label"),W=o("d-input"),L=o("d-form-control"),I=o("d-form-item"),H=o("d-select"),G=o("d-tag-input"),B=o("d-radio"),N=o("d-switch"),z=o("d-checkbox"),Y=o("d-checkbox-group"),K=o("d-form-operation"),Q=o("d-form");return l(),S("div",null,[t(P,{onClick:f.openModal},{default:s(()=>[C]),_:1},8,["onClick"]),v(w("div",{class:"form-demo-modal",onClick:F[9]||(F[9]=(...R)=>f.closeModal&&f.closeModal(...R))},[w("div",x,[t(Q,{ref:"dFormModal",formData:f.formModel,layout:"horizontal",labelSize:"lg",onSubmit:f.onSubmitForm},{default:s(()=>[t(I,{prop:"name"},{default:s(()=>[t(U,{required:""},{default:s(()=>[D]),_:1}),t(L,null,{default:s(()=>[t(W,{modelValue:f.formModel.name,"onUpdate:modelValue":F[0]||(F[0]=R=>f.formModel.name=R)},null,8,["modelValue"])]),_:1})]),_:1}),t(I,{prop:"age"},{default:s(()=>[t(U,null,{default:s(()=>[q]),_:1}),t(L,null,{default:s(()=>[t(W,{modelValue:f.formModel.age,"onUpdate:modelValue":F[1]||(F[1]=R=>f.formModel.age=R)},null,8,["modelValue"])]),_:1})]),_:1}),t(I,{prop:"city"},{default:s(()=>[t(U,null,{default:s(()=>[_]),_:1}),t(L,null,{default:s(()=>[t(H,{modelValue:f.formModel.city,"onUpdate:modelValue":F[2]||(F[2]=R=>f.formModel.city=R),options:f.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(I,{prop:"loveFruits"},{default:s(()=>[t(U,null,{default:s(()=>[h]),_:1}),t(L,null,{default:s(()=>[t(G,{tags:f.formModel.loveFruits,"onUpdate:tags":F[3]||(F[3]=R=>f.formModel.loveFruits=R),suggestionList:f.formModel.suggestionList,"onUpdate:suggestionList":F[4]||(F[4]=R=>f.formModel.suggestionList=R),"display-property":"name",placeholder:"Input what fruits you like ","no-data":"No Data"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(I,{prop:"sex"},{default:s(()=>[t(U,null,{default:s(()=>[i]),_:1}),t(L,null,{default:s(()=>[t(B,{modelValue:f.formModel.sex,"onUpdate:modelValue":F[5]||(F[5]=R=>f.formModel.sex=R),value:"0"},{default:s(()=>[k]),_:1},8,["modelValue"]),t(B,{modelValue:f.formModel.sex,"onUpdate:modelValue":F[6]||(F[6]=R=>f.formModel.sex=R),value:"1"},{default:s(()=>[u]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(I,{prop:"workOn"},{default:s(()=>[t(U,null,{default:s(()=>[r]),_:1}),t(L,null,{default:s(()=>[t(N,{checked:f.formModel.workOn,"onUpdate:checked":F[7]||(F[7]=R=>f.formModel.workOn=R)},null,8,["checked"])]),_:1})]),_:1}),t(I,{prop:"interestedDomain"},{default:s(()=>[t(U,null,{default:s(()=>[d]),_:1}),t(L,null,{default:s(()=>[t(Y,{modelValue:f.formModel.interestedDomain,"onUpdate:modelValue":F[8]||(F[8]=R=>f.formModel.interestedDomain=R),label:"Interested Domain"},{default:s(()=>[t(z,{label:"Frontend",value:"frontend"}),t(z,{label:"Backend",value:"backend"}),t(z,{label:"Mobileend",value:"mobileend"}),t(z,{label:"AI",value:"ai"}),t(z,{label:"Algorithm",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(K,{class:"form-demo-form-operation"},{default:s(()=>[t(P,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[g]),_:1}),t(P,{bsStyle:"common",onClick:f.resetForm},{default:s(()=>[M]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])],512),[[b,f.showModal]])])}const{defineComponent:e,reactive:m,ref:V}=T,y=e({setup(f,F){const P=V(null);let U=m({name:"AlanLee",age:"24",city:"Shenzhen",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermelon"},{name:"peach"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const W=m(["Beijing","Shanghai","Guangzhou","Shenzhen"]),L=()=>{console.log("dFormModal",P.value),P.value.resetFormFields()},I=()=>{console.log("onSubmitForm formModel",U)},H=V(!1);return{dFormModal:P,formModel:U,selectOptions:W,resetForm:L,onSubmitForm:I,showModal:H,openModal:()=>{H.value=!0},closeModal:()=>{H.value=!1}}}});return E({render:p},y)}(),"render-demo-3":function(){const{renderList:c,Fragment:o,openBlock:s,createElementBlock:t,createTextVNode:w,resolveComponent:b,withCtx:v,createVNode:l}=T,S=w("Name"),C=w("Favorite Fruits"),x=w("Sex"),D=w("Male"),q=w("Female"),_=w("Did you get off work?"),h=w("Interested Domain"),i=w("Submit"),k=w("Reset");function u(p,e){const m=b("d-form-label"),V=b("d-input"),y=b("d-form-control"),f=b("d-form-item"),F=b("d-tag-input"),P=b("d-radio"),U=b("d-switch"),W=b("d-checkbox"),L=b("d-checkbox-group"),I=b("d-button"),H=b("d-form-operation"),G=b("d-form");return s(),t("div",null,[l(G,{ref:"dFormColumn",layout:"columns",columnsClass:"u-1-3",formData:p.formModel,onSubmit:p.onSubmitForm},{default:v(()=>[(s(),t(o,null,c(6,B=>l(f,{prop:"name",key:B,class:"column-item"},{default:v(()=>[l(m,{required:"",hasHelp:""},{default:v(()=>[S]),_:1}),l(y,null,{default:v(()=>[l(V)]),_:1})]),_:2},1024)),64)),l(f,{prop:"loveFruits",class:"column-item"},{default:v(()=>[l(m,null,{default:v(()=>[C]),_:1}),l(y,null,{default:v(()=>[l(F,{tags:p.formModel.loveFruits,"onUpdate:tags":e[0]||(e[0]=B=>p.formModel.loveFruits=B),suggestionList:p.formModel.suggestionList,"onUpdate:suggestionList":e[1]||(e[1]=B=>p.formModel.suggestionList=B),"display-property":"name",placeholder:"Input what fruits you like ","no-data":"No Data"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),l(f,{prop:"sex",class:"column-item"},{default:v(()=>[l(m,null,{default:v(()=>[x]),_:1}),l(y,null,{default:v(()=>[l(P,{modelValue:p.formModel.sex,"onUpdate:modelValue":e[2]||(e[2]=B=>p.formModel.sex=B),value:"0"},{default:v(()=>[D]),_:1},8,["modelValue"]),l(P,{modelValue:p.formModel.sex,"onUpdate:modelValue":e[3]||(e[3]=B=>p.formModel.sex=B),value:"1"},{default:v(()=>[q]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(f,{prop:"goOffWork",class:"column-item"},{default:v(()=>[l(m,null,{default:v(()=>[_]),_:1}),l(y,null,{default:v(()=>[l(U,{checked:p.formModel.workOn,"onUpdate:checked":e[4]||(e[4]=B=>p.formModel.workOn=B)},null,8,["checked"])]),_:1})]),_:1}),l(f,{prop:"interestedDomain",class:"column-item"},{default:v(()=>[l(m,null,{default:v(()=>[h]),_:1}),l(y,null,{default:v(()=>[l(L,{modelValue:p.formModel.interestedDomain,"onUpdate:modelValue":e[5]||(e[5]=B=>p.formModel.interestedDomain=B),label:"Interested Domain"},{default:v(()=>[l(W,{label:"Frontend",value:"frontend"}),l(W,{label:"Backend",value:"backend"}),l(W,{label:"Mobileend",value:"mobileend"}),l(W,{label:"AI",value:"ai"}),l(W,{label:"Algorithm",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(H,{class:"form-demo-form-operation"},{default:v(()=>[l(I,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:v(()=>[i]),_:1}),l(I,{bsStyle:"common",onClick:p.resetForm},{default:v(()=>[k]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:r,reactive:d,ref:g}=T,M=r({setup(p,e){const m=g(null);let V=d({name:"AlanLee",age:"24",city:"Shenzhen",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermelon"},{name:"peach"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const y=d(["Beijing","Shanghai","Guangzhou","Shenzhen"]);return{dFormColumn:m,formModel:V,selectOptions:y,resetForm:()=>{console.log("dFormColumn",m.value),m.value.resetFormFields()},onSubmitForm:()=>{console.log("onSubmitForm formModel",V)}}}});return E({render:u},M)}(),"render-demo-4":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:w,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=c("Username");function C(h,i){const k=o("d-form-label"),u=o("d-input"),r=o("d-form-control"),d=o("d-form-item"),g=o("d-form"),M=w("d-validate-rules");return v(),l("div",null,[t(g,{ref:"dFormTemplateValidate1",formData:h.formModel,labelSize:"lg"},{default:s(()=>[t(d,{prop:"username"},{default:s(()=>[t(k,{required:""},{default:s(()=>[S]),_:1}),t(r,null,{default:s(()=>[b(t(u,{modelValue:h.formModel.username,"onUpdate:modelValue":i[0]||(i[0]=p=>h.formModel.username=p)},null,8,["modelValue"]),[[M,[{maxlength:8},{pattern:/^[a-zA-Z\d]+(\s+[a-zA-Z\d]+)*$/,message:{"zh-cn":"\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26","en-us":"The value cannot contain characters except uppercase and lowercase letters.",default:"The value cannot contain characters except uppercase and lowercase letters."}}]]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:x,reactive:D,ref:q}=T,_=x({setup(h,i){const k=q(null);let u=D({username:"AlanLee"});return{dFormTemplateValidate1:k,formModel:u}}});return E({render:C},_)}(),"render-demo-5":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:w,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=c("Calculate: 1 + 1 = ?"),C=c("Calculate: 1 + 2 = ? (async)");function x(i,k){const u=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),M=o("d-form"),p=w("d-validate-rules");return v(),l("div",null,[t(M,{ref:"dFormTemplateValidate2",formData:i.formModel,labelSize:"lg"},{default:s(()=>[t(g,{prop:"sum"},{default:s(()=>[t(u,null,{default:s(()=>[S]),_:1}),t(d,null,{default:s(()=>[b(t(r,{modelValue:i.formModel.sum,"onUpdate:modelValue":k[0]||(k[0]=e=>i.formModel.sum=e)},null,8,["modelValue"]),[[p,{validators:[{message:"Wrong!",validator:i.customValidator},{message:"Right!",validator:i.customValidator2}]}]])]),_:1})]),_:1}),t(g,{prop:"asyncSum"},{default:s(()=>[t(u,null,{default:s(()=>[C]),_:1}),t(d,null,{default:s(()=>[b(t(r,{modelValue:i.formModel.asyncSum,"onUpdate:modelValue":k[1]||(k[1]=e=>i.formModel.asyncSum=e)},null,8,["modelValue"]),[[p,{asyncValidators:[{message:"Wrong! (async)",asyncValidator:i.customAsyncValidator},{message:"Right! (async)",asyncValidator:i.customAsyncValidator2}]}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:D,reactive:q,ref:_}=T,h=D({setup(i,k){const u=_(null);let r=q({sum:"",asyncSum:""});return{dFormTemplateValidate2:u,formModel:r,customValidator:(e,m)=>m=="2",customValidator2:(e,m)=>m!="2",customAsyncValidator:(e,m)=>m=="3",customAsyncValidator2:(e,m)=>m!="3"}}});return E({render:x},h)}(),"render-demo-6":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:w,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=c("Calculate: 1 + 1 = ?"),C=c("Calculate: 1 + 2 = ? (async)"),x=c("Calculate: 1 + 1 = ?");function D(k,u){const r=o("d-form-label"),d=o("d-input"),g=o("d-form-control"),M=o("d-form-item"),p=o("d-form"),e=w("d-validate-rules");return v(),l("div",null,[t(p,{ref:"dFormTemplateValidate3",formData:k.formModel,labelSize:"lg"},{default:s(()=>[t(M,{prop:"sum"},{default:s(()=>[t(r,null,{default:s(()=>[S]),_:1}),t(g,{extraInfo:"updateOn is change, and when the input is complete, the value of the input box changes, triggering the validation rule"},{default:s(()=>[b(t(d,{modelValue:k.formModel.sum,"onUpdate:modelValue":u[0]||(u[0]=m=>k.formModel.sum=m)},null,8,["modelValue"]),[[e,{rules:{validators:[{message:"Wrong!",validator:k.customValidator},{message:"Right!",validator:k.customValidator2}]},options:{updateOn:"change"}}]])]),_:1})]),_:1}),t(M,{prop:"asyncSum"},{default:s(()=>[t(r,null,{default:s(()=>[C]),_:1}),t(g,{extraInfo:"updateOn is input, and the value of the input box changes while it is being entered, triggering the validation rule"},{default:s(()=>[b(t(d,{modelValue:k.formModel.asyncSum,"onUpdate:modelValue":u[1]||(u[1]=m=>k.formModel.asyncSum=m)},null,8,["modelValue"]),[[e,{rules:{asyncValidators:[{message:"Wrong! (async)",asyncValidator:k.customAsyncValidator},{message:"Only numbers can be entered!",asyncValidator:k.customAsyncValidator2}]},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(M,{prop:"errorSum"},{default:s(()=>[t(r,null,{default:s(()=>[x]),_:1}),t(g,{extraInfo:"errorStrategy is pristine, triggers validation rules at initialization"},{default:s(()=>[b(t(d,{modelValue:k.formModel.errorSum,"onUpdate:modelValue":u[2]||(u[2]=m=>k.formModel.errorSum=m)},null,8,["modelValue"]),[[e,{errorStrategy:"pristine",rules:{validators:[{message:"Wrong!",validator:k.customValidator3}]},options:{updateOn:"input"}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:q,reactive:_,ref:h}=T,i=q({setup(k,u){const r=h(null);let d=_({sum:"",asyncSum:"",errorSum:"3"});return{dFormTemplateValidate3:r,formModel:d,customValidator:(V,y)=>y=="2",customValidator2:(V,y)=>y!="2",customAsyncValidator:(V,y)=>y=="3",customAsyncValidator2:(V,y)=>/^[\d]+(\s+[\d]+)*$/.test(y),customValidator3:(V,y)=>y=="2"}}});return E({render:D},i)}(),"render-demo-7":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:w,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=c("Calculate: 1 + 1 = ?"),C=c("Calculate: 1 + 2 = ?");function x(i,k){const u=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),M=o("d-form"),p=w("d-validate-rules");return v(),l("div",null,[t(M,{ref:"dFormTemplateValidate4",formData:i.formModel,labelSize:"lg"},{default:s(()=>[t(g,{prop:"sum"},{default:s(()=>[t(u,null,{default:s(()=>[S]),_:1}),t(d,{extraInfo:"messageageShowType is none, no prompt text is displayed"},{default:s(()=>[b(t(r,{modelValue:i.formModel.sum,"onUpdate:modelValue":k[0]||(k[0]=e=>i.formModel.sum=e)},null,8,["modelValue"]),[[p,{messageShowType:"none",rules:{validators:[{message:"Wrong!",validator:i.customValidator}]},options:{updateOn:"change"}}]])]),_:1})]),_:1}),t(g,{prop:"asyncSum"},{default:s(()=>[t(u,null,{default:s(()=>[C]),_:1}),t(d,{extraInfo:"messageShowType is popover, prompted with Popover"},{default:s(()=>[b(t(r,{modelValue:i.formModel.asyncSum,"onUpdate:modelValue":k[1]||(k[1]=e=>i.formModel.asyncSum=e)},null,8,["modelValue"]),[[p,{rules:{asyncValidators:[{message:"Wrong! (async)",asyncValidator:i.customAsyncValidator}]},options:{updateOn:"input",messageShowType:"popover",popPosition:"bottom"}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:D,reactive:q,ref:_}=T,h=D({setup(i,k){const u=_(null);let r=q({sum:"",asyncSum:""});return{dFormTemplateValidate4:u,formModel:r,customValidator:(M,p)=>p=="2",customAsyncValidator:(M,p)=>p=="3"}}});return E({render:x},h)}(),"render-demo-8":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:w,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=c("Calculate: 1 + 2 = ? (async)");function C(h,i){const k=o("d-form-label"),u=o("d-input"),r=o("d-form-control"),d=o("d-form-item"),g=o("d-form"),M=w("d-validate-rules");return v(),l("div",null,[t(g,{ref:"dFormTemplateValidate5",formData:h.formModel,labelSize:"lg"},{default:s(()=>[t(d,{prop:"asyncSum"},{default:s(()=>[t(k,null,{default:s(()=>[S]),_:1}),t(r,{extraInfo:"asyncDebounceTime is 500ms"},{default:s(()=>[b(t(u,{modelValue:h.formModel.asyncSum,"onUpdate:modelValue":i[0]||(i[0]=p=>h.formModel.asyncSum=p)},null,8,["modelValue"]),[[M,{rules:{asyncValidators:[{message:"Wrong! (async)",asyncValidator:h.customAsyncValidator}]},options:{updateOn:"input",asyncDebounceTime:500}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:x,reactive:D,ref:q}=T,_=x({setup(h,i){const k=q(null);let u=D({asyncSum:""});return{dFormTemplateValidate5:k,formModel:u,customAsyncValidator:(d,g)=>g=="3"}}});return E({render:C},_)}(),"render-demo-9":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:w,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=c("Name"),C=c("Age"),x=c("Submit"),D=c("Reset");function q(u,r){const d=o("d-form-label"),g=o("d-input"),M=o("d-form-control"),p=o("d-form-item"),e=o("d-button"),m=o("d-form-operation"),V=o("d-form"),y=w("d-validate-rules");return v(),l("div",null,[t(V,{name:"userInfoForm",ref:"dFormTemplateValidate6",formData:u.formModel,labelSize:"lg",onSubmit:u.onSubmit},{default:s(()=>[t(p,{prop:"name"},{default:s(()=>[t(d,null,{default:s(()=>[S]),_:1}),t(M,null,{default:s(()=>[b(t(g,{modelValue:u.formModel.name,"onUpdate:modelValue":r[0]||(r[0]=f=>u.formModel.name=f)},null,8,["modelValue"]),[[y,{rules:{minlength:2,message:"cannot less than 2 character"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(p,{prop:"age"},{default:s(()=>[t(d,null,{default:s(()=>[C]),_:1}),t(M,null,{default:s(()=>[b(t(g,{modelValue:u.formModel.age,"onUpdate:modelValue":r[1]||(r[1]=f=>u.formModel.age=f)},null,8,["modelValue"]),[[y,{rules:{min:1,message:"age must be greater than 0"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(m,{class:"form-demo-form-operation"},{default:s(()=>[t(e,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[x]),_:1}),t(e,{bsStyle:"common",onClick:u.resetForm},{default:s(()=>[D]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:_,reactive:h,ref:i}=T,k=_({setup(u,r){const d=i(null);let g=h({name:"",age:""});return{dFormTemplateValidate6:d,formModel:g,onSubmit:e=>{console.log("@submit")},resetForm:()=>{d.value.resetFormFields()}}}});return E({render:q},k)}(),"render-demo-10":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:w,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=c("Name"),C=c("Age"),x=c("Submit"),D=c("Reset");function q(u,r){const d=o("d-form-label"),g=o("d-input"),M=o("d-form-control"),p=o("d-form-item"),e=o("d-button"),m=o("d-form-operation"),V=o("d-form"),y=w("d-validate-rules");return v(),l("div",null,[b(t(V,{name:"userInfoForm2",ref:"dFormTemplateValidate7",formData:u.formModel,labelSize:"lg",onSubmit:u.onSubmit,messageShowType:"text"},{default:s(()=>[t(p,{prop:"name"},{default:s(()=>[t(d,null,{default:s(()=>[S]),_:1}),t(M,null,{default:s(()=>[b(t(g,{modelValue:u.formModel.name,"onUpdate:modelValue":r[0]||(r[0]=f=>u.formModel.name=f)},null,8,["modelValue"]),[[y,{rules:{minlength:2,message:"cannot less than 2 character"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(p,{prop:"age"},{default:s(()=>[t(d,null,{default:s(()=>[C]),_:1}),t(M,null,{default:s(()=>[b(t(g,{modelValue:u.formModel.age,"onUpdate:modelValue":r[1]||(r[1]=f=>u.formModel.age=f)},null,8,["modelValue"]),[[y,{rules:{min:1,message:"age must be greater than 0"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(m,{class:"form-demo-form-operation"},{default:s(()=>[t(e,{type:"submit",class:"form-demo-demo-btn"},{default:s(()=>[x]),_:1}),t(e,{bsStyle:"common",onClick:u.resetForm},{default:s(()=>[D]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"]),[[y,{rules:{message:"validate fail"}}]])])}const{defineComponent:_,reactive:h,ref:i}=T,k=_({setup(u,r){const d=i(null);let g=h({name:"",age:""});return{dFormTemplateValidate7:d,formModel:g,onSubmit:e=>{console.log("@submit")},resetForm:()=>{d.value.resetFormFields()}}}});return E({render:q},k)}(),"render-demo-11":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,openBlock:w,createElementBlock:b}=T,v=c("Name"),l=c("Age");function S(_,h){const i=o("d-form-label"),k=o("d-input"),u=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return w(),b("div",null,[t(d,{ref:"dFormReactiveValidate","form-data":_.validateFormModel,rules:_.rules},{default:s(()=>[t(r,{prop:"name"},{default:s(()=>[t(i,{required:!0},{default:s(()=>[v]),_:1}),t(u,null,{default:s(()=>[t(k,{modelValue:_.validateFormModel.name,"onUpdate:modelValue":h[0]||(h[0]=g=>_.validateFormModel.name=g)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,{prop:"age"},{default:s(()=>[t(i,{required:!0},{default:s(()=>[l]),_:1}),t(u,null,{default:s(()=>[t(k,{modelValue:_.validateFormModel.age,"onUpdate:modelValue":h[1]||(h[1]=g=>_.validateFormModel.age=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data","rules"])])}const{defineComponent:C,reactive:x,ref:D}=T,q=C({setup(_,h){const i=D(null);let k=x({name:"AlanLee",age:"24"});const u=x({name:[{required:!0,message:"name field cannot be empty",trigger:"blur"}],age:[{required:!0,message:"age must be greater than 0",trigger:"blur",validator:(r,d)=>d>0},{required:!0,message:"age cannot greater than 120",trigger:"input",validator:(r,d)=>d<120}]});return{dFormReactiveValidate:i,rules:u,validateFormModel:k}}});return E({render:S},q)}(),"render-demo-12":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,openBlock:w,createElementBlock:b}=T,v=c("Name"),l=c("Nickname"),S=c("Age"),C=c("Sex");function x(i,k){const u=o("d-form-label"),r=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),M=o("d-select"),p=o("d-form");return w(),b("div",null,[t(p,{ref:"dFormFeedback","form-data":i.formModel},{default:s(()=>[t(g,{prop:"name"},{default:s(()=>[t(u,{required:!0},{default:s(()=>[v]),_:1}),t(d,{feedbackStatus:"pending"},{default:s(()=>[t(r,{modelValue:i.formModel.name,"onUpdate:modelValue":k[0]||(k[0]=e=>i.formModel.name=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"nickname"},{default:s(()=>[t(u,{required:!0},{default:s(()=>[l]),_:1}),t(d,{feedbackStatus:"success"},{default:s(()=>[t(r,{modelValue:i.formModel.nickname,"onUpdate:modelValue":k[1]||(k[1]=e=>i.formModel.nickname=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"age"},{default:s(()=>[t(u,{required:!0},{default:s(()=>[S]),_:1}),t(d,{feedbackStatus:"error"},{default:s(()=>[t(r,{modelValue:i.formModel.age,"onUpdate:modelValue":k[2]||(k[2]=e=>i.formModel.age=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"sex"},{default:s(()=>[t(u,{required:!0},{default:s(()=>[C]),_:1}),t(d,{feedbackStatus:"error"},{default:s(()=>[t(M,{modelValue:i.formModel.sex,"onUpdate:modelValue":k[3]||(k[3]=e=>i.formModel.sex=e),options:i.sexSelectOptions,placeholder:"Select your sex"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:D,reactive:q,ref:_}=T,h=D({setup(i,k){const u=_(null);let r=q({name:"AlanLee",nickname:"AlanLee97",age:"24",sex:"Male"});const d=q(["Male","Female"]);return{dFormFeedback:u,formModel:r,sexSelectOptions:d}}});return E({render:x},h)}(),"render-demo-13":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,openBlock:w,createElementBlock:b}=T,v=c("Address");function l(q,_){const h=o("d-form-label"),i=o("d-input"),k=o("d-icon"),u=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return w(),b("div",null,[t(d,{ref:"dFormFeedback2","form-data":q.formModel},{default:s(()=>[t(r,{prop:"address"},{default:s(()=>[t(h,{required:!0},{default:s(()=>[v]),_:1}),t(u,null,{suffixTemplate:s(()=>[t(k,{name:"right-o",color:"rgb(61, 204, 166)"})]),default:s(()=>[t(i,{modelValue:q.formModel.address,"onUpdate:modelValue":_[0]||(_[0]=g=>q.formModel.address=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:S,reactive:C,ref:x}=T,D=S({setup(q,_){const h=x(null);let i=C({address:"Nanshan distrit, Shenzhen"});return{dFormFeedback2:h,formModel:i}}});return E({render:l},D)}(),"render-demo-14":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:w,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=c("Username"),C=c("Password"),x=c("Confirm Password"),D=c("Submit"),q=c("Reset");function _(r,d){const g=o("d-form-label"),M=o("d-input"),p=o("d-form-control"),e=o("d-form-item"),m=o("d-button"),V=o("d-form-operation"),y=o("d-form"),f=w("d-validate-rules");return v(),l("div",null,[t(y,{name:"togetherValidateForm",ref:"dFormTogetherValidate","form-data":r.formModel,labelSize:"lg",onSubmit:r.onSubmit},{default:s(()=>[t(e,{prop:"username"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[S]),_:1}),t(p,null,{default:s(()=>[b(t(M,{modelValue:r.formModel.username,"onUpdate:modelValue":d[0]||(d[0]=F=>r.formModel.username=F)},null,8,["modelValue"]),[[f,r.formRules.userNameRule]])]),_:1})]),_:1}),t(e,{prop:"password"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[C]),_:1}),t(p,null,{default:s(()=>[b(t(M,{modelValue:r.formModel.password,"onUpdate:modelValue":d[1]||(d[1]=F=>r.formModel.password=F)},null,8,["modelValue"]),[[f,r.formRules.passwordRule]])]),_:1})]),_:1}),t(e,{prop:"confirmPassword"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[x]),_:1}),t(p,null,{default:s(()=>[b(t(M,{modelValue:r.formModel.confirmPassword,"onUpdate:modelValue":d[2]||(d[2]=F=>r.formModel.confirmPassword=F)},null,8,["modelValue"]),[[f,r.formRules.confirmPasswordRule]])]),_:1})]),_:1}),t(V,{class:"form-demo-form-operation"},{default:s(()=>[t(m,{type:"submit",class:"form-demo-demo-btn"},{default:s(()=>[D]),_:1}),t(m,{bsStyle:"common",onClick:r.resetForm},{default:s(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1},8,["form-data","onSubmit"])])}const{defineComponent:h,reactive:i,ref:k}=T,u=h({setup(r,d){const g=k(null);let M=i({username:"",password:"",confirmPassword:""});return{dFormTogetherValidate:g,formModel:M,formRules:{userNameRule:{rules:{minlength:6,message:"minimum 6 characters"}},passwordRule:{rules:{minlength:6,message:"minimum 6 characters"}},confirmPasswordRule:{options:{updateOn:"input"},rules:{minlength:6,message:"minimum 6 characters",validators:[{message:"the confirmation password does not match the password",validator:(V,y)=>y===M.password}]}}},resetForm:()=>{g.value.resetFormFields()},onSubmit:V=>{console.log("@submit")}}}});return E({render:_},u)}(),"render-demo-15":function(){const{createTextVNode:c,resolveComponent:o,withCtx:s,createVNode:t,openBlock:w,createElementBlock:b}=T,v=c("Name"),l=c("Age");function S(_,h){const i=o("d-form-label"),k=o("d-input"),u=o("d-form-control"),r=o("d-form-item"),d=o("d-form");return w(),b("div",null,[t(d,{ref:"dFormWithComponent","form-data":_.formModel},{default:s(()=>[t(r,{prop:"name"},{default:s(()=>[t(i,{required:!0},{default:s(()=>[v]),_:1}),t(u,null,{default:s(()=>[t(k,{modelValue:_.formModel.name,"onUpdate:modelValue":h[0]||(h[0]=g=>_.formModel.name=g)},null,8,["modelValue"])]),_:1})]),_:1}),t(r,{prop:"age"},{default:s(()=>[t(i,{required:!0},{default:s(()=>[l]),_:1}),t(u,null,{default:s(()=>[t(k,{modelValue:_.formModel.age,"onUpdate:modelValue":h[1]||(h[1]=g=>_.formModel.age=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:C,reactive:x,ref:D}=T,q=C({setup(_,h){const i=D(null);let k=x({name:"AlanLee",age:"24"});return{dFormWithComponent:i,formModel:k}}});return E({render:S},q)}()}},na='{"title":"Form","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to use","slug":"when-to-use"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":3,"title":"Label horizontal arrangement","slug":"label-horizontal-arrangement"},{"level":3,"title":"Pop-up form","slug":"pop-up-form"},{"level":3,"title":"Multiple Lists","slug":"multiple-lists"},{"level":3,"title":"Template driven form validation","slug":"template-driven-form-validation"},{"level":3,"title":"Reactive form validation","slug":"reactive-form-validation"},{"level":3,"title":"Feedback status of a specified form","slug":"feedback-status-of-a-specified-form"},{"level":3,"title":"Form collaboration verification","slug":"form-collaboration-verification"},{"level":3,"title":"Cross-component verification","slug":"cross-component-verification"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"Directives","slug":"directives"},{"level":3,"title":"Interface & Types","slug":"interface-types"}],"relativePath":"en-US/components/form/index.md","lastUpdated":1641649058901}',cn=$('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-hidden="true">#</a></h1><p>A form that supports data collection, verification, and submission, including check boxes, option boxes, text boxes, and drop-down list boxes.</p><h3 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Used for data collection, data verification, and data submission.</p><h3 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>In basic usage, the label is above the data box.</p>',6),pn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormBasic"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("vertical"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),a(),n("span",{class:"token attr-name"},"hasHelp"),a(),n("span",{class:"token attr-name"},"helpTips"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("You can input name or username"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Input your name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("City"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Favorite Fruits"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Input what fruits you like "),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("No Data"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Male"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Female"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Did you get off work?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("interestedDomain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Interested Domain"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Interested Domain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("AI"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ai"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
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
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermelon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      workOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      interestedDomain`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Guangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Shenzhen'"),a(`
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

`)])])],-1),ln=n("h3",{id:"label-horizontal-arrangement",tabindex:"-1"},[a("Label horizontal arrangement "),n("a",{class:"header-anchor",href:"#label-horizontal-arrangement","aria-hidden":"true"},"#")],-1),un=n("p",null,"Left-right layout of labels.",-1),rn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormHorizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("horizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("City"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Favorite Fruits"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Input what fruits you like "),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("No Data"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Male"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Female"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Did you get off work?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("interestedDomain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Interested Domain"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Interested Domain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("AI"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ai"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
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
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermelon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      workOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      interestedDomain`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Guangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Shenzhen'"),a(`
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

`)])])],-1),kn=n("h3",{id:"pop-up-form",tabindex:"-1"},[a("Pop-up form "),n("a",{class:"header-anchor",href:"#pop-up-form","aria-hidden":"true"},"#")],-1),dn=n("blockquote",null,[n("p",null,[a("todo "),n("br"),a(" To replace it with Modal component")])],-1),mn=n("p",null,"Pop-up form. The recommended pop-up box size is 400px, 550px, 700px, and 900px. The recommended aspect ratio is 16:9 or 3:2.",-1),fn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("openModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Open Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-modal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-show"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("closeModal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-modal-content"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormModal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("horizontal"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("city"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("City"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.city"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("selectOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Favorite Fruits"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
              `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Input what fruits you like "),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("No Data"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Male"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Female"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Did you get off work?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("interestedDomain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Interested Domain"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Interested Domain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("AI"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ai"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
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
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermelon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      workOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      interestedDomain`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Guangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Shenzhen'"),a(`
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

`)])])],-1),gn=n("h3",{id:"multiple-lists",tabindex:"-1"},[a("Multiple Lists "),n("a",{class:"header-anchor",href:"#multiple-lists","aria-hidden":"true"},"#")],-1),vn=n("p",null,[a("Multiple lists.The value of layout should be "),n("code",null,"columns"),a(` \uFF0Ctogether with the columnsclass attribute, and the value should be "u - [row] - [column]".For example, 'u-1-3' is 1 row and 3 columns.`)],-1),bn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormColumn"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"columnsClass"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("u-1-3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmitForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(item) in 6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),a(),n("span",{class:"token attr-name"},"hasHelp"),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loveFruits"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Favorite Fruits"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-tag-input")]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("tags")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.loveFruits"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("suggestionList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.suggestionList"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"display-property"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Input what fruits you like "),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"no-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("No Data"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-tag-input")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Male"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sex"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Female"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("goOffWork"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Did you get off work?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.workOn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-switch")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("column-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Interested Domain"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox-group")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.interestedDomain"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Interested Domain"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("frontend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("backend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mobileend"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("AI"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ai"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-checkbox")]),a(),n("span",{class:"token attr-name"},"label"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("algorithm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-checkbox-group")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
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
      city`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
      loveFruits`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      suggestionList`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermelon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a("name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      workOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      interestedDomain`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" selectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'Beijing'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Shanghai'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Guangzhou'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Shenzhen'"),a(`
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

`)])])],-1),hn=$('<h3 id="template-driven-form-validation" tabindex="-1">Template driven form validation <a class="header-anchor" href="#template-driven-form-validation" aria-hidden="true">#</a></h3><p>Use the <code>v-d-validate-rules</code> derective on form components such as <code>d-form</code> and <code>d-input</code> to configure verification rules.</p><h4 id="verify-a-single-element-use-the-built-in-validator-and-configure-error-message" tabindex="-1">Verify a single element, use the built-in validator, and configure error message <a class="header-anchor" href="#verify-a-single-element-use-the-built-in-validator-and-configure-error-message" aria-hidden="true">#</a></h4><p>The following built-in validators are currently supported by DevUI\uFF1A<code>required</code>,<code>minlength</code>,<code>maxlength</code>,<code>min</code>,<code>max</code>,<code>requiredTrue</code>,<code>email</code>,<code>pattern</code>,<code>whitespace</code>.</p><ul><li><p>To limit user input to not all spaces, use the <code>whitespace</code>built-in validator</p></li><li><p>Setting the maximum limit to the actual check value <code>+1</code> is a good way to limit the length of user input.</p></li><li><p>In addition to pattern, other built-in validators also provide built-in error alerts, which are used by default when you do not customize them.</p></li><li><p>The message configuration supports both string and object forms (supports internationalized term configurations such as <code>&#39;zh-cn&#39;</code>, which defaults to <code>&#39;default&#39;</code>).</p></li></ul>',5),_n=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate1"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("username"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},"required"),n("span",{class:"token punctuation"},">")]),a("Username"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
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
              default: `),n("span",{class:"token punctuation"},"'"),a("The value cannot contain characters except uppercase and lowercase letters."),n("span",{class:"token punctuation"},"'"),a(`
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

`)])])],-1),yn=n("h4",{id:"validate-individual-elements-customize-validators",tabindex:"-1"},[a("Validate individual elements, customize validators "),n("a",{class:"header-anchor",href:"#validate-individual-elements-customize-validators","aria-hidden":"true"},"#")],-1),Fn=n("p",null,[a("Custom validators, which pass in "),n("code",null,"validators"),a(" field configuration checking rules, can simply return "),n("code",null,"true | false "),a(" to identify whether the current check passes, to identify whether the current error is present, and to return an error message, suitable for dynamic error prompts. If it is an asynchronous validator, you can pass in the "),n("code",null,"asyncValidators"),a(" field to configure the validation rules.")],-1),wn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Calculate: 1 + 1 = ?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          validators: [
            {message: `),n("span",{class:"token punctuation"},"'"),a("Wrong!"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator},
            {message: `),n("span",{class:"token punctuation"},"'"),a("Right!"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator2}
          ]
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Calculate: 1 + 2 = ? (async)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          asyncValidators: [
            {message: `),n("span",{class:"token punctuation"},"'"),a("Wrong! (async)"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator},
            {message: `),n("span",{class:"token punctuation"},"'"),a("Right! (async)"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator2}
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
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(`
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

`)])])],-1),Mn=$('<h4 id="verify-a-single-element-the-update-policy-errorstrategy-is-incorrectly-configured-and-the-validation-moment-updateon-is-incorrectly-configured" tabindex="-1">Verify a single element. The update policy errorStrategy is incorrectly configured and the validation moment updateOn is incorrectly configured. <a class="header-anchor" href="#verify-a-single-element-the-update-policy-errorstrategy-is-incorrectly-configured-and-the-validation-moment-updateon-is-incorrectly-configured" aria-hidden="true">#</a></h4><ul><li><p>Set whether the <code>errorStrategy</code> property is checked when it is initialized</p><ul><li>Default configuration is <code>dirty</code>, check does not pass error prompt</li><li>If you need to throw an error at initialization, configure it as <code>pristine</code></li></ul></li><li><p>Set <code>updateOn</code>, specify the time of the check</p><ul><li>Checker <code>updateOn</code> based on the <code>updateOn</code> settings of the model you are binding, you can specify them through <code>options</code>, defaulting to <code>change</code></li><li>Optional values are also <code>blur, </code> <code>input</code>, <code>submit</code></li><li>Set to <code>submit</code>, then the check will be triggered when the form in which the element resides submits</li></ul></li></ul>',2),Vn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate3"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Calculate: 1 + 1 = ?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("updateOn is change, and when the input is complete, the value of the input box changes, triggering the validation rule"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("Wrong!"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator},
              {message: `),n("span",{class:"token punctuation"},"'"),a("Right!"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator2}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("change"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Calculate: 1 + 2 = ? (async)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("updateOn is input, and the value of the input box changes while it is being entered, triggering the validation rule"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("Wrong! (async)"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator},
              {message: `),n("span",{class:"token punctuation"},"'"),a("Only numbers can be entered!"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator2}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("errorSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Calculate: 1 + 1 = ?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("errorStrategy is pristine, triggers validation rules at initialization"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.errorSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          errorStrategy: `),n("span",{class:"token punctuation"},"'"),a("pristine"),n("span",{class:"token punctuation"},"'"),a(`,
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("Wrong!"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator3},
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
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"!="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator2"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"let"),a(" reg "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^[\\d]+(\\s+[\\d]+)*$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" reg"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(` 
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customValidator3"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(`
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

`)])])],-1),qn=$('<h4 id="verify-a-single-element-and-customize-management-message-prompts" tabindex="-1">Verify a single element and customize management message prompts <a class="header-anchor" href="#verify-a-single-element-and-customize-management-message-prompts" aria-hidden="true">#</a></h4><p>Configure <code>messageShowType</code> to choose how messages are automatically prompted, defaulting to <code>popover</code>.</p><ul><li>Set to <code>popover</code> error message will appear as <code>popover</code> when the element is focused.</li><li>Set to <code>text</code> error messages will automatically appear as text beneath the element (required with the form control container).</li><li>Error message set to <code>none</code> will not be automatically rendered to the view.</li><li>Configure <code>popPosition</code> in <code>options</code> to customize <code>popover</code> content pop-up direction when the message prompt is <code>popover</code>, defaulting to <code>[&#39;right&#39;,&#39;bottom&#39;]</code>. More values refer to the Popover component.</li></ul>',3),xn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate4"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Calculate: 1 + 1 = ?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("messageageShowType is none, no prompt text is displayed"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.sum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          messageShowType: `),n("span",{class:"token punctuation"},"'"),a("none"),n("span",{class:"token punctuation"},"'"),a(`,
          rules: {
            validators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("Wrong!"),n("span",{class:"token punctuation"},"'"),a(`, validator: customValidator}
            ]
          },
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("change"),n("span",{class:"token punctuation"},"'"),a(`
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Calculate: 1 + 2 = ?"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("messageShowType is popover, prompted with Popover"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("Wrong! (async)"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator}
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
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"customAsyncValidator"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(`
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

`)])])],-1),Sn=n("h4",{id:"verify-a-single-element-and-customize-asyncdebouncetime",tabindex:"-1"},[a("Verify a single element and customize asyncDebounceTime "),n("a",{class:"header-anchor",href:"#verify-a-single-element-and-customize-asyncdebouncetime","aria-hidden":"true"},"#")],-1),Cn=n("p",null,[a("For asynchronous validators, a default of 300ms debounce time is provided. Set "),n("code",null,"asyncDebounceTime"),a("(ms) display settings in options.")],-1),Dn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate5"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncSum"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Calculate: 1 + 2 = ? (async)"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"extraInfo"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("asyncDebounceTime is 500ms"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.asyncSum"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {
            asyncValidators: [
              {message: `),n("span",{class:"token punctuation"},"'"),a("Wrong! (async)"),n("span",{class:"token punctuation"},"'"),a(`, asyncValidator: customAsyncValidator}
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
      `),n("span",{class:"token keyword"},"return"),a(" value "),n("span",{class:"token operator"},"=="),a(),n("span",{class:"token string"},'"3"'),n("span",{class:"token punctuation"},";"),a(`
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

`)])])],-1),Tn=n("h4",{id:"form-validation-and-submission",tabindex:"-1"},[a("Form Validation and Submission "),n("a",{class:"header-anchor",href:"#form-validation-and-submission","aria-hidden":"true"},"#")],-1),An=n("p",null,[a("To validate when you click the submit button, you need to specify the name property and also bind the submit event of the "),n("code",null,"d-form"),a(" component to take effect.")],-1),On=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("userInfoForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate6"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {minlength: 2, message: `),n("span",{class:"token punctuation"},"'"),a("cannot less than 2 character"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {min: 1, message: `),n("span",{class:"token punctuation"},"'"),a("age must be greater than 0"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
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

`)])])],-1),zn=n("h4",{id:"form-verification-and-submission-user-registration-scenario",tabindex:"-1"},[a("Form verification and submission, user registration scenario "),n("a",{class:"header-anchor",href:"#form-verification-and-submission-user-registration-scenario","aria-hidden":"true"},"#")],-1),Bn=n("p",null,[a("For automatic error prompting, it is recommended that "),n("code",null,"messageShowType"),a(" be set uniformly at the "),n("code",null,"d-form"),a(" component in the form, and ref property must be set at the same time to take effect.")],-1),Nn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("userInfoForm2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTemplateValidate7"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":formData"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {message: `),n("span",{class:"token punctuation"},"'"),a("validate fail"),n("span",{class:"token punctuation"},"'"),a(`},
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"messageShowType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {minlength: 2, message: `),n("span",{class:"token punctuation"},"'"),a("cannot less than 2 character"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(`{
          rules: {min: 1, message: `),n("span",{class:"token punctuation"},"'"),a("age must be greater than 0"),n("span",{class:"token punctuation"},"'"),a(`},
          options: {
            updateOn: `),n("span",{class:"token punctuation"},"'"),a("input"),n("span",{class:"token punctuation"},"'"),a(`,
          }
        }`),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
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

`)])])],-1),In=n("h3",{id:"reactive-form-validation",tabindex:"-1"},[a("Reactive form validation "),n("a",{class:"header-anchor",href:"#reactive-form-validation","aria-hidden":"true"},"#")],-1),Ln=n("p",null,[a("Specify the validate rules in the "),n("code",null,"d-form"),a(" component and the value of "),n("code",null,"prop"),a(" in the "),n("code",null,"d-form-item"),a(" is the validate field name.")],-1),Rn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormReactiveValidate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("validateFormModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rules"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("validateFormModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
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
      name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(" required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(" message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name field cannot be empty'"),n("span",{class:"token punctuation"},","),a(" trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      age`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(` 
          required`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age must be greater than 0'"),n("span",{class:"token punctuation"},","),a(` 
          trigger`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" value "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"0"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(` 
          required`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age cannot greater than 120'"),n("span",{class:"token punctuation"},","),a(` 
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

`)])])],-1),Un=$('<h3 id="feedback-status-of-a-specified-form" tabindex="-1">Feedback status of a specified form <a class="header-anchor" href="#feedback-status-of-a-specified-form" aria-hidden="true">#</a></h3><p>You can manually specify the feedback status by setting <code>feedbackStatus</code> for <code>d-form-control</code>. Currently, the following statuses are supported: <code>success</code>, <code>error</code>, and <code>pending</code>.</p>',2),En=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormFeedback"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("pending"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("nickname"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Nickname"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("success"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.nickname"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),a(),n("span",{class:"token attr-name"},"feedbackStatus"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("error"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.age"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sex"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Sex"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
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
      sex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" sexSelectOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Female'"),a(`
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

`)])])],-1),jn=n("p",null,[a("You can customize the feedback status icon in "),n("code",null,"d-form-control"),a(" by "),n("code",null,"suffixTemplate"),a(" to a named slot.")],-1),Pn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormFeedback2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("address"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Address"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
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
      address`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanshan distrit, Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dFormFeedback2`),n("span",{class:"token punctuation"},","),a(`
      formModel`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`)])])],-1),Wn=n("h3",{id:"form-collaboration-verification",tabindex:"-1"},[a("Form collaboration verification "),n("a",{class:"header-anchor",href:"#form-collaboration-verification","aria-hidden":"true"},"#")],-1),Hn=n("p",null,"In some scenarios, your multiple form components depend on each other and need to be checked together (for example, password entry and confirmation in registration scenarios) and implemented with a custom checker (comparing password entry with the value of confirmation).",-1),Gn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("togetherValidateForm"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormTogetherValidate"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"labelSize"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@submit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSubmit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("username"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Username"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.username"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.userNameRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("password"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Password"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.password"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.passwordRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("confirmPassword"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Confirm Password"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.confirmPassword"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-d-validate-rules"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formRules.confirmPasswordRule"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-operation")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-form-operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("form-demo-demo-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Submit"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"bsStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("common"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("resetForm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Reset"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
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
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'minimum 6 characters'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      passwordRule`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        rules`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          minlength`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'minimum 6 characters'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      confirmPasswordRule`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        options`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          updateOn`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        rules`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          minlength`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'minimum 6 characters'"),n("span",{class:"token punctuation"},","),a(`
          validators`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              message`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'the confirmation password does not match the password'"),n("span",{class:"token punctuation"},","),a(`
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

`)])])],-1),$n=n("h3",{id:"cross-component-verification",tabindex:"-1"},[a("Cross-component verification "),n("a",{class:"header-anchor",href:"#cross-component-verification","aria-hidden":"true"},"#")],-1),Jn=n("blockquote",null,[n("p",null,"todo")],-1),Zn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dFormWithComponent"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":form-data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("formModel.name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-control")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-item")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-item")]),a(),n("span",{class:"token attr-name"},"prop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("age"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-form-label")]),a(),n("span",{class:"token attr-name"},":required"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},">")]),a("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-form-label")]),n("span",{class:"token punctuation"},">")]),a(`
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

`)])])],-1),Yn=$(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-form Attribute</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>Optional, set the form name property. Required for form submission validation.</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>formData</td><td>object</td><td></td><td>Required, form data</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>layout</td><td>&#39;horizontal&#39; |&#39;vertical&#39; |&#39;columns&#39;</td><td>&#39;horizontal&#39;</td><td>Optional, set the way the forms are arranged</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>labelSize</td><td>&#39;sm&#39; |&#39;lg&#39;</td><td></td><td>Optional, set the width of label, no default of 100px, sm is 80px,lg is 150px</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>labelAlign</td><td>&#39;start&#39; |&#39;center&#39; |&#39;end&#39;</td><td>&#39;start&#39;</td><td>Optional, set horizontal layout, label alignment</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>columnsClass</td><td>string</td><td></td><td>Optional, set multi-list style</td><td><a href="#multiple-lists">Multiple Lists</a></td></tr><tr><td>rules</td><td>object</td><td></td><td>Optional, set form validate rules</td><td><a href="#reactive-form-validation">Reactive form validation</a></td></tr></tbody></table><p>d-form Event</p><table><thead><tr><th>Event Name</th><th>Type</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>submit</td><td>() =&gt; void</td><td>Optional, submit form events</td><td>[Form Validation and Submission](#Form Validation and Submission)</td></tr></tbody></table><p>d-form-item Attribute</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>prop</td><td>string</td><td></td><td>Optional, specify the field to validate the form and select this property when validating the form</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>dHasFeedback</td><td>boolean</td><td>&#39;false&#39;</td><td>Optional, set whether the current form-control displays feedback icons</td><td><a href="#feedback-status-of-a-specified-form">Feedback status of a specified form</a></td></tr></tbody></table><p>d-form-label Attribute</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>required</td><td>boolean</td><td>&#39;false&#39;</td><td>Optional, is form item required</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>hasHelp</td><td>boolean</td><td>&#39;false&#39;</td><td>Optional, Whether form items need help</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>helpTips</td><td>string</td><td></td><td>Optional, the form item help guide prompt content needs to be used with <code>hasHelp</code>, and the value of <code>helpTips</code> cannot be an empty string for it to take effect.</td><td><a href="#basic-usage">Basic usage</a></td></tr></tbody></table><p>d-form-control Attribute</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>extraInfo</td><td>string</td><td></td><td>Optional, additional information, usually used to supplement the description of form options</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>feedbackStatus</td><td>boolean</td><td>&#39;false&#39;</td><td>Optional, manually specify current control status feedback</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>suffixTemplate</td><td>string</td><td></td><td>Optional, pass an icon template as input box suffix (passing in icon component via slot)</td><td><a href="#feedback-status-of-a-specified-form">Feedback status of a specified form</a></td></tr></tbody></table><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h3><p>v-d-validate-rules</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>rules</td><td>object</td><td></td><td>Required, form validate rules, see <a href="https://www.npmjs.com/package/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a> for more rules</td><td><a href="#template-driven-form-validation">Template driven form validation</a></td></tr><tr><td>options</td><td>object</td><td></td><td>Optional, options</td><td><a href="#template-driven-form-validation">Template driven form validation</a></td></tr></tbody></table><blockquote><p>This directive is only valid on form class components such as the <code>d-form</code> label or <code>d-input</code>.</p></blockquote><ul><li>The rules are written as follows</li></ul><div class="language-js"><pre><code><span class="token punctuation">{</span><span class="token punctuation">[</span>validatorKey<span class="token punctuation">]</span><span class="token operator">:</span> validatorValue<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token string">&#39;some tip messages.&#39;</span><span class="token punctuation">}</span>
</code></pre></div><p>The current DevUI-supported built-in validator keys are: <code>required</code>, <code>minlength</code>, <code>maxlength</code>, <code>min</code>, <code>max</code>, <code>requiredTrue</code>, <code>email</code>, <code>pattern</code>, <code>whitespace</code>. More rule references <a href="https://www.npmjs.com/package/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a>.</p><br><ul><li>options <ul><li><p>errorStrategy\uFF0Cerror update policy\uFF1A<code>dirty</code>(default)\u3001<code>prestine</code></p></li><li><p>updateOn\uFF0Ccheck timing\uFF0Coptional value\uFF1A<code>change</code>(default)\u3001 <code>blur</code>\u3001 <code>input</code></p></li><li><p>popPosition\uFF0Ccustomize <code>popover</code> content pop-up direction. The default is <code>[&#39;right&#39;,&#39;bottom&#39;]</code>, and more values refer to the Popover component.</p></li></ul></li></ul><h3 id="interface-types" tabindex="-1">Interface &amp; Types <a class="header-anchor" href="#interface-types" aria-hidden="true">#</a></h3><p>IForm</p><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IForm</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,29);function Kn(c,o,s,t,w,b){const v=j("render-demo-0"),l=j("demo"),S=j("render-demo-1"),C=j("render-demo-2"),x=j("render-demo-3"),D=j("render-demo-4"),q=j("render-demo-5"),_=j("render-demo-6"),h=j("render-demo-7"),i=j("render-demo-8"),k=j("render-demo-9"),u=j("render-demo-10"),r=j("render-demo-11"),d=j("render-demo-12"),g=j("render-demo-13"),M=j("render-demo-14"),p=j("render-demo-15");return on(),sn("div",null,[cn,A(l,{sourceCode:`<template>
  <d-form ref="dFormBasic" :formData="formModel" layout="vertical" @submit="onSubmitForm">
    <d-form-item prop="name">
      <d-form-label required hasHelp helpTips="You can input name or username">Name</d-form-label>
      <d-form-control extraInfo="Input your name">
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="city">
      <d-form-label>City</d-form-label>
      <d-form-control>
        <d-select v-model="formModel.city" :options="selectOptions" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits">
      <d-form-label>Favorite Fruits</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="Input what fruits you like "
          no-data="No Data"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label>Sex</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">Male</d-radio>
        <d-radio v-model="formModel.sex" value="1">Female</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="workOn">
      <d-form-label>Did you get off work?</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.workOn"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="interestedDomain">
      <d-form-label>Interested Domain</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.interestedDomain" label="Interested Domain">
          <d-checkbox label="Frontend" value="frontend" />
          <d-checkbox label="Backend" value="backend" />
          <d-checkbox label="Mobileend" value="mobileend" />
          <d-checkbox label="AI" value="ai" />
          <d-checkbox label="Algorithm" value="algorithm" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-btn">Submit</d-button>
      <d-button bsStyle="common" @click="resetForm">Reset</d-button>
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
      city: 'Shenzhen',
      loveFruits: [{name: 'apple'}],
      suggestionList: [{name: 'apple'}, {name: 'watermelon'}, {name: 'peach'}],
      sex: '0',
      workOn: true,
      interestedDomain: ['frontend'],
    });
    const selectOptions = reactive([
      'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'
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

`},{highlight:O(()=>[pn]),default:O(()=>[A(v)]),_:1}),ln,un,A(l,{sourceCode:`<template>
  <d-form ref="dFormHorizontal" :formData="formModel" layout="horizontal" labelSize="lg" @submit="onSubmitForm">
    <d-form-item prop="name">
      <d-form-label required>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="city">
      <d-form-label>City</d-form-label>
      <d-form-control>
        <d-select v-model="formModel.city" :options="selectOptions" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits">
      <d-form-label>Favorite Fruits</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="Input what fruits you like "
          no-data="No Data"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label>Sex</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">Male</d-radio>
        <d-radio v-model="formModel.sex" value="1">Female</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="workOn">
      <d-form-label>Did you get off work?</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.workOn"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="interestedDomain">
      <d-form-label>Interested Domain</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.interestedDomain" label="Interested Domain">
          <d-checkbox label="Frontend" value="frontend" />
          <d-checkbox label="Backend" value="backend" />
          <d-checkbox label="Mobileend" value="mobileend" />
          <d-checkbox label="AI" value="ai" />
          <d-checkbox label="Algorithm" value="algorithm" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-form-demo-demo-btn">Submit</d-button>
      <d-button bsStyle="common" @click="resetForm">Reset</d-button>
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
      city: 'Shenzhen',
      loveFruits: [{name: 'apple'}],
      suggestionList: [{name: 'apple'}, {name: 'watermelon'}, {name: 'peach'}],
      sex: '0',
      workOn: true,
      interestedDomain: ['frontend'],
    });
    const selectOptions = reactive([
      'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'
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

`},{highlight:O(()=>[rn]),default:O(()=>[A(S)]),_:1}),kn,dn,mn,A(l,{sourceCode:`<template>
  <d-button @click="openModal">Open Modal</d-button>
  <div class="form-demo-modal" v-show="showModal" @click="closeModal">
    <div class="form-demo-modal-content">
      <d-form ref="dFormModal" :formData="formModel" layout="horizontal" labelSize="lg" @submit="onSubmitForm">
        <d-form-item prop="name">
          <d-form-label required>Name</d-form-label>
          <d-form-control>
            <d-input v-model="formModel.name" />
          </d-form-control>
        </d-form-item>
        <d-form-item prop="age">
          <d-form-label>Age</d-form-label>
          <d-form-control>
            <d-input v-model="formModel.age" />
          </d-form-control>
        </d-form-item>
        <d-form-item prop="city">
          <d-form-label>City</d-form-label>
          <d-form-control>
            <d-select v-model="formModel.city" :options="selectOptions" />
          </d-form-control>
        </d-form-item>
        <d-form-item prop="loveFruits">
          <d-form-label>Favorite Fruits</d-form-label>
          <d-form-control>
            <d-tag-input
              v-model:tags="formModel.loveFruits"
              v-model:suggestionList="formModel.suggestionList"
              display-property="name"
              placeholder="Input what fruits you like "
              no-data="No Data"
            ></d-tag-input>
          </d-form-control>
        </d-form-item>
        <d-form-item prop="sex">
          <d-form-label>Sex</d-form-label>
          <d-form-control>
            <d-radio v-model="formModel.sex" value="0">Male</d-radio>
            <d-radio v-model="formModel.sex" value="1">Female</d-radio>
          </d-form-control>
        </d-form-item>
        <d-form-item prop="workOn">
          <d-form-label>Did you get off work?</d-form-label>
          <d-form-control>
            <d-switch v-model:checked="formModel.workOn"></d-switch>
          </d-form-control>
        </d-form-item>
        <d-form-item prop="interestedDomain">
          <d-form-label>Interested Domain</d-form-label>
          <d-form-control>
            <d-checkbox-group v-model="formModel.interestedDomain" label="Interested Domain">
              <d-checkbox label="Frontend" value="frontend" />
              <d-checkbox label="Backend" value="backend" />
              <d-checkbox label="Mobileend" value="mobileend" />
              <d-checkbox label="AI" value="ai" />
              <d-checkbox label="Algorithm" value="algorithm" />
            </d-checkbox-group>
          </d-form-control>
        </d-form-item>
        <d-form-operation class="form-demo-form-operation">
          <d-button type="submit" class="form-demo-form-demo-demo-btn">Submit</d-button>
          <d-button bsStyle="common" @click="resetForm">Reset</d-button>
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
      city: 'Shenzhen',
      loveFruits: [{name: 'apple'}],
      suggestionList: [{name: 'apple'}, {name: 'watermelon'}, {name: 'peach'}],
      sex: '0',
      workOn: true,
      interestedDomain: ['frontend'],
    });
    const selectOptions = reactive([
      'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'
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

`},{highlight:O(()=>[fn]),default:O(()=>[A(C)]),_:1}),gn,vn,A(l,{sourceCode:`<template>
  <d-form ref="dFormColumn" layout="columns" columnsClass="u-1-3" :formData="formModel" @submit="onSubmitForm">
    <d-form-item prop="name" v-for="(item) in 6" :key="item" class="column-item">
      <d-form-label required hasHelp>Name</d-form-label>
      <d-form-control>
        <d-input />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="loveFruits" class="column-item">
      <d-form-label>Favorite Fruits</d-form-label>
      <d-form-control>
        <d-tag-input
          v-model:tags="formModel.loveFruits"
          v-model:suggestionList="formModel.suggestionList"
          display-property="name"
          placeholder="Input what fruits you like "
          no-data="No Data"
        ></d-tag-input>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex" class="column-item">
      <d-form-label>Sex</d-form-label>
      <d-form-control>
        <d-radio v-model="formModel.sex" value="0">Male</d-radio>
        <d-radio v-model="formModel.sex" value="1">Female</d-radio>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="goOffWork" class="column-item">
      <d-form-label>Did you get off work?</d-form-label>
      <d-form-control>
        <d-switch v-model:checked="formModel.workOn"></d-switch>
      </d-form-control>
    </d-form-item>
    <d-form-item prop="interestedDomain" class="column-item">
      <d-form-label>Interested Domain</d-form-label>
      <d-form-control>
        <d-checkbox-group v-model="formModel.interestedDomain" label="Interested Domain">
              <d-checkbox label="Frontend" value="frontend" />
              <d-checkbox label="Backend" value="backend" />
              <d-checkbox label="Mobileend" value="mobileend" />
              <d-checkbox label="AI" value="ai" />
              <d-checkbox label="Algorithm" value="algorithm" />
        </d-checkbox-group>
      </d-form-control>
    </d-form-item>

    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-form-demo-demo-btn">Submit</d-button>
      <d-button bsStyle="common" @click="resetForm">Reset</d-button>
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
      city: 'Shenzhen',
      loveFruits: [{name: 'apple'}],
      suggestionList: [{name: 'apple'}, {name: 'watermelon'}, {name: 'peach'}],
      sex: '0',
      workOn: true,
      interestedDomain: ['frontend'],
    });
    const selectOptions = reactive([
      'Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen'
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

`},{highlight:O(()=>[bn]),default:O(()=>[A(x)]),_:1}),hn,A(l,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate1" :formData="formModel" labelSize="lg" >
    <d-form-item prop="username">
      <d-form-label required>Username</d-form-label>
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
              default: 'The value cannot contain characters except uppercase and lowercase letters.'
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

`},{highlight:O(()=>[_n]),default:O(()=>[A(D)]),_:1}),yn,Fn,A(l,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate2" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>Calculate: 1 + 1 = ?</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          validators: [
            {message: 'Wrong!', validator: customValidator},
            {message: 'Right!', validator: customValidator2}
          ]
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>Calculate: 1 + 2 = ? (async)</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          asyncValidators: [
            {message: 'Wrong! (async)', asyncValidator: customAsyncValidator},
            {message: 'Right! (async)', asyncValidator: customAsyncValidator2}
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
      return value == "2";
    }
    const customValidator2 = (rule, value) => {
      return value != "2";
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3";
    }
    const customAsyncValidator2 = (rule, value) => {
      return value != "3";
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

`},{highlight:O(()=>[wn]),default:O(()=>[A(q)]),_:1}),Mn,A(l,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate3" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>Calculate: 1 + 1 = ?</d-form-label>
      <d-form-control extraInfo="updateOn is change, and when the input is complete, the value of the input box changes, triggering the validation rule">
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          rules: {
            validators: [
              {message: 'Wrong!', validator: customValidator},
              {message: 'Right!', validator: customValidator2}
            ]
          },
          options: {
            updateOn: 'change'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>Calculate: 1 + 2 = ? (async)</d-form-label>
      <d-form-control extraInfo="updateOn is input, and the value of the input box changes while it is being entered, triggering the validation rule">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: 'Wrong! (async)', asyncValidator: customAsyncValidator},
              {message: 'Only numbers can be entered!', asyncValidator: customAsyncValidator2}
            ]
          },
          options: {
            updateOn: 'input'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="errorSum">
      <d-form-label>Calculate: 1 + 1 = ?</d-form-label>
      <d-form-control extraInfo="errorStrategy is pristine, triggers validation rules at initialization">
        <d-input v-model="formModel.errorSum" v-d-validate-rules="{
          errorStrategy: 'pristine',
          rules: {
            validators: [
              {message: 'Wrong!', validator: customValidator3},
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
      return value == "2";
    }
    const customValidator2 = (rule, value) => {
      return value != "2";
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3";
    }
    const customAsyncValidator2 = (rule, value) => {
      let reg = /^[\\d]+(\\s+[\\d]+)*$/;
      return reg.test(value); 
    }

    const customValidator3 = (rule, value) => {
      return value == "2";
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

`},{highlight:O(()=>[Vn]),default:O(()=>[A(_)]),_:1}),qn,A(l,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate4" :formData="formModel" labelSize="lg" >
    <d-form-item prop="sum">
      <d-form-label>Calculate: 1 + 1 = ?</d-form-label>
      <d-form-control extraInfo="messageageShowType is none, no prompt text is displayed">
        <d-input v-model="formModel.sum" v-d-validate-rules="{
          messageShowType: 'none',
          rules: {
            validators: [
              {message: 'Wrong!', validator: customValidator}
            ]
          },
          options: {
            updateOn: 'change'
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="asyncSum">
      <d-form-label>Calculate: 1 + 2 = ?</d-form-label>
      <d-form-control extraInfo="messageShowType is popover, prompted with Popover">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: 'Wrong! (async)', asyncValidator: customAsyncValidator}
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
      return value == "2";
    }

    const customAsyncValidator = (rule, value) => {
      return value == "3";
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

`},{highlight:O(()=>[xn]),default:O(()=>[A(h)]),_:1}),Sn,Cn,A(l,{sourceCode:`<template>
  <d-form ref="dFormTemplateValidate5" :formData="formModel" labelSize="lg" >
    <d-form-item prop="asyncSum">
      <d-form-label>Calculate: 1 + 2 = ? (async)</d-form-label>
      <d-form-control extraInfo="asyncDebounceTime is 500ms">
        <d-input v-model="formModel.asyncSum" v-d-validate-rules="{
          rules: {
            asyncValidators: [
              {message: 'Wrong! (async)', asyncValidator: customAsyncValidator}
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
      return value == "3";
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

`},{highlight:O(()=>[Dn]),default:O(()=>[A(i)]),_:1}),Tn,An,A(l,{sourceCode:`<template>
  <d-form name="userInfoForm" ref="dFormTemplateValidate6" :formData="formModel" labelSize="lg" @submit="onSubmit">
    <d-form-item prop="name">
      <d-form-label>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" v-d-validate-rules="{
          rules: {minlength: 2, message: 'cannot less than 2 character'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" v-d-validate-rules="{
          rules: {min: 1, message: 'age must be greater than 0'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-form-demo-demo-btn">Submit</d-button>
      <d-button bsStyle="common" @click="resetForm">Reset</d-button>
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

`},{highlight:O(()=>[On]),default:O(()=>[A(k)]),_:1}),zn,Bn,A(l,{sourceCode:`<template>
  <d-form name="userInfoForm2" ref="dFormTemplateValidate7" :formData="formModel" labelSize="lg" @submit="onSubmit" v-d-validate-rules="{
          rules: {message: 'validate fail'},
        }" messageShowType="text">
    <d-form-item prop="name">
      <d-form-label>Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" v-d-validate-rules="{
          rules: {minlength: 2, message: 'cannot less than 2 character'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label>Age</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.age" v-d-validate-rules="{
          rules: {min: 1, message: 'age must be greater than 0'},
          options: {
            updateOn: 'input',
          }
        }" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-demo-btn">Submit</d-button>
      <d-button bsStyle="common" @click="resetForm">Reset</d-button>
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

`},{highlight:O(()=>[Nn]),default:O(()=>[A(u)]),_:1}),In,Ln,A(l,{sourceCode:`<template>
  <d-form ref="dFormReactiveValidate" :form-data="validateFormModel" :rules="rules">
    <d-form-item prop="name">
      <d-form-label :required="true" >Name</d-form-label>
      <d-form-control>
        <d-input v-model="validateFormModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >Age</d-form-label>
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
      name: [{ required: true, message: 'name field cannot be empty', trigger: 'blur'}],
      age: [
        { 
          required: true, 
          message: 'age must be greater than 0', 
          trigger: 'blur',
          validator: (rule, value) => value > 0
        },
        { 
          required: true, 
          message: 'age cannot greater than 120', 
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

`},{highlight:O(()=>[Rn]),default:O(()=>[A(r)]),_:1}),Un,A(l,{sourceCode:`<template>
  <d-form ref="dFormFeedback" :form-data="formModel">
    <d-form-item prop="name">
      <d-form-label :required="true" >Name</d-form-label>
      <d-form-control feedbackStatus="pending">
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="nickname">
      <d-form-label :required="true" >Nickname</d-form-label>
      <d-form-control feedbackStatus="success">
        <d-input v-model="formModel.nickname" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >Age</d-form-label>
      <d-form-control feedbackStatus="error">
        <d-input v-model="formModel.age" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="sex">
      <d-form-label :required="true">Sex</d-form-label>
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
      sex: 'Male',
    });

    const sexSelectOptions = reactive([
      'Male', 'Female'
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

`},{highlight:O(()=>[En]),default:O(()=>[A(d)]),_:1}),jn,A(l,{sourceCode:`<template>
  <d-form ref="dFormFeedback2" :form-data="formModel">
    <d-form-item prop="address">
      <d-form-label :required="true" >Address</d-form-label>
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
      address: 'Nanshan distrit, Shenzhen',
    });

    return {
      dFormFeedback2,
      formModel,
    }
  }
})
<\/script>

`},{highlight:O(()=>[Pn]),default:O(()=>[A(g)]),_:1}),Wn,Hn,A(l,{sourceCode:`<template>
  <d-form name="togetherValidateForm" ref="dFormTogetherValidate" :form-data="formModel" labelSize="lg" @submit="onSubmit">
    <d-form-item prop="username">
      <d-form-label :required="true" >Username</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.username" v-d-validate-rules="formRules.userNameRule" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="password">
      <d-form-label :required="true" >Password</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.password" v-d-validate-rules="formRules.passwordRule" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="confirmPassword">
      <d-form-label :required="true" >Confirm Password</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.confirmPassword" v-d-validate-rules="formRules.confirmPasswordRule" />
      </d-form-control>
    </d-form-item>
    <d-form-operation class="form-demo-form-operation">
      <d-button type="submit" class="form-demo-demo-btn">Submit</d-button>
      <d-button bsStyle="common" @click="resetForm">Reset</d-button>
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
          message: 'minimum 6 characters'
        }
      },
      passwordRule: {
        rules: {
          minlength: 6,
          message: 'minimum 6 characters'
        }
      },
      confirmPasswordRule: {
        options: {
          updateOn: 'input',
        },
        rules: {
          minlength: 6,
          message: 'minimum 6 characters',
          validators: [
            {
              message: 'the confirmation password does not match the password',
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

`},{highlight:O(()=>[Gn]),default:O(()=>[A(M)]),_:1}),$n,Jn,A(l,{sourceCode:`<template>
  <d-form ref="dFormWithComponent" :form-data="formModel">
    <d-form-item prop="name">
      <d-form-label :required="true" >Name</d-form-label>
      <d-form-control>
        <d-input v-model="formModel.name" />
      </d-form-control>
    </d-form-item>
    <d-form-item prop="age">
      <d-form-label :required="true" >Age</d-form-label>
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

`},{highlight:O(()=>[Zn]),default:O(()=>[A(p)]),_:1}),Yn])}var aa=tn(en,[["render",Kn]]);export{na as __pageData,aa as default};
