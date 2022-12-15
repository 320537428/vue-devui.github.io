var j=Object.defineProperty;var I=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var M=(e,s,a)=>s in e?j(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,C=(e,s)=>{for(var a in s||(s={}))U.call(s,a)&&M(e,a,s[a]);if(I)for(var a of I(s))P.call(s,a)&&M(e,a,s[a]);return e};import{_ as G,V as v,r as y,o as H,c as J,a as B,w as r,b as T,d as n,e as t}from"./app.d8dfdb43.js";const K={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:s,openBlock:a,createElementBlock:u}=v;function i(c,p){const h=e("d-skeleton");return a(),u("div",null,[s(h)])}return C({render:i},{})}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:s,withCtx:a,createVNode:u,createElementVNode:i,openBlock:d,createElementBlock:c}=v,p=e("\u663E\u793A/\u9690\u85CF"),h=i("br",null,null,-1),l=i("br",null,null,-1),g=i("p",{style:{width:"150px"}},"\u5185\u5BB9\u6BD4\u8F83\u77ED\u7684\u4E00\u6BB5\u6587\u5B57",-1),_=e("\u4E00\u4E2A\u6309\u94AE");function x(F,A){const f=s("d-button"),S=s("d-avatar"),E=s("d-skeleton-item"),z=s("d-skeleton");return d(),c("div",null,[u(f,{onClick:A[0]||(A[0]=o=>F.loading=!F.loading)},{default:a(()=>[p]),_:1}),h,l,u(z,{loading:F.loading},{placeholder:a(()=>[u(E,{variant:"circle",style:{width:"36px",height:"36px"}}),u(E,{style:{width:"150px",height:"24px",margin:"1rem 0"}}),u(E,{round:"",style:{width:"90px",height:"32px"}})]),default:a(()=>[i("div",null,[u(S,{name:"MyAvatar",width:36,height:36}),g,u(f,{variant:"solid"},{default:a(()=>[_]),_:1})])]),_:1},8,["loading"])])}const{defineComponent:D,ref:b}=v,w=D({setup(){return{loading:b(!0)}}});return C({render:x},w)}(),"render-demo-2":function(){const{renderList:e,Fragment:s,openBlock:a,createElementBlock:u,toDisplayString:i,createTextVNode:d,resolveComponent:c,withCtx:p,createBlock:h,createVNode:l,createElementVNode:g}=v,_={class:"demo-skeleton-wrapper"},x=d(" \u5927\u5C0F\uFF1A "),D=d(" \u5706\u89D2\uFF1A "),b=d(" \u52A8\u753B\uFF1A "),w=g("br",null,null,-1),F=g("br",null,null,-1);function A(o,m){const V=c("d-radio"),N=c("d-radio-group"),L=c("d-switch"),q=c("d-skeleton-item"),$=c("d-skeleton");return a(),u("div",null,[g("div",_,[g("div",null,[x,l(N,{direction:"row",modelValue:o.size,"onUpdate:modelValue":m[0]||(m[0]=k=>o.size=k)},{default:p(()=>[(a(!0),u(s,null,e(o.sizeList,k=>(a(),h(V,{key:k.label,value:k.value},{default:p(()=>[d(i(k.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),g("div",null,[D,l(L,{modelValue:o.round,"onUpdate:modelValue":m[1]||(m[1]=k=>o.round=k)},null,8,["modelValue"])]),g("div",null,[b,l(L,{modelValue:o.animate,"onUpdate:modelValue":m[2]||(m[2]=k=>o.animate=k)},null,8,["modelValue"])])]),l($,{round:o.round,"show-animation":o.animate},{placeholder:p(()=>[l(q),w,l(q,{variant:"circle",size:o.size},null,8,["size"]),F,l(q,{variant:"image",size:o.size},null,8,["size"])]),_:1},8,["round","show-animation"])])}const{defineComponent:f,reactive:S,ref:E}=v,z=f({setup(){const o=E("md"),m=E(!1),V=E(!0);return{size:o,round:m,animate:V,sizeList:[{label:"Small",value:"sm"},{label:"Middle",value:"md"},{label:"Large",value:"lg"}]}}});return C({render:A},z)}()}},un='{"title":"Skeleton \u9AA8\u67B6\u5C4F","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6392\u7248","slug":"\u81EA\u5B9A\u4E49\u6392\u7248"},{"level":3,"title":"\u7EC6\u7C92\u5EA6\u6A21\u5F0F","slug":"\u7EC6\u7C92\u5EA6\u6A21\u5F0F"},{"level":3,"title":"Skeleton \u53C2\u6570","slug":"skeleton-\u53C2\u6570"},{"level":3,"title":"Skeleton \u63D2\u69FD","slug":"skeleton-\u63D2\u69FD"},{"level":3,"title":"SkeletonItem \u53C2\u6570","slug":"skeletonitem-\u53C2\u6570"},{"level":3,"title":"SkeletonItem \u7C7B\u578B\u5B9A\u4E49","slug":"skeletonitem-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/skeleton/index.md","lastUpdated":1662171945339}',O=T('<h1 id="skeleton-\u9AA8\u67B6\u5C4F" tabindex="-1">Skeleton \u9AA8\u67B6\u5C4F <a class="header-anchor" href="#skeleton-\u9AA8\u67B6\u5C4F" aria-hidden="true">#</a></h1><p>\u7528\u4E8E\u5728\u5185\u5BB9\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u5C55\u793A\u4E00\u7EC4\u5360\u4F4D\u56FE\u5F62\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5728\u9700\u8981\u7B49\u5F85\u52A0\u8F7D\u5185\u5BB9\u7684\u4F4D\u7F6E\u8BBE\u7F6E\u4E00\u4E2A\u9AA8\u67B6\u5C4F\uFF0C\u67D0\u4E9B\u573A\u666F\u4E0B\u6BD4 Loading \u7684\u89C6\u89C9\u6548\u679C\u66F4\u597D\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),Q=n("div",null,[t("\u9ED8\u8BA4\u6392\u7248\uFF1A\u4E00\u4E2A\u6807\u9898+\u4E09\u4E2A\u6BB5\u843D\uFF0C\u6807\u9898\u5BBD\u5EA6\u4E3A"),n("code",null,"40%"),t("\uFF0C\u4E2D\u95F4\u4E24\u4E2A\u6BB5\u843D\u5BBD\u5EA6\u4E3A"),n("code",null,"100%"),t("\uFF0C\u6700\u540E\u4E00\u4E2A\u6BB5\u843D\u5BBD\u5EA6\u4E3A"),n("code",null,"60%"),t("\u3002")],-1),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"\u81EA\u5B9A\u4E49\u6392\u7248",tabindex:"-1"},[t("\u81EA\u5B9A\u4E49\u6392\u7248 "),n("a",{class:"header-anchor",href:"#\u81EA\u5B9A\u4E49\u6392\u7248","aria-hidden":"true"},"#")],-1),X=n("div",null,[t("\u5F53\u9ED8\u8BA4\u6392\u7248\u4E0D\u6EE1\u8DB3\u9700\u6C42\u65F6\uFF0C\u53EF\u81EA\u5B9A\u4E49\u6392\u7248\u7ED3\u6784\uFF0C\u901A\u8FC7"),n("code",null,"class"),t("\u548C"),n("code",null,"style"),t("\u53EF\u81EA\u5B9A\u4E49\u5BBD\u9AD8\u7B49\u6837\u5F0F\u3002")],-1),Y=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading = !loading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u663E\u793A/\u9690\u85CF"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton")]),t(),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-avatar")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("MyAvatar"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("36"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":height"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("36"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-avatar")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 150px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("\u5185\u5BB9\u6BD4\u8F83\u77ED\u7684\u4E00\u6BB5\u6587\u5B57"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("solid"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u4E00\u4E2A\u6309\u94AE"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#placeholder"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton-item")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("circle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 36px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 36px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton-item")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 150px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 24px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 1rem 0"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton-item")]),t(),n("span",{class:"token attr-name"},"round"),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 90px"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 32px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton-item")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" loading "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("h3",{id:"\u7EC6\u7C92\u5EA6\u6A21\u5F0F",tabindex:"-1"},[t("\u7EC6\u7C92\u5EA6\u6A21\u5F0F "),n("a",{class:"header-anchor",href:"#\u7EC6\u7C92\u5EA6\u6A21\u5F0F","aria-hidden":"true"},"#")],-1),nn=n("div",null,[n("code",null,"d-skeleton-item"),t("\u7EC4\u4EF6\u63D0\u4F9B\u4E24\u79CD\u62BD\u8C61\u7C7B\u578B\uFF1A"),n("code",null,"circle"),t("\u3001"),n("code",null,"square"),t("\uFF0C\u4E00\u79CD\u5177\u8C61\u7C7B\u578B\uFF1A"),n("code",null,"image"),t("\u3002\u9488\u5BF9"),n("code",null,"circle"),t("\u548C"),n("code",null,"image"),t("\u4E24\u79CD\u7C7B\u578B\u63D0\u4F9B"),n("code",null,"size"),t("\u53C2\u6570\uFF0C\u5185\u7F6E\u4E86\u4E09\u79CD\u5927\u5C0F\u3002"),n("code",null,"d-skeleton"),t("\u7EC4\u4EF6\u63D0\u4F9B"),n("code",null,"round"),t("\u548C"),n("code",null,"show-animation"),t("\u53C2\u6570\u5206\u522B\u8BBE\u7F6E\u5706\u89D2\u548C\u52A8\u753B\u3002")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demo-skeleton-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      \u5927\u5C0F\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio-group")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-radio")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item in sizeList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.label"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.value"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
          {{ item.label }}
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-radio-group")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      \u5706\u89D2\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-switch")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("round"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      \u52A8\u753B\uFF1A
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-switch")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("animate"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton")]),t(),n("span",{class:"token attr-name"},":round"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("round"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":show-animation"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("animate"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#placeholder"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton-item")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton-item")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("circle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton-item")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-skeleton-item")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("image"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("size"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton-item")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-skeleton")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" size "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" round "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" animate "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" sizeList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Small'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'sm'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Middle'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'md'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"label"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Large'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'lg'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" size"),n("span",{class:"token punctuation"},","),t(" round"),n("span",{class:"token punctuation"},","),t(" animate"),n("span",{class:"token punctuation"},","),t(" sizeList "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".demo-skeleton-wrapper"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 1rem"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".demo-skeleton-wrapper > div"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" flex-start"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"align-items"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 1.2rem"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=T(`<h3 id="skeleton-\u53C2\u6570" tabindex="-1">Skeleton \u53C2\u6570 <a class="header-anchor" href="#skeleton-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">loading</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u9AA8\u67B6\u5C4F\uFF0C\u4F20 <code>false</code> \u65F6\u4F1A\u5C55\u793A\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%8E%92%E7%89%88">\u81EA\u5B9A\u4E49\u6392\u7248</a></td></tr><tr><td style="text-align:left;">show-animation</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>true</code></td><td style="text-align:left;">\u662F\u5426\u5F00\u542F\u52A8\u753B</td><td style="text-align:left;"><a href="#%E7%BB%86%E7%B2%92%E5%BA%A6%E6%A8%A1%E5%BC%8F">\u7EC6\u7C92\u5EA6\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">round</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u662F\u5426\u663E\u793A\u5706\u89D2\u98CE\u683C</td><td style="text-align:left;"><a href="#%E7%BB%86%E7%B2%92%E5%BA%A6%E6%A8%A1%E5%BC%8F">\u7EC6\u7C92\u5EA6\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">rows</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>3</code></td><td style="text-align:left;">\u9ED8\u8BA4\u6392\u7248\uFF0C\u53EF\u914D\u7F6E\u6BB5\u843D\u663E\u793A\u884C\u6570</td><td style="text-align:left;"></td></tr></tbody></table><h3 id="skeleton-\u63D2\u69FD" tabindex="-1">Skeleton \u63D2\u69FD <a class="header-anchor" href="#skeleton-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">\u52A0\u8F7D\u5B8C\u6210\u540E\u663E\u793A\u7684\u5185\u5BB9</td></tr><tr><td style="text-align:left;">placeholder</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u9AA8\u67B6\u5C4F\u7ED3\u6784</td></tr></tbody></table><h3 id="skeletonitem-\u53C2\u6570" tabindex="-1">SkeletonItem \u53C2\u6570 <a class="header-anchor" href="#skeletonitem-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">variant</td><td style="text-align:left;"><a href="#ivariant">IVariant</a></td><td style="text-align:left;"><code>square</code></td><td style="text-align:left;">\u9AA8\u67B6\u5C4F\u5F62\u6001</td><td style="text-align:left;"><a href="#%E7%BB%86%E7%B2%92%E5%BA%A6%E6%A8%A1%E5%BC%8F">\u7EC6\u7C92\u5EA6\u6A21\u5F0F</a></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;"><a href="#isize">ISize</a></td><td style="text-align:left;"><code>md</code></td><td style="text-align:left;">\u9488\u5BF9<code>image</code>\u548C<code>circle</code>\u5F62\u6001\uFF0C\u5185\u7F6E\u4E09\u79CD\u5927\u5C0F</td><td style="text-align:left;"><a href="#%E7%BB%86%E7%B2%92%E5%BA%A6%E6%A8%A1%E5%BC%8F">\u7EC6\u7C92\u5EA6\u6A21\u5F0F</a></td></tr></tbody></table><h3 id="skeletonitem-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">SkeletonItem \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#skeletonitem-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="ivariant" tabindex="-1">IVariant <a class="header-anchor" href="#ivariant" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IVariant</span> <span class="token operator">=</span> <span class="token string">&#39;image&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;circle&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;square&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="isize" tabindex="-1">ISize <a class="header-anchor" href="#isize" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">ISize</span> <span class="token operator">=</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;sm&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,11);function sn(e,s,a,u,i,d){const c=y("render-demo-0"),p=y("demo"),h=y("render-demo-1"),l=y("render-demo-2");return H(),J("div",null,[O,B(p,{sourceCode:`<template>
  <d-skeleton></d-skeleton>
</template>
`},{description:r(()=>[Q]),highlight:r(()=>[R]),default:r(()=>[B(c)]),_:1}),W,B(p,{sourceCode:`<template>
  <d-button @click="loading = !loading">\u663E\u793A/\u9690\u85CF</d-button>
  <br />
  <br />
  <d-skeleton :loading="loading">
    <div>
      <d-avatar name="MyAvatar" :width="36" :height="36"></d-avatar>
      <p style="width: 150px;">\u5185\u5BB9\u6BD4\u8F83\u77ED\u7684\u4E00\u6BB5\u6587\u5B57</p>
      <d-button variant="solid">\u4E00\u4E2A\u6309\u94AE</d-button>
    </div>
    <template #placeholder>
      <d-skeleton-item variant="circle" style="width: 36px; height: 36px;"></d-skeleton-item>
      <d-skeleton-item style="width: 150px; height: 24px; margin: 1rem 0;"></d-skeleton-item>
      <d-skeleton-item round style="width: 90px; height: 32px;"></d-skeleton-item>
    </template>
  </d-skeleton>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const loading = ref(true);

    return { loading };
  },
});
<\/script>
`},{description:r(()=>[X]),highlight:r(()=>[Y]),default:r(()=>[B(h)]),_:1}),Z,B(p,{sourceCode:`<template>
  <div class="demo-skeleton-wrapper">
    <div>
      \u5927\u5C0F\uFF1A
      <d-radio-group direction="row" v-model="size">
        <d-radio v-for="item in sizeList" :key="item.label" :value="item.value">
          {{ item.label }}
        </d-radio>
      </d-radio-group>
    </div>
    <div>
      \u5706\u89D2\uFF1A
      <d-switch v-model="round" />
    </div>
    <div>
      \u52A8\u753B\uFF1A
      <d-switch v-model="animate" />
    </div>
  </div>
  <d-skeleton :round="round" :show-animation="animate">
    <template #placeholder>
      <d-skeleton-item></d-skeleton-item>
      <br />
      <d-skeleton-item variant="circle" :size="size"></d-skeleton-item>
      <br />
      <d-skeleton-item variant="image" :size="size"></d-skeleton-item>
    </template>
  </d-skeleton>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const size = ref('md');
    const round = ref(false);
    const animate = ref(true);
    const sizeList = [
      {
        label: 'Small',
        value: 'sm',
      },
      {
        label: 'Middle',
        value: 'md',
      },
      {
        label: 'Large',
        value: 'lg',
      },
    ];

    return { size, round, animate, sizeList };
  },
});
<\/script>

<style>
.demo-skeleton-wrapper {
  display: flex;
  margin-bottom: 1rem;
}
.demo-skeleton-wrapper > div {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 1.2rem;
  margin-bottom: 12px;
}
</style>
`},{description:r(()=>[nn]),highlight:r(()=>[tn]),default:r(()=>[B(l)]),_:1}),an])}var ln=G(K,[["render",sn]]);export{un as __pageData,ln as default};
