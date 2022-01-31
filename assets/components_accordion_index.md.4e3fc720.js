var S=Object.defineProperty;var I=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var M=(a,s,e)=>s in a?S(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,_=(a,s)=>{for(var e in s||(s={}))$.call(s,e)&&M(a,e,s[e]);if(I)for(var e of I(s))P.call(s,e)&&M(a,e,s[e]);return a};import{_ as j,V as v,r as O,c as J,b as f,w as x,a as V,d as n,e as t,o as U}from"./app.14dd1803.js";const Y={name:"component-doc",components:{"render-demo-0":function(){const{createElementVNode:a,resolveComponent:s,withCtx:e,createVNode:i,createCommentVNode:k,createTextVNode:l,openBlock:F,createElementBlock:c}=v,y={class:"basic-menu"},E=a("li",{class:"devui-accordion-item"},[a("div",{class:"devui-accordion-item-title devui-over-flow-ellipsis",style:{"{{ textIndent":"deepth * 20 + 'px' }}"}}," \u81EA\u5B9A\u4E49\u52A0\u8F7D... ")],-1),h={class:"basic-option"},p=l(" Only one level-1 menu can be expanded."),B={class:"basic-option"},d=l(" Embedded menu (no shadow)");function r(u,w){const A=s("d-accordion"),T=s("d-switch");return F(),c("div",null,[a("div",y,[i(A,{data:u.menu,accordionType:u.accordionTypeEmbed?"embed":"normal",restrictOneOpen:u.restrictOneOpen,onItemClick:u.itemClick,onMenuToggle:u.menuToggle,loadingTemplate:!1},{loadingTemplate:e(({item:D,deepth:o})=>[E]),_:1},8,["data","accordionType","restrictOneOpen","onItemClick","onMenuToggle"])]),a("div",h,[i(T,{checked:u.restrictOneOpen,"onUpdate:checked":w[0]||(w[0]=D=>u.restrictOneOpen=D)},null,8,["checked"]),p,k("\u9650\u5236\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u4E00\u7EA7\u83DC\u5355")]),a("div",B,[i(T,{checked:u.accordionTypeEmbed,"onUpdate:checked":w[1]||(w[1]=D=>u.accordionTypeEmbed=D)},null,8,["checked"]),d,k("\u5185\u5D4C\u83DC\u5355\u5F62\u5F0F\uFF08\u65E0\u9634\u5F71\uFF09")])])}const{defineComponent:C,ref:g}=v,b=C({name:"accordion",setup(){const u=g(!1),w=g(!1);return{menu:g([{title:"Content 1",children:[{title:"Child Content 1"},{title:"Child Content 2"},{title:"Child Content "}]},{title:"Content 2\uFF08This is a long sentence for option display.\uFF09",children:[{title:"Child Content 1 (This is a long sentence for option display.)"},{title:"Child Content 2"},{title:"Child Content 3"}]},{title:"Content 3 (Default Open)",open:!0,children:[{title:"Child Content 1 (Disabled)",disabled:!0},{title:"Child Content 2 (Default Active)",active:!0},{title:"Child Content 3"}]},{title:"Content 4 (No Child)",children:[]},{title:"Content 5 (Disabled)",disabled:!0,children:[]},{title:"Content 6 (Dynamic Content)",needLoadChildren:!0,loading:!1,children:[]}]),restrictOneOpen:u,accordionTypeEmbed:w,itemClick:o=>{console.log("item click"+JSON.stringify(o))},menuToggle:o=>{console.log("menu toggle"+JSON.stringify(o)),o.open&&o.item.needLoadChildren&&(o.item.loading=!0,setTimeout(()=>{o.item.children=[{title:"Child Content 1"},{title:"Child Content 2"}],o.item.needLoadChildren=!1,o.item.loading=!1},2e3))}}}});return _({render:r},b)}(),"render-demo-1":function(){const{toDisplayString:a,openBlock:s,createElementBlock:e,createCommentVNode:i,createTextVNode:k,createElementVNode:l,resolveComponent:F,withCtx:c,createVNode:y}=v,E={class:"use-template-menu"},h={key:0,class:"use-template-badge"},p=["onClick"],B=k(" reset "),d={class:"use-template-info"},r=l("li",{class:"devui-accordion-item disabled"},[l("div",{class:"devui-accordion-item-title devui-over-flow-ellipsis disabled",style:{"{{ textIndent":"deepth * 20 + 'px' }}"}},[k(" Not available yet. Please wait. "),i("\u5C1A\u672A\u5F00\u653E\uFF0C\u656C\u8BF7\u671F\u5F85...")])],-1),C=l("li",{class:"devui-accordion-item"},[l("div",{class:"use-template-loading"},[l("span",{class:"use-template-circle-spinner"}),k(" loading..."),i("\u6B63\u5728\u7528\u529B\u5730\u52A0\u8F7D\u4E2D...")])],-1);function g(A,T){const D=F("d-accordion");return s(),e("div",null,[l("div",E,[y(D,{data:A.menu,accordionType:A.accordionTypeEmbed?"embed":"normal",restrictOneOpen:A.restrictOneOpen,onItemClick:A.itemClick,onMenuToggle:A.menuToggle},{menuItemTemplate:c(({item:o,deepth:L,parent:N})=>{var K;return[k(a(o.title)+" ",1),((K=o.children)==null?void 0:K.length)?(s(),e("span",h,a(o.children.length),1)):i("v-if",!0),o.needLoadChildren===!1?(s(),e("span",{key:1,class:"operation-clear",onClick:m=>A.clearChildrenData(m,o)},[B,i("\u91CD\u7F6E")],8,p)):i("v-if",!0)]}),itemTemplate:c(({item:o,deepth:L,parent:N})=>[k(a(o.title)+" ",1),l("span",d,"(Click Count: "+a(o.clicktimes||"0")+")",1)]),noContentTemplate:c(({deepth:o})=>[r]),loadingTemplate:c(({item:o})=>[C]),_:1},8,["data","accordionType","restrictOneOpen","onItemClick","onMenuToggle"])])])}const{defineComponent:b,ref:u}=v,w=b({name:"accordion",setup(){const A=u(!1),T=u(!1),D=u([{title:"Content 1",open:!0,children:[{title:"Child Content 1"},{title:"Child Content 2"}]},{title:"Content 2",children:[{title:"Child Content 1"},{title:"Child Content 2"},{title:"Child Content 3"},{title:"Child Content 4"}]},{title:"Content 3",children:[{title:"Child Content 1 (disabled)",disabled:!0},{title:"Child Content 2"},{title:"Child Content 3"}]},{title:"Content 4 (Custom No Data Template)",children:[]},{title:"Content 5 (Custom loading Template)",needLoadChildren:!0,loading:!1,children:[]}]),o=u([{title:"Child Content 1"},{title:"Child Content 2"},{title:"Child Content 3"},{title:"Child Content 4"},{title:"Child Content 5"},{title:"Child Content 6"},{title:"Child Content 7"}]);return{menu:D,restrictOneOpen:A,accordionTypeEmbed:T,itemClick:m=>{m.item.clicktimes=(m.item.clicktimes||0)+1},menuToggle:m=>{m.open&&m.item.needLoadChildren&&(m.item.loading=!0,setTimeout(()=>{m.item.children=o.value,m.item.needLoadChildren=!1,m.item.loading=!1},1e3))},clearChildrenData:(m,q)=>{m.stopPropagation(),q.children=[],q.needLoadChildren=!0,q.open=!1}}}});return _({render:g},w)}(),"render-demo-2":function(){const{toDisplayString:a,createElementVNode:s,resolveComponent:e,withCtx:i,createVNode:k,openBlock:l,createElementBlock:F}=v,c={class:"inner-template-menu"},y={class:"devui-accordion-submenu devui-accordion-show-animate inner-template-my-menu"};function E(d,r){const C=e("d-accordion");return l(),F("div",null,[s("div",c,[k(C,{data:d.menu,accordionType:d.accordionTypeEmbed?"embed":"normal",restrictOneOpen:d.restrictOneOpen},{innerListTemplate:i(({item:g,deepth:b})=>[s("div",y,a(g.content),1)]),_:1},8,["data","accordionType","restrictOneOpen"])])])}const{defineComponent:h,ref:p}=v,B=h({name:"accordion",setup(){const d=p(!1),r=p(!1);return{menu:p([{title:"Content 1",children:[],content:"Child Content of Content 1"},{title:"Content 2",children:[],content:"Child Content of Content 2"}]),restrictOneOpen:d,accordionTypeEmbed:r}}});return _({render:E},B)}(),"render-demo-3":function(){const{resolveComponent:a,createVNode:s,createElementVNode:e,createCommentVNode:i,createTextVNode:k,openBlock:l,createElementBlock:F}=v,c={class:"multi-child-menu"},y={class:"multi-child-option"},E=k(" auto expend active menu");function h(r,C){const g=a("d-accordion"),b=a("d-switch");return l(),F("div",null,[e("div",c,[s(g,{data:r.menu,autoOpenActiveMenu:r.autoOpenActiveMenu},null,8,["data","autoOpenActiveMenu"])]),e("div",y,[s(b,{checked:r.autoOpenActiveMenu,"onUpdate:checked":C[0]||(C[0]=u=>r.autoOpenActiveMenu=u)},null,8,["checked"]),E,i("\u81EA\u52A8\u5C55\u5F00\u6FC0\u6D3B\u7684\u83DC\u5355")])])}const{defineComponent:p,ref:B}=v,d=p({name:"accordion",setup(){const r=B(!1);return{menu:B([{title:"Content 1 (as a leaf menu)"},{title:"Content 2 (as a parent menu, has children)",children:[{title:"Child Content 1"},{title:"Child Content 2"},{title:"Child Content 3"}]},{title:"Content 3 (as a parent menu, has children)",children:[{title:"Child Content 1 (has children)",children:[{title:"Child Content 1"},{title:"Child Content 2",active:!0},{title:"Child Content 3"}]},{title:"Child Content 2 (has children",children:[{title:"Child Content 1"},{title:"Child Content 2 (has children",children:[{title:"Child Content 1"},{title:"Child Content 2"},{title:"Child Content 3"}]},{title:"Child Content 3"}]},{title:"Child Content 2"},{title:"Child Content 3"}]},{title:"Content 4 (as a parent menu, has no child)",children:[]}]),autoOpenActiveMenu:r}}});return _({render:h},d)}(),"render-demo-4":function(){const{resolveComponent:a,createVNode:s,createElementVNode:e,openBlock:i,createElementBlock:k}=v,l={class:"change-key-menu"};function F(p,B){var r,C,g,b,u;const d=a("d-accordion");return i(),k("div",null,[e("div",l,[s(d,{data:p.menu,titleKey:(r=p.key)==null?void 0:r.titleKey,activeKey:(C=p.key)==null?void 0:C.activeKey,disabledKey:(g=p.key)==null?void 0:g.disabledKey,openKey:(b=p.key)==null?void 0:b.openKey,childrenKey:(u=p.key)==null?void 0:u.childrenKey},null,8,["data","titleKey","activeKey","disabledKey","openKey","childrenKey"])])])}const{defineComponent:c,reactive:y,ref:E}=v,h=c({name:"accordion",setup(){const p=y({titleKey:"value",activeKey:"$selected",disabledKey:"forbidden",openKey:"$show",childrenKey:"subs"});return{menu:E([{value:"Content 1"},{value:"Content 2 (expended)",$show:!0,subs:[{value:"Child Content 1 (disabled)",forbidden:!0},{value:"Child Content 2 (active)",$selected:!0},{value:"Child Content 3"}]}]),key:p}}});return _({render:F},h)}()}},ln='{"title":"Accordion \u624B\u98CE\u7434","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4F55\u65F6\u4F7F\u7528","slug":"\u4F55\u65F6\u4F7F\u7528"},{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4F7F\u7528\u6A21\u677F","slug":"\u4F7F\u7528\u6A21\u677F"},{"level":3,"title":"\u590D\u5408\u5C42\u7EA7\u548C\u81EA\u52A8\u5C55\u5F00","slug":"\u590D\u5408\u5C42\u7EA7\u548C\u81EA\u52A8\u5C55\u5F00"},{"level":3,"title":"\u6539\u53D8\u952E\u503C","slug":"\u6539\u53D8\u952E\u503C"},{"level":3,"title":"API","slug":"api"},{"level":3,"title":"d-accordion \u4E8B\u4EF6","slug":"d-accordion-\u4E8B\u4EF6"},{"level":3,"title":"Accordion\u7C7B\u578B\u5B9A\u4E49","slug":"accordion\u7C7B\u578B\u5B9A\u4E49"},{"level":3,"title":"AccordionProps","slug":"accordionprops"},{"level":3,"title":"\u6A21\u677F\u53EF\u4EE5\u7528\u53D8\u91CF\u503C(\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B)","slug":"\u6A21\u677F\u53EF\u4EE5\u7528\u53D8\u91CF\u503C-\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B"},{"level":3,"title":"menuItemTemplate \u53EF\u7528\u53D8\u91CF\u503C","slug":"menuitemtemplate-\u53EF\u7528\u53D8\u91CF\u503C"},{"level":3,"title":"itemTemplate \u53EF\u7528\u53D8\u91CF\u503C","slug":"itemtemplate-\u53EF\u7528\u53D8\u91CF\u503C"},{"level":3,"title":"noContentTemplate \u53EF\u7528\u53D8\u91CF\u503C","slug":"nocontenttemplate-\u53EF\u7528\u53D8\u91CF\u503C"},{"level":3,"title":"loadingTemplate \u53EF\u7528\u53D8\u91CF\u503C","slug":"loadingtemplate-\u53EF\u7528\u53D8\u91CF\u503C"},{"level":3,"title":"innerListTemplate \u53EF\u7528\u53D8\u91CF\u503C","slug":"innerlisttemplate-\u53EF\u7528\u53D8\u91CF\u503C"}],"relativePath":"components/accordion/index.md","lastUpdated":1639756373006}',z=V('<h1 id="accordion-\u624B\u98CE\u7434" tabindex="-1">Accordion \u624B\u98CE\u7434 <a class="header-anchor" href="#accordion-\u624B\u98CE\u7434" aria-hidden="true">#</a></h1><p>\u4E3A\u9875\u9762\u63D0\u4F9B\u5BFC\u822A\u7684\u7EC4\u4EF6\u3002</p><h3 id="\u4F55\u65F6\u4F7F\u7528" tabindex="-1">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528" aria-hidden="true">#</a></h3><p>\u9700\u8981\u901A\u8FC7\u5206\u7EC4\u7EC4\u7EC7\u83DC\u5355\u7684\u65F6\u5019\u4F7F\u7528\u3002</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3><p>\u4F20\u5165\u83DC\u5355\uFF0C\u76D1\u542C\u542B\u5B50\u9879\u7684\u53EF\u5C55\u5F00\u83DC\u5355\u7684\u5F00\u5408\u4E8B\u4EF6(menuToggle)\u6216\u53EF\u70B9\u51FB\u83DC\u5355\u7684\u70B9\u51FB\u4E8B\u4EF6(itemClick)\u3002\u53EF\u5C55\u5F00\u83DC\u5355\u9ED8\u8BA4\u5C55\u5F00\u4F7F\u7528\u5C5E\u6027open\uFF0C\u53EF\u70B9\u51FB\u83DC\u5355\u9ED8\u8BA4\u6FC0\u6D3B\u4F7F\u7528\u5C5E\u6027active\uFF0C\u7981\u7528\u9879\u4F7F\u7528disabled\u3002\u901A\u8FC7restrictOneOpen\u8BBE\u7F6E\u662F\u5426\u9650\u5236\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u4E00\u7EA7\u83DC\u5355\u3002</p>',6),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basic-menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-accordion")]),t(`
            `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":accordionType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("accordionTypeEmbed ? "),n("span",{class:"token punctuation"},"'"),t("embed"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),t("normal"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":restrictOneOpen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("restrictOneOpen"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"@itemClick"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("itemClick"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"@menuToggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menuToggle"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":loadingTemplate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#loadingTemplate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),t("{item,deepth}")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},"'"),t("devui-accordion-item"),n("span",{class:"token punctuation"},"'")]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(`
                        `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-accordion-item-title devui-over-flow-ellipsis"),n("span",{class:"token punctuation"},'"')]),t(`
                        `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token property"},"textIndent"),n("span",{class:"token punctuation"},":"),t(" deepth * 20 + "),n("span",{class:"token string"},"'px'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},'"')])]),t(`
                    `),n("span",{class:"token punctuation"},">")]),t(`
                        \u81EA\u5B9A\u4E49\u52A0\u8F7D...
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-accordion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basic-option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-switch")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("restrictOneOpen"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-switch")]),n("span",{class:"token punctuation"},">")]),t(" Only one level-1 menu can be expanded."),n("span",{class:"token comment"},"<!--\u9650\u5236\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u4E00\u7EA7\u83DC\u5355-->"),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("basic-option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-switch")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("accordionTypeEmbed"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-switch")]),n("span",{class:"token punctuation"},">")]),t(" Embedded menu (no shadow)"),n("span",{class:"token comment"},"<!--\u5185\u5D4C\u83DC\u5355\u5F62\u5F0F\uFF08\u65E0\u9634\u5F71\uFF09-->"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"accordion"'),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" restrictOneOpen "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" accordionTypeEmbed "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 1'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content '"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 2\uFF08This is a long sentence for option display.\uFF09'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1 (This is a long sentence for option display.)'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 3 (Default Open)'"),n("span",{class:"token punctuation"},","),t(`
            open`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1 (Disabled)'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2 (Default Active)'"),n("span",{class:"token punctuation"},","),t(" active"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 4 (No Child)'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 5 (Disabled)'"),n("span",{class:"token punctuation"},","),t(`
            disabled`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 6 (Dynamic Content)'"),n("span",{class:"token punctuation"},","),t(`
            needLoadChildren`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            loading`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"itemClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'item click'"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),t("event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"menuToggle"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'menu toggle'"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),t("event"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("event"),n("span",{class:"token punctuation"},"."),t("open "),n("span",{class:"token operator"},"&&"),t(" event"),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("needLoadChildren"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
                event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
                `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                    event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("children "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),t(`
                        `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                        `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),t(`
                    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
                    event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("needLoadChildren "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
                    event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"2000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`

        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            menu`),n("span",{class:"token punctuation"},","),t(`
            restrictOneOpen`),n("span",{class:"token punctuation"},","),t(`
            accordionTypeEmbed`),n("span",{class:"token punctuation"},","),t(`
            itemClick`),n("span",{class:"token punctuation"},","),t(`
            menuToggle
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".basic-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".basic-option"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".basic-option > d-toggle"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("3px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" 250px"),n("span",{class:"token punctuation"},")")]),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".basic-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 80%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},"ul"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"list-style"),n("span",{class:"token punctuation"},":"),t(` none
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),R=n("h3",{id:"\u4F7F\u7528\u6A21\u677F",tabindex:"-1"},[t("\u4F7F\u7528\u6A21\u677F "),n("a",{class:"header-anchor",href:"#\u4F7F\u7528\u6A21\u677F","aria-hidden":"true"},"#")],-1),G=n("p",null,"\u53EF\u5C55\u5F00\u83DC\u5355\u548C\u53EF\u70B9\u51FB\u83DC\u5355\u5206\u522B\u4F7F\u7528\u6A21\u677F\u3002\u53EF\u5C55\u5F00\u83DC\u5355\u6307\u5B9AmenuItemTemplate\uFF0C\u53EF\u70B9\u51FB\u83DC\u5355\u6307\u5B9AitemTemplate\u3002\u6CA1\u6709\u6570\u636E\u6A21\u677F\u6307\u5B9AnoContentTemplate\uFF0C\u5E76\u53EF\u4EE5\u901A\u8FC7showNoContent\u63A7\u5236\u65E0\u6570\u636E\u7684\u65F6\u5019\u4E0D\u5C55\u5F00\u3002 \u52A0\u8F7D\u4E2D\u6A21\u677F\u6307\u5B9AloadingTemplate\uFF0C\u901A\u8FC7item\u7684loadingKey\u5BF9\u5E94\u7684\u5C5E\u6027\u503C\u63A7\u5236\u662F\u5426\u663E\u793A\u52A0\u8F7D\u4E2D\u3002",-1),Q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("use-template-menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-accordion")]),t(`
            `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":accordionType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("accordionTypeEmbed ? "),n("span",{class:"token punctuation"},"'"),t("embed"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),t("normal"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":restrictOneOpen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("restrictOneOpen"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"@itemClick"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("itemClick"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},"@menuToggle"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menuToggle"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#menuItemTemplate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),t("{item,deepth,parent}")]),n("span",{class:"token punctuation"},">")]),t(`
                {{ item.title }}
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("use-template-badge"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.children?.length"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ item.children.length }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("operation-clear"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("item.needLoadChildren === false"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clearChildrenData($event, item)"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                    reset
                    `),n("span",{class:"token comment"},"<!--\u91CD\u7F6E-->"),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#itemTemplate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),t("{item,deepth,parent}")]),n("span",{class:"token punctuation"},">")]),t(`
                {{ item.title }}
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("use-template-info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("(Click Count: {{ item.clicktimes || '0' }})"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#noContentTemplate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),t("{deepth}")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-accordion-item disabled"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-accordion-item-title devui-over-flow-ellipsis disabled"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),t(),n("span",{class:"token property"},"textIndent"),n("span",{class:"token punctuation"},":"),t(" deepth * 20 + "),n("span",{class:"token string"},"'px'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t(`
                        Not available yet. Please wait.
                    `),n("span",{class:"token comment"},"<!--\u5C1A\u672A\u5F00\u653E\uFF0C\u656C\u8BF7\u671F\u5F85...-->"),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#loadingTemplate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),t("{item}")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("li")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-accordion-item"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
                    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("use-template-loading"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("use-template-circle-spinner"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(" loading..."),n("span",{class:"token comment"},"<!--\u6B63\u5728\u7528\u529B\u5730\u52A0\u8F7D\u4E2D...-->"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("li")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-accordion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"accordion"'),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" restrictOneOpen "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" accordionTypeEmbed "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 1'"),n("span",{class:"token punctuation"},","),t(`
            open`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 2'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 4'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 3'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1 (disabled)'"),n("span",{class:"token punctuation"},","),t(" disabled"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 4 (Custom No Data Template)'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token comment"},"// \u53EF\u5C55\u5F00\u83DC\u5355\u8282\u70B9\u5FC5\u987B\u6709children\u975Eundefined"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 5 (Custom loading Template)'"),n("span",{class:"token punctuation"},","),t(`
            needLoadChildren`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            loading`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" childrenData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 4'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 5'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 6'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 7'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(`

        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"itemClick"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("clicktimes "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("event"),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("clicktimes "),n("span",{class:"token operator"},"||"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`

        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"menuToggle"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"event"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("event"),n("span",{class:"token punctuation"},"."),t("open "),n("span",{class:"token operator"},"&&"),t(" event"),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("needLoadChildren"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
            event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token function"},"setTimeout"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
                event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("children "),n("span",{class:"token operator"},"="),t(" childrenData"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},";"),t(`
                event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("needLoadChildren "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
                event`),n("span",{class:"token punctuation"},"."),t("item"),n("span",{class:"token punctuation"},"."),t("loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`

        `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"clearChildrenData"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("event"),n("span",{class:"token punctuation"},","),t(" item")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            event`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stopPropagation"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            item`),n("span",{class:"token punctuation"},"."),t("children "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
            item`),n("span",{class:"token punctuation"},"."),t("needLoadChildren "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
            item`),n("span",{class:"token punctuation"},"."),t("open "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`

        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            menu`),n("span",{class:"token punctuation"},","),t(`
            restrictOneOpen`),n("span",{class:"token punctuation"},","),t(`
            accordionTypeEmbed`),n("span",{class:"token punctuation"},","),t(`
            itemClick`),n("span",{class:"token punctuation"},","),t(`
            menuToggle`),n("span",{class:"token punctuation"},","),t(`
            clearChildrenData
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".use-template-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 400px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".use-template-badge"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 16px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #ffffff"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"text-align"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"background"),n("span",{class:"token punctuation"},":"),t(" #5e7ce0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"font-weight"),n("span",{class:"token punctuation"},":"),t(" normal"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".use-template-loading"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" relative"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 40px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding-left"),n("span",{class:"token punctuation"},":"),t(" 64px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".use-template-circle-spinner"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"top"),n("span",{class:"token punctuation"},":"),t(" 10px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"left"),n("span",{class:"token punctuation"},":"),t(" 36px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"position"),n("span",{class:"token punctuation"},":"),t(" absolute"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform-origin"),n("span",{class:"token punctuation"},":"),t(" center"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"animation"),n("span",{class:"token punctuation"},":"),t(" circle infinite 0.75s linear"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),t(" 2px solid #5e7ce0"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-top-color"),n("span",{class:"token punctuation"},":"),t(" transparent"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),t(" 50%"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@keyframes"),t(" circle")]),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},"0%"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"rotate"),n("span",{class:"token punctuation"},"("),t("0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`

  `),n("span",{class:"token selector"},"100%"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"rotate"),n("span",{class:"token punctuation"},"("),t("360deg"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},")")]),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".use-template-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 80%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=n("p",null,"\u5185\u90E8\u5217\u8868\u901A\u8FC7\u5236\u5B9AinnerListTemplate\u4F7F\u7528\u6A21\u677F\u3002",-1),X=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("inner-template-menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-accordion")]),t(`
            `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":accordionType"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("accordionTypeEmbed ? "),n("span",{class:"token punctuation"},"'"),t("embed"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),t("normal"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":restrictOneOpen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("restrictOneOpen"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#innerListTemplate"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),t("{item,deepth}")]),n("span",{class:"token punctuation"},">")]),t(`
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(` 
                    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("devui-accordion-submenu devui-accordion-show-animate inner-template-my-menu"),n("span",{class:"token punctuation"},'"')]),t(`
                `),n("span",{class:"token punctuation"},">")]),t(`
                    {{item.content}}
                `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
            `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-accordion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"accordion"'),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" restrictOneOpen "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" accordionTypeEmbed "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 1'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content of Content 1'"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 2'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
            content`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content of Content 2'"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`


        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            menu`),n("span",{class:"token punctuation"},","),t(`
            restrictOneOpen`),n("span",{class:"token punctuation"},","),t(`
            accordionTypeEmbed`),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".inner-template-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 400px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".inner-template-my-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"min-height"),n("span",{class:"token punctuation"},":"),t(" 60px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 40px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"padding"),n("span",{class:"token punctuation"},":"),t(" 12px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},")")]),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".inner-template-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 80%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),Z=n("h3",{id:"\u590D\u5408\u5C42\u7EA7\u548C\u81EA\u52A8\u5C55\u5F00",tabindex:"-1"},[t("\u590D\u5408\u5C42\u7EA7\u548C\u81EA\u52A8\u5C55\u5F00 "),n("a",{class:"header-anchor",href:"#\u590D\u5408\u5C42\u7EA7\u548C\u81EA\u52A8\u5C55\u5F00","aria-hidden":"true"},"#")],-1),nn=n("p",null,"\u652F\u6301\u591A\u5C42\u7EA7\u548C\u4E0D\u9650\u5236\u5D4C\u5957\u5C42\u7EA7\u3002\u53EF\u4EE5\u72EC\u7ACB\u4F7F\u7528autoOpenActiveMenu\u4F7F\u5F97\u6FC0\u6D3B\u7684\u83DC\u5355\u7684\u7236\u5C42\u7EA7\u81EA\u52A8\u5C55\u5F00\u3002",-1),tn=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multi-child-menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-accordion")]),t(`
            `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":autoOpenActiveMenu"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("autoOpenActiveMenu"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-accordion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`

    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("multi-child-option"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-switch")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("checked")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("autoOpenActiveMenu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-switch")]),n("span",{class:"token punctuation"},">")]),t(" auto expend active menu"),n("span",{class:"token comment"},"<!--\u81EA\u52A8\u5C55\u5F00\u6FC0\u6D3B\u7684\u83DC\u5355-->"),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"accordion"'),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" autoOpenActiveMenu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 1 (as a leaf menu)'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 2 (as a parent menu, has children)'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 3 (as a parent menu, has children)'"),n("span",{class:"token punctuation"},","),t(`

            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1 (has children)'"),n("span",{class:"token punctuation"},","),t(`
                children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},","),t(" active"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
                title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2 (has children'"),n("span",{class:"token punctuation"},","),t(`
                children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t(`
                    title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2 (has children'"),n("span",{class:"token punctuation"},","),t(`
                    children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
                    `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                    `),n("span",{class:"token punctuation"},"]"),t(`
                `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
                `),n("span",{class:"token punctuation"},"]"),t(`
            `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t("title"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            title`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 4 (as a parent menu, has no child)'"),n("span",{class:"token punctuation"},","),t(`
            children`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`


        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            menu`),n("span",{class:"token punctuation"},","),t(`
            autoOpenActiveMenu
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".multi-child-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 400px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".multi-child-option"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"line-height"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"vertical-align"),n("span",{class:"token punctuation"},":"),t(" middle"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 20px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".multi-child-option > d-toggle"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"display"),n("span",{class:"token punctuation"},":"),t(" inline-block"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"transform"),n("span",{class:"token punctuation"},":"),t(),n("span",{class:"token function"},"translateY"),n("span",{class:"token punctuation"},"("),t("3px"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},")")]),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".multi-child-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 80%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),an=n("h3",{id:"\u6539\u53D8\u952E\u503C",tabindex:"-1"},[t("\u6539\u53D8\u952E\u503C "),n("a",{class:"header-anchor",href:"#\u6539\u53D8\u952E\u503C","aria-hidden":"true"},"#")],-1),sn=n("p",null,"\u901A\u8FC7titleKey,childrenKey,disabledKey,activeKey\u7B49\u7B49\u6539\u53D8\u6570\u7EC4\u952E\u503C\uFF0C\u9002\u914D\u4E0D\u540C\u7684\u63A5\u53E3\u7C7B\u578B\u5B9A\u4E49\u3002",-1),en=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("change-key-menu"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-accordion")]),t(`
            `),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("menu"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":titleKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("key?.titleKey"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":activeKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("key?.activeKey"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":disabledKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("key?.disabledKey"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":openKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("key?.openKey"),n("span",{class:"token punctuation"},'"')]),t(`
            `),n("span",{class:"token attr-name"},":childrenKey"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("key?.childrenKey"),n("span",{class:"token punctuation"},'"')]),t(`
        `),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-accordion")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" reactive"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},'"accordion"'),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" key "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
            titleKey`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'value'"),n("span",{class:"token punctuation"},","),t(`
            activeKey`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'$selected'"),n("span",{class:"token punctuation"},","),t(`
            disabledKey`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'forbidden'"),n("span",{class:"token punctuation"},","),t(`
            openKey`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'$show'"),n("span",{class:"token punctuation"},","),t(`
            childrenKey`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'subs'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" menu "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 1'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
            value`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Content 2 (expended)'"),n("span",{class:"token punctuation"},","),t(`
            $show`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),t(`
            subs`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"["),t(`
            `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 1 (disabled)'"),n("span",{class:"token punctuation"},","),t(" forbidden"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 2 (active)'"),n("span",{class:"token punctuation"},","),t(" $selected"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token boolean"},"true"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"{"),t(" value"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Child Content 3'"),t(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
            `),n("span",{class:"token punctuation"},"]"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

        `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
            menu`),n("span",{class:"token punctuation"},","),t(`
            key
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".change-key-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 400px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token atrule"},[n("span",{class:"token rule"},"@media"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token property"},"max-width"),n("span",{class:"token punctuation"},":"),t(" 500px"),n("span",{class:"token punctuation"},")")]),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token selector"},".change-key-menu"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 80%"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),on=V(`<h3 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53C2\u6570</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u9ED8\u8BA4</th><th style="text-align:center;">\u8BF4\u660E</th><th style="text-align:center;">\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">data</td><td style="text-align:center;"><code>Array&lt;any&gt; | AccordionMenuType</code></td><td style="text-align:center;">--</td><td style="text-align:center;">\u5FC5\u9009\uFF0C\u6570\u636E\u6E90\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u6570\u7EC4\u6216\u8005\u4F7F\u7528\u9884\u8BBE\u7684<code>AccordionMenuType</code></td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">titleKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;title&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6807\u9898\u7684\u5C5E\u6027\u540D\uFF0Citem[titleKey]\u7C7B\u578B\u4E3A<code>string</code>\uFF0C\u4E3A\u6807\u9898\u663E\u793A\u5185\u5BB9</td><td style="text-align:center;"><a href="#%E6%94%B9%E5%8F%98%E9%94%AE%E5%80%BC">\u6539\u53D8\u952E\u503C</a></td></tr><tr><td style="text-align:center;">loadingKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;loading&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5B50\u83DC\u5355\u662F\u5426\u52A0\u8F7D\u4E2D\u7684\u5224\u65AD\u5C5E\u6027\u540D\uFF0Citem[loadingKey]\u7C7B\u578B\u4E3A<code>boolean</code></td><td style="text-align:center;"><a href="#%E6%94%B9%E5%8F%98%E9%94%AE%E5%80%BC">\u6539\u53D8\u952E\u503C</a></td></tr><tr><td style="text-align:center;">childrenKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;children&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5B50\u83DC\u5355\u7684\u5C5E\u6027\u540D\uFF0Citem[childrenKey]\u7C7B\u578B\u4E3A<code>Array&lt;any&gt;</code></td><td style="text-align:center;"><a href="#%E6%94%B9%E5%8F%98%E9%94%AE%E5%80%BC">\u6539\u53D8\u952E\u503C</a></td></tr><tr><td style="text-align:center;">disabledKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;disabled&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u7981\u7528\u7684\u5C5E\u6027\u540D\uFF0Citem[disabledKey]\u7C7B\u578B\u4E3A<code>boolean</code></td><td style="text-align:center;"><a href="#%E6%94%B9%E5%8F%98%E9%94%AE%E5%80%BC">\u6539\u53D8\u952E\u503C</a></td></tr><tr><td style="text-align:center;">activeKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;active&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5B50\u83DC\u5355\u662F\u5426\u6FC0\u6D3B\u7684\u5C5E\u6027\u540D\uFF0Citem[activeKey]\u7C7B\u578B\u4E3A<code>boolean</code></td><td style="text-align:center;"><a href="#%E6%94%B9%E5%8F%98%E9%94%AE%E5%80%BC">\u6539\u53D8\u952E\u503C</a></td></tr><tr><td style="text-align:center;">openKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;open&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u83DC\u5355\u662F\u5426\u5C55\u5F00\u7684\u5C5E\u6027\u540D\uFF0Citem[openKey]\u7C7B\u578B\u4E3A<code>boolean</code></td><td style="text-align:center;"><a href="#%E6%94%B9%E5%8F%98%E9%94%AE%E5%80%BC">\u6539\u53D8\u952E\u503C</a></td></tr><tr><td style="text-align:center;">restrictOneOpen</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u9650\u5236\u4E00\u7EA7\u83DC\u5355\u540C\u65F6\u53EA\u80FD\u6253\u5F00\u4E00\u4E2A\uFF0C \u9ED8\u8BA4\u4E0D\u9650\u5236</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">menuItemTemplate</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C \u53EF\u5C55\u5F00\u83DC\u5355\u5185\u5BB9\u6761\u6A21\u677F\uFF0C\u53EF\u7528\u53D8\u91CF\u503C\u89C1\u4E0B</td><td style="text-align:center;"><a href="#%E4%BD%BF%E7%94%A8%E6%A8%A1%E6%9D%BF">\u4F7F\u7528\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">itemTemplate</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u53EF\u70B9\u51FB\u83DC\u5355\u5185\u5BB9\u6761\u6A21\u677F\uFF0C\u53EF\u7528\u53D8\u91CF\u503C\u89C1\u4E0B</td><td style="text-align:center;"><a href="#%E4%BD%BF%E7%94%A8%E6%A8%A1%E6%9D%BF">\u4F7F\u7528\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">noContentTemplate</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u6CA1\u6709\u5185\u5BB9\u7684\u65F6\u5019\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u677F\uFF0C\u53EF\u7528\u53D8\u91CF\u503C\u89C1\u4E0B</td><td style="text-align:center;"><a href="#%E4%BD%BF%E7%94%A8%E6%A8%A1%E6%9D%BF">\u4F7F\u7528\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">loadingTemplate</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u52A0\u8F7D\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u677F\uFF0C\u53EF\u7528\u53D8\u91CF\u503C\u89C1\u4E0B</td><td style="text-align:center;"><a href="#%E4%BD%BF%E7%94%A8%E6%A8%A1%E6%9D%BF">\u4F7F\u7528\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">innerListTemplate</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5B50\u5217\u8868\u5185\u5BB9\u5B8C\u5168\u81EA\u5B9A\u4E49\uFF0C\u7528\u505A\u6298\u53E0\u9762\u677F\uFF0C\u53EF\u7528\u53D8\u91CF\u503C\u89C1\u4E0B</td><td style="text-align:center;"><a href="#%E4%BD%BF%E7%94%A8%E6%A8%A1%E6%9D%BF">\u4F7F\u7528\u6A21\u677F</a></td></tr><tr><td style="text-align:center;">linkType</td><td style="text-align:center;"><code>&#39;routerLink&#39;|&#39;hrefLink&#39;|&#39;dependOnLinkTypeKey&#39;|&#39;&#39;</code></td><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C<code>&#39;routerLink&#39;</code>\u4E3A\u8DEF\u7531\u573A\u666F\uFF1B<code>&#39;hrefLink&#39;</code>\u4E3A\u5916\u90E8\u94FE\u63A5\u573A\u666F\uFF1B<code>&#39;dependOnLinkTypeKey&#39;</code>\u4E3A\u52A8\u6001\u8DEF\u7531\u6216\u5916\u90E8\u94FE\u63A5\u573A\u666F\uFF1B<code>&#39;&#39;</code>\u4E3A\u9ED8\u8BA4\u975E\u94FE\u63A5\u7C7B\u578B\uFF08\u65E0\u6CD5\u53F3\u952E\u6253\u5F00\u65B0\u6807\u7B7E\u9875\uFF09</td><td style="text-align:center;"><a href="#%E5%86%85%E7%BD%AE%E8%B7%AF%E7%94%B1%E5%92%8C%E9%93%BE%E6%8E%A5%E7%B1%BB%E5%9E%8B">\u5185\u7F6E\u8DEF\u7531\u548C\u94FE\u63A5\u7C7B\u578B</a></td></tr><tr><td style="text-align:center;">linkTypeKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;linkType&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u94FE\u63A5\u5185\u5BB9\u7684\u7C7B\u578B\u7684 key \u503C\uFF0C\u7528\u4E8E linkType \u4E3A<code>&#39;dependOnLinkTypeKey&#39;</code>\u65F6\u6307\u5B9A\u5BF9\u8C61\u94FE\u63A5\u7C7B\u578B\u5C5E\u6027\u540D\uFF0Citem[linkTypeKey]\u7C7B\u578B\u4E3A<code>&#39;routerLink&#39;|&#39;hrefLink&#39;| string</code>\uFF0C\u5176\u4E2D<code>&#39;routerLink&#39;</code>\u4E3A\u8DEF\u7531\u94FE\u63A5\uFF0C<code>&#39;hrefLink&#39;</code>\u4E3A\u5916\u90E8\u94FE\u63A5\uFF0C\u5176\u4ED6\u4E3A\u9ED8\u8BA4\u975E\u94FE\u63A5\u7C7B\u578B</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">linkKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;link&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u94FE\u63A5\u5185\u5BB9\u7684 key\uFF0C\u7528\u4E8E linkType \u4E3A\u8FDE\u63A5\u7C7B\u578B\u8BB0\u975E<code>&#39;&#39;</code>\u65F6\uFF0C\u94FE\u63A5\u7684\u53D6\u503C\u7684\u5C5E\u6027\u503C\uFF0Citem[linkKey]\u4E3A\u8DEF\u7531\u5730\u5740\u6216\u8005\u8D85\u94FE\u63A5\u5730\u5740</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">linkTargetKey</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;target&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u94FE\u63A5\u76EE\u6807\u7A97\u53E3\u7684 key\uFF0C\u7528\u4E8E\u94FE\u63A5\u7C7B\u578B\uFF0Citem[linkTargetKey]\u4E3A\u5355\u4E2A\u94FE\u63A5\u7684\u76EE\u6807\u7A97\u53E3</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">linkDefaultTarget</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">&#39;_self&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u4E0D\u8BBE\u7F6E target \u7684\u65F6\u5019 target \u9ED8\u8BA4\u503C\u4E3A<code>&#39;_self&#39;</code>\uFF0C\u7528\u4E8E\u94FE\u63A5\u7C7B\u578B, \u53D6\u503C\u7B49\u540C\u4E8E a \u94FE\u63A5\u7684 target \u5C5E\u6027</td><td style="text-align:center;"><a href="#%E5%86%85%E7%BD%AE%E8%B7%AF%E7%94%B1%E5%92%8C%E9%93%BE%E6%8E%A5%E7%B1%BB%E5%9E%8B">\u5185\u7F6E\u8DEF\u7531\u548C\u94FE\u63A5\u7C7B\u578B</a></td></tr><tr><td style="text-align:center;">autoOpenActiveMenu</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">false</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u81EA\u52A8\u5C55\u5F00\u5E26\u6709\u6D3B\u8DC3\u5B50\u9879\u7684\u83DC\u5355</td><td style="text-align:center;"><a href="#%E5%A4%8D%E5%90%88%E5%B1%82%E7%BA%A7%E5%92%8C%E8%87%AA%E5%8A%A8%E5%B1%95%E5%BC%80">\u590D\u5408\u5C42\u7EA7\u548C\u81EA\u52A8\u5C55\u5F00</a></td></tr><tr><td style="text-align:center;">accordionType</td><td style="text-align:center;"><code>&#39;normal&#39;|&#39;embed&#39;</code></td><td style="text-align:center;">&#39;normal&#39;</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u83DC\u5355\u5F62\u5F0F\u662F\u666E\u901A\uFF08\u5E26\u9634\u5F71\uFF09\u8FD8\u662F\u5185\u5D4C\uFF08\u4E0D\u5E26\u9634\u5F71\uFF09</td><td style="text-align:center;"><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">showAnimation</td><td style="text-align:center;"><code>boolean</code></td><td style="text-align:center;">true</td><td style="text-align:center;">\u53EF\u9009\uFF0C\u662F\u5426\u5C55\u793A\u52A8\u753B</td><td style="text-align:center;"><a href="#%E5%86%85%E7%BD%AE%E8%B7%AF%E7%94%B1%E5%92%8C%E9%93%BE%E6%8E%A5%E7%B1%BB%E5%9E%8B">\u5185\u7F6E\u8DEF\u7531\u548C\u94FE\u63A5\u7C7B\u578B</a></td></tr></tbody></table><h3 id="d-accordion-\u4E8B\u4EF6" tabindex="-1">d-accordion \u4E8B\u4EF6 <a class="header-anchor" href="#d-accordion-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u4E8B\u4EF6</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td style="text-align:center;">menuToggle</td><td style="text-align:center;"><code>EventEmitter&lt;</code><a href="#accordionmenutoggleevent"><code>AccordionMenuToggleEvent</code></a><code>&gt;</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u53EF\u5C55\u5F00\u83DC\u5355\u5C55\u5F00\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u5BF9\u8C61\u91CC\u5C5E\u6027 item \u4E3A\u70B9\u51FB\u7684\u5BF9\u8C61\u6570\u636E\uFF0Copen \u4E3A true \u5219\u5C06\u8981\u5C55\u5F00 false \u5219\u5C06\u8981\u5173\u95ED\uFF0C parent \u4E3A\u7236\u5BF9\u8C61\u6570\u636E\uFF0Cevent \u4E3A\u70B9\u51FB\u4E8B\u4EF6\u7684\u539F\u751F\u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">itemClick</td><td style="text-align:center;"><code>EventEmitter&lt;</code><a href="#accordionitemclickevent"><code>AccordionItemClickEvent</code></a><code>&gt;</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u53EF\u70B9\u51FB\u83DC\u5355\u70B9\u51FB\u4E8B\u4EF6\uFF0C\u8FD4\u56DE\u5BF9\u8C61\u91CC\u5C5E\u6027 item \u4E3A\u70B9\u51FB\u7684\u5BF9\u8C61\u6570\u636E\uFF0CpreActive \u5BF9\u8C61\u4E3A\u4E0A\u4E00\u6B21\u5C55\u5F00\u7684\u5BF9\u8C61\uFF0C parent \u4E3A\u7236\u5BF9\u8C61\u6570\u636E\uFF0Cevent \u4E3A\u70B9\u51FB\u4E8B\u4EF6\u7684\u539F\u751F\u4E8B\u4EF6</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr><tr><td style="text-align:center;">activeItemChange</td><td style="text-align:center;"><code>EventEmitter&lt;any&gt;</code></td><td style="text-align:center;">\u53EF\u9009\uFF0C\u5B50\u9879\u5207\u6362\u7684\u65F6\u5019\u4F1A\u53D1\u51FA\u65B0\u6FC0\u6D3B\u7684\u5B50\u9879\u7684\u6570\u636E</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="accordion\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">Accordion\u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#accordion\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token comment">/* \u57FA\u7840\u6570\u636E\u7C7B\u578B */</span>
<span class="token keyword">type</span> <span class="token class-name">AccordionMenuItemLinkType</span> <span class="token operator">=</span> <span class="token string">&#39;routerLink&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hrefLink&#39;</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionBase</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IAccordionActiveable</span> <span class="token punctuation">{</span>
  active<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IAccordionFoldable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  open<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  loading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  children<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IAccordionLinkable</span> <span class="token punctuation">{</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  linkType<span class="token operator">?</span><span class="token operator">:</span> AccordionMenuItemLinkType
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionBaseItem</span>
  <span class="token keyword">extends</span> <span class="token class-name">AccordionBase</span><span class="token punctuation">,</span>
  IAccordionActiveable <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionBaseMenu<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span>
  <span class="token keyword">extends</span> <span class="token class-name">AccordionBase</span><span class="token punctuation">,</span>
  IAccordionFoldable<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionLinkableItem</span>
  <span class="token keyword">extends</span> <span class="token class-name">AccordionBase</span><span class="token punctuation">,</span>
  IAccordionActiveable<span class="token punctuation">,</span>
  IAccordionLinkable <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionMenuItem</span>
  <span class="token keyword">extends</span> <span class="token class-name">AccordionBase</span><span class="token punctuation">,</span>
  IAccordionActiveable<span class="token punctuation">,</span>
  IAccordionFoldable<span class="token operator">&lt;</span>AccordionMenuItem<span class="token operator">&gt;</span><span class="token punctuation">,</span>
  IAccordionLinkable <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AccordionMenuType</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>AccordionMenuItem<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token comment">/* \u57FA\u7840\u4E8B\u4EF6\u7C7B\u578B */</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionMenuToggleEvent</span> <span class="token punctuation">{</span>
  item<span class="token operator">:</span> <span class="token builtin">any</span>
  open<span class="token operator">:</span> <span class="token builtin">boolean</span>
  parent<span class="token operator">:</span> <span class="token builtin">any</span>
  event<span class="token operator">:</span> MouseEvent
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionItemClickEvent</span> <span class="token punctuation">{</span>
  item<span class="token operator">:</span> <span class="token builtin">any</span>
  prevActiveItem<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span>
  parent<span class="token operator">:</span> <span class="token builtin">any</span>
  event<span class="token operator">:</span> MouseEvent
<span class="token punctuation">}</span>

<span class="token comment">/* \u5E9F\u5F03\u63A5\u53E3 */</span>
<span class="token comment">/** @deprecated  merge into \`AccordionMenuItem\`*/</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionSubMenuItem</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  active<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token comment">/** @deprecated  use \`AccordionLinkableItem\` instead*/</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionSubMenuItemHrefLink</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  active<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token comment">/** @deprecated  use \`AccordionLinkableItem\` instead*/</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionSubMenuItemRouterLink</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  active<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
<span class="token comment">/** @deprecated  use \`AccordionLinkableItem\` instead*/</span>
<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">AccordionSubMenuItemDynamicLink</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span>
  linkType<span class="token operator">:</span> <span class="token string">&#39;routerLink&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;hrefLink&#39;</span> <span class="token operator">|</span> <span class="token builtin">string</span>
  target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  active<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="accordionprops" tabindex="-1">AccordionProps <a class="header-anchor" href="#accordionprops" aria-hidden="true">#</a></h3><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ExtractPropTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> AccordionMenuType <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;./accordion.type&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> accordionProps <span class="token operator">=</span> <span class="token punctuation">{</span>
	data<span class="token operator">:</span> <span class="token punctuation">{</span>
		type<span class="token operator">:</span> <span class="token builtin">Array</span> <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">|</span> AccordionMenuType<span class="token punctuation">,</span>
		<span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token comment">/* Key\u503C\u5B9A\u4E49, \u7528\u4E8E\u81EA\u5B9A\u4E49\u6570\u636E\u7ED3\u6784 */</span>
	titleKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;title&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u6807\u9898\u7684key\uFF0Citem[titleKey]\u7C7B\u578B\u4E3Astring\uFF0C\u4E3A\u6807\u9898\u663E\u793A\u5185\u5BB9</span>
	loadingKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;loading&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5B50\u83DC\u5355\u52A8\u6001\u52A0\u8F7Ditem[loadingKey]\u7C7B\u578B\u4E3Aboolean</span>
	childrenKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;children&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u5B50\u83DC\u5355Key</span>
	disabledKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;disabled&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u7981\u7528Key</span>
	activeKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;active&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u83DC\u5355\u662F\u5426\u6FC0\u6D3B/\u9009\u4E2D</span>
	openKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u83DC\u5355\u662F\u5426\u6253\u5F00</span>

	<span class="token comment">/* \u83DC\u5355\u6A21\u677F */</span>
	menuItemTemplate<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u5C55\u5F00\u83DC\u5355\u5185\u5BB9\u6761\u6A21\u677F</span>
	itemTemplate<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u70B9\u51FB\u83DC\u5355\u5185\u5BB9\u6761\u6A21\u677F</span>

	menuToggle<span class="token operator">:</span> <span class="token punctuation">{</span>
		type<span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
		<span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u5C55\u5F00\u83DC\u5355\u5C55\u5F00\u4E8B\u4EF6</span>
	itemClick<span class="token operator">:</span> <span class="token punctuation">{</span>
		type<span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
		<span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u70B9\u51FB\u83DC\u5355\u70B9\u51FB\u4E8B\u4EF6</span>
	activeItemChange<span class="token operator">:</span> <span class="token punctuation">{</span>
		type<span class="token operator">:</span> <span class="token builtin">Function</span> <span class="token keyword">as</span> <span class="token builtin">unknown</span> <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>event<span class="token operator">:</span> MouseEvent<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">,</span>
		<span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>

	<span class="token comment">/** \u9AD8\u7EA7\u9009\u9879\u548C\u6A21\u677F */</span>
	restrictOneOpen<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u9650\u5236\u4E00\u7EA7\u83DC\u5355\u540C\u65F6\u53EA\u80FD\u6253\u5F00\u4E00\u4E2A</span>
	autoOpenActiveMenu<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u81EA\u52A8\u5C55\u5F00\u6D3B\u8DC3\u83DC\u5355</span>
	showNoContent<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u6CA1\u6709\u5185\u5BB9\u7684\u65F6\u5019\u662F\u5426\u663E\u793A\u6CA1\u6709\u6570\u636E</span>
	noContentTemplate<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u6CA1\u6709\u5185\u5BB9\u7684\u65F6\u5019\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u677F</span>
	loadingTemplate<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u52A0\u8F7D\u4E2D\u4F7F\u7528\u81EA\u5B9A\u4E49\u6A21\u677F</span>
	innerListTemplate<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u6298\u53E0\u83DC\u5355\u5185\u5BB9\u5B8C\u5168\u81EA\u5B9A\u4E49\uFF0C\u7528\u505A\u6298\u53E0\u9762\u677F</span>

	<span class="token comment">/* \u5185\u7F6E\u8DEF\u7531/\u94FE\u63A5/\u52A8\u6001\u5224\u65AD\u8DEF\u7531\u6216\u94FE\u63A5\u7C7B\u578B */</span>
	linkType<span class="token operator">:</span> <span class="token punctuation">{</span>
		type<span class="token operator">:</span> String <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
			<span class="token operator">|</span> <span class="token string">&quot;routerLink&quot;</span>
			<span class="token operator">|</span> <span class="token string">&quot;hrefLink&quot;</span>
			<span class="token operator">|</span> <span class="token string">&quot;dependOnLinkTypeKey&quot;</span>
			<span class="token operator">|</span> <span class="token string">&quot;&quot;</span>
			<span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
		<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	linkTypeKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;linkType&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// linkType\u4E3A&#39;dependOnLinkTypeKey&#39;\u65F6\u6307\u5B9A\u5BF9\u8C61linkType\u5B9A\u4E49\u533A</span>
	linkKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;link&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u94FE\u63A5\u5185\u5BB9\u7684key</span>
	linkTargetKey<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;target&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u94FE\u63A5\u76EE\u6807\u7A97\u53E3\u7684key</span>
	linkDefaultTarget<span class="token operator">:</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;_self&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u8BBE\u7F6Etarget\u7684\u65F6\u5019target\u9ED8\u8BA4\u503C</span>

	accordionType<span class="token operator">:</span> <span class="token punctuation">{</span>
		type<span class="token operator">:</span> String <span class="token keyword">as</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token string">&quot;normal&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;embed&quot;</span><span class="token punctuation">,</span>
		<span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">AccordionProps</span> <span class="token operator">=</span> ExtractPropTypes<span class="token operator">&lt;</span><span class="token keyword">typeof</span> accordionProps<span class="token operator">&gt;</span><span class="token punctuation">;</span>

</code></pre></div><h3 id="\u6A21\u677F\u53EF\u4EE5\u7528\u53D8\u91CF\u503C-\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B" tabindex="-1">\u6A21\u677F\u53EF\u4EE5\u7528\u53D8\u91CF\u503C(\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B) <a class="header-anchor" href="#\u6A21\u677F\u53EF\u4EE5\u7528\u53D8\u91CF\u503C-\u4F7F\u7528\u65B9\u6CD5\u5982\u4E0B" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#templateName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{item}</span><span class="token punctuation">&gt;</span></span>
   {{item}}
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="menuitemtemplate-\u53EF\u7528\u53D8\u91CF\u503C" tabindex="-1">menuItemTemplate \u53EF\u7528\u53D8\u91CF\u503C <a class="header-anchor" href="#menuitemtemplate-\u53EF\u7528\u53D8\u91CF\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53D8\u91CF</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53D8\u91CF\u542B\u4E49\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">item</td><td style="text-align:center;"><code>any</code></td><td style="text-align:center;">\u53EF\u5C55\u5F00\u7C7B\u578B\u83DC\u5355\u6570\u636E</td></tr><tr><td style="text-align:center;">deepth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">\u8868\u793A\u5D4C\u5957\u7ED3\u6784\u5C42\u7EA7</td></tr><tr><td style="text-align:center;">parent</td><td style="text-align:center;"><code>any</code></td><td style="text-align:center;">\u6240\u5C5E\u7236\u7EA7\u83DC\u5355\u6570\u636E</td></tr><tr><td style="text-align:center;">~<s>titleKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 titleKey \u503C</s>~</td></tr><tr><td style="text-align:center;">~<s>disabledKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 disabledKey \u503C</s>~</td></tr><tr><td style="text-align:center;">~<s>openKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 openKey \u503C</s>~</td></tr><tr><td style="text-align:center;">~<s>menuToggleFn</s>~</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u53C2\u6570\u5E94\u4E3A item\uFF0C\u8868\u793A\u4E00\u7EA7\u83DC\u5355\u88AB\u70B9\u51FB</s>~</td></tr></tbody></table><h3 id="itemtemplate-\u53EF\u7528\u53D8\u91CF\u503C" tabindex="-1">itemTemplate \u53EF\u7528\u53D8\u91CF\u503C <a class="header-anchor" href="#itemtemplate-\u53EF\u7528\u53D8\u91CF\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53D8\u91CF</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53D8\u91CF\u542B\u4E49\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">item</td><td style="text-align:center;"><code>any</code></td><td style="text-align:center;">\u53EF\u70B9\u51FB\u7C7B\u578B\u83DC\u5355\u6570\u636E</td></tr><tr><td style="text-align:center;">deepth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">\u503C\u8868\u793A\u5D4C\u5957\u7ED3\u6784\u5C42\u7EA7</td></tr><tr><td style="text-align:center;">parent</td><td style="text-align:center;"><code>any</code></td><td style="text-align:center;">\u6240\u5C5E\u7236\u7EA7\u83DC\u5355\u6570\u636E</td></tr><tr><td style="text-align:center;">~<s>titleKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~~~ \u7EC4\u4EF6\u7684 titleKey \u503C~~~</td></tr><tr><td style="text-align:center;">~<s>disabledKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~~~ \u7EC4\u4EF6\u7684 disabledKey \u503C~~~</td></tr><tr><td style="text-align:center;">~<s>activeKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~~~ \u7EC4\u4EF6\u7684 activeKey \u503C~~~</td></tr><tr><td style="text-align:center;">~<s>itemClickFn</s>~</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u53C2\u6570\u5E94\u4E3A item\uFF0C\u8868\u793A\u4E8C\u7EA7\u83DC\u5355\u88AB\u70B9\u51FB</s>~</td></tr></tbody></table><h3 id="nocontenttemplate-\u53EF\u7528\u53D8\u91CF\u503C" tabindex="-1">noContentTemplate \u53EF\u7528\u53D8\u91CF\u503C <a class="header-anchor" href="#nocontenttemplate-\u53EF\u7528\u53D8\u91CF\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53D8\u91CF</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53D8\u91CF\u542B\u4E49\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">item</td><td style="text-align:center;"><code>any</code></td><td style="text-align:center;">\u7236\u7EA7\u83DC\u5355\u5355\u4E2A\u6570\u636E</td></tr><tr><td style="text-align:center;">deepth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">\u503C\u8868\u793A\u5D4C\u5957\u7ED3\u6784\u5C42\u7EA7</td></tr></tbody></table><h3 id="loadingtemplate-\u53EF\u7528\u53D8\u91CF\u503C" tabindex="-1">loadingTemplate \u53EF\u7528\u53D8\u91CF\u503C <a class="header-anchor" href="#loadingtemplate-\u53EF\u7528\u53D8\u91CF\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53D8\u91CF</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53D8\u91CF\u542B\u4E49\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">item</td><td style="text-align:center;"><code>any</code></td><td style="text-align:center;">\u7236\u7EA7\u83DC\u5355\u5355\u4E2A\u6570\u636E</td></tr><tr><td style="text-align:center;">deepth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">\u503C\u8868\u793A\u5D4C\u5957\u7ED3\u6784\u5C42\u7EA7</td></tr><tr><td style="text-align:center;">~<s>loadingKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;">~<s>\u7EC4\u4EF6\u7684 loadingKey \u503C</s>~</td></tr></tbody></table><h3 id="innerlisttemplate-\u53EF\u7528\u53D8\u91CF\u503C" tabindex="-1">innerListTemplate \u53EF\u7528\u53D8\u91CF\u503C <a class="header-anchor" href="#innerlisttemplate-\u53EF\u7528\u53D8\u91CF\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:center;">\u53D8\u91CF</th><th style="text-align:center;">\u7C7B\u578B</th><th style="text-align:center;">\u53D8\u91CF\u542B\u4E49\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:center;">item</td><td style="text-align:center;"><code>any</code></td><td style="text-align:center;">\u7236\u7EA7\u83DC\u5355\u5355\u4E2A\u6570\u636E</td></tr><tr><td style="text-align:center;">deepth</td><td style="text-align:center;"><code>number</code></td><td style="text-align:center;">\u503C\u8868\u793A\u5D4C\u5957\u7ED3\u6784\u5C42\u7EA7</td></tr><tr><td style="text-align:center;">~<s>titleKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 titleKey \u503C</s>~</td></tr><tr><td style="text-align:center;">~<s>loadingKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 loadingKey \u503C</s>~</td></tr><tr><td style="text-align:center;">~<s>childrenKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 childrenKey \u503C</s>~</td></tr><tr><td style="text-align:center;">~<s>disabledKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 disabledKey \u503C</s>~</td></tr><tr><td style="text-align:center;">~<s>openKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 openKey \u503C</s>~</td></tr><tr><td style="text-align:center;">~<s>activeKey</s>~</td><td style="text-align:center;"><code>string</code></td><td style="text-align:center;"><code>\u5DF2\u7ECF\u5E9F\u5F03</code>~<s>\u7EC4\u4EF6\u7684 activeKey \u503C\uFF0C\u7528\u4E8C\u7EA7\u83DC\u5355</s>~</td></tr><tr><td style="text-align:center;">menuToggleFn</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">\u53C2\u6570\u5E94\u4E3A item\uFF0C\u8868\u793A\u83DC\u5355\u88AB\u5C55\u5F00\uFF0C\u53EF\u9009\u53C2\u6570 event\uFF0C\u539F\u59CB\u4E8B\u4EF6</td></tr><tr><td style="text-align:center;">itemClickFn</td><td style="text-align:center;"><code>Function</code></td><td style="text-align:center;">\u53C2\u6570\u5E94\u4E3A\u53EF\u70B9\u51FB\u83DC\u5355\u7684 item\uFF0C\u8868\u793A\u83DC\u5355\u88AB\u70B9\u51FB,\u53EF\u9009\u53C2\u6570 event\uFF0C\u539F\u59CB\u4E8B\u4EF6</td></tr></tbody></table>`,20);function un(a,s,e,i,k,l){const F=O("render-demo-0"),c=O("demo"),y=O("render-demo-1"),E=O("render-demo-2"),h=O("render-demo-3"),p=O("render-demo-4");return U(),J("div",null,[z,f(c,{sourceCode:`<template>
    <div class="basic-menu">
        <d-accordion
            :data="menu"
            :accordionType="accordionTypeEmbed ? 'embed' : 'normal'"
            :restrictOneOpen="restrictOneOpen"
            @itemClick="itemClick"
            @menuToggle="menuToggle"
            :loadingTemplate="false"
        >
            <template #loadingTemplate={item,deepth}>
                <li class='devui-accordion-item'>
                    <div
                        class="devui-accordion-item-title devui-over-flow-ellipsis"
                        style="{{ textIndent: deepth * 20 + 'px' }}"
                    >
                        \u81EA\u5B9A\u4E49\u52A0\u8F7D...
                    </div>
                </li>
            </template>
        </d-accordion>
    </div>
    
    <div class="basic-option">
        <d-switch v-model:checked="restrictOneOpen"></d-switch> Only one level-1 menu can be expanded.<!--\u9650\u5236\u53EA\u80FD\u5C55\u5F00\u4E00\u4E2A\u4E00\u7EA7\u83DC\u5355-->
    </div>
    <div class="basic-option"><d-switch v-model:checked="accordionTypeEmbed"></d-switch> Embedded menu (no shadow)<!--\u5185\u5D4C\u83DC\u5355\u5F62\u5F0F\uFF08\u65E0\u9634\u5F71\uFF09--></div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "accordion",
    setup() {
        const restrictOneOpen = ref(false)
        const accordionTypeEmbed = ref(false)
        const menu = ref([{
            title: 'Content 1',
            children: [
            {title: 'Child Content 1'},
            {title: 'Child Content 2'},
            {title: 'Child Content '},
            ]
        }, {
            title: 'Content 2\uFF08This is a long sentence for option display.\uFF09',
            children: [
            {title: 'Child Content 1 (This is a long sentence for option display.)'},
            {title: 'Child Content 2'},
            {title: 'Child Content 3'},
            ]
        }, {
            title: 'Content 3 (Default Open)',
            open: true,
            children: [
            {title: 'Child Content 1 (Disabled)', disabled: true},
            {title: 'Child Content 2 (Default Active)', active: true},
            {title: 'Child Content 3'},
            ]
        }, {
            title: 'Content 4 (No Child)',
            children: []
        }, {
            title: 'Content 5 (Disabled)',
            disabled: true,
            children: [
            ]
        }, {
            title: 'Content 6 (Dynamic Content)',
            needLoadChildren: true,
            loading: false,
            children: [
            ]
        }])

        const itemClick = (event) => {
            console.log('item click' + JSON.stringify(event));
        }
        const menuToggle = (event) => {
            console.log('menu toggle' + JSON.stringify(event));
            if (event.open && event.item.needLoadChildren) {
                event.item.loading = true;
                setTimeout(() => {
                    event.item.children = [
                        {title: 'Child Content 1'},
                        {title: 'Child Content 2'}
                    ];
                    event.item.needLoadChildren = false;
                    event.item.loading = false;
                }, 2000);
            }
        }

        return {
            menu,
            restrictOneOpen,
            accordionTypeEmbed,
            itemClick,
            menuToggle
        }
    }
})
<\/script>
<style scoped>
.basic-menu {
  width: 200px;
}

.basic-option {
  line-height: 20px;
  vertical-align: middle;
  margin-top: 20px;
}

.basic-option > d-toggle {
  display: inline-block;
  transform: translateY(3px);
}

@media (max-width: 250px) {
  .basic-menu {
    width: 80%;
  }
}
ul {
    list-style: none
}
</style>
`},{highlight:x(()=>[H]),default:x(()=>[f(F)]),_:1}),R,G,f(c,{sourceCode:`<template>
    <div class="use-template-menu">
        <d-accordion
            :data="menu"
            :accordionType="accordionTypeEmbed ? 'embed' : 'normal'"
            :restrictOneOpen="restrictOneOpen"
            @itemClick="itemClick"
            @menuToggle="menuToggle"
        >
            <template #menuItemTemplate={item,deepth,parent}>
                {{ item.title }}
                <span class="use-template-badge" v-if="item.children?.length">{{ item.children.length }}</span>
                <span class="operation-clear" v-if="item.needLoadChildren === false" @click="clearChildrenData($event, item)">
                    reset
                    <!--\u91CD\u7F6E-->
                </span>
            </template>
            <template #itemTemplate={item,deepth,parent}>
                {{ item.title }}
                <span class="use-template-info">(Click Count: {{ item.clicktimes || '0' }})</span>
            </template>
            <template #noContentTemplate={deepth}>
                <li class="devui-accordion-item disabled">
                    <div class="devui-accordion-item-title devui-over-flow-ellipsis disabled" style="{{ textIndent: deepth * 20 + 'px' }}">
                        Not available yet. Please wait.
                    <!--\u5C1A\u672A\u5F00\u653E\uFF0C\u656C\u8BF7\u671F\u5F85...-->
                    </div>
                </li>
            </template>
            <template #loadingTemplate={item}>
                <li class="devui-accordion-item">
                    <div class="use-template-loading"><span class="use-template-circle-spinner"></span> loading...<!--\u6B63\u5728\u7528\u529B\u5730\u52A0\u8F7D\u4E2D...--></div>
                </li>
            </template>
        </d-accordion>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "accordion",
    setup() {
        const restrictOneOpen = ref(false)
        const accordionTypeEmbed = ref(false)
        const menu = ref([{
            title: 'Content 1',
            open: true,
            children: [
            {title: 'Child Content 1'},
            {title: 'Child Content 2'},
            ]
        }, {
            title: 'Content 2',
            children: [
            {title: 'Child Content 1'},
            {title: 'Child Content 2'},
            {title: 'Child Content 3'},
            {title: 'Child Content 4'},
            ]
        }, {
            title: 'Content 3',
            children: [
            {title: 'Child Content 1 (disabled)', disabled: true},
            {title: 'Child Content 2'},
            {title: 'Child Content 3'},
            ]
        }, {
            title: 'Content 4 (Custom No Data Template)',
            children: [] // \u53EF\u5C55\u5F00\u83DC\u5355\u8282\u70B9\u5FC5\u987B\u6709children\u975Eundefined
        }, {
            title: 'Content 5 (Custom loading Template)',
            needLoadChildren: true,
            loading: false,
            children: []
        }]);
        const childrenData = ref([
            {title: 'Child Content 1'},
            {title: 'Child Content 2'},
            {title: 'Child Content 3'},
            {title: 'Child Content 4'},
            {title: 'Child Content 5'},
            {title: 'Child Content 6'},
            {title: 'Child Content 7'},
        ])

        const itemClick = (event) => {
            event.item.clicktimes = (event.item.clicktimes || 0) + 1;
        }

        const menuToggle = (event) => {
            if (event.open && event.item.needLoadChildren) {
            event.item.loading = true;
            setTimeout(() => {
                event.item.children = childrenData.value;
                event.item.needLoadChildren = false;
                event.item.loading = false;
            }, 1000);
            }
        }

        const clearChildrenData = (event, item) => {
            event.stopPropagation();
            item.children = [];
            item.needLoadChildren = true;
            item.open = false;
        }

        return {
            menu,
            restrictOneOpen,
            accordionTypeEmbed,
            itemClick,
            menuToggle,
            clearChildrenData
        }
    }
})
<\/script>
<style scoped>
.use-template-menu {
  width: 400px;
}

.use-template-badge {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;
  background: #5e7ce0;
  font-weight: normal;
}

.use-template-loading {
  position: relative;
  line-height: 40px;
  padding-left: 64px;
}

.use-template-circle-spinner {
  top: 10px;
  left: 36px;
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  transform-origin: center;
  animation: circle infinite 0.75s linear;
  border: 2px solid #5e7ce0;
  border-top-color: transparent;
  border-radius: 50%;
}

@keyframes circle {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 500px) {
  .use-template-menu {
    width: 80%;
  }
}
</style>
`},{highlight:x(()=>[Q]),default:x(()=>[f(y)]),_:1}),W,f(c,{sourceCode:`<template>
    <div class="inner-template-menu">
        <d-accordion
            :data="menu"
            :accordionType="accordionTypeEmbed ? 'embed' : 'normal'"
            :restrictOneOpen="restrictOneOpen"
        >
            <template #innerListTemplate={item,deepth}>
                <div 
                    class="devui-accordion-submenu devui-accordion-show-animate inner-template-my-menu"
                >
                    {{item.content}}
                </div>
            </template>
        </d-accordion>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "accordion",
    setup() {
        const restrictOneOpen = ref(false)
        const accordionTypeEmbed = ref(false)
        const menu = ref([{
            title: 'Content 1',
            children: [],
            content: 'Child Content of Content 1'
        }, {
            title: 'Content 2',
            children: [],
            content: 'Child Content of Content 2'
        }]);


        return {
            menu,
            restrictOneOpen,
            accordionTypeEmbed,
        }
    }
})
<\/script>
<style scoped>
.inner-template-menu {
  width: 400px;
}
.inner-template-my-menu {
  min-height: 60px;
  line-height: 40px;
  padding: 12px;
}

@media (max-width: 500px) {
  .inner-template-menu {
    width: 80%;
  }
}
</style>
`},{highlight:x(()=>[X]),default:x(()=>[f(E)]),_:1}),Z,nn,f(c,{sourceCode:`<template>
    <div class="multi-child-menu">
        <d-accordion
            :data="menu"
            :autoOpenActiveMenu="autoOpenActiveMenu"
        >
        </d-accordion>
    </div>

    <div class="multi-child-option">
        <d-switch v-model:checked="autoOpenActiveMenu"></d-switch> auto expend active menu<!--\u81EA\u52A8\u5C55\u5F00\u6FC0\u6D3B\u7684\u83DC\u5355-->
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: "accordion",
    setup() {
        const autoOpenActiveMenu = ref(false)
        const menu = ref([{
            title: 'Content 1 (as a leaf menu)',
        }, {
            title: 'Content 2 (as a parent menu, has children)',
            children: [
            {title: 'Child Content 1'},
            {title: 'Child Content 2'},
            {title: 'Child Content 3'},
            ]
        }, {
            title: 'Content 3 (as a parent menu, has children)',

            children: [{
                title: 'Child Content 1 (has children)',
                children: [
                {title: 'Child Content 1'},
                {title: 'Child Content 2', active: true},
                {title: 'Child Content 3'},
                ]
            }, {
                title: 'Child Content 2 (has children',
                children: [
                {title: 'Child Content 1'},
                {
                    title: 'Child Content 2 (has children',
                    children: [
                    {title: 'Child Content 1'},
                    {title: 'Child Content 2'},
                    {title: 'Child Content 3'},
                    ]
                },
                {title: 'Child Content 3'},
                ]
            },
            {title: 'Child Content 2'},
            {title: 'Child Content 3'},
            ]
        }, {
            title: 'Content 4 (as a parent menu, has no child)',
            children: []
        }]);


        return {
            menu,
            autoOpenActiveMenu
        }
    }
})
<\/script>
<style scoped>
.multi-child-menu {
  width: 400px;
}

.multi-child-option {
  line-height: 20px;
  vertical-align: middle;
  margin-top: 20px;
}

.multi-child-option > d-toggle {
  display: inline-block;
  transform: translateY(3px);
}

@media (max-width: 500px) {
  .multi-child-menu {
    width: 80%;
  }
}
</style>
`},{highlight:x(()=>[tn]),default:x(()=>[f(h)]),_:1}),an,sn,f(c,{sourceCode:`<template>
    <div class="change-key-menu">
        <d-accordion
            :data="menu"
            :titleKey="key?.titleKey"
            :activeKey="key?.activeKey"
            :disabledKey="key?.disabledKey"
            :openKey="key?.openKey"
            :childrenKey="key?.childrenKey"
        >
        </d-accordion>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
    name: "accordion",
    setup() {
        const key = reactive({
            titleKey: 'value',
            activeKey: '$selected',
            disabledKey: 'forbidden',
            openKey: '$show',
            childrenKey: 'subs',
        })
        const menu = ref([{
            value: 'Content 1',
        }, {
            value: 'Content 2 (expended)',
            $show: true,
            subs: [
            { value: 'Child Content 1 (disabled)', forbidden: true },
            { value: 'Child Content 2 (active)', $selected: true },
            { value: 'Child Content 3' },
            ]
        }]);

        return {
            menu,
            key
        }
    }
})
<\/script>
<style scoped>
.change-key-menu {
  width: 400px;
}

@media (max-width: 500px) {
  .change-key-menu {
    width: 80%;
  }
}
</style>
`},{highlight:x(()=>[en]),default:x(()=>[f(p)]),_:1}),on])}var rn=j(Y,[["render",un]]);export{ln as __pageData,rn as default};
