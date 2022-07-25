import{V as b}from"./framework.3495a366.js";import{_ as P,f as S,G as I,H as M,b as F,a1 as w,a3 as V,I as n,k as t}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const $={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:o,resolveComponent:f,withCtx:i,createVNode:y,createElementVNode:s,renderList:c,Fragment:r,openBlock:a,createElementBlock:u,toDisplayString:h,resolveDirective:v,withDirectives:x}=b,_=o("click me!"),E={backdrop:!0,"position-type":"relative",view:{top:"50%",left:"50%"},"z-index":100,style:{width:"100%","text-align":"left"}},A=s("thead",null,[s("tr",null,[s("th",null,"\u5E8F\u53F7"),s("th",null,"\u59D3\u540D"),s("th",null,"\u961F\u4F0D"),s("th",null,"\u64CD\u4F5C")])],-1),k=s("td",null,"\u5F20\u5BB6\u9F50",-1),d=s("td",null,"\u8DF3\u6C34",-1),g=s("td",null,"\u8DF3\u6C34\u961F",-1);function l(p,D){const L=f("d-button"),N=v("d-loading");return a(),u("div",null,[y(L,{onClick:p.fetchTableData,style:{"margin-top":"8px"}},{default:i(()=>[_]),_:1},8,["onClick"]),x((a(),u("table",E,[A,s("tbody",null,[(a(!0),u(r,null,c(p.datas,(T,q)=>(a(),u("tr",{key:q},[s("td",null,h(q),1),k,d,g]))),128))])])),[[N,p.loadingStatus]])])}const{defineComponent:m,ref:e,reactive:B}=b,C=m({setup(){const p=e(!1),D=B([]);return{datas:D,loadingStatus:p,fetchTableData:()=>{p.value=!0,setTimeout(()=>{D.push(1,2,3),p.value=!1},2e3)}}}});return{render:l,...C}}(),"render-demo-1":function(){const{createTextVNode:o,resolveComponent:f,withCtx:i,createVNode:y,resolveDirective:s,openBlock:c,createElementBlock:r,withDirectives:a}=b,u=o("click me!"),h={message:"One moment please...",style:{"margin-top":"20px",width:"100%",height:"80px",padding:"10px"}},x=[o(" loading will show here2 ")];function _(d,g){const l=f("d-button"),m=s("d-loading");return c(),r("div",null,[y(l,{onClick:d.fetchMutiplePromise,style:{"margin-top":"8px"}},{default:i(()=>[u]),_:1},8,["onClick"]),a((c(),r("div",h,x)),[[m,d.promises]])])}const{defineComponent:E,ref:A}=b,k=E({setup(){const d=A([]);return{promises:d,fetchMutiplePromise:()=>{let l=[];for(let m=0;m<3;m++)l.push(new Promise((e,B)=>{setTimeout(()=>{e(m)},(m+1)*1e3)}).then(e=>e));d.value=l}}}});return{render:_,...k}}(),"render-demo-2":function(){const{createTextVNode:o,resolveComponent:f,withCtx:i,createVNode:y,resolveDirective:s,openBlock:c,createBlock:r,withDirectives:a,createElementBlock:u}=b,h=o(" Loading Style 1 "),v=o(" Loading Style 2 "),x=o(" Loading Style 3 "),_=["loading-template-ref"],A=[o(" loading will show here1 ")];function k(e,B){const C=f("d-button"),p=s("d-loading");return c(),u("div",null,[y(C,{onClick:e.showLoading1,style:{"margin-right":"8px",display:"inline-block",width:"220px"}},{default:i(()=>[h]),_:1},8,["onClick"]),a((c(),r(C,{onClick:e.showLoading2,"loading-template-ref":e.temp2,style:{"margin-right":"8px",display:"inline-block",width:"220px"}},{default:i(()=>[v]),_:1},8,["onClick","loading-template-ref"])),[[p,e.isShowLoading2]]),a((c(),r(C,{variant:"text","loading-template-ref":e.temp3,style:{"margin-right":"8px",display:"inline-block",width:"220px"}},{default:i(()=>[x]),_:1},8,["loading-template-ref"])),[[p,!0]]),a((c(),u("div",{style:{height:"80px","line-height":"80px"},"loading-template-ref":e.temp1},A,8,_)),[[p,e.isShowLoading1]])])}const{defineComponent:d,ref:g,h:l}=b,m=d({setup(){const e=l("div",{className:"devui-infinity-loading"},l("i",{className:"icon-refresh"})),B=l("div",{className:"devui-circle-loading-container-2"},l("i",{className:"icon-refresh"})),C=l("div",{className:"devui-circle-loading-container-3"},l("i",{className:"icon-refresh"})),p=g(!1),D=()=>{p.value=new Promise(T=>{setTimeout(()=>{T(!0)},1e3)})},L=g(!1);return{temp1:e,temp2:B,temp3:C,isShowLoading1:p,isShowLoading2:L,showLoading1:D,showLoading2:()=>{L.value=new Promise(T=>{setTimeout(()=>{T(!0)},1e3)})}}}});return{render:k,...m}}(),"render-demo-3":function(){const{createTextVNode:o,resolveComponent:f,withCtx:i,createVNode:y,openBlock:s,createBlock:c,createCommentVNode:r,createElementVNode:a,createElementBlock:u}=b,h=o(" click me show full screen loading! "),v=o(" click me show loading in target! "),x=o(" click me close loading in target! "),_=a("div",{id:"me",style:{"margin-top":"20px",width:"100%",height:"60px",padding:"10px"}}," loading will show here3 ",-1);function E(k,d){const g=f("d-button");return s(),u("div",null,[y(g,{onClick:k.serviceToBody,style:{"margin-right":"8px",display:"inline-block",width:"220px"}},{default:i(()=>[h]),_:1},8,["onClick"]),k.isShow?(s(),c(g,{key:0,onClick:k.openTargetLoading,style:{"margin-right":"8px",display:"inline-block",width:"200px"}},{default:i(()=>[v]),_:1},8,["onClick"])):(s(),c(g,{key:1,onClick:k.closeTargetLoading,style:{"margin-right":"8px",display:"inline-block",width:"200px"}},{default:i(()=>[x]),_:1},8,["onClick"])),_])}return{render:E,...{data(){return{isShow:!0,resultTarget:null}},methods:{serviceToBody(){const k=this.$loadingService.open();setTimeout(()=>{k.loadingInstance.close()},2e3)},openTargetLoading(){this.resultTarget=this.$loadingService.open({target:document.querySelector("#me"),message:"One moment please...",positionType:"relative",zIndex:1}),this.isShow=!1},closeTargetLoading(){this.resultTarget.loadingInstance.close(),this.isShow=!0}}}}}()}},sn='{"title":"Loading \u52A0\u8F7D\u63D0\u793A","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A promise","slug":"\u591A-promise"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6837\u5F0F","slug":"\u81EA\u5B9A\u4E49\u6837\u5F0F"},{"level":3,"title":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","slug":"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528"},{"level":3,"title":"Loading \u53C2\u6570","slug":"loading-\u53C2\u6570"}],"relativePath":"components/loading/index.md","lastUpdated":1658739366579}',z=V('<h1 id="loading-\u52A0\u8F7D\u63D0\u793A" tabindex="-1">Loading \u52A0\u8F7D\u63D0\u793A <a class="header-anchor" href="#loading-\u52A0\u8F7D\u63D0\u793A" aria-hidden="true">#</a></h1><p>\u63D0\u793A\u7528\u6237\u9875\u9762\u6B63\u5728\u6267\u884C\u6307\u4EE4\uFF0C\u9700\u8981\u7B49\u5F85\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u6267\u884C\u6307\u4EE4\u65F6\u95F4\u8F83\u957F\uFF08\u9700\u8981\u6570\u79D2\u4EE5\u4E0A\uFF09\u65F6\uFF0C\u5411\u7528\u6237\u5C55\u793A\u6B63\u5728\u6267\u884C\u7684\u72B6\u6001\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5C55\u793A\u52A0\u8F7D\u8868\u683C\u6570\u636E\u7684\u573A\u666F\u4E2D\u7684\u57FA\u672C\u4F7F\u7528\u65B9\u6CD5\u3002</p>',6),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fetchTableData"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("click me!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("table")]),t(`
    `),n("span",{class:"token attr-name"},"v-d-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loadingStatus"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":backdrop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"position-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("relative"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":view"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ top: "),n("span",{class:"token punctuation"},"'"),t("50%"),n("span",{class:"token punctuation"},"'"),t(", left: "),n("span",{class:"token punctuation"},"'"),t("50%"),n("span",{class:"token punctuation"},"'"),t(" }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":z-index"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("100"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" left"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("thead")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("\u5E8F\u53F7"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("\u59D3\u540D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("\u961F\u4F0D"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("th")]),n("span",{class:"token punctuation"},">")]),t("\u64CD\u4F5C"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("th")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("thead")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tbody")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(val, index) in datas"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("{{ index }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("\u5F20\u5BB6\u9F50"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("\u8DF3\u6C34"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t("\u8DF3\u6C34\u961F"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tbody")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("table")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" reactive "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loadingStatus "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" datas "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fetchTableData"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      loadingStatus`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`

      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        datas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),t(`
        loadingStatus`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      datas`),n("span",{class:"token punctuation"},","),t(`
      loadingStatus`),n("span",{class:"token punctuation"},","),t(`
      fetchTableData
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),O=n("h3",{id:"\u591A-promise",tabindex:"-1"},[t("\u591A promise "),n("a",{class:"header-anchor",href:"#\u591A-promise","aria-hidden":"true"},"#")],-1),Y=n("p",null,"\u652F\u6301\u591A\u4E2A promise\u3002",-1),G=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fetchMutiplePromise"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("click me!"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
    `),n("span",{class:"token attr-name"},"v-d-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("promises"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"message"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("One moment please..."),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 80px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    loading will show here2
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" promises "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fetchMutiplePromise"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" list "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
      `),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        list`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t(`
          `),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("res"),n("span",{class:"token punctuation"},","),t(" rej")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
              `),n("span",{class:"token function"},"res"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"return"),t(` res
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      promises`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(` list
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      promises`),n("span",{class:"token punctuation"},","),t(`
      fetchMutiplePromise
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),H=n("h3",{id:"\u81EA\u5B9A\u4E49\u6837\u5F0F",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6837\u5F0F "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6837\u5F0F","aria-hidden":"true"},"#")],-1),R=n("p",null,"\u901A\u8FC7 templateRef \u81EA\u5B9A\u4E49 loading \u6837\u5F0F\u3002",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLoading1"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 220px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    Loading Style 1
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(`
    `),n("span",{class:"token attr-name"},"v-d-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShowLoading2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("showLoading2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loading-template-ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("temp2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 220px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    Loading Style 2
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(`
    `),n("span",{class:"token attr-name"},"v-d-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("text"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loading-template-ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("temp3"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 220px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    Loading Style 3
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 80px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 80px")]),n("span",{class:"token punctuation"},'"')])]),t(`
    `),n("span",{class:"token attr-name"},"v-d-loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShowLoading1"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":loading-template-ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("temp1"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    loading will show here1
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref"),n("span",{class:"token punctuation"},","),t(" h "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" temp1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
      `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'devui-infinity-loading'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-refresh'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" temp2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
      `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'devui-circle-loading-container-2'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-refresh'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" temp3 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),t(`
      `),n("span",{class:"token string"},"'div'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'devui-circle-loading-container-3'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function"},"h"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'i'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"className"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'icon-refresh'"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" isShowLoading1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showLoading1"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isShowLoading1`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"res"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" isShowLoading2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"showLoading2"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      isShowLoading2`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token function"},"res"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      temp1`),n("span",{class:"token punctuation"},","),t(`
      temp2`),n("span",{class:"token punctuation"},","),t(`
      temp3`),n("span",{class:"token punctuation"},","),t(`
      isShowLoading1`),n("span",{class:"token punctuation"},","),t(`
      isShowLoading2`),n("span",{class:"token punctuation"},","),t(`
      showLoading1`),n("span",{class:"token punctuation"},","),t(`
      showLoading2
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".devui-infinity-loading"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translate"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},","),t(" -50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".devui-circle-loading-container-2"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 5px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".devui-circle-loading-container-3"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"right"),n("span",{class:"token punctuation"},":"),t(" -20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("-50%"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),J=n("h3",{id:"\u670D\u52A1\u65B9\u5F0F\u8C03\u7528",tabindex:"-1"},[t("\u670D\u52A1\u65B9\u5F0F\u8C03\u7528 "),n("a",{class:"header-anchor",href:"#\u670D\u52A1\u65B9\u5F0F\u8C03\u7528","aria-hidden":"true"},"#")],-1),K=n("p",null,"\u4F7F\u7528\u670D\u52A1\u7684\u65B9\u5F0F\u5168\u5C4F\u52A0\u8F7D loading \u7EC4\u4EF6\u6216\u8005\u5728\u6307\u5B9A\u5BBF\u4E3B\u4E0A\u52A0\u8F7D loading \u7EC4\u4EF6\u3002",-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("serviceToBody"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 220px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    click me show full screen loading!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(`
    `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("isShow"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("openTargetLoading"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    click me show loading in target!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(`
    `),n("span",{class:"token attr-name"},"v-else"),t(`
    `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("closeTargetLoading"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    click me close loading in target!
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`

  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"id"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("me"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 60px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
    loading will show here3
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"isShow"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token literal-property property"},"resultTarget"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token keyword"},"null"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token literal-property property"},"methods"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"serviceToBody"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" results "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$loadingService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`

      `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        results`),n("span",{class:"token punctuation"},"."),t("loadingInstance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"openTargetLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("resultTarget "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("$loadingService"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"target"),n("span",{class:"token operator"},":"),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"querySelector"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'#me'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'One moment please...'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"positionType"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'relative'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"zIndex"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"1"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("isShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"closeTargetLoading"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("resultTarget"),n("span",{class:"token punctuation"},"."),t("loadingInstance"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"close"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(`
      `),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("isShow "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=V('<h3 id="loading-\u53C2\u6570" tabindex="-1">Loading \u53C2\u6570 <a class="header-anchor" href="#loading-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">v-d-loading</td><td style="text-align:left;"><code>Promise&lt;any&gt;</code> | <br><code>Array&lt;Promise&lt;any&gt;&gt;</code> | <br><code>Boolean</code> | <br><code>undefined</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u4EE4\u65B9\u5F0F\uFF0C\u63A7\u5236 loading \u72B6\u6001</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">target</td><td style="text-align:left;"><code>element</code></td><td style="text-align:left;">document.body</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u670D\u52A1\u65B9\u5F0F\uFF0CLoading \u9700\u8981\u8986\u76D6\u7684<br> DOM \u8282\u70B9</td><td style="text-align:left;"><a href="#%E6%9C%8D%E5%8A%A1%E6%96%B9%E5%BC%8F%E8%B0%83%E7%94%A8">\u670D\u52A1\u65B9\u5F0F\u8C03\u7528</a></td></tr><tr><td style="text-align:left;">message</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cloading \u65F6\u7684\u63D0\u793A\u4FE1\u606F</td><td style="text-align:left;"><a href="#%E5%A4%9Apromise">\u591A promise</a></td></tr><tr><td style="text-align:left;">loading-template-ref</td><td style="text-align:left;"><code>VNode</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49 loading \u6A21\u677F</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F">\u81EA\u5B9A\u4E49\u6837\u5F0F</a></td></tr><tr><td style="text-align:left;">backdrop</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0Cloading \u65F6\u662F\u5426\u663E\u793A\u906E\u7F69</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">position-type</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">relative</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6307\u5B9A<code>dLoading</code>\u5BBF\u4E3B\u5143\u7D20\u7684\u5B9A\u4F4D\u7C7B\u578B\uFF0C<br>\u53D6\u503C\u4E0E css position \u5C5E\u6027\u4E00\u81F4\u3002</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">view</td><td style="text-align:left;">{<br>\xA0\xA0top?: string, <br>\xA0\xA0left?: string <br>}</td><td style="text-align:left;">{<br>\xA0\xA0top: &#39;50%&#39;, <br>\xA0\xA0left: &#39;50%&#39;<br>}</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8C03\u6574 loading \u7684\u663E\u793A\u4F4D\u7F6E\uFF0C<br>\u76F8\u5BF9\u4E8E\u5BBF\u4E3B\u5143\u7D20\u7684\u9876\u90E8\u8DDD\u79BB\u4E0E\u5DE6\u4FA7\u8DDD\u79BB</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">z-index</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0Cloading \u52A0\u8F7D\u63D0\u793A\u7684 z-index \u503C</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table>',2);function X(o,f,i,y,s,c){const r=S("render-demo-0"),a=S("demo"),u=S("render-demo-1"),h=S("render-demo-2"),v=S("render-demo-3");return I(),M("div",null,[z,F(a,{sourceCode:`<template>
  <d-button @click="fetchTableData" style="margin-top: 8px">click me!</d-button>
  <table
    v-d-loading="loadingStatus"
    :backdrop="true"
    position-type="relative"
    :view="{ top: '50%', left: '50%' }"
    :z-index="100"
    style="width: 100%; text-align: left;"
  >
    <thead>
      <tr>
        <th>\u5E8F\u53F7</th>
        <th>\u59D3\u540D</th>
        <th>\u961F\u4F0D</th>
        <th>\u64CD\u4F5C</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(val, index) in datas" :key="index">
        <td>{{ index }}</td>
        <td>\u5F20\u5BB6\u9F50</td>
        <td>\u8DF3\u6C34</td>
        <td>\u8DF3\u6C34\u961F</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  setup() {
    const loadingStatus = ref(false)
    const datas = reactive([])
    const fetchTableData = () => {
      loadingStatus.value = true

      setTimeout(() => {
        datas.push(1, 2, 3)
        loadingStatus.value = false
      }, 2000)
    }

    return {
      datas,
      loadingStatus,
      fetchTableData
    }
  }
})
<\/script>
`},{highlight:w(()=>[j]),default:w(()=>[F(r)]),_:1}),O,Y,F(a,{sourceCode:`<template>
  <d-button @click="fetchMutiplePromise" style="margin-top: 8px">click me!</d-button>

  <div
    v-d-loading="promises"
    message="One moment please..."
    style="margin-top: 20px; width: 100%; height: 80px; padding: 10px;"
  >
    loading will show here2
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const promises = ref([])
    const fetchMutiplePromise = () => {
      let list = []
      for (let i = 0; i < 3; i++) {
        list.push(
          new Promise((res, rej) => {
            setTimeout(() => {
              res(i)
            }, (i + 1) * 1000)
          }).then((res) => {
            return res
          })
        )
      }
      promises.value = list
    }

    return {
      promises,
      fetchMutiplePromise
    }
  }
})
<\/script>
`},{highlight:w(()=>[G]),default:w(()=>[F(u)]),_:1}),H,R,F(a,{sourceCode:`<template>
  <d-button @click="showLoading1" style="margin-right: 8px; display: inline-block; width: 220px;">
    Loading Style 1
  </d-button>

  <d-button
    v-d-loading="isShowLoading2"
    @click="showLoading2"
    :loading-template-ref="temp2"
    style="margin-right: 8px; display: inline-block; width: 220px;"
  >
    Loading Style 2
  </d-button>

  <d-button
    v-d-loading="true"
    variant="text"
    :loading-template-ref="temp3"
    style="margin-right: 8px; display: inline-block; width: 220px;"
  >
    Loading Style 3
  </d-button>

  <div
    style="height: 80px; line-height: 80px"
    v-d-loading="isShowLoading1"
    :loading-template-ref="temp1"
  >
    loading will show here1
  </div>
</template>

<script>
import { defineComponent, ref, h } from 'vue'

export default defineComponent({
  setup() {
    const temp1 = h(
      'div',
      {
        className: 'devui-infinity-loading'
      },
      h('i', {
        className: 'icon-refresh'
      })
    )

    const temp2 = h(
      'div',
      {
        className: 'devui-circle-loading-container-2'
      },
      h('i', {
        className: 'icon-refresh'
      })
    )

    const temp3 = h(
      'div',
      {
        className: 'devui-circle-loading-container-3'
      },
      h('i', {
        className: 'icon-refresh'
      })
    )

    const isShowLoading1 = ref(false)
    const showLoading1 = () => {
      isShowLoading1.value = new Promise((res) => {
        setTimeout(() => {
          res(true)
        }, 1000)
      })
    }

    const isShowLoading2 = ref(false)
    const showLoading2 = () => {
      isShowLoading2.value = new Promise((res) => {
        setTimeout(() => {
          res(true)
        }, 1000)
      })
    }

    return {
      temp1,
      temp2,
      temp3,
      isShowLoading1,
      isShowLoading2,
      showLoading1,
      showLoading2
    }
  }
})
<\/script>

<style>
.devui-infinity-loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.devui-circle-loading-container-2 {
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
}

.devui-circle-loading-container-3 {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
`},{highlight:w(()=>[U]),default:w(()=>[F(h)]),_:1}),J,K,F(a,{sourceCode:`<template>
  <d-button @click="serviceToBody" style="margin-right: 8px; display: inline-block; width: 220px;">
    click me show full screen loading!
  </d-button>

  <d-button
    v-if="isShow"
    @click="openTargetLoading"
    style="margin-right: 8px; display: inline-block; width: 200px;"
  >
    click me show loading in target!
  </d-button>

  <d-button
    v-else
    @click="closeTargetLoading"
    style="margin-right: 8px; display: inline-block; width: 200px;"
  >
    click me close loading in target!
  </d-button>

  <div id="me" style="margin-top: 20px; width: 100%; height: 60px; padding: 10px;">
    loading will show here3
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default {
  data() {
    return {
      isShow: true,
      resultTarget: null
    }
  },
  methods: {
    serviceToBody() {
      const results = this.$loadingService.open()

      setTimeout(() => {
        results.loadingInstance.close()
      }, 2000)
    },
    openTargetLoading() {
      this.resultTarget = this.$loadingService.open({
        target: document.querySelector('#me'),
        message: 'One moment please...',
        positionType: 'relative',
        zIndex: 1
      })
      this.isShow = false
    },
    closeTargetLoading() {
      this.resultTarget.loadingInstance.close()
      this.isShow = true
    }
  }
}
<\/script>
`},{highlight:w(()=>[Q]),default:w(()=>[F(v)]),_:1}),W])}var an=P($,[["render",X]]);export{sn as __pageData,an as default};
