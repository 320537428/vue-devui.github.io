var $=Object.defineProperty;var S=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var H=(a,o,s)=>o in a?$(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,b=(a,o)=>{for(var s in o||(o={}))j.call(o,s)&&H(a,s,o[s]);if(S)for(var s of S(o))z.call(o,s)&&H(a,s,o[s]);return a};import{_ as W,V,r as x,o as L,c as J,a as C,w as B,b as U,d as t,e as n}from"./app.d86bec19.js";const G={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:a,resolveComponent:o,createVNode:s,openBlock:y,createElementBlock:c}=V,l={class:"picker-pro-format-demo mr30"},F=a("div",{class:"mb10"},"Small",-1),i={class:"picker-pro-format-demo mr30"},u=a("div",{class:"mb10"},"Middle",-1),p={class:"picker-pro-format-demo mr30"},E=a("div",{class:"mb10"},"Large",-1);function f(k,m){const w=o("d-date-picker-pro");return y(),c("div",null,[a("div",l,[F,s(w,{modelValue:k.datePickerProValue,"onUpdate:modelValue":m[0]||(m[0]=A=>k.datePickerProValue=A),class:"mb20 wh250",size:"sm"},null,8,["modelValue"])]),a("div",i,[u,s(w,{modelValue:k.datePickerProValue2,"onUpdate:modelValue":m[1]||(m[1]=A=>k.datePickerProValue2=A),class:"mb20 wh250"},null,8,["modelValue"])]),a("div",p,[E,s(w,{modelValue:k.datePickerProValue3,"onUpdate:modelValue":m[2]||(m[2]=A=>k.datePickerProValue3=A),class:"mb20 wh250",size:"lg"},null,8,["modelValue"])])])}const{defineComponent:g,ref:e}=V,r=g({setup(){const k=e(""),m=e(""),w=e("");return{datePickerProValue:k,datePickerProValue2:m,datePickerProValue3:w}}});return b({render:f},r)}(),"render-demo-1":function(){const{resolveComponent:a,createVNode:o,openBlock:s,createElementBlock:y}=V;function c(u,p){const E=a("d-date-picker-pro");return s(),y("div",null,[o(E,{modelValue:u.datePickerProValue1,"onUpdate:modelValue":p[0]||(p[0]=f=>u.datePickerProValue1=f),class:"mb20 wh250",showTime:!0,format:"YYYY/MM/DD HH:mm:ss"},null,8,["modelValue"])])}const{defineComponent:l,ref:F}=V,i=l({setup(){return{datePickerProValue1:F("")}}});return b({render:c},i)}(),"render-demo-2":function(){const{createElementVNode:a,renderSlot:o,createTextVNode:s,resolveComponent:y,withCtx:c,createVNode:l,toDisplayString:F,openBlock:i,createElementBlock:u}=V,p=a("div",{class:"mb10"},"right area",-1),E={class:"date-picker-right-panel"},f=s(" \u4E00\u4E2A\u6708\u524D "),g=s(" \u4E24\u5468\u524D "),e=s(" \u4E00\u5468\u524D "),r=s(" \u4ECA\u5929 "),k=a("div",{class:"mb10"},"footer",-1),m={class:"date-picker-footer"},w=s(" \u4ECA\u5929 "),A=s(" \u6E05\u9664\u65F6\u95F4 ");function Y(d,v){const D=y("d-button"),T=y("d-date-picker-pro");return i(),u("div",null,[p,l(T,{modelValue:d.datePickerProValue1,"onUpdate:modelValue":v[4]||(v[4]=M=>d.datePickerProValue1=M),class:"mb20 wh250",showTime:!0},{rightArea:c(()=>[o(d.$slots,"rightArea",{},()=>[a("ul",E,[a("li",null,[l(D,{variant:"text",color:"primary",onClick:v[0]||(v[0]=()=>{d.setDate(-30)})},{default:c(()=>[f]),_:1}),a("span",null,F(d.getDateString(-30)),1)]),a("li",null,[l(D,{variant:"text",color:"primary",onClick:v[1]||(v[1]=()=>{d.setDate(-14)})},{default:c(()=>[g]),_:1}),a("span",null,F(d.getDateString(-14)),1)]),a("li",null,[l(D,{variant:"text",color:"primary",onClick:v[2]||(v[2]=()=>{d.setDate(-7)})},{default:c(()=>[e]),_:1}),a("span",null,F(d.getDateString(-7)),1)]),a("li",null,[l(D,{variant:"text",color:"primary",onClick:v[3]||(v[3]=()=>{d.setDate(0)})},{default:c(()=>[r]),_:1}),a("span",null,F(d.getDateString(0)),1)])])])]),_:3},8,["modelValue"]),k,l(T,{modelValue:d.datePickerProValue2,"onUpdate:modelValue":v[5]||(v[5]=M=>d.datePickerProValue2=M),class:"mb20 wh250",showTime:!0},{footer:c(()=>[o(d.$slots,"footer",{},()=>[a("div",m,[l(D,{variant:"solid",color:"secondary",onClick:d.setToday},{default:c(()=>[w]),_:1},8,["onClick"]),l(D,{variant:"solid",color:"secondary",onClick:d.clearDate},{default:c(()=>[A]),_:1},8,["onClick"])])])]),_:3},8,["modelValue"])])}const{defineComponent:N,ref:h}=V,P=N({setup(){const d=h(""),v=h("");return{datePickerProValue1:d,datePickerProValue2:v,setDate:_=>{d.value=new Date(new Date().getTime()+_*24*3600*1e3)},getDateString:_=>{const R=new Date(new Date().getTime()+_*24*3600*1e3);return`${R.getMonth()+1}\u6708${R.getDate()}\u65E5`},setToday:()=>{v.value=new Date(new Date().getTime())},clearDate:()=>{v.value=""}}}});return b({render:Y},P)}(),"render-demo-3":function(){const{createElementVNode:a,resolveComponent:o,createVNode:s,openBlock:y,createElementBlock:c}=V,l={class:"picker-pro-format-demo mr30"},F=a("div",{class:"mb10"},"\u65E5\u671F\u683C\u5F0F\uFF1A YYYY-MM-DD",-1),i={class:"picker-pro-format-demo"},u=a("div",{class:"mb10"},"\u65E5\u671F\u683C\u5F0F\uFF1A YYYY-MM-DD HH:mm:ss",-1);function p(e,r){const k=o("d-date-picker-pro");return y(),c("div",null,[a("div",l,[F,s(k,{modelValue:e.pickerProFormatValue,"onUpdate:modelValue":r[0]||(r[0]=m=>e.pickerProFormatValue=m),class:"mb20 wh250",format:"YYYY-MM-DD"},null,8,["modelValue"])]),a("div",i,[u,s(k,{modelValue:e.pickerProFormatValue1,"onUpdate:modelValue":r[1]||(r[1]=m=>e.pickerProFormatValue1=m),class:"mb20 wh250",showTime:!0,format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])])])}const{defineComponent:E,ref:f}=V,g=E({setup(){const e=f(""),r=f("");return{pickerProFormatValue:e,pickerProFormatValue1:r}}});return b({render:p},g)}(),"render-demo-4":function(){const{createElementVNode:a,resolveComponent:o,createVNode:s,openBlock:y,createElementBlock:c}=V,l={class:"picker-pro-format-demo mr30"},F=a("div",{class:"mb10"},"year picker",-1),i=a("div",{class:"mb10"},"month picker",-1);function u(g,e){const r=o("d-date-picker-pro");return y(),c("div",null,[a("div",l,[F,s(r,{modelValue:g.pickerProFormatValue,"onUpdate:modelValue":e[0]||(e[0]=k=>g.pickerProFormatValue=k),class:"mb20 wh250",type:"year"},null,8,["modelValue"]),i,s(r,{modelValue:g.pickerProFormatValue1,"onUpdate:modelValue":e[1]||(e[1]=k=>g.pickerProFormatValue1=k),class:"mb20 wh250",type:"month"},null,8,["modelValue"])])])}const{defineComponent:p,ref:E}=V,f=p({setup(){const g=E(""),e=E("");return{pickerProFormatValue:g,pickerProFormatValue1:e}}});return b({render:u},f)}(),"render-demo-5":function(){const{createElementVNode:a,resolveComponent:o,createVNode:s,openBlock:y,createElementBlock:c}=V,l=a("div",{class:"mb10"},"basic range picker",-1),F=a("div",{class:"mb10"},"time range picker",-1),i=a("div",{class:"mb10"},"year range picker",-1),u=a("div",{class:"mb10"},"month range picker",-1);function p(e,r){const k=o("d-range-date-picker-pro");return y(),c("div",null,[l,s(k,{modelValue:e.rangeDatePickerProValue,"onUpdate:modelValue":r[0]||(r[0]=m=>e.rangeDatePickerProValue=m),class:"mb20"},null,8,["modelValue"]),F,s(k,{modelValue:e.rangeDatePickerProValue1,"onUpdate:modelValue":r[1]||(r[1]=m=>e.rangeDatePickerProValue1=m),class:"mb20",showTime:!0,format:"YYYY/MM/DD HH:mm:ss"},null,8,["modelValue"]),i,s(k,{modelValue:e.rangeDatePickerProValue2,"onUpdate:modelValue":r[2]||(r[2]=m=>e.rangeDatePickerProValue2=m),class:"mb20 wh250",type:"year"},null,8,["modelValue"]),u,s(k,{modelValue:e.rangeDatePickerProValue3,"onUpdate:modelValue":r[3]||(r[3]=m=>e.rangeDatePickerProValue3=m),class:"mb20 wh250",type:"month"},null,8,["modelValue"])])}const{defineComponent:E,ref:f}=V,g=E({setup(){const e=f(["",""]),r=f(["",""]),k=f(["",""]),m=f(["",""]);return{rangeDatePickerProValue:e,rangeDatePickerProValue1:r,rangeDatePickerProValue2:k,rangeDatePickerProValue3:m}}});return b({render:p},g)}(),"render-demo-6":function(){const{createElementVNode:a,renderSlot:o,createTextVNode:s,resolveComponent:y,withCtx:c,createVNode:l,openBlock:F,createElementBlock:i}=V,u=a("div",{class:"mb10"},"right area",-1),p={class:"date-picker-right-panel"},E=s(" \u4E00\u4E2A\u6708\u524D "),f=s(" \u4E00\u5468\u524D "),g=s(" \u5F53\u524D\u5468 "),e=a("div",{class:"mb10"},"footer",-1),r={class:"date-picker-footer"},k=s(" \u6E05\u9664\u5F00\u59CB\u65F6\u95F4 "),m=s(" \u6E05\u9664\u7ED3\u675F\u65F6\u95F4 ");function w(h,P){const d=y("d-button"),v=y("d-range-date-picker-pro");return F(),i("div",null,[u,l(v,{modelValue:h.datePickerProValue1,"onUpdate:modelValue":P[3]||(P[3]=D=>h.datePickerProValue1=D),class:"mb20 wh250",showTime:!0},{rightArea:c(()=>[o(h.$slots,"rightArea",{},()=>[a("ul",p,[a("li",null,[l(d,{variant:"text",color:"primary",onClick:P[0]||(P[0]=()=>{h.setDate(-30)})},{default:c(()=>[E]),_:1})]),a("li",null,[l(d,{variant:"text",color:"primary",onClick:P[1]||(P[1]=()=>{h.setDate(-14)})},{default:c(()=>[f]),_:1})]),a("li",null,[l(d,{variant:"text",color:"primary",onClick:P[2]||(P[2]=()=>{h.selectThisWeek()})},{default:c(()=>[g]),_:1})])])])]),_:3},8,["modelValue"]),e,l(v,{ref:"footerCustom",modelValue:h.datePickerProValue2,"onUpdate:modelValue":P[4]||(P[4]=D=>h.datePickerProValue2=D),class:"mb20 wh250",showTime:!0},{footer:c(()=>[o(h.$slots,"footer",{},()=>[a("div",r,[l(d,{variant:"solid",color:"secondary",onClick:h.clearStartDate},{default:c(()=>[k]),_:1},8,["onClick"]),l(d,{variant:"solid",color:"secondary",onClick:h.clearEndDate},{default:c(()=>[m]),_:1},8,["onClick"])])])]),_:3},8,["modelValue"])])}const{defineComponent:A,ref:Y}=V,N=A({setup(){const h=Y(["",""]),P=Y(["",""]),d=q=>{h.value=[new Date(new Date().getTime()+q*24*3600*1e3),new Date]},v=()=>{const q=new Date,_=new Date(new Date().setDate(q.getDate()-q.getDay())),R=new Date(new Date().setDate(_.getDate()+6));h.value=[_,R]},D=Y();return{datePickerProValue1:h,datePickerProValue2:P,setDate:d,selectThisWeek:v,footerCustom:D,clearStartDate:()=>{const[q,_]=P.value;P.value=["",_],D==null||D.value.focusChange("start")},clearEndDate:()=>{const[q,_]=P.value;P.value=[q,""],D==null||D.value.focusChange("end")}}}});return b({render:w},N)}(),"render-demo-7":function(){const{resolveComponent:a,createVNode:o,openBlock:s,createElementBlock:y}=V;function c(u,p){const E=a("d-date-picker-pro"),f=a("d-range-date-picker-pro");return s(),y("div",null,[o(E,{modelValue:u.datePickerProValue1,"onUpdate:modelValue":p[0]||(p[0]=g=>u.datePickerProValue1=g),class:"mb20 wh250 mr30",disabled:!0},null,8,["modelValue"]),o(f,{modelValue:u.datePickerProValue2,"onUpdate:modelValue":p[1]||(p[1]=g=>u.datePickerProValue2=g),class:"mb20 wh250",disabled:!0},null,8,["modelValue"])])}const{defineComponent:l,ref:F}=V,i=l({setup(){const u=F(""),p=F(["",""]);return{datePickerProValue1:u,datePickerProValue2:p}}});return b({render:c},i)}(),"render-demo-8":function(){const{resolveComponent:a,createVNode:o,openBlock:s,createElementBlock:y}=V;function c(u,p){const E=a("d-date-picker-pro"),f=a("d-range-date-picker-pro");return s(),y("div",null,[o(E,{modelValue:u.datePickerProValue1,"onUpdate:modelValue":p[0]||(p[0]=g=>u.datePickerProValue1=g),class:"mb20 wh250 mr30",calendarRange:[2022,2025],limitDateRange:u.limitDateRange},null,8,["modelValue","limitDateRange"]),o(f,{modelValue:u.datePickerProValue2,"onUpdate:modelValue":p[1]||(p[1]=g=>u.datePickerProValue2=g),class:"mb20 wh250",calendarRange:[2022,2025],limitDateRange:u.limitDateRange},null,8,["modelValue","limitDateRange"])])}const{defineComponent:l,ref:F}=V,i=l({setup(){const u=F(""),p=F(["",""]),E=F([new Date(2022,1,5),new Date(2023,1,5)]);return{datePickerProValue1:u,datePickerProValue2:p,limitDateRange:E}}});return b({render:c},i)}()}},yt='{"title":"DatePickerPro \u65E5\u671F\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u663E\u793A\u65F6\u95F4","slug":"\u663E\u793A\u65F6\u95F4"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF","slug":"\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF"},{"level":3,"title":"\u65E5\u671F\u683C\u5F0F","slug":"\u65E5\u671F\u683C\u5F0F"},{"level":3,"title":"\u5E74\u6708\u9009\u62E9\u5668","slug":"\u5E74\u6708\u9009\u62E9\u5668"},{"level":3,"title":"\u8303\u56F4\u9009\u62E9\u5668","slug":"\u8303\u56F4\u9009\u62E9\u5668"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF","slug":"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF"},{"level":3,"title":"\u7981\u7528\u9009\u62E9\u5668","slug":"\u7981\u7528\u9009\u62E9\u5668"},{"level":3,"title":"\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4","slug":"\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4"},{"level":3,"title":"DatePickerPro \u53C2\u6570","slug":"datepickerpro-\u53C2\u6570"},{"level":3,"title":"DatePickerPro \u4E8B\u4EF6","slug":"datepickerpro-\u4E8B\u4EF6"},{"level":3,"title":"DatePickerPro \u63D2\u69FD","slug":"datepickerpro-\u63D2\u69FD"},{"level":3,"title":"DatePickerPro \u7C7B\u578B\u5B9A\u4E49","slug":"datepickerpro-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"RangeDatePickerPro \u53C2\u6570","slug":"rangedatepickerpro-\u53C2\u6570"},{"level":3,"title":"RangeDatePickerPro \u4E8B\u4EF6","slug":"rangedatepickerpro-\u4E8B\u4EF6"},{"level":3,"title":"RangeDatePickerPro \u63D2\u69FD","slug":"rangedatepickerpro-\u63D2\u69FD"}],"relativePath":"components/date-picker-pro/index.md","lastUpdated":1662171945323}',I=U('<h1 id="datepickerpro-\u65E5\u671F\u9009\u62E9\u5668" tabindex="-1">DatePickerPro \u65E5\u671F\u9009\u62E9\u5668 <a class="header-anchor" href="#datepickerpro-\u65E5\u671F\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><p>\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\u65F6\uFF1B\u9700\u8981\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("picker-pro-format-demo mr30"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("sm"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("picker-pro-format-demo mr30"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Middle"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("picker-pro-format-demo mr30"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lg"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue2 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue3 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue`),t("span",{class:"token punctuation"},","),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},","),n(`
      datePickerProValue3`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".mb20"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 20px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`

`),t("span",{class:"token selector"},".wh250"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 250px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),O=t("h3",{id:"\u663E\u793A\u65F6\u95F4",tabindex:"-1"},[n("\u663E\u793A\u65F6\u95F4 "),t("a",{class:"header-anchor",href:"#\u663E\u793A\u65F6\u95F4","aria-hidden":"true"},"#")],-1),Q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showTime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"format"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("YYYY/MM/DD HH:mm:ss"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue1 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue1`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),X=t("h3",{id:"\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF","aria-hidden":"true"},"#")],-1),Z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("right area"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showTime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#rightArea"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("slot")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rightArea"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ul")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("date-picker-right-panel"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(`
              `),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                () => {
                  setDate(-30);
                }
              `),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token punctuation"},">")]),n(`
              \u4E00\u4E2A\u6708\u524D
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("{{ getDateString(-30) }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(`
              `),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                () => {
                  setDate(-14);
                }
              `),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token punctuation"},">")]),n(`
              \u4E24\u5468\u524D
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("{{ getDateString(-14) }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(`
              `),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                () => {
                  setDate(-7);
                }
              `),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token punctuation"},">")]),n(`
              \u4E00\u5468\u524D
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("{{ getDateString(-7) }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(`
              `),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                () => {
                  setDate(0);
                }
              `),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token punctuation"},">")]),n(`
              \u4ECA\u5929
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("{{ getDateString(0) }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("slot")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-date-picker-pro")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("footer"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showTime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#footer"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("slot")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("footer"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("date-picker-footer"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("secondary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("setToday"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" \u4ECA\u5929 "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("secondary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("clearDate"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" \u6E05\u9664\u65F6\u95F4 "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("slot")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-date-picker-pro")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue1 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string "),t("span",{class:"token operator"},"|"),n(" Date"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue2 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string "),t("span",{class:"token operator"},"|"),n(" Date"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"setDate"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"days"),t("span",{class:"token operator"},":"),n(" number")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue1`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getTime"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"+"),n(" days "),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"24"),n(),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"3600"),n(),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"getDateString"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"days"),t("span",{class:"token operator"},":"),n(" number")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" date "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getTime"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"+"),n(" days "),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"24"),n(),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"3600"),n(),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("date"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getMonth"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},"\u6708"),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),n("date"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getDate"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token string"},"\u65E5"),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"setToday"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getTime"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"clearDate"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue1`),t("span",{class:"token punctuation"},","),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},","),n(`
      setDate`),t("span",{class:"token punctuation"},","),n(`
      getDateString`),t("span",{class:"token punctuation"},","),n(`
      setToday`),t("span",{class:"token punctuation"},","),n(`
      clearDate`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".date-picker-right-panel"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"padding"),t("span",{class:"token punctuation"},":"),n(" 0"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token selector"},"li"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},"list-style-type"),t("span",{class:"token punctuation"},":"),n(" none"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token selector"},"button"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n(" 66px"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
    `),t("span",{class:"token selector"},"span"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token property"},"margin-left"),t("span",{class:"token punctuation"},":"),n(" 8px"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".date-picker-footer"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" end"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token selector"},"button"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token property"},"margin-left"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),tt=t("h3",{id:"\u65E5\u671F\u683C\u5F0F",tabindex:"-1"},[n("\u65E5\u671F\u683C\u5F0F "),t("a",{class:"header-anchor",href:"#\u65E5\u671F\u683C\u5F0F","aria-hidden":"true"},"#")],-1),nt=t("p",null,[n("\u901A\u8FC7"),t("code",null,"format"),n("\u6307\u5B9A\u8F93\u5165\u6846\u663E\u793A\u7684\u65E5\u671F\u683C\u5F0F, \u8BE6\u89C1 "),t("a",{href:"#format"},"Format")],-1),at=t("p",null,[n("\u4F8B\u5982\uFF1A"),t("code",null,"YYYY-MM-DD")],-1),st=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("picker-pro-format-demo mr30"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u65E5\u671F\u683C\u5F0F\uFF1A YYYY-MM-DD"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("pickerProFormatValue"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"format"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("YYYY-MM-DD"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("picker-pro-format-demo"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u65E5\u671F\u683C\u5F0F\uFF1A YYYY-MM-DD HH:mm:ss"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("pickerProFormatValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showTime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"format"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("YYYY-MM-DD HH:mm:ss"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" pickerProFormatValue "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" pickerProFormatValue1 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      pickerProFormatValue`),t("span",{class:"token punctuation"},","),n(`
      pickerProFormatValue1`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".picker-pro-format-demo"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" inline-block"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".mr30"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-right"),t("span",{class:"token punctuation"},":"),n(" 20px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".mb10"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 10px"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),et=t("h3",{id:"\u5E74\u6708\u9009\u62E9\u5668",tabindex:"-1"},[n("\u5E74\u6708\u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#\u5E74\u6708\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),ot=t("p",null,[n("\u901A\u8FC7"),t("code",null,"type"),n("\u6307\u5B9A\u9009\u62E9\u5668\u7C7B\u578B")],-1),ut=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("picker-pro-format-demo mr30"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("year picker"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("pickerProFormatValue"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("year"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("month picker"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("pickerProFormatValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("month"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" pickerProFormatValue "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" pickerProFormatValue1 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      pickerProFormatValue`),t("span",{class:"token punctuation"},","),n(`
      pickerProFormatValue1`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),ct=t("h3",{id:"\u8303\u56F4\u9009\u62E9\u5668",tabindex:"-1"},[n("\u8303\u56F4\u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#\u8303\u56F4\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),lt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("basic range picker"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-range-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rangeDatePickerProValue"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("time range picker"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-range-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rangeDatePickerProValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showTime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"format"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("YYYY/MM/DD HH:mm:ss"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("year range picker"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-range-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rangeDatePickerProValue2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("year"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("month range picker"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-range-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rangeDatePickerProValue3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("month"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" rangeDatePickerProValue "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" rangeDatePickerProValue1 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" rangeDatePickerProValue2 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" rangeDatePickerProValue3 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      rangeDatePickerProValue`),t("span",{class:"token punctuation"},","),n(`
      rangeDatePickerProValue1`),t("span",{class:"token punctuation"},","),n(`
      rangeDatePickerProValue2`),t("span",{class:"token punctuation"},","),n(`
      rangeDatePickerProValue3`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),pt=t("h3",{id:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF","aria-hidden":"true"},"#")],-1),rt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("right area"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-range-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showTime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#rightArea"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("slot")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rightArea"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ul")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("date-picker-right-panel"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(`
              `),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                () => {
                  setDate(-30);
                }
              `),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token punctuation"},">")]),n(`
              \u4E00\u4E2A\u6708\u524D
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(`
              `),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                () => {
                  setDate(-14);
                }
              `),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token punctuation"},">")]),n(`
              \u4E00\u5468\u524D
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(`
              `),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("text"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),n(`
              `),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`
                () => {
                  selectThisWeek();
                }
              `),t("span",{class:"token punctuation"},'"')]),n(`
            `),t("span",{class:"token punctuation"},">")]),n(`
              \u5F53\u524D\u5468
            `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("slot")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-range-date-picker-pro")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb10"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("footer"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-range-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"ref"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("footerCustom"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":showTime"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},"#footer"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("slot")]),n(),t("span",{class:"token attr-name"},"name"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("footer"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("date-picker-footer"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("secondary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("clearStartDate"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" \u6E05\u9664\u5F00\u59CB\u65F6\u95F4 "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-button")]),n(),t("span",{class:"token attr-name"},"variant"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"color"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("secondary"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"@click"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("clearEndDate"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(" \u6E05\u9664\u7ED3\u675F\u65F6\u95F4 "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-button")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("slot")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-range-date-picker-pro")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue1 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string "),t("span",{class:"token operator"},"|"),n(" Date"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue2 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string "),t("span",{class:"token operator"},"|"),n(" Date"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"setDate"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"days"),t("span",{class:"token operator"},":"),n(" number")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue1`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getTime"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"+"),n(" days "),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"24"),n(),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"3600"),n(),t("span",{class:"token operator"},"*"),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"selectThisWeek"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" tody "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" start "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"setDate"),t("span",{class:"token punctuation"},"("),n("tody"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getDate"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"-"),n(" tody"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getDay"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      `),t("span",{class:"token keyword"},"const"),n(" end "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"setDate"),t("span",{class:"token punctuation"},"("),n("start"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"getDate"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"+"),n(),t("span",{class:"token number"},"6"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
      datePickerProValue1`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n("start"),t("span",{class:"token punctuation"},","),n(" end"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(" footerCustom "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"clearStartDate"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"["),n("start"),t("span",{class:"token punctuation"},","),n(" end"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" datePickerProValue2"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},";"),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(" end"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
      footerCustom`),t("span",{class:"token operator"},"?."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"focusChange"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'start'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"clearEndDate"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token punctuation"},"["),n("start"),t("span",{class:"token punctuation"},","),n(" end"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" datePickerProValue2"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},";"),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},"."),n("value "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n("start"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
      footerCustom`),t("span",{class:"token operator"},"?."),n("value"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"focusChange"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'end'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue1`),t("span",{class:"token punctuation"},","),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},","),n(`
      setDate`),t("span",{class:"token punctuation"},","),n(`
      selectThisWeek`),t("span",{class:"token punctuation"},","),n(`
      footerCustom`),t("span",{class:"token punctuation"},","),n(`
      clearStartDate`),t("span",{class:"token punctuation"},","),n(`
      clearEndDate`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),kt=t("h3",{id:"\u7981\u7528\u9009\u62E9\u5668",tabindex:"-1"},[n("\u7981\u7528\u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#\u7981\u7528\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),it=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250 mr30"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-range-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue2"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":disabled"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("true"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue1 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue2 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue1`),t("span",{class:"token punctuation"},","),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),dt=t("h3",{id:"\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4",tabindex:"-1"},[n("\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4 "),t("a",{class:"header-anchor",href:"#\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4","aria-hidden":"true"},"#")],-1),gt=t("p",null,[n("\u6DFB\u52A0 "),t("code",null,"calendarRange"),n(" \u5C5E\u6027\u8BBE\u7F6E\u9009\u62E9\u5668\u65E5\u5386\u9762\u677F\u663E\u793A\u7684\u65F6\u95F4\u8303\u56F4\u3002 \u6DFB\u52A0 "),t("code",null,"limitDateRange"),n(" \u5C5E\u6027\u8BBE\u7F6E\u9009\u62E9\u5668\u65E5\u5386\u9762\u677F\u53EF\u9009\u62E9\u7684\u65F6\u95F4\u8303\u56F4\u3002")],-1),mt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-date-picker-pro")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250 mr30"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":calendarRange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("[2022, 2025]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":limitDateRange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("limitDateRange"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-range-date-picker-pro")]),n(`
    `),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("datePickerProValue2"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("mb20 wh250"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":calendarRange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("[2022, 2025]"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":limitDateRange"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("limitDateRange"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`

`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue1 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" datePickerProValue2 "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("string"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token string"},"''"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" limitDateRange "),t("span",{class:"token operator"},"="),n(" ref"),t("span",{class:"token operator"},"<"),n("Date"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token operator"},">"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"2022"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token keyword"},"new"),n(),t("span",{class:"token class-name"},"Date"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"2023"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"5"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      datePickerProValue1`),t("span",{class:"token punctuation"},","),n(`
      datePickerProValue2`),t("span",{class:"token punctuation"},","),n(`
      limitDateRange`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Ft=U(`<h3 id="datepickerpro-\u53C2\u6570" tabindex="-1">DatePickerPro \u53C2\u6570 <a class="header-anchor" href="#datepickerpro-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>Date</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u9009\u4E2D\u9879\u7ED1\u5B9A\u7684\u503C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;"><a href="#format">Format</a></td><td style="text-align:left;">&#39;YYYY/MM/DD&#39; | &#39;YYYY/MM/DD HH:mm:ss&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6839\u636E\u662F\u5426 showTime \u533A\u522B\u4E0D\u540C\u9ED8\u8BA4\u503C</td><td style="text-align:left;"><a href="#%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F">\u65E5\u671F\u683C\u5F0F</a></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;\u8BF7\u9009\u62E9\u65E5\u671F&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684 placeholder</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">showTime</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u65F6\u5206\u79D2</td><td style="text-align:left;"><a href="#%E6%98%BE%E7%A4%BA%E6%97%B6%E9%97%B4">\u663E\u793A\u65F6\u95F4</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684\u5C3A\u5BF8</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u9009\u62E9\u5668</td><td style="text-align:left;"><a href="#%E7%A6%81%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8">\u7981\u7528\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">calendarRange</td><td style="text-align:left;"><code>[number,number]</code></td><td style="text-align:left;">[1970, 2099]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u663E\u793A\u65F6\u95F4\u8303\u56F4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8F%AF%E9%80%89%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4">\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">limitDateRange</td><td style="text-align:left;"><code>[Date,Date]</code></td><td style="text-align:left;">[new Date(calendarRange[0]), new Date(calendarRange[1])]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8F%AF%E9%80%89%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4">\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;date&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u671F\u9009\u62E9\u5668\u7C7B\u578B(date/year/month)</td><td style="text-align:left;"><a href="#%E5%B9%B4%E6%9C%88%E9%80%89%E6%8B%A9%E5%99%A8">\u5E74\u6708\u9009\u62E9\u5668</a></td></tr></tbody></table><h3 id="datepickerpro-\u4E8B\u4EF6" tabindex="-1">DatePickerPro \u4E8B\u4EF6 <a class="header-anchor" href="#datepickerpro-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">toggleChange</td><td style="text-align:left;"><code>(bool: boolean) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u5173\u95ED toggle \u4E8B\u4EF6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">confirmEvent</td><td style="text-align:left;"><code>(date: Date) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u6237\u786E\u5B9A\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>(e: MouseEvent) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="datepickerpro-\u63D2\u69FD" tabindex="-1">DatePickerPro \u63D2\u69FD <a class="header-anchor" href="#datepickerpro-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">rightArea</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 DatePickerPro \u65E5\u5386\u9762\u677F\u53F3\u4FA7\u5185\u5BB9\uFF0C \u5982\uFF1A\u65E5\u671F\u5FEB\u6377\u9009\u9879</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8C%BA%E5%9F%9F">\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF</a></td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 DatePickerPro \u65E5\u5386\u9762\u677F\u4E0B\u4FA7\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8C%BA%E5%9F%9F">\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF</a></td></tr></tbody></table><h3 id="datepickerpro-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">DatePickerPro \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#datepickerpro-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Format</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div><p>\u65E5\u671F\u683C\u5F0F <code>format</code> \u652F\u6301\u7684\u6807\u8BC6\u5217\u8868</p><table><thead><tr><th style="text-align:left;">\u6807\u8BC6</th><th style="text-align:left;">\u793A\u4F8B</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">YY</td><td style="text-align:left;">22</td><td style="text-align:left;">\u5E74\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">YYYY</td><td style="text-align:left;">2022</td><td style="text-align:left;">\u5E74\uFF0C\u56DB\u4F4D\u6570</td></tr><tr><td style="text-align:left;">M</td><td style="text-align:left;">1-12</td><td style="text-align:left;">\u6708\uFF0C\u4ECE 1 \u5F00\u59CB</td></tr><tr><td style="text-align:left;">MM</td><td style="text-align:left;">01-12</td><td style="text-align:left;">\u6708\uFF0C\u4E24\u4F4D\u6570\u5B57</td></tr><tr><td style="text-align:left;">MMM</td><td style="text-align:left;">Jan-Dec</td><td style="text-align:left;">\u6708\uFF0C\u82F1\u6587\u7F29\u5199</td></tr><tr><td style="text-align:left;">D</td><td style="text-align:left;">1-31</td><td style="text-align:left;">\u65E5</td></tr><tr><td style="text-align:left;">DD</td><td style="text-align:left;">01-31</td><td style="text-align:left;">\u65E5\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">H</td><td style="text-align:left;">0-23</td><td style="text-align:left;">24 \u5C0F\u65F6</td></tr><tr><td style="text-align:left;">HH</td><td style="text-align:left;">00-23</td><td style="text-align:left;">24 \u5C0F\u65F6\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">h</td><td style="text-align:left;">1-12</td><td style="text-align:left;">12 \u5C0F\u65F6</td></tr><tr><td style="text-align:left;">hh</td><td style="text-align:left;">01-12</td><td style="text-align:left;">12 \u5C0F\u65F6\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">m</td><td style="text-align:left;">0-59</td><td style="text-align:left;">\u5206\u949F</td></tr><tr><td style="text-align:left;">mm</td><td style="text-align:left;">00-59</td><td style="text-align:left;">\u5206\u949F\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">s</td><td style="text-align:left;">0-59</td><td style="text-align:left;">\u79D2</td></tr><tr><td style="text-align:left;">ss</td><td style="text-align:left;">00-59</td><td style="text-align:left;">\u79D2\uFF0C\u4E24\u4F4D\u6570</td></tr></tbody></table><h3 id="rangedatepickerpro-\u53C2\u6570" tabindex="-1">RangeDatePickerPro \u53C2\u6570 <a class="header-anchor" href="#rangedatepickerpro-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>[Date, Date]</code></td><td style="text-align:left;">[&#39;&#39;,&#39;&#39;]</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u9009\u4E2D\u9879\u7ED1\u5B9A\u7684\u503C</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;"><a href="#format">Format</a></td><td style="text-align:left;">&#39;YYYY/MM/DD&#39; | &#39;YYYY/MM/DD HH:mm:ss&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6839\u636E\u662F\u5426 showTime \u533A\u522B\u4E0D\u540C\u9ED8\u8BA4\u503C</td><td style="text-align:left;"><a href="#%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F">\u65E5\u671F\u683C\u5F0F</a></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>Array</code></td><td style="text-align:left;">[&#39;\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F&#39;, &#39;\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F&#39;]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684 placeholder</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">showTime</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u65F6\u5206\u79D2</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">separator</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;-&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8303\u56F4\u9009\u62E9\u5668\u7684\u5206\u5272\u7B26</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684\u5C3A\u5BF8</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u9009\u62E9\u5668</td><td style="text-align:left;"><a href="#%E7%A6%81%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8">\u7981\u7528\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">calendarRange</td><td style="text-align:left;"><code>[number,number]</code></td><td style="text-align:left;">[1970,2099]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u663E\u793A\u65F6\u95F4\u8303\u56F4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8F%AF%E9%80%89%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4">\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">limitDateRange</td><td style="text-align:left;"><code>[Date,Date]</code></td><td style="text-align:left;">[new Date(calendarRange[0]), new Date(calendarRange[1])]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8F%AF%E9%80%89%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4">\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;date&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u671F\u9009\u62E9\u5668\u7C7B\u578B(date/year/month)</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr></tbody></table><h3 id="rangedatepickerpro-\u4E8B\u4EF6" tabindex="-1">RangeDatePickerPro \u4E8B\u4EF6 <a class="header-anchor" href="#rangedatepickerpro-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">toggleChange</td><td style="text-align:left;"><code>(bool: boolean) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u5173\u95ED toggle \u4E8B\u4EF6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">confirmEvent</td><td style="text-align:left;"><code>(date: Date[]) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u6237\u786E\u5B9A\u9009\u5B9A\u7684\u65F6\u95F4\u8303\u56F4\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>(e: MouseEvent) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="rangedatepickerpro-\u63D2\u69FD" tabindex="-1">RangeDatePickerPro \u63D2\u69FD <a class="header-anchor" href="#rangedatepickerpro-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">rightArea</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 RangeDatePickerPro \u65E5\u5386\u9762\u677F\u53F3\u4FA7\u5185\u5BB9\uFF0C \u5982\uFF1A\u65E5\u671F\u8303\u56F4\u5FEB\u6377\u9009\u9879</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4%E9%9D%A2%E6%9D%BF%E5%8C%BA%E5%9F%9F">\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF</a></td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 RangeDatePickerPro \u65E5\u5386\u9762\u677F\u4E0B\u4FA7\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4%E9%9D%A2%E6%9D%BF%E5%8C%BA%E5%9F%9F">\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF</a></td></tr></tbody></table>`,17);function ft(a,o,s,y,c,l){const F=x("render-demo-0"),i=x("demo"),u=x("render-demo-1"),p=x("render-demo-2"),E=x("render-demo-3"),f=x("render-demo-4"),g=x("render-demo-5"),e=x("render-demo-6"),r=x("render-demo-7"),k=x("render-demo-8");return L(),J("div",null,[I,C(i,{sourceCode:`<template>
  <div class="picker-pro-format-demo mr30">
    <div class="mb10">Small</div>
    <d-date-picker-pro v-model="datePickerProValue" class="mb20 wh250" size="sm" />
  </div>
  <div class="picker-pro-format-demo mr30">
    <div class="mb10">Middle</div>
    <d-date-picker-pro v-model="datePickerProValue2" class="mb20 wh250" />
  </div>
  <div class="picker-pro-format-demo mr30">
    <div class="mb10">Large</div>
    <d-date-picker-pro v-model="datePickerProValue3" class="mb20 wh250" size="lg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const datePickerProValue = ref<string>('');
    const datePickerProValue2 = ref<string>('');
    const datePickerProValue3 = ref<string>('');

    return {
      datePickerProValue,
      datePickerProValue2,
      datePickerProValue3,
    };
  },
});
<\/script>

<style>
.mb20 {
  margin-bottom: 20px;
}

.wh250 {
  width: 250px;
}
</style>
`},{highlight:B(()=>[K]),default:B(()=>[C(F)]),_:1}),O,C(i,{sourceCode:`<template>
  <d-date-picker-pro v-model="datePickerProValue1" class="mb20 wh250" :showTime="true" format="YYYY/MM/DD HH:mm:ss" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const datePickerProValue1 = ref<string>('');

    return {
      datePickerProValue1,
    };
  },
});
<\/script>
`},{highlight:B(()=>[Q]),default:B(()=>[C(u)]),_:1}),X,C(i,{sourceCode:`<template>
  <div class="mb10">right area</div>
  <d-date-picker-pro v-model="datePickerProValue1" class="mb20 wh250" :showTime="true">
    <template #rightArea>
      <slot name="rightArea">
        <ul class="date-picker-right-panel">
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setDate(-30);
                }
              "
            >
              \u4E00\u4E2A\u6708\u524D
            </d-button>
            <span>{{ getDateString(-30) }}</span>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setDate(-14);
                }
              "
            >
              \u4E24\u5468\u524D
            </d-button>
            <span>{{ getDateString(-14) }}</span>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setDate(-7);
                }
              "
            >
              \u4E00\u5468\u524D
            </d-button>
            <span>{{ getDateString(-7) }}</span>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setDate(0);
                }
              "
            >
              \u4ECA\u5929
            </d-button>
            <span>{{ getDateString(0) }}</span>
          </li>
        </ul>
      </slot>
    </template>
  </d-date-picker-pro>
  <div class="mb10">footer</div>
  <d-date-picker-pro v-model="datePickerProValue2" class="mb20 wh250" :showTime="true">
    <template #footer>
      <slot name="footer">
        <div class="date-picker-footer">
          <d-button variant="solid" color="secondary" @click="setToday"> \u4ECA\u5929 </d-button>
          <d-button variant="solid" color="secondary" @click="clearDate"> \u6E05\u9664\u65F6\u95F4 </d-button>
        </div>
      </slot>
    </template>
  </d-date-picker-pro>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const datePickerProValue1 = ref<string | Date>('');
    const datePickerProValue2 = ref<string | Date>('');
    const setDate = (days: number) => {
      datePickerProValue1.value = new Date(new Date().getTime() + days * 24 * 3600 * 1000);
    };
    const getDateString = (days: number) => {
      const date = new Date(new Date().getTime() + days * 24 * 3600 * 1000);
      return \`\${date.getMonth() + 1}\u6708\${date.getDate()}\u65E5\`;
    };
    const setToday = () => {
      datePickerProValue2.value = new Date(new Date().getTime());
    };
    const clearDate = () => {
      datePickerProValue2.value = '';
    };

    return {
      datePickerProValue1,
      datePickerProValue2,
      setDate,
      getDateString,
      setToday,
      clearDate,
    };
  },
});
<\/script>
<style>
.date-picker-right-panel {
  padding: 0;
  li {
    list-style-type: none;
    button {
      width: 66px;
    }
    span {
      margin-left: 8px;
    }
  }
}
.date-picker-footer {
  display: flex;
  justify-content: end;
  button {
    margin-left: 10px;
  }
}
</style>
`},{highlight:B(()=>[Z]),default:B(()=>[C(p)]),_:1}),tt,nt,at,C(i,{sourceCode:`<template>
  <div class="picker-pro-format-demo mr30">
    <div class="mb10">\u65E5\u671F\u683C\u5F0F\uFF1A YYYY-MM-DD</div>
    <d-date-picker-pro v-model="pickerProFormatValue" class="mb20 wh250" format="YYYY-MM-DD" />
  </div>
  <div class="picker-pro-format-demo">
    <div class="mb10">\u65E5\u671F\u683C\u5F0F\uFF1A YYYY-MM-DD HH:mm:ss</div>
    <d-date-picker-pro v-model="pickerProFormatValue1" class="mb20 wh250" :showTime="true" format="YYYY-MM-DD HH:mm:ss" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const pickerProFormatValue = ref<string>('');
    const pickerProFormatValue1 = ref<string>('');

    return {
      pickerProFormatValue,
      pickerProFormatValue1,
    };
  },
});
<\/script>
<style>
.picker-pro-format-demo {
  display: inline-block;
}
.mr30 {
  margin-right: 20px;
}
.mb10 {
  margin-bottom: 10px;
}
</style>
`},{highlight:B(()=>[st]),default:B(()=>[C(E)]),_:1}),et,ot,C(i,{sourceCode:`<template>
  <div class="picker-pro-format-demo mr30">
    <div class="mb10">year picker</div>
    <d-date-picker-pro v-model="pickerProFormatValue" class="mb20 wh250" type="year" />
    <div class="mb10">month picker</div>
    <d-date-picker-pro v-model="pickerProFormatValue1" class="mb20 wh250" type="month" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const pickerProFormatValue = ref<string>('');
    const pickerProFormatValue1 = ref<string>('');
    return {
      pickerProFormatValue,
      pickerProFormatValue1,
    };
  },
});
<\/script>
`},{highlight:B(()=>[ut]),default:B(()=>[C(f)]),_:1}),ct,C(i,{sourceCode:`<template>
  <div class="mb10">basic range picker</div>
  <d-range-date-picker-pro v-model="rangeDatePickerProValue" class="mb20" />
  <div class="mb10">time range picker</div>
  <d-range-date-picker-pro v-model="rangeDatePickerProValue1" class="mb20" :showTime="true" format="YYYY/MM/DD HH:mm:ss" />
  <div class="mb10">year range picker</div>
  <d-range-date-picker-pro v-model="rangeDatePickerProValue2" class="mb20 wh250" type="year" />
  <div class="mb10">month range picker</div>
  <d-range-date-picker-pro v-model="rangeDatePickerProValue3" class="mb20 wh250" type="month" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const rangeDatePickerProValue = ref<string[]>(['', '']);
    const rangeDatePickerProValue1 = ref<string[]>(['', '']);
    const rangeDatePickerProValue2 = ref<string[]>(['', '']);
    const rangeDatePickerProValue3 = ref<string[]>(['', '']);

    return {
      rangeDatePickerProValue,
      rangeDatePickerProValue1,
      rangeDatePickerProValue2,
      rangeDatePickerProValue3,
    };
  },
});
<\/script>
`},{highlight:B(()=>[lt]),default:B(()=>[C(g)]),_:1}),pt,C(i,{sourceCode:`<template>
  <div class="mb10">right area</div>
  <d-range-date-picker-pro v-model="datePickerProValue1" class="mb20 wh250" :showTime="true">
    <template #rightArea>
      <slot name="rightArea">
        <ul class="date-picker-right-panel">
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setDate(-30);
                }
              "
            >
              \u4E00\u4E2A\u6708\u524D
            </d-button>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  setDate(-14);
                }
              "
            >
              \u4E00\u5468\u524D
            </d-button>
          </li>
          <li>
            <d-button
              variant="text"
              color="primary"
              @click="
                () => {
                  selectThisWeek();
                }
              "
            >
              \u5F53\u524D\u5468
            </d-button>
          </li>
        </ul>
      </slot>
    </template>
  </d-range-date-picker-pro>
  <div class="mb10">footer</div>
  <d-range-date-picker-pro ref="footerCustom" v-model="datePickerProValue2" class="mb20 wh250" :showTime="true">
    <template #footer>
      <slot name="footer">
        <div class="date-picker-footer">
          <d-button variant="solid" color="secondary" @click="clearStartDate"> \u6E05\u9664\u5F00\u59CB\u65F6\u95F4 </d-button>
          <d-button variant="solid" color="secondary" @click="clearEndDate"> \u6E05\u9664\u7ED3\u675F\u65F6\u95F4 </d-button>
        </div>
      </slot>
    </template>
  </d-range-date-picker-pro>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const datePickerProValue1 = ref<string | Date[]>(['', '']);
    const datePickerProValue2 = ref<string | Date[]>(['', '']);
    const setDate = (days: number) => {
      datePickerProValue1.value = [new Date(new Date().getTime() + days * 24 * 3600 * 1000), new Date()];
    };
    const selectThisWeek = () => {
      const tody = new Date();
      const start = new Date(new Date().setDate(tody.getDate() - tody.getDay()));
      const end = new Date(new Date().setDate(start.getDate() + 6));
      datePickerProValue1.value = [start, end];
    };

    const footerCustom = ref();

    const clearStartDate = () => {
      const [start, end] = datePickerProValue2.value;
      datePickerProValue2.value = ['', end];
      footerCustom?.value.focusChange('start');
    };
    const clearEndDate = () => {
      const [start, end] = datePickerProValue2.value;
      datePickerProValue2.value = [start, ''];
      footerCustom?.value.focusChange('end');
    };

    return {
      datePickerProValue1,
      datePickerProValue2,
      setDate,
      selectThisWeek,
      footerCustom,
      clearStartDate,
      clearEndDate,
    };
  },
});
<\/script>
`},{highlight:B(()=>[rt]),default:B(()=>[C(e)]),_:1}),kt,C(i,{sourceCode:`<template>
  <d-date-picker-pro v-model="datePickerProValue1" class="mb20 wh250 mr30" :disabled="true" />
  <d-range-date-picker-pro v-model="datePickerProValue2" class="mb20 wh250" :disabled="true" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const datePickerProValue1 = ref<string>('');
    const datePickerProValue2 = ref<string[]>(['', '']);

    return {
      datePickerProValue1,
      datePickerProValue2,
    };
  },
});
<\/script>
`},{highlight:B(()=>[it]),default:B(()=>[C(r)]),_:1}),dt,gt,C(i,{sourceCode:`<template>
  <d-date-picker-pro v-model="datePickerProValue1" class="mb20 wh250 mr30" :calendarRange="[2022, 2025]" :limitDateRange="limitDateRange" />
  <d-range-date-picker-pro
    v-model="datePickerProValue2"
    class="mb20 wh250"
    :calendarRange="[2022, 2025]"
    :limitDateRange="limitDateRange"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const datePickerProValue1 = ref<string>('');
    const datePickerProValue2 = ref<string[]>(['', '']);
    const limitDateRange = ref<Date[]>([new Date(2022, 1, 5), new Date(2023, 1, 5)]);

    return {
      datePickerProValue1,
      datePickerProValue2,
      limitDateRange,
    };
  },
});
<\/script>
`},{highlight:B(()=>[mt]),default:B(()=>[C(k)]),_:1}),Ft])}var Dt=W(G,[["render",ft]]);export{yt as __pageData,Dt as default};
