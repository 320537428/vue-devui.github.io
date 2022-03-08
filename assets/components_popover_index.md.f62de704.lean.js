var Y=Object.defineProperty;var q=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable;var V=(s,p,o)=>p in s?Y(s,p,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[p]=o,C=(s,p)=>{for(var o in p||(p={}))Z.call(p,o)&&V(s,o,p[o]);if(q)for(var o of q(p))nn.call(p,o)&&V(s,o,p[o]);return s};import{_ as tn,V as A,r as D,c as an,b as h,w as F,a as w,d as n,e as t,o as sn}from"./app.36ea4c54.js";const on={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:s,resolveComponent:p,withCtx:o,createVNode:a,createElementVNode:e,openBlock:v,createElementBlock:i}=A,c={class:"popover-demo-item"},r=s("default"),d=s("info"),g=s("error"),_=s("success"),E=s("warning"),u=s("no-animation");function f(y,x){const m=p("d-button"),B=p("d-popover");return v(),i("div",null,[e("div",c,[a(B,{controlled:""},{reference:o(()=>[a(m,null,{default:o(()=>[r]),_:1})]),_:1}),a(B,{content:"info!",popType:"info",position:"top",trigger:"hover",controlled:""},{reference:o(()=>[a(m,{variant:"solid"},{default:o(()=>[d]),_:1})]),_:1}),a(B,{content:"error!",popType:"error",controlled:"",position:"left",zIndex:9999},{reference:o(()=>[a(m,{variant:"solid",color:"danger"},{default:o(()=>[g]),_:1})]),_:1}),a(B,{content:"success!",popType:"success",controlled:"",position:"right"},{reference:o(()=>[a(m,null,{default:o(()=>[_]),_:1})]),_:1}),a(B,{content:"warning!",popType:"warning",controlled:""},{reference:o(()=>[a(m,null,{default:o(()=>[E]),_:1})]),_:1}),a(B,{content:"no-animation!",showAnimation:!1,popMaxWidth:100,controlled:""},{reference:o(()=>[a(m,null,{default:o(()=>[u]),_:1})]),_:1})])])}return C({render:f},{})}(),"render-demo-1":function(){const{createTextVNode:s,resolveComponent:p,withCtx:o,createVNode:a,createElementVNode:e,openBlock:v,createElementBlock:i}=A,c={class:"popover-demo-item"},r=s(" click me!"),d=s(" hover me!");function g(E,u){const f=p("d-button"),b=p("d-popover");return v(),i("div",null,[e("div",c,[a(b,{content:"\u81EA\u5B9A\u4E49\u5185\u5BB9",controlled:""},{reference:o(()=>[a(f,{variant:"solid"},{default:o(()=>[r]),_:1})]),_:1}),a(b,{content:"\u81EA\u5B9A\u4E49\u5185\u5BB9",trigger:"hover",popoverStyle:{backgroundColor:"#7693f5",color:"#fff"},controlled:""},{reference:o(()=>[a(f,null,{default:o(()=>[d]),_:1})]),_:1})])])}return C({render:g},{})}(),"render-demo-2":function(){const{createElementVNode:s,createTextVNode:p,resolveComponent:o,withCtx:a,createVNode:e,openBlock:v,createElementBlock:i}=A,c={class:"item"},r=s("div",null,"left",-1),d=p("left"),g=s("div",null,"left-top",-1),_=s("div",null,"left-top",-1),E=p("left-top"),u=s("div",null,"left-bottom",-1),f=s("div",null,"left-bottom",-1),b=p("left-bottom"),y={style:{"margin-top":"10px"},class:"item"},x=s("span",null,"top",-1),m=p("top"),B=s("span",null,"top-left",-1),N=p("top-left"),T=s("span",null,"top-right",-1),M=p("top-right"),P={style:{"margin-top":"10px"},class:"item"},L=s("div",null,"right",-1),z=p("right"),I=s("div",null,"right-top",-1),S=s("div",null,"right-top",-1),W=p("right-top"),$=s("div",null,"right-bottom",-1),j=s("div",null,"right-bottom",-1),U=p("right-bottom"),G={style:{"margin-top":"10px"},class:"item"},H=s("div",null,"bottom",-1),J=p("bottom"),K=s("div",null,"bottom-left",-1),O=p("bottom-left"),Q=s("div",null,"bottom-right",-1),R=p("bottom-right");function X(Bn,Cn){const l=o("d-button"),k=o("d-popover");return v(),i("div",null,[s("div",c,[e(k,{position:"left",controlled:""},{content:a(()=>[r]),reference:a(()=>[e(l,null,{default:a(()=>[d]),_:1})]),_:1}),e(k,{position:"left-top",controlled:""},{content:a(()=>[g,_]),reference:a(()=>[e(l,null,{default:a(()=>[E]),_:1})]),_:1}),e(k,{position:"left-bottom",controlled:""},{content:a(()=>[u,f]),reference:a(()=>[e(l,null,{default:a(()=>[b]),_:1})]),_:1})]),s("div",y,[e(k,{position:"top",controlled:""},{content:a(()=>[x]),reference:a(()=>[e(l,null,{default:a(()=>[m]),_:1})]),_:1}),e(k,{position:"top-left",controlled:""},{content:a(()=>[B]),reference:a(()=>[e(l,null,{default:a(()=>[N]),_:1})]),_:1}),e(k,{position:"top-right",controlled:""},{content:a(()=>[T]),reference:a(()=>[e(l,null,{default:a(()=>[M]),_:1})]),_:1})]),s("div",P,[e(k,{position:"right",controlled:""},{content:a(()=>[L]),reference:a(()=>[e(l,null,{default:a(()=>[z]),_:1})]),_:1}),e(k,{position:"right-top",controlled:""},{content:a(()=>[I,S]),reference:a(()=>[e(l,null,{default:a(()=>[W]),_:1})]),_:1}),e(k,{position:"right-bottom",controlled:""},{content:a(()=>[$,j]),reference:a(()=>[e(l,null,{default:a(()=>[U]),_:1})]),_:1})]),s("div",G,[e(k,{position:"bottom",controlled:""},{content:a(()=>[H]),reference:a(()=>[e(l,null,{default:a(()=>[J]),_:1})]),_:1}),e(k,{position:"bottom-left",controlled:""},{content:a(()=>[K]),reference:a(()=>[e(l,null,{default:a(()=>[O]),_:1})]),_:1}),e(k,{position:"bottom-right",controlled:""},{content:a(()=>[Q]),reference:a(()=>[e(l,null,{default:a(()=>[R]),_:1})]),_:1})])])}return C({render:X},{})}(),"render-demo-3":function(){const{createElementVNode:s,createTextVNode:p,resolveComponent:o,withCtx:a,createVNode:e,openBlock:v,createElementBlock:i}=A,c=s("div",null," \u624B\u52A8\u89E6\u53D1 ",-1),r=p("\u624B\u52A8\u89E6\u53D1");function d(u,f){const b=o("d-button"),y=o("d-popover");return v(),i("div",null,[e(y,{position:"top",visible:u.visible},{content:a(()=>[c]),reference:a(()=>[e(b,{onClick:u.onClick},{default:a(()=>[r]),_:1},8,["onClick"])]),_:1},8,["visible"])])}const{defineComponent:g,ref:_}=A,E=g({setup(){const u=_(!1);return{visible:u,onClick:()=>{u.value=!u.value}}}});return C({render:d},E)}(),"render-demo-4":function(){const{createElementVNode:s,createTextVNode:p,resolveComponent:o,withCtx:a,createVNode:e,openBlock:v,createElementBlock:i}=A,c={class:"item"},r=s("div",null," Mouse enter 500ms later. ",-1),d=p(" show Me "),g=p("MouseEnter delay 500ms"),_=s("div",null," Mouse leave 2000ms later. ",-1),E=p(" MouseLeave delay 2000ms");function u(b,y){const x=o("d-button"),m=o("d-popover");return v(),i("div",null,[s("div",c,[e(m,{position:"bottom-right",trigger:"hover",mouseEnterDelay:500,controlled:""},{content:a(()=>[r,d]),reference:a(()=>[e(x,{variant:"solid"},{default:a(()=>[g]),_:1})]),_:1}),e(m,{position:"bottom-right",trigger:"hover",controlled:"",mouseLeaveDelay:2e3},{content:a(()=>[_]),reference:a(()=>[e(x,null,{default:a(()=>[E]),_:1})]),_:1})])])}return C({render:u},{})}()}},yn='{"title":"Popover \u60AC\u6D6E\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5185\u5BB9","slug":"\u81EA\u5B9A\u4E49\u5185\u5BB9"},{"level":3,"title":"\u5F39\u51FA\u4F4D\u7F6E","slug":"\u5F39\u51FA\u4F4D\u7F6E"},{"level":3,"title":"\u624B\u52A8\u89E6\u53D1","slug":"\u624B\u52A8\u89E6\u53D1"},{"level":3,"title":"\u5EF6\u65F6\u89E6\u53D1","slug":"\u5EF6\u65F6\u89E6\u53D1"},{"level":3,"title":"DPopover API\u8BE6\u60C5","slug":"dpopover-api\u8BE6\u60C5"}],"relativePath":"components/popover/index.md","lastUpdated":1646724462139}',en=w('<h1 id="popover-\u60AC\u6D6E\u63D0\u793A" tabindex="-1">Popover \u60AC\u6D6E\u63D0\u793A <a class="header-anchor" href="#popover-\u60AC\u6D6E\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u7B80\u5355\u7684\u6587\u5B57\u63D0\u793A\u6C14\u6CE1\u6846\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u7528\u6765\u901A\u77E5\u7528\u6237\u975E\u5173\u952E\u6027\u95EE\u9898\u6216\u63D0\u793A\u67D0\u63A7\u4EF6\u5904\u4E8E\u67D0\u7279\u6B8A\u60C5\u51B5\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5F53Popover\u5F39\u51FA\u65F6\uFF0C\u4F1A\u57FA\u4E8E<code>reference</code>\u63D2\u69FD\u7684\u5185\u5BB9\u8FDB\u884C\u5B9A\u4F4D\u3002</p>',6),pn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("popover-demo-item"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("default"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info!"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"popType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("info"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hover"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("solid"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("error!"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"popType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("error"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),t(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("left"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":zIndex"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("9999"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("solid"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("danger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("error"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success!"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"popType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("success"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),t(),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("right"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("success"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning!"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"popType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("warning"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("warning"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("no-animation!"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":showAnimation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":popMaxWidth"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("no-animation"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".popover-demo-item > *"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),cn=n("h3",{id:"\u81EA\u5B9A\u4E49\u5185\u5BB9",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u5185\u5BB9 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u5185\u5BB9","aria-hidden":"true"},"#")],-1),un=n("p",null,[t("\u81EA\u5B9A\u4E49"),n("code",null,"reference"),t("\u63D2\u69FD\u7684\u5185\u5BB9\u4E0E\u5F39\u51FA\u63D0\u793A\u5185\u5BB9\u3002")],-1),ln=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("popover-demo-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t(),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u81EA\u5B9A\u4E49\u5185\u5BB9"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("solid"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(" click me!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"content"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("\u81EA\u5B9A\u4E49\u5185\u5BB9"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hover"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":popoverStyle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ backgroundColor: "),n("span",{class:"token punctuation"},"'"),t("#7693f5"),n("span",{class:"token punctuation"},"'"),t(",color: "),n("span",{class:"token punctuation"},"'"),t("#fff"),n("span",{class:"token punctuation"},"'"),t("}"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(" hover me!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".popover-demo-item > *"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),kn=n("h3",{id:"\u5F39\u51FA\u4F4D\u7F6E",tabindex:"-1"},[t("\u5F39\u51FA\u4F4D\u7F6E "),n("a",{class:"header-anchor",href:"#\u5F39\u51FA\u4F4D\u7F6E","aria-hidden":"true"},"#")],-1),rn=n("p",null,"\u603B\u5171\u652F\u630112\u4E2A\u5F39\u51FA\u4F4D\u7F6E\u3002",-1),dn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("left"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("left-top"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("left-top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("left-top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("left-top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("left-bottom"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),t(),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("left-bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t("left-bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("left-bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("   "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token punctuation"},">")]),t("top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top-left"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token punctuation"},">")]),t("top-left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("top-left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top-right"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token punctuation"},">")]),t("top-right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("top-right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("   "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("right"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("   "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("right-top"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("right-top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("right-top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("right-top"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("right-bottom"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("right-bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("right-bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("right-bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("   "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("bottom"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom-left"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("bottom-left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("bottom-left"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom-right"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t("bottom-right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t("bottom-right"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".popover-demo-item > *"),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),gn=n("h3",{id:"\u624B\u52A8\u89E6\u53D1",tabindex:"-1"},[t("\u624B\u52A8\u89E6\u53D1 "),n("a",{class:"header-anchor",href:"#\u624B\u52A8\u89E6\u53D1","aria-hidden":"true"},"#")],-1),mn=n("p",null,"\u901A\u8FC7visible\u63A7\u5236\u5F39\u6846\u663E\u793A\u5B9E\u73B0\u8868\u5355\u9A8C\u8BC1\uFF0C\u4F7F\u7528visible\u63A7\u5236\u5FC5\u987B\u4EE4controlled\u53C2\u6570\u4E3A\u9ED8\u8BA4\u503Cfalse\u3002",-1),vn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("top"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":visible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("visible"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t(" \u624B\u52A8\u89E6\u53D1 "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onClick"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u624B\u52A8\u89E6\u53D1"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" visible"),n("span",{class:"token operator"},"="),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token operator"},"!"),t("visible"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},"{"),t(`
      visible`),n("span",{class:"token punctuation"},","),t(`
      onClick
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),_n=n("h3",{id:"\u5EF6\u65F6\u89E6\u53D1",tabindex:"-1"},[t("\u5EF6\u65F6\u89E6\u53D1 "),n("a",{class:"header-anchor",href:"#\u5EF6\u65F6\u89E6\u53D1","aria-hidden":"true"},"#")],-1),hn=n("p",null,"\u4EC5\u9700\u8981\u5728 trigger \u4E3A hover \u7684\u65F6\u5019\uFF0C\u9F20\u6807\u79FB\u5165\u7684\u65F6\u957F\u8D85\u8FC7 [mouseEnterDelay] \u6BEB\u79D2\u4E4B\u540E\u624D\u4F1A\u89E6\u53D1\uFF0C\u4EE5\u9632\u6B62\u7528\u6237\u65E0\u610F\u5212\u8FC7\u5BFC\u81F4\u7684\u95EA\u73B0\uFF0C\u9ED8\u8BA4\u503C\u662F150\u6BEB\u79D2\uFF1B\u9F20\u6807\u79FB\u51FA\u4E4B\u540E\uFF0C\u518D\u7ECF\u8FC7[mouseLeaveDelay]\u6BEB\u79D2\u540E\uFF0CPopover\u7EC4\u4EF6\u624D\u4F1A\u9690\u85CF\uFF0C\u9ED8\u8BA4\u503C\u662F100\u6BEB\u79D2\u3002",-1),Fn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom-right"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hover"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":mouseEnterDelay"),t(),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("500"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token punctuation"},">")]),t(" Mouse enter 500ms later. "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
        show Me
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("solid"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("MouseEnter delay 500ms"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-popover")]),t("  "),n("span",{class:"token attr-name"},"position"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("bottom-right"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"trigger"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("hover"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"controlled"),t(),n("span",{class:"token attr-name"},":mouseLeaveDelay"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2000"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#content"),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(" Mouse leave 2000ms later. "),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#reference"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(" MouseLeave delay 2000ms"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-popover")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".popover-demo-item > *"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t("10px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),fn=w('<h3 id="dpopover-api\u8BE6\u60C5" tabindex="-1">DPopover API\u8BE6\u60C5 <a class="header-anchor" href="#dpopover-api\u8BE6\u60C5" aria-hidden="true">#</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h4><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th><th>\u8DF3\u8F6CDemo</th></tr></thead><tbody><tr><td>content</td><td><code>string</code></td><td>defalut</td><td>\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u7684\u663E\u793A\u5185\u5BB9\u6216</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u5185\u5BB9</a></td></tr><tr><td>visible</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u5F39\u6846\u7684\u521D\u59CB\u5316\u5F39\u51FA\u72B6\u6001</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>trigger</td><td><code>string</code></td><td>click</td><td>\u53EF\u9009\uFF0C\u5F39\u6846\u89E6\u53D1\u65B9\u5F0F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>controlled</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009 \u662F\u5426\u901A\u8FC7<code>trigger</code>\u65B9\u5F0F\u89E6\u53D1\u5F39\u6846</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>popType</td><td><code>string</code></td><td>default</td><td>\u53EF\u9009\uFF0C\u5F39\u51FA\u6846\u7C7B\u578B\uFF0C\u6837\u5F0F\u4E0D\u540C</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>zIndex</td><td><code>number</code></td><td>1060</td><td>\u53EF\u9009\uFF0Cz-index\u503C\u7528\u4E8E\u624B\u52A8\u63A7\u5236\u5C42\u9AD8</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>positionType</td><td><code>string</code></td><td>bottom</td><td>\u53EF\u9009\uFF0C\u63A7\u5236\u5F39\u6846\u51FA\u73B0 \u7684\u65B9\u5411</td><td><a href="#%E5%BC%B9%E5%87%BA%E4%BD%8D%E7%BD%AE">\u5F39\u51FA\u4F4D\u7F6E</a></td></tr><tr><td>showAnimation</td><td><code>boolean</code></td><td>true</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u663E\u793A\u52A8\u753B</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>popMaxWidth</td><td><code>number</code></td><td>-</td><td>\u53EF\u9009\uFF0C\u9650\u5236\u5F39\u51FA\u6846\u6700\u5927\u5BBD\u5EA6\uFF08<code>px</code>\uFF09</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>mouseEnterDelay</td><td><code>number</code></td><td>150</td><td>\u53EF\u9009\uFF0C\u4EC5\u9700\u8981\u5728 trigger \u4E3A hover \u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u9F20\u6807\u79FB\u5165\u540E\u5EF6\u65F6\u591A\u5C11\u624D\u663E\u793A Popover\uFF0C\u5355\u4F4D\u662F <code>ms</code></td><td><a href="#%E5%BB%B6%E6%97%B6%E8%A7%A6%E5%8F%91">\u5EF6\u65F6\u89E6\u53D1</a></td></tr><tr><td>mouseLeaveDelay</td><td><code>number</code></td><td>100</td><td>\u53EF\u9009\uFF0C\u4EC5\u9700\u8981\u5728 trigger \u4E3A hover \u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u9F20\u6807\u79FB\u51FA\u540E\u5EF6\u65F6\u591A\u5C11\u624D\u9690\u85CF popover\uFF0C\u5355\u4F4D\u662F <code>ms</code></td><td><a href="#%E5%BB%B6%E6%97%B6%E8%A7%A6%E5%8F%91">\u5EF6\u65F6\u89E6\u53D1</a></td></tr><tr><td>popoverStyle</td><td><code>{[klass:string]:any;}</code></td><td>-</td><td>\u53EF\u9009\uFF0C\u5728\u9700\u8981\u6539\u53D8\u5F39\u51FA\u5C42\u6837\u5F0F\u65F6\u8BBE\u7F6E\uFF0C\u7BAD\u5934\u4F1A\u5E94\u7528\u540C\u6837\u7684\u80CC\u666F\u8272\u3002\u6837\u5F0F\uFF0C\u53C2\u89C1<a href="https://devui.design/components/zh-cn/popover/api" target="_blank" rel="noopener noreferrer">Angular\u7248\u672C\u2014Popover</a></td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9">\u81EA\u5B9A\u4E49\u5185\u5BB9</a></td></tr></tbody></table><h4 id="slot" tabindex="-1">Slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h4><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>content</td><td>\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9</td></tr><tr><td>reference</td><td>\u89E6\u53D1 Popover \u663E\u793A\u7684\u5143\u7D20\u5185\u5BB9</td></tr></tbody></table>',5);function En(s,p,o,a,e,v){const i=D("render-demo-0"),c=D("demo"),r=D("render-demo-1"),d=D("render-demo-2"),g=D("render-demo-3"),_=D("render-demo-4");return sn(),an("div",null,[en,h(c,{sourceCode:`<template>
<div class="popover-demo-item" >
  <d-popover controlled>
    <template #reference>
      <d-button>default</d-button>
    </template>
  </d-popover>
  <d-popover  content="info!" popType="info" position="top" trigger="hover" controlled>
    <template #reference>
      <d-button variant="solid">info</d-button>
    </template>
  </d-popover>
  <d-popover  content="error!" popType="error" controlled position="left" :zIndex="9999">
    <template #reference>
      <d-button variant="solid" color="danger">error</d-button>
    </template>
  </d-popover>
    <d-popover  content="success!" popType="success" controlled position="right">
    <template #reference>
      <d-button>success</d-button>
    </template>
  </d-popover>
  <d-popover  content="warning!" popType="warning" controlled>
    <template #reference>
      <d-button>warning</d-button>
    </template>
  </d-popover>
  <d-popover  content="no-animation!" :showAnimation="false" :popMaxWidth="100" controlled>
    <template #reference>
      <d-button>no-animation</d-button>
    </template>
  </d-popover>
</div>
</template>
<style>
.popover-demo-item > *{
  margin-right:10px;
}
</style>
`},{highlight:F(()=>[pn]),default:F(()=>[h(i)]),_:1}),cn,un,h(c,{sourceCode:`<template>
<div class="popover-demo-item">
  <d-popover content="\u81EA\u5B9A\u4E49\u5185\u5BB9" controlled>
    <template #reference>
      <d-button variant="solid"> click me!</d-button>
    </template>
  </d-popover>
  <d-popover  content="\u81EA\u5B9A\u4E49\u5185\u5BB9" trigger="hover" :popoverStyle="{ backgroundColor: '#7693f5',color: '#fff'}" controlled>
    <template #reference>
      <d-button> hover me!</d-button>
    </template>
  </d-popover>
</div>
</template>

<style>
.popover-demo-item > *{
  margin-right:10px;
}
</style>
`},{highlight:F(()=>[ln]),default:F(()=>[h(r)]),_:1}),kn,rn,h(c,{sourceCode:`<template>
<div class="item">
  <d-popover  position="left" controlled>
  <template #content>
      <div>left</div>
    </template>
  <template #reference>
    <d-button>left</d-button>
  </template>
  </d-popover>
  <d-popover  position="left-top" controlled>
    <template #content>
        <div >left-top</div>
        <div>left-top</div>
    </template>
    <template #reference>
      <d-button>left-top</d-button>
    </template>
  </d-popover>
  <d-popover  position="left-bottom" controlled >
    <template #content>
        <div>left-bottom</div>
        <div>left-bottom</div>
      </template>
    <template #reference>
      <d-button>left-bottom</d-button>
    </template>
  </d-popover>
</div>

<div style="margin-top:10px;" class="item">
  <d-popover   position="top" controlled>
    <template #content>
        <span >top</span>
      </template>
    <template #reference>
      <d-button>top</d-button>
    </template>
  </d-popover>
  <d-popover  position="top-left" controlled>
    <template #content>
        <span >top-left</span>
      </template>
    <template #reference>
      <d-button>top-left</d-button>
    </template>
  </d-popover>
  <d-popover  position="top-right" controlled>
    <template #content>
        <span >top-right</span>
      </template>
    <template #reference>
      <d-button>top-right</d-button>
    </template>
  </d-popover>
</div>

<div style="margin-top:10px;" class="item">
  <d-popover   position="right" controlled>
    <template #content>
        <div >right</div>
      </template>
    <template #reference>
      <d-button>right</d-button>
    </template>
  </d-popover>
  <d-popover   position="right-top" controlled>
    <template #content>
        <div >right-top</div>
        <div >right-top</div>
      </template>
    <template #reference>
      <d-button>right-top</d-button>
    </template>
  </d-popover>
    <d-popover  position="right-bottom" controlled>
    <template #content>
        <div >right-bottom</div>
        <div >right-bottom</div>
      </template>
    <template #reference>
      <d-button>right-bottom</d-button>
    </template>
  </d-popover>
</div>

<div style="margin-top:10px;" class="item">
  <d-popover   position="bottom" controlled>
    <template #content>
        <div >bottom</div>
      </template>
    <template #reference>
      <d-button>bottom</d-button>
    </template>
  </d-popover>
    <d-popover  position="bottom-left" controlled>
    <template #content>
        <div >bottom-left</div>
      </template>
    <template #reference>
      <d-button>bottom-left</d-button>
    </template>
  </d-popover>
  <d-popover  position="bottom-right" controlled>
    <template #content>
        <div >bottom-right</div>
      </template>
    <template #reference>
      <d-button>bottom-right</d-button>
    </template>
  </d-popover>
</div>
</template>
<style>
.popover-demo-item > *{
  margin-right:10px;
}
</style>
`},{highlight:F(()=>[dn]),default:F(()=>[h(d)]),_:1}),gn,mn,h(c,{sourceCode:`<template>
  <d-popover  position="top" :visible="visible">
    <template #content>
        <div > \u624B\u52A8\u89E6\u53D1 </div>
      </template>
    <template #reference>
      <d-button @click="onClick">\u624B\u52A8\u89E6\u53D1</d-button>
    </template>
  </d-popover>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const visible=ref(false);
    const onClick = ()=>{
      visible.value = !visible.value ;
    }
    return{
      visible,
      onClick
    }
  }
})
<\/script>
`},{highlight:F(()=>[vn]),default:F(()=>[h(g)]),_:1}),_n,hn,h(c,{sourceCode:`<template>
<div class="item">
  <d-popover  position="bottom-right" trigger="hover" :mouseEnterDelay ="500" controlled>
    <template #content>
        <div > Mouse enter 500ms later. </div>
        show Me
      </template>
    <template #reference>
      <d-button variant="solid">MouseEnter delay 500ms</d-button>
    </template>
  </d-popover>
  <d-popover  position="bottom-right" trigger="hover" controlled :mouseLeaveDelay="2000">
    <template #content>
        <div> Mouse leave 2000ms later. </div>
      </template>
    <template #reference>
      <d-button> MouseLeave delay 2000ms</d-button>
    </template>
  </d-popover>
  </div>
</template>
<style>
.popover-demo-item > * {
  margin-right:10px;
}
</style>
`},{highlight:F(()=>[Fn]),default:F(()=>[h(_)]),_:1}),fn])}var xn=tn(on,[["render",En]]);export{yn as __pageData,xn as default};
