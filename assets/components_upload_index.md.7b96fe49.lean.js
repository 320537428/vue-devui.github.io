var L=Object.defineProperty;var S=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var j=(u,e,s)=>e in u?L(u,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[e]=s,v=(u,e)=>{for(var s in e||(e={}))H.call(e,s)&&j(u,s,e[s]);if(S)for(var s of S(e))G.call(e,s)&&j(u,s,e[s]);return u};import{_ as J,V as g,r as C,c as K,a as m,w as F,b as z,d as n,e as t,o as M}from"./app.298ae4f7.js";const Q={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,createVNode:e,openBlock:s,createElementBlock:i}=g;function f(a,o){const p=u("d-upload");return s(),i("div",null,[e(p,{modelValue:a.uploadedFiles,"onUpdate:modelValue":o[0]||(o[0]=k=>a.uploadedFiles=k),"upload-options":a.uploadOptions},null,8,["modelValue","upload-options"])])}const{ref:l}=g;return v({render:f},{setup(){const a=l([]),o=l({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:a,uploadOptions:o}}})}(),"render-demo-1":function(){const{resolveComponent:u,createVNode:e,openBlock:s,createElementBlock:i}=g;function f(a,o){const p=u("d-upload");return s(),i("div",null,[e(p,{modelValue:a.uploadedFiles,"onUpdate:modelValue":o[0]||(o[0]=k=>a.uploadedFiles=k),"upload-options":a.uploadOptions,multiple:"",limit:2,"on-exceed":a.handleExceed,"on-change":a.handleChange,"on-preview":a.onPreview},null,8,["modelValue","upload-options","on-exceed","on-change","on-preview"])])}const{ref:l}=g;return v({render:f},{setup(){const a=l([]),o=l({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:a,uploadOptions:o,handleExceed:(A,d)=>{throw console.log("onExceed\uFF1A",A),console.log("onExceed\uFF1A",d),new Error("\u6587\u4EF6\u6570\u4E0A\u9650\u4E3A 2")},handleChange:(A,d)=>{console.log("onChange\uFF1A",A),console.log("onChange\uFF1A",d)},onPreview:A=>{console.log("previewFile: ",A)}}}})}(),"render-demo-2":function(){const{resolveComponent:u,createVNode:e,openBlock:s,createElementBlock:i}=g;function f(a,o){const p=u("d-upload");return s(),i("div",null,[e(p,{modelValue:a.uploadedFiles,"onUpdate:modelValue":o[0]||(o[0]=k=>a.uploadedFiles=k),"upload-options":a.uploadOptions,droppable:""},null,8,["modelValue","upload-options"])])}const{ref:l}=g;return v({render:f},{setup(){const a=l([]),o=l({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:a,uploadOptions:o}}})}(),"render-demo-3":function(){const{resolveComponent:u,createVNode:e,createTextVNode:s,withCtx:i,createElementVNode:f,openBlock:l,createElementBlock:E}=g,a=s("\u624B\u52A8\u4E0A\u4F20"),o=s("\u6E05\u7A7A\u6587\u4EF6");function p(d,x){const h=u("d-upload"),b=u("d-button");return l(),E("div",null,[f("div",null,[e(h,{ref:"demoUpload",multiple:"",modelValue:d.uploadedFiles,"onUpdate:modelValue":x[0]||(x[0]=D=>d.uploadedFiles=D),"upload-options":d.uploadOptions,"auto-upload":!1},null,8,["modelValue","upload-options"]),e(b,{onClick:d.submit,style:{"margin-top":"20px"}},{default:i(()=>[a]),_:1},8,["onClick"]),e(b,{onClick:d.clear,style:{margin:"20px 0px 0px 10px"}},{default:i(()=>[o]),_:1},8,["onClick"])])])}const{defineComponent:k,ref:B}=g,A=k({setup(){const d=B([]),x=B({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"}),h=B(null);return{uploadedFiles:d,uploadOptions:x,demoUpload:h,submit:()=>{h.value.submit()},clear:()=>{h.value.clearFiles()}}}});return v({render:p},A)}(),"render-demo-4":function(){const{resolveComponent:u,createVNode:e,openBlock:s,createElementBlock:i}=g;function f(a,o){const p=u("d-upload");return s(),i("div",null,[e(p,{modelValue:a.uploadedFiles,"onUpdate:modelValue":o[0]||(o[0]=k=>a.uploadedFiles=k),"upload-options":a.uploadOptions,disabled:""},null,8,["modelValue","upload-options"])])}const{ref:l}=g;return v({render:f},{setup(){const a=l([]),o=l({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"});return{uploadedFiles:a,uploadOptions:o}}})}(),"render-demo-5":function(){const{resolveComponent:u,createVNode:e,createElementVNode:s,createTextVNode:i,renderList:f,Fragment:l,openBlock:E,createElementBlock:a,toDisplayString:o,withCtx:p,createCommentVNode:k}=g,B={class:"upload-trigger"},A=s("div",{style:{"margin-top":"20px"}},[i(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),s("span",{class:"link"},"\u70B9\u51FB\u4E0A\u4F20")],-1),d={key:0,class:"table uploaded-files"},x={width:"50%"},h=s("td",{width:"25%"},[s("span",null,"Uploaded")],-1),b=i("Delete");function D(r,_){const O=u("d-icon"),U=u("d-button"),V=u("d-upload");return E(),a("div",null,[e(V,{class:"upload-demo",accept:".png",modelValue:r.uploadedFiles,"onUpdate:modelValue":_[0]||(_[0]=y=>r.uploadedFiles=y),"upload-options":r.uploadOptions,droppable:"","on-success":r.onSuccess,"on-error":r.onError,"on-progress":r.onProgress,"before-upload":r.beforeUpload,onFileOver:r.fileOver,onFileDrop:r.fileDrop,onFileSelect:r.fileSelect,onDeleteUploadedFile:r.deleteUploadedFile},{"uploaded-files":p(y=>[y.uploadedFiles.length>0?(E(),a("table",d,[s("tbody",null,[(E(!0),a(l,null,f(y.uploadedFiles,(w,q)=>(E(),a("tr",{key:q,class:"row"},[s("td",x,[s("span",null,o(w.name),1)]),h,s("td",null,[e(U,{size:"xs",onClick:P=>y.deleteFile(w)},{default:p(()=>[b]),_:2},1032,["onClick"])])]))),128))])])):k("v-if",!0)]),default:p(()=>[s("div",B,[s("div",null,[e(O,{name:"upload",size:"24px"})]),A])]),_:1},8,["modelValue","upload-options","on-success","on-error","on-progress","before-upload","onFileOver","onFileDrop","onFileSelect","onDeleteUploadedFile"])])}const{ref:N,watch:T}=g;return v({render:D},{setup(){const r=N([{name:"food.jpeg",url:"https://devui.design/home"},{name:"food2.jpeg",url:"https://devui.design/home"}]),_=N({uri:"https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0"}),O=c=>(console.log(c),!0),U=c=>{console.log("success",c)},V=()=>{console.log(error)},y=(c,I)=>{console.log("selectFile: ",c),console.log("uploadedFiles: ",I)},w=c=>{console.log("fileInfo:",c)},q=c=>{console.log("fileInfo:",c)},P=c=>{console.log("fileInfo:",c)},$=c=>{console.log("fileInfo:",c)};return T(r,(c,I)=>{console.log("uploadedFiles",{newValue:c,oldValue:I})}),{uploadedFiles:r,uploadOptions:_,beforeUpload:O,onSuccess:U,onError:V,onProgress:y,fileOver:w,fileDrop:q,fileSelect:P,deleteUploadedFile:$}}})}()}},En='{"title":"Upload \u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u591A\u6587\u4EF6\u4E0A\u4F20","slug":"\u591A\u6587\u4EF6\u4E0A\u4F20"},{"level":3,"title":"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20","slug":"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20"},{"level":3,"title":"\u624B\u52A8\u4E0A\u4F20\u548C\u6E05\u7A7A","slug":"\u624B\u52A8\u4E0A\u4F20\u548C\u6E05\u7A7A"},{"level":3,"title":"\u7981\u6B62\u4E0A\u4F20","slug":"\u7981\u6B62\u4E0A\u4F20"},{"level":3,"title":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","slug":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20"},{"level":3,"title":"Upload \u53C2\u6570","slug":"upload-\u53C2\u6570"},{"level":3,"title":"Upload \u4E8B\u4EF6","slug":"upload-\u4E8B\u4EF6"},{"level":3,"title":"Upload \u65B9\u6CD5","slug":"upload-\u65B9\u6CD5"},{"level":3,"title":"Upload \u63D2\u69FD","slug":"upload-\u63D2\u69FD"},{"level":3,"title":"Uplaod \u7C7B\u578B\u5B9A\u4E49","slug":"uplaod-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/upload/index.md","lastUpdated":1655780057289}',R=z('<h1 id="upload-\u4E0A\u4F20" tabindex="-1">Upload \u4E0A\u4F20 <a class="header-anchor" href="#upload-\u4E0A\u4F20" aria-hidden="true">#</a></h1><p>\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\u3002</p><h4 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h4><p>\u5F53\u9700\u8981\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230\u540E\u7AEF\u670D\u52A1\u5668\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',5),W=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),X=n("h3",{id:"\u591A\u6587\u4EF6\u4E0A\u4F20",tabindex:"-1"},[t("\u591A\u6587\u4EF6\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u591A\u6587\u4EF6\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),Y=n("p",null,[t("\u4F7F\u7528"),n("code",null,"multiple"),t("\u5C5E\u6027\u53EF\u4EE5\u652F\u6301\u591A\u6587\u4EF6\u4E0A\u4F20\uFF0C\u540C\u65F6\u4F7F\u7528"),n("code",null,"limit"),t("\u5C5E\u6027\u8BBE\u7F6E\u6587\u4EF6\u6570\u7684\u4E0A\u9650\uFF0C\u5F53\u4E0A\u4F20\u6570\u8D85\u8FC7\u9650\u5236\u65F6\u4F1A\u89E6\u53D1"),n("code",null,"on-exceed"),t("\u94A9\u5B50\u51FD\u6570\u3002")],-1),Z=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-upload")]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadOptions"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"multiple"),t(`
    `),n("span",{class:"token attr-name"},":limit"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("2"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":on-exceed"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleExceed"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":on-change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":on-preview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onPreview"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},"/>")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadedFiles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleExceed"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("files"),n("span",{class:"token punctuation"},","),t(" uploadFiles")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onExceed\uFF1A'"),n("span",{class:"token punctuation"},","),t(" files"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onExceed\uFF1A'"),n("span",{class:"token punctuation"},","),t(" uploadFiles"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"throw"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6587\u4EF6\u6570\u4E0A\u9650\u4E3A 2'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("files"),n("span",{class:"token punctuation"},","),t(" uploadFiles")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onChange\uFF1A'"),n("span",{class:"token punctuation"},","),t(" files"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onChange\uFF1A'"),n("span",{class:"token punctuation"},","),t(" uploadFiles"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onPreview"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'previewFile: '"),n("span",{class:"token punctuation"},","),t(" file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),t(`
      uploadOptions`),n("span",{class:"token punctuation"},","),t(`
      handleExceed`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      onPreview`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),nn=n("h3",{id:"\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20",tabindex:"-1"},[t("\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),an=n("h3",{id:"\u624B\u52A8\u4E0A\u4F20\u548C\u6E05\u7A7A",tabindex:"-1"},[t("\u624B\u52A8\u4E0A\u4F20\u548C\u6E05\u7A7A "),n("a",{class:"header-anchor",href:"#\u624B\u52A8\u4E0A\u4F20\u548C\u6E05\u7A7A","aria-hidden":"true"},"#")],-1),sn=n("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E"),n("code",null,"auto-upload"),t("\u4E3A false \u53EF\u963B\u6B62\u9009\u62E9\u6587\u4EF6\u540E\u7ACB\u523B\u4E0A\u4F20\u7684\u884C\u4E3A\uFF0C\u7136\u540E\u901A\u8FC7"),n("code",null,"submit"),t("\u65B9\u6CD5\u8FDB\u884C\u624B\u52A8\u4E0A\u4F20\u3002 \u4F7F\u7528"),n("code",null,"clearFiles"),t("\u65B9\u6CD5\u53EF\u4EE5\u6E05\u7A7A\u5DF2\u4E0A\u4F20\u548C\u5DF2\u9009\u62E9\u7684\u6587\u4EF6\u3002")],-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-upload")]),t(),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("demoUpload"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"multiple"),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadOptions"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":auto-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("submit"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("\u624B\u52A8\u4E0A\u4F20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clear"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),t(" 20px 0px 0px 10px"),n("span",{class:"token punctuation"},";")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("\u6E05\u7A7A\u6587\u4EF6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadedFiles "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploadOptions "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token literal-property property"},"uri"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" demoUpload "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"submit"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demoUpload`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"submit"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"clear"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      demoUpload`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clearFiles"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),t(`
      uploadOptions`),n("span",{class:"token punctuation"},","),t(`
      demoUpload`),n("span",{class:"token punctuation"},","),t(`
      submit`),n("span",{class:"token punctuation"},","),t(`
      clear`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),on=n("h3",{id:"\u7981\u6B62\u4E0A\u4F20",tabindex:"-1"},[t("\u7981\u6B62\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u7981\u6B62\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),un=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
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
`)])])],-1),ln=n("h3",{id:"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20",tabindex:"-1"},[t("\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),pn=n("div",null,"\u7528\u6237\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u652F\u6301\u6587\u4EF6\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20\u3002",-1),cn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-upload")]),t(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("upload-demo"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"accept"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t(".png"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploadOptions"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"droppable"),t(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onSuccess"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onError"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":on-progress"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("onProgress"),n("span",{class:"token punctuation"},'"')]),t(`
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

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"onProgress"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("selectFile"),n("span",{class:"token punctuation"},","),t(" uploadedFiles")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'selectFile: '"),n("span",{class:"token punctuation"},","),t(" selectFile"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles: '"),n("span",{class:"token punctuation"},","),t(" uploadedFiles"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
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
      onProgress`),n("span",{class:"token punctuation"},","),t(`
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
`)])])],-1),kn=z(`<h3 id="upload-\u53C2\u6570" tabindex="-1">Upload \u53C2\u6570 <a class="header-anchor" href="#upload-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">accept</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u89C4\u5B9A\u80FD\u591F\u901A\u8FC7\u6587\u4EF6\u4E0A\u4F20\u8FDB\u884C\u63D0\u4EA4\u7684\u6587\u4EF6\u7C7B\u578B,<br>\u4F8B\u5982 <code>accept: &#39;.xls,.xlsx,.png&#39;</code></td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">before-upload</td><td style="text-align:left;"><code>boolean Promise&lt;boolean&gt; </code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4E0A\u4F20\u524D\u7684\u56DE\u8C03\uFF0C\u901A\u8FC7\u8FD4\u56DE<code>true</code> or <code>false</code>\uFF0C<br>\u63A7\u5236\u6587\u4EF6\u662F\u5426\u4E0A\u4F20,\u53C2\u6570\u4E3A\u6587\u4EF6\u4FE1\u606F\u53CA\u4E0A\u4F20\u914D\u7F6E</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">disabled</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u4E0A\u4F20\u7EC4\u4EF6</td><td style="text-align:left;"><a href="#%E7%A6%81%E6%AD%A2%E4%B8%8A%E4%BC%A0">\u7981\u6B62\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">droppable</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u62D6\u62FD</td><td style="text-align:left;"><a href="#%E6%8B%96%E5%8A%A8%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">multiple</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6</td><td style="text-align:left;"><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">upload-options</td><td style="text-align:left;"><a href="#iuploadoptions">IUploadOptions</a></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4E0A\u4F20\u914D\u7F6E</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">uploaded-files</td><td style="text-align:left;"><code>Array&lt;Object&gt;</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u83B7\u53D6\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td style="text-align:left;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:left;">on-success</td><td style="text-align:left;"><code>function([{file, response}])</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u4EF6\u4E0A\u4F20\u6210\u529F\u65F6\u7684\u94A9\u5B50</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">on-error</td><td style="text-align:left;"><code>function({file, response})</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u4EF6\u4E0A\u4F20\u5931\u8D25\u65F6\u7684\u94A9\u5B50</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">on-exceed</td><td style="text-align:left;"><code>function(files, uploadFiles)</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u4EF6\u4E0A\u4F20\u6570\u8D85\u51FA\u9650\u5236\u65F6\u7684\u94A9\u5B50</td><td style="text-align:left;"><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">on-change</td><td style="text-align:left;"><code>function(files, uploadFiles)</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u65F6\u7684\u94A9\u5B50\uFF0C\u6DFB\u52A0\u6587\u4EF6\u3001\u4E0A\u4F20\u6587\u4EF6\u6210\u529F\u548C\u4E0A\u4F20\u6587\u4EF6\u5931\u8D25\u65F6\u90FD\u4F1A\u88AB\u8C03\u7528</td><td style="text-align:left;"><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">on-progress</td><td style="text-align:left;"><code>function(files, uploadFiles)</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u6587\u4EF6\u4E0A\u4F20\u65F6\u7684\u94A9\u5B50</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">on-preview</td><td style="text-align:left;"><code>function(file)</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u70B9\u51FB\u6587\u4EF6\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u65F6\u7684\u94A9\u5B50</td><td style="text-align:left;"><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">limit</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u5141\u8BB8\u4E0A\u4F20\u6587\u4EF6\u7684\u6700\u5927\u6570\u91CF</td><td style="text-align:left;"><a href="#%E5%A4%9A%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0">\u591A\u6587\u4EF6\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">auto-upload</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">true</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u662F\u5426\u5728\u9009\u53D6\u6587\u4EF6\u540E\u7ACB\u5373\u4E0A\u4F20</td><td style="text-align:left;"><a href="#%E6%89%8B%E5%8A%A8%E4%B8%8A%E4%BC%A0%E5%92%8C%E6%B8%85%E7%A9%BA">\u624B\u52A8\u4E0A\u4F20\u548C\u6E05\u7A7A</a></td></tr><tr><td style="text-align:left;">http-request</td><td style="text-align:left;"><code>function(files)</code></td><td style="text-align:left;">-</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0Cfiles \u4E3A\u9009\u62E9\u7684\u6587\u4EF6\u5BF9\u8C61\u5217\u8868</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="upload-\u4E8B\u4EF6" tabindex="-1">Upload \u4E8B\u4EF6 <a class="header-anchor" href="#upload-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6\u540D</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">delete-uploaded-file</td><td style="text-align:left;"><code>(v: string) =&gt; void</code></td><td style="text-align:left;">\u5220\u9664\u4E0A\u4F20\u6587\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5220\u9664\u6587\u4EF6\u7684\u8DEF\u5F84\u4FE1\u606F</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">file-drop</td><td style="text-align:left;"><code>(v: any) =&gt; void</code></td><td style="text-align:left;">\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u5F53\u524D\u62D6\u62FD\u7684\u6587\u4EF6\u5217\u8868\u56DE\u8C03\uFF0C<br>\u5355\u6587\u4EF6\u4E0A\u4F20\u9ED8\u8BA4\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6587\u4EF6</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">file-over</td><td style="text-align:left;"><code>(v: boolean) =&gt; void</code></td><td style="text-align:left;">\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u6587\u4EF6\u79FB\u52A8\u5230\u53EF\u62D6\u653E\u533A\u57DF\u89E6\u53D1\u4E8B\u4EF6\uFF0C<br>\u53EF\u62D6\u52A8\u7684\u5143\u7D20\u79FB\u51FA\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>false</code>\uFF0C<br>\u5143\u7D20\u6B63\u5728\u62D6\u52A8\u5230\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>true</code></td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">file-select</td><td style="text-align:left;"><code>(v: File) =&gt; void</code></td><td style="text-align:left;">\u6587\u4EF6\u9009\u62E9\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5DF2\u9009\u62E9\u6587\u4EF6\u4FE1\u606F</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr></tbody></table><h3 id="upload-\u65B9\u6CD5" tabindex="-1">Upload \u65B9\u6CD5 <a class="header-anchor" href="#upload-\u65B9\u6CD5" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u65B9\u6CD5\u540D</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">submit</td><td style="text-align:left;">\u7528\u4E8E\u624B\u52A8\u4E0A\u4F20\u9009\u62E9\u7684\u6587\u4EF6</td><td style="text-align:left;"><a href="#%E6%89%8B%E5%8A%A8%E4%B8%8A%E4%BC%A0%E5%92%8C%E6%B8%85%E7%A9%BA">\u624B\u52A8\u4E0A\u4F20\u548C\u6E05\u7A7A</a></td></tr><tr><td style="text-align:left;">clearFiles</td><td style="text-align:left;">\u7528\u4E8E\u6E05\u7A7A\u5DF2\u4E0A\u4F20\u548C\u5DF2\u9009\u62E9\u7684\u6587\u4EF6\u5217\u8868\uFF08\u4E0D\u652F\u6301\u5728 before-upload \u4E2D\u8C03\u7528\uFF09</td><td style="text-align:left;"><a href="#%E6%89%8B%E5%8A%A8%E4%B8%8A%E4%BC%A0%E5%92%8C%E6%B8%85%E7%A9%BA">\u624B\u52A8\u4E0A\u4F20\u548C\u6E05\u7A7A</a></td></tr></tbody></table><h3 id="upload-\u63D2\u69FD" tabindex="-1">Upload \u63D2\u69FD <a class="header-anchor" href="#upload-\u63D2\u69FD" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u63D2\u69FD\u540D</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:left;">default</td><td style="text-align:left;">--</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr><tr><td style="text-align:left;">uploaded-files</td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49\u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u6A21\u677F\uFF0C\u53C2\u6570\u4E3A <code>{uploadedFiles, deleteFile}</code></td><td style="text-align:left;"><a href="#%E4%BB%BB%E6%84%8F%E5%8C%BA%E5%9F%9F%E4%B8%8A%E4%BC%A0">\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20</a></td></tr></tbody></table><h3 id="uplaod-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Uplaod \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#uplaod-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="iuploadoptions" tabindex="-1">IUploadOptions <a class="header-anchor" href="#iuploadoptions" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IUploadOptions</span> <span class="token punctuation">{</span>
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
</code></pre></div>`,11);function rn(u,e,s,i,f,l){const E=C("render-demo-0"),a=C("demo"),o=C("render-demo-1"),p=C("render-demo-2"),k=C("render-demo-3"),B=C("render-demo-4"),A=C("render-demo-5");return M(),K("div",null,[R,m(a,{sourceCode:`<template>
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
`},{highlight:F(()=>[W]),default:F(()=>[m(E)]),_:1}),X,Y,m(a,{sourceCode:`<template>
  <d-upload
    v-model="uploadedFiles"
    :upload-options="uploadOptions"
    multiple
    :limit="2"
    :on-exceed="handleExceed"
    :on-change="handleChange"
    :on-preview="onPreview"
  />
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const uploadedFiles = ref([]);
    const uploadOptions = ref({
      uri: 'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0',
    });
    const handleExceed = (files, uploadFiles) => {
      console.log('onExceed\uFF1A', files);
      console.log('onExceed\uFF1A', uploadFiles);
      throw new Error('\u6587\u4EF6\u6570\u4E0A\u9650\u4E3A 2');
    };
    const handleChange = (files, uploadFiles) => {
      console.log('onChange\uFF1A', files);
      console.log('onChange\uFF1A', uploadFiles);
    };

    const onPreview = (file) => {
      console.log('previewFile: ', file);
    };
    return {
      uploadedFiles,
      uploadOptions,
      handleExceed,
      handleChange,
      onPreview,
    };
  },
};
<\/script>
`},{highlight:F(()=>[Z]),default:F(()=>[m(o)]),_:1}),nn,m(a,{sourceCode:`<template>
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
`},{highlight:F(()=>[tn]),default:F(()=>[m(p)]),_:1}),an,sn,m(a,{sourceCode:`<template>
  <div>
    <d-upload ref="demoUpload" multiple v-model="uploadedFiles" :upload-options="uploadOptions" :auto-upload="false" />
    <d-button @click="submit" style="margin-top: 20px">\u624B\u52A8\u4E0A\u4F20</d-button>
    <d-button @click="clear" style="margin: 20px 0px 0px 10px;">\u6E05\u7A7A\u6587\u4EF6</d-button>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const uploadedFiles = ref([]);
    const uploadOptions = ref({
      uri: 'https://run.mocky.io/v3/132b3ea3-23ea-436b-aed4-c43ef9d116f0',
    });
    const demoUpload = ref(null);
    const submit = () => {
      demoUpload.value.submit();
    };
    const clear = () => {
      demoUpload.value.clearFiles();
    };

    return {
      uploadedFiles,
      uploadOptions,
      demoUpload,
      submit,
      clear,
    };
  },
});
<\/script>
`},{highlight:F(()=>[en]),default:F(()=>[m(k)]),_:1}),on,m(a,{sourceCode:`<template>
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
`},{highlight:F(()=>[un]),default:F(()=>[m(B)]),_:1}),ln,m(a,{sourceCode:`<template>
  <d-upload
    class="upload-demo"
    accept=".png"
    v-model="uploadedFiles"
    :upload-options="uploadOptions"
    droppable
    :on-success="onSuccess"
    :on-error="onError"
    :on-progress="onProgress"
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

    const onProgress = (selectFile, uploadedFiles) => {
      console.log('selectFile: ', selectFile);
      console.log('uploadedFiles: ', uploadedFiles);
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
      onProgress,
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
`},{description:F(()=>[pn]),highlight:F(()=>[cn]),default:F(()=>[m(A)]),_:1}),kn])}var gn=J(Q,[["render",rn]]);export{En as __pageData,gn as default};
