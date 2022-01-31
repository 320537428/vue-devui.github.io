var W=Object.defineProperty;var J=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var K=(c,l,t)=>l in c?W(c,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[l]=t,x=(c,l)=>{for(var t in l||(l={}))X.call(l,t)&&K(c,t,l[t]);if(J)for(var t of J(l))Y.call(l,t)&&K(c,t,l[t]);return c};import{_ as Z,r as q,c as nn,b,w as A,a as Q,d as n,e as a,o as an,V as U}from"./app.14dd1803.js";const sn={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:c,createVNode:l,openBlock:t,createElementBlock:m}=U;function g(p,s){const o=c("d-upload");return t(),m("div",null,[l(o,{"upload-options":p.uploadOptions,"uploaded-files":p.uploadedFiles,"onUpdate:uploaded-files":s[0]||(s[0]=k=>p.uploadedFiles=k)},null,8,["upload-options","uploaded-files"])])}const{reactive:F,ref:u}=U;return x({render:g},{setup(){const p={name:"tom",age:11},s=u([]),o=F({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:p,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"});return{uploadedFiles:s,uploadOptions:o}}})}(),"render-demo-1":function(){const{resolveComponent:c,createVNode:l,openBlock:t,createElementBlock:m}=U;function g(p,s){const o=c("d-upload");return t(),m("div",null,[l(o,{"upload-options":p.uploadOptions,"uploaded-files":p.uploadedFiles,"onUpdate:uploaded-files":s[0]||(s[0]=k=>p.uploadedFiles=k),multiple:""},null,8,["upload-options","uploaded-files"])])}const{reactive:F,ref:u}=U;return x({render:g},{setup(){const p={name:"tom",age:11},s=u([]),o=F({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:p,maximumSize:2.5,method:"POST",fileFieldName:"file",responseType:"json"});return{uploadedFiles:s,uploadOptions:o}}})}(),"render-demo-2":function(){const{resolveComponent:c,createVNode:l,createTextVNode:t,withCtx:m,createElementVNode:g,openBlock:F,createElementBlock:u}=U,e={style:{"margin-top":"8px"}},p=t("Upload");function s(d,i){const D=c("d-upload"),y=c("d-button");return F(),u("div",null,[l(D,{ref:"uploadRef",accept:".png,.zip","enable-drop":!0,"upload-options":d.uploadOptions,"uploaded-files":d.uploadedFiles,"onUpdate:uploaded-files":i[0]||(i[0]=P=>d.uploadedFiles=P),"placeholder-text":"Drag files","without-btn":!0,"before-upload":d.beforeUpload,"on-success":d.onSuccess,"on-error":d.onError,onFileDrop:d.fileDrop,onFileOver:d.fileOver},null,8,["upload-options","uploaded-files","before-upload","on-success","on-error","onFileDrop","onFileOver"]),g("div",e,[l(y,{onClick:d.submit},{default:m(()=>[p]),_:1},8,["onClick"])])])}const{reactive:o,ref:k}=U;return x({render:s},{setup(){const d={name:"tom",age:11},i=k(null),D=k([]),y=o({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:d,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"});return{uploadedFiles:D,uploadOptions:y,uploadedFiles:D,beforeUpload:_=>(console.log("beforeUpload",_),!0),onSuccess:_=>{console.log("success",_)},onError:_=>{console.log(_)},fileDrop:_=>{console.log("fileDrop",_)},fileOver:_=>{console.log("fileOver",_)},uploadRef:i,submit:()=>{i.value.fileUpload()}}}})}(),"render-demo-3":function(){const{resolveComponent:c,createVNode:l,openBlock:t,createElementBlock:m}=U;function g(p,s){const o=c("d-upload");return t(),m("div",null,[l(o,{"upload-options":p.uploadOptions,"uploaded-files":p.uploadedFiles,"onUpdate:uploaded-files":s[0]||(s[0]=k=>p.uploadedFiles=k),"placeholder-text":"Upload","before-upload":p.beforeUpload,"on-success":p.onSuccess,"on-error":p.onError,disabled:!0},null,8,["upload-options","uploaded-files","before-upload","on-success","on-error"])])}const{reactive:F,ref:u}=U;return x({render:g},{setup(){const p={name:"tom",age:11},s=u([]),o=F({uri:"/upload",headers:{},additionalParameter:p,maximumSize:.5,method:"POST",fileFieldName:"dFile",withCredentials:!0,responseType:"json"});return{uploadedFiles:s,uploadOptions:o,beforeUpload:i=>(console.log(i),!0),onSuccess:i=>{console.log("success",i)},onError:i=>{console.log(i)}}}})}(),"render-demo-4":function(){const{resolveComponent:c,createVNode:l,openBlock:t,createElementBlock:m}=U;function g(s,o){const k=c("d-upload");return t(),m("div",null,[l(k,{accept:".xls,.xlsx,.pages,.mp3,.png","upload-options":s.uploadOptions,"uploaded-files":s.uploadedFiles,"onUpdate:uploaded-files":o[0]||(o[0]=w=>s.uploadedFiles=w),"placeholder-text":"\u9009\u62E9\u6587\u4EF6","on-success":s.onSuccess1,"on-error":s.onError,onDeleteUploadedFile:s.deleteUploadedFile,showTip:!0,uploadedFiles:s.uploadedFiles,"onUpdate:uploadedFiles":o[1]||(o[1]=w=>s.uploadedFiles=w),"auto-upload":!0,"before-upload":s.beforeUpload,multiple:""},null,8,["upload-options","uploaded-files","on-success","on-error","onDeleteUploadedFile","uploadedFiles","before-upload"])])}const{reactive:F,ref:u,watch:e}=U;return x({render:g},{setup(){const s={name:"tom",age:11},o=u([]),k=F({uri:"http://localhost:4000/files/upload",method:"post",additionalParameter:s,maximumSize:20,checkSameName:!0}),w=y=>{console.log("success",y,o)},d=y=>{console.log(y)},i=y=>{console.log("deleteUploadedFile ",y)},D=()=>(console.log("beforeUpload"),!0);return e(o,y=>{console.log("uploadedFiles ",y)}),{uploadedFiles:o,uploadOptions:k,onSuccess1:w,onError:d,deleteUploadedFile:i,beforeUpload:D}}})}(),"render-demo-5":function(){const{resolveComponent:c,createVNode:l,openBlock:t,createElementBlock:m}=U;function g(p,s){const o=c("d-upload");return t(),m("div",null,[l(o,{"upload-options":p.uploadOptions,"uploaded-files":p.uploadedFiles,"onUpdate:uploaded-files":s[0]||(s[0]=k=>p.uploadedFiles=k),"placeholder-text":"Upload","on-success":p.onSuccess,"on-error":p.onError,beforeUpload:p.beforeUpload},null,8,["upload-options","uploaded-files","on-success","on-error","beforeUpload"])])}const{reactive:F,ref:u}=U;return x({render:g},{setup(){const p={name:"tom",age:11},s=u([]),o=F({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:p,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"});return{uploadedFiles:s,uploadOptions:o,beforeUpload:i=>{if(!(!i||!i.length))return i[0].uploadOptions.uri="/upload2",console.log(i),!0},onSuccess:i=>{console.log("success",i)},onError:i=>{console.log(i)}}}})}(),"render-demo-6":function(){const{createTextVNode:c,resolveComponent:l,withCtx:t,createVNode:m,renderList:g,Fragment:F,openBlock:u,createElementBlock:e,toDisplayString:p,createElementVNode:s,createCommentVNode:o,createBlock:k}=U,w=c("\u9009\u53D6\u6587\u4EF6"),d={key:0,class:"table preload-files"},i={width:"50%"},D={width:"25%"},y={key:0},P={key:1},T={key:2},N={key:3},V=c(" Delete "),z={key:0,class:"table uploaded-files"},j={width:"50%"},_=s("td",{width:"25%"},[s("span",null,"Uploaded")],-1),$=c(" Delete ");function H(C,f){const S=l("d-button"),O=l("d-upload");return u(),e("div",null,[m(O,{accept:".png","upload-options":C.uploadOptions,"uploaded-files":C.uploadedFiles,"onUpdate:uploaded-files":f[0]||(f[0]=E=>C.uploadedFiles=E),"placeholder-text":"Upload","on-success":C.onSuccess,"on-error":C.onError,beforeUpload:C.beforeUpload,showTip:!0},{preloadFiles:t(E=>[E.fileUploaders.length>0?(u(),e("table",d,[(u(!0),e(F,null,g(E.fileUploaders,(h,v)=>(u(),e("tr",{key:v,class:"row"},[s("td",i,[s("span",null,p(h.file.name),1)]),s("td",D,[h.status===C.UploadStatus.preLoad?(u(),e("span",y,"preLoad")):o("v-if",!0),h.status===C.UploadStatus.uploading?(u(),e("span",P,"Uploading}")):o("v-if",!0),h.status===C.UploadStatus.uploaded?(u(),e("span",T,"Uploaded")):o("v-if",!0),h.status===C.UploadStatus.failed?(u(),e("span",N,"Upload Failed")):o("v-if",!0)]),s("td",null,[h.status!==C.UploadStatus.uploaded?(u(),k(S,{key:0,size:"xs",disabled:h.status===C.UploadStatus.uploading,onClick:r=>E.deleteFile(r)},{default:t(()=>[V]),_:2},1032,["disabled","onClick"])):o("v-if",!0)])]))),128))])):o("v-if",!0)]),uploadedFiles:t(E=>[E.uploadedFiles.length>0?(u(),e("table",z,[s("tbody",null,[(u(!0),e(F,null,g(E.uploadedFiles,(h,v)=>(u(),e("tr",{key:v,class:"row"},[s("td",j,[s("span",null,p(h.name),1)]),_,s("td",null,[m(S,{size:"xs",onClick:r=>E.deleteFile(h)},{default:t(()=>[$]),_:2},1032,["onClick"])])]))),128))])])):o("v-if",!0)]),default:t(()=>[m(S,{type:"primary"},{default:t(()=>[w]),_:1})]),_:1},8,["upload-options","uploaded-files","on-success","on-error","beforeUpload"])])}const{reactive:M,ref:L,watch:R}=U;return x({render:H},{setup(){const C={name:"tom",age:11},f=L({preLoad:0,uploading:1,uploaded:2,failed:3}),S=L([]),O=M({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:C,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"}),E=r=>(console.log(r),!0),h=r=>{console.log("success",r)},v=r=>{console.log(r)};return R(S,(r,B)=>{console.log("uploadedFiles",{newValue:r,oldValue:B})}),{uploadedFiles:S,uploadOptions:O,beforeUpload:E,onSuccess:h,onError:v,UploadStatus:f}}})}(),"render-demo-7":function(){const{resolveComponent:c,createVNode:l,createElementVNode:t,createTextVNode:m,renderList:g,Fragment:F,openBlock:u,createElementBlock:e,toDisplayString:p,createCommentVNode:s,withCtx:o,createBlock:k}=U,w={class:"upload-trigger"},d=t("div",{style:{marginTop:"20px"}},[m(" \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216 "),t("span",{class:"link"},"\u70B9\u51FB\u4E0A\u4F20")],-1),i={key:0,class:"table preload-files"},D={width:"50%"},y={width:"25%"},P={key:0},T={key:1},N={key:2},V={key:3},z=m(" Delete "),j={key:0,class:"table uploaded-files"},_={width:"50%"},$=t("td",{width:"25%"},[t("span",null,"Uploaded")],-1),H=m(" Delete ");function M(f,S){const O=c("d-icon"),E=c("d-button"),h=c("d-upload");return u(),e("div",null,[l(h,{accept:".png","upload-options":f.uploadOptions,"uploaded-files":f.uploadedFiles,"onUpdate:uploaded-files":S[0]||(S[0]=v=>f.uploadedFiles=v),"placeholder-text":"Upload","on-success":f.onSuccess,"on-error":f.onError,beforeUpload:f.beforeUpload,showTip:!0,withoutBtn:!0,class:"upload-demo",autoUpload:!0,"enable-drop":!0},{preloadFiles:o(v=>[v.fileUploaders.length>0?(u(),e("table",i,[(u(!0),e(F,null,g(v.fileUploaders,(r,B)=>(u(),e("tr",{key:B,class:"row"},[t("td",D,[t("span",null,p(r.file.name),1)]),t("td",y,[r.status===f.UploadStatus.preLoad?(u(),e("span",P,"preLoad")):s("v-if",!0),r.status===f.UploadStatus.uploading?(u(),e("span",T,"Uploading")):s("v-if",!0),r.status===f.UploadStatus.uploaded?(u(),e("span",N,"Uploaded")):s("v-if",!0),r.status===f.UploadStatus.failed?(u(),e("span",V,"Upload Failed")):s("v-if",!0)]),t("td",null,[r.status!==f.UploadStatus.uploaded?(u(),k(E,{key:0,size:"xs",disabled:r.status===f.UploadStatus.uploading,onClick:I=>v.deleteFile(I)},{default:o(()=>[z]),_:2},1032,["disabled","onClick"])):s("v-if",!0)])]))),128))])):s("v-if",!0)]),uploadedFiles:o(v=>[v.uploadedFiles.length>0?(u(),e("table",j,[t("tbody",null,[(u(!0),e(F,null,g(v.uploadedFiles,(r,B)=>(u(),e("tr",{key:B,class:"row"},[t("td",_,[t("span",null,p(r.name),1)]),$,t("td",null,[l(E,{size:"xs",onClick:I=>v.deleteFile(r)},{default:o(()=>[H]),_:2},1032,["onClick"])])]))),128))])])):s("v-if",!0)]),default:o(()=>[t("div",w,[t("div",null,[l(O,{name:"upload",size:"24px"})]),d])]),_:1},8,["upload-options","uploaded-files","on-success","on-error","beforeUpload"])])}const{reactive:L,ref:R,watch:G}=U;return x({render:M},{setup(){const f={name:"tom",age:11},S=R({preLoad:0,uploading:1,uploaded:2,failed:3}),O=R([{name:"food.jpeg",url:"https://devui.design/home"},{name:"food2.jpeg",url:"https://devui.design/home"}]),E=L({uri:"http://localhost:4000/files/upload",headers:{},additionalParameter:f,maximumSize:.5,method:"POST",fileFieldName:"file",responseType:"json"}),h=B=>(console.log(B),!0),v=B=>{console.log("success",B)},r=B=>{console.log(B)};return G(O,(B,I)=>{console.log("uploadedFiles",{newValue:B,oldValue:I})}),{uploadedFiles:O,uploadOptions:E,beforeUpload:h,onSuccess:v,onError:r,UploadStatus:S}}})}()}},_n='{"title":"Upload \u4E0A\u4F20","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u81EA\u52A8\u4E0A\u4F20","slug":"\u81EA\u52A8\u4E0A\u4F20"},{"level":3,"title":"\u52A8\u6001\u4E0A\u4F20\u53C2\u6570","slug":"\u52A8\u6001\u4E0A\u4F20\u53C2\u6570"},{"level":3,"title":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","slug":"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"slot","slug":"slot"},{"level":3,"title":"\u63A5\u53E3 & \u7C7B\u578B\u5B9A\u4E49","slug":"\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"IUploadOptions","slug":"iuploadoptions"}],"relativePath":"components/upload/index.md","lastUpdated":1639196889370}',tn=Q('<h1 id="upload-\u4E0A\u4F20" tabindex="-1">Upload \u4E0A\u4F20 <a class="header-anchor" href="#upload-\u4E0A\u4F20" aria-hidden="true">#</a></h1><p>\u6587\u4EF6\u4E0A\u4F20\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u5F53\u9700\u8981\u5C06\u6587\u4EF6\u4E0A\u4F20\u5230\u540E\u7AEF\u670D\u52A1\u5668\u65F6\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u5355\u6587\u4EF6\u4E0A\u4F20\u3001\u591A\u6587\u4EF6\u4E0A\u4F20\u3001\u62D6\u52A8\u6587\u4EF6\u4E0A\u4F20\u3001\u7981\u6B62\u4E0A\u4F20\u3002</p><h4>Basic Usage</h4>',7),on=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" additionalParameter "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      uri`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),a(`
      headers`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      additionalParameter`),n("span",{class:"token punctuation"},","),a(`
      maximumSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),a(`
      method`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
      fileFieldName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),a(`
      responseType`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'json'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),en=n("h4",null,"Multiple Files",-1),pn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"multiple"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" additionalParameter "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      uri`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),a(`
      headers`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      additionalParameter`),n("span",{class:"token punctuation"},","),a(`
      maximumSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2.5"),n("span",{class:"token punctuation"},","),a(`
      method`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
      fileFieldName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),a(`
      responseType`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'json'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),un=n("h4",null,"Dragdrop",-1),ln=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(`
    `),n("span",{class:"token attr-name"},"ref"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadRef"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"accept"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(".png,.zip"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":enable-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Drag files"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":without-btn"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeUpload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSuccess"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onError"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@file-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileDrop"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@file-over"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileOver"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),a(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("submit"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" additionalParameter "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadRef "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      uri`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),a(`
      headers`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      additionalParameter`),n("span",{class:"token punctuation"},","),a(`
      maximumSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),a(`
      method`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
      fileFieldName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),a(`
      responseType`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'json'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeUpload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'beforeUpload'"),n("span",{class:"token punctuation"},","),a(" file"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSuccess"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" result"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onError"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("error"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"fileDrop"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"files"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileDrop'"),n("span",{class:"token punctuation"},","),a(" files"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"fileOver"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'fileOver'"),n("span",{class:"token punctuation"},","),a(" event"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"submit"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadRef`),n("span",{class:"token punctuation"},"."),a("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fileUpload"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      beforeUpload`),n("span",{class:"token punctuation"},","),a(`
      onSuccess`),n("span",{class:"token punctuation"},","),a(`
      onError`),n("span",{class:"token punctuation"},","),a(`
      fileDrop`),n("span",{class:"token punctuation"},","),a(`
      fileOver`),n("span",{class:"token punctuation"},","),a(`
      uploadRef`),n("span",{class:"token punctuation"},","),a(`
      submit
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),cn=n("h4",null,"Disabled",-1),rn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Upload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeUpload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSuccess"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onError"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" additionalParameter "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      uri`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'/upload'"),n("span",{class:"token punctuation"},","),a(`
      headers`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      additionalParameter`),n("span",{class:"token punctuation"},","),a(`
      maximumSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),a(`
      method`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
      fileFieldName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'dFile'"),n("span",{class:"token punctuation"},","),a(`
      withCredentials`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),a(`
      responseType`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'json'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeUpload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSuccess"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" result"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onError"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("error"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
      beforeUpload`),n("span",{class:"token punctuation"},","),a(`
      onSuccess`),n("span",{class:"token punctuation"},","),a(`
      onError
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),kn=n("h3",{id:"\u81EA\u52A8\u4E0A\u4F20",tabindex:"-1"},[a("\u81EA\u52A8\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u81EA\u52A8\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),dn=n("p",null,"\u901A\u8FC7 autoUpload \u8BBE\u7F6E\u81EA\u52A8\u4E0A\u4F20\u3002",-1),mn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(`
    `),n("span",{class:"token attr-name"},"accept"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(".xls,.xlsx,.pages,.mp3,.png"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("\u9009\u62E9\u6587\u4EF6"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSuccess1"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onError"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"@delete-uploaded-file"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("deleteUploadedFile"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploadedFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":auto-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeUpload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"multiple"),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" additionalParameter "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      uri`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),a(`
      method`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),a(`
      additionalParameter`),n("span",{class:"token operator"},":"),a(" additionalParameter"),n("span",{class:"token punctuation"},","),a(`
      maximumSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),a(`
      checkSameName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSuccess1"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" result"),n("span",{class:"token punctuation"},","),a(" uploadedFiles"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onError"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("error"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"deleteUploadedFile"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'deleteUploadedFile '"),n("span",{class:"token punctuation"},","),a(" file"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeUpload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'beforeUpload'"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("uploadedFiles"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles '"),n("span",{class:"token punctuation"},","),a(" val"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
      onSuccess1`),n("span",{class:"token punctuation"},","),a(`
      onError`),n("span",{class:"token punctuation"},","),a(`
      deleteUploadedFile`),n("span",{class:"token punctuation"},","),a(`
      beforeUpload
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),fn=n("h3",{id:"\u52A8\u6001\u4E0A\u4F20\u53C2\u6570",tabindex:"-1"},[a("\u52A8\u6001\u4E0A\u4F20\u53C2\u6570 "),n("a",{class:"header-anchor",href:"#\u52A8\u6001\u4E0A\u4F20\u53C2\u6570","aria-hidden":"true"},"#")],-1),gn=n("p",null,"\u7528\u6237\u53EF\u901A\u8FC7 beforeUpload \u52A8\u6001\u4FEE\u6539\u4E0A\u4F20\u53C2\u6570\u3002",-1),Fn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Upload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSuccess"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onError"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":beforeUpload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeUpload"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},"/>")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" additionalParameter "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      uri`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),a(`
      headers`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      additionalParameter`),n("span",{class:"token punctuation"},","),a(`
      maximumSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),a(`
      method`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
      fileFieldName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),a(`
      responseType`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'json'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeUpload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"files"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      `),n("span",{class:"token keyword"},"if"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),a("files "),n("span",{class:"token operator"},"||"),a(),n("span",{class:"token operator"},"!"),a("files"),n("span",{class:"token punctuation"},"."),a("length"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
      files`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),a("uploadOptions"),n("span",{class:"token punctuation"},"."),a("uri "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token string"},"'/upload2'"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("files"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSuccess"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" result"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onError"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("error"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
      beforeUpload`),n("span",{class:"token punctuation"},","),a(`
      onSuccess`),n("span",{class:"token punctuation"},","),a(`
      onError
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),vn=n("h3",{id:"\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20",tabindex:"-1"},[a("\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20 "),n("a",{class:"header-anchor",href:"#\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20","aria-hidden":"true"},"#")],-1),En=n("p",null,"\u7528\u6237\u53EF\u901A\u8FC7\u9ED8\u8BA4 slot \u652F\u6301\u6587\u4EF6\u4EFB\u610F\u533A\u57DF\u4E0A\u4F20\u3002",-1),hn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(`
    `),n("span",{class:"token attr-name"},"accept"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(".png"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Upload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSuccess"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onError"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":beforeUpload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeUpload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u9009\u53D6\u6587\u4EF6"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),a("preloadFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("table")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table preload-files"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slotProps.fileUploaders.length > 0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(fileUploader, index) in slotProps.fileUploaders"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ fileUploader.file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.preLoad"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("preLoad"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Uploading}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.failed"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Upload Failed"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(`
              `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("xs"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status !== UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(event) => slotProps.deleteFile(event)"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token punctuation"},">")]),a(`
              Delete
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("table")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),a("uploadedFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("xs"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(event) => slotProps.deleteFile(uploadedFile)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                Delete
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tbody")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("table")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-upload")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" additionalParameter "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" UploadStatus "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      preLoad`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
      uploading`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      uploaded`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      failed`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      uri`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),a(`
      headers`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      additionalParameter`),n("span",{class:"token punctuation"},","),a(`
      maximumSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),a(`
      method`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
      fileFieldName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),a(`
      responseType`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'json'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeUpload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSuccess"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" result"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onError"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("error"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("uploadedFiles"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("newValue"),n("span",{class:"token punctuation"},","),a(" oldValue")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        newValue`),n("span",{class:"token punctuation"},","),a(`
        oldValue
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
      beforeUpload`),n("span",{class:"token punctuation"},","),a(`
      onSuccess`),n("span",{class:"token punctuation"},","),a(`
      onError`),n("span",{class:"token punctuation"},","),a(`
      UploadStatus
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),bn=n("p",null,"\u81EA\u5B9A\u4E49\u9ED8\u8BA4 slot\uFF0C\u521D\u59CB\u663E\u793A\u5DF2\u4E0A\u4F20\u6587\u4EF6\u3002",-1),An=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-upload")]),a(`
    `),n("span",{class:"token attr-name"},"accept"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a(".png"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":upload-options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadOptions"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("uploaded-files")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("uploadedFiles"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"placeholder-text"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Upload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-success"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onSuccess"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":on-error"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("onError"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":beforeUpload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("beforeUpload"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":showTip"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":withoutBtn"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("upload-demo"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":autoUpload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
    `),n("span",{class:"token attr-name"},":enable-drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("upload-trigger"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-icon")]),a(),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("upload"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("24px"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"marginTop"),n("span",{class:"token punctuation"},":"),a(" 20px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
        \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("link"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u70B9\u51FB\u4E0A\u4F20"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),a("preloadFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("table")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("table preload-files"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slotProps.fileUploaders.length > 0"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("tr")]),a(),n("span",{class:"token attr-name"},"v-for"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(fileUploader, index) in slotProps.fileUploaders"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("index"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("row"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),n("span",{class:"token punctuation"},">")]),a("{{ fileUploader.file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),a(),n("span",{class:"token attr-name"},"width"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("25%"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.preLoad"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("preLoad"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Uploading"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Uploaded"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.failed"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Upload Failed"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`

          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(`
              `),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("xs"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status !== UploadStatus.uploaded"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("fileUploader.status === UploadStatus.uploading"),n("span",{class:"token punctuation"},'"')]),a(`
              `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(event) => slotProps.deleteFile(event)"),n("span",{class:"token punctuation"},'"')]),a(`
            `),n("span",{class:"token punctuation"},">")]),a(`
              Delete
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("table")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-slot:"),a("uploadedFiles")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("slotProps"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
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
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("d-button")]),a(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("xs"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(event) => slotProps.deleteFile(uploadedFile)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
                Delete
              `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-button")]),n("span",{class:"token punctuation"},">")]),a(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("td")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tr")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("tbody")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("table")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("d-upload")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" reactive"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),a(`

`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" additionalParameter "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"{"),a(" name"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'tom'"),n("span",{class:"token punctuation"},","),a(" age"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"11"),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" UploadStatus "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      preLoad`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),a(`
      uploading`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
      uploaded`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),a(`
      failed`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"3"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadedFiles "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'food.jpeg'"),n("span",{class:"token punctuation"},","),a(`
        url`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://devui.design/home'"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        name`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'food2.jpeg'"),n("span",{class:"token punctuation"},","),a(`
        url`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'https://devui.design/home'"),a(`
      `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" uploadOptions "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
      uri`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'http://localhost:4000/files/upload'"),n("span",{class:"token punctuation"},","),a(`
      headers`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      additionalParameter`),n("span",{class:"token punctuation"},","),a(`
      maximumSize`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token number"},"0.5"),n("span",{class:"token punctuation"},","),a(`
      method`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),a(`
      fileFieldName`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'file'"),n("span",{class:"token punctuation"},","),a(`
      responseType`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'json'"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"beforeUpload"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("file"),n("span",{class:"token punctuation"},")"),a(`
      `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token boolean"},"true"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onSuccess"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"result"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'success'"),n("span",{class:"token punctuation"},","),a(" result"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"onError"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),a("error"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("uploadedFiles"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("newValue"),n("span",{class:"token punctuation"},","),a(" oldValue")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'uploadedFiles'"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
        newValue`),n("span",{class:"token punctuation"},","),a(`
        oldValue
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      uploadedFiles`),n("span",{class:"token punctuation"},","),a(`
      uploadOptions`),n("span",{class:"token punctuation"},","),a(`
      beforeUpload`),n("span",{class:"token punctuation"},","),a(`
      onSuccess`),n("span",{class:"token punctuation"},","),a(`
      onError`),n("span",{class:"token punctuation"},","),a(`
      UploadStatus
    `),n("span",{class:"token punctuation"},"}"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
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
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),a(" blue"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),Un=Q(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><p>d-upload \u53C2\u6570</p><table><thead><tr><th><strong>\u53C2\u6570</strong></th><th><strong>\u7C7B\u578B</strong></th><th><strong>\u9ED8\u8BA4</strong></th><th>\u8BF4\u660E</th><th><strong>\u8DF3\u8F6C Demo</strong></th></tr></thead><tbody><tr><td>accept</td><td><code>string</code></td><td>--</td><td>\u89C4\u5B9A\u80FD\u591F\u901A\u8FC7\u6587\u4EF6\u4E0A\u4F20\u8FDB\u884C\u63D0\u4EA4\u7684\u6587\u4EF6\u7C7B\u578B,\u4F8B\u5982 accept: &#39;.xls,.xlsx,.png&#39;</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>multiple</td><td><code>boolean</code></td><td>false</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploadOptions</td><td><a href="#iuploadoptions">IUploadOptions</a></td><td>--</td><td>\u5FC5\u9009\uFF0C\u4E0A\u4F20\u914D\u7F6E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>autoUpload</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u81EA\u52A8\u4E0A\u4F20</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>placeholderText</td><td><code>string</code></td><td>&#39;\u9009\u62E9\u6587\u4EF6&#39;</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u8F93\u5165\u6846\u4E2D\u7684 Placeholder \u6587\u5B57</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploadText</td><td><code>string</code></td><td>&#39;\u4E0A\u4F20&#39;</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u6309\u94AE\u6587\u5B57</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>uploadedFiles</td><td><code>Array&lt;Object&gt;</code></td><td>[]</td><td>\u53EF\u9009\uFF0C\u83B7\u53D6\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>withoutBtn</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u820D\u5F03\u6309\u94AE</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>enableDrop</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u652F\u6301\u62D6\u62FD</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>beforeUpload</td><td><code>boolean Promise&lt;boolean&gt; </code></td><td>--</td><td>\u53EF\u9009\uFF0C\u4E0A\u4F20\u524D\u7684\u56DE\u8C03\uFF0C\u901A\u8FC7\u8FD4\u56DE<code>true</code> or <code>false</code> ,\u63A7\u5236\u6587\u4EF6\u662F\u5426\u4E0A\u4F20,\u53C2\u6570\u4E3A\u6587\u4EF6\u4FE1\u606F\u53CA\u4E0A\u4F20\u914D\u7F6E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>disabled</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u4E0A\u4F20\u7EC4\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>oneTimeUpload</td><td><code>boolean</code></td><td>false</td><td>\u53EF\u9009\uFF0C\u662F\u5426\u53EA\u8C03\u7528\u4E00\u6B21\u63A5\u53E3\u4E0A\u4F20\u6240\u6709\u6587\u4EF6</td><td></td></tr></tbody></table><p>d-upload \u4E8B\u4EF6</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>fileOver</td><td><code>(v: boolean) =&gt; void</code></td><td>\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u6587\u4EF6\u79FB\u52A8\u5230\u53EF\u62D6\u653E\u533A\u57DF\u89E6\u53D1\u4E8B\u4EF6,\u53EF\u62D6\u52A8\u7684\u5143\u7D20\u79FB\u51FA\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>false</code>\uFF0C\u5143\u7D20\u6B63\u5728\u62D6\u52A8\u5230\u653E\u7F6E\u76EE\u6807\u65F6\u8FD4\u56DE<code>true</code></td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>fileDrop</td><td><code>(v: any) =&gt; void</code></td><td>\u652F\u6301\u62D6\u62FD\u4E0A\u4F20\u65F6\uFF0C\u5F53\u524D\u62D6\u62FD\u7684\u6587\u4EF6\u5217\u8868\u56DE\u8C03\uFF0C\u5355\u6587\u4EF6\u4E0A\u4F20\u9ED8\u8BA4\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u6587\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>deleteUploadedFile</td><td><code>(v: string) =&gt; void</code></td><td>\u5220\u9664\u4E0A\u4F20\u6587\u4EF6\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5220\u9664\u6587\u4EF6\u7684\u8DEF\u5F84\u4FE1\u606F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td>fileSelect</td><td><code>(v: File) =&gt; void</code></td><td>\u6587\u4EF6\u9009\u62E9\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u8FD4\u56DE\u5DF2\u9009\u62E9\u6587\u4EF6\u4FE1\u606F</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="slot" tabindex="-1">slot <a class="header-anchor" href="#slot" aria-hidden="true">#</a></h3><table><thead><tr><th>name</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>-</td><td>--</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89">\u81EA\u5B9A\u4E49</a></td></tr><tr><td>preloadFiles</td><td>--</td><td>\u53EF\u9009\uFF0C\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49 \u5DF2\u9009\u62E9\u6587\u4EF6\u5217\u8868\u6A21\u677F\uFF0C\u53C2\u6570\u4E3A <code>{fileUploaders, deleteFile}</code></td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89">\u81EA\u5B9A\u4E49</a></td></tr><tr><td>uploadedFiles</td><td>--</td><td>\u53EF\u9009\uFF0C\u7528\u4E8E\u521B\u5EFA\u81EA\u5B9A\u4E49 \u5DF2\u4E0A\u4F20\u6587\u4EF6\u5217\u8868\u6A21\u677F\uFF0C\u53C2\u6570\u4E3A <code>{uploadedFiles, deleteFile}</code></td><td><a href="#%E8%87%AA%E5%AE%9A%E4%B9%89">\u81EA\u5B9A\u4E49</a></td></tr></tbody></table><h3 id="\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u63A5\u53E3 &amp; \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u63A5\u53E3-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h3 id="iuploadoptions" tabindex="-1">IUploadOptions <a class="header-anchor" href="#iuploadoptions" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">IUploadOptions</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0A\u4F20\u63A5\u53E3\u5730\u5740</span>
  uri<span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// http \u8BF7\u6C42\u65B9\u6CD5</span>
  method<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u9650\u5236</span>
  maximumSize<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>
  <span class="token comment">// \u81EA\u5B9A\u4E49\u8BF7\u6C42headers</span>
  headers<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
  <span class="token comment">// \u8BA4\u8BC1token</span>
  authToken<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u8BA4\u8BC1token header\u6807\u793A</span>
  authTokenHeader<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u4E0A\u4F20\u989D\u5916\u81EA\u5B9A\u4E49\u53C2\u6570</span>
  additionalParameter<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span>
  <span class="token comment">// \u4E0A\u4F20\u6587\u4EF6\u5B57\u6BB5\u540D\u79F0\uFF0C\u9ED8\u8BA4file</span>
  fileFieldName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token comment">// \u591A\u6587\u4EF6\u4E0A\u4F20,\u662F\u5426\u68C0\u67E5\u6587\u4EF6\u91CD\u540D\uFF0C\u8BBE\u7F6E\u4E3Atrue\uFF0C\u91CD\u540D\u6587\u4EF6\u4E0D\u4F1A\u8986\u76D6\uFF0C\u5426\u5219\u4F1A\u8986\u76D6\u4E0A\u4F20</span>
  checkSameName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">// \u6307\u793A\u4E86\u662F\u5426\u8BE5\u4F7F\u7528\u7C7B\u4F3Ccookies,authorization headers(\u5934\u90E8\u6388\u6743)\u6216\u8005TLS\u5BA2\u6237\u7AEF\u8BC1\u4E66\u8FD9\u4E00\u7C7B\u8D44\u683C\u8BC1\u4E66\u6765\u521B\u5EFA\u4E00\u4E2A\u8DE8\u7AD9\u70B9\u8BBF\u95EE\u63A7\u5236\uFF08cross-site Access-Control\uFF09\u8BF7\u6C42</span>
  withCredentials<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token comment">//  \u624B\u52A8\u8BBE\u7F6E\u8FD4\u56DE\u6570\u636E\u7C7B\u578B</span>
  responseType<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;arraybuffer&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;blob&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;json&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,10);function yn(c,l,t,m,g,F){const u=q("render-demo-0"),e=q("demo"),p=q("render-demo-1"),s=q("render-demo-2"),o=q("render-demo-3"),k=q("render-demo-4"),w=q("render-demo-5"),d=q("render-demo-6"),i=q("render-demo-7");return an(),nn("div",null,[tn,b(e,{sourceCode:`<template>
  <d-upload :upload-options="uploadOptions" v-model:uploaded-files="uploadedFiles" />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json'
    })
    return {
      uploadedFiles,
      uploadOptions
    }
  }
}
<\/script>
`},{highlight:A(()=>[on]),default:A(()=>[b(u)]),_:1}),en,b(e,{sourceCode:`<template>
  <d-upload :upload-options="uploadOptions" v-model:uploaded-files="uploadedFiles" multiple />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 2.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json'
    })
    return {
      uploadedFiles,
      uploadOptions
    }
  }
}
<\/script>
`},{highlight:A(()=>[pn]),default:A(()=>[b(p)]),_:1}),un,b(e,{sourceCode:`<template>
  <d-upload
    ref="uploadRef"
    accept=".png,.zip"
    :enable-drop="true"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Drag files"
    :without-btn="true"
    :before-upload="beforeUpload"
    :on-success="onSuccess"
    :on-error="onError"
    @file-drop="fileDrop"
    @file-over="fileOver"
  />
  <div style="margin-top: 8px">
    <d-button @click="submit">Upload</d-button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadRef = ref(null)
    const uploadedFiles = ref([])
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json'
    })
    const beforeUpload = (file) => {
      console.log('beforeUpload', file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    const fileDrop = (files) => {
      console.log('fileDrop', files)
    }

    const fileOver = (event) => {
      console.log('fileOver', event)
    }
    const submit = () => {
      uploadRef.value.fileUpload()
    }
    return {
      uploadedFiles,
      uploadOptions,
      uploadedFiles,
      beforeUpload,
      onSuccess,
      onError,
      fileDrop,
      fileOver,
      uploadRef,
      submit
    }
  }
}
<\/script>
`},{highlight:A(()=>[ln]),default:A(()=>[b(s)]),_:1}),cn,b(e,{sourceCode:`<template>
  <d-upload
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    :before-upload="beforeUpload"
    :on-success="onSuccess"
    :on-error="onError"
    :disabled="true"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const uploadOptions = reactive({
      uri: '/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'dFile',
      withCredentials: true,
      responseType: 'json'
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    return {
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError
    }
  }
}
<\/script>
`},{highlight:A(()=>[rn]),default:A(()=>[b(o)]),_:1}),kn,dn,b(e,{sourceCode:`<template>
  <d-upload
    accept=".xls,.xlsx,.pages,.mp3,.png"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="\u9009\u62E9\u6587\u4EF6"
    :on-success="onSuccess1"
    :on-error="onError"
    @delete-uploaded-file="deleteUploadedFile"
    :showTip="true"
    v-model:uploadedFiles="uploadedFiles"
    :auto-upload="true"
    :before-upload="beforeUpload"
    multiple
  />
</template>
<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      method: 'post',
      additionalParameter: additionalParameter,
      maximumSize: 20,
      checkSameName: true
    })
    const onSuccess1 = (result) => {
      console.log('success', result, uploadedFiles)
    }
    const onError = (error) => {
      console.log(error)
    }
    const deleteUploadedFile = (file) => {
      console.log('deleteUploadedFile ', file)
    }
    const beforeUpload = () => {
      console.log('beforeUpload')
      return true
    }
    watch(uploadedFiles, (val) => {
      console.log('uploadedFiles ', val)
    })
    return {
      uploadedFiles,
      uploadOptions,
      onSuccess1,
      onError,
      deleteUploadedFile,
      beforeUpload
    }
  }
}
<\/script>
`},{highlight:A(()=>[mn]),default:A(()=>[b(k)]),_:1}),fn,gn,b(e,{sourceCode:`<template>
  <d-upload
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    :on-success="onSuccess"
    :on-error="onError"
    :beforeUpload="beforeUpload"
  />
</template>
<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const uploadedFiles = ref([])
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json'
    })
    const beforeUpload = (files) => {
      if (!files || !files.length) {
        return
      }
      files[0].uploadOptions.uri = '/upload2'
      console.log(files)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    return {
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError
    }
  }
}
<\/script>
`},{highlight:A(()=>[Fn]),default:A(()=>[b(w)]),_:1}),vn,En,b(e,{sourceCode:`<template>
  <d-upload
    accept=".png"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    :on-success="onSuccess"
    :on-error="onError"
    :beforeUpload="beforeUpload"
    :showTip="true"
  >
    <d-button type="primary">\u9009\u53D6\u6587\u4EF6</d-button>
    <template v-slot:preloadFiles="slotProps">
      <table class="table preload-files" v-if="slotProps.fileUploaders.length > 0">
        <tr v-for="(fileUploader, index) in slotProps.fileUploaders" :key="index" class="row">
          <td width="50%">
            <span>{{ fileUploader.file.name }}</span>
          </td>

          <td width="25%">
            <span v-if="fileUploader.status === UploadStatus.preLoad">preLoad</span>
            <span v-if="fileUploader.status === UploadStatus.uploading">Uploading}</span>
            <span v-if="fileUploader.status === UploadStatus.uploaded">Uploaded</span>
            <span v-if="fileUploader.status === UploadStatus.failed">Upload Failed</span>
          </td>

          <td>
            <d-button
              size="xs"
              v-if="fileUploader.status !== UploadStatus.uploaded"
              :disabled="fileUploader.status === UploadStatus.uploading"
              @click="(event) => slotProps.deleteFile(event)"
            >
              Delete
            </d-button>
          </td>
        </tr>
      </table>
    </template>
    <template v-slot:uploadedFiles="slotProps">
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
              <d-button size="xs" @click="(event) => slotProps.deleteFile(uploadedFile)">
                Delete
              </d-button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </d-upload>
</template>
<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const UploadStatus = ref({
      preLoad: 0,
      uploading: 1,
      uploaded: 2,
      failed: 3
    })
    const uploadedFiles = ref([])
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json'
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    watch(uploadedFiles, (newValue, oldValue) => {
      console.log('uploadedFiles', {
        newValue,
        oldValue
      })
    })
    return {
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
      UploadStatus
    }
  }
}
<\/script>
`},{highlight:A(()=>[hn]),default:A(()=>[b(d)]),_:1}),bn,b(e,{sourceCode:`<template>
  <d-upload
    accept=".png"
    :upload-options="uploadOptions"
    v-model:uploaded-files="uploadedFiles"
    placeholder-text="Upload"
    :on-success="onSuccess"
    :on-error="onError"
    :beforeUpload="beforeUpload"
    :showTip="true"
    :withoutBtn="true"
    class="upload-demo"
    :autoUpload="true"
    :enable-drop="true"
  >
    <div class="upload-trigger">
      <div>
        <d-icon name="upload" size="24px" />
      </div>
      <div style="marginTop: 20px">
        \u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216
        <span class="link">\u70B9\u51FB\u4E0A\u4F20</span>
      </div>
    </div>
    <template v-slot:preloadFiles="slotProps">
      <table class="table preload-files" v-if="slotProps.fileUploaders.length > 0">
        <tr v-for="(fileUploader, index) in slotProps.fileUploaders" :key="index" class="row">
          <td width="50%">
            <span>{{ fileUploader.file.name }}</span>
          </td>

          <td width="25%">
            <span v-if="fileUploader.status === UploadStatus.preLoad">preLoad</span>
            <span v-if="fileUploader.status === UploadStatus.uploading">Uploading</span>
            <span v-if="fileUploader.status === UploadStatus.uploaded">Uploaded</span>
            <span v-if="fileUploader.status === UploadStatus.failed">Upload Failed</span>
          </td>

          <td>
            <d-button
              size="xs"
              v-if="fileUploader.status !== UploadStatus.uploaded"
              :disabled="fileUploader.status === UploadStatus.uploading"
              @click="(event) => slotProps.deleteFile(event)"
            >
              Delete
            </d-button>
          </td>
        </tr>
      </table>
    </template>
    <template v-slot:uploadedFiles="slotProps">
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
              <d-button size="xs" @click="(event) => slotProps.deleteFile(uploadedFile)">
                Delete
              </d-button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </d-upload>
</template>
<script>
import { reactive, ref, watch } from 'vue'

export default {
  setup() {
    const additionalParameter = { name: 'tom', age: 11 }
    const UploadStatus = ref({
      preLoad: 0,
      uploading: 1,
      uploaded: 2,
      failed: 3
    })
    const uploadedFiles = ref([
      {
        name: 'food.jpeg',
        url: 'https://devui.design/home'
      },
      {
        name: 'food2.jpeg',
        url: 'https://devui.design/home'
      }
    ])
    const uploadOptions = reactive({
      uri: 'http://localhost:4000/files/upload',
      headers: {},
      additionalParameter,
      maximumSize: 0.5,
      method: 'POST',
      fileFieldName: 'file',
      responseType: 'json'
    })
    const beforeUpload = (file) => {
      console.log(file)
      return true
    }
    const onSuccess = (result) => {
      console.log('success', result)
    }
    const onError = (error) => {
      console.log(error)
    }
    watch(uploadedFiles, (newValue, oldValue) => {
      console.log('uploadedFiles', {
        newValue,
        oldValue
      })
    })
    return {
      uploadedFiles,
      uploadOptions,
      beforeUpload,
      onSuccess,
      onError,
      UploadStatus
    }
  }
}
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
  color: blue;
}
</style>
`},{highlight:A(()=>[An]),default:A(()=>[b(i)]),_:1}),Un])}var Bn=Z(sn,[["render",yn]]);export{_n as __pageData,Bn as default};
