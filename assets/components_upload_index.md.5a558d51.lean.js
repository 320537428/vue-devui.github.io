var $=Object.defineProperty;var O=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var V=(u,o,t)=>o in u?$(u,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):u[o]=t,h=(u,o)=>{for(var t in o||(o={}))L.call(o,t)&&V(u,t,o[t]);if(O)for(var t of O(o))H.call(o,t)&&V(u,t,o[t]);return u};import{_ as G,r as B,c as J,a as E,w as d,b as q,d as n,e as a,o as K,V as m}from"./app.bfbf33a4.js";const M={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,createVNode:o,openBlock:t,createElementBlock:k}=m;function F(s,e){const c=u("d-upload");return t(),k("div",null,[o(c,{modelValue:s.uploadedFiles,"onUpdate:modelValue":e[0]||(e[0]=r=>s.uploadedFiles=r),"upload-options":s.uploadOptions},null,8,["modelValue","upload-options"])])}const{ref:p}=m;return h({render:F},{setup(){const s=p([]),e=p({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:s,uploadOptions:e}}})}(),"render-demo-1":function(){const{resolveComponent:u,createVNode:o,openBlock:t,createElementBlock:k}=m;function F(s,e){const c=u("d-upload");return t(),k("div",null,[o(c,{modelValue:s.uploadedFiles,"onUpdate:modelValue":e[0]||(e[0]=r=>s.uploadedFiles=r),"upload-options":s.uploadOptions,multiple:""},null,8,["modelValue","upload-options"])])}const{ref:p}=m;return h({render:F},{setup(){const s=p([]),e=p({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:s,uploadOptions:e}}})}(),"render-demo-2":function(){const{resolveComponent:u,createVNode:o,openBlock:t,createElementBlock:k}=m;function F(s,e){const c=u("d-upload");return t(),k("div",null,[o(c,{modelValue:s.uploadedFiles,"onUpdate:modelValue":e[0]||(e[0]=r=>s.uploadedFiles=r),"upload-options":s.uploadOptions,droppable:""},null,8,["modelValue","upload-options"])])}const{ref:p}=m;return h({render:F},{setup(){const s=p([]),e=p({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:s,uploadOptions:e}}})}(),"render-demo-3":function(){const{resolveComponent:u,createVNode:o,openBlock:t,createElementBlock:k}=m;function F(s,e){const c=u("d-upload");return t(),k("div",null,[o(c,{modelValue:s.uploadedFiles,"onUpdate:modelValue":e[0]||(e[0]=r=>s.uploadedFiles=r),"upload-options":s.uploadOptions,disabled:""},null,8,["modelValue","upload-options"])])}const{ref:p}=m;return h({render:F},{setup(){const s=p([]),e=p({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:s,uploadOptions:e}}})}(),"render-demo-4":function(){const{resolveComponent:u,createVNode:o,createElementVNode:t,createTextVNode:k,renderList:F,Fragment:p,openBlock:f,createElementBlock:s,toDisplayString:e,withCtx:c,createCommentVNode:r}=m,b={class:"upload-trigger"},U=t("div",{style:{"margin-top":"20px"}},[k(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),t("span",{class:"link"},"\u70B9\u51FB\u4E0A\u4F20")],-1),I={key:0,class:"table uploaded-files"},S={width:"50%"},N=t("td",{width:"25%"},[t("span",null,"Uploaded")],-1),j=k("Delete");function z(l,A){const C=u("d-icon"),D=u("d-button"),y=u("d-upload");return f(),s("div",null,[o(y,{class:"upload-demo",accept:".png",modelValue:l.uploadedFiles,"onUpdate:modelValue":A[0]||(A[0]=g=>l.uploadedFiles=g),"upload-options":l.uploadOptions,droppable:"","on-success":l.onSuccess,"on-error":l.onError,"before-upload":l.beforeUpload,onFileOver:l.fileOver,onFileDrop:l.fileDrop,onFileSelect:l.fileSelect,onDeleteUploadedFile:l.deleteUploadedFile},{"uploaded-files":c(g=>[g.uploadedFiles.length>0?(f(),s("table",I,[t("tbody",null,[(f(!0),s(p,null,F(g.uploadedFiles,(v,_)=>(f(),s("tr",{key:_,class:"row"},[t("td",S,[t("span",null,e(v.name),1)]),N,t("td",null,[o(D,{size:"xs",onClick:x=>g.deleteFile(v)},{default:c(()=>[j]),_:2},1032,["onClick"])])]))),128))])])):r("v-if",!0)]),default:c(()=>[t("div",b,[t("div",null,[o(C,{name:"upload",size:"24px"})]),U])]),_:1},8,["modelValue","upload-options","on-success","on-error","before-upload","onFileOver","onFileDrop","onFileSelect","onDeleteUploadedFile"])])}const{ref:w,watch:P}=m;return h({render:z},{setup(){const l=w([{name:"food.jpeg",url:"https://devui.design/home"},{name:"food2.jpeg",url:"https://devui.design/home"}]),A=w({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"}),C=i=>(console.log(i),!0),D=i=>{console.log("success",i)},y=()=>{console.log(error)},g=i=>{console.log("fileInfo:",i)},v=i=>{console.log("fileInfo:",i)},_=i=>{console.log("fileInfo:",i)},x=i=>{console.log("fileInfo:",i)};return P(l,(i,T)=>{console.log("uploadedFiles",{newValue:i,oldValue:T})}),{uploadedFiles:l,uploadOptions:A,beforeUpload:C,onSuccess:D,onError:y,fileOver:g,fileDrop:v,fileSelect:_,deleteUploadedFile:x}}})}()}},kn='{"title":"Upload \u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u6587\u4EF6\u4E0A\u4F20","slug":"\u591A\u6587\u4EF6\u4E0A\u4F20"},{"level":3,"title":"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20","slug":"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20"},{"level":3,"title":"\u7981\u6B62\u4E0A\u4F20","slug":"\u7981\u6B62\u4E0A\u4F20"},{"level":3,"title":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","slug":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20"},{"level":3,"title":"d-upload \u53C2\u6570","slug":"d-upload-\u53C2\u6570"},{"level":3,"title":"d-upload \u4E8B\u4EF6","slug":"d-upload-\u4E8B\u4EF6"},{"level":3,"title":"d-upload \u63D2\u69FD","slug":"d-upload-\u63D2\u69FD"},{"level":3,"title":"IUploadOptions \u7C7B\u578B","slug":"iuploadoptions-\u7C7B\u578B"}],"relativePath":"components/upload/index.md","lastUpdated":1647843975070}',Q=q('<h1 id="upload-\u4E0A\u4F20" tabindex="-1">Upload \u4E0A\u4F20 <a class="header-anchor" href="#upload-\u4E0A\u4F20" aria-hidden="true">#</a></h1><p>\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230\u540E\u7AEF\u670D\u52A1\u5668\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),W=n("h3",{id:"\u591A\u6587\u4EF6\u4E0A\u4F20",tabindex:"-1"},[a("\u591A\u6587\u4EF6\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u591A\u6587\u4EF6\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"multiple"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Y=n("h3",{id:"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20",tabindex:"-1"},[a("\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"droppable"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),nn=n("h3",{id:"\u7981\u6B62\u4E0A\u4F20",tabindex:"-1"},[a("\u7981\u6B62\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u7981\u6B62\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),an=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),sn=n("h3",{id:"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20",tabindex:"-1"},[a("\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),tn=n("div",null,"\u7528\u6237\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u652F\u6301\u6587\u4EF6\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20\u3002",-1),on=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("upload-demo"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"accept"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(".png"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"droppable"),a(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSuccess"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onError"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeUpload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@file-over"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileOver"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@file-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileDrop"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@file-select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileSelect"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@delete-uploaded-file"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("deleteUploadedFile"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("upload-trigger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("upload"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("24px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
        \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("link"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u70B9\u51FB\u4E0A\u4F20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("table")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table uploaded-files"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slotProps.uploadedFiles.length > 0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tbody")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(uploadedFile, index) in slotProps.uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ uploadedFile.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("xs"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(event) => slotProps.deleteFile(uploadedFile)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tbody")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("table")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-upload")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'food.jpeg'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://devui.design/home'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'food2.jpeg'"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://devui.design/home'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeUpload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSuccess"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onError"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"fileOver"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"fileInfo"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileInfo:'"),n("span",{class:"token punctuation"},","),a(" fileInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"fileDrop"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"fileInfo"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileInfo:'"),n("span",{class:"token punctuation"},","),a(" fileInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"fileSelect"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"fileInfo"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileInfo:'"),n("span",{class:"token punctuation"},","),a(" fileInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"deleteUploadedFile"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"fileInfo"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileInfo:'"),n("span",{class:"token punctuation"},","),a(" fileInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("uploadedFiles"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("newValue"),n("span",{class:"token punctuation"},","),a(" oldValue")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        newValue`),n("span",{class:"token punctuation"},","),a(`
        oldValue`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
      beforeUpload`),n("span",{class:"token punctuation"},","),a(`
      onSuccess`),n("span",{class:"token punctuation"},","),a(`
      onError`),n("span",{class:"token punctuation"},","),a(`
      fileOver`),n("span",{class:"token punctuation"},","),a(`
      fileDrop`),n("span",{class:"token punctuation"},","),a(`
      fileSelect`),n("span",{class:"token punctuation"},","),a(`
      deleteUploadedFile`),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".upload-demo .upload-trigger"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),a(" #fff"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px dashed #d9d9d9"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),a(" 6px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),a(" border-box"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 360px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),a(" 180px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),a(" pointer"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),a(" relative"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),a(" hidden"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),a(" flex"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),a(" column"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),a(" center"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".upload-demo .upload-trigger .link"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" #5e7ce0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),en=q(`<h3 id="d-upload-\u53C2\u6570" tabindex="-1">d-upload \u53C2\u6570 <a class="header-anchor" href="#d-upload-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>accept</td><td><code>string</code></td><td>--</td><td>\u53EF\u9009\uFF0C\u89C4\u5B9A\u80FD\u591F\u901A\u8FC7\u6587\u4EF6\u4E0A\u4F20\u8FDB\u884C\u63D0\u4EA4\u7684\u6587\u4EF6\u7C7B\u578B,<br>\u4F8B\u5982 <code>accept: &#39;.xls,.xlsx,.png&#39;</code></td><td><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td>before-upload</td><td><code>boolean Promise&lt;boolean&gt; </code></td><td>--</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u524D\u7684\u56DE\u8C03\uFF0C\u901A\u8FC7\u8FD4\u56DE<code>true</code> or <code>false</code>\uFF0C<br>\u63A7\u5236\u6587\u4EF6\u662F\u5426\u4E0A\u4F20,\u53C2\u6570\u4E3A\u6587\u4EF6\u4FE1\u606F\u53CA\u4E0A\u4F20\u914D\u7F6E</td><td><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u4E0A\u4F20\u7EC4\u4EF6</td><td><a href="#%E7%A6%81%E6%AD%A2%E4%B8%8A%E4%BC%A0">\u7981\u6B62\u4E0A\u4F20</a></td></tr><tr><td>droppable</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u62D6\u62FD</td><td><a href="#%E6%8B%96%E5%8A%A8%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>multiple</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6</td><td><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td>upload-options</td><td><a href="#iuploadoptions">IUploadOptions</a></td><td>--</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u914D\u7F6E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploaded-files</td><td><code>Array&lt;Object&gt;</code></td><td>[]</td><td>\u53EF\u9009\uFF0C\u83B7\u53D6\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="d-upload-\u4E8B\u4EF6" tabindex="-1">d-upload \u4E8B\u4EF6 <a class="header-anchor" href="#d-upload-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>delete-uploaded-file</td><td><code>(v: string) =&gt; void</code></td><td>\u5220\u9664\u4E0A\u4F20\u6587\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5220\u9664\u6587\u4EF6\u7684\u8DEF\u5F84\u4FE1\u606F</td><td><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td>file-drop</td><td><code>(v: any) =&gt; void</code></td><td>\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u5F53\u524D\u62D6\u62FD\u7684\u6587\u4EF6\u5217\u8868\u56DE\u8C03\uFF0C<br>\u5355\u6587\u4EF6\u4E0A\u4F20\u9ED8\u8BA4\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6587\u4EF6</td><td><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td>file-over</td><td><code>(v: boolean) =&gt; void</code></td><td>\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u6587\u4EF6\u79FB\u52A8\u5230\u53EF\u62D6\u653E\u533A\u57DF\u89E6\u53D1\u4E8B\u4EF6\uFF0C<br>\u53EF\u62D6\u52A8\u7684\u5143\u7D20\u79FB\u51FA\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>false</code>\uFF0C<br>\u5143\u7D20\u6B63\u5728\u62D6\u52A8\u5230\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>true</code></td><td><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td>file-select</td><td><code>(v: File) =&gt; void</code></td><td>\u6587\u4EF6\u9009\u62E9\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5DF2\u9009\u62E9\u6587\u4EF6\u4FE1\u606F</td><td><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr></tbody></table><h3 id="d-upload-\u63D2\u69FD" tabindex="-1">d-upload \u63D2\u69FD <a class="header-anchor" href="#d-upload-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>default</td><td>--</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td>uploaded-files</td><td>--</td><td>\u53EF\u9009\uFF0C\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u6A21\u677F\uFF0C\u53C2\u6570\u4E3A <code>{uploadedFiles, deleteFile}</code></td><td><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr></tbody></table><h3 id="iuploadoptions-\u7C7B\u578B" tabindex="-1">IUploadOptions \u7C7B\u578B <a class="header-anchor" href="#iuploadoptions-\u7C7B\u578B" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IUploadOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0A\u4F20\u63A5\u53E3\u5730\u5740</span>
  uri<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// http \u8BF7\u6C42\u65B9\u6CD5</span>
  method<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u9650\u5236</span>
  maximumSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u8BF7\u6C42headers</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8BA4\u8BC1token</span>
  authToken<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u8BA4\u8BC1token header\u6807\u793A</span>
  authTokenHeader<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4E0A\u4F20\u989D\u5916\u81EA\u5B9A\u4E49\u53C2\u6570</span>
  additionalParameter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u5B57\u6BB5\u540D\u79F0\uFF0C\u9ED8\u8BA4file</span>
  fileFieldName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token comment">// \u591A\u6587\u4EF6\u4E0A\u4F20,\u662F\u5426\u68C0\u67E5\u6587\u4EF6\u91CD\u540D\uFF0C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u91CD\u540D\u6587\u4EF6\u4E0D\u4F1A\u8986\u76D6\uFF0C\u5426\u5219\u4F1A\u8986\u76D6\u4E0A\u4F20</span>
  checkSameName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">// \u6307\u793A\u4E86\u662F\u5426\u8BE5\u4F7F\u7528\u7C7B\u4F3Ccookies,authorization headers(\u5934\u90E8\u6388\u6743)\u6216\u8005TLS\u5BA2\u6237\u7AEF\u8BC1\u4E66\u8FD9\u4E00\u7C7B\u8D44\u683C\u8BC1\u4E66\u6765\u521B\u5EFA\u4E00\u4E2A\u8DE8\u7AD9\u70B9\u8BBF\u95EE\u63A7\u5236\uFF08cross-site Access-Control\uFF09\u8BF7\u6C42</span>
  withCredentials<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token comment">//  \u624B\u52A8\u8BBE\u7F6E\u8FD4\u56DE\u6570\u636E\u7C7B\u578B</span>
  responseType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;arraybuffer&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;blob&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;json&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8);function un(u,o,t,k,F,p){const f=B("render-demo-0"),s=B("demo"),e=B("render-demo-1"),c=B("render-demo-2"),r=B("render-demo-3"),b=B("render-demo-4");return K(),J("div",null,[Q,E(s,{sourceCode:`<template>
  <d-upload v-model="uploadedFiles" :upload-options="uploadOptions" />
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const uploadedFiles = ref([]);
    const uploadOptions = ref({
      uri: 'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0',
    });

    return {
      uploadedFiles,
      uploadOptions,
    };
  },
};
<\/script>
`},{highlight:d(()=>[R]),default:d(()=>[E(f)]),_:1}),W,E(s,{sourceCode:`<template>
  <d-upload v-model="uploadedFiles" :upload-options="uploadOptions" multiple />
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const uploadedFiles = ref([]);
    const uploadOptions = ref({
      uri: 'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0',
    });

    return {
      uploadedFiles,
      uploadOptions,
    };
  },
};
<\/script>
`},{highlight:d(()=>[X]),default:d(()=>[E(e)]),_:1}),Y,E(s,{sourceCode:`<template>
  <d-upload v-model="uploadedFiles" :upload-options="uploadOptions" droppable />
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const uploadedFiles = ref([]);
    const uploadOptions = ref({
      uri: 'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0',
    });

    return {
      uploadedFiles,
      uploadOptions,
    };
  },
};
<\/script>
`},{highlight:d(()=>[Z]),default:d(()=>[E(c)]),_:1}),nn,E(s,{sourceCode:`<template>
  <d-upload v-model="uploadedFiles" :upload-options="uploadOptions" disabled />
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const uploadedFiles = ref([]);
    const uploadOptions = ref({
      uri: 'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0',
    });

    return {
      uploadedFiles,
      uploadOptions,
    };
  },
};
<\/script>
`},{highlight:d(()=>[an]),default:d(()=>[E(r)]),_:1}),sn,E(s,{sourceCode:`<template>
  <d-upload
    class="upload-demo"
    accept=".png"
    v-model="uploadedFiles"
    :upload-options="uploadOptions"
    droppable
    :on-success="onSuccess"
    :on-error="onError"
    :before-upload="beforeUpload"
    @file-over="fileOver"
    @file-drop="fileDrop"
    @file-select="fileSelect"
    @delete-uploaded-file="deleteUploadedFile"
  >
    <div class="upload-trigger">
      <div><d-icon name="upload" size="24px"></d-icon></div>
      <div style="margin-top: 20px;">
        \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216
        <span class="link">\u70B9\u51FB\u4E0A\u4F20</span>
      </div>
    </div>
    <template v-slot:uploaded-files="slotProps">
      <table class="table uploaded-files" v-if="slotProps.uploadedFiles.length > 0">
        <tbody>
          <tr v-for="(uploadedFile, index) in slotProps.uploadedFiles" :key="index" class="row">
            <td width="50%">
              <span>{{ uploadedFile.name }}</span>
            </td>
            <td width="25%">
              <span>Uploaded</span>
            </td>
            <td>
              <d-button size="xs" @click="(event) => slotProps.deleteFile(uploadedFile)">Delete</d-button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </d-upload>
</template>
<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    const uploadedFiles = ref([
      {
        name: 'food.jpeg',
        url: 'https://devui.design/home',
      },
      {
        name: 'food2.jpeg',
        url: 'https://devui.design/home',
      },
    ]);

    const uploadOptions = ref({
      uri: 'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0',
    });

    const beforeUpload = (file) => {
      console.log(file);
      return true;
    };

    const onSuccess = (result) => {
      console.log('success', result);
    };

    const onError = () => {
      console.log(error);
    };

    const fileOver = (fileInfo) => {
      console.log('fileInfo:', fileInfo);
    };

    const fileDrop = (fileInfo) => {
      console.log('fileInfo:', fileInfo);
    };

    const fileSelect = (fileInfo) => {
      console.log('fileInfo:', fileInfo);
    };

    const deleteUploadedFile = (fileInfo) => {
      console.log('fileInfo:', fileInfo);
    };

    watch(uploadedFiles, (newValue, oldValue) => {
      console.log('uploadedFiles', {
        newValue,
        oldValue,
      });
    });

    return {
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
      fileOver,
      fileDrop,
      fileSelect,
      deleteUploadedFile,
    };
  },
};
<\/script>

<style>
.upload-demo .upload-trigger {
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  box-sizing: border-box;
  width: 360px;
  height: 180px;
  text-align: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.upload-demo .upload-trigger .link {
  color: #5e7ce0;
}
</style>
`},{description:d(()=>[tn]),highlight:d(()=>[on]),default:d(()=>[E(b)]),_:1}),en])}var rn=G(M,[["render",un]]);export{kn as __pageData,rn as default};
