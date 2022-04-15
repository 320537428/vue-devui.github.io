var en=Object.defineProperty;var V=Object.getOwnPropertySymbols;var on=Object.prototype.hasOwnProperty,pn=Object.prototype.propertyIsEnumerable;var w=(t,c,p)=>c in t?en(t,c,{enumerable:!0,configurable:!0,writable:!0,value:p}):t[c]=p,F=(t,c)=>{for(var p in c||(c={}))on.call(c,p)&&w(t,p,c[p]);if(V)for(var p of V(c))pn.call(c,p)&&w(t,p,c[p]);return t};import{_ as un,V as m,r as E,c as ln,a as h,w as v,b as q,d as n,e as s,o as cn}from"./app.74859d28.js";const rn={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:t,createVNode:c,openBlock:p,createElementBlock:g}=m;function y(e,u){const _=t("d-transfer");return p(),g("div",null,[c(_,{modelValue:e.options.modelValues,"onUpdate:modelValue":u[0]||(u[0]=b=>e.options.modelValues=b),titles:e.options.titles,sourceOption:e.options.source,targetOption:e.options.target,isSearch:e.options.isSearch,showTooltip:e.options.showTooltip},null,8,["modelValue","titles","sourceOption","targetOption","isSearch","showTooltip"])])}const{defineComponent:i,reactive:k}=m,d=i({setup(){const e=[{key:"\u5317\u4EAC",value:"\u5317\u4EAC",disabled:!1},{key:"\u4E0A\u6D77",value:"\u4E0A\u6D77",disabled:!0},{key:"\u5E7F\u5DDE",value:"\u5E7F\u5DDE",disabled:!1},{key:"\u6DF1\u5733",value:"\u6DF1\u5733",disabled:!1},{key:"\u6210\u90FD",value:"\u6210\u90FD",disabled:!1},{key:"\u6B66\u6C49",value:"\u6B66\u6C49",disabled:!1},{key:"\u897F\u5B89",value:"\u897F\u5B89",disabled:!1},{key:"\u798F\u5EFA",value:"\u798F\u5EFA",disabled:!1}],u=[{key:"\u5357\u5145",value:"\u5357\u5145",disabled:!1},{key:"\u5E7F\u5143",value:"\u5E7F\u5143",disabled:!1},{key:"\u7EF5\u9633",value:"\u7EF5\u9633",disabled:!1},{key:"\u5927\u8FDE",value:"\u5927\u8FDE",disabled:!1},{key:"\u91CD\u5E86",value:"\u91CD\u5E86",disabled:!1}];return{options:k({titles:["sourceHeader","targetHeader"],source:e,target:u,originSource:e,originTarget:u,isSearch:!0,modelValues:["\u6DF1\u5733","\u6210\u90FD","\u7EF5\u9633"],showTooltip:!0})}}});return F({render:y},d)}(),"render-demo-1":function(){const{resolveComponent:t,createVNode:c,openBlock:p,createElementBlock:g}=m;function y(e,u){const _=t("d-transfer");return p(),g("div",null,[c(_,{modelValue:e.options.modelValues,"onUpdate:modelValue":u[0]||(u[0]=b=>e.options.modelValues=b),titles:e.options.titles,sourceOption:e.options.source,targetOption:e.options.target,isSearch:e.options.isSearch,isSourceDroppable:e.options.isSourceDroppable,isTargetDroppable:e.options.isTargetDroppable},null,8,["modelValue","titles","sourceOption","targetOption","isSearch","isSourceDroppable","isTargetDroppable"])])}const{defineComponent:i,reactive:k}=m,d=i({setup(){const e=[{key:"\u5317\u4EAC",value:"\u5317\u4EAC",disabled:!1},{key:"\u4E0A\u6D77",value:"\u4E0A\u6D77",disabled:!0},{key:"\u5E7F\u5DDE",value:"\u5E7F\u5DDE",disabled:!1},{key:"\u6DF1\u5733",value:"\u6DF1\u5733",disabled:!1},{key:"\u6210\u90FD",value:"\u6210\u90FD",disabled:!1},{key:"\u6B66\u6C49",value:"\u6B66\u6C49",disabled:!1},{key:"\u897F\u5B89",value:"\u897F\u5B89",disabled:!1},{key:"\u798F\u5EFA",value:"\u798F\u5EFA",disabled:!1}],u=[{key:"\u5357\u5145",value:"\u5357\u5145",disabled:!1},{key:"\u5E7F\u5143",value:"\u5E7F\u5143",disabled:!1},{key:"\u7EF5\u9633",value:"\u7EF5\u9633",disabled:!1},{key:"\u5927\u8FDE",value:"\u5927\u8FDE",disabled:!1},{key:"\u91CD\u5E86",value:"\u91CD\u5E86",disabled:!1}];return{options:k({titles:["sourceHeader","targetHeader"],source:e,target:u,originSource:e,originTarget:u,isSearch:!1,modelValues:["\u6DF1\u5733","\u6210\u90FD","\u7EF5\u9633"],isSourceDroppable:!0,isTargetDroppable:!0})}}});return F({render:y},d)}(),"render-demo-2":function(){const{createElementVNode:t,resolveComponent:c,createVNode:p,renderList:g,Fragment:y,openBlock:i,createElementBlock:k,createBlock:d,toDisplayString:e,withCtx:u,createTextVNode:_}=m,b=t("div",{class:"custom-transfer__header"},"Customize Header",-1),x={class:"custom-transfer__body"},S={class:"custom-transfer__body__list custom-transfer__body__header"},T=t("div",{class:"custom-transfer__body__list__part"},"Id",-1),I=t("div",{class:"custom-transfer__body__list__part"},"Name",-1),N=t("div",{class:"custom-transfer__body__list__part"},"Age",-1),H={class:"custom-transfer__body__list"},L={class:"custom-transfer__body__list__part"},R={class:"custom-transfer__body__list__part"},j={class:"custom-transfer__body__list__part"},G={class:"custom-transfer__operation"},U={class:"custom-transfer__operation__group"},z=_("Left"),J=_("Right"),$=t("div",{class:"custom-transfer__header"},"Customize Header",-1),P={class:"custom-transfer__body"},M={class:"custom-transfer__body__list custom-transfer__body__header"},K=t("div",{class:"custom-transfer__body__list__part"},"Id",-1),Q=t("div",{class:"custom-transfer__body__list__part"},"Name",-1),W=t("div",{class:"custom-transfer__body__list__part"},"Age",-1),X={class:"custom-transfer__body__list"},Y={class:"custom-transfer__body__list__part"},Z={class:"custom-transfer__body__list__part"},nn={class:"custom-transfer__body__list__part"};function sn(o,l){const f=c("DCheckbox"),D=c("DCheckboxGroup"),C=c("DButton"),O=c("d-transfer");return i(),k("div",null,[p(O,null,{"left-header":u(()=>[b]),"left-body":u(()=>[t("div",x,[t("div",S,[p(f,{class:"custom-transfer__body__list__checkout",modelValue:o.leftOptions.allChecked,"onUpdate:modelValue":l[0]||(l[0]=a=>o.leftOptions.allChecked=a),onChange:l[1]||(l[1]=a=>o.changeAllSource(o.leftOptions))},null,8,["modelValue"]),T,I,N]),p(D,{modelValue:o.leftOptions.checkedValues,"onUpdate:modelValue":l[2]||(l[2]=a=>o.leftOptions.checkedValues=a)},{default:u(()=>[(i(!0),k(y,null,g(o.leftOptions.filterData,(a,r)=>(i(),k("div",H,[(i(),d(f,{class:"devui-transfer__panel__body__list__item",value:a.value,disabled:a.disabled,key:r},null,8,["value","disabled"])),t("div",L,e(a.key),1),t("div",R,e(a.value),1),t("div",j,e(a.age),1)]))),256))]),_:1},8,["modelValue"])])]),operation:u(()=>[t("div",G,[t("div",U,[p(C,{disabled:o.leftOptions.disabled,onClick:o.updateRightFilterData},{default:u(()=>[z]),_:1},8,["disabled","onClick"]),p(C,{style:{"margin-top":"12px"},disabled:o.rightOptions.disabled,onClick:o.updateLeftFilterData},{default:u(()=>[J]),_:1},8,["disabled","onClick"])])])]),"right-header":u(()=>[$]),"right-body":u(()=>[t("div",P,[t("div",M,[p(f,{class:"custom-transfer__body__list__checkout",modelValue:o.rightOptions.allChecked,"onUpdate:modelValue":l[3]||(l[3]=a=>o.rightOptions.allChecked=a),onChange:l[4]||(l[4]=a=>o.changeAllSource(o.rightOptions))},null,8,["modelValue"]),K,Q,W]),p(D,{modelValue:o.rightOptions.checkedValues,"onUpdate:modelValue":l[5]||(l[5]=a=>o.rightOptions.checkedValues=a)},{default:u(()=>[(i(!0),k(y,null,g(o.rightOptions.filterData,(a,r)=>(i(),k("div",X,[(i(),d(f,{class:"devui-transfer__panel__body__list__item",value:a.value,disabled:a.disabled,key:r},null,8,["value","disabled"])),t("div",Y,e(a.key),1),t("div",Z,e(a.value),1),t("div",nn,e(a.age),1)]))),256))]),_:1},8,["modelValue"])])]),_:1})])}const{defineComponent:an,reactive:A,watch:B}=m,tn=an({setup(){const o=A({allChecked:!1,filterData:[{key:"1",value:"Mark",age:11,disabled:!1},{key:"2",value:"Jacob",age:12,disabled:!1},{key:"3",value:"Danni",age:13,disabled:!1},{key:"4",value:"green",age:14,disabled:!1},{key:"5",value:"po",age:15,disabled:!1},{key:"6",value:"Book",age:16,disabled:!1}],checkedValues:[],disabled:!0}),l=A({allChecked:!1,filterData:[{key:"21",value:"john",age:17,disabled:!1},{key:"22",value:"Joke",age:28,disabled:!1},{key:"23",value:"Echo",age:18,disabled:!1}],checkedValues:[],disabled:!0});B(()=>o.checkedValues,a=>{l.disabled=a.length===0,o.allChecked=f(a,o.filterData)},{deep:!0}),B(()=>l.checkedValues,a=>{o.disabled=a.length===0,l.allChecked=f(a,l.filterData)},{deep:!0});const f=(a,r)=>r.length!==0&&a.length===r.length;return{leftOptions:o,rightOptions:l,changeAllSource:a=>{a.allChecked?a.checkedValues=a.filterData.map(r=>r.value):a.checkedValues=[]},updateRightFilterData:()=>{l.filterData=l.filterData.filter(a=>{let r=l.checkedValues.includes(a.value);return r&&o.filterData.push(a),!r}),l.checkedValues=[]},updateLeftFilterData:()=>{o.filterData=o.filterData.filter(a=>{let r=o.checkedValues.includes(a.value);return r&&l.filterData.push(a),!r}),o.checkedValues=[]}}}});return F({render:sn},tn)}()}},Dn='{"title":"Transfer \u7A7F\u68AD\u6846","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u62D6\u62FD\u6392\u5E8F","slug":"\u62D6\u62FD\u6392\u5E8F"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846","slug":"\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846"},{"level":3,"title":"API","slug":"api"}],"relativePath":"components/transfer/index.md","lastUpdated":1649728324795}',kn=q('<h1 id="transfer-\u7A7F\u68AD\u6846" tabindex="-1">Transfer \u7A7F\u68AD\u6846 <a class="header-anchor" href="#transfer-\u7A7F\u68AD\u6846" aria-hidden="true">#</a></h1><p>\u53CC\u680F\u7A7F\u68AD\u9009\u62E9\u6846\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u9700\u8981\u5728\u591A\u4E2A\u53EF\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009\u65F6\u3002\u7A7F\u68AD\u9009\u62E9\u6846\u53EF\u7528\u53EA\u7BA1\u7684\u65B9\u5F0F\u5728\u4E24\u680F\u4E2D\u79FB\u52A8\u6570\u636E\uFF0C\u5B8C\u6210\u9009\u62E9\u884C\u4E3A\u3002\u5176\u4E2D\u5DE6\u8FB9\u4E00\u680F\u4E3A source\uFF0C\u53F3\u8FB9\u4E00\u680F\u4E3A target\u3002\u6700\u7EC8\u8FD4\u56DE\u4E24\u680F\u7684\u6570\u636E\uFF0C\u63D0\u4F9B\u7ED9\u5F00\u53D1\u8005\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u7A7F\u68AD\u6846\u57FA\u672C\u7528\u6CD5\u3002</p>',6),dn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-transfer")]),s(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.modelValues"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.titles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":sourceOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.source"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":targetOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.target"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":isSearch"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.isSearch"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":showTooltip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.showTooltip"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-transfer")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" originSource "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u897F\u5B89"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u897F\u5B89"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u798F\u5EFA'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u798F\u5EFA'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" originTarget "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5357\u5145'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5357\u5145'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E7F\u5143'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E7F\u5143'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EF5\u9633'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EF5\u9633'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u8FDE'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u8FDE'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),s(" originSource"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),s(" originTarget"),n("span",{class:"token punctuation"},","),s(`
      originSource`),n("span",{class:"token punctuation"},","),s(`
      originTarget`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"isSearch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"modelValues"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u7EF5\u9633'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"showTooltip"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      options
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),_n=n("h3",{id:"\u62D6\u62FD\u6392\u5E8F",tabindex:"-1"},[s("\u62D6\u62FD\u6392\u5E8F "),n("a",{class:"header-anchor",href:"#\u62D6\u62FD\u6392\u5E8F","aria-hidden":"true"},"#")],-1),gn=n("p",null,"\u53EF\u4EE5\u5BF9\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6846\u7684\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3002",-1),yn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-transfer")]),s(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.modelValues"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":titles"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.titles"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":sourceOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.source"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":targetOption"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.target"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":isSearch"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.isSearch"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":isSourceDroppable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.isSourceDroppable"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":isTargetDroppable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("options.isTargetDroppable"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-transfer")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" originSource "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5317\u4EAC'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u4E0A\u6D77'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E7F\u5DDE'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6B66\u6C49'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u897F\u5B89"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"\u897F\u5B89"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u798F\u5EFA'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u798F\u5EFA'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        
      `),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" originTarget "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5357\u5145'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5357\u5145'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E7F\u5143'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5E7F\u5143'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EF5\u9633'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u7EF5\u9633'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u8FDE'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u5927\u8FDE'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u91CD\u5E86'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" options "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"titles"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'sourceHeader'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'targetHeader'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"source"),n("span",{class:"token operator"},":"),s(" originSource"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),s(" originTarget"),n("span",{class:"token punctuation"},","),s(`
      originSource`),n("span",{class:"token punctuation"},","),s(`
      originTarget`),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"isSearch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"modelValues"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'\u6DF1\u5733'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u6210\u90FD'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'\u7EF5\u9633'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"isSourceDroppable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"isTargetDroppable"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      options
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),fn=n("h3",{id:"\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846",tabindex:"-1"},[s("\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u7A7F\u68AD\u6846","aria-hidden":"true"},"#")],-1),mn=n("p",null,"\u53EF\u4EE5\u5BF9\u7A7F\u68AD\u6846\u5185\u5BB9\u7684\u663E\u793A\u8FDB\u884C\u81EA\u5B9A\u4E49\u3002",-1),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-transfer")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#left-header"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Customize Header"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#left-body"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list custom-transfer__body__header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("DCheckbox")]),s(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__checkout"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("leftOptions.allChecked"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeAllSource(leftOptions)"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("DCheckbox")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Id"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("DCheckboxGroup")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("leftOptions.checkedValues"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(item, idx) in leftOptions.filterData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("DCheckbox")]),s(`
                `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("devui-transfer__panel__body__list__item"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item.value"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item.disabled"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("idx"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("DCheckbox")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{item.key}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{item.value}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{item.age}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("DCheckboxGroup")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#operation"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__operation__group"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("DButton")]),s(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("leftOptions.disabled"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@Click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("updateRightFilterData"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},">")]),s("Left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("DButton")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("DButton")]),s(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),s(" 12px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),s(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rightOptions.disabled"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("updateLeftFilterData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("DButton")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#right-header"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Customize Header"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),s(),n("span",{class:"token attr-name"},"#right-body"),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list custom-transfer__body__header"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("DCheckbox")]),s(`
            `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__checkout"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rightOptions.allChecked"),n("span",{class:"token punctuation"},'"')]),s(`
            `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("changeAllSource(rightOptions)"),n("span",{class:"token punctuation"},'"')]),s(`
          `),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("DCheckbox")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Id"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Name"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("Age"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("DCheckboxGroup")]),s(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("rightOptions.checkedValues"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("(item, idx) in rightOptions.filterData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("DCheckbox")]),s(`
                `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("devui-transfer__panel__body__list__item"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item.value"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("item.disabled"),n("span",{class:"token punctuation"},'"')]),s(`
                `),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("idx"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("DCheckbox")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{item.key}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{item.value}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("custom-transfer__body__list__part"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("{{item.age}}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("DCheckboxGroup")]),n("span",{class:"token punctuation"},">")]),s(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-transfer")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" reactive"),n("span",{class:"token punctuation"},","),s(" watch "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" leftOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"allChecked"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"filterData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Mark'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Jacob'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"12"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Danni'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"13"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'4'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'green'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"14"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'5'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'po'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"15"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'6'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Book'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"16"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"checkedValues"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" rightOptions "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"allChecked"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"filterData"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'21'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'john'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"17"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'22'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Joke'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"28"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"key"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'23'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'Echo'"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"age"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"18"),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"checkedValues"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"disabled"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" leftOptions"),n("span",{class:"token punctuation"},"."),s("checkedValues"),n("span",{class:"token punctuation"},","),s(` 
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nVal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        rightOptions`),n("span",{class:"token punctuation"},"."),s("disabled "),n("span",{class:"token operator"},"="),s(" nVal"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
        leftOptions`),n("span",{class:"token punctuation"},"."),s("allChecked "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"isEqual"),n("span",{class:"token punctuation"},"("),s("nVal"),n("span",{class:"token punctuation"},","),s(" leftOptions"),n("span",{class:"token punctuation"},"."),s("filterData"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"deep"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),s(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" rightOptions"),n("span",{class:"token punctuation"},"."),s("checkedValues"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nVal"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        leftOptions`),n("span",{class:"token punctuation"},"."),s("disabled "),n("span",{class:"token operator"},"="),s(" nVal"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"?"),s(),n("span",{class:"token boolean"},"false"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
        rightOptions`),n("span",{class:"token punctuation"},"."),s("allChecked "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"isEqual"),n("span",{class:"token punctuation"},"("),s("nVal"),n("span",{class:"token punctuation"},","),s(" rightOptions"),n("span",{class:"token punctuation"},"."),s("filterData"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"deep"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},")"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"isEqual"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("source"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"return"),s(" target"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" source"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"==="),s(" target"),n("span",{class:"token punctuation"},"."),s(`length
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"changeAllSource"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"source"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("source"),n("span",{class:"token punctuation"},"."),s("allChecked"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        source`),n("span",{class:"token punctuation"},"."),s("checkedValues "),n("span",{class:"token operator"},"="),s(" source"),n("span",{class:"token punctuation"},"."),s("filterData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(" item"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
        source`),n("span",{class:"token punctuation"},"."),s("checkedValues "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"updateRightFilterData"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      rightOptions`),n("span",{class:"token punctuation"},"."),s("filterData "),n("span",{class:"token operator"},"="),s(" rightOptions"),n("span",{class:"token punctuation"},"."),s("filterData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" hasItem "),n("span",{class:"token operator"},"="),s(" rightOptions"),n("span",{class:"token punctuation"},"."),s("checkedValues"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("hasItem"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          leftOptions`),n("span",{class:"token punctuation"},"."),s("filterData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),s(`hasItem
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      rightOptions`),n("span",{class:"token punctuation"},"."),s("checkedValues "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"updateLeftFilterData"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      leftOptions`),n("span",{class:"token punctuation"},"."),s("filterData "),n("span",{class:"token operator"},"="),s(" leftOptions"),n("span",{class:"token punctuation"},"."),s("filterData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"let"),s(" hasItem "),n("span",{class:"token operator"},"="),s(" leftOptions"),n("span",{class:"token punctuation"},"."),s("checkedValues"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"includes"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},"."),s("value"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("hasItem"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
          rightOptions`),n("span",{class:"token punctuation"},"."),s("filterData"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
        `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"!"),s(`hasItem
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
      leftOptions`),n("span",{class:"token punctuation"},"."),s("checkedValues "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      leftOptions`),n("span",{class:"token punctuation"},","),s(`
      rightOptions`),n("span",{class:"token punctuation"},","),s(`
      changeAllSource`),n("span",{class:"token punctuation"},","),s(`
      updateRightFilterData`),n("span",{class:"token punctuation"},","),s(`
      updateLeftFilterData
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".custom-transfer__header"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 40px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),s(" 1px solid #dfe1e6"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".custom-transfer__body"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token function"},"calc"),n("span",{class:"token punctuation"},"("),s("100% - 40px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"overflow-y"),n("span",{class:"token punctuation"},":"),s(" auto"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".custom-transfer__body__list"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" space-between"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),s(" 36px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),s(" 36px"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"border-bottom"),n("span",{class:"token punctuation"},":"),s(" 1px solid #dfe1e6"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".custom-transfer__body__list__part"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 30%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".custom-transfer__body__list__checkout, .custom-transfer__body__list__item"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 10%"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".custom-transfer__header, .custom-transfer__body__list"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),s(" 0 10px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".custom-transfer__operation"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),s(" flex"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 10%"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"flex-wrap"),n("span",{class:"token punctuation"},":"),s(" wrap"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),s(" center"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token selector"},".custom-transfer__operation__group , .custom-transfer__operation__group .devui-btn"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),s(" 64px"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),vn=q('<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-transfer \u53C2\u6570</p><table><thead><tr><th><strong>\u53C2\u6570</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>sourceOption</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u6E90\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>targetOption</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u76EE\u6807\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>titles</td><td><code>Array</code></td><td>[]</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u6807\u9898</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>height</td><td><code>Array</code></td><td>320px</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u7A7F\u68AD\u6846\u9AD8\u5EA6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>isSearch</td><td><code>Array</code></td><td>true</td><td>\u53EF\u9009\u53C2\u6570\uFF0C\u662F\u5426\u53EF\u4EE5\u641C\u7D22</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td><code>Array</code></td><td>false</td><td>\u53EF\u9009\u53C2\u6570 \u7A7F\u68AD\u6846\u7981\u6B62\u4F7F\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>beforeTransfer</td><td><code>(sourceOption, targetOption) =&gt; boolean | Promise&lt;boolean&gt;</code></td><td>-</td><td>\u53EF\u9009\u53C2\u6570 \u7A7F\u68AD\u6846\u7981\u6B62\u4F7F\u7528</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-transfer \u4E8B\u4EF6</p><table><thead><tr><th><strong>\u4E8B\u4EF6</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>transferToSource</td><td><code>EventEmitter&lt;{sourceOption, targetOption}&gt;</code></td><td>\u5F53\u70B9\u51FB\u53F3\u7A7F\u68AD\u65F6\uFF0C\u8FD4\u56DE\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6570\u636E\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>transferToTarget</td><td><code>EventEmitter&lt;{sourceOption, targetOption}&gt;</code></td><td>\u5F53\u70B9\u51FB\u5DE6\u7A7F\u68AD\u65F6\uFF0C\u8FD4\u56DE\u7A7F\u68AD\u6846\u6E90\u548C\u76EE\u6807\u6570\u636E\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>searching</td><td><code>EventEmitter&lt;{direction, keyword}&gt;</code></td><td>\u5F53\u641C\u7D22\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u76EE\u6807\u7A7F\u68AD\u6846\u548C\u641C\u7D22\u6587\u5B57\uFF0C\u4E0D\u8BBE\u7F6E\u6B64\u4E8B\u4EF6\u5219\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u65B9\u6CD5\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>transferring</td><td><code>EventEmitter&lt;TransferDirection&gt;</code></td><td>\u5F53\u7A7F\u68AD\u65F6\u89E6\u53D1\uFF0C\u8FD4\u56DE\u76EE\u6807\u7A7F\u68AD\u6846\uFF0C\u4E0D\u8BBE\u7F6E\u6B64\u4E8B\u4EF6\u5219\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u65B9\u6CD5\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>afterTransfer</td><td><code>EventEmitter&lt;TransferDirection&gt;</code></td><td>\u5F53\u7A7F\u68AD\u5B8C\u6210\u540E\uFF0C\u8FD4\u56DE\u76EE\u6807\u7A7F\u68AD\u6846\uFF0C\u4E0D\u8BBE\u7F6EtransferEvent\u624D\u4F1A\u89E6\u53D1\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>onDragEnd</td><td><code>(direction: string, dragItem: TransferItem, dropItem: TransferItem) =&gt; void</code></td><td>\u8282\u70B9\u7ED3\u675F\u62D6\u62FD\u7684\u56DE\u8C03\uFF1B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><p>d-transfer.Item</p><table><thead><tr><th><strong>\u5C5E\u6027</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th><strong>\u8BF4\u660E</strong></th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>key</td><td><code>string (required)</code></td><td>-</td><td>\u9009\u9879\u7684\u952E\u503C\uFF08\u552F\u4E00\u6807\u8BC6\u7B26\uFF09</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>value</td><td><code>string (required)</code></td><td>-</td><td>\u9009\u9879\u5BF9\u5E94\u7684\u503C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>-</td><td>\u662F\u5426\u7981\u7528\u6B64\u9009\u9879</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',7);function bn(t,c,p,g,y,i){const k=E("render-demo-0"),d=E("demo"),e=E("render-demo-1"),u=E("render-demo-2");return cn(),ln("div",null,[kn,h(d,{sourceCode:`<template>
  <d-transfer
    v-model="options.modelValues"
    :titles="options.titles"
    :sourceOption="options.source"
    :targetOption="options.target"
    :isSearch="options.isSearch"
    :showTooltip="options.showTooltip"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const originSource = [
        {
          key: '\u5317\u4EAC',
          value: '\u5317\u4EAC',
          disabled: false,
        },
        {
          key: '\u4E0A\u6D77',
          value: '\u4E0A\u6D77',
          disabled: true,
        },
        {
          key: '\u5E7F\u5DDE',
          value: '\u5E7F\u5DDE',
          disabled: false,
        },
        {
          key: '\u6DF1\u5733',
          value: '\u6DF1\u5733',
          disabled: false,
        },
        {
          key: '\u6210\u90FD',
          value: '\u6210\u90FD',
          disabled: false,
        },
        {
          key: '\u6B66\u6C49',
          value: '\u6B66\u6C49',
          disabled: false,
        },
        {
          key: "\u897F\u5B89",
          value: "\u897F\u5B89",
          disabled: false,
        },
        {
          key: '\u798F\u5EFA',
          value: '\u798F\u5EFA',
          disabled: false,
        },
        
      ]
    const originTarget = [
        {
          key: '\u5357\u5145',
          value: '\u5357\u5145',
          disabled: false,
        },
        {
          key: '\u5E7F\u5143',
          value: '\u5E7F\u5143',
          disabled: false,
        },
        {
          key: '\u7EF5\u9633',
          value: '\u7EF5\u9633',
          disabled: false,
        },
        {
          key: '\u5927\u8FDE',
          value: '\u5927\u8FDE',
          disabled: false,
        },
        {
          key: '\u91CD\u5E86',
          value: '\u91CD\u5E86',
          disabled: false,
        },
      ]

    const options = reactive({
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      target: originTarget,
      originSource,
      originTarget,
      isSearch: true,
      modelValues: ['\u6DF1\u5733', '\u6210\u90FD', '\u7EF5\u9633'],
      showTooltip: true
    })

    return {
      options
    }
  }
})
<\/script>
`},{highlight:v(()=>[dn]),default:v(()=>[h(k)]),_:1}),_n,gn,h(d,{sourceCode:`<template>
  <d-transfer
    v-model="options.modelValues"
    :titles="options.titles"
    :sourceOption="options.source"
    :targetOption="options.target"
    :isSearch="options.isSearch"
    :isSourceDroppable="options.isSourceDroppable"
    :isTargetDroppable="options.isTargetDroppable"
  >
  </d-transfer>
</template>
<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const originSource = [
        {
          key: '\u5317\u4EAC',
          value: '\u5317\u4EAC',
          disabled: false,
        },
        {
          key: '\u4E0A\u6D77',
          value: '\u4E0A\u6D77',
          disabled: true,
        },
        {
          key: '\u5E7F\u5DDE',
          value: '\u5E7F\u5DDE',
          disabled: false,
        },
        {
          key: '\u6DF1\u5733',
          value: '\u6DF1\u5733',
          disabled: false,
        },
        {
          key: '\u6210\u90FD',
          value: '\u6210\u90FD',
          disabled: false,
        },
        {
          key: '\u6B66\u6C49',
          value: '\u6B66\u6C49',
          disabled: false,
        },
        {
          key: "\u897F\u5B89",
          value: "\u897F\u5B89",
          disabled: false,
        },
        {
          key: '\u798F\u5EFA',
          value: '\u798F\u5EFA',
          disabled: false,
        },
        
      ]
    const originTarget = [
        {
          key: '\u5357\u5145',
          value: '\u5357\u5145',
          disabled: false,
        },
        {
          key: '\u5E7F\u5143',
          value: '\u5E7F\u5143',
          disabled: false,
        },
        {
          key: '\u7EF5\u9633',
          value: '\u7EF5\u9633',
          disabled: false,
        },
        {
          key: '\u5927\u8FDE',
          value: '\u5927\u8FDE',
          disabled: false,
        },
        {
          key: '\u91CD\u5E86',
          value: '\u91CD\u5E86',
          disabled: false,
        },
      ]

    const options = reactive({
      titles: ['sourceHeader', 'targetHeader'],
      source: originSource,
      target: originTarget,
      originSource,
      originTarget,
      isSearch: false,
      modelValues: ['\u6DF1\u5733', '\u6210\u90FD', '\u7EF5\u9633'],
      isSourceDroppable: true,
      isTargetDroppable: true
    })

    return {
      options
    }
  }
})
<\/script>
`},{highlight:v(()=>[yn]),default:v(()=>[h(e)]),_:1}),fn,mn,h(d,{sourceCode:`<template>
  <d-transfer>
    <template #left-header>
      <div class="custom-transfer__header">Customize Header</div>
    </template>
    <template #left-body>
      <div class="custom-transfer__body">
        <div class="custom-transfer__body__list custom-transfer__body__header">
          <DCheckbox
            class="custom-transfer__body__list__checkout"
            v-model="leftOptions.allChecked"
            @change="changeAllSource(leftOptions)"
          ></DCheckbox>
          <div class="custom-transfer__body__list__part">Id</div>
          <div class="custom-transfer__body__list__part">Name</div>
          <div class="custom-transfer__body__list__part">Age</div>
        </div>
        <DCheckboxGroup v-model="leftOptions.checkedValues">
          <div class="custom-transfer__body__list" v-for="(item, idx) in leftOptions.filterData">
            <DCheckbox
                class="devui-transfer__panel__body__list__item"
                :value="item.value"
                :disabled="item.disabled"
                :key="idx">
            </DCheckbox>
            <div class="custom-transfer__body__list__part">{{item.key}}</div>
            <div class="custom-transfer__body__list__part">{{item.value}}</div>
            <div class="custom-transfer__body__list__part">{{item.age}}</div>
          </div>
        </DCheckboxGroup>
      </div>
    </template>
    <template #operation>
      <div class="custom-transfer__operation">
        <div class="custom-transfer__operation__group">
          <DButton :disabled="leftOptions.disabled" @Click="updateRightFilterData" >Left</DButton>
          <DButton style="margin-top: 12px;" :disabled="rightOptions.disabled" @click="updateLeftFilterData">Right</DButton>
        </div>
      </div>
    </template>
    <template #right-header>
      <div class="custom-transfer__header">Customize Header</div>
    </template>
    <template #right-body>
      <div class="custom-transfer__body">
        <div class="custom-transfer__body__list custom-transfer__body__header">
          <DCheckbox
            class="custom-transfer__body__list__checkout"
            v-model="rightOptions.allChecked"
            @change="changeAllSource(rightOptions)"
          ></DCheckbox>
          <div class="custom-transfer__body__list__part">Id</div>
          <div class="custom-transfer__body__list__part">Name</div>
          <div class="custom-transfer__body__list__part">Age</div>
        </div>
        <DCheckboxGroup v-model="rightOptions.checkedValues">
          <div class="custom-transfer__body__list" v-for="(item, idx) in rightOptions.filterData">
            <DCheckbox
                class="devui-transfer__panel__body__list__item"
                :value="item.value"
                :disabled="item.disabled"
                :key="idx">
            </DCheckbox>
            <div class="custom-transfer__body__list__part">{{item.key}}</div>
            <div class="custom-transfer__body__list__part">{{item.value}}</div>
            <div class="custom-transfer__body__list__part">{{item.age}}</div>
          </div>
        </DCheckboxGroup>
      </div>
    </template>
  </d-transfer>
</template>
<script>
import { defineComponent, reactive, watch } from 'vue'

export default defineComponent({
  setup() {
    const leftOptions = reactive({
      allChecked: false,
      filterData: [
        {
          key: '1',
          value: 'Mark',
          age: 11,
          disabled: false,
        },
        {
          key: '2',
          value: 'Jacob',
          age: 12,
          disabled: false,
        },
        {
          key: '3',
          value: 'Danni',
          age: 13,
          disabled: false,
        },
        {
          key: '4',
          value: 'green',
          age: 14,
          disabled: false,
        },
        {
          key: '5',
          value: 'po',
          age: 15,
          disabled: false,
        },
        {
          key: '6',
          value: 'Book',
          age: 16,
          disabled: false,
        }
      ],
      checkedValues: [],
      disabled: true,
    });

    const rightOptions = reactive({
      allChecked: false,
      filterData: [
        {
          key: '21',
          value: 'john',
          age: 17,
          disabled: false,
        },
        {
          key: '22',
          value: 'Joke',
          age: 28,
          disabled: false,
        },
        {
          key: '23',
          value: 'Echo',
          age: 18,
          disabled: false,
        },
      ],
      checkedValues: [],
      disabled: true,
    })

    watch(
      () => leftOptions.checkedValues, 
      (nVal) => {
        rightOptions.disabled = nVal.length !== 0 ? false : true
        leftOptions.allChecked = isEqual(nVal, leftOptions.filterData)
      },
      {
        deep: true
      }
    )

    watch(
      () => rightOptions.checkedValues,
      (nVal) => {
        leftOptions.disabled = nVal.length !== 0 ? false : true
        rightOptions.allChecked = isEqual(nVal, rightOptions.filterData)
      },
      {
        deep: true
      }
    )

    const isEqual = (source, target) => {
      return target.length !== 0 && source.length === target.length
    }

    const changeAllSource = (source) => {
      if(source.allChecked) {
        source.checkedValues = source.filterData.map(item => item.value)
      } else {
        source.checkedValues = []
      }
    }

    const updateRightFilterData = () => {
      rightOptions.filterData = rightOptions.filterData.filter(item => {
        let hasItem = rightOptions.checkedValues.includes(item.value)
        if(hasItem) {
          leftOptions.filterData.push(item)
        }
        return !hasItem
      })
      rightOptions.checkedValues = []
    }

    const updateLeftFilterData = () => {
      leftOptions.filterData = leftOptions.filterData.filter(item => {
        let hasItem = leftOptions.checkedValues.includes(item.value)
        if(hasItem) {
          rightOptions.filterData.push(item)
        }
        return !hasItem
      })
      leftOptions.checkedValues = []
    }

    return {
      leftOptions,
      rightOptions,
      changeAllSource,
      updateRightFilterData,
      updateLeftFilterData
    }
  }
})
<\/script>
<style>
.custom-transfer__header {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #dfe1e6;
}
.custom-transfer__body {
  height: calc(100% - 40px);
  overflow-y: auto;
}
.custom-transfer__body__list {
  display: flex;
  justify-content: space-between;
  height: 36px;
  line-height: 36px;
  border-bottom: 1px solid #dfe1e6;
  align-items: center;
}
.custom-transfer__body__list__part {
  width: 30%;
  text-align: center;
}
.custom-transfer__body__list__checkout, .custom-transfer__body__list__item {
  width: 10%;
}
.custom-transfer__header, .custom-transfer__body__list {
  padding: 0 10px;
}
.custom-transfer__operation {
  display: flex;
  width: 10%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.custom-transfer__operation__group , .custom-transfer__operation__group .devui-btn{
  width: 64px;
}
</style>
`},{highlight:v(()=>[hn]),default:v(()=>[h(u)]),_:1}),vn])}var Cn=un(rn,[["render",bn]]);export{Dn as __pageData,Cn as default};
