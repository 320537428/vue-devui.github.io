var S=Object.defineProperty,q=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var v=(e,a,s)=>a in e?S(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,k=(e,a)=>{for(var s in a||(a={}))V.call(a,s)&&v(e,s,a[s]);if(y)for(var s of y(a))I.call(a,s)&&v(e,s,a[s]);return e},b=(e,a)=>q(e,N(a));import{V as F,d as T,r as f,o as z,c as L,a as D,w as u,u as x,b as w,e as n,f as t}from"./app.ffbe3879.js";const M=w('<h1 id="codeeditor-\u4EE3\u7801\u7F16\u8F91\u5668" tabindex="-1">codeEditor \u4EE3\u7801\u7F16\u8F91\u5668 <a class="header-anchor" href="#codeeditor-\u4EE3\u7801\u7F16\u8F91\u5668" aria-hidden="true">#</a></h1><p>\u57FA\u4E8Emonaco editor, \u4E3A\u4F60\u7684\u9875\u9762\u589E\u52A0\u4EE3\u7801\u7F16\u8F91\u80FD\u529B\u3002</p><p>\u7531\u4E8Emonaco editor\u5BF9\u8BED\u6CD5\u5904\u7406\u662F\u901A\u8FC7web Worker\u5B9E\u73B0\u7684\uFF0C\u6240\u4EE5\u9700\u8981\u52A0\u8F7D\u5904\u7406\u8BED\u6CD5\u7684 Worker, \u914D\u7F6E\u65B9\u5F0F\u53C2\u8003<a href="https://github.com/microsoft/monaco-editor/blob/main.docs/integrate-esm.md" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6559\u7A0B</a>.</p><h3 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1">\u57FA\u672C\u7528\u6CD5 <a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a></h3>',4),O=n("div",null,[n("code",null,"v-model"),t("\u53CC\u5411\u7ED1\u5B9A\u7F16\u8F91\u5668\u5185\u5BB9\uFF0C"),n("code",null,"options"),t("\u53C2\u6570"),n("a",{href:"https://github.com/microsoft/monaco-editor/api/interfaces/monaco.editor.IEditorConstructionOptions.html",target:"_blank",rel:"noopener noreferrer"},"\u53C2\u8003 monaco editor \u5B9A\u4E49"),t("\u3002")],-1),H=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-code-editor")]),t(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("code"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{language: 'typescript' }"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 220px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-code-editor")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" code "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`export class cell {
    public row:number;
    public col: number;
    public live: boolean;

    constructor(row: number, col: number, live: boolean) {
        this.row = row;
        this.col = col;
        this.live = live;
    }
}`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" code "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`

`)])])],-1),j=n("h3",{id:"\u4EE3\u7801\u9AD8\u4EAE",tabindex:"-1"},[t("\u4EE3\u7801\u9AD8\u4EAE "),n("a",{class:"header-anchor",href:"#\u4EE3\u7801\u9AD8\u4EAE","aria-hidden":"true"},"#")],-1),P=n("div",null,"\u5BF9\u4E00\u4E2A\u4EE3\u7801\u5757\u8FDB\u884C\u9AD8\u4EAE",-1),U=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("d-button")]),t(),n("span",{class:"token attr-name"},"variant"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("solid"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"color"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleCodeChange"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),t("8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("\u5207\u6362 Code \u5185\u5BB9"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("d-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("pre")]),t(),n("span",{class:"token attr-name"},"v-d-code-highlight"),t(),n("span",{class:"token attr-name"},":data-lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("lang"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 500px")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"v-html"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("code"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("pre")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" codeStr1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`/* Some example CSS */

@import url("something.css");

body {
  margin: 0;
  padding: 3em 6em;
  font-family: tahoma, arial, sans-serif;
  color: #000;
}

#navigation a {
  font-weight: bold;
  text-decoration: none !important;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.7em;
}

h1:before, h2:before {
  content: "some contents";
}

code {
  font-family: courier, monospace;
  font-size: 80%;
  color: #418A8A;
}`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" codeStr2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},`export class cell {
    public row:number;
    public col: number;
    public live: boolean;

    constructor(row: number, col: number, live: boolean) {
        this.row = row;
        this.col = col;
        this.live = live;
    }
}`),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" code "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),t("codeStr1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" lang "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token string"},"css"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleCodeChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("lang"),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'css'"),t(),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
            lang`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'typescript'"),n("span",{class:"token punctuation"},";"),t(`
            code`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" codeStr2"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
            lang`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'css'"),n("span",{class:"token punctuation"},";"),t(`
            code`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" codeStr1"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(" code"),n("span",{class:"token punctuation"},","),t(" lang"),n("span",{class:"token punctuation"},","),t(" handleCodeChange "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])])],-1),W=w(`<h3 id="codeeditor\u53C2\u6570" tabindex="-1">CodeEditor\u53C2\u6570 <a class="header-anchor" href="#codeeditor\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u53C2\u6570</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">v-model</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u4F20\u5165\u7F16\u8F91\u5668\u5185\u5BB9</td></tr><tr><td style="text-align:left;">mode</td><td style="text-align:left;"><a href="#mode">Mode</a></td><td style="text-align:left;">&#39;normal&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7F16\u8F91\u5668\u6A21\u5F0F</td></tr><tr><td style="text-align:left;">original-text</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0Cdiff\u6A21\u5F0F\u4E0B\u539F\u59CB\u5BF9\u6BD4\u6587\u672C</td></tr><tr><td style="text-align:left;">theme</td><td style="text-align:left;"><a href="#theme">Theme</a></td><td style="text-align:left;">&#39;light&#39;</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7F16\u8F91\u5668\u4E3B\u9898</td></tr><tr><td style="text-align:left;">auto-height</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009\uFF0C\u7F16\u8F91\u5668\u9AD8\u5EA6\u662F\u5426\u6839\u636E\u5185\u5BB9\u81EA\u9002\u5E94</td></tr><tr><td style="text-align:left;">refresh-all</td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">false</td><td style="text-align:left;">\u53EF\u9009, \u662F\u5426\u9700\u8981\u5237\u65B0\u5168\u90E8\u8BC4\u8BBA</td></tr><tr><td style="text-align:left;">offset-left</td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">--</td><td style="text-align:left;">\u53EF\u9009, \u4F20\u5165\u7684domNode\u7684\u5DE6\u504F\u79FB\u91CF</td></tr><tr><td style="text-align:left;">add-comment-icon</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009, \u5DE6\u4FA7\u6DFB\u52A0\u8BC4\u8BBA\u56FE\u6807</td></tr><tr><td style="text-align:left;">expand-comment-icon</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">&#39;&#39;</td><td style="text-align:left;">\u53EF\u9009, \u5DE6\u4FA7\u5C55\u5F00\u8BC4\u8BBA\u56FE\u6807</td></tr><tr><td style="text-align:left;">options</td><td style="text-align:left;"><a href="#options">Options</a></td><td style="text-align:left;">{}</td><td style="text-align:left;">\u53EF\u9009, \u7F16\u8F91\u5668\u9009\u9879\uFF0C<a href="https://github.com/microsoft/monaco-editor/api/interfaces/monaco.editor.IEditorConstructionOptions.html" target="_blank" rel="noopener noreferrer">\u53C2\u8003</a></td></tr><tr><td style="text-align:left;">mouse-target-type</td><td style="text-align:left;"><a href="https://github.com/microsoft/monaco-editor/api/enums/monaco.editor.MouseTargetType.html" target="_blank" rel="noopener noreferrer">monaco.editor.MouseTargetType</a></td><td style="text-align:left;">[2, 4]</td><td style="text-align:left;">\u53EF\u9009, \u9F20\u6807\u70B9\u51FB\u8FD4\u56DE\u4E8B\u4EF6\u533A\u57DF</td></tr><tr><td style="text-align:left;">editor-decorations</td><td style="text-align:left;"><a href="#decoration">Decoration[]</a></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009, \u7F16\u8F91\u5668\u7684\u4FA7\u8FB9\u88C5\u9970</td></tr><tr><td style="text-align:left;">comments</td><td style="text-align:left;"><a href="#comment">Comment[]</a></td><td style="text-align:left;">[]</td><td style="text-align:left;">\u53EF\u9009, \u4EE3\u7801\u68C0\u89C6\u5185\u5BB9</td></tr></tbody></table><h3 id="codeeditor-\u4E8B\u4EF6" tabindex="-1">CodeEditor \u4E8B\u4EF6 <a class="header-anchor" href="#codeeditor-\u4E8B\u4EF6" aria-hidden="true">#</a></h3><table><thead><tr><th style="text-align:left;">\u4E8B\u4EF6</th><th style="text-align:left;">\u56DE\u6389\u53C2\u6570</th><th style="text-align:left;">\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">after-editor-init</td><td style="text-align:left;"><code>Function(instance: IStandaloneCodeEditor | IStandaloneDiffEditor)</code></td><td style="text-align:left;">\u521D\u59CB\u5316\u5B8C\u6210\u4E8B\u4EF6\uFF0C\u8FD4\u56DEmonaco-editor\u5B9E\u4F8B</td></tr><tr><td style="text-align:left;">click</td><td style="text-align:left;"><code>Function(event: IEditorMouseEvent)</code></td><td style="text-align:left;">\u70B9\u51FB\u7F16\u8F91\u5668\u4E0D\u540C\u533A\u57DF\u8FD4\u56DE\u4E8B\u4EF6</td></tr></tbody></table><h3 id="codehighlight-\u53C2\u6570" tabindex="-1">CodeHighlight \u53C2\u6570 <a class="header-anchor" href="#codehighlight-\u53C2\u6570" aria-hidden="true">#</a></h3><p>\u6682\u65E0</p><h3 id="\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">\u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="mode" tabindex="-1">Mode <a class="header-anchor" href="#mode" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Mode</span> <span class="token operator">=</span> <span class="token string">&#39;normal&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;diff&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;review&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="theme" tabindex="-1">Theme <a class="header-anchor" href="#theme" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Theme</span> <span class="token operator">=</span> <span class="token string">&#39;light&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h4 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">Options</span> <span class="token operator">=</span> monaco<span class="token punctuation">.</span>IEditorConstructionOptions<span class="token punctuation">;</span>
</code></pre></div><h4 id="decoration" tabindex="-1">Decoration <a class="header-anchor" href="#decoration" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Decoration</span> <span class="token punctuation">{</span>
    lineNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    icon<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    customClasses<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    glyphClassName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="comment" tabindex="-1">Comment <a class="header-anchor" href="#comment" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Comment</span> <span class="token punctuation">{</span>
    lineNumber<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    isExpanded<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    domNode<span class="token operator">?</span><span class="token operator">:</span> HTMLElement<span class="token punctuation">;</span>
    heightInPx<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    allowEditorOverflow<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
    offsetLedt<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="istandalonecodeeditor" tabindex="-1">IStandaloneCodeEditor <a class="header-anchor" href="#istandalonecodeeditor" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IStandaloneCodeEditor</span> <span class="token operator">=</span> monaco<span class="token punctuation">.</span>IStandaloneCodeEditor<span class="token punctuation">;</span>
</code></pre></div><h4 id="istandalonediffeditor" tabindex="-1">IStandaloneDiffEditor <a class="header-anchor" href="#istandalonediffeditor" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">type</span> <span class="token class-name">IStandaloneDiffEditor</span> <span class="token operator">=</span> monaco<span class="token punctuation">.</span>IStandaloneDiffEditor
</code></pre></div>`,21),G={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,createVNode:a,openBlock:s,createElementBlock:d}=F;function i(r,C){const m=e("d-code-editor");return s(),d("div",null,[a(m,{modelValue:r.code,"onUpdate:modelValue":C[0]||(C[0]=h=>r.code=h),options:{language:"typescript"},style:{height:"220px"}},null,8,["modelValue"])])}const{defineComponent:o,ref:p}=F,g=o({setup(){return{code:p(`export class cell {
    public row:number;
    public col: number;
    public live: boolean;

    constructor(row: number, col: number, live: boolean) {
        this.row = row;
        this.col = col;
        this.live = live;
    }
}`)}}});return k({render:i},g)}(),"render-demo-1":function(){const{createTextVNode:e,resolveComponent:a,withCtx:s,createVNode:d,resolveDirective:i,openBlock:o,createElementBlock:p,withDirectives:g}=F,r=e("\u5207\u6362 Code \u5185\u5BB9"),C=["data-lang","innerHTML"];function m(c,B){const E=a("d-button"),l=i("d-code-highlight");return o(),p("div",null,[d(E,{variant:"solid",color:"primary",onClick:c.handleCodeChange,style:{"margin-bottom":"8px"}},{default:s(()=>[r]),_:1},8,["onClick"]),g((o(),p("pre",{"data-lang":c.lang,style:{width:"500px"},innerHTML:c.code},null,8,C)),[[l]])])}const{defineComponent:h,ref:A}=F,_=h({setup(){const c=`/* Some example CSS */

@import url("something.css");

body {
  margin: 0;
  padding: 3em 6em;
  font-family: tahoma, arial, sans-serif;
  color: #000;
}

#navigation a {
  font-weight: bold;
  text-decoration: none !important;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.7em;
}

h1:before, h2:before {
  content: "some contents";
}

code {
  font-family: courier, monospace;
  font-size: 80%;
  color: #418A8A;
}`,B=`export class cell {
    public row:number;
    public col: number;
    public live: boolean;

    constructor(row: number, col: number, live: boolean) {
        this.row = row;
        this.col = col;
        this.live = live;
    }
}`,E=A(c),l=A("css");return{code:E,lang:l,handleCodeChange:()=>{l.value==="css"?(l.value="typescript",E.value=B):(l.value="css",E.value=c)}}}});return k({render:m},_)}()}},R='{"title":"codeEditor \u4EE3\u7801\u7F16\u8F91\u5668","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"\u4EE3\u7801\u9AD8\u4EAE","slug":"\u4EE3\u7801\u9AD8\u4EAE"},{"level":3,"title":"CodeEditor\u53C2\u6570","slug":"codeeditor\u53C2\u6570"},{"level":3,"title":"CodeEditor \u4E8B\u4EF6","slug":"codeeditor-\u4E8B\u4EF6"},{"level":3,"title":"CodeHighlight \u53C2\u6570","slug":"codehighlight-\u53C2\u6570"},{"level":3,"title":"\u7C7B\u578B\u5B9A\u4E49","slug":"\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/code-editor/index.md","lastUpdated":1690595599692}',X=T(b(k({},G),{setup(e){const a={};return(s,d)=>{const i=f("render-demo-0"),o=f("demo"),p=f("render-demo-1");return z(),L("div",null,[M,D(o,{sourceCode:`
<template>
    <d-code-editor v-model="code" :options="{language: 'typescript' }" style="height: 220px"></d-code-editor>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
    const code = ref(\`export class cell {
    public row:number;
    public col: number;
    public live: boolean;

    constructor(row: number, col: number, live: boolean) {
        this.row = row;
        this.col = col;
        this.live = live;
    }
}\`)

    return { code };
}
})
<\/script>

`,lightCode:"%3Cpre%20v-pre%3E%3Ccode%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ed-code-editor%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecode%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%7Blanguage%3A%20'typescript'%20%7D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20220px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ed-code-editor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20defineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20code%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Eexport%20class%20cell%20%7B%0A%20%20%20%20public%20row%3Anumber%3B%0A%20%20%20%20public%20col%3A%20number%3B%0A%20%20%20%20public%20live%3A%20boolean%3B%0A%0A%20%20%20%20constructor(row%3A%20number%2C%20col%3A%20number%2C%20live%3A%20boolean)%20%7B%0A%20%20%20%20%20%20%20%20this.row%20%3D%20row%3B%0A%20%20%20%20%20%20%20%20this.col%20%3D%20col%3B%0A%20%20%20%20%20%20%20%20this.live%20%3D%20live%3B%0A%20%20%20%20%7D%0A%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20code%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3C%2Fcode%3E%3C%2Fpre%3E",desc:"%3Cp%3E%3Ccode%3Ev-model%3C%2Fcode%3E%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%BC%96%E8%BE%91%E5%99%A8%E5%86%85%E5%AE%B9%EF%BC%8C%3Ccode%3Eoptions%3C%2Fcode%3E%E5%8F%82%E6%95%B0%3Ca%20href%3D%22https%3A%2F%2Fgithub.com%2Fmicrosoft%2Fmonaco-editor%2Fapi%2Finterfaces%2Fmonaco.editor.IEditorConstructionOptions.html%22%3E%E5%8F%82%E8%80%83%20monaco%20editor%20%E5%AE%9A%E4%B9%89%3C%2Fa%3E%E3%80%82%3C%2Fp%3E%0A",demoList:x(a),targetFilePath:""},{description:u(()=>[O]),highlight:u(()=>[H]),default:u(()=>[D(i)]),_:1},8,["demoList"]),j,D(o,{sourceCode:`<template>
    <d-button variant="solid" color="primary" @click="handleCodeChange" style="margin-bottom:8px">\u5207\u6362 Code \u5185\u5BB9</d-button>
    <pre v-d-code-highlight :data-lang="lang" style="width: 500px" v-html="code">
    </pre>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
    const codeStr1 = \`/* Some example CSS */

@import url("something.css");

body {
  margin: 0;
  padding: 3em 6em;
  font-family: tahoma, arial, sans-serif;
  color: #000;
}

#navigation a {
  font-weight: bold;
  text-decoration: none !important;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 1.7em;
}

h1:before, h2:before {
  content: "some contents";
}

code {
  font-family: courier, monospace;
  font-size: 80%;
  color: #418A8A;
}\`;

    const codeStr2 = \`export class cell {
    public row:number;
    public col: number;
    public live: boolean;

    constructor(row: number, col: number, live: boolean) {
        this.row = row;
        this.col = col;
        this.live = live;
    }
}\`;
    const code = ref(codeStr1);
    const lang = ref(\`css\`);

    const handleCodeChange = () => {
        if (lang.value === 'css' ) {
            lang.value = 'typescript';
            code.value = codeStr2;
        } else {
            lang.value = 'css';
            code.value = codeStr1;
        }
    }

    return { code, lang, handleCodeChange };
}
})
<\/script>
`,lightCode:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ed-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Evariant%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esolid%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ecolor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eprimary%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleCodeChange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Emargin-bottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E8px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%88%87%E6%8D%A2%20Code%20%E5%86%85%E5%AE%B9%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ed-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Epre%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-d-code-highlight%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adata-lang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Elang%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Ewidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20500px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-html%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecode%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Epre%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20defineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20codeStr1%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E%2F*%20Some%20example%20CSS%20*%2F%0A%0A%40import%20url(%22something.css%22)%3B%0A%0Abody%20%7B%0A%20%20margin%3A%200%3B%0A%20%20padding%3A%203em%206em%3B%0A%20%20font-family%3A%20tahoma%2C%20arial%2C%20sans-serif%3B%0A%20%20color%3A%20%23000%3B%0A%7D%0A%0A%23navigation%20a%20%7B%0A%20%20font-weight%3A%20bold%3B%0A%20%20text-decoration%3A%20none%20!important%3B%0A%7D%0A%0Ah1%20%7B%0A%20%20font-size%3A%202.5em%3B%0A%7D%0A%0Ah2%20%7B%0A%20%20font-size%3A%201.7em%3B%0A%7D%0A%0Ah1%3Abefore%2C%20h2%3Abefore%20%7B%0A%20%20content%3A%20%22some%20contents%22%3B%0A%7D%0A%0Acode%20%7B%0A%20%20font-family%3A%20courier%2C%20monospace%3B%0A%20%20font-size%3A%2080%25%3B%0A%20%20color%3A%20%23418A8A%3B%0A%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20codeStr2%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Eexport%20class%20cell%20%7B%0A%20%20%20%20public%20row%3Anumber%3B%0A%20%20%20%20public%20col%3A%20number%3B%0A%20%20%20%20public%20live%3A%20boolean%3B%0A%0A%20%20%20%20constructor(row%3A%20number%2C%20col%3A%20number%2C%20live%3A%20boolean)%20%7B%0A%20%20%20%20%20%20%20%20this.row%20%3D%20row%3B%0A%20%20%20%20%20%20%20%20this.col%20%3D%20col%3B%0A%20%20%20%20%20%20%20%20this.live%20%3D%20live%3B%0A%20%20%20%20%7D%0A%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20code%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EcodeStr1%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20lang%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-string%22%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3Ecss%3C%2Fspan%3E%3Cspan%20class%3D%22token%20template-punctuation%20string%22%3E%60%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EhandleCodeChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Elang%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3D%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'css'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20lang%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'typescript'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20code%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20codeStr2%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eelse%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20lang%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'css'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20code%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20codeStr1%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20code%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20lang%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20handleCodeChange%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",desc:"%3Cp%3E%E5%AF%B9%E4%B8%80%E4%B8%AA%E4%BB%A3%E7%A0%81%E5%9D%97%E8%BF%9B%E8%A1%8C%E9%AB%98%E4%BA%AE%3C%2Fp%3E%0A",demoList:x(a),targetFilePath:""},{description:u(()=>[P]),highlight:u(()=>[U]),default:u(()=>[D(p)]),_:1},8,["demoList"]),W])}}}));export{R as __pageData,X as default};
