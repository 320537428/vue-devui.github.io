var X=Object.defineProperty;var J=Object.getOwnPropertySymbols;var nn=Object.prototype.hasOwnProperty,an=Object.prototype.propertyIsEnumerable;var Z=(p,o,s)=>o in p?X(p,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):p[o]=s,E=(p,o)=>{for(var s in o||(o={}))nn.call(o,s)&&Z(p,s,o[s]);if(J)for(var s of J(o))an.call(o,s)&&Z(p,s,o[s]);return p};import{_ as tn,V as T,r as j,c as sn,a as A,w as O,b as $,d as n,e as a,o as on}from"./app.4054ec9d.js";const en={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,openBlock:M,createElementBlock:b}=T,v=p("Name"),l=p("Age"),S=p("City"),C=p("Favorite Fruits"),x=p("Sex"),D=p("Male"),q=p("Female"),h=p("Did you get off work?"),y=p("Interested Domain"),r=p("Submit"),i=p("Reset");function f(e,k){const V=o("d-form-label"),F=o("d-input"),m=o("d-form-control"),_=o("d-form-item"),P=o("d-select"),U=o("d-tag-input"),W=o("d-radio"),L=o("d-switch"),I=o("d-checkbox"),H=o("d-checkbox-group"),G=o("d-button"),B=o("d-form-operation"),N=o("d-form");return M(),b("div",null,[t(N,{ref:"dFormBasic",formData:e.formModel,layout:"vertical",onSubmit:e.onSubmitForm},{default:s(()=>[t(_,{prop:"name"},{default:s(()=>[t(V,{required:"",hasHelp:"",helpTips:"You can input name or username"},{default:s(()=>[v]),_:1}),t(m,{extraInfo:"Input your name"},{default:s(()=>[t(F,{modelValue:e.formModel.name,"onUpdate:modelValue":k[0]||(k[0]=z=>e.formModel.name=z)},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{prop:"age"},{default:s(()=>[t(V,null,{default:s(()=>[l]),_:1}),t(m,null,{default:s(()=>[t(F,{modelValue:e.formModel.age,"onUpdate:modelValue":k[1]||(k[1]=z=>e.formModel.age=z)},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{prop:"city"},{default:s(()=>[t(V,null,{default:s(()=>[S]),_:1}),t(m,null,{default:s(()=>[t(P,{modelValue:e.formModel.city,"onUpdate:modelValue":k[2]||(k[2]=z=>e.formModel.city=z),options:e.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(_,{prop:"loveFruits"},{default:s(()=>[t(V,null,{default:s(()=>[C]),_:1}),t(m,null,{default:s(()=>[t(U,{tags:e.formModel.loveFruits,"onUpdate:tags":k[3]||(k[3]=z=>e.formModel.loveFruits=z),suggestionList:e.formModel.suggestionList,"onUpdate:suggestionList":k[4]||(k[4]=z=>e.formModel.suggestionList=z),"display-property":"name",placeholder:"Input what fruits you like ","no-data":"No Data"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(_,{prop:"sex"},{default:s(()=>[t(V,null,{default:s(()=>[x]),_:1}),t(m,null,{default:s(()=>[t(W,{modelValue:e.formModel.sex,"onUpdate:modelValue":k[5]||(k[5]=z=>e.formModel.sex=z),value:"0"},{default:s(()=>[D]),_:1},8,["modelValue"]),t(W,{modelValue:e.formModel.sex,"onUpdate:modelValue":k[6]||(k[6]=z=>e.formModel.sex=z),value:"1"},{default:s(()=>[q]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(_,{prop:"workOn"},{default:s(()=>[t(V,null,{default:s(()=>[h]),_:1}),t(m,null,{default:s(()=>[t(L,{checked:e.formModel.workOn,"onUpdate:checked":k[7]||(k[7]=z=>e.formModel.workOn=z)},null,8,["checked"])]),_:1})]),_:1}),t(_,{prop:"interestedDomain"},{default:s(()=>[t(V,null,{default:s(()=>[y]),_:1}),t(m,null,{default:s(()=>[t(H,{modelValue:e.formModel.interestedDomain,"onUpdate:modelValue":k[8]||(k[8]=z=>e.formModel.interestedDomain=z),label:"Interested Domain"},{default:s(()=>[t(I,{label:"Frontend",value:"frontend"}),t(I,{label:"Backend",value:"backend"}),t(I,{label:"Mobileend",value:"mobileend"}),t(I,{label:"AI",value:"ai"}),t(I,{label:"Algorithm",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(B,{class:"form-demo-form-operation"},{default:s(()=>[t(G,{type:"submit",class:"form-demo-btn"},{default:s(()=>[r]),_:1}),t(G,{bsStyle:"common",onClick:e.resetForm},{default:s(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:u,reactive:d,ref:g,nextTick:w}=T,c=u({setup(e,k){const V=g(null);let F=d({name:"AlanLee",age:"24",city:"Shenzhen",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermelon"},{name:"peach"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const m=d(["Beijing","Shanghai","Guangzhou","Shenzhen"]);return{dFormBasic:V,formModel:F,selectOptions:m,resetForm:()=>{console.log("formData reset before",V.value.formData),V.value.resetFormFields(),console.log("formData reset after",V.value.formData)},onSubmitForm:()=>{console.log("onSubmitForm formModel",F)}}}});return E({render:f},c)}(),"render-demo-1":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,openBlock:M,createElementBlock:b}=T,v=p("Name"),l=p("Age"),S=p("City"),C=p("Favorite Fruits"),x=p("Sex"),D=p("Male"),q=p("Female"),h=p("Did you get off work?"),y=p("Interested Domain"),r=p("Submit"),i=p("Reset");function f(c,e){const k=o("d-form-label"),V=o("d-input"),F=o("d-form-control"),m=o("d-form-item"),_=o("d-select"),P=o("d-tag-input"),U=o("d-radio"),W=o("d-switch"),L=o("d-checkbox"),I=o("d-checkbox-group"),H=o("d-button"),G=o("d-form-operation"),B=o("d-form");return M(),b("div",null,[t(B,{ref:"dFormHorizontal",formData:c.formModel,layout:"horizontal",labelSize:"lg",onSubmit:c.onSubmitForm},{default:s(()=>[t(m,{prop:"name"},{default:s(()=>[t(k,{required:""},{default:s(()=>[v]),_:1}),t(F,null,{default:s(()=>[t(V,{modelValue:c.formModel.name,"onUpdate:modelValue":e[0]||(e[0]=N=>c.formModel.name=N)},null,8,["modelValue"])]),_:1})]),_:1}),t(m,{prop:"age"},{default:s(()=>[t(k,null,{default:s(()=>[l]),_:1}),t(F,null,{default:s(()=>[t(V,{modelValue:c.formModel.age,"onUpdate:modelValue":e[1]||(e[1]=N=>c.formModel.age=N)},null,8,["modelValue"])]),_:1})]),_:1}),t(m,{prop:"city"},{default:s(()=>[t(k,null,{default:s(()=>[S]),_:1}),t(F,null,{default:s(()=>[t(_,{modelValue:c.formModel.city,"onUpdate:modelValue":e[2]||(e[2]=N=>c.formModel.city=N),options:c.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(m,{prop:"loveFruits"},{default:s(()=>[t(k,null,{default:s(()=>[C]),_:1}),t(F,null,{default:s(()=>[t(P,{tags:c.formModel.loveFruits,"onUpdate:tags":e[3]||(e[3]=N=>c.formModel.loveFruits=N),suggestionList:c.formModel.suggestionList,"onUpdate:suggestionList":e[4]||(e[4]=N=>c.formModel.suggestionList=N),"display-property":"name",placeholder:"Input what fruits you like ","no-data":"No Data"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(m,{prop:"sex"},{default:s(()=>[t(k,null,{default:s(()=>[x]),_:1}),t(F,null,{default:s(()=>[t(U,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[5]||(e[5]=N=>c.formModel.sex=N),value:"0"},{default:s(()=>[D]),_:1},8,["modelValue"]),t(U,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[6]||(e[6]=N=>c.formModel.sex=N),value:"1"},{default:s(()=>[q]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(m,{prop:"workOn"},{default:s(()=>[t(k,null,{default:s(()=>[h]),_:1}),t(F,null,{default:s(()=>[t(W,{checked:c.formModel.workOn,"onUpdate:checked":e[7]||(e[7]=N=>c.formModel.workOn=N)},null,8,["checked"])]),_:1})]),_:1}),t(m,{prop:"interestedDomain"},{default:s(()=>[t(k,null,{default:s(()=>[y]),_:1}),t(F,null,{default:s(()=>[t(I,{modelValue:c.formModel.interestedDomain,"onUpdate:modelValue":e[8]||(e[8]=N=>c.formModel.interestedDomain=N),label:"Interested Domain"},{default:s(()=>[t(L,{label:"Frontend",value:"frontend"}),t(L,{label:"Backend",value:"backend"}),t(L,{label:"Mobileend",value:"mobileend"}),t(L,{label:"AI",value:"ai"}),t(L,{label:"Algorithm",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(G,{class:"form-demo-form-operation"},{default:s(()=>[t(H,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[r]),_:1}),t(H,{bsStyle:"common",onClick:c.resetForm},{default:s(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:u,reactive:d,ref:g}=T,w=u({setup(c,e){const k=g(null);let V=d({name:"AlanLee",age:"24",city:"Shenzhen",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermelon"},{name:"peach"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const F=d(["Beijing","Shanghai","Guangzhou","Shenzhen"]);return{dFormHorizontal:k,formModel:V,selectOptions:F,resetForm:()=>{console.log("dFormHorizontal",k.value),k.value.resetFormFields()},onSubmitForm:()=>{console.log("onSubmitForm formModel",V)}}}});return E({render:f},w)}(),"render-demo-2":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,createElementVNode:M,vShow:b,withDirectives:v,openBlock:l,createElementBlock:S}=T,C=p("Open Modal"),x={class:"form-demo-modal-content"},D=p("Name"),q=p("Age"),h=p("City"),y=p("Favorite Fruits"),r=p("Sex"),i=p("Male"),f=p("Female"),u=p("Did you get off work?"),d=p("Interested Domain"),g=p("Submit"),w=p("Reset");function c(m,_){const P=o("d-button"),U=o("d-form-label"),W=o("d-input"),L=o("d-form-control"),I=o("d-form-item"),H=o("d-select"),G=o("d-tag-input"),B=o("d-radio"),N=o("d-switch"),z=o("d-checkbox"),Y=o("d-checkbox-group"),K=o("d-form-operation"),Q=o("d-form");return l(),S("div",null,[t(P,{onClick:m.openModal},{default:s(()=>[C]),_:1},8,["onClick"]),v(M("div",{class:"form-demo-modal",onClick:_[9]||(_[9]=(...R)=>m.closeModal&&m.closeModal(...R))},[M("div",x,[t(Q,{ref:"dFormModal",formData:m.formModel,layout:"horizontal",labelSize:"lg",onSubmit:m.onSubmitForm},{default:s(()=>[t(I,{prop:"name"},{default:s(()=>[t(U,{required:""},{default:s(()=>[D]),_:1}),t(L,null,{default:s(()=>[t(W,{modelValue:m.formModel.name,"onUpdate:modelValue":_[0]||(_[0]=R=>m.formModel.name=R)},null,8,["modelValue"])]),_:1})]),_:1}),t(I,{prop:"age"},{default:s(()=>[t(U,null,{default:s(()=>[q]),_:1}),t(L,null,{default:s(()=>[t(W,{modelValue:m.formModel.age,"onUpdate:modelValue":_[1]||(_[1]=R=>m.formModel.age=R)},null,8,["modelValue"])]),_:1})]),_:1}),t(I,{prop:"city"},{default:s(()=>[t(U,null,{default:s(()=>[h]),_:1}),t(L,null,{default:s(()=>[t(H,{modelValue:m.formModel.city,"onUpdate:modelValue":_[2]||(_[2]=R=>m.formModel.city=R),options:m.selectOptions},null,8,["modelValue","options"])]),_:1})]),_:1}),t(I,{prop:"loveFruits"},{default:s(()=>[t(U,null,{default:s(()=>[y]),_:1}),t(L,null,{default:s(()=>[t(G,{tags:m.formModel.loveFruits,"onUpdate:tags":_[3]||(_[3]=R=>m.formModel.loveFruits=R),suggestionList:m.formModel.suggestionList,"onUpdate:suggestionList":_[4]||(_[4]=R=>m.formModel.suggestionList=R),"display-property":"name",placeholder:"Input what fruits you like ","no-data":"No Data"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),t(I,{prop:"sex"},{default:s(()=>[t(U,null,{default:s(()=>[r]),_:1}),t(L,null,{default:s(()=>[t(B,{modelValue:m.formModel.sex,"onUpdate:modelValue":_[5]||(_[5]=R=>m.formModel.sex=R),value:"0"},{default:s(()=>[i]),_:1},8,["modelValue"]),t(B,{modelValue:m.formModel.sex,"onUpdate:modelValue":_[6]||(_[6]=R=>m.formModel.sex=R),value:"1"},{default:s(()=>[f]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(I,{prop:"workOn"},{default:s(()=>[t(U,null,{default:s(()=>[u]),_:1}),t(L,null,{default:s(()=>[t(N,{checked:m.formModel.workOn,"onUpdate:checked":_[7]||(_[7]=R=>m.formModel.workOn=R)},null,8,["checked"])]),_:1})]),_:1}),t(I,{prop:"interestedDomain"},{default:s(()=>[t(U,null,{default:s(()=>[d]),_:1}),t(L,null,{default:s(()=>[t(Y,{modelValue:m.formModel.interestedDomain,"onUpdate:modelValue":_[8]||(_[8]=R=>m.formModel.interestedDomain=R),label:"Interested Domain"},{default:s(()=>[t(z,{label:"Frontend",value:"frontend"}),t(z,{label:"Backend",value:"backend"}),t(z,{label:"Mobileend",value:"mobileend"}),t(z,{label:"AI",value:"ai"}),t(z,{label:"Algorithm",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(K,{class:"form-demo-form-operation"},{default:s(()=>[t(P,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[g]),_:1}),t(P,{bsStyle:"common",onClick:m.resetForm},{default:s(()=>[w]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])],512),[[b,m.showModal]])])}const{defineComponent:e,reactive:k,ref:V}=T,F=e({setup(m,_){const P=V(null);let U=k({name:"AlanLee",age:"24",city:"Shenzhen",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermelon"},{name:"peach"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const W=k(["Beijing","Shanghai","Guangzhou","Shenzhen"]),L=()=>{console.log("dFormModal",P.value),P.value.resetFormFields()},I=()=>{console.log("onSubmitForm formModel",U)},H=V(!1);return{dFormModal:P,formModel:U,selectOptions:W,resetForm:L,onSubmitForm:I,showModal:H,openModal:()=>{H.value=!0},closeModal:()=>{H.value=!1}}}});return E({render:c},F)}(),"render-demo-3":function(){const{renderList:p,Fragment:o,openBlock:s,createElementBlock:t,createTextVNode:M,resolveComponent:b,withCtx:v,createVNode:l}=T,S=M("Name"),C=M("Favorite Fruits"),x=M("Sex"),D=M("Male"),q=M("Female"),h=M("Did you get off work?"),y=M("Interested Domain"),r=M("Submit"),i=M("Reset");function f(c,e){const k=b("d-form-label"),V=b("d-input"),F=b("d-form-control"),m=b("d-form-item"),_=b("d-tag-input"),P=b("d-radio"),U=b("d-switch"),W=b("d-checkbox"),L=b("d-checkbox-group"),I=b("d-button"),H=b("d-form-operation"),G=b("d-form");return s(),t("div",null,[l(G,{ref:"dFormColumn",layout:"columns",columnsClass:"u-1-3",formData:c.formModel,onSubmit:c.onSubmitForm},{default:v(()=>[(s(),t(o,null,p(6,B=>l(m,{prop:"name",key:B,class:"column-item"},{default:v(()=>[l(k,{required:"",hasHelp:""},{default:v(()=>[S]),_:1}),l(F,null,{default:v(()=>[l(V)]),_:1})]),_:2},1024)),64)),l(m,{prop:"loveFruits",class:"column-item"},{default:v(()=>[l(k,null,{default:v(()=>[C]),_:1}),l(F,null,{default:v(()=>[l(_,{tags:c.formModel.loveFruits,"onUpdate:tags":e[0]||(e[0]=B=>c.formModel.loveFruits=B),suggestionList:c.formModel.suggestionList,"onUpdate:suggestionList":e[1]||(e[1]=B=>c.formModel.suggestionList=B),"display-property":"name",placeholder:"Input what fruits you like ","no-data":"No Data"},null,8,["tags","suggestionList"])]),_:1})]),_:1}),l(m,{prop:"sex",class:"column-item"},{default:v(()=>[l(k,null,{default:v(()=>[x]),_:1}),l(F,null,{default:v(()=>[l(P,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[2]||(e[2]=B=>c.formModel.sex=B),value:"0"},{default:v(()=>[D]),_:1},8,["modelValue"]),l(P,{modelValue:c.formModel.sex,"onUpdate:modelValue":e[3]||(e[3]=B=>c.formModel.sex=B),value:"1"},{default:v(()=>[q]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(m,{prop:"goOffWork",class:"column-item"},{default:v(()=>[l(k,null,{default:v(()=>[h]),_:1}),l(F,null,{default:v(()=>[l(U,{checked:c.formModel.workOn,"onUpdate:checked":e[4]||(e[4]=B=>c.formModel.workOn=B)},null,8,["checked"])]),_:1})]),_:1}),l(m,{prop:"interestedDomain",class:"column-item"},{default:v(()=>[l(k,null,{default:v(()=>[y]),_:1}),l(F,null,{default:v(()=>[l(L,{modelValue:c.formModel.interestedDomain,"onUpdate:modelValue":e[5]||(e[5]=B=>c.formModel.interestedDomain=B),label:"Interested Domain"},{default:v(()=>[l(W,{label:"Frontend",value:"frontend"}),l(W,{label:"Backend",value:"backend"}),l(W,{label:"Mobileend",value:"mobileend"}),l(W,{label:"AI",value:"ai"}),l(W,{label:"Algorithm",value:"algorithm"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),l(H,{class:"form-demo-form-operation"},{default:v(()=>[l(I,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:v(()=>[r]),_:1}),l(I,{bsStyle:"common",onClick:c.resetForm},{default:v(()=>[i]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:u,reactive:d,ref:g}=T,w=u({setup(c,e){const k=g(null);let V=d({name:"AlanLee",age:"24",city:"Shenzhen",loveFruits:[{name:"apple"}],suggestionList:[{name:"apple"},{name:"watermelon"},{name:"peach"}],sex:"0",workOn:!0,interestedDomain:["frontend"]});const F=d(["Beijing","Shanghai","Guangzhou","Shenzhen"]);return{dFormColumn:k,formModel:V,selectOptions:F,resetForm:()=>{console.log("dFormColumn",k.value),k.value.resetFormFields()},onSubmitForm:()=>{console.log("onSubmitForm formModel",V)}}}});return E({render:f},w)}(),"render-demo-4":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:M,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=p("Username");function C(y,r){const i=o("d-form-label"),f=o("d-input"),u=o("d-form-control"),d=o("d-form-item"),g=o("d-form"),w=M("d-validate-rules");return v(),l("div",null,[t(g,{ref:"dFormTemplateValidate1",formData:y.formModel,labelSize:"lg"},{default:s(()=>[t(d,{prop:"username"},{default:s(()=>[t(i,{required:""},{default:s(()=>[S]),_:1}),t(u,null,{default:s(()=>[b(t(f,{modelValue:y.formModel.username,"onUpdate:modelValue":r[0]||(r[0]=c=>y.formModel.username=c)},null,8,["modelValue"]),[[w,[{maxlength:8},{pattern:/^[a-zA-Z\d]+(\s+[a-zA-Z\d]+)*$/,message:{"zh-cn":"\u53EA\u80FD\u5305\u542B\u6570\u5B57\u4E0E\u5927\u5C0F\u5199\u5B57\u7B26","en-us":"The value cannot contain characters except uppercase and lowercase letters.",default:"The value cannot contain characters except uppercase and lowercase letters."}}]]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:x,reactive:D,ref:q}=T,h=x({setup(y,r){const i=q(null);let f=D({username:"AlanLee"});return{dFormTemplateValidate1:i,formModel:f}}});return E({render:C},h)}(),"render-demo-5":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:M,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=p("Calculate: 1 + 1 = ?"),C=p("Calculate: 1 + 2 = ? (async)");function x(r,i){const f=o("d-form-label"),u=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),w=o("d-form"),c=M("d-validate-rules");return v(),l("div",null,[t(w,{ref:"dFormTemplateValidate2",formData:r.formModel,labelSize:"lg"},{default:s(()=>[t(g,{prop:"sum"},{default:s(()=>[t(f,null,{default:s(()=>[S]),_:1}),t(d,null,{default:s(()=>[b(t(u,{modelValue:r.formModel.sum,"onUpdate:modelValue":i[0]||(i[0]=e=>r.formModel.sum=e)},null,8,["modelValue"]),[[c,{validators:[{message:"Wrong!",validator:r.customValidator},{message:"Right!",validator:r.customValidator2}]}]])]),_:1})]),_:1}),t(g,{prop:"asyncSum"},{default:s(()=>[t(f,null,{default:s(()=>[C]),_:1}),t(d,null,{default:s(()=>[b(t(u,{modelValue:r.formModel.asyncSum,"onUpdate:modelValue":i[1]||(i[1]=e=>r.formModel.asyncSum=e)},null,8,["modelValue"]),[[c,{asyncValidators:[{message:"Wrong! (async)",asyncValidator:r.customAsyncValidator},{message:"Right! (async)",asyncValidator:r.customAsyncValidator2}]}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:D,reactive:q,ref:h}=T,y=D({setup(r,i){const f=h(null);let u=q({sum:"",asyncSum:""});return{dFormTemplateValidate2:f,formModel:u,customValidator:(e,k)=>k=="2",customValidator2:(e,k)=>k!="2",customAsyncValidator:(e,k)=>k=="3",customAsyncValidator2:(e,k)=>k!="3"}}});return E({render:x},y)}(),"render-demo-6":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:M,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=p("Calculate: 1 + 1 = ?"),C=p("Calculate: 1 + 2 = ? (async)"),x=p("Calculate: 1 + 1 = ?");function D(i,f){const u=o("d-form-label"),d=o("d-input"),g=o("d-form-control"),w=o("d-form-item"),c=o("d-form"),e=M("d-validate-rules");return v(),l("div",null,[t(c,{ref:"dFormTemplateValidate3",formData:i.formModel,labelSize:"lg"},{default:s(()=>[t(w,{prop:"sum"},{default:s(()=>[t(u,null,{default:s(()=>[S]),_:1}),t(g,{extraInfo:"updateOn is change, and when the input is complete, the value of the input box changes, triggering the validation rule"},{default:s(()=>[b(t(d,{modelValue:i.formModel.sum,"onUpdate:modelValue":f[0]||(f[0]=k=>i.formModel.sum=k)},null,8,["modelValue"]),[[e,{rules:{validators:[{message:"Wrong!",validator:i.customValidator},{message:"Right!",validator:i.customValidator2}]},options:{updateOn:"change"}}]])]),_:1})]),_:1}),t(w,{prop:"asyncSum"},{default:s(()=>[t(u,null,{default:s(()=>[C]),_:1}),t(g,{extraInfo:"updateOn is input, and the value of the input box changes while it is being entered, triggering the validation rule"},{default:s(()=>[b(t(d,{modelValue:i.formModel.asyncSum,"onUpdate:modelValue":f[1]||(f[1]=k=>i.formModel.asyncSum=k)},null,8,["modelValue"]),[[e,{rules:{asyncValidators:[{message:"Wrong! (async)",asyncValidator:i.customAsyncValidator},{message:"Only numbers can be entered!",asyncValidator:i.customAsyncValidator2}]},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(w,{prop:"errorSum"},{default:s(()=>[t(u,null,{default:s(()=>[x]),_:1}),t(g,{extraInfo:"errorStrategy is pristine, triggers validation rules at initialization"},{default:s(()=>[b(t(d,{modelValue:i.formModel.errorSum,"onUpdate:modelValue":f[2]||(f[2]=k=>i.formModel.errorSum=k)},null,8,["modelValue"]),[[e,{errorStrategy:"pristine",rules:{validators:[{message:"Wrong!",validator:i.customValidator3}]},options:{updateOn:"input"}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:q,reactive:h,ref:y}=T,r=q({setup(i,f){const u=y(null);let d=h({sum:"",asyncSum:"",errorSum:"3"});return{dFormTemplateValidate3:u,formModel:d,customValidator:(V,F)=>F=="2",customValidator2:(V,F)=>F!="2",customAsyncValidator:(V,F)=>F=="3",customAsyncValidator2:(V,F)=>/^[\d]+(\s+[\d]+)*$/.test(F),customValidator3:(V,F)=>F=="2"}}});return E({render:D},r)}(),"render-demo-7":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:M,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=p("Calculate: 1 + 1 = ?"),C=p("Calculate: 1 + 2 = ?");function x(r,i){const f=o("d-form-label"),u=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),w=o("d-form"),c=M("d-validate-rules");return v(),l("div",null,[t(w,{ref:"dFormTemplateValidate4",formData:r.formModel,labelSize:"lg"},{default:s(()=>[t(g,{prop:"sum"},{default:s(()=>[t(f,null,{default:s(()=>[S]),_:1}),t(d,{extraInfo:"messageageShowType is none, no prompt text is displayed"},{default:s(()=>[b(t(u,{modelValue:r.formModel.sum,"onUpdate:modelValue":i[0]||(i[0]=e=>r.formModel.sum=e)},null,8,["modelValue"]),[[c,{messageShowType:"none",rules:{validators:[{message:"Wrong!",validator:r.customValidator}]},options:{updateOn:"change"}}]])]),_:1})]),_:1}),t(g,{prop:"asyncSum"},{default:s(()=>[t(f,null,{default:s(()=>[C]),_:1}),t(d,{extraInfo:"messageShowType is popover, prompted with Popover"},{default:s(()=>[b(t(u,{modelValue:r.formModel.asyncSum,"onUpdate:modelValue":i[1]||(i[1]=e=>r.formModel.asyncSum=e)},null,8,["modelValue"]),[[c,{rules:{asyncValidators:[{message:"Wrong! (async)",asyncValidator:r.customAsyncValidator}]},options:{updateOn:"input",messageShowType:"popover",popPosition:"bottom"}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:D,reactive:q,ref:h}=T,y=D({setup(r,i){const f=h(null);let u=q({sum:"",asyncSum:""});return{dFormTemplateValidate4:f,formModel:u,customValidator:(w,c)=>c=="2",customAsyncValidator:(w,c)=>c=="3"}}});return E({render:x},y)}(),"render-demo-8":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:M,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=p("Calculate: 1 + 2 = ? (async)");function C(y,r){const i=o("d-form-label"),f=o("d-input"),u=o("d-form-control"),d=o("d-form-item"),g=o("d-form"),w=M("d-validate-rules");return v(),l("div",null,[t(g,{ref:"dFormTemplateValidate5",formData:y.formModel,labelSize:"lg"},{default:s(()=>[t(d,{prop:"asyncSum"},{default:s(()=>[t(i,null,{default:s(()=>[S]),_:1}),t(u,{extraInfo:"asyncDebounceTime is 500ms"},{default:s(()=>[b(t(f,{modelValue:y.formModel.asyncSum,"onUpdate:modelValue":r[0]||(r[0]=c=>y.formModel.asyncSum=c)},null,8,["modelValue"]),[[w,{rules:{asyncValidators:[{message:"Wrong! (async)",asyncValidator:y.customAsyncValidator}]},options:{updateOn:"input",asyncDebounceTime:500}}]])]),_:1})]),_:1})]),_:1},8,["formData"])])}const{defineComponent:x,reactive:D,ref:q}=T,h=x({setup(y,r){const i=q(null);let f=D({asyncSum:""});return{dFormTemplateValidate5:i,formModel:f,customAsyncValidator:(d,g)=>g=="3"}}});return E({render:C},h)}(),"render-demo-9":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:M,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=p("Name"),C=p("Age"),x=p("Submit"),D=p("Reset");function q(f,u){const d=o("d-form-label"),g=o("d-input"),w=o("d-form-control"),c=o("d-form-item"),e=o("d-button"),k=o("d-form-operation"),V=o("d-form"),F=M("d-validate-rules");return v(),l("div",null,[t(V,{name:"userInfoForm",ref:"dFormTemplateValidate6",formData:f.formModel,labelSize:"lg",onSubmit:f.onSubmit},{default:s(()=>[t(c,{prop:"name"},{default:s(()=>[t(d,null,{default:s(()=>[S]),_:1}),t(w,null,{default:s(()=>[b(t(g,{modelValue:f.formModel.name,"onUpdate:modelValue":u[0]||(u[0]=m=>f.formModel.name=m)},null,8,["modelValue"]),[[F,{rules:{minlength:2,message:"cannot less than 2 character"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(c,{prop:"age"},{default:s(()=>[t(d,null,{default:s(()=>[C]),_:1}),t(w,null,{default:s(()=>[b(t(g,{modelValue:f.formModel.age,"onUpdate:modelValue":u[1]||(u[1]=m=>f.formModel.age=m)},null,8,["modelValue"]),[[F,{rules:{min:1,message:"age must be greater than 0"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(k,{class:"form-demo-form-operation"},{default:s(()=>[t(e,{type:"submit",class:"form-demo-form-demo-demo-btn"},{default:s(()=>[x]),_:1}),t(e,{bsStyle:"common",onClick:f.resetForm},{default:s(()=>[D]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])])}const{defineComponent:h,reactive:y,ref:r}=T,i=h({setup(f,u){const d=r(null);let g=y({name:"",age:""});return{dFormTemplateValidate6:d,formModel:g,onSubmit:e=>{console.log("@submit")},resetForm:()=>{d.value.resetFormFields()}}}});return E({render:q},i)}(),"render-demo-10":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:M,withDirectives:b,openBlock:v,createBlock:l,createElementBlock:S}=T,C=p("Name"),x=p("Age"),D=p("Submit"),q=p("Reset");function h(u,d){const g=o("d-form-label"),w=o("d-input"),c=o("d-form-control"),e=o("d-form-item"),k=o("d-button"),V=o("d-form-operation"),F=o("d-form"),m=M("d-validate-rules");return v(),S("div",null,[b((v(),l(F,{name:"userInfoForm2",ref:"dFormTemplateValidate7",formData:u.formModel,labelSize:"lg",onSubmit:u.onSubmit,messageShowType:"text"},{default:s(()=>[t(e,{prop:"name"},{default:s(()=>[t(g,null,{default:s(()=>[C]),_:1}),t(c,null,{default:s(()=>[b(t(w,{modelValue:u.formModel.name,"onUpdate:modelValue":d[0]||(d[0]=_=>u.formModel.name=_)},null,8,["modelValue"]),[[m,{rules:{minlength:2,message:"cannot less than 2 character"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(e,{prop:"age"},{default:s(()=>[t(g,null,{default:s(()=>[x]),_:1}),t(c,null,{default:s(()=>[b(t(w,{modelValue:u.formModel.age,"onUpdate:modelValue":d[1]||(d[1]=_=>u.formModel.age=_)},null,8,["modelValue"]),[[m,{rules:{min:1,message:"age must be greater than 0"},options:{updateOn:"input"}}]])]),_:1})]),_:1}),t(V,{class:"form-demo-form-operation"},{default:s(()=>[t(k,{type:"submit",class:"form-demo-demo-btn"},{default:s(()=>[D]),_:1}),t(k,{bsStyle:"common",onClick:u.resetForm},{default:s(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1},8,["formData","onSubmit"])),[[m,{rules:{message:"validate fail"}}]])])}const{defineComponent:y,reactive:r,ref:i}=T,f=y({setup(u,d){const g=i(null);let w=r({name:"",age:""});return{dFormTemplateValidate7:g,formModel:w,onSubmit:k=>{console.log("@submit")},resetForm:()=>{g.value.resetFormFields()}}}});return E({render:h},f)}(),"render-demo-11":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,openBlock:M,createElementBlock:b}=T,v=p("Name"),l=p("Age");function S(h,y){const r=o("d-form-label"),i=o("d-input"),f=o("d-form-control"),u=o("d-form-item"),d=o("d-form");return M(),b("div",null,[t(d,{ref:"dFormReactiveValidate","form-data":h.validateFormModel,rules:h.rules},{default:s(()=>[t(u,{prop:"name"},{default:s(()=>[t(r,{required:!0},{default:s(()=>[v]),_:1}),t(f,null,{default:s(()=>[t(i,{modelValue:h.validateFormModel.name,"onUpdate:modelValue":y[0]||(y[0]=g=>h.validateFormModel.name=g)},null,8,["modelValue"])]),_:1})]),_:1}),t(u,{prop:"age"},{default:s(()=>[t(r,{required:!0},{default:s(()=>[l]),_:1}),t(f,null,{default:s(()=>[t(i,{modelValue:h.validateFormModel.age,"onUpdate:modelValue":y[1]||(y[1]=g=>h.validateFormModel.age=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data","rules"])])}const{defineComponent:C,reactive:x,ref:D}=T,q=C({setup(h,y){const r=D(null);let i=x({name:"AlanLee",age:"24"});const f=x({name:[{required:!0,message:"name field cannot be empty",trigger:"blur"}],age:[{required:!0,message:"age must be greater than 0",trigger:"blur",validator:(u,d)=>d>0},{required:!0,message:"age cannot greater than 120",trigger:"input",validator:(u,d)=>d<120}]});return{dFormReactiveValidate:r,rules:f,validateFormModel:i}}});return E({render:S},q)}(),"render-demo-12":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,openBlock:M,createElementBlock:b}=T,v=p("Name"),l=p("Nickname"),S=p("Age"),C=p("Sex");function x(r,i){const f=o("d-form-label"),u=o("d-input"),d=o("d-form-control"),g=o("d-form-item"),w=o("d-select"),c=o("d-form");return M(),b("div",null,[t(c,{ref:"dFormFeedback","form-data":r.formModel},{default:s(()=>[t(g,{prop:"name"},{default:s(()=>[t(f,{required:!0},{default:s(()=>[v]),_:1}),t(d,{feedbackStatus:"pending"},{default:s(()=>[t(u,{modelValue:r.formModel.name,"onUpdate:modelValue":i[0]||(i[0]=e=>r.formModel.name=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"nickname"},{default:s(()=>[t(f,{required:!0},{default:s(()=>[l]),_:1}),t(d,{feedbackStatus:"success"},{default:s(()=>[t(u,{modelValue:r.formModel.nickname,"onUpdate:modelValue":i[1]||(i[1]=e=>r.formModel.nickname=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"age"},{default:s(()=>[t(f,{required:!0},{default:s(()=>[S]),_:1}),t(d,{feedbackStatus:"error"},{default:s(()=>[t(u,{modelValue:r.formModel.age,"onUpdate:modelValue":i[2]||(i[2]=e=>r.formModel.age=e)},null,8,["modelValue"])]),_:1})]),_:1}),t(g,{prop:"sex"},{default:s(()=>[t(f,{required:!0},{default:s(()=>[C]),_:1}),t(d,{feedbackStatus:"error"},{default:s(()=>[t(w,{modelValue:r.formModel.sex,"onUpdate:modelValue":i[3]||(i[3]=e=>r.formModel.sex=e),options:r.sexSelectOptions,placeholder:"Select your sex"},null,8,["modelValue","options"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:D,reactive:q,ref:h}=T,y=D({setup(r,i){const f=h(null);let u=q({name:"AlanLee",nickname:"AlanLee97",age:"24",sex:"Male"});const d=q(["Male","Female"]);return{dFormFeedback:f,formModel:u,sexSelectOptions:d}}});return E({render:x},y)}(),"render-demo-13":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,openBlock:M,createElementBlock:b}=T,v=p("Address");function l(q,h){const y=o("d-form-label"),r=o("d-input"),i=o("d-icon"),f=o("d-form-control"),u=o("d-form-item"),d=o("d-form");return M(),b("div",null,[t(d,{ref:"dFormFeedback2","form-data":q.formModel},{default:s(()=>[t(u,{prop:"address"},{default:s(()=>[t(y,{required:!0},{default:s(()=>[v]),_:1}),t(f,null,{suffixTemplate:s(()=>[t(i,{name:"right-o",color:"rgb(61, 204, 166)"})]),default:s(()=>[t(r,{modelValue:q.formModel.address,"onUpdate:modelValue":h[0]||(h[0]=g=>q.formModel.address=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:S,reactive:C,ref:x}=T,D=S({setup(q,h){const y=x(null);let r=C({address:"Nanshan distrit, Shenzhen"});return{dFormFeedback2:y,formModel:r}}});return E({render:l},D)}(),"render-demo-14":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,resolveDirective:M,withDirectives:b,openBlock:v,createElementBlock:l}=T,S=p("Username"),C=p("Password"),x=p("Confirm Password"),D=p("Submit"),q=p("Reset");function h(u,d){const g=o("d-form-label"),w=o("d-input"),c=o("d-form-control"),e=o("d-form-item"),k=o("d-button"),V=o("d-form-operation"),F=o("d-form"),m=M("d-validate-rules");return v(),l("div",null,[t(F,{name:"togetherValidateForm",ref:"dFormTogetherValidate","form-data":u.formModel,labelSize:"lg",onSubmit:u.onSubmit},{default:s(()=>[t(e,{prop:"username"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[S]),_:1}),t(c,null,{default:s(()=>[b(t(w,{modelValue:u.formModel.username,"onUpdate:modelValue":d[0]||(d[0]=_=>u.formModel.username=_)},null,8,["modelValue"]),[[m,u.formRules.userNameRule]])]),_:1})]),_:1}),t(e,{prop:"password"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[C]),_:1}),t(c,null,{default:s(()=>[b(t(w,{modelValue:u.formModel.password,"onUpdate:modelValue":d[1]||(d[1]=_=>u.formModel.password=_)},null,8,["modelValue"]),[[m,u.formRules.passwordRule]])]),_:1})]),_:1}),t(e,{prop:"confirmPassword"},{default:s(()=>[t(g,{required:!0},{default:s(()=>[x]),_:1}),t(c,null,{default:s(()=>[b(t(w,{modelValue:u.formModel.confirmPassword,"onUpdate:modelValue":d[2]||(d[2]=_=>u.formModel.confirmPassword=_)},null,8,["modelValue"]),[[m,u.formRules.confirmPasswordRule]])]),_:1})]),_:1}),t(V,{class:"form-demo-form-operation"},{default:s(()=>[t(k,{type:"submit",class:"form-demo-demo-btn"},{default:s(()=>[D]),_:1}),t(k,{bsStyle:"common",onClick:u.resetForm},{default:s(()=>[q]),_:1},8,["onClick"])]),_:1})]),_:1},8,["form-data","onSubmit"])])}const{defineComponent:y,reactive:r,ref:i}=T,f=y({setup(u,d){const g=i(null);let w=r({username:"",password:"",confirmPassword:""});return{dFormTogetherValidate:g,formModel:w,formRules:{userNameRule:{rules:{minlength:6,message:"minimum 6 characters"}},passwordRule:{rules:{minlength:6,message:"minimum 6 characters"}},confirmPasswordRule:{options:{updateOn:"input"},rules:{minlength:6,message:"minimum 6 characters",validators:[{message:"the confirmation password does not match the password",validator:(V,F)=>F===w.password}]}}},resetForm:()=>{g.value.resetFormFields()},onSubmit:V=>{console.log("@submit")}}}});return E({render:h},f)}(),"render-demo-15":function(){const{createTextVNode:p,resolveComponent:o,withCtx:s,createVNode:t,openBlock:M,createElementBlock:b}=T,v=p("Name"),l=p("Age");function S(h,y){const r=o("d-form-label"),i=o("d-input"),f=o("d-form-control"),u=o("d-form-item"),d=o("d-form");return M(),b("div",null,[t(d,{ref:"dFormWithComponent","form-data":h.formModel},{default:s(()=>[t(u,{prop:"name"},{default:s(()=>[t(r,{required:!0},{default:s(()=>[v]),_:1}),t(f,null,{default:s(()=>[t(i,{modelValue:h.formModel.name,"onUpdate:modelValue":y[0]||(y[0]=g=>h.formModel.name=g)},null,8,["modelValue"])]),_:1})]),_:1}),t(u,{prop:"age"},{default:s(()=>[t(r,{required:!0},{default:s(()=>[l]),_:1}),t(f,null,{default:s(()=>[t(i,{modelValue:h.formModel.age,"onUpdate:modelValue":y[1]||(y[1]=g=>h.formModel.age=g)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["form-data"])])}const{defineComponent:C,reactive:x,ref:D}=T,q=C({setup(h,y){const r=D(null);let i=x({name:"AlanLee",age:"24"});return{dFormWithComponent:r,formModel:i}}});return E({render:S},q)}()}},na='{"title":"Form","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to use","slug":"when-to-use"},{"level":3,"title":"Basic usage","slug":"basic-usage"},{"level":3,"title":"Label horizontal arrangement","slug":"label-horizontal-arrangement"},{"level":3,"title":"Pop-up form","slug":"pop-up-form"},{"level":3,"title":"Multiple Lists","slug":"multiple-lists"},{"level":3,"title":"Template driven form validation","slug":"template-driven-form-validation"},{"level":3,"title":"Reactive form validation","slug":"reactive-form-validation"},{"level":3,"title":"Feedback status of a specified form","slug":"feedback-status-of-a-specified-form"},{"level":3,"title":"Form collaboration verification","slug":"form-collaboration-verification"},{"level":3,"title":"Cross-component verification","slug":"cross-component-verification"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"Directives","slug":"directives"},{"level":3,"title":"Interface & Types","slug":"interface-types"}],"relativePath":"en-US/components/form/index.md","lastUpdated":1649728324833}',pn=$('<h1 id="form" tabindex="-1">Form <a class="header-anchor" href="#form" aria-hidden="true">#</a></h1><p>A form that supports data collection, verification, and submission, including check boxes, option boxes, text boxes, and drop-down list boxes.</p><h3 id="when-to-use" tabindex="-1">When to use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Used for data collection, data verification, and data submission.</p><h3 id="basic-usage" tabindex="-1">Basic usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>In basic usage, the label is above the data box.</p>',6),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"loveFruits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"suggestionList"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermelon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"workOn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"interestedDomain"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"loveFruits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"suggestionList"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermelon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"workOn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"interestedDomain"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"loveFruits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"suggestionList"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermelon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"workOn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"interestedDomain"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"city"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"loveFruits"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"suggestionList"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'apple'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'watermelon'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peach'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"workOn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"interestedDomain"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'frontend'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
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

`)])])],-1),yn=$('<h3 id="template-driven-form-validation" tabindex="-1">Template driven form validation <a class="header-anchor" href="#template-driven-form-validation" aria-hidden="true">#</a></h3><p>Use the <code>v-d-validate-rules</code> derective on form components such as <code>d-form</code> and <code>d-input</code> to configure verification rules.</p><h4 id="verify-a-single-element-use-the-built-in-validator-and-configure-error-message" tabindex="-1">Verify a single element, use the built-in validator, and configure error message <a class="header-anchor" href="#verify-a-single-element-use-the-built-in-validator-and-configure-error-message" aria-hidden="true">#</a></h4><p>The following built-in validators are currently supported by DevUI\uFF1A<code>required</code>,<code>minlength</code>,<code>maxlength</code>,<code>min</code>,<code>max</code>,<code>requiredTrue</code>,<code>email</code>,<code>pattern</code>,<code>whitespace</code>.</p><ul><li><p>To limit user input to not all spaces, use the <code>whitespace</code>built-in validator</p></li><li><p>Setting the maximum limit to the actual check value <code>+1</code> is a good way to limit the length of user input.</p></li><li><p>In addition to pattern, other built-in validators also provide built-in error alerts, which are used by default when you do not customize them.</p></li><li><p>The message configuration supports both string and object forms (supports internationalized term configurations such as <code>&#39;zh-cn&#39;</code>, which defaults to <code>&#39;default&#39;</code>).</p></li></ul>',5),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
      `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
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

`)])])],-1),_n=n("h4",{id:"validate-individual-elements-customize-validators",tabindex:"-1"},[a("Validate individual elements, customize validators "),n("a",{class:"header-anchor",href:"#validate-individual-elements-customize-validators","aria-hidden":"true"},"#")],-1),Fn=n("p",null,[a("Custom validators, which pass in "),n("code",null,"validators"),a(" field configuration checking rules, can simply return "),n("code",null,"true | false "),a(" to identify whether the current check passes, to identify whether the current error is present, and to return an error message, suitable for dynamic error prompts. If it is an asynchronous validator, you can pass in the "),n("code",null,"asyncValidators"),a(" field to configure the validation rules.")],-1),wn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
      `),n("span",{class:"token literal-property property"},"sum"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"asyncSum"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"sum"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"asyncSum"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"errorSum"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"sum"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"asyncSum"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"asyncSum"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" rules "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name field cannot be empty'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(` 
          `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
          `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age must be greater than 0'"),n("span",{class:"token punctuation"},","),a(` 
          `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'blur'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token function-variable function"},"validator"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("rule"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" value "),n("span",{class:"token operator"},">"),a(),n("span",{class:"token number"},"0"),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"{"),a(` 
          `),n("span",{class:"token literal-property property"},"required"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(` 
          `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age cannot greater than 120'"),n("span",{class:"token punctuation"},","),a(` 
          `),n("span",{class:"token literal-property property"},"trigger"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"nickname"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee97'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"sex"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanshan distrit, Shenzhen'"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"username"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"password"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"confirmPassword"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" formRules "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"userNameRule"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"minlength"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'minimum 6 characters'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"passwordRule"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"minlength"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'minimum 6 characters'"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"confirmPasswordRule"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"options"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"updateOn"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'input'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"rules"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"minlength"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'minimum 6 characters'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"validators"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
            `),n("span",{class:"token punctuation"},"{"),a(`
              `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'the confirmation password does not match the password'"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'AlanLee'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'24'"),n("span",{class:"token punctuation"},","),a(`
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

`)])])],-1),Yn=$(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-form Attribute</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>name</td><td>string</td><td></td><td>Optional, set the form name property. Required for form submission validation.</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>formData</td><td>object</td><td></td><td>Required, form data</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>layout</td><td>&#39;horizontal&#39; |&#39;vertical&#39; |&#39;columns&#39;</td><td>&#39;horizontal&#39;</td><td>Optional, set the way the forms are arranged</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>labelSize</td><td>&#39;sm&#39; |&#39;lg&#39;</td><td></td><td>Optional, set the width of label, no default of 100px, sm is 80px,lg is 150px</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>labelAlign</td><td>&#39;start&#39; |&#39;center&#39; |&#39;end&#39;</td><td>&#39;start&#39;</td><td>Optional, set horizontal layout, label alignment</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>columnsClass</td><td>string</td><td></td><td>Optional, set multi-list style</td><td><a href="#multiple-lists">Multiple Lists</a></td></tr><tr><td>rules</td><td>object</td><td></td><td>Optional, set form validate rules</td><td><a href="#reactive-form-validation">Reactive form validation</a></td></tr></tbody></table><p>d-form Event</p><table><thead><tr><th>Event Name</th><th>Type</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>submit</td><td>() =&gt; void</td><td>Optional, submit form events</td><td>[Form Validation and Submission](#Form Validation and Submission)</td></tr></tbody></table><p>d-form-item Attribute</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>prop</td><td>string</td><td></td><td>Optional, specify the field to validate the form and select this property when validating the form</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>dHasFeedback</td><td>boolean</td><td>&#39;false&#39;</td><td>Optional, set whether the current form-control displays feedback icons</td><td><a href="#feedback-status-of-a-specified-form">Feedback status of a specified form</a></td></tr></tbody></table><p>d-form-label Attribute</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>required</td><td>boolean</td><td>&#39;false&#39;</td><td>Optional, is form item required</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>hasHelp</td><td>boolean</td><td>&#39;false&#39;</td><td>Optional, Whether form items need help</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>helpTips</td><td>string</td><td></td><td>Optional, the form item help guide prompt content needs to be used with <code>hasHelp</code>, and the value of <code>helpTips</code> cannot be an empty string for it to take effect.</td><td><a href="#basic-usage">Basic usage</a></td></tr></tbody></table><p>d-form-control Attribute</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>extraInfo</td><td>string</td><td></td><td>Optional, additional information, usually used to supplement the description of form options</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>feedbackStatus</td><td>boolean</td><td>&#39;false&#39;</td><td>Optional, manually specify current control status feedback</td><td><a href="#basic-usage">Basic usage</a></td></tr><tr><td>suffixTemplate</td><td>string</td><td></td><td>Optional, pass an icon template as input box suffix (passing in icon component via slot)</td><td><a href="#feedback-status-of-a-specified-form">Feedback status of a specified form</a></td></tr></tbody></table><h3 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-hidden="true">#</a></h3><p>v-d-validate-rules</p><table><thead><tr><th>Attribute</th><th>Type</th><th>Default</th><th>Description</th><th>Jump to Demo</th></tr></thead><tbody><tr><td>rules</td><td>object</td><td></td><td>Required, form validate rules, see <a href="https://www.npmjs.com/package/async-validator" target="_blank" rel="noopener noreferrer">async-validator</a> for more rules</td><td><a href="#template-driven-form-validation">Template driven form validation</a></td></tr><tr><td>options</td><td>object</td><td></td><td>Optional, options</td><td><a href="#template-driven-form-validation">Template driven form validation</a></td></tr></tbody></table><blockquote><p>This directive is only valid on form class components such as the <code>d-form</code> label or <code>d-input</code>.</p></blockquote><ul><li>The rules are written as follows</li></ul><div class="language-js"><pre><code><span class="token punctuation">{</span><span class="token punctuation">[</span>validatorKey<span class="token punctuation">]</span><span class="token operator">:</span> validatorValue<span class="token punctuation">,</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;some tip messages.&#39;</span><span class="token punctuation">}</span>
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
</code></pre></div>`,29);function Kn(p,o,s,t,M,b){const v=j("render-demo-0"),l=j("demo"),S=j("render-demo-1"),C=j("render-demo-2"),x=j("render-demo-3"),D=j("render-demo-4"),q=j("render-demo-5"),h=j("render-demo-6"),y=j("render-demo-7"),r=j("render-demo-8"),i=j("render-demo-9"),f=j("render-demo-10"),u=j("render-demo-11"),d=j("render-demo-12"),g=j("render-demo-13"),w=j("render-demo-14"),c=j("render-demo-15");return on(),sn("div",null,[pn,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[cn]),default:O(()=>[A(v)]),_:1}),ln,un,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[bn]),default:O(()=>[A(x)]),_:1}),yn,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[hn]),default:O(()=>[A(D)]),_:1}),_n,Fn,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[Vn]),default:O(()=>[A(h)]),_:1}),qn,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[xn]),default:O(()=>[A(y)]),_:1}),Sn,Cn,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[Dn]),default:O(()=>[A(r)]),_:1}),Tn,An,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[On]),default:O(()=>[A(i)]),_:1}),zn,Bn,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[Nn]),default:O(()=>[A(f)]),_:1}),In,Ln,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[Rn]),default:O(()=>[A(u)]),_:1}),Un,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[Gn]),default:O(()=>[A(w)]),_:1}),$n,Jn,A(l,{sourceCode:`<template>
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

`},{highlight:O(()=>[Zn]),default:O(()=>[A(c)]),_:1}),Yn])}var aa=tn(en,[["render",Kn]]);export{na as __pageData,aa as default};
