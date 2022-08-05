import{V as x}from"./framework.3495a366.js";import{_ as I,f as b,G as M,H as W,b as m,a1 as v,a3 as q,I as t,k as n}from"./plugin-vue_export-helper.ebedbb15.js";import"./framework.d333a127.js";const L={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:i,createVNode:e,openBlock:l,createElementBlock:s}=x;function h(g,u){const r=i("d-skeleton");return l(),s("div",null,[e(r,{row:3})])}return{render:h,...{}}}(),"render-demo-1":function(){const{resolveComponent:i,createVNode:e,createTextVNode:l,createElementVNode:s,withCtx:h,openBlock:y,createElementBlock:g}=x,u={class:"skeleton-btn-groups"},r={class:"skeleton-btn"},f=l(" Skeleton\uFF1A "),w={class:"skeleton-btn"},A=l(" Animation\uFF1A "),F={class:"skeleton-btn"},d=l(" Avatar\uFF1A "),V={class:"skeleton-btn"},C=l(" Title\uFF1A "),P={class:"skeleton-btn"},T=l(" Paragraph\uFF1A "),B={class:"skeleton-btn"},N=l(" Round Avatar\uFF1A "),E={class:"skeleton-btn"},D=l(" Round Corners\uFF1A "),U=s("div",null,[s("div",null,"row one"),s("div",null,"row two"),s("div",null,"row three"),s("div",null,"row four")],-1);function S(a,o){const p=i("d-switch"),_=i("d-skeleton");return y(),g("div",null,[s("div",u,[s("div",r,[f,e(p,{modelValue:a.loading,"onUpdate:modelValue":o[0]||(o[0]=c=>a.loading=c)},null,8,["modelValue"])]),s("div",w,[A,e(p,{modelValue:a.animate,"onUpdate:modelValue":o[1]||(o[1]=c=>a.animate=c)},null,8,["modelValue"])]),s("div",F,[d,e(p,{modelValue:a.avatar,"onUpdate:modelValue":o[2]||(o[2]=c=>a.avatar=c)},null,8,["modelValue"])]),s("div",V,[C,e(p,{modelValue:a.title,"onUpdate:modelValue":o[3]||(o[3]=c=>a.title=c)},null,8,["modelValue"])]),s("div",P,[T,e(p,{modelValue:a.paragraph,"onUpdate:modelValue":o[4]||(o[4]=c=>a.paragraph=c)},null,8,["modelValue"])]),s("div",B,[N,e(p,{modelValue:a.roundAvatar,"onUpdate:modelValue":o[5]||(o[5]=c=>a.roundAvatar=c)},null,8,["modelValue"])]),s("div",E,[D,e(p,{modelValue:a.round,"onUpdate:modelValue":o[6]||(o[6]=c=>a.round=c)},null,8,["modelValue"])])]),e(_,{row:3,animate:a.animate,avatar:a.avatar,"avatar-shape":a.roundAvatar?"":"square",title:a.title,paragraph:a.paragraph,loading:a.loading,round:a.round},{default:h(()=>[U]),_:1},8,["animate","avatar","avatar-shape","title","paragraph","loading","round"])])}const{defineComponent:R,ref:k}=x,$=R({setup(){const a=k(!0),o=k(!0),p=k(!0),_=k(!0),c=k(!0),j=k(!0),z=k(!1);return{loading:a,animate:o,avatar:p,title:_,paragraph:c,roundAvatar:j,round:z}}});return{render:S,...$}}(),"render-demo-2":function(){const{resolveComponent:i,createVNode:e,createTextVNode:l,openBlock:s,createElementBlock:h}=x,y=l(" \xA0 "),g=l(" \xA0 "),u=l(" \xA0 "),r=l(" \xA0 ");function f(A,F){const d=i("d-skeleton-item");return s(),h("div",null,[e(d,{shape:"avatar",style:{"margin-left":"55px",width:"80px",height:"80px"}}),y,e(d,{shape:"image"}),g,e(d,{shape:"title"}),u,e(d,{shape:"paragraph",row:3,"row-width":["75%","50%"]}),r,e(d,{shape:"button"})])}return{render:f,...{}}}()}},st='{"title":"Skeleton","description":"","frontmatter":{},"headers":[{"level":3,"title":"When to Use","slug":"when-to-use"},{"level":3,"title":"Basic Usage","slug":"basic-usage"},{"level":3,"title":"Complex Combination","slug":"complex-combination"},{"level":3,"title":"Fine-grit Mode","slug":"fine-grit-mode"},{"level":3,"title":"d-skeleton Props","slug":"d-skeleton-props"},{"level":3,"title":"d-skeleton__avatar Props","slug":"d-skeleton-avatar-props"},{"level":3,"title":"d-skeleton__title Props","slug":"d-skeleton-title-props"},{"level":3,"title":"d-skeleton__paragraph Props","slug":"d-skeleton-paragraph-props"},{"level":3,"title":"d-skeleton-item Props","slug":"d-skeleton-item-props"},{"level":3,"title":"d-skeleton-item__avatar Props","slug":"d-skeleton-item-avatar-props"}],"relativePath":"en-US/components/skeleton/index.md","lastUpdated":1655716121202}',G=q('<h1 id="skeleton" tabindex="-1">Skeleton <a class="header-anchor" href="#skeleton" aria-hidden="true">#</a></h1><p>It is used to display a set of placeholder graphics during content loading.</p><h3 id="when-to-use" tabindex="-1">When to Use <a class="header-anchor" href="#when-to-use" aria-hidden="true">#</a></h3><p>Set a skeleton in the position where content needs to be loaded, which has better visual effect than Loading in some scenarios.</p><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a></h3><p>Basic placeholder effect.</p>',6),H=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-skeleton")]),n(),t("span",{class:"token attr-name"},":row"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),J=t("h3",{id:"complex-combination",tabindex:"-1"},[n("Complex Combination "),t("a",{class:"header-anchor",href:"#complex-combination","aria-hidden":"true"},"#")],-1),K=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("skeleton-btn-groups"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("skeleton-btn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Skeleton\uFF1A
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("loading"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("skeleton-btn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Animation\uFF1A
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("animate"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("skeleton-btn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Avatar\uFF1A
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("avatar"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("skeleton-btn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Title\uFF1A
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("title"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("skeleton-btn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Paragraph\uFF1A
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("paragraph"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("skeleton-btn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Round Avatar\uFF1A
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("roundAvatar"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),n(),t("span",{class:"token attr-name"},"class"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("skeleton-btn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Round Corners\uFF1A
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-switch")]),n(),t("span",{class:"token attr-name"},"v-model"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("round"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-skeleton")]),n(`
    `),t("span",{class:"token attr-name"},":row"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":animate"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("animate"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":avatar"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("avatar"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":avatar-shape"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("roundAvatar ? "),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},"'"),n(" : "),t("span",{class:"token punctuation"},"'"),n("square"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("title"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":paragraph"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("paragraph"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":loading"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("loading"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":round"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("round"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("row one"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("row two"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("row three"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("div")]),t("span",{class:"token punctuation"},">")]),n("row four"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("div")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("d-skeleton")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" loading "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" animate "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" avatar "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" title "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" paragraph "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" roundAvatar "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" round "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      loading`),t("span",{class:"token punctuation"},","),n(`
      animate`),t("span",{class:"token punctuation"},","),n(`
      avatar`),t("span",{class:"token punctuation"},","),n(`
      title`),t("span",{class:"token punctuation"},","),n(`
      paragraph`),t("span",{class:"token punctuation"},","),n(`
      roundAvatar`),t("span",{class:"token punctuation"},","),n(`
      round`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("style")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token style"},[t("span",{class:"token language-css"},[n(`
`),t("span",{class:"token selector"},".skeleton-btn-groups"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 1rem"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`),t("span",{class:"token selector"},".skeleton-btn"),n(),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token property"},"display"),t("span",{class:"token punctuation"},":"),n(" flex"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"flex-direction"),t("span",{class:"token punctuation"},":"),n(" column"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token property"},"justify-content"),t("span",{class:"token punctuation"},":"),n(" space-between"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("style")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),O=t("h3",{id:"fine-grit-mode",tabindex:"-1"},[n("Fine-grit Mode "),t("a",{class:"header-anchor",href:"#fine-grit-mode","aria-hidden":"true"},"#")],-1),Q=t("p",null,"Provide fine-grained skeleton elements to give developers more flexibility for customization.",-1),X=t("div",{class:"language-vue"},[t("pre",null,[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-skeleton-item")]),n(),t("span",{class:"token attr-name"},":shape"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},"'"),n("avatar"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-left"),t("span",{class:"token punctuation"},":"),n("55px"),t("span",{class:"token punctuation"},";"),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),n("80px"),t("span",{class:"token punctuation"},";"),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),n("80px"),t("span",{class:"token punctuation"},";")]),t("span",{class:"token punctuation"},'"')])]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-skeleton-item")]),n(),t("span",{class:"token attr-name"},":shape"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},"'"),n("image"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n("   "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-skeleton-item")]),n(),t("span",{class:"token attr-name"},":shape"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},"'"),n("title"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`  
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-skeleton-item")]),n(),t("span",{class:"token attr-name"},":shape"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},"'"),n("paragraph"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":row"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":row-width"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("75%"),t("span",{class:"token punctuation"},"'"),n(", "),t("span",{class:"token punctuation"},"'"),n("50%"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n("   "),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("d-skeleton-item")]),n(),t("span",{class:"token attr-name"},":shape"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token punctuation"},"'"),n("button"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),Y=q('<h3 id="d-skeleton-props" tabindex="-1">d-skeleton Props <a class="header-anchor" href="#d-skeleton-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">loading</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">Choose whether to display skeleton.Subcomponent content will be shown when Loading is <code>false</code> .</td></tr><tr><td style="text-align:center;">animate</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">Choose whether to enable animation.</td></tr><tr><td style="text-align:center;">avatar</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:left;">Choose whether to display the avatar placeholder picture.</td></tr><tr><td style="text-align:center;">title</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">Choose whether to display a title placeholder picture.</td></tr><tr><td style="text-align:center;">paragraph</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">Choose whether to display a paragraph placeholder picture.</td></tr><tr><td style="text-align:center;">round</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>false</code></td><td style="text-align:left;">Choose whether to display headings and paragraphs in round corners.</td></tr></tbody></table><h3 id="d-skeleton-avatar-props" tabindex="-1">d-skeleton__avatar Props <a class="header-anchor" href="#d-skeleton-avatar-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">avatar-size</td><td style="text-align:center;"><code>number | string</code></td><td style="text-align:center;"><code>40px</code></td><td style="text-align:left;">Size of avatar placeholder picture.</td></tr><tr><td style="text-align:center;">avatar-shape</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>round</code></td><td style="text-align:left;">The shape of head placeholder picture with the optional value <code>square</code>.</td></tr></tbody></table><h3 id="d-skeleton-title-props" tabindex="-1">d-skeleton__title Props <a class="header-anchor" href="#d-skeleton-title-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">title-width</td><td style="text-align:center;"><code>number | string</code></td><td style="text-align:center;"><code>40%</code></td><td style="text-align:left;">Width of the title placeholder picture.</td></tr></tbody></table><h3 id="d-skeleton-paragraph-props" tabindex="-1">d-skeleton__paragraph Props <a class="header-anchor" href="#d-skeleton-paragraph-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">row</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;"><code>0</code></td><td style="text-align:left;">The number of paragraph placeholder picture lines.</td></tr><tr><td style="text-align:center;">row-width</td><td style="text-align:center;"><code>number | string | (number | string)[]</code></td><td style="text-align:center;"><code>[&quot;100%&quot;]</code></td><td style="text-align:left;">Paragraph placeholder picture widths that can be passed to arrays to set the width of each line.</td></tr></tbody></table><h3 id="d-skeleton-item-props" tabindex="-1">d-skeleton-item Props <a class="header-anchor" href="#d-skeleton-item-props" aria-hidden="true">#</a></h3><p>Fine-grit Mode</p><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">shape</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">-</td><td style="text-align:left;">The optional values are <code>avatar</code>,<code>image</code>,<code>title</code>,<code>paragraph</code>,<code>button</code>.</td></tr><tr><td style="text-align:center;">animate</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;"><code>true</code></td><td style="text-align:left;">Choose whether to enable animation.</td></tr></tbody></table><blockquote><p>The Paragraph API is the same as the default mode.</p></blockquote><h3 id="d-skeleton-item-avatar-props" tabindex="-1">d-skeleton-item__avatar Props <a class="header-anchor" href="#d-skeleton-item-avatar-props" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">Parameter</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:center;">avatar-shape</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>round</code></td><td style="text-align:left;">The shape of placeholder picture with the optional value <code>square</code>.</td></tr></tbody></table>',14);function Z(i,e,l,s,h,y){const g=b("render-demo-0"),u=b("demo"),r=b("render-demo-1"),f=b("render-demo-2");return M(),W("div",null,[G,m(u,{sourceCode:`<template>
  <d-skeleton :row="3" />
</template>
`},{highlight:v(()=>[H]),default:v(()=>[m(g)]),_:1}),J,m(u,{sourceCode:`<template>
  <div class="skeleton-btn-groups">
    <div class="skeleton-btn">
      Skeleton\uFF1A
      <d-switch v-model="loading" />
    </div>
    <div class="skeleton-btn">
      Animation\uFF1A
      <d-switch v-model="animate" />
    </div>
    <div class="skeleton-btn">
      Avatar\uFF1A
      <d-switch v-model="avatar" />
    </div>
    <div class="skeleton-btn">
      Title\uFF1A
      <d-switch v-model="title" />
    </div>
    <div class="skeleton-btn">
      Paragraph\uFF1A
      <d-switch v-model="paragraph" />
    </div>
    <div class="skeleton-btn">
      Round Avatar\uFF1A
      <d-switch v-model="roundAvatar" />
    </div>
    <div class="skeleton-btn">
      Round Corners\uFF1A
      <d-switch v-model="round" />
    </div>
  </div>
  <d-skeleton
    :row="3"
    :animate="animate"
    :avatar="avatar"
    :avatar-shape="roundAvatar ? '' : 'square'"
    :title="title"
    :paragraph="paragraph"
    :loading="loading"
    :round="round"
  >
    <div>
      <div>row one</div>
      <div>row two</div>
      <div>row three</div>
      <div>row four</div>
    </div>
  </d-skeleton>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const loading = ref(true);
    const animate = ref(true);
    const avatar = ref(true);
    const title = ref(true);
    const paragraph = ref(true);
    const roundAvatar = ref(true);
    const round = ref(false);

    return {
      loading,
      animate,
      avatar,
      title,
      paragraph,
      roundAvatar,
      round,
    };
  },
});
<\/script>
<style>
.skeleton-btn-groups {
  display: flex;
  margin-bottom: 1rem;
}
.skeleton-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
`},{highlight:v(()=>[K]),default:v(()=>[m(r)]),_:1}),O,Q,m(u,{sourceCode:`<template>
  <d-skeleton-item :shape="'avatar'" style="margin-left:55px;width:80px;height:80px;" />
  \xA0 <d-skeleton-item :shape="'image'" /> \xA0 <d-skeleton-item :shape="'title'" /> \xA0
  <d-skeleton-item :shape="'paragraph'" :row="3" :row-width="['75%', '50%']" /> \xA0 <d-skeleton-item :shape="'button'" />
</template>
`},{highlight:v(()=>[X]),default:v(()=>[m(f)]),_:1}),Y])}var et=I(L,[["render",Z]]);export{st as __pageData,et as default};
