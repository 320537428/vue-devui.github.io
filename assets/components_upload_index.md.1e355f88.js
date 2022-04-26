var $=Object.defineProperty;var O=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var V=(u,e,s)=>e in u?$(u,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[e]=s,h=(u,e)=>{for(var s in e||(e={}))L.call(e,s)&&V(u,s,e[s]);if(O)for(var s of O(e))H.call(e,s)&&V(u,s,e[s]);return u};import{_ as G,r as B,c as J,a as g,w as d,b as U,d as n,e as t,o as K,V as E}from"./app.020d8265.js";const M={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,createVNode:e,openBlock:s,createElementBlock:k}=E;function F(a,o){const l=u("d-upload");return s(),k("div",null,[e(l,{modelValue:a.uploadedFiles,"onUpdate:modelValue":o[0]||(o[0]=r=>a.uploadedFiles=r),"upload-options":a.uploadOptions},null,8,["modelValue","upload-options"])])}const{ref:p}=E;return h({render:F},{setup(){const a=p([]),o=p({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:a,uploadOptions:o}}})}(),"render-demo-1":function(){const{resolveComponent:u,createVNode:e,openBlock:s,createElementBlock:k}=E;function F(a,o){const l=u("d-upload");return s(),k("div",null,[e(l,{modelValue:a.uploadedFiles,"onUpdate:modelValue":o[0]||(o[0]=r=>a.uploadedFiles=r),"upload-options":a.uploadOptions,multiple:""},null,8,["modelValue","upload-options"])])}const{ref:p}=E;return h({render:F},{setup(){const a=p([]),o=p({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:a,uploadOptions:o}}})}(),"render-demo-2":function(){const{resolveComponent:u,createVNode:e,openBlock:s,createElementBlock:k}=E;function F(a,o){const l=u("d-upload");return s(),k("div",null,[e(l,{modelValue:a.uploadedFiles,"onUpdate:modelValue":o[0]||(o[0]=r=>a.uploadedFiles=r),"upload-options":a.uploadOptions,droppable:""},null,8,["modelValue","upload-options"])])}const{ref:p}=E;return h({render:F},{setup(){const a=p([]),o=p({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:a,uploadOptions:o}}})}(),"render-demo-3":function(){const{resolveComponent:u,createVNode:e,openBlock:s,createElementBlock:k}=E;function F(a,o){const l=u("d-upload");return s(),k("div",null,[e(l,{modelValue:a.uploadedFiles,"onUpdate:modelValue":o[0]||(o[0]=r=>a.uploadedFiles=r),"upload-options":a.uploadOptions,disabled:""},null,8,["modelValue","upload-options"])])}const{ref:p}=E;return h({render:F},{setup(){const a=p([]),o=p({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:a,uploadOptions:o}}})}(),"render-demo-4":function(){const{resolveComponent:u,createVNode:e,createElementVNode:s,createTextVNode:k,renderList:F,Fragment:p,openBlock:f,createElementBlock:a,toDisplayString:o,withCtx:l,createCommentVNode:r}=E,v={class:"upload-trigger"},q=s("div",{style:{"margin-top":"20px"}},[k(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),s("span",{class:"link"},"\u70B9\u51FB\u4E0A\u4F20")],-1),I={key:0,class:"table uploaded-files"},S={width:"50%"},N=s("td",{width:"25%"},[s("span",null,"Uploaded")],-1),j=k("Delete");function z(c,y){const b=u("d-icon"),C=u("d-button"),D=u("d-upload");return f(),a("div",null,[e(D,{class:"upload-demo",accept:".png",modelValue:c.uploadedFiles,"onUpdate:modelValue":y[0]||(y[0]=m=>c.uploadedFiles=m),"upload-options":c.uploadOptions,droppable:"","on-success":c.onSuccess,"on-error":c.onError,"before-upload":c.beforeUpload,onFileOver:c.fileOver,onFileDrop:c.fileDrop,onFileSelect:c.fileSelect,onDeleteUploadedFile:c.deleteUploadedFile},{"uploaded-files":l(m=>[m.uploadedFiles.length>0?(f(),a("table",I,[s("tbody",null,[(f(!0),a(p,null,F(m.uploadedFiles,(A,x)=>(f(),a("tr",{key:x,class:"row"},[s("td",S,[s("span",null,o(A.name),1)]),N,s("td",null,[e(C,{size:"xs",onClick:w=>m.deleteFile(A)},{default:l(()=>[j]),_:2},1032,["onClick"])])]))),128))])])):r("v-if",!0)]),default:l(()=>[s("div",v,[s("div",null,[e(b,{name:"upload",size:"24px"})]),q])]),_:1},8,["modelValue","upload-options","on-success","on-error","before-upload","onFileOver","onFileDrop","onFileSelect","onDeleteUploadedFile"])])}const{ref:_,watch:P}=E;return h({render:z},{setup(){const c=_([{name:"food.jpeg",url:"https://devui.design/home"},{name:"food2.jpeg",url:"https://devui.design/home"}]),y=_({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"}),b=i=>(console.log(i),!0),C=i=>{console.log("success",i)},D=()=>{console.log(error)},m=i=>{console.log("fileInfo:",i)},A=i=>{console.log("fileInfo:",i)},x=i=>{console.log("fileInfo:",i)},w=i=>{console.log("fileInfo:",i)};return P(c,(i,T)=>{console.log("uploadedFiles",{newValue:i,oldValue:T})}),{uploadedFiles:c,uploadOptions:y,beforeUpload:b,onSuccess:C,onError:D,fileOver:m,fileDrop:A,fileSelect:x,deleteUploadedFile:w}}})}()}},kn='{"title":"Upload \u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u6587\u4EF6\u4E0A\u4F20","slug":"\u591A\u6587\u4EF6\u4E0A\u4F20"},{"level":3,"title":"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20","slug":"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20"},{"level":3,"title":"\u7981\u6B62\u4E0A\u4F20","slug":"\u7981\u6B62\u4E0A\u4F20"},{"level":3,"title":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","slug":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20"},{"level":3,"title":"Upload \u53C2\u6570","slug":"upload-\u53C2\u6570"},{"level":3,"title":"Upload \u4E8B\u4EF6","slug":"upload-\u4E8B\u4EF6"},{"level":3,"title":"Upload \u63D2\u69FD","slug":"upload-\u63D2\u69FD"},{"level":3,"title":"Uplaod \u7C7B\u578B\u5B9A\u4E49","slug":"uplaod-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/upload/index.md","lastUpdated":1650456022733}',Q=U('<h1 id="upload-\u4E0A\u4F20" tabindex="-1">Upload \u4E0A\u4F20 <a class="header-anchor" href="#upload-\u4E0A\u4F20" aria-hidden="true">#</a></h1><p>\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230\u540E\u7AEF\u670D\u52A1\u5668\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),R=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-upload")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadedFiles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),t(`
      uploadOptions`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("h3",{id:"\u591A\u6587\u4EF6\u4E0A\u4F20",tabindex:"-1"},[t("\u591A\u6587\u4EF6\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u591A\u6587\u4EF6\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-upload")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"multiple"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadedFiles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),t(`
      uploadOptions`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Y=n("h3",{id:"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20",tabindex:"-1"},[t("\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-upload")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"droppable"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadedFiles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),t(`
      uploadOptions`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=n("h3",{id:"\u7981\u6B62\u4E0A\u4F20",tabindex:"-1"},[t("\u7981\u6B62\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u7981\u6B62\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-upload")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"disabled"),t(),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadedFiles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),t(`
      uploadOptions`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=n("h3",{id:"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20",tabindex:"-1"},[t("\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),sn=n("div",null,"\u7528\u6237\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u652F\u6301\u6587\u4EF6\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20\u3002",-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-upload")]),t(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("upload-demo"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"accept"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(".png"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadOptions"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"droppable"),t(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSuccess"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onError"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@file-over"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileOver"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@file-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileDrop"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@file-select"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileSelect"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@delete-uploaded-file"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("deleteUploadedFile"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("upload-trigger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-icon")]),t(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("upload"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("24px"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-icon")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
        \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("link"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("\u70B9\u51FB\u4E0A\u4F20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),t("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("table")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("table uploaded-files"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("slotProps.uploadedFiles.length > 0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tbody")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("tr")]),t(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(uploadedFile, index) in slotProps.uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("index"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("{{ uploadedFile.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),t(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),n("span",{class:"token punctuation"},">")]),t("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("xs"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("(event) => slotProps.deleteFile(uploadedFile)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("td")]),n("span",{class:"token punctuation"},">")]),t(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tr")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("tbody")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("table")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref"),n("span",{class:"token punctuation"},","),t(" watch "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadedFiles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'food.jpeg'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://devui.design/home'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'food2.jpeg'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token literal-property property"},"url"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://devui.design/home'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" uploadOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"beforeUpload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onSuccess"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),t(" result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onError"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fileOver"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"fileInfo"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileInfo:'"),n("span",{class:"token punctuation"},","),t(" fileInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fileDrop"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"fileInfo"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileInfo:'"),n("span",{class:"token punctuation"},","),t(" fileInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"fileSelect"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"fileInfo"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileInfo:'"),n("span",{class:"token punctuation"},","),t(" fileInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"deleteUploadedFile"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"fileInfo"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileInfo:'"),n("span",{class:"token punctuation"},","),t(" fileInfo"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),t("uploadedFiles"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("newValue"),n("span",{class:"token punctuation"},","),t(" oldValue")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        newValue`),n("span",{class:"token punctuation"},","),t(`
        oldValue`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),t(`
      uploadOptions`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
      onSuccess`),n("span",{class:"token punctuation"},","),t(`
      onError`),n("span",{class:"token punctuation"},","),t(`
      fileOver`),n("span",{class:"token punctuation"},","),t(`
      fileDrop`),n("span",{class:"token punctuation"},","),t(`
      fileSelect`),n("span",{class:"token punctuation"},","),t(`
      deleteUploadedFile`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".upload-demo .upload-trigger"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"background-color"),n("span",{class:"token punctuation"},":"),t(" #fff"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 1px dashed #d9d9d9"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 6px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"box-sizing"),n("span",{class:"token punctuation"},":"),t(" border-box"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 360px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 180px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"cursor"),n("span",{class:"token punctuation"},":"),t(" pointer"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"overflow"),n("span",{class:"token punctuation"},":"),t(" hidden"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" flex"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"flex-direction"),n("span",{class:"token punctuation"},":"),t(" column"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"justify-content"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".upload-demo .upload-trigger .link"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #5e7ce0"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),on=U(`<h3 id="upload-\u53C2\u6570" tabindex="-1">Upload \u53C2\u6570 <a class="header-anchor" href="#upload-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">accept</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u89C4\u5B9A\u80FD\u591F\u901A\u8FC7\u6587\u4EF6\u4E0A\u4F20\u8FDB\u884C\u63D0\u4EA4\u7684\u6587\u4EF6\u7C7B\u578B,<br>\u4F8B\u5982 <code>accept: &#39;.xls,.xlsx,.png&#39;</code></td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">before-upload</td><td style="text-align:left;"><code>boolean Promise&lt;boolean&gt; </code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4E0A\u4F20\u524D\u7684\u56DE\u8C03\uFF0C\u901A\u8FC7\u8FD4\u56DE<code>true</code> or <code>false</code>\uFF0C<br>\u63A7\u5236\u6587\u4EF6\u662F\u5426\u4E0A\u4F20,\u53C2\u6570\u4E3A\u6587\u4EF6\u4FE1\u606F\u53CA\u4E0A\u4F20\u914D\u7F6E</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u4E0A\u4F20\u7EC4\u4EF6</td><td style="text-align:left;"><a href="#%E7%A6%81%E6%AD%A2%E4%B8%8A%E4%BC%A0">\u7981\u6B62\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">droppable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u62D6\u62FD</td><td style="text-align:left;"><a href="#%E6%8B%96%E5%8A%A8%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6</td><td style="text-align:left;"><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">upload-options</td><td style="text-align:left;"><a href="#iuploadoptions">IUploadOptions</a></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4E0A\u4F20\u914D\u7F6E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">uploaded-files</td><td style="text-align:left;"><code>Array&lt;Object&gt;</code></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u83B7\u53D6\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="upload-\u4E8B\u4EF6" tabindex="-1">Upload \u4E8B\u4EF6 <a class="header-anchor" href="#upload-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">delete-uploaded-file</td><td style="text-align:left;"><code>(v: string) =&gt; void</code></td><td style="text-align:left;">\u5220\u9664\u4E0A\u4F20\u6587\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5220\u9664\u6587\u4EF6\u7684\u8DEF\u5F84\u4FE1\u606F</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">file-drop</td><td style="text-align:left;"><code>(v: any) =&gt; void</code></td><td style="text-align:left;">\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u5F53\u524D\u62D6\u62FD\u7684\u6587\u4EF6\u5217\u8868\u56DE\u8C03\uFF0C<br>\u5355\u6587\u4EF6\u4E0A\u4F20\u9ED8\u8BA4\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6587\u4EF6</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">file-over</td><td style="text-align:left;"><code>(v: boolean) =&gt; void</code></td><td style="text-align:left;">\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u6587\u4EF6\u79FB\u52A8\u5230\u53EF\u62D6\u653E\u533A\u57DF\u89E6\u53D1\u4E8B\u4EF6\uFF0C<br>\u53EF\u62D6\u52A8\u7684\u5143\u7D20\u79FB\u51FA\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>false</code>\uFF0C<br>\u5143\u7D20\u6B63\u5728\u62D6\u52A8\u5230\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>true</code></td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">file-select</td><td style="text-align:left;"><code>(v: File) =&gt; void</code></td><td style="text-align:left;">\u6587\u4EF6\u9009\u62E9\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5DF2\u9009\u62E9\u6587\u4EF6\u4FE1\u606F</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr></tbody></table><h3 id="upload-\u63D2\u69FD" tabindex="-1">Upload \u63D2\u69FD <a class="header-anchor" href="#upload-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">--</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">uploaded-files</td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u6A21\u677F\uFF0C\u53C2\u6570\u4E3A <code>{uploadedFiles, deleteFile}</code></td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr></tbody></table><h3 id="uplaod-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Uplaod \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#uplaod-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="iuploadoptions" tabindex="-1">IUploadOptions <a class="header-anchor" href="#iuploadoptions" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IUploadOptions</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,9);function un(u,e,s,k,F,p){const f=B("render-demo-0"),a=B("demo"),o=B("render-demo-1"),l=B("render-demo-2"),r=B("render-demo-3"),v=B("render-demo-4");return K(),J("div",null,[Q,g(a,{sourceCode:`<template>
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
`},{highlight:d(()=>[R]),default:d(()=>[g(f)]),_:1}),W,g(a,{sourceCode:`<template>
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
`},{highlight:d(()=>[X]),default:d(()=>[g(o)]),_:1}),Y,g(a,{sourceCode:`<template>
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
`},{highlight:d(()=>[Z]),default:d(()=>[g(l)]),_:1}),nn,g(a,{sourceCode:`<template>
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
`},{highlight:d(()=>[tn]),default:d(()=>[g(r)]),_:1}),an,g(a,{sourceCode:`<template>
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
`},{description:d(()=>[sn]),highlight:d(()=>[en]),default:d(()=>[g(v)]),_:1}),on])}var rn=G(M,[["render",un]]);export{kn as __pageData,rn as default};
