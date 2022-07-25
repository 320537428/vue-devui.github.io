import{V}from"./framework.37dedfa0.js";import{_ as S,S as H,b as C,a1 as B,a3 as N,V as t,x as n,N as b,R as U}from"./plugin-vue_export-helper.02048804.js";import"./framework.43f3ce53.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:a,resolveComponent:f,createVNode:s,openBlock:y,createElementBlock:u}=V,c={class:"picker-pro-format-demo mr30"},m=a("div",{class:"mb10"},"Small",-1),k={class:"picker-pro-format-demo mr30"},o=a("div",{class:"mb10"},"Middle",-1),l={class:"picker-pro-format-demo mr30"},E=a("div",{class:"mb10"},"Large",-1);function F(r,g){const x=f("d-date-picker-pro");return y(),u("div",null,[a("div",c,[m,s(x,{modelValue:r.datePickerProValue,"onUpdate:modelValue":g[0]||(g[0]=w=>r.datePickerProValue=w),class:"mb20 wh250",size:"sm"},null,8,["modelValue"])]),a("div",k,[o,s(x,{modelValue:r.datePickerProValue2,"onUpdate:modelValue":g[1]||(g[1]=w=>r.datePickerProValue2=w),class:"mb20 wh250"},null,8,["modelValue"])]),a("div",l,[E,s(x,{modelValue:r.datePickerProValue3,"onUpdate:modelValue":g[2]||(g[2]=w=>r.datePickerProValue3=w),class:"mb20 wh250",size:"lg"},null,8,["modelValue"])])])}const{defineComponent:d,ref:e}=V,p=d({setup(){const r=e(""),g=e(""),x=e("");return{datePickerProValue:r,datePickerProValue2:g,datePickerProValue3:x}}});return{render:F,...p}}(),"render-demo-1":function(){const{resolveComponent:a,createVNode:f,openBlock:s,createElementBlock:y}=V;function u(o,l){const E=a("d-date-picker-pro");return s(),y("div",null,[f(E,{modelValue:o.datePickerProValue1,"onUpdate:modelValue":l[0]||(l[0]=F=>o.datePickerProValue1=F),class:"mb20 wh250",showTime:!0,format:"YYYY/MM/DD HH:mm:ss"},null,8,["modelValue"])])}const{defineComponent:c,ref:m}=V,k=c({setup(){return{datePickerProValue1:m("")}}});return{render:u,...k}}(),"render-demo-2":function(){const{createElementVNode:a,renderSlot:f,createTextVNode:s,resolveComponent:y,withCtx:u,createVNode:c,toDisplayString:m,openBlock:k,createElementBlock:o}=V,l=a("div",{class:"mb10"},"right area",-1),E={class:"date-picker-right-panel"},F=s(" \u4E00\u4E2A\u6708\u524D "),d=s(" \u4E24\u5468\u524D "),e=s(" \u4E00\u5468\u524D "),p=s(" \u4ECA\u5929 "),r=a("div",{class:"mb10"},"footer",-1),g={class:"date-picker-footer"},x=s(" \u4ECA\u5929 "),w=s(" \u6E05\u9664\u65F6\u95F4 ");function q(i,v){const D=y("d-button"),M=y("d-date-picker-pro");return k(),o("div",null,[l,c(M,{modelValue:i.datePickerProValue1,"onUpdate:modelValue":v[4]||(v[4]=Y=>i.datePickerProValue1=Y),class:"mb20 wh250",showTime:!0},{rightArea:u(()=>[f(i.$slots,"rightArea",{},()=>[a("ul",E,[a("li",null,[c(D,{variant:"text",color:"primary",onClick:v[0]||(v[0]=()=>{i.setDate(-30)})},{default:u(()=>[F]),_:1}),a("span",null,m(i.getDateString(-30)),1)]),a("li",null,[c(D,{variant:"text",color:"primary",onClick:v[1]||(v[1]=()=>{i.setDate(-14)})},{default:u(()=>[d]),_:1}),a("span",null,m(i.getDateString(-14)),1)]),a("li",null,[c(D,{variant:"text",color:"primary",onClick:v[2]||(v[2]=()=>{i.setDate(-7)})},{default:u(()=>[e]),_:1}),a("span",null,m(i.getDateString(-7)),1)]),a("li",null,[c(D,{variant:"text",color:"primary",onClick:v[3]||(v[3]=()=>{i.setDate(0)})},{default:u(()=>[p]),_:1}),a("span",null,m(i.getDateString(0)),1)])])])]),_:3},8,["modelValue"]),r,c(M,{modelValue:i.datePickerProValue2,"onUpdate:modelValue":v[5]||(v[5]=Y=>i.datePickerProValue2=Y),class:"mb20 wh250",showTime:!0},{footer:u(()=>[f(i.$slots,"footer",{},()=>[a("div",g,[c(D,{variant:"solid",color:"secondary",onClick:i.setToday},{default:u(()=>[x]),_:1},8,["onClick"]),c(D,{variant:"solid",color:"secondary",onClick:i.clearDate},{default:u(()=>[w]),_:1},8,["onClick"])])])]),_:3},8,["modelValue"])])}const{defineComponent:R,ref:h}=V,P=R({setup(){const i=h(""),v=h("");return{datePickerProValue1:i,datePickerProValue2:v,setDate:A=>{i.value=new Date(new Date().getTime()+A*24*3600*1e3)},getDateString:A=>{const T=new Date(new Date().getTime()+A*24*3600*1e3);return`${T.getMonth()+1}\u6708${T.getDate()}\u65E5`},setToday:()=>{v.value=new Date(new Date().getTime())},clearDate:()=>{v.value=""}}}});return{render:q,...P}}(),"render-demo-3":function(){const{createElementVNode:a,resolveComponent:f,createVNode:s,openBlock:y,createElementBlock:u}=V,c={class:"picker-pro-format-demo mr30"},m=a("div",{class:"mb10"},"\u65E5\u671F\u683C\u5F0F\uFF1A YYYY-MM-DD",-1),k={class:"picker-pro-format-demo"},o=a("div",{class:"mb10"},"\u65E5\u671F\u683C\u5F0F\uFF1A YYYY-MM-DD HH:mm:ss",-1);function l(e,p){const r=f("d-date-picker-pro");return y(),u("div",null,[a("div",c,[m,s(r,{modelValue:e.pickerProFormatValue,"onUpdate:modelValue":p[0]||(p[0]=g=>e.pickerProFormatValue=g),class:"mb20 wh250",format:"YYYY-MM-DD"},null,8,["modelValue"])]),a("div",k,[o,s(r,{modelValue:e.pickerProFormatValue1,"onUpdate:modelValue":p[1]||(p[1]=g=>e.pickerProFormatValue1=g),class:"mb20 wh250",showTime:!0,format:"YYYY-MM-DD HH:mm:ss"},null,8,["modelValue"])])])}const{defineComponent:E,ref:F}=V,d=E({setup(){const e=F(""),p=F("");return{pickerProFormatValue:e,pickerProFormatValue1:p}}});return{render:l,...d}}(),"render-demo-4":function(){const{createElementVNode:a,resolveComponent:f,createVNode:s,openBlock:y,createElementBlock:u}=V,c={class:"picker-pro-format-demo mr30"},m=a("div",{class:"mb10"},"year picker",-1),k=a("div",{class:"mb10"},"month picker",-1);function o(d,e){const p=f("d-date-picker-pro");return y(),u("div",null,[a("div",c,[m,s(p,{modelValue:d.pickerProFormatValue,"onUpdate:modelValue":e[0]||(e[0]=r=>d.pickerProFormatValue=r),class:"mb20 wh250",type:"year"},null,8,["modelValue"]),k,s(p,{modelValue:d.pickerProFormatValue1,"onUpdate:modelValue":e[1]||(e[1]=r=>d.pickerProFormatValue1=r),class:"mb20 wh250",type:"month"},null,8,["modelValue"])])])}const{defineComponent:l,ref:E}=V,F=l({setup(){const d=E(""),e=E("");return{pickerProFormatValue:d,pickerProFormatValue1:e}}});return{render:o,...F}}(),"render-demo-5":function(){const{createElementVNode:a,resolveComponent:f,createVNode:s,openBlock:y,createElementBlock:u}=V,c=a("div",{class:"mb10"},"basic range picker",-1),m=a("div",{class:"mb10"},"time range picker",-1),k=a("div",{class:"mb10"},"year range picker",-1),o=a("div",{class:"mb10"},"month range picker",-1);function l(e,p){const r=f("d-range-date-picker-pro");return y(),u("div",null,[c,s(r,{modelValue:e.rangeDatePickerProValue,"onUpdate:modelValue":p[0]||(p[0]=g=>e.rangeDatePickerProValue=g),class:"mb20"},null,8,["modelValue"]),m,s(r,{modelValue:e.rangeDatePickerProValue1,"onUpdate:modelValue":p[1]||(p[1]=g=>e.rangeDatePickerProValue1=g),class:"mb20",showTime:!0,format:"YYYY/MM/DD HH:mm:ss"},null,8,["modelValue"]),k,s(r,{modelValue:e.rangeDatePickerProValue2,"onUpdate:modelValue":p[2]||(p[2]=g=>e.rangeDatePickerProValue2=g),class:"mb20 wh250",type:"year"},null,8,["modelValue"]),o,s(r,{modelValue:e.rangeDatePickerProValue3,"onUpdate:modelValue":p[3]||(p[3]=g=>e.rangeDatePickerProValue3=g),class:"mb20 wh250",type:"month"},null,8,["modelValue"])])}const{defineComponent:E,ref:F}=V,d=E({setup(){const e=F(["",""]),p=F(["",""]),r=F(["",""]),g=F(["",""]);return{rangeDatePickerProValue:e,rangeDatePickerProValue1:p,rangeDatePickerProValue2:r,rangeDatePickerProValue3:g}}});return{render:l,...d}}(),"render-demo-6":function(){const{createElementVNode:a,renderSlot:f,createTextVNode:s,resolveComponent:y,withCtx:u,createVNode:c,openBlock:m,createElementBlock:k}=V,o=a("div",{class:"mb10"},"right area",-1),l={class:"date-picker-right-panel"},E=s(" \u4E00\u4E2A\u6708\u524D "),F=s(" \u4E00\u5468\u524D "),d=s(" \u5F53\u524D\u5468 "),e=a("div",{class:"mb10"},"footer",-1),p={class:"date-picker-footer"},r=s(" \u6E05\u9664\u5F00\u59CB\u65F6\u95F4 "),g=s(" \u6E05\u9664\u7ED3\u675F\u65F6\u95F4 ");function x(h,P){const i=y("d-button"),v=y("d-range-date-picker-pro");return m(),k("div",null,[o,c(v,{modelValue:h.datePickerProValue1,"onUpdate:modelValue":P[3]||(P[3]=D=>h.datePickerProValue1=D),class:"mb20 wh250",showTime:!0},{rightArea:u(()=>[f(h.$slots,"rightArea",{},()=>[a("ul",l,[a("li",null,[c(i,{variant:"text",color:"primary",onClick:P[0]||(P[0]=()=>{h.setDate(-30)})},{default:u(()=>[E]),_:1})]),a("li",null,[c(i,{variant:"text",color:"primary",onClick:P[1]||(P[1]=()=>{h.setDate(-14)})},{default:u(()=>[F]),_:1})]),a("li",null,[c(i,{variant:"text",color:"primary",onClick:P[2]||(P[2]=()=>{h.selectThisWeek()})},{default:u(()=>[d]),_:1})])])])]),_:3},8,["modelValue"]),e,c(v,{ref:"footerCustom",modelValue:h.datePickerProValue2,"onUpdate:modelValue":P[4]||(P[4]=D=>h.datePickerProValue2=D),class:"mb20 wh250",showTime:!0},{footer:u(()=>[f(h.$slots,"footer",{},()=>[a("div",p,[c(i,{variant:"solid",color:"secondary",onClick:h.clearStartDate},{default:u(()=>[r]),_:1},8,["onClick"]),c(i,{variant:"solid",color:"secondary",onClick:h.clearEndDate},{default:u(()=>[g]),_:1},8,["onClick"])])])]),_:3},8,["modelValue"])])}const{defineComponent:w,ref:q}=V,R=w({setup(){const h=q(["",""]),P=q(["",""]),i=_=>{h.value=[new Date(new Date().getTime()+_*24*3600*1e3),new Date]},v=()=>{const _=new Date,A=new Date(new Date().setDate(_.getDate()-_.getDay())),T=new Date(new Date().setDate(A.getDate()+6));h.value=[A,T]},D=q();return{datePickerProValue1:h,datePickerProValue2:P,setDate:i,selectThisWeek:v,footerCustom:D,clearStartDate:()=>{const[_,A]=P.value;P.value=["",A],D==null||D.value.focusChange("start")},clearEndDate:()=>{const[_,A]=P.value;P.value=[_,""],D==null||D.value.focusChange("end")}}}});return{render:x,...R}}(),"render-demo-7":function(){const{resolveComponent:a,createVNode:f,openBlock:s,createElementBlock:y}=V;function u(o,l){const E=a("d-date-picker-pro"),F=a("d-range-date-picker-pro");return s(),y("div",null,[f(E,{modelValue:o.datePickerProValue1,"onUpdate:modelValue":l[0]||(l[0]=d=>o.datePickerProValue1=d),class:"mb20 wh250 mr30",disabled:!0},null,8,["modelValue"]),f(F,{modelValue:o.datePickerProValue2,"onUpdate:modelValue":l[1]||(l[1]=d=>o.datePickerProValue2=d),class:"mb20 wh250",disabled:!0},null,8,["modelValue"])])}const{defineComponent:c,ref:m}=V,k=c({setup(){const o=m(""),l=m(["",""]);return{datePickerProValue1:o,datePickerProValue2:l}}});return{render:u,...k}}(),"render-demo-8":function(){const{resolveComponent:a,createVNode:f,openBlock:s,createElementBlock:y}=V;function u(o,l){const E=a("d-date-picker-pro"),F=a("d-range-date-picker-pro");return s(),y("div",null,[f(E,{modelValue:o.datePickerProValue1,"onUpdate:modelValue":l[0]||(l[0]=d=>o.datePickerProValue1=d),class:"mb20 wh250 mr30",calendarRange:[2022,2025],limitDateRange:o.limitDateRange},null,8,["modelValue","limitDateRange"]),f(F,{modelValue:o.datePickerProValue2,"onUpdate:modelValue":l[1]||(l[1]=d=>o.datePickerProValue2=d),class:"mb20 wh250",calendarRange:[2022,2025],limitDateRange:o.limitDateRange},null,8,["modelValue","limitDateRange"])])}const{defineComponent:c,ref:m}=V,k=c({setup(){const o=m(""),l=m(["",""]),E=m([new Date(2022,1,5),new Date(2023,1,5)]);return{datePickerProValue1:o,datePickerProValue2:l,limitDateRange:E}}});return{render:u,...k}}()}},mt='{"title":"DatePickerPro \u65E5\u671F\u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u663E\u793A\u65F6\u95F4","slug":"\u663E\u793A\u65F6\u95F4"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF","slug":"\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF"},{"level":3,"title":"\u65E5\u671F\u683C\u5F0F","slug":"\u65E5\u671F\u683C\u5F0F"},{"level":3,"title":"\u5E74\u6708\u9009\u62E9\u5668","slug":"\u5E74\u6708\u9009\u62E9\u5668"},{"level":3,"title":"\u8303\u56F4\u9009\u62E9\u5668","slug":"\u8303\u56F4\u9009\u62E9\u5668"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF","slug":"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF"},{"level":3,"title":"\u7981\u7528\u9009\u62E9\u5668","slug":"\u7981\u7528\u9009\u62E9\u5668"},{"level":3,"title":"\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4","slug":"\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4"},{"level":3,"title":"DatePickerPro \u53C2\u6570","slug":"datepickerpro-\u53C2\u6570"},{"level":3,"title":"DatePickerPro \u4E8B\u4EF6","slug":"datepickerpro-\u4E8B\u4EF6"},{"level":3,"title":"DatePickerPro \u63D2\u69FD","slug":"datepickerpro-\u63D2\u69FD"},{"level":3,"title":"DatePickerPro \u7C7B\u578B\u5B9A\u4E49","slug":"datepickerpro-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"RangeDatePickerPro \u53C2\u6570","slug":"rangedatepickerpro-\u53C2\u6570"},{"level":3,"title":"RangeDatePickerPro \u4E8B\u4EF6","slug":"rangedatepickerpro-\u4E8B\u4EF6"},{"level":3,"title":"RangeDatePickerPro \u63D2\u69FD","slug":"rangedatepickerpro-\u63D2\u69FD"}],"relativePath":"components/date-picker-pro/index.md","lastUpdated":1658409114739}',j=N('<h1 id="datepickerpro-\u65E5\u671F\u9009\u62E9\u5668" tabindex="-1">DatePickerPro \u65E5\u671F\u9009\u62E9\u5668 <a class="header-anchor" href="#datepickerpro-\u65E5\u671F\u9009\u62E9\u5668" aria-hidden="true">#</a></h1><p>\u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\u65F6\uFF1B\u9700\u8981\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),z=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),W=t("h3",{id:"\u663E\u793A\u65F6\u95F4",tabindex:"-1"},[n("\u663E\u793A\u65F6\u95F4 "),t("a",{class:"header-anchor",href:"#\u663E\u793A\u65F6\u95F4","aria-hidden":"true"},"#")],-1),L=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),J=t("h3",{id:"\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF","aria-hidden":"true"},"#")],-1),G=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),I=t("h3",{id:"\u65E5\u671F\u683C\u5F0F",tabindex:"-1"},[n("\u65E5\u671F\u683C\u5F0F "),t("a",{class:"header-anchor",href:"#\u65E5\u671F\u683C\u5F0F","aria-hidden":"true"},"#")],-1),K=t("p",null,[n("\u901A\u8FC7"),t("code",null,"format"),n("\u6307\u5B9A\u8F93\u5165\u6846\u663E\u793A\u7684\u65E5\u671F\u683C\u5F0F, \u8BE6\u89C1 "),t("a",{href:"#format"},"Format")],-1),O=t("p",null,[n("\u4F8B\u5982\uFF1A"),t("code",null,"YYYY-MM-DD")],-1),Q=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),X=t("h3",{id:"\u5E74\u6708\u9009\u62E9\u5668",tabindex:"-1"},[n("\u5E74\u6708\u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#\u5E74\u6708\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),Z=t("p",null,[n("\u901A\u8FC7"),t("code",null,"type"),n("\u6307\u5B9A\u9009\u62E9\u5668\u7C7B\u578B")],-1),tt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),nt=t("h3",{id:"\u8303\u56F4\u9009\u62E9\u5668",tabindex:"-1"},[n("\u8303\u56F4\u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#\u8303\u56F4\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),at=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),st=t("h3",{id:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF "),t("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF","aria-hidden":"true"},"#")],-1),et=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),ot=t("h3",{id:"\u7981\u7528\u9009\u62E9\u5668",tabindex:"-1"},[n("\u7981\u7528\u9009\u62E9\u5668 "),t("a",{class:"header-anchor",href:"#\u7981\u7528\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),ut=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),ct=t("h3",{id:"\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4",tabindex:"-1"},[n("\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4 "),t("a",{class:"header-anchor",href:"#\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4","aria-hidden":"true"},"#")],-1),lt=t("p",null,[n("\u6DFB\u52A0 "),t("code",null,"calendarRange"),n(" \u5C5E\u6027\u8BBE\u7F6E\u9009\u62E9\u5668\u65E5\u5386\u9762\u677F\u663E\u793A\u7684\u65F6\u95F4\u8303\u56F4\u3002 \u6DFB\u52A0 "),t("code",null,"limitDateRange"),n(" \u5C5E\u6027\u8BBE\u7F6E\u9009\u62E9\u5668\u65E5\u5386\u9762\u677F\u53EF\u9009\u62E9\u7684\u65F6\u95F4\u8303\u56F4\u3002")],-1),pt=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),rt=N(`<h3 id="datepickerpro-\u53C2\u6570" tabindex="-1">DatePickerPro \u53C2\u6570 <a class="header-anchor" href="#datepickerpro-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>Date</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u9009\u4E2D\u9879\u7ED1\u5B9A\u7684\u503C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;"><a href="#format">Format</a></td><td style="text-align:left;">&#39;YYYY/MM/DD&#39; | &#39;YYYY/MM/DD HH:mm:ss&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6839\u636E\u662F\u5426 showTime \u533A\u522B\u4E0D\u540C\u9ED8\u8BA4\u503C</td><td style="text-align:left;"><a href="#%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F">\u65E5\u671F\u683C\u5F0F</a></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;\u8BF7\u9009\u62E9\u65E5\u671F&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684 placeholder</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">showTime</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u65F6\u5206\u79D2</td><td style="text-align:left;"><a href="#%E6%98%BE%E7%A4%BA%E6%97%B6%E9%97%B4">\u663E\u793A\u65F6\u95F4</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684\u5C3A\u5BF8</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u9009\u62E9\u5668</td><td style="text-align:left;"><a href="#%E7%A6%81%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8">\u7981\u7528\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">calendarRange</td><td style="text-align:left;"><code>[number,number]</code></td><td style="text-align:left;">[1970, 2099]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u663E\u793A\u65F6\u95F4\u8303\u56F4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8F%AF%E9%80%89%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4">\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">limitDateRange</td><td style="text-align:left;"><code>[Date,Date]</code></td><td style="text-align:left;">[new Date(calendarRange[0]), new Date(calendarRange[1])]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8F%AF%E9%80%89%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4">\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;date&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u671F\u9009\u62E9\u5668\u7C7B\u578B(date/year/month)</td><td style="text-align:left;"><a href="#%E5%B9%B4%E6%9C%88%E9%80%89%E6%8B%A9%E5%99%A8">\u5E74\u6708\u9009\u62E9\u5668</a></td></tr></tbody></table><h3 id="datepickerpro-\u4E8B\u4EF6" tabindex="-1">DatePickerPro \u4E8B\u4EF6 <a class="header-anchor" href="#datepickerpro-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">toggleChange</td><td style="text-align:left;"><code>(bool: boolean) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u5173\u95ED toggle \u4E8B\u4EF6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">confirmEvent</td><td style="text-align:left;"><code>(date: Date) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u6237\u786E\u5B9A\u9009\u5B9A\u7684\u503C\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>(e: MouseEvent) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="datepickerpro-\u63D2\u69FD" tabindex="-1">DatePickerPro \u63D2\u69FD <a class="header-anchor" href="#datepickerpro-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">rightArea</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 DatePickerPro \u65E5\u5386\u9762\u677F\u53F3\u4FA7\u5185\u5BB9\uFF0C \u5982\uFF1A\u65E5\u671F\u5FEB\u6377\u9009\u9879</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8C%BA%E5%9F%9F">\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF</a></td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 DatePickerPro \u65E5\u5386\u9762\u677F\u4E0B\u4FA7\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8C%BA%E5%9F%9F">\u81EA\u5B9A\u4E49\u65E5\u5386\u9762\u677F\u533A\u57DF</a></td></tr></tbody></table><h3 id="datepickerpro-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">DatePickerPro \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#datepickerpro-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Format</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div><p>\u65E5\u671F\u683C\u5F0F <code>format</code> \u652F\u6301\u7684\u6807\u8BC6\u5217\u8868</p><table><thead><tr><th style="text-align:left;">\u6807\u8BC6</th><th style="text-align:left;">\u793A\u4F8B</th><th style="text-align:left;">\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">YY</td><td style="text-align:left;">22</td><td style="text-align:left;">\u5E74\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">YYYY</td><td style="text-align:left;">2022</td><td style="text-align:left;">\u5E74\uFF0C\u56DB\u4F4D\u6570</td></tr><tr><td style="text-align:left;">M</td><td style="text-align:left;">1-12</td><td style="text-align:left;">\u6708\uFF0C\u4ECE 1 \u5F00\u59CB</td></tr><tr><td style="text-align:left;">MM</td><td style="text-align:left;">01-12</td><td style="text-align:left;">\u6708\uFF0C\u4E24\u4F4D\u6570\u5B57</td></tr><tr><td style="text-align:left;">MMM</td><td style="text-align:left;">Jan-Dec</td><td style="text-align:left;">\u6708\uFF0C\u82F1\u6587\u7F29\u5199</td></tr><tr><td style="text-align:left;">D</td><td style="text-align:left;">1-31</td><td style="text-align:left;">\u65E5</td></tr><tr><td style="text-align:left;">DD</td><td style="text-align:left;">01-31</td><td style="text-align:left;">\u65E5\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">H</td><td style="text-align:left;">0-23</td><td style="text-align:left;">24 \u5C0F\u65F6</td></tr><tr><td style="text-align:left;">HH</td><td style="text-align:left;">00-23</td><td style="text-align:left;">24 \u5C0F\u65F6\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">h</td><td style="text-align:left;">1-12</td><td style="text-align:left;">12 \u5C0F\u65F6</td></tr><tr><td style="text-align:left;">hh</td><td style="text-align:left;">01-12</td><td style="text-align:left;">12 \u5C0F\u65F6\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">m</td><td style="text-align:left;">0-59</td><td style="text-align:left;">\u5206\u949F</td></tr><tr><td style="text-align:left;">mm</td><td style="text-align:left;">00-59</td><td style="text-align:left;">\u5206\u949F\uFF0C\u4E24\u4F4D\u6570</td></tr><tr><td style="text-align:left;">s</td><td style="text-align:left;">0-59</td><td style="text-align:left;">\u79D2</td></tr><tr><td style="text-align:left;">ss</td><td style="text-align:left;">00-59</td><td style="text-align:left;">\u79D2\uFF0C\u4E24\u4F4D\u6570</td></tr></tbody></table><h3 id="rangedatepickerpro-\u53C2\u6570" tabindex="-1">RangeDatePickerPro \u53C2\u6570 <a class="header-anchor" href="#rangedatepickerpro-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>[Date, Date]</code></td><td style="text-align:left;">[&#39;&#39;,&#39;&#39;]</td><td style="text-align:left;">\u5FC5\u9009\uFF0C\u9009\u4E2D\u9879\u7ED1\u5B9A\u7684\u503C</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">format</td><td style="text-align:left;"><a href="#format">Format</a></td><td style="text-align:left;">&#39;YYYY/MM/DD&#39; | &#39;YYYY/MM/DD HH:mm:ss&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u6839\u636E\u662F\u5426 showTime \u533A\u522B\u4E0D\u540C\u9ED8\u8BA4\u503C</td><td style="text-align:left;"><a href="#%E6%97%A5%E6%9C%9F%E6%A0%BC%E5%BC%8F">\u65E5\u671F\u683C\u5F0F</a></td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;"><code>Array</code></td><td style="text-align:left;">[&#39;\u8BF7\u9009\u62E9\u5F00\u59CB\u65E5\u671F&#39;, &#39;\u8BF7\u9009\u62E9\u7ED3\u675F\u65E5\u671F&#39;]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684 placeholder</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">showTime</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u65F6\u5206\u79D2</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">separator</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;-&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8303\u56F4\u9009\u62E9\u5668\u7684\u5206\u5272\u7B26</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;md&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u7684\u5C3A\u5BF8</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u9009\u62E9\u5668</td><td style="text-align:left;"><a href="#%E7%A6%81%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8">\u7981\u7528\u9009\u62E9\u5668</a></td></tr><tr><td style="text-align:left;">calendarRange</td><td style="text-align:left;"><code>[number,number]</code></td><td style="text-align:left;">[1970,2099]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u663E\u793A\u65F6\u95F4\u8303\u56F4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8F%AF%E9%80%89%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4">\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">limitDateRange</td><td style="text-align:left;"><code>[Date,Date]</code></td><td style="text-align:left;">[new Date(calendarRange[0]), new Date(calendarRange[1])]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</td><td style="text-align:left;"><a href="#%E8%AE%BE%E7%BD%AE%E6%97%A5%E5%8E%86%E9%9D%A2%E6%9D%BF%E5%8F%AF%E9%80%89%E6%97%B6%E9%97%B4%E8%8C%83%E5%9B%B4">\u8BBE\u7F6E\u65E5\u5386\u9762\u677F\u53EF\u9009\u65F6\u95F4\u8303\u56F4</a></td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;date&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8BBE\u7F6E\u65E5\u671F\u9009\u62E9\u5668\u7C7B\u578B(date/year/month)</td><td style="text-align:left;"><a href="#%E8%8C%83%E5%9B%B4%E9%80%89%E6%8B%A9%E5%99%A8">\u8303\u56F4\u9009\u62E9\u5668</a></td></tr></tbody></table><h3 id="rangedatepickerpro-\u4E8B\u4EF6" tabindex="-1">RangeDatePickerPro \u4E8B\u4EF6 <a class="header-anchor" href="#rangedatepickerpro-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">toggleChange</td><td style="text-align:left;"><code>(bool: boolean) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u9009\u62E9\u5668\u6253\u5F00\u5173\u95ED toggle \u4E8B\u4EF6</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">confirmEvent</td><td style="text-align:left;"><code>(date: Date[]) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u6237\u786E\u5B9A\u9009\u5B9A\u7684\u65F6\u95F4\u8303\u56F4\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">focus</td><td style="text-align:left;"><code>(e: MouseEvent) =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u83B7\u53D6\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">blur</td><td style="text-align:left;"><code>() =&gt; void</code></td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="rangedatepickerpro-\u63D2\u69FD" tabindex="-1">RangeDatePickerPro \u63D2\u69FD <a class="header-anchor" href="#rangedatepickerpro-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u540D\u79F0</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">rightArea</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 RangeDatePickerPro \u65E5\u5386\u9762\u677F\u53F3\u4FA7\u5185\u5BB9\uFF0C \u5982\uFF1A\u65E5\u671F\u8303\u56F4\u5FEB\u6377\u9009\u9879</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4%E9%9D%A2%E6%9D%BF%E5%8C%BA%E5%9F%9F">\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF</a></td></tr><tr><td style="text-align:left;">footer</td><td style="text-align:left;">\u81EA\u5B9A\u4E49 RangeDatePickerPro \u65E5\u5386\u9762\u677F\u4E0B\u4FA7\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E6%9C%9F%E8%8C%83%E5%9B%B4%E9%9D%A2%E6%9D%BF%E5%8C%BA%E5%9F%9F">\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9762\u677F\u533A\u57DF</a></td></tr></tbody></table>`,17);function kt(a,f,s,y,u,c){const m=b("render-demo-0"),k=b("demo"),o=b("render-demo-1"),l=b("render-demo-2"),E=b("render-demo-3"),F=b("render-demo-4"),d=b("render-demo-5"),e=b("render-demo-6"),p=b("render-demo-7"),r=b("render-demo-8");return U(),H("div",null,[j,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[z]),default:B(()=>[C(m)]),_:1}),W,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[L]),default:B(()=>[C(o)]),_:1}),J,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[G]),default:B(()=>[C(l)]),_:1}),I,K,O,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[Q]),default:B(()=>[C(E)]),_:1}),X,Z,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[tt]),default:B(()=>[C(F)]),_:1}),nt,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[at]),default:B(()=>[C(d)]),_:1}),st,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[et]),default:B(()=>[C(e)]),_:1}),ot,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[ut]),default:B(()=>[C(p)]),_:1}),ct,lt,C(k,{sourceCode:`<template>
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
`},{highlight:B(()=>[pt]),default:B(()=>[C(r)]),_:1}),rt])}var Ft=S($,[["render",kt]]);export{mt as __pageData,Ft as default};
