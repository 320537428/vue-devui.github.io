var U=Object.defineProperty;var j=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var Y=(c,t,s)=>t in c?U(c,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[t]=s,D=(c,t)=>{for(var s in t||(t={}))W.call(t,s)&&Y(c,s,t[s]);if(j)for(var s of j(t))H.call(t,s)&&Y(c,s,t[s]);return c};import{_ as K,V as N,r as A,o as P,c as Q,a as E,w as k,b as $,d as n,e as a}from"./app.3032a0dd.js";const X={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:t,withCtx:s,openBlock:e,createElementBlock:u}=N;function h(o,d){const p=c("d-column"),l=c("d-table");return e(),u("div",null,[t(l,{data:o.baseTableData,style:{width:"100%"}},{default:s(()=>[t(p,{field:"firstName",header:"First Name"}),t(p,{field:"lastName",header:"Last Name"}),t(p,{field:"gender",header:"Gender"}),t(p,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])}const{defineComponent:F,ref:r}=N,C=F({setup(){return{baseTableData:r([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}])}}});return D({render:h},C)}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:t,createTextVNode:s,createElementVNode:e,renderList:u,Fragment:h,openBlock:F,createElementBlock:r,toDisplayString:C,withCtx:o,createBlock:d}=N,p={class:"table-btn-groups mb-2"},l={class:"table-btn mb-1"},g=s(" \u81EA\u52A8\u8868\u683C\u5E03\u5C40\uFF1A "),i={class:"table-btn mb-1"},y=s(" \u6591\u9A6C\u7EB9\uFF1A "),m={class:"table-btn mb-1"},v=s(" \u8868\u5934\u80CC\u666F\u8272\uFF1A "),f={class:"table-btn mb-1"},b=s(" \u8868\u683C\u5927\u5C0F\uFF1A "),z={class:"table-btn mb-1"},_=s(" \u8868\u683C\u8FB9\u6846\uFF1A "),R={class:"table-btn mb-1"},q=s(" \u8868\u5934\u663E\u9690\uFF1A ");function S(w,M){const B=c("d-switch"),L=c("d-radio"),V=c("d-radio-group"),G=c("d-column"),O=c("d-table");return F(),r("div",null,[e("div",p,[e("div",l,[g,t(B,{modelValue:w.tableLayout,"onUpdate:modelValue":M[0]||(M[0]=x=>w.tableLayout=x)},null,8,["modelValue"])]),e("div",i,[y,t(B,{modelValue:w.striped,"onUpdate:modelValue":M[1]||(M[1]=x=>w.striped=x)},null,8,["modelValue"])]),e("div",m,[v,t(B,{modelValue:w.headerBg,"onUpdate:modelValue":M[2]||(M[2]=x=>w.headerBg=x)},null,8,["modelValue"])]),e("div",f,[b,t(V,{direction:"row",modelValue:w.size,"onUpdate:modelValue":M[3]||(M[3]=x=>w.size=x)},{default:o(()=>[(F(!0),r(h,null,u(w.sizeList,x=>(F(),d(L,{key:x.label,value:x.value},{default:o(()=>[s(C(x.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),e("div",z,[_,t(V,{direction:"row",modelValue:w.borderType,"onUpdate:modelValue":M[4]||(M[4]=x=>w.borderType=x)},{default:o(()=>[(F(!0),r(h,null,u(w.borderTypeList,x=>(F(),d(L,{key:x.label,value:x.value},{default:o(()=>[s(C(x.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),e("div",R,[q,t(B,{modelValue:w.showHeader,"onUpdate:modelValue":M[5]||(M[5]=x=>w.showHeader=x)},null,8,["modelValue"])])]),t(O,{"table-layout":w.tableLayout?"auto":"fixed",striped:w.striped,"header-bg":w.headerBg,data:w.stripedTableData,size:w.size,"border-type":w.borderType,"show-header":w.showHeader},{default:o(()=>[t(G,{field:"firstName",header:"First Name"}),t(G,{field:"lastName",header:"Last Name"}),t(G,{field:"gender",header:"Gender"}),t(G,{field:"date",header:"Date of birth"})]),_:1},8,["table-layout","striped","header-bg","data","size","border-type","show-header"])])}const{defineComponent:I,ref:T}=N,J=I({setup(){const w=T(!1),M=T(!1),B=T(!1),L=T("sm"),V=T(""),G=T(!0),O=[{label:"Normal",value:"sm"},{label:"Middle",value:"md"},{label:"large",value:"lg"}],x=[{label:"Normal",value:""},{label:"Bordered",value:"bordered"},{label:"Borderless",value:"borderless"}];return{stripedTableData:T([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),striped:M,headerBg:B,size:L,sizeList:O,borderType:V,showHeader:G,borderTypeList:x,tableLayout:w}}});return D({render:S},J)}(),"render-demo-2":function(){const{createTextVNode:c,resolveComponent:t,withCtx:s,createVNode:e,createElementVNode:u,openBlock:h,createElementBlock:F}=N,r={class:"mb-2"},C=c("Get CheckedRows"),o=c("Insert Row"),d=c("Delete Row"),p=c("Toggle Row");function l(m,v){const f=t("d-button"),b=t("d-column"),z=t("d-table");return h(),F("div",null,[u("div",null,[u("div",r,[e(f,{onClick:m.handleClick,class:"mr-1"},{default:s(()=>[C]),_:1},8,["onClick"]),e(f,{onClick:m.insertRow,class:"mr-1"},{default:s(()=>[o]),_:1},8,["onClick"]),e(f,{onClick:m.deleteRow,class:"mr-1"},{default:s(()=>[d]),_:1},8,["onClick"]),e(f,{onClick:m.toggleRow,class:"mr-1"},{default:s(()=>[p]),_:1},8,["onClick"])]),e(z,{ref:"tableRef",data:m.data,"row-key":_=>_.id,onCellClick:m.onCellClick,onRowClick:m.onRowClick,onCheckChange:m.checkChange,onCheckAllChange:m.checkAllChange},{default:s(()=>[e(b,{type:"checkable",width:"40",checkable:m.checkable,"reserve-check":""},null,8,["checkable"]),e(b,{field:"firstName",header:"First Name",width:"200"}),e(b,{field:"lastName",header:"Last Name",width:"200",resizeable:"","min-width":"150","max-width":"250",onResizeStart:m.onResizeStart,onResizing:m.onResizing,onResizeEnd:m.onResizeEnd},null,8,["onResizeStart","onResizing","onResizeEnd"]),e(b,{field:"gender",header:"Gender"}),e(b,{field:"date",header:"Date of birth"})]),_:1},8,["data","row-key","onCellClick","onRowClick","onCheckChange","onCheckAllChange"])])])}const{defineComponent:g,ref:i}=N,y=g({setup(){const m=i(),v=i([{id:"0",firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15"},{id:"1",firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16"},{id:"2",firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17"},{id:"3",firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18"}]);return{tableRef:m,data:v,handleClick:()=>{console.log(m.value.store.getCheckedRows())},onCellClick:B=>{console.log("cell-click",B)},onRowClick:B=>{console.log("row-click",B)},checkChange:(B,L,V)=>{console.log("checked row:",B,L,V)},checkAllChange:(B,L)=>{console.log("checked:",B,L)},checkable:(B,L)=>B.lastName==="Li"||!1,insertRow:()=>{v.value.push({id:`${v.value.length}`,firstName:"Jeff",lastName:"You",gender:"Male",date:"1989/05/19"})},deleteRow:()=>{v.value.splice(0,1)},onResizeStart:B=>{console.log("resize start",B)},onResizing:B=>{console.log("resizing",B)},onResizeEnd:B=>{console.log("resize end",B)},toggleRow:()=>{m.value.store.toggleRowSelection(v.value[0])}}}});return D({render:l},y)}(),"render-demo-3":function(){const{resolveComponent:c,createVNode:t,withCtx:s,createElementVNode:e,openBlock:u,createElementBlock:h}=N;function F(d,p){const l=c("d-column"),g=c("d-table");return u(),h("div",null,[e("div",null,[t(g,{data:d.data},{default:s(()=>[t(l,{type:"index",width:"40"}),t(l,{field:"firstName",header:"First Name"}),t(l,{field:"lastName",header:"Last Name"}),t(l,{field:"gender",header:"Gender"}),t(l,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])])}const{defineComponent:r,ref:C}=N,o=r({setup(){return{data:C([{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18"}])}}});return D({render:F},o)}(),"render-demo-4":function(){const{toDisplayString:c,createTextVNode:t,resolveComponent:s,withCtx:e,createVNode:u,openBlock:h,createElementBlock:F}=N,r=t("\u7F16\u8F91");function C(l,g){const i=s("d-column"),y=s("d-button"),m=s("d-table");return h(),F("div",null,[u(m,{data:l.dataSource},{default:e(()=>[u(i,{type:"index",width:"80"},{default:e(v=>[t(c(`No.${v.rowIndex+1}`),1)]),_:1}),u(i,{field:"firstName",header:"First Name"}),u(i,{field:"lastName",header:"Last Name"}),u(i,{field:"gender",header:"Gender"}),u(i,{field:"date",header:"Date of birth"}),u(i,{header:"Operation",align:"right"},{default:e(v=>[u(y,{onClick:f=>l.handleClick(v.row)},{default:e(()=>[r]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}const{defineComponent:o,ref:d}=N,p=o({setup(){return{dataSource:d([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),handleClick:i=>{console.log(i)}}}});return D({render:C},p)}(),"render-demo-5":function(){const{toDisplayString:c,createTextVNode:t,resolveComponent:s,withCtx:e,createVNode:u,openBlock:h,createElementBlock:F}=N;function r(l,g){const i=s("d-column"),y=s("d-input"),m=s("d-select"),v=s("d-table");return h(),F("div",null,[u(v,{ref:"tableRef",data:l.dataSource,"row-key":"id",onCellClick:l.cellClick},{default:e(()=>[u(i,{type:"index",width:"80"},{default:e(f=>[t(c(`No.${f.rowIndex+1}`),1)]),_:1}),u(i,{field:"firstName",header:"First Name",type:"editable"},{cell:e(f=>[t(c(f.row.firstName),1)]),cellEdit:e(f=>[u(y,{ref:"firstNameRef",modelValue:f.row.firstName,"onUpdate:modelValue":b=>f.row.firstName=b,onChange:b=>l.change(f.row,f.rowIndex,"firstName",b),onBlur:()=>l.blur(f.row,f.rowIndex,"firstName")},null,8,["modelValue","onUpdate:modelValue","onChange","onBlur"])]),_:1}),u(i,{field:"lastName",header:"Last Name",type:"editable"},{cell:e(f=>[t(c(f.row.lastName),1)]),cellEdit:e(f=>[u(y,{ref:"lastNameRef",modelValue:f.row.lastName,"onUpdate:modelValue":b=>f.row.lastName=b,onChange:b=>l.change(f.row,f.rowIndex,"lastName",b),onBlur:()=>l.blur(f.row,f.rowIndex,"lastName")},null,8,["modelValue","onUpdate:modelValue","onChange","onBlur"])]),_:1}),u(i,{field:"gender",header:"Gender",type:"editable"},{cell:e(f=>[t(c(f.row.gender),1)]),cellEdit:e(f=>[u(m,{ref:"genderRef",modelValue:f.row.gender,"onUpdate:modelValue":b=>f.row.gender=b,options:l.options,onValueChange:b=>l.change(f.row,f.rowIndex,"gender",b)},null,8,["modelValue","onUpdate:modelValue","options","onValueChange"])]),_:1})]),_:1},8,["data","onCellClick"])])}const{defineComponent:C,ref:o,nextTick:d}=N,p=C({setup(){const l=o(),g=o(),i=o(),y=o(),m=o([{firstName:"Mark",lastName:"Otto",gender:"Male",id:"Mark"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",id:"Jacob"}]),v=o(["Female","Male"]);return{tableRef:l,firstNameRef:g,lastNameRef:i,genderRef:y,dataSource:m,options:v,change:(_,R,q,S)=>{m.value[R][q]=typeof S=="object"?S.value:S,l.value.store.setCellMode(_,R,q,"readonly")},blur:(_,R,q)=>{l.value.store.setCellMode(_,R,q,"readonly")},cellClick:_=>{l.value.store.setCellMode(_.row,_.rowIndex,_.column.field,"edit");const q={firstName:g,lastName:i,gender:y}[_.column.field];d(()=>{var S;(S=q==null?void 0:q.value)==null||S.focus()})}}}});return D({render:r},p)}(),"render-demo-6":function(){const{createElementVNode:c,resolveComponent:t,createVNode:s,withCtx:e,openBlock:u,createElementBlock:h}=N,F=c("span",{style:{"margin-right":"4px","font-size":"var(--devui-font-size,12px)"}},"First Name",-1);function r(p,l){const g=t("d-icon"),i=t("d-popover"),y=t("d-column"),m=t("d-table");return u(),h("div",null,[s(m,{data:p.dataSource},{default:e(()=>[s(y,{field:"firstName"},{header:e(()=>[c("div",null,[F,s(i,{content:"some tips text",trigger:"hover",position:["top"]},{default:e(()=>[s(g,{name:"info-o"})]),_:1})])]),_:1}),s(y,{field:"lastName",header:"Last Name"}),s(y,{field:"gender",header:"Gender"}),s(y,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])}const{defineComponent:C,ref:o}=N,d=C({setup(){return{dataSource:o([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}])}}});return D({render:r},d)}(),"render-demo-7":function(){const{createTextVNode:c,resolveComponent:t,withCtx:s,createVNode:e,createElementVNode:u,openBlock:h,createElementBlock:F}=N,r=c("\u66F4\u65B0\u6570\u636E"),C=u("div",{style:{"text-align":"center"}},"No Data",-1);function o(g,i){const y=t("d-button"),m=t("d-column"),v=t("d-table");return h(),F("div",null,[u("div",null,[e(y,{onClick:g.handleClick},{default:s(()=>[r]),_:1},8,["onClick"]),e(v,{data:g.emptyData,"show-loading":g.showLoading},{empty:s(()=>[C]),default:s(()=>[e(m,{field:"firstName",header:"First Name"}),e(m,{field:"lastName",header:"Last Name"}),e(m,{field:"gender",header:"Gender"}),e(m,{field:"date",header:"Date of birth"})]),_:1},8,["data","show-loading"])])])}const{defineComponent:d,ref:p}=N,l=d({setup(){const g=p([]),i=p(!1);return{emptyData:g,showLoading:i,handleClick:()=>{i.value=!0,setTimeout(()=>{i.value=!1,g.value=[{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18"}]},1e3)}}}});return D({render:o},l)}(),"render-demo-8":function(){const{resolveComponent:c,createVNode:t,withCtx:s,openBlock:e,createElementBlock:u}=N;function h(o,d){const p=c("d-column"),l=c("d-table");return e(),u("div",null,[t(l,{data:o.dataSource,"table-height":"200px","fix-header":"",style:{width:"100%"}},{default:s(()=>[t(p,{field:"firstName",header:"First Name",width:150}),t(p,{field:"lastName",header:"Last Name",width:150}),t(p,{field:"gender",header:"Gender",width:150}),t(p,{field:"date",header:"Date of birth",width:150})]),_:1},8,["data"])])}const{defineComponent:F,ref:r}=N,C=F({setup(){return{dataSource:r([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"},{firstName:"po",lastName:"lang",gender:"Male",date:"1990/01/14"},{firstName:"john",lastName:"li",gender:"Male",date:"1990/01/14"},{firstName:"peng",lastName:"li",gender:"Female",date:"1990/01/14"},{firstName:"Danni",lastName:"Yu",gender:"Female",date:"1990/01/14"}])}}});return D({render:h},C)}(),"render-demo-9":function(){const{resolveComponent:c,createVNode:t,withCtx:s,openBlock:e,createElementBlock:u}=N;function h(d,p){const l=c("d-column"),g=c("d-table");return e(),u("div",null,[t(g,{data:d.tableDataFixedColumn,"table-layout":"auto"},{default:s(()=>[t(l,{field:"idNo",header:"ID Card Number","fixed-left":"0px"}),t(l,{field:"firstName",header:"First Name"}),t(l,{field:"lastName",header:"Last Name"}),t(l,{field:"gender",header:"Gender"}),t(l,{field:"date",header:"Date of birth"}),t(l,{field:"address",header:"Address"}),t(l,{field:"occupation",header:"Occupation"}),t(l,{field:"occupation",header:"Occupation"}),t(l,{field:"occupation",header:"Occupation"}),t(l,{field:"occupation",header:"Occupation","fixed-right":"0px"})]),_:1},8,["data"])])}const{defineComponent:F,ref:r,computed:C}=N,o=F({setup(){const d=r([{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"}]),p=C(()=>d.value.map(l=>({name:`${l.firstName} ${l.lastName}`,value:l.firstName})));return{tableDataFixedColumn:d,filterList:p}}});return D({render:h},o)}(),"render-demo-10":function(){const{resolveComponent:c,createVNode:t,withCtx:s,openBlock:e,createElementBlock:u}=N;function h(o,d){const p=c("d-column"),l=c("d-table");return e(),u("div",null,[t(l,{data:o.dataSource,"span-method":o.spanMethod,"border-type":"bordered"},{default:s(()=>[t(p,{field:"firstName",header:"First Name"}),t(p,{field:"lastName",header:"Last Name"}),t(p,{field:"gender",header:"Gender"}),t(p,{field:"date",header:"Date of birth"})]),_:1},8,["data","span-method"])])}const{defineComponent:F,ref:r}=N,C=F({setup(){return{dataSource:r([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),spanMethod:({row:p,column:l,rowIndex:g,columnIndex:i})=>{if(g===0&&i===0)return{rowspan:1,colspan:2};if(g===2&&i===0)return[2,2];if(g===2&&i===3)return[2,1]}}}});return D({render:h},C)}(),"render-demo-11":function(){const{resolveComponent:c,createVNode:t,withCtx:s,openBlock:e,createElementBlock:u}=N;function h(o,d){const p=c("d-column"),l=c("d-table");return e(),u("div",null,[t(l,{data:o.dataSource},{default:s(()=>[t(p,{field:"name",header:"Name"},{default:s(()=>[t(p,{field:"firstName",header:"First Name"}),t(p,{field:"lastName",header:"Last Name"})]),_:1}),t(p,{field:"gender",header:"Gender"}),t(p,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])}const{defineComponent:F,ref:r}=N,C=F({setup(){return{dataSource:r([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}])}}});return D({render:h},C)}(),"render-demo-12":function(){const{resolveComponent:c,createVNode:t,withCtx:s,openBlock:e,createElementBlock:u}=N;function h(o,d){const p=c("d-column"),l=c("d-table");return e(),u("div",null,[t(l,{data:o.dataSource,onSortChange:o.handleSortChange},{default:s(()=>[t(p,{field:"firstName",header:"First Name"}),t(p,{field:"lastName",header:"Last Name",sortable:"","sort-method":o.sortNameMethod},null,8,["sort-method"]),t(p,{field:"gender",header:"Gender"}),t(p,{field:"date",header:"Date of birth",sortable:"","sort-direction":"ASC","sort-method":o.sortDateMethod},null,8,["sort-method"])]),_:1},8,["data","onSortChange"])])}const{defineComponent:F,ref:r}=N,C=F({setup(){return{dataSource:r([{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Danni",lastName:"Chen",gender:"Female",date:"1990/01/13"},{firstName:"Green",lastName:"Gerong",gender:"Male",date:"1990/01/14"}]),handleSortChange:({field:g,direction:i})=>{console.log("field",g),console.log("direction",i)},sortDateMethod:(g,i)=>g.date>i.date,sortNameMethod:(g,i)=>g.lastName>i.lastName}}});return D({render:h},C)}(),"render-demo-13":function(){const{resolveComponent:c,createVNode:t,withCtx:s,openBlock:e,createElementBlock:u}=N;function h(o,d){const p=c("d-column"),l=c("d-table");return e(),u("div",null,[t(l,{data:o.dataSource},{default:s(()=>[t(p,{field:"firstName",header:"First Name"}),t(p,{field:"lastName",header:"Last Name",filterable:"","filter-list":o.filterList,onFilterChange:o.handleFilterChange},null,8,["filter-list","onFilterChange"]),t(p,{field:"gender",header:"Gender",filterable:"","filter-multiple":!1,"filter-list":o.singleFilterList,onFilterChange:o.handleSingleChange},null,8,["filter-list","onFilterChange"]),t(p,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])}const{defineComponent:F,ref:r}=N,C=F({setup(){const o=r([{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Danni",lastName:"Chen",gender:"Female",date:"1990/01/13"},{firstName:"Green",lastName:"Gerong",gender:"Male",date:"1990/01/14"}]),d=r([...o.value]),p=d.value.map(y=>({name:y.lastName,value:y.lastName}));return{dataSource:d,filterList:p,singleFilterList:[{name:"Clear",value:"Clear"},{name:"Female",value:"Female"},{name:"Male",value:"Male"}],handleFilterChange:y=>{const m=y.map(v=>v.value);d.value=o.value.filter(v=>m.includes(v.lastName))},handleSingleChange:y=>{if(y.value==="Clear"){d.value=o.value;return}d.value=o.value.filter(m=>m.gender===y.value)}}}});return D({render:h},C)}(),"render-demo-14":function(){const{createTextVNode:c,resolveComponent:t,withCtx:s,createVNode:e,toDisplayString:u,createElementVNode:h,openBlock:F,createElementBlock:r}=N,C=c("toggleRowExpansion");function o(i,y){const m=t("d-button"),v=t("d-column"),f=t("d-table");return F(),r("div",null,[h("div",null,[e(m,{onClick:i.toggleRowExpansion,class:"mr-m mb-m"},{default:s(()=>[C]),_:1},8,["onClick"]),e(f,{ref:"tableRef",data:i.dataSource,"row-key":"id","expand-row-keys":["1","3"],onExpandChange:i.expandChange},{default:s(()=>[e(v,{type:"expand"},{default:s(b=>[h("div",null,"First Name: "+u(b.row.firstName),1),h("div",null,"Last Name: "+u(b.row.lastName),1),h("div",null,"Gender: "+u(b.row.gender),1),h("div",null,"Date of birth: "+u(b.row.date),1)]),_:1}),e(v,{field:"firstName",header:"First Name"}),e(v,{field:"lastName",header:"Last Name"}),e(v,{field:"gender",header:"Gender"}),e(v,{field:"date",header:"Date of birth"})]),_:1},8,["data","onExpandChange"])])])}const{defineComponent:d,ref:p,onMounted:l}=N,g=d({setup(){const i=p(),y=p([{id:"1",firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{id:"2",firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{id:"3",firstName:"Danni",lastName:"Chen",gender:"Female",date:"1990/01/13"},{id:"4",firstName:"Green",lastName:"Gerong",gender:"Male",date:"1990/01/14"}]);return{dataSource:y,expandChange:(f,b)=>{console.log("currentRow",f),console.log("expandedRows",b)},tableRef:i,toggleRowExpansion:()=>{i.value.store.toggleRowExpansion(y.value[0])}}}});return D({render:o},g)}(),"render-demo-15":function(){const{toDisplayString:c,createTextVNode:t,resolveComponent:s,withCtx:e,createVNode:u,openBlock:h,createElementBlock:F}=N;function r(p,l){const g=s("d-column"),i=s("d-table");return h(),F("div",null,[u(i,{indent:32,onCheckChange:p.treeCheckChange,data:p.baseTreeTableData,"row-key":"firstName"},{default:e(()=>[u(g,{type:"index"},{default:e(y=>[t(c(`No.${y.rowIndex+1}`),1)]),_:1}),u(g,{field:"firstName",header:"First Name","show-overflow-tooltip":""}),u(g,{field:"lastName",header:"Last Name"}),u(g,{field:"gender",header:"Gender"}),u(g,{field:"date",header:"Date of birth"})]),_:1},8,["onCheckChange","data"])])}const{defineComponent:C,ref:o}=N,d=C({setup(){return{baseTreeTableData:o([{firstName:"Mark1",lastName:"Otto",date:"1990/01/11",gender:"Male1",children:[{firstName:"Mark2",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Mark3",lastName:"Otto",date:"1990/01/11",gender:"Male",children:[{firstName:"Mark31",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Mark32",lastName:"Otto",date:"1990/01/11",gender:"Male"}]}]},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12",children:[{firstName:"Jacob2",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob3",lastName:"Otto",date:"1990/01/11",gender:"Male",children:[{firstName:"Jacob31",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob32",lastName:"Otto",date:"1990/01/11",gender:"Male"}]}]},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),treeCheckChange:(g,i,y)=>{console.log("treeCheckChange",y)}}}});return D({render:r},d)}(),"render-demo-16":function(){const{resolveComponent:c,createVNode:t,withCtx:s,openBlock:e,createElementBlock:u}=N;function h(o,d){const p=c("d-column"),l=c("d-table");return e(),u("div",null,[t(l,{data:o.dataSource,"table-height":"200px","show-loading":o.showLoading,lazy:!0,onLoadMore:o.loadMore},{default:s(()=>[t(p,{field:"firstName",header:"First Name"}),t(p,{field:"lastName",header:"Last Name"}),t(p,{field:"gender",header:"Gender"}),t(p,{field:"date",header:"Date of birth"})]),_:1},8,["data","show-loading","onLoadMore"])])}const{defineComponent:F,ref:r}=N,C=F({setup(){const o=r(!1),d=r([{firstName:"diy0",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"diy1",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"diy2",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"diy3",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"diy4",lastName:"gerong",gender:"Male",date:"1990/01/14"},{firstName:"diy5",lastName:"lang",gender:"Male",date:"1990/01/14"},{firstName:"diy6",lastName:"li",gender:"Male",date:"1990/01/14"},{firstName:"diy7",lastName:"li",gender:"Female",date:"1990/01/14"},{firstName:"diy8",lastName:"Yu",gender:"Female",date:"1990/01/14"},{firstName:"diy9",lastName:"Yu",gender:"Female",date:"1990/01/14"}]);let p=100;return{dataSource:d,loadMore:()=>{if(d.value.length>=p||o.value)return;o.value=!0;const g=[],i=d.value.length;for(let y=0;y<10;y++)g.push({firstName:"diy"+(y+i),lastName:"more data",gender:"Female",date:"2022/07/20"});setTimeout(()=>{o.value=!1,d.value=d.value.concat(g)},500)},showLoading:o}}});return D({render:h},C)}()}},aa='{"title":"Table \u8868\u683C","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8868\u683C\u6837\u5F0F","slug":"\u8868\u683C\u6837\u5F0F"},{"level":3,"title":"\u8868\u683C\u4EA4\u4E92","slug":"\u8868\u683C\u4EA4\u4E92"},{"level":3,"title":"\u7D22\u5F15\u5217","slug":"\u7D22\u5F15\u5217"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5217","slug":"\u81EA\u5B9A\u4E49\u5217"},{"level":3,"title":"\u7F16\u8F91\u5355\u5143\u683C","slug":"\u7F16\u8F91\u5355\u5143\u683C"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u8868\u5934","slug":"\u81EA\u5B9A\u4E49\u8868\u5934"},{"level":3,"title":"\u7A7A\u6570\u636E\u6A21\u677F","slug":"\u7A7A\u6570\u636E\u6A21\u677F"},{"level":3,"title":"\u56FA\u5B9A\u8868\u5934","slug":"\u56FA\u5B9A\u8868\u5934"},{"level":3,"title":"\u56FA\u5B9A\u5217","slug":"\u56FA\u5B9A\u5217"},{"level":3,"title":"\u5408\u5E76\u5355\u5143\u683C","slug":"\u5408\u5E76\u5355\u5143\u683C"},{"level":3,"title":"\u8868\u5934\u5206\u7EC4","slug":"\u8868\u5934\u5206\u7EC4"},{"level":3,"title":"\u5217\u6392\u5E8F","slug":"\u5217\u6392\u5E8F"},{"level":3,"title":"\u5217\u7B5B\u9009","slug":"\u5217\u7B5B\u9009"},{"level":3,"title":"\u5C55\u5F00\u884C","slug":"\u5C55\u5F00\u884C"},{"level":3,"title":"\u6811\u5F62\u8868\u683C","slug":"\u6811\u5F62\u8868\u683C"},{"level":3,"title":"\u61D2\u52A0\u8F7D","slug":"\u61D2\u52A0\u8F7D"},{"level":3,"title":"Table \u53C2\u6570","slug":"table-\u53C2\u6570"},{"level":3,"title":"Table \u4E8B\u4EF6","slug":"table-\u4E8B\u4EF6"},{"level":3,"title":"Table \u65B9\u6CD5","slug":"table-\u65B9\u6CD5"},{"level":3,"title":"Table \u63D2\u69FD","slug":"table-\u63D2\u69FD"},{"level":3,"title":"Column \u53C2\u6570","slug":"column-\u53C2\u6570"},{"level":3,"title":"Column \u4E8B\u4EF6","slug":"column-\u4E8B\u4EF6"},{"level":3,"title":"Column \u63D2\u69FD","slug":"column-\u63D2\u69FD"},{"level":3,"title":"Table \u7C7B\u578B\u5B9A\u4E49","slug":"table-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"Column \u7C7B\u578B\u5B9A\u4E49","slug":"column-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/table/index.md","lastUpdated":1662105100560}',Z=$('<h1 id="table-\u8868\u683C" tabindex="-1">Table \u8868\u683C <a class="header-anchor" href="#table-\u8868\u683C" aria-hidden="true">#</a></h1><p>\u5C55\u793A\u884C\u5217\u6570\u636E\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><ol><li>\u5F53\u6709\u5927\u91CF\u7ED3\u6784\u5316\u7684\u6570\u636E\u9700\u8981\u5C55\u73B0\u65F6\uFF1B</li><li>\u5F53\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u81EA\u5B9A\u4E49\u64CD\u4F5C\u7B49\u590D\u6742\u884C\u4E3A\u65F6\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),nn=n("div",null,[a("\u7B80\u5355\u8868\u683C\uFF0C"),n("code",null,"d-table"),a("\u7EC4\u4EF6\u4E0A\u7684"),n("code",null,"data"),a("\u5C5E\u6027\u4F20\u5165\u8981\u5C55\u793A\u7684\u6570\u636E\uFF0C"),n("code",null,"d-column"),a("\u7EC4\u4EF6\u4E0A\u901A\u8FC7"),n("code",null,"field"),a("\u4F20\u5165\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF0C"),n("code",null,"header"),a("\u4F20\u5165\u5BF9\u5E94\u5217\u7684\u6807\u9898\u3002")],-1),an=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("baseTableData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" baseTableData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" baseTableData "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),tn=n("h3",{id:"\u8868\u683C\u6837\u5F0F",tabindex:"-1"},[a("\u8868\u683C\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u6837\u5F0F","aria-hidden":"true"},"#")],-1),sn=n("div",null,[n("code",null,"table-layout"),a("\u53C2\u6570\u8BBE\u7F6E\u8868\u683C\u7684\u5E03\u5C40\u65B9\u5F0F\uFF0C\u76EE\u524D\u652F\u6301"),n("code",null,"fixed"),a("\u548C"),n("code",null,"auto"),a("\u4E24\u79CD\u7C7B\u578B\uFF1B"),n("code",null,"striped"),a("\u53C2\u6570\u8BBE\u7F6E\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9\uFF1B"),n("code",null,"header-bg"),a("\u53C2\u6570\u8BBE\u7F6E\u662F\u5426\u663E\u793A\u8868\u5934\u80CC\u666F\u8272\uFF1B"),n("code",null,"size"),a("\u53C2\u6570\u8BBE\u7F6E\u8868\u683C\u5927\u5C0F\uFF1B"),n("code",null,"border-type"),a("\u8BBE\u7F6E\u8868\u683C\u8FB9\u6846\u6837\u5F0F\u3002")],-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn-groups mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn mb-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u81EA\u52A8\u8868\u683C\u5E03\u5C40\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableLayout"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn mb-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u6591\u9A6C\u7EB9\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("striped"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn mb-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8868\u5934\u80CC\u666F\u8272\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerBg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn mb-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8868\u683C\u5927\u5C0F\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in sizeList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.label"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ item.label }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn mb-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8868\u683C\u8FB9\u6846\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("borderType"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in borderTypeList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.label"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ item.label }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn mb-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8868\u5934\u663E\u9690\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showHeader"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(`
    `),n("span",{class:"token attr-name"},":table-layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableLayout ? "),n("span",{class:"token punctuation"},"'"),a("auto"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("fixed"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":striped"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("striped"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":header-bg"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerBg"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("stripedTableData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":border-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("borderType"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":show-header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showHeader"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tableLayout "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" striped "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" headerBg "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" size "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'sm'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" borderType "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" showHeader "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" sizeList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Normal'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'sm'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Middle'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'large'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lg'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" borderTypeList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Normal'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Bordered'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'bordered'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Borderless'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'borderless'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" stripedTableData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      stripedTableData`),n("span",{class:"token punctuation"},","),a(`
      striped`),n("span",{class:"token punctuation"},","),a(`
      headerBg`),n("span",{class:"token punctuation"},","),a(`
      size`),n("span",{class:"token punctuation"},","),a(`
      sizeList`),n("span",{class:"token punctuation"},","),a(`
      borderType`),n("span",{class:"token punctuation"},","),a(`
      showHeader`),n("span",{class:"token punctuation"},","),a(`
      borderTypeList`),n("span",{class:"token punctuation"},","),a(`
      tableLayout`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".table-btn-groups"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"flex-wrap"),n("span",{class:"token punctuation"},":"),a(" wrap"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".table-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" flex-start"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 1rem"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),on=n("h3",{id:"\u8868\u683C\u4EA4\u4E92",tabindex:"-1"},[a("\u8868\u683C\u4EA4\u4E92 "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u4EA4\u4E92","aria-hidden":"true"},"#")],-1),pn=n("div",null,[a("\u901A\u8FC7\u6DFB\u52A0\u4E00\u4E2A"),n("code",null,"d-column"),a("\u5E76\u4E14\u8BBE\u7F6E"),n("code",null,"type"),a("\u5C5E\u6027\u4E3A"),n("code",null,"checkable"),a("\u5373\u53EF\u5B9E\u73B0\u8868\u683C\u7684\u591A\u9009\u529F\u80FD\u3002"),n("code",null,"getCheckedRows"),a("\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5DF2\u9009\u62E9\u7684\u5217\u8868\u3002"),n("code",null,"toggleRowSelection"),a("\u65B9\u6CD5\u53EF\u4EE5\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\u3002\u901A\u8FC7"),n("code",null,"cell-click"),a("\u4E8B\u4EF6\u76D1\u542C\u5355\u5143\u683C\u70B9\u51FB\uFF0C\u4E8B\u4EF6\u56DE\u8C03\u53C2\u6570\u5305\u542B\u884C\u7D22\u5F15\u3001\u5217\u7D22\u5F15\u3001\u884C\u6570\u636E\u3001\u5217\u6570\u636E\u3002\u5728\u5217\u4E0A\u914D\u7F6E"),n("code",null,"resizeable"),a("\u5C5E\u6027\uFF0C\u53EF\u5B9E\u73B0\u8BE5\u5217\u62D6\u52A8\u6539\u53D8\u5BBD\u5EA6\uFF0C"),n("code",null,"min-width"),a("\u548C"),n("code",null,"max-width"),a("\u8BBE\u7F6E\u53EF\u62D6\u52A8\u8303\u56F4\uFF0C\u4E8B\u4EF6"),n("code",null,"resize-start"),a("\u3001"),n("code",null,"resizing"),a("\u3001"),n("code",null,"resize-end"),a("\u5206\u522B\u5728\u62D6\u52A8\u5F00\u59CB\u65F6\u3001\u8FDB\u884C\u4E2D\u3001\u7ED3\u675F\u540E\u89E6\u53D1\u3002")],-1),ln=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mb-2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mr-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Get CheckedRows"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("insertRow"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mr-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Insert Row"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("deleteRow"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mr-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Delete Row"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggleRow"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mr-1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Toggle Row"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(`
      `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableRef"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":row-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(item) => item.id"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@cell-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onCellClick"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@row-click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onRowClick"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@check-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkChange"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@check-all-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkAllChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkable"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("40"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":checkable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkable"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"reserve-check"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("200"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(`
        `),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("200"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"resizeable"),a(`
        `),n("span",{class:"token attr-name"},"min-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("150"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"max-width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("250"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"@resize-start"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onResizeStart"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"@resizing"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onResizing"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token attr-name"},"@resize-end"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onResizeEnd"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tableRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'0'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'po'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lang'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/15'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'john'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/16'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peng'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/17'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dale'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yu'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/18'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("tableRef"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCheckedRows"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onCellClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"params"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'cell-click'"),n("span",{class:"token punctuation"},","),a(" params"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onRowClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"params"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'row-click'"),n("span",{class:"token punctuation"},","),a(" params"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"checkChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("checked"),n("span",{class:"token punctuation"},","),a(" row"),n("span",{class:"token punctuation"},","),a(" selection")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checked row:'"),n("span",{class:"token punctuation"},","),a(" checked"),n("span",{class:"token punctuation"},","),a(" row"),n("span",{class:"token punctuation"},","),a(" selection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"checkAllChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("checked"),n("span",{class:"token punctuation"},","),a(" selection")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'checked:'"),n("span",{class:"token punctuation"},","),a(" checked"),n("span",{class:"token punctuation"},","),a(" selection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggleRow"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tableRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toggleRowSelection"),n("span",{class:"token punctuation"},"("),a("data"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"checkable"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("row"),n("span",{class:"token punctuation"},","),a(" rowIndex")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" row"),n("span",{class:"token punctuation"},"."),a("lastName "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'Li'"),a(),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"insertRow"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("data"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("length"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jeff'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'You'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1989/05/19'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"deleteRow"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      data`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onResizeStart"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'resize start'"),n("span",{class:"token punctuation"},","),a(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onResizing"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'resizing'"),n("span",{class:"token punctuation"},","),a(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onResizeEnd"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"e"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'resize end'"),n("span",{class:"token punctuation"},","),a(" e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tableRef`),n("span",{class:"token punctuation"},","),a(`
      data`),n("span",{class:"token punctuation"},","),a(`
      handleClick`),n("span",{class:"token punctuation"},","),a(`
      onCellClick`),n("span",{class:"token punctuation"},","),a(`
      onRowClick`),n("span",{class:"token punctuation"},","),a(`
      checkChange`),n("span",{class:"token punctuation"},","),a(`
      checkAllChange`),n("span",{class:"token punctuation"},","),a(`
      checkable`),n("span",{class:"token punctuation"},","),a(`
      insertRow`),n("span",{class:"token punctuation"},","),a(`
      deleteRow`),n("span",{class:"token punctuation"},","),a(`
      onResizeStart`),n("span",{class:"token punctuation"},","),a(`
      onResizing`),n("span",{class:"token punctuation"},","),a(`
      onResizeEnd`),n("span",{class:"token punctuation"},","),a(`
      toggleRow`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),cn=n("h3",{id:"\u7D22\u5F15\u5217",tabindex:"-1"},[a("\u7D22\u5F15\u5217 "),n("a",{class:"header-anchor",href:"#\u7D22\u5F15\u5217","aria-hidden":"true"},"#")],-1),un=n("div",null,[a("\u901A\u8FC7\u6DFB\u52A0\u4E00\u4E2A"),n("code",null,"d-column"),a("\u5E76\u4E14\u8BBE\u7F6E"),n("code",null,"type"),a("\u53C2\u6570\u4E3A"),n("code",null,"index"),a("\u5373\u53EF\u7ED9\u8868\u683C\u6DFB\u52A0\u7D22\u5F15\u3002\u7D22\u5F15\u5217\u7684\u8868\u5934\u9ED8\u8BA4\u5C55\u793A"),n("code",null,"#"),a("\uFF0C\u53EF\u901A\u8FC7"),n("code",null,"header"),a("\u53C2\u6570\u4F20\u5165\u6307\u5B9A\u5185\u5BB9\u3002")],-1),rn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("40"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" data "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'po'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lang'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/15'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'john'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/16'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peng'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/17'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dale'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yu'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/18'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" data "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),kn=n("h3",{id:"\u81EA\u5B9A\u4E49\u5217",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u5217 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5217","aria-hidden":"true"},"#")],-1),dn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"d-column"),a("\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u7684"),n("code",null,"default"),a("\u63D2\u69FD\u53EF\u4EE5\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5217\uFF0C\u63D2\u69FD\u63D0\u4F9B"),n("code",null,"row"),a("\u548C"),n("code",null,"rowIndex"),a("\u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u4EE3\u8868\u884C\u6570\u636E\u548C\u884C\u7D22\u5F15\u503C\u3002")],-1),gn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("80"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\n        {{ `No.${scope.rowIndex + 1}` }}\n      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Operation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"align"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick(scope.row)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7F16\u8F91"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"row"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("row"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource"),n("span",{class:"token punctuation"},","),a(" handleClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),mn=n("h3",{id:"\u7F16\u8F91\u5355\u5143\u683C",tabindex:"-1"},[a("\u7F16\u8F91\u5355\u5143\u683C "),n("a",{class:"header-anchor",href:"#\u7F16\u8F91\u5355\u5143\u683C","aria-hidden":"true"},"#")],-1),fn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"d-column"),a("\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u7684"),n("code",null,"cell"),a("\u3001"),n("code",null,"cellEdit"),a("\u63D2\u69FD\u4EE5\u53CA\u5C5E\u6027"),n("code",null,"type"),a("\u8BBE\u7F6E\u4E3A"),n("code",null,"editable"),a("\u5B9E\u73B0\u7F16\u8F91\u5355\u5143\u683C\u3002\u6B64\u529F\u80FD\u9700\u914D\u5408"),n("code",null,"row-key"),a("\u5C5E\u6027\u4F7F\u7528\u3002")],-1),yn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"row-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("id"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@cellClick"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cellClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("80"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\n        {{ `No.${scope.rowIndex + 1}` }}\n      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("editable"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#cell"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        {{ scope.row.firstName }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#cellEdit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(`
          `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstNameRef"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope.row.firstName"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(value) => change(scope.row, scope.rowIndex, "),n("span",{class:"token punctuation"},"'"),a("firstName"),n("span",{class:"token punctuation"},"'"),a(", value)"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@blur"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("() => blur(scope.row, scope.rowIndex, "),n("span",{class:"token punctuation"},"'"),a("firstName"),n("span",{class:"token punctuation"},"'"),a(")"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("editable"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#cell"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        {{ scope.row.lastName }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#cellEdit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-input")]),a(`
          `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastNameRef"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope.row.lastName"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(value) => change(scope.row, scope.rowIndex, "),n("span",{class:"token punctuation"},"'"),a("lastName"),n("span",{class:"token punctuation"},"'"),a(", value)"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@blur"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("() => blur(scope.row, scope.rowIndex, "),n("span",{class:"token punctuation"},"'"),a("lastName"),n("span",{class:"token punctuation"},"'"),a(")"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("editable"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#cell"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        {{ scope.row.gender }}
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#cellEdit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-select")]),a(`
          `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("genderRef"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope.row.gender"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"@valueChange"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(value) => change(scope.row, scope.rowIndex, "),n("span",{class:"token punctuation"},"'"),a("gender"),n("span",{class:"token punctuation"},"'"),a(", value)"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" nextTick "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tableRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" firstNameRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" lastNameRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" genderRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"change"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("row"),n("span",{class:"token punctuation"},","),a(" rowIndex"),n("span",{class:"token punctuation"},","),a(" field"),n("span",{class:"token punctuation"},","),a(" value")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dataSource`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),a("rowIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),a("field"),n("span",{class:"token punctuation"},"]"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token keyword"},"typeof"),a(" value "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'object'"),a(),n("span",{class:"token operator"},"?"),a(" value"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},":"),a(" value"),n("span",{class:"token punctuation"},";"),a(`
      tableRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCellMode"),n("span",{class:"token punctuation"},"("),a("row"),n("span",{class:"token punctuation"},","),a(" rowIndex"),n("span",{class:"token punctuation"},","),a(" field"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'readonly'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"blur"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("row"),n("span",{class:"token punctuation"},","),a(" rowIndex"),n("span",{class:"token punctuation"},","),a(" field")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tableRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCellMode"),n("span",{class:"token punctuation"},"("),a("row"),n("span",{class:"token punctuation"},","),a(" rowIndex"),n("span",{class:"token punctuation"},","),a(" field"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'readonly'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"cellClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"obj"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tableRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setCellMode"),n("span",{class:"token punctuation"},"("),a("obj"),n("span",{class:"token punctuation"},"."),a("row"),n("span",{class:"token punctuation"},","),a(" obj"),n("span",{class:"token punctuation"},"."),a("rowIndex"),n("span",{class:"token punctuation"},","),a(" obj"),n("span",{class:"token punctuation"},"."),a("column"),n("span",{class:"token punctuation"},"."),a("field"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token string"},"'edit'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" refMap "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(" firstNameRef"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(" lastNameRef"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(" genderRef"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" targetRef "),n("span",{class:"token operator"},"="),a(" refMap"),n("span",{class:"token punctuation"},"["),a("obj"),n("span",{class:"token punctuation"},"."),a("column"),n("span",{class:"token punctuation"},"."),a("field"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token function"},"nextTick"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        targetRef`),n("span",{class:"token operator"},"?."),a("value"),n("span",{class:"token operator"},"?."),n("span",{class:"token function"},"focus"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" tableRef"),n("span",{class:"token punctuation"},","),a(" firstNameRef"),n("span",{class:"token punctuation"},","),a(" lastNameRef"),n("span",{class:"token punctuation"},","),a(" genderRef"),n("span",{class:"token punctuation"},","),a(" dataSource"),n("span",{class:"token punctuation"},","),a(" options"),n("span",{class:"token punctuation"},","),a(" change"),n("span",{class:"token punctuation"},","),a(" blur"),n("span",{class:"token punctuation"},","),a(" cellClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),hn=n("h3",{id:"\u81EA\u5B9A\u4E49\u8868\u5934",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u8868\u5934 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u8868\u5934","aria-hidden":"true"},"#")],-1),Fn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"d-column"),a("\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u7684"),n("code",null,"header"),a("\u63D2\u69FD\u53EF\u4EE5\u5B9E\u73B0\u81EA\u5B9A\u4E49\u8868\u5934\u3002")],-1),Cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a("4px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),a("--devui-font-size"),n("span",{class:"token punctuation"},","),a("12px"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("First Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-popover")]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("some tips text"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hover"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("top"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("info-o"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-icon")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-popover")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Nn=n("h3",{id:"\u7A7A\u6570\u636E\u6A21\u677F",tabindex:"-1"},[a("\u7A7A\u6570\u636E\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u7A7A\u6570\u636E\u6A21\u677F","aria-hidden":"true"},"#")],-1),En=n("div",null,"\u5F53\u4F20\u5165\u7684\u6570\u636E\u4E3A\u7A7A\u65F6\uFF0C\u9ED8\u8BA4\u5C55\u793A\u7A7A\u6570\u636E\u6A21\u677F\u3002",-1),vn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u66F4\u65B0\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("emptyData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showLoading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#empty"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("No Data"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" emptyData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" showLoading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      showLoading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        showLoading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
        emptyData`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'po'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lang'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/15'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'john'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Li'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/16'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peng'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Li'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/17'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dale'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yu'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/18'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" emptyData"),n("span",{class:"token punctuation"},","),a(" showLoading"),n("span",{class:"token punctuation"},","),a(" handleClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),bn=n("h3",{id:"\u56FA\u5B9A\u8868\u5934",tabindex:"-1"},[a("\u56FA\u5B9A\u8868\u5934 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u8868\u5934","aria-hidden":"true"},"#")],-1),wn=n("div",null,[n("code",null,"fix-header"),a("\u53C2\u6570\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u56FA\u5B9A\u8868\u5934\uFF0C\u4F7F\u4E4B\u4E0D\u968F\u5185\u5BB9\u6EDA\u52A8\u3002")],-1),Bn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"table-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("200px"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"fix-header"),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a("100%")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("150"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("150"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("150"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("150"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'po'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lang'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'john'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peng'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yu'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),xn=n("h3",{id:"\u56FA\u5B9A\u5217",tabindex:"-1"},[a("\u56FA\u5B9A\u5217 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u5217","aria-hidden":"true"},"#")],-1),Dn=n("div",null,[a("\u5F53\u8868\u683C\u5217\u8FC7\u591A\u65F6\uFF0C\u56FA\u5B9A\u5217\u6709\u5229\u4E8E\u7528\u6237\u5728\u5DE6\u53F3\u6ED1\u52A8\u65F6\uFF0C\u80FD\u591F\u4FBF\u6377\u7684\u8FDB\u884C\u6570\u636E\u5B9A\u4F4D\u4E0E\u5BF9\u6BD4\uFF0C\u901A\u8FC7"),n("code",null,"fixed-left"),a("\u548C"),n("code",null,"fixed-right"),a("\u6765\u914D\u7F6E\u3002")],-1),An=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableDataFixedColumn"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"table-layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("auto"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idNo"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ID Card Number"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"fixed-left"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("address"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Address"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Occupation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Occupation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Occupation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"fixed-right"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" computed "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tableDataFixedColumn "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'po'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Lang'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/15'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen Guangdong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"occupation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Worker'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"idNo"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2000**********9999'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'john'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/16'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen Guangdong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"occupation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Worker'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"idNo"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2000**********9999'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'peng'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/17'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen Guangdong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"occupation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Worker'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"idNo"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2000**********9999'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Dale'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yu'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/18'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"address"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Shenzhen Guangdong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"occupation"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Worker'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"idNo"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2000**********9999'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" filterList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
      tableDataFixedColumn`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("item"),n("span",{class:"token punctuation"},"."),a("firstName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("item"),n("span",{class:"token punctuation"},"."),a("lastName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(" item"),n("span",{class:"token punctuation"},"."),a("firstName "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tableDataFixedColumn`),n("span",{class:"token punctuation"},","),a(`
      filterList`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),_n=n("h3",{id:"\u5408\u5E76\u5355\u5143\u683C",tabindex:"-1"},[a("\u5408\u5E76\u5355\u5143\u683C "),n("a",{class:"header-anchor",href:"#\u5408\u5E76\u5355\u5143\u683C","aria-hidden":"true"},"#")],-1),Mn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"span-method"),a("\u65B9\u6CD5\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5408\u5E76\u5355\u5143\u683C\uFF0C\u65B9\u6CD5\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u5305\u542B\u5C5E\u6027\u5982\u4E0B\uFF1A\u5F53\u524D\u884C"),n("code",null,"row"),a("\u3001\u5F53\u524D\u5217"),n("code",null,"column"),a("\u3001\u5F53\u524D\u884C\u7D22\u5F15"),n("code",null,"rowIndex"),a("\u3001\u5F53\u524D\u5217\u7D22\u5F15"),n("code",null,"columnIndex"),a("\u3002\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u662F"),n("code",null,"rowspan"),a("\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u662F"),n("code",null,"colspan"),a("\uFF1B\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C5E\u6027\u4E3A"),n("code",null,"rowspan"),a("\u548C"),n("code",null,"colspan"),a("\u3002")],-1),qn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":span-method"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("spanMethod"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"border-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("bordered"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"spanMethod"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" row"),n("span",{class:"token punctuation"},","),a(" column"),n("span",{class:"token punctuation"},","),a(" rowIndex"),n("span",{class:"token punctuation"},","),a(" columnIndex "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("rowIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),a(),n("span",{class:"token operator"},"&&"),a(" columnIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"rowspan"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"colspan"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("rowIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},"&&"),a(" columnIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("rowIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},"&&"),a(" columnIndex "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource"),n("span",{class:"token punctuation"},","),a(" spanMethod "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Rn=n("h3",{id:"\u8868\u5934\u5206\u7EC4",tabindex:"-1"},[a("\u8868\u5934\u5206\u7EC4 "),n("a",{class:"header-anchor",href:"#\u8868\u5934\u5206\u7EC4","aria-hidden":"true"},"#")],-1),Sn=n("div",null,[n("code",null,"d-column"),a("\u5D4C\u5957"),n("code",null,"d-column"),a("\u5373\u53EF\u5B9E\u73B0\u8868\u5934\u5206\u7EC4\u3002")],-1),Ln=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Tn=n("h3",{id:"\u5217\u6392\u5E8F",tabindex:"-1"},[a("\u5217\u6392\u5E8F "),n("a",{class:"header-anchor",href:"#\u5217\u6392\u5E8F","aria-hidden":"true"},"#")],-1),zn=n("div",null,[n("code",null,"sortable"),a("\u53C2\u6570\u8BBE\u7F6E\u4E3A"),n("code",null,"true"),a("\u53EF\u4EE5\u652F\u6301\u5217\u6392\u5E8F\uFF1B"),n("code",null,"sort-direction"),a("\u8BBE\u7F6E\u521D\u59CB\u5316\u65F6\u7684\u6392\u5E8F\u65B9\u5F0F\uFF1B"),n("code",null,"sort-method"),a("\u7528\u6765\u5B9A\u4E49\u6BCF\u4E00\u5217\u7684\u6392\u5E8F\u65B9\u6CD5\uFF1B"),n("code",null,"sort-change"),a("\u662F\u6392\u5E8F\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u8BE5\u5217\u7684\u6392\u5E8F\u4FE1\u606F\uFF1A"),n("code",null,"field"),a("\u6392\u5E8F\u5B57\u6BB5\u548C"),n("code",null,"direction"),a("\u6392\u5E8F\u65B9\u5411\u3002")],-1),Vn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@sort-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleSortChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"sortable"),a(),n("span",{class:"token attr-name"},":sort-method"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sortNameMethod"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"sortable"),a(),n("span",{class:"token attr-name"},"sort-direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ASC"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":sort-method"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("sortDateMethod"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleSortChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),a(" field"),n("span",{class:"token punctuation"},","),a(" direction "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'field'"),n("span",{class:"token punctuation"},","),a(" field"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'direction'"),n("span",{class:"token punctuation"},","),a(" direction"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"sortDateMethod"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("a"),n("span",{class:"token punctuation"},","),a(" b")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" a"),n("span",{class:"token punctuation"},"."),a("date "),n("span",{class:"token operator"},">"),a(" b"),n("span",{class:"token punctuation"},"."),a("date"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"sortNameMethod"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("a"),n("span",{class:"token punctuation"},","),a(" b")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(" a"),n("span",{class:"token punctuation"},"."),a("lastName "),n("span",{class:"token operator"},">"),a(" b"),n("span",{class:"token punctuation"},"."),a("lastName"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource"),n("span",{class:"token punctuation"},","),a(" handleSortChange"),n("span",{class:"token punctuation"},","),a(" sortDateMethod"),n("span",{class:"token punctuation"},","),a(" sortNameMethod "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Gn=n("h3",{id:"\u5217\u7B5B\u9009",tabindex:"-1"},[a("\u5217\u7B5B\u9009 "),n("a",{class:"header-anchor",href:"#\u5217\u7B5B\u9009","aria-hidden":"true"},"#")],-1),On=n("div",null,[n("code",null,"filterable"),a("\u53C2\u6570\u8BBE\u7F6E\u4E3A"),n("code",null,"true"),a("\u53EF\u4EE5\u652F\u6301\u5217\u7B5B\u9009\uFF1B"),n("code",null,"filter-multiple"),a("\u8BBE\u7F6E\u7B5B\u9009\u5217\u8868\u662F\u5426\u53EF\u591A\u9009\uFF0C\u9ED8\u8BA4\u4E3A"),n("code",null,"true"),a("\uFF1B"),n("code",null,"filter-list"),a("\u7528\u6765\u5B9A\u4E49\u7B5B\u9009\u5217\u8868\uFF1B"),n("code",null,"filter-change"),a("\u662F\u7B5B\u9009\u7684\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u8BE5\u5217\u9009\u4E2D\u7684\u6570\u636E\uFF1A\u5355\u9009\u65F6\u8FD4\u56DE\u9009\u4E2D\u9879\uFF0C\u591A\u9009\u65F6\u8FD4\u56DE\u9009\u4E2D\u9879\u6570\u7EC4\u3002")],-1),In=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"filterable"),a(),n("span",{class:"token attr-name"},":filter-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filterList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@filter-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleFilterChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(`
      `),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"filterable"),a(`
      `),n("span",{class:"token attr-name"},":filter-multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},":filter-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("singleFilterList"),n("span",{class:"token punctuation"},'"')]),a(`
      `),n("span",{class:"token attr-name"},"@filter-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleSingleChange"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" originSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),a("originSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" filterList "),n("span",{class:"token operator"},"="),a(" dataSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(" item"),n("span",{class:"token punctuation"},"."),a("lastName"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(" item"),n("span",{class:"token punctuation"},"."),a("lastName "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" singleFilterList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Clear'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Clear'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleFilterChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" filterList "),n("span",{class:"token operator"},"="),a(" val"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" item"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      dataSource`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" originSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" filterList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),a("item"),n("span",{class:"token punctuation"},"."),a("lastName"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleSingleChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"==="),a(),n("span",{class:"token string"},"'Clear'"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        dataSource`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" originSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},";"),a(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      dataSource`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" originSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" item"),n("span",{class:"token punctuation"},"."),a("gender "),n("span",{class:"token operator"},"==="),a(" val"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource"),n("span",{class:"token punctuation"},","),a(" filterList"),n("span",{class:"token punctuation"},","),a(" singleFilterList"),n("span",{class:"token punctuation"},","),a(" handleFilterChange"),n("span",{class:"token punctuation"},","),a(" handleSingleChange "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Jn=n("h3",{id:"\u5C55\u5F00\u884C",tabindex:"-1"},[a("\u5C55\u5F00\u884C "),n("a",{class:"header-anchor",href:"#\u5C55\u5F00\u884C","aria-hidden":"true"},"#")],-1),jn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("toggleRowExpansion"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("mr-m mb-m"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("toggleRowExpansion"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"row-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("id"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":expand-row-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("1"),n("span",{class:"token punctuation"},"'"),a(", "),n("span",{class:"token punctuation"},"'"),a("3"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@expand-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("expandChange"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("expand"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("rowData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("First Name: {{ rowData.row.firstName }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Last Name: {{ rowData.row.lastName }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Gender: {{ rowData.row.gender }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a("Date of birth: {{ rowData.row.date }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" onMounted "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" tableRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token comment"},`/* onMounted(() => {
      tableRef.value.store.expandRow(dataSource.value[0]);
    }); */`),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"expandChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("currentRow"),n("span",{class:"token punctuation"},","),a(" expandedRows")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'currentRow'"),n("span",{class:"token punctuation"},","),a(" currentRow"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'expandedRows'"),n("span",{class:"token punctuation"},","),a(" expandedRows"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"toggleRowExpansion"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      tableRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("store"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toggleRowExpansion"),n("span",{class:"token punctuation"},"("),a("dataSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource"),n("span",{class:"token punctuation"},","),a(" expandChange"),n("span",{class:"token punctuation"},","),a(" tableRef"),n("span",{class:"token punctuation"},","),a(" toggleRowExpansion "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Yn=n("h3",{id:"\u6811\u5F62\u8868\u683C",tabindex:"-1"},[a("\u6811\u5F62\u8868\u683C "),n("a",{class:"header-anchor",href:"#\u6811\u5F62\u8868\u683C","aria-hidden":"true"},"#")],-1),$n=n("div",null,[a("\u652F\u6301\u6811\u7C7B\u578B\u7684\u6570\u636E\u5C55\u793A\u3002\u5F53 row \u4E2D\u5305\u542B"),n("code",null,"children"),a("\u5B57\u6BB5\u65F6\uFF0C\u88AB\u89C6\u4E3A\u6811\u5F62\u6570\u636E\u3002\u6E32\u67D3\u5D4C\u5957\u6570\u636E\u9700\u8981"),n("code",null,"row-key"),a("\u3002\u4F7F\u7528"),n("code",null,"indent"),a("\u53EF\u4EE5\u63A7\u5236\u5B50\u8282\u70B9\u7684\u7F29\u8FDB\u3002\u6682\u4E0D\u652F\u6301\u6811\u5F62\u8868\u683C\u548C\u5C55\u5F00\u884C\u540C\u65F6\u4F7F\u7528\uFF0C\u5C55\u5F00\u884C\u4F18\u5148\u7EA7\u8F83\u9AD8\u3002")],-1),Un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":indent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("32"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@check-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("treeCheckChange"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("baseTreeTableData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"row-key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\n        {{ `No.${scope.rowIndex + 1}` }}\n      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"show-overflow-tooltip"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" baseTreeTableData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark3'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark31'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Mark32'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob2'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob3'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token literal-property property"},"children"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob31'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"{"),a(`
                `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jacob32'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
                `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
              `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
            `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"treeCheckChange"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("val"),n("span",{class:"token punctuation"},","),a(" row"),n("span",{class:"token punctuation"},","),a(" selection")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'treeCheckChange'"),n("span",{class:"token punctuation"},","),a(" selection"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" baseTreeTableData"),n("span",{class:"token punctuation"},","),a(" treeCheckChange "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Wn=n("h3",{id:"\u61D2\u52A0\u8F7D",tabindex:"-1"},[a("\u61D2\u52A0\u8F7D "),n("a",{class:"header-anchor",href:"#\u61D2\u52A0\u8F7D","aria-hidden":"true"},"#")],-1),Hn=n("div",null,"\u4F7F\u7528 lazy \u542F\u7528\u61D2\u52A0\u8F7D\uFF0C\u5F53\u6EDA\u52A8\u8868\u683C\u5E95\u90E8\u65F6\u5230\u89E6\u53D1 loadMore \u4E8B\u4EF6\u5B9E\u73B0\u61D2\u52A0\u8F7D\u3002",-1),Kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"table-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("200px"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showLoading"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":lazy"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@load-more"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("loadMore"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-table")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" showLoading "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" dataSource "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy0'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy1'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Otto'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/11'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy2'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Thornton'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/12'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy3'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Chen'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/13'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy4'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'gerong'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy5'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'lang'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy6'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Male'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy7'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'li'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy8'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yu'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy9'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Yu'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'1990/01/14'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"let"),a(" total "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"loadMore"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),a("dataSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("length "),n("span",{class:"token operator"},">="),a(" total "),n("span",{class:"token operator"},"||"),a(" showLoading"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      showLoading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" moreData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"const"),a(" size "),n("span",{class:"token operator"},"="),a(" dataSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),a("length"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"for"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),a(" i "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),a(" i "),n("span",{class:"token operator"},"<"),a(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},";"),a(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        moreData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
          `),n("span",{class:"token literal-property property"},"firstName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'diy'"),a(),n("span",{class:"token operator"},"+"),a(),n("span",{class:"token punctuation"},"("),a("i "),n("span",{class:"token operator"},"+"),a(" size"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"lastName"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'more data'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"gender"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Female'"),n("span",{class:"token punctuation"},","),a(`
          `),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'2022/07/20'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`

      `),n("span",{class:"token comment"},"// mock ajax"),a(`
      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        showLoading`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),a(`
        dataSource`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(" dataSource"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),a("moreData"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token number"},"500"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" dataSource"),n("span",{class:"token punctuation"},","),a(" loadMore"),n("span",{class:"token punctuation"},","),a(" showLoading "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Pn=$(`<h3 id="table-\u53C2\u6570" tabindex="-1">Table \u53C2\u6570 <a class="header-anchor" href="#table-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u7684\u6570\u636E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">striped</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9\u95F4\u9694</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#tablesize">TableSize</a></td><td style="text-align:left;">&#39;sm&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u5927\u5C0F\uFF0C\u5206\u522B\u5BF9\u5E94\u884C\u9AD8 40px,48px,56px</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">max-width</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u6700\u5927\u5BBD\u5EA6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">max-height</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u6700\u5927\u9AD8\u5EA6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">table-width</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u5BBD\u5EA6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">table-height</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u9AD8\u5EA6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">row-hovered-highlight</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9F20\u6807\u5728\u8BE5\u884C\u4E0A\u65F6\uFF0C\u9AD8\u4EAE\u8BE5\u884C</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">fix-header</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u56FA\u5B9A\u5934\u90E8</td><td style="text-align:left;"><a href="#%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4">\u56FA\u5B9A\u8868\u5934</a></td></tr><tr><td style="text-align:left;">show-loading</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u52A0\u8F7D\u52A8\u753B</td><td style="text-align:left;"><a href="#%E7%A9%BA%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF">\u7A7A\u6570\u636E\u6A21\u677F</a></td></tr><tr><td style="text-align:left;">header-bg</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5934\u90E8\u80CC\u666F</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">table-layout</td><td style="text-align:left;"><code>&#39;fixed&#39; | &#39;auto&#39;</code></td><td style="text-align:left;">&#39;fixed&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u5E03\u5C40\uFF0C\u53EF\u9009\u503C\u4E3A&#39;auto&#39;</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">span-method</td><td style="text-align:left;"><a href="#spanmethod">SpanMethod</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5408\u5E76\u5355\u5143\u683C\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td style="text-align:left;"><a href="#%E5%90%88%E5%B9%B6%E5%8D%95%E5%85%83%E6%A0%BC">\u5408\u5E76\u5355\u5143\u683C</a></td></tr><tr><td style="text-align:left;">border-type</td><td style="text-align:left;"><a href="#bordertype">BorderType</a></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u8FB9\u6846\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u6709\u884C\u8FB9\u6846\uFF1B<code>bordered</code>: \u5168\u8FB9\u6846\uFF1B<code>borderless</code>: \u65E0\u8FB9\u6846</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">empty</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;No Data&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u914D\u7F6E\u672A\u4F20\u9012\u8868\u683C\u6570\u636E\u65F6\u9700\u8981\u663E\u793A\u7684\u7A7A\u6570\u636E\u6587\u672C</td><td style="text-align:left;"><a href="#%E7%A9%BA%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF">\u7A7A\u6570\u636E\u6A21\u677F</a></td></tr><tr><td style="text-align:left;">show-header</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u914D\u7F6E\u662F\u5426\u663E\u793A\u8868\u5934</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">row-key</td><td style="text-align:left;"><code>string | Function(item, index: number): string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u884C\u6570\u636E\u7684 Key\uFF0C\u7528\u6765\u4F18\u5316 Table \u6E32\u67D3\uFF0C\u7C7B\u578B\u4E3A string \u65F6\uFF0C\u652F\u6301\u591A\u5C42\u8BBF\u95EE\uFF1A<code>item.user.id</code>\uFF0C\u4F46\u4E0D\u652F\u6301 <code>item.user[0].id</code>\uFF0C\u6B64\u79CD\u60C5\u51B5\u8BF7\u4F7F\u7528 Function\u3002</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92(Function)</a> <br> <a href="#%E5%B1%95%E5%BC%80%E8%A1%8C">\u5C55\u5F00\u884C(string)</a></td></tr><tr><td style="text-align:left;">indent</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">16</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5C55\u793A\u6811\u5F62\u6570\u636E\u65F6\uFF0C\u6811\u8282\u70B9\u7684\u7F29\u8FDB</td><td style="text-align:left;"><a href="#%E6%A0%91%E5%BD%A2%E8%A1%A8%E6%A0%BC">\u6811\u5F62\u8868\u683C</a></td></tr><tr><td style="text-align:left;">lazy</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u61D2\u52A0\u8F7D\u6570\u636E\uFF08\u642D\u914D loadMore \u4F7F\u7528\uFF09</td><td style="text-align:left;"><a href="#%E6%87%92%E5%8A%A0%E8%BD%BD">\u61D2\u52A0\u8F7D</a></td></tr></tbody></table><h3 id="table-\u4E8B\u4EF6" tabindex="-1">Table \u4E8B\u4EF6 <a class="header-anchor" href="#table-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">sort-change</td><td style="text-align:left;"><code>Function(obj: { field: string; direction: SortDirection })</code></td><td style="text-align:left;">\u6392\u5E8F\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u8BE5\u5217\u6392\u5E8F\u4FE1\u606F</td><td style="text-align:left;"><a href="#%E5%88%97%E6%8E%92%E5%BA%8F">\u5217\u6392\u5E8F</a></td></tr><tr><td style="text-align:left;">cell-click</td><td style="text-align:left;"><code>Function(obj: CellClickArg)</code></td><td style="text-align:left;">\u5355\u5143\u683C\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u5355\u5143\u683C\u4FE1\u606F</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">check-change</td><td style="text-align:left;"><code>Function(checked: boolean, row, selection)</code></td><td style="text-align:left;">\u52FE\u9009\u8868\u683C\u884C\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u8BE5\u884C\u4FE1\u606F\u548C\u8868\u683C\u6240\u6709\u9009\u4E2D\u884C\u6570\u636E</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">check-all-change</td><td style="text-align:left;"><code>Function(checked: boolean, selection)</code></td><td style="text-align:left;">\u5168\u9009\u8868\u683C\u884C\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u52FE\u9009\u72B6\u6001\u548C\u8868\u683C\u6240\u6709\u9009\u4E2D\u884C\u6570\u636E</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">row-click</td><td style="text-align:left;"><code>Function(obj: RowClickArg)</code></td><td style="text-align:left;">\u67D0\u4E00\u884C\u88AB\u70B9\u51FB\u65F6\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u8BE5\u884C\u4FE1\u606F</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">load-more</td><td style="text-align:left;"><code>Function()</code></td><td style="text-align:left;">\u6EDA\u52A8\u5230\u8868\u683C\u5E95\u90E8\u89E6\u53D1\u61D2\u52A0\u8F7D\u4E8B\u4EF6\uFF08\u9700\u914D\u5408 props.lazy \u5F00\u542F\uFF09</td><td style="text-align:left;"><a href="#%E6%87%92%E5%8A%A0%E8%BD%BD">\u61D2\u52A0\u8F7D</a></td></tr></tbody></table><h3 id="table-\u65B9\u6CD5" tabindex="-1">Table \u65B9\u6CD5 <a class="header-anchor" href="#table-\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">getCheckedRows</td><td style="text-align:left;"><code>() =&gt; []</code></td><td style="text-align:left;">\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u7684\u884C\u6570\u636E</td></tr><tr><td style="text-align:left;">toggleRowExpansion</td><td style="text-align:left;"><code>(row, expended) =&gt; void</code></td><td style="text-align:left;">\u7528\u4E8E\u53EF\u5C55\u5F00\u7684\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u5C55\u5F00\u72B6\u6001\u3002 \u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u662F\u5426\u5C55\u793A\uFF08expended \u4E3A true \u5219\u5C55\u5F00\uFF09</td></tr><tr><td style="text-align:left;">toggleRowSelection</td><td style="text-align:left;"><code>(row, checked) =&gt; void</code></td><td style="text-align:left;">\u7528\u4E8E\u53EF\u9009\u62E9\u7684\u8868\u683C\uFF0C\u5207\u6362\u67D0\u4E00\u884C\u7684\u9009\u4E2D\u72B6\u6001\u3002 \u5982\u679C\u4F7F\u7528\u4E86\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u662F\u8BBE\u7F6E\u8FD9\u4E00\u884C\u662F\u5426\u9009\u4E2D\uFF08checked \u4E3A true \u5219\u9009\u4E2D\uFF09</td></tr><tr><td style="text-align:left;">setCellMode</td><td style="text-align:left;"><code>(row, rowIndex, field, cellMode) =&gt; void</code></td><td style="text-align:left;">\u7528\u4E8E\u53EF\u7F16\u8F91\u5355\u5143\u683C\u7684\u8868\u683C\uFF0C<code>cellMode</code>\u53C2\u6570: <code>readonly</code>\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C <code>edit</code>\u4E3A\u7F16\u8F91\u72B6\u6001\uFF0C\u5355\u5143\u683C\u6839\u636E\u4E0D\u540C\u72B6\u6001\u6E32\u67D3\u4E0D\u540C\u5185\u5BB9</td></tr><tr><td style="text-align:left;">resetCellMode</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">\u7528\u4E8E\u53EF\u7F16\u8F91\u5355\u5143\u683C\u7684\u8868\u683C\uFF0C\u91CD\u7F6E\u6240\u6709\u53EF\u7F16\u8F91\u5355\u5143\u683C\u4E3A\u53EA\u8BFB\u72B6\u6001</td></tr></tbody></table><h3 id="table-\u63D2\u69FD" tabindex="-1">Table \u63D2\u69FD <a class="header-anchor" href="#table-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">empty</td><td style="text-align:left;">\u914D\u7F6E\u672A\u4F20\u9012\u8868\u683C\u6570\u636E\u65F6\u9700\u8981\u663E\u793A\u7684\u7A7A\u6570\u636E\u6A21\u677F</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="column-\u53C2\u6570" tabindex="-1">Column \u53C2\u6570 <a class="header-anchor" href="#column-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">header</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u5E94\u5217\u7684\u6807\u9898</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">field</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><a href="#columntype">ColumnType</a></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5217\u7684\u7C7B\u578B\uFF0C\u8BBE\u7F6E<code>checkable</code>\u4F1A\u663E\u793A\u591A\u9009\u6846</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;"><code>string | number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D<code>px</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">min-width</td><td style="text-align:left;"><code>string | number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u62D6\u52A8\u8C03\u6574\u5BBD\u5EA6\u65F6\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u5355\u4F4D<code>px</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">max-width</td><td style="text-align:left;"><code>string | number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u62D6\u52A8\u8C03\u6574\u5BBD\u5EA6\u65F6\u7684\u6700\u5927\u5BBD\u5EA6\uFF0C\u5355\u4F4D<code>px</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fixedLeft</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BE5\u5217\u56FA\u5B9A\u5230\u5DE6\u4FA7\u7684\u8DDD\u79BB\uFF0C\u5982\uFF1A&#39;100px&#39;</td><td style="text-align:left;"><a href="#%E5%9B%BA%E5%AE%9A%E5%88%97">\u56FA\u5B9A\u5217</a></td></tr><tr><td style="text-align:left;">fixedRight</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BE5\u5217\u56FA\u5B9A\u5230\u53F3\u4FA7\u7684\u8DDD\u79BB\uFF0C\u5982\uFF1A&#39;100px&#39;</td><td style="text-align:left;"><a href="#%E5%9B%BA%E5%AE%9A%E5%88%97">\u56FA\u5B9A\u5217</a></td></tr><tr><td style="text-align:left;">formatter</td><td style="text-align:left;"><a href="#formatter">Formatter</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u683C\u5F0F\u5316\u5217\u5185\u5BB9</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">sortable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u884C\u6570\u636E\u6309\u7167\u8BE5\u5217\u7684\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F</td><td style="text-align:left;"><a href="#%E5%88%97%E6%8E%92%E5%BA%8F">\u5217\u6392\u5E8F</a></td></tr><tr><td style="text-align:left;">sort-direction</td><td style="text-align:left;"><a href="#sortdirection">SortDirection</a></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u8BE5\u5217\u7684\u6392\u5E8F\u72B6\u6001</td><td style="text-align:left;"><a href="#%E5%88%97%E6%8E%92%E5%BA%8F">\u5217\u6392\u5E8F</a></td></tr><tr><td style="text-align:left;">sort-method</td><td style="text-align:left;"><a href="#sortmethod">SortMethod</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u4E8E\u6392\u5E8F\u7684\u6BD4\u8F83\u51FD\u6570</td><td style="text-align:left;"><a href="#%E5%88%97%E6%8E%92%E5%BA%8F">\u5217\u6392\u5E8F</a></td></tr><tr><td style="text-align:left;">filterable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5BF9\u8BE5\u5217\u542F\u7528\u7B5B\u9009\u529F\u80FD</td><td style="text-align:left;"><a href="#%E5%88%97%E7%AD%9B%E9%80%89">\u5217\u7B5B\u9009</a></td></tr><tr><td style="text-align:left;">filter-multiple</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u542F\u7528\u591A\u9009\u7684\u65B9\u5F0F\u6765\u7B5B\u9009</td><td style="text-align:left;"><a href="#%E5%88%97%E7%AD%9B%E9%80%89">\u5217\u7B5B\u9009</a></td></tr><tr><td style="text-align:left;">filter-list</td><td style="text-align:left;"><a href="#filterconfig">FilterConfig[]</a></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7B5B\u9009\u5217\u8868</td><td style="text-align:left;"><a href="#%E5%88%97%E7%AD%9B%E9%80%89">\u5217\u7B5B\u9009</a></td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;"><a href="#columnalign">ColumnAlign</a></td><td style="text-align:left;">&#39;left&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u914D\u7F6E\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%97">\u81EA\u5B9A\u4E49\u5217</a></td></tr><tr><td style="text-align:left;">checkable</td><td style="text-align:left;"><code>Function(row, rowIndex): boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u914D\u7F6E\u884C\u52FE\u9009\u72B6\u6001</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">show-overflow-tooltip</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5185\u5BB9\u8FC7\u957F\u88AB\u9690\u85CF\u65F6\u662F\u5426\u663E\u793A tooltip</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">resizeable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BE5\u5217\u5BBD\u5EA6\u662F\u5426\u53EF\u8C03\u6574</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">reserve-check</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u4FDD\u7559\u52FE\u9009\u72B6\u6001</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">cell-class</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BE5\u5217\u5355\u5143\u683C\u81EA\u5B9A\u4E49 class</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="column-\u4E8B\u4EF6" tabindex="-1">Column \u4E8B\u4EF6 <a class="header-anchor" href="#column-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u56DE\u8C03\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">filter-change</td><td style="text-align:left;"><code>Function(val: FilterConfig | FilterConfig[])</code></td><td style="text-align:left;">\u7B5B\u9009\u56DE\u8C03\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u9009\u4E2D\u7684\u7B5B\u9009\u9879\u6216\u7B5B\u9009\u9879\u6570\u7EC4</td><td style="text-align:left;"><a href="#%E5%88%97%E7%AD%9B%E9%80%89">\u5217\u7B5B\u9009</a></td></tr><tr><td style="text-align:left;">resize-start</td><td style="text-align:left;"><code>Function()</code></td><td style="text-align:left;">\u8BE5\u5217\u5BBD\u5EA6\u8C03\u6574\u5F00\u59CB\u65F6\u7684\u4E8B\u4EF6</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">resizing</td><td style="text-align:left;"><code>Function(val: {width: number})</code></td><td style="text-align:left;">\u8BE5\u5217\u5BBD\u5EA6\u8C03\u6574\u8FDB\u884C\u4E2D\u7684\u4E8B\u4EF6</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr><tr><td style="text-align:left;">resize-end</td><td style="text-align:left;"><code>Function(val: {width: number; beforeWidth: number})</code></td><td style="text-align:left;">\u8BE5\u5217\u5BBD\u5EA6\u8C03\u6574\u7ED3\u675F\u65F6\u7684\u4E8B\u4EF6</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E4%BA%A4%E4%BA%92">\u8868\u683C\u4EA4\u4E92</a></td></tr></tbody></table><h3 id="column-\u63D2\u69FD" tabindex="-1">Column \u63D2\u69FD <a class="header-anchor" href="#column-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9</td><td style="text-align:left;"><code>{ row, rowIndex }</code></td></tr><tr><td style="text-align:left;">header</td><td style="text-align:left;">\u8868\u5934\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8868\u5934\u5185\u5BB9</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">cell</td><td style="text-align:left;">\u5185\u5BB9\u53EA\u8BFB\u6001\u63D2\u69FD\uFF08\u914D\u5408\u53EF\u7F16\u8F91\u5355\u5143\u683C\u529F\u80FD\u4F7F\u7528\uFF09\uFF0C\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9</td><td style="text-align:left;"><code>{ row, rowIndex }</code></td></tr><tr><td style="text-align:left;">cellEdit</td><td style="text-align:left;">\u5185\u5BB9\u7F16\u8F91\u6001\u63D2\u69FD\uFF08\u914D\u5408\u53EF\u7F16\u8F91\u5355\u5143\u683C\u529F\u80FD\u4F7F\u7528\uFF09\uFF0C\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9</td><td style="text-align:left;"><code>{ row, rowIndex }</code></td></tr></tbody></table><h3 id="table-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Table \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#table-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><br><h4 id="tablesize" tabindex="-1">TableSize <a class="header-anchor" href="#tablesize" aria-hidden="true">#</a></h4><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">TableSize</span> <span class="token operator">=</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="spanmethod" tabindex="-1">SpanMethod <a class="header-anchor" href="#spanmethod" aria-hidden="true">#</a></h4><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">SpanMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token punctuation">{</span>
  row<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  column<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  columnIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">{</span> rowspan<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> colspan<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="bordertype" tabindex="-1">BorderType <a class="header-anchor" href="#bordertype" aria-hidden="true">#</a></h4><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">BorderType</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bordered&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;borderless&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="cellclickarg" tabindex="-1">CellClickArg <a class="header-anchor" href="#cellclickarg" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">CellClickArg</span> <span class="token punctuation">{</span>
  columnIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  column<span class="token operator">:</span> Column<span class="token punctuation">;</span>
  row<span class="token operator">:</span> DefaultRow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="rowclickarg" tabindex="-1">RowClickArg <a class="header-anchor" href="#rowclickarg" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">RowClickArg</span> <span class="token punctuation">{</span>
  row<span class="token operator">:</span> DefaultRow<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="column-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Column \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#column-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><br><h4 id="columntype" tabindex="-1">ColumnType <a class="header-anchor" href="#columntype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ColumnType</span> <span class="token operator">=</span> <span class="token string">&#39;checkable&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;index&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;expand&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;editable&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="formatter" tabindex="-1">Formatter <a class="header-anchor" href="#formatter" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>row<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> column<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> cellValue<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode<span class="token punctuation">;</span>
</code></pre></div><h4 id="sortdirection" tabindex="-1">SortDirection <a class="header-anchor" href="#sortdirection" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">SortDirection</span> <span class="token operator">=</span> <span class="token string">&#39;ASC&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;DESC&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="sortmethod" tabindex="-1">SortMethod <a class="header-anchor" href="#sortmethod" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">SortMethod<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="filterconfig" tabindex="-1">FilterConfig <a class="header-anchor" href="#filterconfig" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">FilterConfig</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  checked<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="columnalign" tabindex="-1">ColumnAlign <a class="header-anchor" href="#columnalign" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ColumnAlign</span> <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,40);function Qn(c,t,s,e,u,h){const F=A("render-demo-0"),r=A("demo"),C=A("render-demo-1"),o=A("render-demo-2"),d=A("render-demo-3"),p=A("render-demo-4"),l=A("render-demo-5"),g=A("render-demo-6"),i=A("render-demo-7"),y=A("render-demo-8"),m=A("render-demo-9"),v=A("render-demo-10"),f=A("render-demo-11"),b=A("render-demo-12"),z=A("render-demo-13"),_=A("render-demo-14"),R=A("render-demo-15"),q=A("render-demo-16");return P(),Q("div",null,[Z,E(r,{sourceCode:`<template>
  <d-table :data="baseTableData" style="width: 100%">
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const baseTableData = ref([
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'green',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);

    return { baseTableData };
  },
});
<\/script>
`},{description:k(()=>[nn]),highlight:k(()=>[an]),default:k(()=>[E(F)]),_:1}),tn,E(r,{sourceCode:`<template>
  <div class="table-btn-groups mb-2">
    <div class="table-btn mb-1">
      \u81EA\u52A8\u8868\u683C\u5E03\u5C40\uFF1A
      <d-switch v-model="tableLayout" />
    </div>
    <div class="table-btn mb-1">
      \u6591\u9A6C\u7EB9\uFF1A
      <d-switch v-model="striped" />
    </div>
    <div class="table-btn mb-1">
      \u8868\u5934\u80CC\u666F\u8272\uFF1A
      <d-switch v-model="headerBg" />
    </div>
    <div class="table-btn mb-1">
      \u8868\u683C\u5927\u5C0F\uFF1A
      <d-radio-group direction="row" v-model="size">
        <d-radio v-for="item in sizeList" :key="item.label" :value="item.value">
          {{ item.label }}
        </d-radio>
      </d-radio-group>
    </div>
    <div class="table-btn mb-1">
      \u8868\u683C\u8FB9\u6846\uFF1A
      <d-radio-group direction="row" v-model="borderType">
        <d-radio v-for="item in borderTypeList" :key="item.label" :value="item.value">
          {{ item.label }}
        </d-radio>
      </d-radio-group>
    </div>
    <div class="table-btn mb-1">
      \u8868\u5934\u663E\u9690\uFF1A
      <d-switch v-model="showHeader" />
    </div>
  </div>
  <d-table
    :table-layout="tableLayout ? 'auto' : 'fixed'"
    :striped="striped"
    :header-bg="headerBg"
    :data="stripedTableData"
    :size="size"
    :border-type="borderType"
    :show-header="showHeader"
  >
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const tableLayout = ref(false);
    const striped = ref(false);
    const headerBg = ref(false);
    const size = ref('sm');
    const borderType = ref('');
    const showHeader = ref(true);
    const sizeList = [
      {
        label: 'Normal',
        value: 'sm',
      },
      {
        label: 'Middle',
        value: 'md',
      },
      {
        label: 'large',
        value: 'lg',
      },
    ];
    const borderTypeList = [
      {
        label: 'Normal',
        value: '',
      },
      {
        label: 'Bordered',
        value: 'bordered',
      },
      {
        label: 'Borderless',
        value: 'borderless',
      },
    ];
    const stripedTableData = ref([
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'green',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);

    return {
      stripedTableData,
      striped,
      headerBg,
      size,
      sizeList,
      borderType,
      showHeader,
      borderTypeList,
      tableLayout,
    };
  },
});
<\/script>

<style lang="scss">
.table-btn-groups {
  display: flex;
  flex-wrap: wrap;
}
.table-btn {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1rem;
}
</style>
`},{description:k(()=>[sn]),highlight:k(()=>[en]),default:k(()=>[E(C)]),_:1}),on,E(r,{sourceCode:`<template>
  <div>
    <div class="mb-2">
      <d-button @click="handleClick" class="mr-1">Get CheckedRows</d-button>
      <d-button @click="insertRow" class="mr-1">Insert Row</d-button>
      <d-button @click="deleteRow" class="mr-1">Delete Row</d-button>
      <d-button @click="toggleRow" class="mr-1">Toggle Row</d-button>
    </div>
    <d-table
      ref="tableRef"
      :data="data"
      :row-key="(item) => item.id"
      @cell-click="onCellClick"
      @row-click="onRowClick"
      @check-change="checkChange"
      @check-all-change="checkAllChange"
    >
      <d-column type="checkable" width="40" :checkable="checkable" reserve-check></d-column>
      <d-column field="firstName" header="First Name" width="200"></d-column>
      <d-column
        field="lastName"
        header="Last Name"
        width="200"
        resizeable
        min-width="150"
        max-width="250"
        @resize-start="onResizeStart"
        @resizing="onResizing"
        @resize-end="onResizeEnd"
      ></d-column>
      <d-column field="gender" header="Gender"></d-column>
      <d-column field="date" header="Date of birth"></d-column>
    </d-table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const tableRef = ref();
    const data = ref([
      {
        id: '0',
        firstName: 'po',
        lastName: 'Lang',
        gender: 'Male',
        date: '1990/01/15',
      },
      {
        id: '1',
        firstName: 'john',
        lastName: 'Li',
        gender: 'Female',
        date: '1990/01/16',
      },
      {
        id: '2',
        firstName: 'peng',
        lastName: 'Li',
        gender: 'Male',
        date: '1990/01/17',
      },
      {
        id: '3',
        firstName: 'Dale',
        lastName: 'Yu',
        gender: 'Female',
        date: '1990/01/18',
      },
    ]);
    const handleClick = () => {
      console.log(tableRef.value.store.getCheckedRows());
    };
    const onCellClick = (params) => {
      console.log('cell-click', params);
    };
    const onRowClick = (params) => {
      console.log('row-click', params);
    };

    const checkChange = (checked, row, selection) => {
      console.log('checked row:', checked, row, selection);
    };

    const checkAllChange = (checked, selection) => {
      console.log('checked:', checked, selection);
    };

    const toggleRow = () => {
      tableRef.value.store.toggleRowSelection(data.value[0]);
    };

    const checkable = (row, rowIndex) => {
      return row.lastName === 'Li' || false;
    };

    const insertRow = () => {
      data.value.push({
        id: \`\${data.value.length}\`,
        firstName: 'Jeff',
        lastName: 'You',
        gender: 'Male',
        date: '1989/05/19',
      });
    };

    const deleteRow = () => {
      data.value.splice(0, 1);
    };

    const onResizeStart = (e) => {
      console.log('resize start', e);
    };

    const onResizing = (e) => {
      console.log('resizing', e);
    };

    const onResizeEnd = (e) => {
      console.log('resize end', e);
    };

    return {
      tableRef,
      data,
      handleClick,
      onCellClick,
      onRowClick,
      checkChange,
      checkAllChange,
      checkable,
      insertRow,
      deleteRow,
      onResizeStart,
      onResizing,
      onResizeEnd,
      toggleRow,
    };
  },
});
<\/script>
`},{description:k(()=>[pn]),highlight:k(()=>[ln]),default:k(()=>[E(o)]),_:1}),cn,E(r,{sourceCode:`<template>
  <div>
    <d-table :data="data">
      <d-column type="index" width="40"></d-column>
      <d-column field="firstName" header="First Name"></d-column>
      <d-column field="lastName" header="Last Name"></d-column>
      <d-column field="gender" header="Gender"></d-column>
      <d-column field="date" header="Date of birth"></d-column>
    </d-table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const data = ref([
      {
        firstName: 'po',
        lastName: 'Lang',
        gender: 'Male',
        date: '1990/01/15',
      },
      {
        firstName: 'john',
        lastName: 'Li',
        gender: 'Female',
        date: '1990/01/16',
      },
      {
        firstName: 'peng',
        lastName: 'Li',
        gender: 'Male',
        date: '1990/01/17',
      },
      {
        firstName: 'Dale',
        lastName: 'Yu',
        gender: 'Female',
        date: '1990/01/18',
      },
    ]);

    return { data };
  },
});
<\/script>
`},{description:k(()=>[un]),highlight:k(()=>[rn]),default:k(()=>[E(d)]),_:1}),kn,E(r,{sourceCode:`<template>
  <d-table :data="dataSource">
    <d-column type="index" width="80">
      <template #default="scope">
        {{ \`No.\${scope.rowIndex + 1}\` }}
      </template>
    </d-column>
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
    <d-column header="Operation" align="right">
      <template #default="scope">
        <d-button @click="handleClick(scope.row)">\u7F16\u8F91</d-button>
      </template>
    </d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dataSource = ref([
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'green',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);
    const handleClick = (row) => {
      console.log(row);
    };

    return { dataSource, handleClick };
  },
});
<\/script>
`},{description:k(()=>[dn]),highlight:k(()=>[gn]),default:k(()=>[E(p)]),_:1}),mn,E(r,{sourceCode:`<template>
  <d-table ref="tableRef" :data="dataSource" row-key="id" @cellClick="cellClick">
    <d-column type="index" width="80">
      <template #default="scope">
        {{ \`No.\${scope.rowIndex + 1}\` }}
      </template>
    </d-column>
    <d-column field="firstName" header="First Name" type="editable">
      <template #cell="scope">
        {{ scope.row.firstName }}
      </template>
      <template #cellEdit="scope">
        <d-input
          ref="firstNameRef"
          v-model="scope.row.firstName"
          @change="(value) => change(scope.row, scope.rowIndex, 'firstName', value)"
          @blur="() => blur(scope.row, scope.rowIndex, 'firstName')"
        />
      </template>
    </d-column>
    <d-column field="lastName" header="Last Name" type="editable">
      <template #cell="scope">
        {{ scope.row.lastName }}
      </template>
      <template #cellEdit="scope">
        <d-input
          ref="lastNameRef"
          v-model="scope.row.lastName"
          @change="(value) => change(scope.row, scope.rowIndex, 'lastName', value)"
          @blur="() => blur(scope.row, scope.rowIndex, 'lastName')"
        />
      </template>
    </d-column>
    <d-column field="gender" header="Gender" type="editable">
      <template #cell="scope">
        {{ scope.row.gender }}
      </template>
      <template #cellEdit="scope">
        <d-select
          ref="genderRef"
          v-model="scope.row.gender"
          :options="options"
          @valueChange="(value) => change(scope.row, scope.rowIndex, 'gender', value)"
        />
      </template>
    </d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref, nextTick } from 'vue';

export default defineComponent({
  setup() {
    const tableRef = ref();
    const firstNameRef = ref();
    const lastNameRef = ref();
    const genderRef = ref();
    const dataSource = ref([
      {
        firstName: 'Mark',
        lastName: 'Otto',
        gender: 'Male',
        id: 'Mark',
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        id: 'Jacob',
      },
    ]);

    const options = ref(['Female', 'Male']);

    const change = (row, rowIndex, field, value) => {
      dataSource.value[rowIndex][field] = typeof value === 'object' ? value.value : value;
      tableRef.value.store.setCellMode(row, rowIndex, field, 'readonly');
    };
    const blur = (row, rowIndex, field) => {
      tableRef.value.store.setCellMode(row, rowIndex, field, 'readonly');
    };

    const cellClick = (obj) => {
      tableRef.value.store.setCellMode(obj.row, obj.rowIndex, obj.column.field, 'edit');
      const refMap = {
        firstName: firstNameRef,
        lastName: lastNameRef,
        gender: genderRef,
      };
      const targetRef = refMap[obj.column.field];
      nextTick(() => {
        targetRef?.value?.focus();
      });
    };

    return { tableRef, firstNameRef, lastNameRef, genderRef, dataSource, options, change, blur, cellClick };
  },
});
<\/script>
`},{description:k(()=>[fn]),highlight:k(()=>[yn]),default:k(()=>[E(l)]),_:1}),hn,E(r,{sourceCode:`<template>
  <d-table :data="dataSource">
    <d-column field="firstName">
      <template #header>
        <div>
          <span style="margin-right:4px;font-size:var(--devui-font-size,12px)">First Name</span>
          <d-popover content="some tips text" trigger="hover" :position="['top']">
            <d-icon name="info-o"></d-icon>
          </d-popover>
        </div>
      </template>
    </d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dataSource = ref([
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'green',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);

    return { dataSource };
  },
});
<\/script>
`},{description:k(()=>[Fn]),highlight:k(()=>[Cn]),default:k(()=>[E(g)]),_:1}),Nn,E(r,{sourceCode:`<template>
  <div>
    <d-button @click="handleClick">\u66F4\u65B0\u6570\u636E</d-button>
    <d-table :data="emptyData" :show-loading="showLoading">
      <d-column field="firstName" header="First Name"></d-column>
      <d-column field="lastName" header="Last Name"></d-column>
      <d-column field="gender" header="Gender"></d-column>
      <d-column field="date" header="Date of birth"></d-column>
      <template #empty>
        <div style="text-align: center;">No Data</div>
      </template>
    </d-table>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const emptyData = ref([]);
    const showLoading = ref(false);
    const handleClick = () => {
      showLoading.value = true;
      setTimeout(() => {
        showLoading.value = false;
        emptyData.value = [
          {
            firstName: 'po',
            lastName: 'Lang',
            gender: 'Male',
            date: '1990/01/15',
          },
          {
            firstName: 'john',
            lastName: 'Li',
            gender: 'Female',
            date: '1990/01/16',
          },
          {
            firstName: 'peng',
            lastName: 'Li',
            gender: 'Male',
            date: '1990/01/17',
          },
          {
            firstName: 'Dale',
            lastName: 'Yu',
            gender: 'Female',
            date: '1990/01/18',
          },
        ];
      }, 1000);
    };

    return { emptyData, showLoading, handleClick };
  },
});
<\/script>
`},{description:k(()=>[En]),highlight:k(()=>[vn]),default:k(()=>[E(i)]),_:1}),bn,E(r,{sourceCode:`<template>
  <d-table :data="dataSource" table-height="200px" fix-header style="width:100%">
    <d-column field="firstName" header="First Name" :width="150"></d-column>
    <d-column field="lastName" header="Last Name" :width="150"></d-column>
    <d-column field="gender" header="Gender" :width="150"></d-column>
    <d-column field="date" header="Date of birth" :width="150"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dataSource = ref([
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'green',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
      {
        firstName: 'po',
        lastName: 'lang',
        gender: 'Male',
        date: '1990/01/14',
      },
      {
        firstName: 'john',
        lastName: 'li',
        gender: 'Male',
        date: '1990/01/14',
      },
      {
        firstName: 'peng',
        lastName: 'li',
        gender: 'Female',
        date: '1990/01/14',
      },
      {
        firstName: 'Danni',
        lastName: 'Yu',
        gender: 'Female',
        date: '1990/01/14',
      },
    ]);

    return { dataSource };
  },
});
<\/script>
`},{description:k(()=>[wn]),highlight:k(()=>[Bn]),default:k(()=>[E(y)]),_:1}),xn,E(r,{sourceCode:`<template>
  <d-table :data="tableDataFixedColumn" table-layout="auto">
    <d-column field="idNo" header="ID Card Number" fixed-left="0px"></d-column>
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
    <d-column field="address" header="Address"></d-column>
    <d-column field="occupation" header="Occupation"></d-column>
    <d-column field="occupation" header="Occupation"></d-column>
    <d-column field="occupation" header="Occupation"></d-column>
    <d-column field="occupation" header="Occupation" fixed-right="0px"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const tableDataFixedColumn = ref([
      {
        firstName: 'po',
        lastName: 'Lang',
        gender: 'Male',
        date: '1990/01/15',
        address: 'Shenzhen Guangdong',
        occupation: 'Worker',
        idNo: '2000**********9999',
      },
      {
        firstName: 'john',
        lastName: 'Li',
        gender: 'Female',
        date: '1990/01/16',
        address: 'Shenzhen Guangdong',
        occupation: 'Worker',
        idNo: '2000**********9999',
      },
      {
        firstName: 'peng',
        lastName: 'Li',
        gender: 'Male',
        date: '1990/01/17',
        address: 'Shenzhen Guangdong',
        occupation: 'Worker',
        idNo: '2000**********9999',
      },
      {
        firstName: 'Dale',
        lastName: 'Yu',
        gender: 'Female',
        date: '1990/01/18',
        address: 'Shenzhen Guangdong',
        occupation: 'Worker',
        idNo: '2000**********9999',
      },
    ]);

    const filterList = computed(() =>
      tableDataFixedColumn.value.map((item) => ({ name: \`\${item.firstName} \${item.lastName}\`, value: item.firstName }))
    );

    return {
      tableDataFixedColumn,
      filterList,
    };
  },
});
<\/script>
`},{description:k(()=>[Dn]),highlight:k(()=>[An]),default:k(()=>[E(m)]),_:1}),_n,E(r,{sourceCode:`<template>
  <d-table :data="dataSource" :span-method="spanMethod" border-type="bordered">
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dataSource = ref([
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'green',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);
    const spanMethod = ({ row, column, rowIndex, columnIndex }) => {
      if (rowIndex === 0 && columnIndex === 0) {
        return { rowspan: 1, colspan: 2 };
      }
      if (rowIndex === 2 && columnIndex === 0) {
        return [2, 2];
      }
      if (rowIndex === 2 && columnIndex === 3) {
        return [2, 1];
      }
    };

    return { dataSource, spanMethod };
  },
});
<\/script>
`},{description:k(()=>[Mn]),highlight:k(()=>[qn]),default:k(()=>[E(v)]),_:1}),Rn,E(r,{sourceCode:`<template>
  <d-table :data="dataSource">
    <d-column field="name" header="Name">
      <d-column field="firstName" header="First Name"></d-column>
      <d-column field="lastName" header="Last Name"></d-column>
    </d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dataSource = ref([
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'green',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);

    return { dataSource };
  },
});
<\/script>
`},{description:k(()=>[Sn]),highlight:k(()=>[Ln]),default:k(()=>[E(f)]),_:1}),Tn,E(r,{sourceCode:`<template>
  <d-table :data="dataSource" @sort-change="handleSortChange">
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name" sortable :sort-method="sortNameMethod"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth" sortable sort-direction="ASC" :sort-method="sortDateMethod"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const dataSource = ref([
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Female',
        date: '1990/01/13',
      },
      {
        firstName: 'Green',
        lastName: 'Gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);
    const handleSortChange = ({ field, direction }) => {
      console.log('field', field);
      console.log('direction', direction);
    };
    const sortDateMethod = (a, b) => {
      return a.date > b.date;
    };
    const sortNameMethod = (a, b) => {
      return a.lastName > b.lastName;
    };

    return { dataSource, handleSortChange, sortDateMethod, sortNameMethod };
  },
});
<\/script>
`},{description:k(()=>[zn]),highlight:k(()=>[Vn]),default:k(()=>[E(b)]),_:1}),Gn,E(r,{sourceCode:`<template>
  <d-table :data="dataSource">
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name" filterable :filter-list="filterList" @filter-change="handleFilterChange"></d-column>
    <d-column
      field="gender"
      header="Gender"
      filterable
      :filter-multiple="false"
      :filter-list="singleFilterList"
      @filter-change="handleSingleChange"
    ></d-column>
    <d-column field="date" header="Date of birth"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const originSource = ref([
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Female',
        date: '1990/01/13',
      },
      {
        firstName: 'Green',
        lastName: 'Gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);
    const dataSource = ref([...originSource.value]);
    const filterList = dataSource.value.map((item) => {
      return { name: item.lastName, value: item.lastName };
    });
    const singleFilterList = [
      {
        name: 'Clear',
        value: 'Clear',
      },
      {
        name: 'Female',
        value: 'Female',
      },
      {
        name: 'Male',
        value: 'Male',
      },
    ];
    const handleFilterChange = (val) => {
      const filterList = val.map((item) => item.value);
      dataSource.value = originSource.value.filter((item) => filterList.includes(item.lastName));
    };
    const handleSingleChange = (val) => {
      if (val.value === 'Clear') {
        dataSource.value = originSource.value;
        return;
      }
      dataSource.value = originSource.value.filter((item) => item.gender === val.value);
    };

    return { dataSource, filterList, singleFilterList, handleFilterChange, handleSingleChange };
  },
});
<\/script>
`},{description:k(()=>[On]),highlight:k(()=>[In]),default:k(()=>[E(z)]),_:1}),Jn,E(r,{sourceCode:`<template>
  <div>
    <d-button @click="toggleRowExpansion" class="mr-m mb-m">toggleRowExpansion</d-button>
    <d-table ref="tableRef" :data="dataSource" row-key="id" :expand-row-keys="['1', '3']" @expand-change="expandChange">
      <d-column type="expand">
        <template #default="rowData">
          <div>First Name: {{ rowData.row.firstName }}</div>
          <div>Last Name: {{ rowData.row.lastName }}</div>
          <div>Gender: {{ rowData.row.gender }}</div>
          <div>Date of birth: {{ rowData.row.date }}</div>
        </template>
      </d-column>
      <d-column field="firstName" header="First Name"></d-column>
      <d-column field="lastName" header="Last Name"></d-column>
      <d-column field="gender" header="Gender"></d-column>
      <d-column field="date" header="Date of birth"></d-column>
    </d-table>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const tableRef = ref();

    const dataSource = ref([
      {
        id: '1',
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        id: '2',
        firstName: 'Mark',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        id: '3',
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Female',
        date: '1990/01/13',
      },
      {
        id: '4',
        firstName: 'Green',
        lastName: 'Gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);

    /* onMounted(() => {
      tableRef.value.store.expandRow(dataSource.value[0]);
    }); */

    const expandChange = (currentRow, expandedRows) => {
      console.log('currentRow', currentRow);
      console.log('expandedRows', expandedRows);
    };

    const toggleRowExpansion = () => {
      tableRef.value.store.toggleRowExpansion(dataSource.value[0]);
    };

    return { dataSource, expandChange, tableRef, toggleRowExpansion };
  },
});
<\/script>
`},{highlight:k(()=>[jn]),default:k(()=>[E(_)]),_:1}),Yn,E(r,{sourceCode:`<template>
  <d-table :indent="32" @check-change="treeCheckChange" :data="baseTreeTableData" row-key="firstName">
    <d-column type="index">
      <template #default="scope">
        {{ \`No.\${scope.rowIndex + 1}\` }}
      </template>
    </d-column>
    <d-column field="firstName" header="First Name" show-overflow-tooltip></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const baseTreeTableData = ref([
      {
        firstName: 'Mark1',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male1',
        children: [
          {
            firstName: 'Mark2',
            lastName: 'Otto',
            date: '1990/01/11',
            gender: 'Male',
          },
          {
            firstName: 'Mark3',
            lastName: 'Otto',
            date: '1990/01/11',
            gender: 'Male',
            children: [
              {
                firstName: 'Mark31',
                lastName: 'Otto',
                date: '1990/01/11',
                gender: 'Male',
              },
              {
                firstName: 'Mark32',
                lastName: 'Otto',
                date: '1990/01/11',
                gender: 'Male',
              },
            ],
          },
        ],
      },
      {
        firstName: 'Jacob',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
        children: [
          {
            firstName: 'Jacob2',
            lastName: 'Otto',
            date: '1990/01/11',
            gender: 'Male',
          },
          {
            firstName: 'Jacob3',
            lastName: 'Otto',
            date: '1990/01/11',
            gender: 'Male',
            children: [
              {
                firstName: 'Jacob31',
                lastName: 'Otto',
                date: '1990/01/11',
                gender: 'Male',
              },
              {
                firstName: 'Jacob32',
                lastName: 'Otto',
                date: '1990/01/11',
                gender: 'Male',
              },
            ],
          },
        ],
      },
      {
        firstName: 'Danni',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'green',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
    ]);

    const treeCheckChange = (val, row, selection) => {
      console.log('treeCheckChange', selection);
    };

    return { baseTreeTableData, treeCheckChange };
  },
});
<\/script>
`},{description:k(()=>[$n]),highlight:k(()=>[Un]),default:k(()=>[E(R)]),_:1}),Wn,E(r,{sourceCode:`<template>
  <d-table :data="dataSource" table-height="200px" :show-loading="showLoading" :lazy="true" @load-more="loadMore">
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
  </d-table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const showLoading = ref(false);
    const dataSource = ref([
      {
        firstName: 'diy0',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'diy1',
        lastName: 'Otto',
        date: '1990/01/11',
        gender: 'Male',
      },
      {
        firstName: 'diy2',
        lastName: 'Thornton',
        gender: 'Female',
        date: '1990/01/12',
      },
      {
        firstName: 'diy3',
        lastName: 'Chen',
        gender: 'Male',
        date: '1990/01/13',
      },
      {
        firstName: 'diy4',
        lastName: 'gerong',
        gender: 'Male',
        date: '1990/01/14',
      },
      {
        firstName: 'diy5',
        lastName: 'lang',
        gender: 'Male',
        date: '1990/01/14',
      },
      {
        firstName: 'diy6',
        lastName: 'li',
        gender: 'Male',
        date: '1990/01/14',
      },
      {
        firstName: 'diy7',
        lastName: 'li',
        gender: 'Female',
        date: '1990/01/14',
      },
      {
        firstName: 'diy8',
        lastName: 'Yu',
        gender: 'Female',
        date: '1990/01/14',
      },
      {
        firstName: 'diy9',
        lastName: 'Yu',
        gender: 'Female',
        date: '1990/01/14',
      },
    ]);

    let total = 100;

    const loadMore = () => {
      if (dataSource.value.length >= total || showLoading.value) {
        return;
      }

      showLoading.value = true;
      const moreData = [];
      const size = dataSource.value.length;
      for (let i = 0; i < 10; i++) {
        moreData.push({
          firstName: 'diy' + (i + size),
          lastName: 'more data',
          gender: 'Female',
          date: '2022/07/20',
        });
      }

      // mock ajax
      setTimeout(() => {
        showLoading.value = false;
        dataSource.value = dataSource.value.concat(moreData);
      }, 500);
    };

    return { dataSource, loadMore, showLoading };
  },
});
<\/script>
`},{description:k(()=>[Hn]),highlight:k(()=>[Kn]),default:k(()=>[E(q)]),_:1}),Pn])}var ta=K(X,[["render",Qn]]);export{aa as __pageData,ta as default};
