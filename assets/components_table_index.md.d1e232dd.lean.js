var Y=Object.defineProperty;var S=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var V=(o,t,e)=>t in o?Y(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,_=(o,t)=>{for(var e in t||(t={}))$.call(t,e)&&V(o,e,t[e]);if(S)for(var e of S(t))W.call(t,e)&&V(o,e,t[e]);return o};import{_ as U,V as N,r as B,c as P,a as C,w as u,b as z,d as n,e as a,o as H}from"./app.643de55c.js";const K={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:o,createVNode:t,withCtx:e,openBlock:s,createElementBlock:i}=N;function F(r,h){const l=o("d-column"),p=o("d-table");return s(),i("div",null,[t(p,{data:r.baseTableData},{default:e(()=>[t(l,{field:"firstName",header:"First Name"}),t(l,{field:"lastName",header:"Last Name"}),t(l,{field:"gender",header:"Gender"}),t(l,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])}const{defineComponent:d,ref:c}=N,y=d({setup(){return{baseTableData:c([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}])}}});return _({render:F},y)}(),"render-demo-1":function(){const{resolveComponent:o,createVNode:t,createTextVNode:e,createElementVNode:s,renderList:i,Fragment:F,openBlock:d,createElementBlock:c,toDisplayString:y,withCtx:r,createBlock:h}=N,l={class:"table-btn-groups"},p={class:"table-btn"},k=e(" \u81EA\u52A8\u8868\u683C\u5E03\u5C40\uFF1A "),m={class:"table-btn"},f=e(" \u6591\u9A6C\u7EB9\uFF1A "),g={class:"table-btn"},x=e(" \u8868\u5934\u80CC\u666F\u8272\uFF1A "),T={class:"table-btn"},G=e(" \u8868\u683C\u5927\u5C0F\uFF1A "),O={class:"table-btn"},j=e(" \u8868\u683C\u8FB9\u6846\uFF1A ");function I(b,E){const w=o("d-switch"),q=o("d-radio"),M=o("d-radio-group"),D=o("d-column"),L=o("d-table");return d(),c("div",null,[s("div",l,[s("div",p,[k,t(w,{checked:b.tableLayout,"onUpdate:checked":E[0]||(E[0]=v=>b.tableLayout=v)},null,8,["checked"])]),s("div",m,[f,t(w,{checked:b.striped,"onUpdate:checked":E[1]||(E[1]=v=>b.striped=v)},null,8,["checked"])]),s("div",g,[x,t(w,{checked:b.headerBg,"onUpdate:checked":E[2]||(E[2]=v=>b.headerBg=v)},null,8,["checked"])]),s("div",T,[G,t(M,{direction:"row",modelValue:b.size,"onUpdate:modelValue":E[3]||(E[3]=v=>b.size=v)},{default:r(()=>[(d(!0),c(F,null,i(b.sizeList,v=>(d(),h(q,{key:v.label,value:v.value},{default:r(()=>[e(y(v.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),s("div",O,[j,t(M,{direction:"row",modelValue:b.borderType,"onUpdate:modelValue":E[4]||(E[4]=v=>b.borderType=v)},{default:r(()=>[(d(!0),c(F,null,i(b.borderTypeList,v=>(d(),h(q,{key:v.label,value:v.value},{default:r(()=>[e(y(v.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])])]),t(L,{"table-layout":b.tableLayout?"auto":"fixed",striped:b.striped,"header-bg":b.headerBg,data:b.stripedTableData,size:b.size,"border-type":b.borderType},{default:r(()=>[t(D,{field:"firstName",header:"First Name"}),t(D,{field:"lastName",header:"Last Name"}),t(D,{field:"gender",header:"Gender"}),t(D,{field:"date",header:"Date of birth"})]),_:1},8,["table-layout","striped","header-bg","data","size","border-type"])])}const{defineComponent:J,ref:A}=N,R=J({setup(){const b=A(!1),E=A(!1),w=A(!1),q=A("sm"),M=A(""),D=[{label:"Normal",value:"sm"},{label:"Middle",value:"md"},{label:"large",value:"lg"}],L=[{label:"Normal",value:""},{label:"Bordered",value:"bordered"},{label:"Borderless",value:"borderless"}];return{stripedTableData:A([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),striped:E,headerBg:w,size:q,sizeList:D,borderType:M,borderTypeList:L,tableLayout:b}}});return _({render:I},R)}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:t,withCtx:e,createVNode:s,createElementVNode:i,openBlock:F,createElementBlock:d}=N,c=o("Get CheckedRows");function y(p,k){const m=t("d-button"),f=t("d-column"),g=t("d-table");return F(),d("div",null,[i("div",null,[s(m,{onClick:p.handleClick},{default:e(()=>[c]),_:1},8,["onClick"]),s(g,{ref:"tableRef",data:p.data},{default:e(()=>[s(f,{type:"checkable"}),s(f,{field:"firstName",header:"First Name"}),s(f,{field:"lastName",header:"Last Name"}),s(f,{field:"gender",header:"Gender"}),s(f,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])])}const{defineComponent:r,ref:h}=N,l=r({setup(){const p=h(),k=h([{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18"}]);return{tableRef:p,data:k,handleClick:()=>{console.log(p.value.getCheckedRows())}}}});return _({render:y},l)}(),"render-demo-3":function(){const{resolveComponent:o,createVNode:t,withCtx:e,createElementVNode:s,openBlock:i,createElementBlock:F}=N;function d(h,l){const p=o("d-column"),k=o("d-table");return i(),F("div",null,[s("div",null,[t(k,{data:h.data},{default:e(()=>[t(p,{type:"index"}),t(p,{field:"firstName",header:"First Name"}),t(p,{field:"lastName",header:"Last Name"}),t(p,{field:"gender",header:"Gender"}),t(p,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])])}const{defineComponent:c,ref:y}=N,r=c({setup(){return{data:y([{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18"}])}}});return _({render:d},r)}(),"render-demo-4":function(){const{toDisplayString:o,createTextVNode:t,resolveComponent:e,withCtx:s,createVNode:i,openBlock:F,createElementBlock:d}=N,c=t("\u7F16\u8F91");function y(p,k){const m=e("d-column"),f=e("d-button"),g=e("d-table");return F(),d("div",null,[i(g,{data:p.dataSource},{default:s(()=>[i(m,{type:"index"},{default:s(x=>[t(o(`No.${x.rowIndex+1}`),1)]),_:1}),i(m,{field:"firstName",header:"First Name"}),i(m,{field:"lastName",header:"Last Name"}),i(m,{field:"gender",header:"Gender"}),i(m,{field:"date",header:"Date of birth"}),i(m,{header:"Operation"},{default:s(x=>[i(f,{onClick:T=>p.handleClick(x.row)},{default:s(()=>[c]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}const{defineComponent:r,ref:h}=N,l=r({setup(){return{dataSource:h([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),handleClick:m=>{console.log(m)}}}});return _({render:y},l)}(),"render-demo-5":function(){const{createElementVNode:o,resolveComponent:t,createVNode:e,withCtx:s,openBlock:i,createElementBlock:F}=N,d=o("span",{style:{"margin-right":"4px","font-size":"var(--devui-font-size,12px)"}},"First Name",-1);function c(l,p){const k=t("d-icon"),m=t("d-popover"),f=t("d-column"),g=t("d-table");return i(),F("div",null,[e(g,{data:l.dataSource},{default:s(()=>[e(f,{field:"firstName"},{header:s(()=>[o("div",null,[d,e(m,{content:"some tips text",trigger:"hover",position:["top"]},{reference:s(()=>[e(k,{name:"info-o"})]),_:1})])]),_:1}),e(f,{field:"lastName",header:"Last Name"}),e(f,{field:"gender",header:"Gender"}),e(f,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])}const{defineComponent:y,ref:r}=N,h=y({setup(){return{dataSource:r([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}])}}});return _({render:c},h)}(),"render-demo-6":function(){const{createTextVNode:o,resolveComponent:t,withCtx:e,createVNode:s,createElementVNode:i,openBlock:F,createElementBlock:d}=N,c=o("\u66F4\u65B0\u6570\u636E");function y(p,k){const m=t("d-button"),f=t("d-column"),g=t("d-table");return F(),d("div",null,[i("div",null,[s(m,{onClick:p.handleClick},{default:e(()=>[c]),_:1},8,["onClick"]),s(g,{data:p.emptyData,"show-loading":p.showLoading},{default:e(()=>[s(f,{field:"firstName",header:"First Name"}),s(f,{field:"lastName",header:"Last Name"}),s(f,{field:"gender",header:"Gender"}),s(f,{field:"date",header:"Date of birth"})]),_:1},8,["data","show-loading"])])])}const{defineComponent:r,ref:h}=N,l=r({setup(){const p=h([]),k=h(!1);return{emptyData:p,showLoading:k,handleClick:()=>{k.value=!0,setTimeout(()=>{k.value=!1,p.value=[{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18"}]},1e3)}}}});return _({render:y},l)}(),"render-demo-7":function(){const{resolveComponent:o,createVNode:t,withCtx:e,openBlock:s,createElementBlock:i}=N;function F(r,h){const l=o("d-column"),p=o("d-table");return s(),i("div",null,[t(p,{data:r.dataSource,"table-height":"200px","fix-header":""},{default:e(()=>[t(l,{field:"firstName",header:"First Name"}),t(l,{field:"lastName",header:"Last Name"}),t(l,{field:"gender",header:"Gender"}),t(l,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])}const{defineComponent:d,ref:c}=N,y=d({setup(){return{dataSource:c([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"},{firstName:"po",lastName:"lang",gender:"Male",date:"1990/01/14"},{firstName:"john",lastName:"li",gender:"Male",date:"1990/01/14"},{firstName:"peng",lastName:"li",gender:"Female",date:"1990/01/14"},{firstName:"Danni",lastName:"Yu",gender:"Female",date:"1990/01/14"}])}}});return _({render:F},y)}(),"render-demo-8":function(){const{createTextVNode:o,resolveComponent:t,withCtx:e,createVNode:s,createElementVNode:i,openBlock:F,createElementBlock:d}=N,c=o("\u66F4\u65B0\u6570\u636E");function y(k,m){const f=t("d-button"),g=t("d-column"),x=t("d-table");return F(),d("div",null,[i("div",null,[s(f,{onClick:k.handleClick},{default:e(()=>[c]),_:1},8,["onClick"]),s(x,{data:k.emptyData,"table-layout":"auto"},{default:e(()=>[s(g,{field:"idNo",header:"ID Card Number","fixed-left":"0px"}),s(g,{field:"firstName",header:"First Name"}),s(g,{field:"lastName",header:"Last Name"}),s(g,{field:"gender",header:"Gender"}),s(g,{field:"date",header:"Date of birth"}),s(g,{field:"address",header:"Address"}),s(g,{field:"occupation",header:"Occupation"}),s(g,{field:"occupation",header:"Occupation"}),s(g,{field:"occupation",header:"Occupation"}),s(g,{field:"occupation",header:"Occupation","fixed-right":"0px"})]),_:1},8,["data"])])])}const{defineComponent:r,ref:h,computed:l}=N,p=r({setup(){const k=h([]),m=()=>{k.value=[{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"}]},f=l(()=>k.value.map(g=>({name:`${g.firstName} ${g.lastName}`,value:g.firstName})));return{emptyData:k,handleClick:m,filterList:f}}});return _({render:y},p)}(),"render-demo-9":function(){const{resolveComponent:o,createVNode:t,withCtx:e,openBlock:s,createElementBlock:i}=N;function F(r,h){const l=o("d-column"),p=o("d-table");return s(),i("div",null,[t(p,{data:r.dataSource,"span-method":r.spanMethod,"border-type":"bordered"},{default:e(()=>[t(l,{field:"firstName",header:"First Name"}),t(l,{field:"lastName",header:"Last Name"}),t(l,{field:"gender",header:"Gender"}),t(l,{field:"date",header:"Date of birth"})]),_:1},8,["data","span-method"])])}const{defineComponent:d,ref:c}=N,y=d({setup(){return{dataSource:c([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),spanMethod:({row:l,column:p,rowIndex:k,columnIndex:m})=>{if(k===0&&m===0)return{rowspan:1,colspan:2};if(k===2&&m===0)return[2,2];if(k===2&&m===3)return[2,1]}}}});return _({render:F},y)}(),"render-demo-10":function(){const{resolveComponent:o,createVNode:t,withCtx:e,openBlock:s,createElementBlock:i}=N;function F(r,h){const l=o("d-column"),p=o("d-table");return s(),i("div",null,[t(p,{data:r.dataSource},{default:e(()=>[t(l,{field:"name",header:"Name"},{default:e(()=>[t(l,{field:"firstName",header:"First Name"}),t(l,{field:"lastName",header:"Last Name"})]),_:1}),t(l,{field:"gender",header:"Gender"}),t(l,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])}const{defineComponent:d,ref:c}=N,y=d({setup(){return{dataSource:c([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}])}}});return _({render:F},y)}()}},Sn='{"title":"Table \u8868\u683C","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8868\u683C\u6837\u5F0F","slug":"\u8868\u683C\u6837\u5F0F"},{"level":3,"title":"\u8868\u683C\u591A\u9009","slug":"\u8868\u683C\u591A\u9009"},{"level":3,"title":"\u7D22\u5F15\u5217","slug":"\u7D22\u5F15\u5217"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5217","slug":"\u81EA\u5B9A\u4E49\u5217"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u8868\u5934","slug":"\u81EA\u5B9A\u4E49\u8868\u5934"},{"level":3,"title":"\u7A7A\u6570\u636E\u6A21\u677F","slug":"\u7A7A\u6570\u636E\u6A21\u677F"},{"level":3,"title":"\u56FA\u5B9A\u8868\u5934","slug":"\u56FA\u5B9A\u8868\u5934"},{"level":3,"title":"\u56FA\u5B9A\u5217","slug":"\u56FA\u5B9A\u5217"},{"level":3,"title":"\u5408\u5E76\u5355\u5143\u683C","slug":"\u5408\u5E76\u5355\u5143\u683C"},{"level":3,"title":"\u8868\u5934\u5206\u7EC4","slug":"\u8868\u5934\u5206\u7EC4"},{"level":3,"title":"Table \u53C2\u6570","slug":"table-\u53C2\u6570"},{"level":3,"title":"Table \u65B9\u6CD5","slug":"table-\u65B9\u6CD5"},{"level":3,"title":"Column \u53C2\u6570","slug":"column-\u53C2\u6570"},{"level":3,"title":"Column \u63D2\u69FD","slug":"column-\u63D2\u69FD"},{"level":3,"title":"Table \u7C7B\u578B\u5B9A\u4E49","slug":"table-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"Column \u7C7B\u578B\u5B9A\u4E49","slug":"column-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/table/index.md","lastUpdated":1649411505599}',Q=z('<h1 id="table-\u8868\u683C" tabindex="-1">Table \u8868\u683C <a class="header-anchor" href="#table-\u8868\u683C" aria-hidden="true">#</a></h1><p>\u5C55\u793A\u884C\u5217\u6570\u636E\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><ol><li>\u5F53\u6709\u5927\u91CF\u7ED3\u6784\u5316\u7684\u6570\u636E\u9700\u8981\u5C55\u73B0\u65F6\uFF1B</li><li>\u5F53\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u81EA\u5B9A\u4E49\u64CD\u4F5C\u7B49\u590D\u6742\u884C\u4E3A\u65F6\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),X=n("div",null,[a("\u7B80\u5355\u8868\u683C\uFF0C"),n("code",null,"d-table"),a("\u7EC4\u4EF6\u4E0A\u7684"),n("code",null,"data"),a("\u5C5E\u6027\u4F20\u5165\u8981\u5C55\u793A\u7684\u6570\u636E\uFF0C"),n("code",null,"d-column"),a("\u7EC4\u4EF6\u4E0A\u901A\u8FC7"),n("code",null,"field"),a("\u4F20\u5165\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF0C"),n("code",null,"header"),a("\u4F20\u5165\u5BF9\u5E94\u5217\u7684\u6807\u9898\u3002")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("baseTableData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),nn=n("h3",{id:"\u8868\u683C\u6837\u5F0F",tabindex:"-1"},[a("\u8868\u683C\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u6837\u5F0F","aria-hidden":"true"},"#")],-1),an=n("div",null,[n("code",null,"table-layout"),a("\u53C2\u6570\u8BBE\u7F6E\u8868\u683C\u7684\u5E03\u5C40\u65B9\u5F0F\uFF0C\u76EE\u524D\u652F\u6301"),n("code",null,"fixed"),a("\u548C"),n("code",null,"auto"),a("\u4E24\u79CD\u7C7B\u578B\uFF1B"),n("code",null,"striped"),a("\u53C2\u6570\u8BBE\u7F6E\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9\uFF1B"),n("code",null,"header-bg"),a("\u53C2\u6570\u8BBE\u7F6E\u662F\u5426\u663E\u793A\u8868\u5934\u80CC\u666F\u8272\uFF1B"),n("code",null,"size"),a("\u53C2\u6570\u8BBE\u7F6E\u8868\u683C\u5927\u5C0F\uFF1B"),n("code",null,"border-type"),a("\u8BBE\u7F6E\u8868\u683C\u8FB9\u6846\u6837\u5F0F\u3002")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn-groups"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u81EA\u52A8\u8868\u683C\u5E03\u5C40\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableLayout"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u6591\u9A6C\u7EB9\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("striped"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8868\u5934\u80CC\u666F\u8272\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-switch")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerBg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8868\u683C\u5927\u5C0F\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in sizeList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.label"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ item.label }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table-btn"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      \u8868\u683C\u8FB9\u6846\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio-group")]),a(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("borderType"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-radio")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item in borderTypeList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.label"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          {{ item.label }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(`
    `),n("span",{class:"token attr-name"},":table-layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableLayout ? "),n("span",{class:"token punctuation"},"'"),a("auto"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("fixed"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":striped"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("striped"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":header-bg"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerBg"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("stripedTableData"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("size"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":border-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("borderType"),n("span",{class:"token punctuation"},'"')]),a(`
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
`)])])],-1),sn=n("h3",{id:"\u8868\u683C\u591A\u9009",tabindex:"-1"},[a("\u8868\u683C\u591A\u9009 "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u591A\u9009","aria-hidden":"true"},"#")],-1),en=n("div",null,[a("\u901A\u8FC7\u6DFB\u52A0\u4E00\u4E2A"),n("code",null,"d-column"),a("\u5E76\u4E14\u8BBE\u7F6E"),n("code",null,"type"),a("\u5C5E\u6027\u4E3A"),n("code",null,"checkable"),a("\u5373\u53EF\u5B9E\u73B0\u8868\u683C\u7684\u591A\u9009\u529F\u80FD\u3002"),n("code",null,"getCheckedRows"),a("\u65B9\u6CD5\u53EF\u4EE5\u83B7\u53D6\u5DF2\u9009\u62E9\u7684\u5217\u8868\u3002")],-1),on=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Get CheckedRows"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableRef"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("checkable"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
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
    `),n("span",{class:"token keyword"},"const"),a(" tableRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
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
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("tableRef"),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getCheckedRows"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" tableRef"),n("span",{class:"token punctuation"},","),a(" data"),n("span",{class:"token punctuation"},","),a(" handleClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),pn=n("h3",{id:"\u7D22\u5F15\u5217",tabindex:"-1"},[a("\u7D22\u5F15\u5217 "),n("a",{class:"header-anchor",href:"#\u7D22\u5F15\u5217","aria-hidden":"true"},"#")],-1),ln=n("div",null,[a("\u901A\u8FC7\u6DFB\u52A0\u4E00\u4E2A"),n("code",null,"d-column"),a("\u5E76\u4E14\u8BBE\u7F6E"),n("code",null,"type"),a("\u53C2\u6570\u4E3A"),n("code",null,"index"),a("\u5373\u53EF\u7ED9\u8868\u683C\u6DFB\u52A0\u7D22\u5F15\u3002\u7D22\u5F15\u5217\u7684\u8868\u5934\u9ED8\u8BA4\u5C55\u793A"),n("code",null,"#"),a("\uFF0C\u53EF\u901A\u8FC7"),n("code",null,"header"),a("\u53C2\u6570\u4F20\u5165\u6307\u5B9A\u5185\u5BB9\u3002")],-1),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("data"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),un=n("h3",{id:"\u81EA\u5B9A\u4E49\u5217",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u5217 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5217","aria-hidden":"true"},"#")],-1),rn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"d-column"),a("\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u7684"),n("code",null,"default"),a("\u63D2\u69FD\u53EF\u4EE5\u5B9E\u73B0\u81EA\u5B9A\u4E49\u5217\uFF0C\u63D2\u69FD\u63D0\u4F9B"),n("code",null,"row"),a("\u548C"),n("code",null,"rowIndex"),a("\u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u4EE3\u8868\u884C\u6570\u636E\u548C\u884C\u7D22\u5F15\u503C\u3002")],-1),kn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\n        {{ `No.${scope.rowIndex + 1}` }}\n      "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),dn=n("h3",{id:"\u81EA\u5B9A\u4E49\u8868\u5934",tabindex:"-1"},[a("\u81EA\u5B9A\u4E49\u8868\u5934 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u8868\u5934","aria-hidden":"true"},"#")],-1),mn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"d-column"),a("\u5B50\u7EC4\u4EF6\u63D0\u4F9B\u7684"),n("code",null,"header"),a("\u63D2\u69FD\u53EF\u4EE5\u5B9E\u73B0\u81EA\u5B9A\u4E49\u8868\u5934\u3002")],-1),gn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#header"),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a("4px"),n("span",{class:"token punctuation"},";"),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),n("span",{class:"token function"},"var"),n("span",{class:"token punctuation"},"("),a("--devui-font-size"),n("span",{class:"token punctuation"},","),a("12px"),n("span",{class:"token punctuation"},")")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("First Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-popover")]),a(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("some tips text"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("hover"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("["),n("span",{class:"token punctuation"},"'"),a("top"),n("span",{class:"token punctuation"},"'"),a("]"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("info-o"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-icon")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),fn=n("h3",{id:"\u7A7A\u6570\u636E\u6A21\u677F",tabindex:"-1"},[a("\u7A7A\u6570\u636E\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u7A7A\u6570\u636E\u6A21\u677F","aria-hidden":"true"},"#")],-1),yn=n("div",null,"\u5F53\u4F20\u5165\u7684\u6570\u636E\u4E3A\u7A7A\u65F6\uFF0C\u9ED8\u8BA4\u5C55\u793A\u7A7A\u6570\u636E\u6A21\u677F\u3002",-1),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u66F4\u65B0\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("emptyData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":show-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("showLoading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),Fn=n("h3",{id:"\u56FA\u5B9A\u8868\u5934",tabindex:"-1"},[a("\u56FA\u5B9A\u8868\u5934 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u8868\u5934","aria-hidden":"true"},"#")],-1),Nn=n("div",null,[n("code",null,"fix-header"),a("\u53C2\u6570\u53EF\u4EE5\u8BBE\u7F6E\u662F\u5426\u56FA\u5B9A\u8868\u5934\uFF0C\u4F7F\u4E4B\u4E0D\u968F\u5185\u5BB9\u6EDA\u52A8\u3002")],-1),Cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dataSource"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"table-height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("200px"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"fix-header"),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),bn=n("h3",{id:"\u56FA\u5B9A\u5217",tabindex:"-1"},[a("\u56FA\u5B9A\u5217 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u5217","aria-hidden":"true"},"#")],-1),vn=n("div",null,[a("\u5F53\u8868\u683C\u5217\u8FC7\u591A\u65F6\uFF0C\u56FA\u5B9A\u5217\u6709\u5229\u4E8E\u7528\u6237\u5728\u5DE6\u53F3\u6ED1\u52A8\u65F6\uFF0C\u80FD\u591F\u4FBF\u6377\u7684\u8FDB\u884C\u6570\u636E\u5B9A\u4F4D\u4E0E\u5BF9\u6BD4\uFF0C\u901A\u8FC7"),n("code",null,"fixed-left"),a("\u548C"),n("code",null,"fixed-right"),a("\u6765\u914D\u7F6E\u3002")],-1),En=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u66F4\u65B0\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("emptyData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"table-layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("auto"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" computed "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" emptyData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      emptyData`),n("span",{class:"token punctuation"},"."),a("value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
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
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" filterList "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"computed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(`
      emptyData`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("item"),n("span",{class:"token punctuation"},"."),a("firstName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," "),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),a("item"),n("span",{class:"token punctuation"},"."),a("lastName"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),a(" item"),n("span",{class:"token punctuation"},"."),a("firstName "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      emptyData`),n("span",{class:"token punctuation"},","),a(`
      handleClick`),n("span",{class:"token punctuation"},","),a(`
      filterList`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),_n=n("h3",{id:"\u5408\u5E76\u5355\u5143\u683C",tabindex:"-1"},[a("\u5408\u5E76\u5355\u5143\u683C "),n("a",{class:"header-anchor",href:"#\u5408\u5E76\u5355\u5143\u683C","aria-hidden":"true"},"#")],-1),Bn=n("div",null,[a("\u901A\u8FC7"),n("code",null,"span-method"),a("\u65B9\u6CD5\u53EF\u4EE5\u81EA\u5B9A\u4E49\u5408\u5E76\u5355\u5143\u683C\uFF0C\u65B9\u6CD5\u53C2\u6570\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u5305\u542B\u5C5E\u6027\u5982\u4E0B\uFF1A\u5F53\u524D\u884C"),n("code",null,"row"),a("\u3001\u5F53\u524D\u5217"),n("code",null,"column"),a("\u3001\u5F53\u524D\u884C\u7D22\u5F15"),n("code",null,"rowIndex"),a("\u3001\u5F53\u524D\u5217\u7D22\u5F15"),n("code",null,"columnIndex"),a("\u3002\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE\u5305\u542B\u4E24\u4E2A\u5143\u7D20\u7684\u6570\u7EC4\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u662F"),n("code",null,"rowspan"),a("\uFF0C\u7B2C\u4E8C\u4E2A\u5143\u7D20\u662F"),n("code",null,"colspan"),a("\uFF1B\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5C5E\u6027\u4E3A"),n("code",null,"rowspan"),a("\u548C"),n("code",null,"colspan"),a("\u3002")],-1),xn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),An=n("h3",{id:"\u8868\u5934\u5206\u7EC4",tabindex:"-1"},[a("\u8868\u5934\u5206\u7EC4 "),n("a",{class:"header-anchor",href:"#\u8868\u5934\u5206\u7EC4","aria-hidden":"true"},"#")],-1),Dn=n("div",null,[n("code",null,"d-column"),a("\u5D4C\u5957"),n("code",null,"d-column"),a("\u5373\u53EF\u5B9E\u73B0\u8868\u5934\u5206\u7EC4\u3002")],-1),wn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),qn=z(`<h3 id="table-\u53C2\u6570" tabindex="-1">Table \u53C2\u6570 <a class="header-anchor" href="#table-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">data</td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u7684\u6570\u636E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">striped</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9\u95F4\u9694</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#tablesize">TableSize</a></td><td style="text-align:left;">&#39;sm&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u5927\u5C0F\uFF0C\u5206\u522B\u5BF9\u5E94\u884C\u9AD8 40px,48px,56px</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">max-width</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u6700\u5927\u5BBD\u5EA6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">max-height</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u6700\u5927\u9AD8\u5EA6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">table-width</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u5BBD\u5EA6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">table-height</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u9AD8\u5EA6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">row-hovered-highlight</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9F20\u6807\u5728\u8BE5\u884C\u4E0A\u65F6\uFF0C\u9AD8\u4EAE\u8BE5\u884C</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">fix-header</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u56FA\u5B9A\u5934\u90E8</td><td style="text-align:left;"><a href="#%E5%9B%BA%E5%AE%9A%E8%A1%A8%E5%A4%B4">\u56FA\u5B9A\u8868\u5934</a></td></tr><tr><td style="text-align:left;">show-loading</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u663E\u793A\u52A0\u8F7D\u52A8\u753B</td><td style="text-align:left;"><a href="#%E7%A9%BA%E6%95%B0%E6%8D%AE%E6%A8%A1%E6%9D%BF">\u7A7A\u6570\u636E\u6A21\u677F</a></td></tr><tr><td style="text-align:left;">header-bg</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5934\u90E8\u80CC\u666F</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">table-layout</td><td style="text-align:left;"><code>&#39;fixed&#39; | &#39;auto&#39;</code></td><td style="text-align:left;">&#39;fixed&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u5E03\u5C40\uFF0C\u53EF\u9009\u503C\u4E3A&#39;auto&#39;</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">span-method</td><td style="text-align:left;"><a href="#spanmethod">SpanMethod</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5408\u5E76\u5355\u5143\u683C\u7684\u8BA1\u7B97\u65B9\u6CD5</td><td style="text-align:left;"><a href="#%E5%90%88%E5%B9%B6%E5%8D%95%E5%85%83%E6%A0%BC">\u5408\u5E76\u5355\u5143\u683C</a></td></tr><tr><td style="text-align:left;">border-type</td><td style="text-align:left;"><a href="#bordertype">BorderType</a></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8868\u683C\u8FB9\u6846\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u6709\u884C\u8FB9\u6846\uFF1B<code>bordered</code>: \u5168\u8FB9\u6846\uFF1B<code>borderless</code>: \u65E0\u8FB9\u6846</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F">\u8868\u683C\u6837\u5F0F</a></td></tr></tbody></table><h3 id="table-\u65B9\u6CD5" tabindex="-1">Table \u65B9\u6CD5 <a class="header-anchor" href="#table-\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">getCheckedRows</td><td style="text-align:left;"><code>() =&gt; []</code></td><td style="text-align:left;">\u83B7\u53D6\u5F53\u524D\u9009\u4E2D\u7684\u884C\u6570\u636E</td></tr></tbody></table><h3 id="column-\u53C2\u6570" tabindex="-1">Column \u53C2\u6570 <a class="header-anchor" href="#column-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">header</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u5E94\u5217\u7684\u6807\u9898</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">field</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><a href="#columntype">ColumnType</a></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5217\u7684\u7C7B\u578B\uFF0C\u8BBE\u7F6E<code>checkable</code>\u4F1A\u663E\u793A\u591A\u9009\u6846</td><td style="text-align:left;"><a href="#%E8%A1%A8%E6%A0%BC%E5%A4%9A%E9%80%89">\u8868\u683C\u591A\u9009</a></td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;"><code>string | number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D<code>px</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">min-width</td><td style="text-align:left;"><code>string | number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5BF9\u5E94\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u5355\u4F4D<code>px</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fixed-left</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BE5\u5217\u56FA\u5B9A\u5230\u5DE6\u4FA7\u7684\u8DDD\u79BB\uFF0C\u5982\uFF1A&#39;100px&#39;</td><td style="text-align:left;"><a href="#%E5%9B%BA%E5%AE%9A%E5%88%97">\u56FA\u5B9A\u5217</a></td></tr><tr><td style="text-align:left;">fixed-right</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BE5\u5217\u56FA\u5B9A\u5230\u53F3\u4FA7\u7684\u8DDD\u79BB\uFF0C\u5982\uFF1A&#39;100px&#39;</td><td style="text-align:left;"><a href="#%E5%9B%BA%E5%AE%9A%E5%88%97">\u56FA\u5B9A\u5217</a></td></tr><tr><td style="text-align:left;">formatter</td><td style="text-align:left;"><a href="#formatter">Formatter</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u683C\u5F0F\u5316\u5217\u5185\u5BB9</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="column-\u63D2\u69FD" tabindex="-1">Column \u63D2\u69FD <a class="header-anchor" href="#column-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u53C2\u6570</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9</td><td style="text-align:left;"><code>{ row, rowIndex }</code></td></tr><tr><td style="text-align:left;">header</td><td style="text-align:left;">\u8868\u5934\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u8868\u5934\u5185\u5BB9</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="table-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Table \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#table-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><br><h4 id="tablesize" tabindex="-1">TableSize <a class="header-anchor" href="#tablesize" aria-hidden="true">#</a></h4><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">TableSize</span> <span class="token operator">=</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="spanmethod" tabindex="-1">SpanMethod <a class="header-anchor" href="#spanmethod" aria-hidden="true">#</a></h4><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">SpanMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token punctuation">{</span>
  row<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  column<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  columnIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">{</span> rowspan<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> colspan<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="bordertype" tabindex="-1">BorderType <a class="header-anchor" href="#bordertype" aria-hidden="true">#</a></h4><div class="language-typescript"><pre><code><span class="token keyword">type</span> <span class="token class-name">BorderType</span> <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bordered&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;borderless&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="column-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Column \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#column-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><br><h4 id="columntype" tabindex="-1">ColumnType <a class="header-anchor" href="#columntype" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ColumnType</span> <span class="token operator">=</span> <span class="token string">&#39;checkable&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;index&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="formatter" tabindex="-1">Formatter <a class="header-anchor" href="#formatter" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Formatter</span> <span class="token operator">=</span> <span class="token punctuation">(</span>row<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> column<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> cellValue<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> rowIndex<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> VNode<span class="token punctuation">;</span>
</code></pre></div>`,22);function Mn(o,t,e,s,i,F){const d=B("render-demo-0"),c=B("demo"),y=B("render-demo-1"),r=B("render-demo-2"),h=B("render-demo-3"),l=B("render-demo-4"),p=B("render-demo-5"),k=B("render-demo-6"),m=B("render-demo-7"),f=B("render-demo-8"),g=B("render-demo-9"),x=B("render-demo-10");return H(),P("div",null,[Q,C(c,{sourceCode:`<template>
  <d-table :data="baseTableData">
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
`},{description:u(()=>[X]),highlight:u(()=>[Z]),default:u(()=>[C(d)]),_:1}),nn,C(c,{sourceCode:`<template>
  <div class="table-btn-groups">
    <div class="table-btn">
      \u81EA\u52A8\u8868\u683C\u5E03\u5C40\uFF1A
      <d-switch v-model:checked="tableLayout" />
    </div>
    <div class="table-btn">
      \u6591\u9A6C\u7EB9\uFF1A
      <d-switch v-model:checked="striped" />
    </div>
    <div class="table-btn">
      \u8868\u5934\u80CC\u666F\u8272\uFF1A
      <d-switch v-model:checked="headerBg" />
    </div>
    <div class="table-btn">
      \u8868\u683C\u5927\u5C0F\uFF1A
      <d-radio-group direction="row" v-model="size">
        <d-radio v-for="item in sizeList" :key="item.label" :value="item.value">
          {{ item.label }}
        </d-radio>
      </d-radio-group>
    </div>
    <div class="table-btn">
      \u8868\u683C\u8FB9\u6846\uFF1A
      <d-radio-group direction="row" v-model="borderType">
        <d-radio v-for="item in borderTypeList" :key="item.label" :value="item.value">
          {{ item.label }}
        </d-radio>
      </d-radio-group>
    </div>
  </div>
  <d-table
    :table-layout="tableLayout ? 'auto' : 'fixed'"
    :striped="striped"
    :header-bg="headerBg"
    :data="stripedTableData"
    :size="size"
    :border-type="borderType"
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
`},{description:u(()=>[an]),highlight:u(()=>[tn]),default:u(()=>[C(y)]),_:1}),sn,C(c,{sourceCode:`<template>
  <div>
    <d-button @click="handleClick">Get CheckedRows</d-button>
    <d-table ref="tableRef" :data="data">
      <d-column type="checkable"></d-column>
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
    const tableRef = ref();
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
    const handleClick = () => {
      console.log(tableRef.value.getCheckedRows());
    };

    return { tableRef, data, handleClick };
  },
});
<\/script>
`},{description:u(()=>[en]),highlight:u(()=>[on]),default:u(()=>[C(r)]),_:1}),pn,C(c,{sourceCode:`<template>
  <div>
    <d-table :data="data">
      <d-column type="index"></d-column>
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
`},{description:u(()=>[ln]),highlight:u(()=>[cn]),default:u(()=>[C(h)]),_:1}),un,C(c,{sourceCode:`<template>
  <d-table :data="dataSource">
    <d-column type="index">
      <template #default="scope">
        {{ \`No.\${scope.rowIndex + 1}\` }}
      </template>
    </d-column>
    <d-column field="firstName" header="First Name"></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
    <d-column header="Operation">
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
`},{description:u(()=>[rn]),highlight:u(()=>[kn]),default:u(()=>[C(l)]),_:1}),dn,C(c,{sourceCode:`<template>
  <d-table :data="dataSource">
    <d-column field="firstName">
      <template #header>
        <div>
          <span style="margin-right:4px;font-size:var(--devui-font-size,12px)">First Name</span>
          <d-popover content="some tips text" trigger="hover" :position="['top']">
            <template #reference>
              <d-icon name="info-o"></d-icon>
            </template>
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
`},{description:u(()=>[mn]),highlight:u(()=>[gn]),default:u(()=>[C(p)]),_:1}),fn,C(c,{sourceCode:`<template>
  <div>
    <d-button @click="handleClick">\u66F4\u65B0\u6570\u636E</d-button>
    <d-table :data="emptyData" :show-loading="showLoading">
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
`},{description:u(()=>[yn]),highlight:u(()=>[hn]),default:u(()=>[C(k)]),_:1}),Fn,C(c,{sourceCode:`<template>
  <d-table :data="dataSource" table-height="200px" fix-header>
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
`},{description:u(()=>[Nn]),highlight:u(()=>[Cn]),default:u(()=>[C(m)]),_:1}),bn,C(c,{sourceCode:`<template>
  <div>
    <d-button @click="handleClick">\u66F4\u65B0\u6570\u636E</d-button>
    <d-table :data="emptyData" table-layout="auto">
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
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const emptyData = ref([]);
    const handleClick = () => {
      emptyData.value = [
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
      ];
    };
    const filterList = computed(() =>
      emptyData.value.map((item) => ({ name: \`\${item.firstName} \${item.lastName}\`, value: item.firstName }))
    );

    return {
      emptyData,
      handleClick,
      filterList,
    };
  },
});
<\/script>
`},{description:u(()=>[vn]),highlight:u(()=>[En]),default:u(()=>[C(f)]),_:1}),_n,C(c,{sourceCode:`<template>
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
`},{description:u(()=>[Bn]),highlight:u(()=>[xn]),default:u(()=>[C(g)]),_:1}),An,C(c,{sourceCode:`<template>
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
`},{description:u(()=>[Dn]),highlight:u(()=>[wn]),default:u(()=>[C(x)]),_:1}),qn])}var Vn=U(K,[["render",Mn]]);export{Sn as __pageData,Vn as default};
