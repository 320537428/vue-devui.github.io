var M=Object.defineProperty;var w=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var x=(p,t,e)=>t in p?M(p,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):p[t]=e,E=(p,t)=>{for(var e in t||(t={}))V.call(t,e)&&x(p,e,t[e]);if(w)for(var e of w(t))G.call(t,e)&&x(p,e,t[e]);return p};import{_ as O,V as v,r as A,c as S,a as C,w as i,b as L,d as n,e as a,o as W}from"./app.bfbf33a4.js";const j={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:t,createTextVNode:e,withCtx:s,openBlock:y,createElementBlock:b}=v,d=e("\u7F16\u8F91");function u(f,k){const c=p("d-column"),N=p("d-button"),l=p("d-table");return y(),b("div",null,[t(l,{data:f.baseTableData},{default:s(()=>[t(c,{field:"firstName",header:"First Name",sortable:!0}),t(c,{field:"lastName",header:"Last Name"}),t(c,{field:"gender",header:"Gender"}),t(c,{field:"date",header:"Date of birth"}),t(c,{header:"Operation"},{default:s(o=>[t(N,{onClick:q=>f.handleClick(o)},{default:s(()=>[d]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])])}const{defineComponent:m,ref:g}=v,h=m({setup(){return{baseTableData:g([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),handleClick:c=>{console.log(c)}}}});return E({render:u},h)}(),"render-demo-1":function(){const{resolveComponent:p,createVNode:t,createTextVNode:e,createElementVNode:s,withCtx:y,openBlock:b,createElementBlock:d}=v,u={class:"table-btn-groups"},m={class:"table-btn"},g=e(" \u81EA\u52A8\u8868\u683C\u5E03\u5C40\uFF1A "),h={class:"table-btn"},f=e(" \u6591\u9A6C\u7EB9\uFF1A "),k={class:"table-btn"},c=e(" \u8868\u5934\u80CC\u666F\u8272\uFF1A ");function N(r,F){const _=p("d-switch"),B=p("d-column"),T=p("d-table");return b(),d("div",null,[s("div",u,[s("div",m,[g,t(_,{checked:r.tableLayout,"onUpdate:checked":F[0]||(F[0]=D=>r.tableLayout=D)},null,8,["checked"])]),s("div",h,[f,t(_,{checked:r.striped,"onUpdate:checked":F[1]||(F[1]=D=>r.striped=D)},null,8,["checked"])]),s("div",k,[c,t(_,{checked:r.headerBg,"onUpdate:checked":F[2]||(F[2]=D=>r.headerBg=D)},null,8,["checked"])])]),t(T,{"table-layout":r.tableLayout?"auto":"fixed",striped:r.striped,"header-bg":r.headerBg,data:r.stripedTableData},{default:y(()=>[t(B,{field:"firstName",header:"First Name"}),t(B,{field:"lastName",header:"Last Name"}),t(B,{field:"gender",header:"Gender"}),t(B,{field:"date",header:"Date of birth"})]),_:1},8,["table-layout","striped","header-bg","data"])])}const{defineComponent:l,ref:o}=v,q=l({setup(){const r=o(!1),F=o(!1),_=o(!1);return{stripedTableData:o([{firstName:"Mark",lastName:"Otto",date:"1990/01/11",gender:"Male"},{firstName:"Jacob",lastName:"Thornton",gender:"Female",date:"1990/01/12"},{firstName:"Danni",lastName:"Chen",gender:"Male",date:"1990/01/13"},{firstName:"green",lastName:"gerong",gender:"Male",date:"1990/01/14"}]),striped:F,headerBg:_,tableLayout:r}}});return E({render:N},q)}(),"render-demo-2":function(){const{createTextVNode:p,resolveComponent:t,withCtx:e,createVNode:s,createElementVNode:y,openBlock:b,createElementBlock:d}=v,u=p("\u66F4\u65B0\u6570\u636E");function m(k,c){const N=t("d-button"),l=t("d-column"),o=t("d-table");return b(),d("div",null,[y("div",null,[s(N,{onClick:k.handleClick},{default:e(()=>[u]),_:1},8,["onClick"]),s(o,{data:k.emptyData},{default:e(()=>[s(l,{field:"firstName",header:"First Name"}),s(l,{field:"lastName",header:"Last Name"}),s(l,{field:"gender",header:"Gender"}),s(l,{field:"date",header:"Date of birth"})]),_:1},8,["data"])])])}const{defineComponent:g,ref:h}=v,f=g({setup(){const k=h([]);return{emptyData:k,handleClick:()=>{k.value=[{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18"}]}}}});return E({render:m},f)}(),"render-demo-3":function(){const{createTextVNode:p,resolveComponent:t,withCtx:e,createVNode:s,createElementVNode:y,openBlock:b,createElementBlock:d}=v,u=p("\u66F4\u65B0\u6570\u636E");function m(c,N){const l=t("d-button"),o=t("d-column"),q=t("d-table");return b(),d("div",null,[y("div",null,[s(l,{onClick:c.handleClick},{default:e(()=>[u]),_:1},8,["onClick"]),s(q,{data:c.emptyData,scrollable:!0},{default:e(()=>[s(o,{field:"firstName",header:"First Name",filterable:"",filterList:c.filterList,order:2,minWidth:100},null,8,["filterList"]),s(o,{field:"lastName",header:"Last Name",order:3}),s(o,{field:"gender",header:"Gender",order:5}),s(o,{field:"date",header:"Date of birth",order:4}),s(o,{field:"address",header:"Address",order:6}),s(o,{field:"occupation",header:"Occupation",order:7}),s(o,{field:"occupation",header:"Occupation",order:7}),s(o,{field:"occupation",header:"Occupation",order:7}),s(o,{field:"occupation",header:"Occupation",order:7,fixedRight:"0px"}),s(o,{field:"idNo",header:"ID Card Number",order:1})]),_:1},8,["data"])])])}const{defineComponent:g,ref:h,computed:f}=v,k=g({setup(){const c=h([]),N=()=>{c.value=[{firstName:"po",lastName:"Lang",gender:"Male",date:"1990/01/15",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"john",lastName:"Li",gender:"Female",date:"1990/01/16",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"peng",lastName:"Li",gender:"Male",date:"1990/01/17",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"},{firstName:"Dale",lastName:"Yu",gender:"Female",date:"1990/01/18",address:"Shenzhen Guangdong",occupation:"Worker",idNo:"2000**********9999"}]},l=f(()=>c.value.map(o=>({name:`${o.firstName} ${o.lastName}`,value:o.firstName})));return{emptyData:c,handleClick:N,filterList:l}}});return E({render:m},k)}()}},an='{"title":"Table \u8868\u683C","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u8868\u683C\u6837\u5F0F","slug":"\u8868\u683C\u6837\u5F0F"},{"level":3,"title":"\u7A7A\u6570\u636E\u6A21\u677F","slug":"\u7A7A\u6570\u636E\u6A21\u677F"},{"level":3,"title":"\u56FA\u5B9A\u5217","slug":"\u56FA\u5B9A\u5217"},{"level":3,"title":"d-table \u53C2\u6570","slug":"d-table-\u53C2\u6570"},{"level":3,"title":"d-column \u53C2\u6570","slug":"d-column-\u53C2\u6570"},{"level":3,"title":"d-column \u63D2\u69FD","slug":"d-column-\u63D2\u69FD"}],"relativePath":"components/table/index.md","lastUpdated":1647843975041}',z=L('<h1 id="table-\u8868\u683C" tabindex="-1">Table \u8868\u683C <a class="header-anchor" href="#table-\u8868\u683C" aria-hidden="true">#</a></h1><p>\u5C55\u793A\u884C\u5217\u6570\u636E\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><ol><li>\u5F53\u6709\u5927\u91CF\u7ED3\u6784\u5316\u7684\u6570\u636E\u9700\u8981\u5C55\u73B0\u65F6\uFF1B</li><li>\u5F53\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u8FC7\u6EE4\u3001\u81EA\u5B9A\u4E49\u64CD\u4F5C\u7B49\u590D\u6742\u884C\u4E3A\u65F6\u3002</li></ol><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),$=n("div",null,[a("\u7B80\u5355\u8868\u683C\uFF0C"),n("code",null,"d-table"),a("\u7EC4\u4EF6\u4E0A\u7684"),n("code",null,"data"),a("\u5C5E\u6027\u4F20\u5165\u8981\u5C55\u793A\u7684\u6570\u636E\uFF0C"),n("code",null,"d-table-column"),a("\u7EC4\u4EF6\u4E0A\u901A\u8FC7"),n("code",null,"field"),a("\u4F20\u5165\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D\uFF0C"),n("code",null,"header"),a("\u4F20\u5165\u5BF9\u5E94\u5217\u7684\u6807\u9898\u3002")],-1),J=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("baseTableData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":sortable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Operation"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},"#default"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scope"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick(scope)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u7F16\u8F91"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
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
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"scope"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("scope"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" baseTableData"),n("span",{class:"token punctuation"},","),a(" handleClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=n("h3",{id:"\u8868\u683C\u6837\u5F0F",tabindex:"-1"},[a("\u8868\u683C\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u8868\u683C\u6837\u5F0F","aria-hidden":"true"},"#")],-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
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
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":table-layout"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("tableLayout ? "),n("span",{class:"token punctuation"},"'"),a("auto"),n("span",{class:"token punctuation"},"'"),a(" : "),n("span",{class:"token punctuation"},"'"),a("fixed"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":striped"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("striped"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":header-bg"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("headerBg"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("stripedTableData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
      tableLayout`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("scss"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".table-btn-groups"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 1rem"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".table-btn"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),a(" column"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" space-between"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),I=n("h3",{id:"\u7A7A\u6570\u636E\u6A21\u677F",tabindex:"-1"},[a("\u7A7A\u6570\u636E\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u7A7A\u6570\u636E\u6A21\u677F","aria-hidden":"true"},"#")],-1),R=n("div",null,"\u5F53\u4F20\u5165\u7684\u6570\u636E\u4E3A\u7A7A\u65F6\uFF0C\u9ED8\u8BA4\u5C55\u793A\u7A7A\u6570\u636E\u6A21\u677F\u3002",-1),P=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u66F4\u65B0\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("emptyData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"handleClick"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
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
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(" emptyData"),n("span",{class:"token punctuation"},","),a(" handleClick "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),H=n("h3",{id:"\u56FA\u5B9A\u5217",tabindex:"-1"},[a("\u56FA\u5B9A\u5217 "),n("a",{class:"header-anchor",href:"#\u56FA\u5B9A\u5217","aria-hidden":"true"},"#")],-1),K=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("handleClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u66F4\u65B0\u6570\u636E"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-table")]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("emptyData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":scrollable"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("firstName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("First Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"filterable"),a(),n("span",{class:"token attr-name"},":filterList"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("filterList"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("2"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":minWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("100"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lastName"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Last Name"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("3"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Gender"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("5"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("date"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Date of birth"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("4"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("address"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Address"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("6"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Occupation"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("7"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"fixedRight"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("0px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-column")]),a(),n("span",{class:"token attr-name"},"field"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("idNo"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"header"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ID Card Number"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":order"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("1"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-column")]),n("span",{class:"token punctuation"},">")]),a(`
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
`)])])],-1),Q=L('<h3 id="d-table-\u53C2\u6570" tabindex="-1">d-table \u53C2\u6570 <a class="header-anchor" href="#d-table-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>data</td><td><code>Array</code></td><td><code>[]</code></td><td>\u663E\u793A\u7684\u6570\u636E</td></tr><tr><td>striped</td><td><code>Boolean</code></td><td><code>false</code></td><td>\u662F\u5426\u663E\u793A\u6591\u9A6C\u7EB9\u95F4\u9694</td></tr><tr><td>max-width</td><td><code>String</code></td><td><code></code></td><td>\u8868\u683C\u6700\u5927\u5BBD\u5EA6</td></tr><tr><td>max-height</td><td><code>Boolean</code></td><td><code></code></td><td>\u8868\u683C\u6700\u5927\u9AD8\u5EA6</td></tr><tr><td>table-width</td><td><code>String</code></td><td><code></code></td><td>\u8868\u683C\u5BBD\u5EA6</td></tr><tr><td>table-height</td><td><code>String</code></td><td><code></code></td><td>\u8868\u683C\u9AD8\u5EA6</td></tr><tr><td>row-hovered-highlight</td><td><code>Boolean</code></td><td><code>true</code></td><td>\u9F20\u6807\u5728\u8BE5\u884C\u4E0A\u65F6\uFF0C\u9AD8\u4EAE\u8BE5\u884C</td></tr><tr><td>fix-header</td><td><code>Boolean</code></td><td><code>false</code></td><td>\u56FA\u5B9A\u5934\u90E8</td></tr><tr><td>checkable</td><td><code>Boolean</code></td><td><code>false</code></td><td>\u5728\u6BCF\u884C\u7684\u7B2C\u4E00\u5217\u5C55\u793A\u4E00\u4E2A checkbox</td></tr><tr><td>show-loading</td><td><code>Boolean</code></td><td><code>false</code></td><td>\u663E\u793A\u52A0\u8F7D\u52A8\u753B</td></tr><tr><td>header-bg</td><td><code>Boolean</code></td><td><code>false</code></td><td>\u5934\u90E8\u80CC\u666F</td></tr><tr><td>table-layout</td><td><code>&#39;fixed&#39; | &#39;auto&#39;</code></td><td><code>&#39;fixed&#39;</code></td><td>\u8868\u683C\u5E03\u5C40\uFF0C\u53EF\u9009\u503C\u4E3A&#39;auto&#39;</td></tr></tbody></table><h3 id="d-column-\u53C2\u6570" tabindex="-1">d-column \u53C2\u6570 <a class="header-anchor" href="#d-column-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td><code>String</code></td><td><code>-</code></td><td>\u5BF9\u5E94\u5217\u7684\u6807\u9898</td></tr><tr><td>field</td><td><code>String</code></td><td><code>-</code></td><td>\u5BF9\u5E94\u5217\u5185\u5BB9\u7684\u5B57\u6BB5\u540D</td></tr><tr><td>width</td><td><code>String | Number</code></td><td><code>-</code></td><td>\u5BF9\u5E94\u5217\u7684\u5BBD\u5EA6\uFF0C\u5355\u4F4D<code>px</code></td></tr><tr><td>min-width</td><td><code>String | Number</code></td><td><code>-</code></td><td>\u5BF9\u5E94\u5217\u7684\u6700\u5C0F\u5BBD\u5EA6\uFF0C\u5355\u4F4D<code>px</code></td></tr><tr><td>sortable</td><td><code>Boolean</code></td><td><code>false</code></td><td>\u5BF9\u884C\u6570\u636E\u6309\u7167\u8BE5\u5217\u7684\u987A\u5E8F\u8FDB\u884C\u6392\u5E8F</td></tr><tr><td>formatter</td><td><code>Function</code></td><td><code></code></td><td>\u5BF9\u5E94\u5217\u7684\u6240\u6709\u5355\u5143\u683C\u7684\u683C\u5F0F</td></tr><tr><td>compareFn</td><td><code>(field: string, a: T, b: T) =&gt; boolean</code></td><td><code>(field, a, b) =&gt; a[field] &gt; b[field]</code></td><td>\u7528\u4E8E\u6392\u5E8F\u7684\u6BD4\u8F83\u51FD\u6570</td></tr></tbody></table><h3 id="d-column-\u63D2\u69FD" tabindex="-1">d-column \u63D2\u69FD <a class="header-anchor" href="#d-column-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u9ED8\u8BA4\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9</td></tr></tbody></table>',6);function X(p,t,e,s,y,b){const d=A("render-demo-0"),u=A("demo"),m=A("render-demo-1"),g=A("render-demo-2"),h=A("render-demo-3");return W(),S("div",null,[z,C(u,{sourceCode:`<template>
  <d-table :data="baseTableData">
    <d-column field="firstName" header="First Name" :sortable="true"></d-column>
    <d-column field="lastName" header="Last Name"></d-column>
    <d-column field="gender" header="Gender"></d-column>
    <d-column field="date" header="Date of birth"></d-column>
    <d-column header="Operation">
      <template #default="scope">
        <d-button @click="handleClick(scope)">\u7F16\u8F91</d-button>
      </template>
    </d-column>
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
    const handleClick = (scope) => {
      console.log(scope);
    };

    return { baseTableData, handleClick };
  },
});
<\/script>
`},{description:i(()=>[$]),highlight:i(()=>[J]),default:i(()=>[C(d)]),_:1}),Y,C(u,{sourceCode:`<template>
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
  </div>
  <d-table :table-layout="tableLayout ? 'auto' : 'fixed'" :striped="striped" :header-bg="headerBg" :data="stripedTableData">
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
      tableLayout,
    };
  },
});
<\/script>

<style lang="scss">
.table-btn-groups {
  display: flex;
  margin-bottom: 1rem;
}
.table-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
`},{highlight:i(()=>[U]),default:i(()=>[C(m)]),_:1}),I,C(u,{sourceCode:`<template>
  <div>
    <d-button @click="handleClick">\u66F4\u65B0\u6570\u636E</d-button>
    <d-table :data="emptyData">
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
    const handleClick = () => {
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
    };

    return { emptyData, handleClick };
  },
});
<\/script>
`},{description:i(()=>[R]),highlight:i(()=>[P]),default:i(()=>[C(g)]),_:1}),H,C(u,{sourceCode:`<template>
  <div>
    <d-button @click="handleClick">\u66F4\u65B0\u6570\u636E</d-button>
    <d-table :data="emptyData" :scrollable="true">
      <d-column field="firstName" header="First Name" filterable :filterList="filterList" :order="2" :minWidth="100"></d-column>
      <d-column field="lastName" header="Last Name" :order="3"></d-column>
      <d-column field="gender" header="Gender" :order="5"></d-column>
      <d-column field="date" header="Date of birth" :order="4"></d-column>
      <d-column field="address" header="Address" :order="6"></d-column>
      <d-column field="occupation" header="Occupation" :order="7"></d-column>
      <d-column field="occupation" header="Occupation" :order="7"></d-column>
      <d-column field="occupation" header="Occupation" :order="7"></d-column>
      <d-column field="occupation" header="Occupation" :order="7" fixedRight="0px"></d-column>
      <d-column field="idNo" header="ID Card Number" :order="1"></d-column>
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
`},{highlight:i(()=>[K]),default:i(()=>[C(h)]),_:1}),Q])}var tn=O(j,[["render",X]]);export{an as __pageData,tn as default};
