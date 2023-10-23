var d=Object.defineProperty,y=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var i=(p,a,t)=>a in p?d(p,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[a]=t,r=(p,a)=>{for(var t in a||(a={}))h.call(a,t)&&i(p,t,a[t]);if(l)for(var t of l(a))_.call(a,t)&&i(p,t,a[t]);return p},k=(p,a)=>y(p,A(a));import{V as C,d as b,r as E,o as B,c as f,a as F,w as D,u as v,e as n,f as s,b as x}from"./app.3d18f8e1.js";const w=n("h1",{id:"gitgraph-\u63D0\u4EA4\u7F51\u7EDC\u56FE",tabindex:"-1"},[s("GitGraph \u63D0\u4EA4\u7F51\u7EDC\u56FE "),n("a",{class:"header-anchor",href:"#gitgraph-\u63D0\u4EA4\u7F51\u7EDC\u56FE","aria-hidden":"true"},"#")],-1),q=n("p",null,"\u7ED8\u5236git\u5386\u53F2\u3002",-1),G=n("h3",{id:"\u57FA\u672C\u7528\u6CD5",tabindex:"-1"},[s("\u57FA\u672C\u7528\u6CD5 "),n("a",{class:"header-anchor",href:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true"},"#")],-1),T=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("d-git-graph")]),s(),n("span",{class:"token attr-name"},":option"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),s("data")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("d-git-graph")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" defineComponent"),n("span",{class:"token punctuation"},","),s(" ref "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'vue'"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token literal-property property"},"params"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token literal-property property"},"commits"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token literal-property property"},"author"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'test1'"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token literal-property property"},"avatar_url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://avatars.githubusercontent.com/u/44854357?v=4'"),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2023-07-07T03:27:07.000Z'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'merge_request_4'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'fix(button): \u4FEE\u590Dbug'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"parents"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'merge_request_3'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"refs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'develop'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"space"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"customUrl"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.google.cn/'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"branch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'master'"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token literal-property property"},"author"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'test2'"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token literal-property property"},"avatar_url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://avatars.githubusercontent.com/u/140487515?v=4'"),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2023-07-07T03:27:07.000Z'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'merge_request_3'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'fix(button): \u4FEE\u590Dbug'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"parents"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'merge_request_2'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'merge_request_1'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"space"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token literal-property property"},"author"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'test3'"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token literal-property property"},"avatar_url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://avatars.githubusercontent.com/u/44854357?v=4'"),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2023-06-07T03:27:07.000Z'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'merge_request_2'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'fix(button): \u4FEE\u590Dbug'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"parents"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"space"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
					`),n("span",{class:"token punctuation"},"{"),s(`
						`),n("span",{class:"token literal-property property"},"author"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
							`),n("span",{class:"token literal-property property"},"name"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'test4'"),n("span",{class:"token punctuation"},","),s(`
							`),n("span",{class:"token literal-property property"},"avatar_url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'https://avatars.githubusercontent.com/u/140487515?v=4'"),s(`
						`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"date"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'2023-06-07T03:27:07.000Z'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"id"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'merge_request_1'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"message"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'fix(button): \u4FEE\u590Dbug'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"parents"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"refs"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'ceshi'"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"space"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),s(`
						`),n("span",{class:"token literal-property property"},"time"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"3"),s(`
					`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
				`),n("span",{class:"token punctuation"},"]"),s(`
			`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
			`),n("span",{class:"token literal-property property"},"commit_url"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'http://www.google.cn/'"),n("span",{class:"token punctuation"},","),s(`
		`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(`
      data`),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),Z=x(`<h3 id="gitgraph-\u53C2\u6570" tabindex="-1">GitGraph \u53C2\u6570 <a class="header-anchor" href="#gitgraph-\u53C2\u6570" aria-hidden="true">#</a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4</th><th>\u8BF4\u660E</th><th>\u8DF3\u8F6C Demo</th></tr></thead><tbody><tr><td>options</td><td><code>GitGraphData</code></td><td>--</td><td>\u5FC5\u9009\uFF0C\u7F51\u7EDC\u56FE\u7684\u4FE1\u606F\u5BF9\u8C61</td><td><a href="#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95">\u57FA\u672C\u7528\u6CD5</a></td></tr></tbody></table><h3 id="gitgraph-\u7C7B\u578B\u5B9A\u4E49" tabindex="-1">GitGraph \u7C7B\u578B\u5B9A\u4E49 <a class="header-anchor" href="#gitgraph-\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a></h3><h4 id="gitgraphdata" tabindex="-1">GitGraphData <a class="header-anchor" href="#gitgraphdata" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">GitGraphData</span> <span class="token punctuation">{</span>
	<span class="token comment">/**
	 * \u7ED8\u56FE\u6570\u636E
	 */</span>
	data<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">/**
		 * \u63D0\u4EA4\u65E5\u671F\u6570\u636E
		 * @example [[&#39;7\u65E5&#39;, &#39;7\u6708&#39;], [&#39;6\u65E5&#39;, &#39;7\u6708&#39;]]
		 */</span>
		days<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		commits<span class="token operator">:</span> CommitInfo<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token comment">/**
	 * \u8DF3\u8F6C\u66F4\u6539\u9875\u9762\u7684url\u6A21\u677F\uFF0C\u4F1A\u81EA\u52A8\u66FF\u6362\u5176\u4E2D\u7684\u2018{commitId}\u2019
	 * @example https://xxxx/{commitId}
	 */</span>
	commit_url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	params<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token comment">/**
		 * \u65F6\u95F4\u63D0\u793A\uFF0C\u9ED8\u8BA4\u4E3A&#39;xx\u5929\u524D&#39;\uFF0C&#39;xx\u5C0F\u65F6\u524D&#39;\uFF0C&#39;xx\u5206\u949F\u524D&#39;\uFF0C&#39;1\u5206\u949F\u524D&#39;
		 */</span>
		daysBefore<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
		hoursAgo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
		minutesAgo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
		aMinutesAgo<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
		<span class="token comment">/**
		 * \u7528\u6237\u540D\u79F0\u6700\u5927\u957F\u5EA6
		 */</span>
		maxNameLength<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="commitinfo" tabindex="-1">CommitInfo <a class="header-anchor" href="#commitinfo" aria-hidden="true">#</a></h4><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">CommitInfo</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u63D0\u4EA4\u8005\u4FE1\u606F</span>
	author<span class="token operator">:</span> <span class="token punctuation">{</span>
		name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
		email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
		<span class="token comment">/**
		 * \u63D0\u4EA4\u8005\u5934\u50CF\u5730\u5740
		 */</span>
		avatar_url<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">/**
	 * \u63D0\u4EA4\u65F6\u95F4
	 */</span>
	date<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	<span class="token comment">/**
	 * commit\u4FE1\u606F
	 */</span>
	message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	<span class="token comment">/**
	 * \u7236\u7EA7\u8282\u70B9\u4FE1\u606F\uFF0C\u5305\u542B\u7236\u7EA7\u7684id\u548Cspace
	 * @example [[&#39;deffajsdfasdasd056215421&#39;, 1], [&#39;asdasdasddkfhjksdfhkjegfajszbg&#39;, 3]]
	 */</span>
	parents<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">/**
	 * \u5206\u652F\u540D\u79F0\u6216\u6807\u7B7E\u540D\u79F0
	 */</span>
	refs<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	<span class="token comment">/**
	 * \u6A2A\u5411\u7A7A\u95F4\u4F4D\u7F6E\uFF0C\u4ECE\u4E3B\u5206\u652F\u4E3A1\u5F00\u59CB\uFF0C\u6CA1\u5411\u5916\u4E00\u5C42+2\uFF0C\u7B2Ci\u5C42\u4E3A2i - 1
	 * \u7528\u4E8E\u8BA1\u7B97\u7ED8\u56FE\u5C3A\u5BF8\u548C\u6A2A\u5411\u6700\u5927\u5BBD\u5EA6
	 */</span>
	space<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	<span class="token comment">/**
	 * \u7B49\u4E8Ecommits\u6570\u7EC4index\uFF0C\u7528\u4E8E\u8BA1\u7B97\u7EB5\u5411\u5C3A\u5BF8
	 */</span>
	time<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
	<span class="token comment">/**
	 * \u53EF\u9009\uFF0C\u81EA\u5B9A\u4E49\u70B9\u51FBcommit\u4FE1\u606F\u7684\u8DF3\u8F6Curl
	 */</span>
	customUrl<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	<span class="token comment">/**
	 * \u5206\u652F\u540D\u79F0\uFF0C\u5C55\u793A\u5728hover\u9762\u677F\u4E2D
	 */</span>
	branch<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
	hasDrawn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7),V={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:p,createVNode:a,openBlock:t,createElementBlock:c}=C;function e(u,j){const g=p("d-git-graph");return t(),c("div",null,[a(g,{option:u.data},null,8,["option"])])}const{defineComponent:o,ref:N}=C,m=o({setup(){return{data:{params:{},data:{commits:[{author:{name:"test1",avatar_url:"https://avatars.githubusercontent.com/u/44854357?v=4"},date:"2023-07-07T03:27:07.000Z",id:"merge_request_4",message:"fix(button): \u4FEE\u590Dbug",parents:[["merge_request_3",1]],refs:"develop",space:1,time:0,customUrl:"http://www.google.cn/",branch:"master"},{author:{name:"test2",avatar_url:"https://avatars.githubusercontent.com/u/140487515?v=4"},date:"2023-07-07T03:27:07.000Z",id:"merge_request_3",message:"fix(button): \u4FEE\u590Dbug",parents:[["merge_request_2",1],["merge_request_1",3]],space:1,time:1},{author:{name:"test3",avatar_url:"https://avatars.githubusercontent.com/u/44854357?v=4"},date:"2023-06-07T03:27:07.000Z",id:"merge_request_2",message:"fix(button): \u4FEE\u590Dbug",parents:[],space:1,time:2},{author:{name:"test4",avatar_url:"https://avatars.githubusercontent.com/u/140487515?v=4"},date:"2023-06-07T03:27:07.000Z",id:"merge_request_1",message:"fix(button): \u4FEE\u590Dbug",parents:[],refs:"ceshi",space:3,time:3}]},commit_url:"http://www.google.cn/"}}}});return r({render:e},m)}()}},L='{"title":"GitGraph \u63D0\u4EA4\u7F51\u7EDC\u56FE","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u57FA\u672C\u7528\u6CD5","slug":"\u57FA\u672C\u7528\u6CD5"},{"level":3,"title":"GitGraph \u53C2\u6570","slug":"gitgraph-\u53C2\u6570"},{"level":3,"title":"GitGraph \u7C7B\u578B\u5B9A\u4E49","slug":"gitgraph-\u7C7B\u578B\u5B9A\u4E49"}],"relativePath":"components/git-graph/index.md","lastUpdated":1692275225782}',P=b(k(r({},V),{setup(p){const a={};return(t,c)=>{const e=E("render-demo-0"),o=E("demo");return B(),f("div",null,[w,q,G,F(o,{sourceCode:`<template>
  <d-git-graph :option=data>
  </d-git-graph>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const data = {
			params: {},
			data: {
				commits: [
					{
						author: {
							name: 'test1',
							avatar_url: 'https://avatars.githubusercontent.com/u/44854357?v=4'
						},
						date: '2023-07-07T03:27:07.000Z',
						id: 'merge_request_4',
						message: 'fix(button): \u4FEE\u590Dbug',
						parents: [['merge_request_3', 1]],
						refs: 'develop',
						space: 1,
						time: 0,
						customUrl: 'http://www.google.cn/',
						branch: 'master'
					},
					{
						author: {
							name: 'test2',
							avatar_url: 'https://avatars.githubusercontent.com/u/140487515?v=4'
						},
						date: '2023-07-07T03:27:07.000Z',
						id: 'merge_request_3',
						message: 'fix(button): \u4FEE\u590Dbug',
						parents: [['merge_request_2', 1], ['merge_request_1', 3]],
						space: 1,
						time: 1
					},
					{
						author: {
							name: 'test3',
							avatar_url: 'https://avatars.githubusercontent.com/u/44854357?v=4'
						},
						date: '2023-06-07T03:27:07.000Z',
						id: 'merge_request_2',
						message: 'fix(button): \u4FEE\u590Dbug',
						parents: [],
						space: 1,
						time: 2
					},
					{
						author: {
							name: 'test4',
							avatar_url: 'https://avatars.githubusercontent.com/u/140487515?v=4'
						},
						date: '2023-06-07T03:27:07.000Z',
						id: 'merge_request_1',
						message: 'fix(button): \u4FEE\u590Dbug',
						parents: [],
						refs: 'ceshi',
						space: 3,
						time: 3
					},
				]
			},
			commit_url: 'http://www.google.cn/',
		};
    return {
      data,
    };
  },
})
<\/script>

<style></style>
`,lightCode:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ed-git-graph%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aoption%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3Edata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ed-git-graph%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20defineComponent%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Eexport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Edefault%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EdefineComponent%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eparams%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Edata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecommits%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eauthor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'test1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eavatar_url%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44854357%3Fv%3D4'%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Edate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'2023-07-07T03%3A27%3A07.000Z'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'merge_request_4'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emessage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'fix(button)%3A%20%E4%BF%AE%E5%A4%8Dbug'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eparents%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'merge_request_3'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Erefs%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'develop'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espace%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etime%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3EcustomUrl%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'http%3A%2F%2Fwww.google.cn%2F'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ebranch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'master'%3C%2Fspan%3E%0A%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eauthor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'test2'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eavatar_url%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F140487515%3Fv%3D4'%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Edate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'2023-07-07T03%3A27%3A07.000Z'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'merge_request_3'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emessage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'fix(button)%3A%20%E4%BF%AE%E5%A4%8Dbug'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eparents%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'merge_request_2'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'merge_request_1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espace%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etime%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%0A%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eauthor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'test3'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eavatar_url%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F44854357%3Fv%3D4'%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Edate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'2023-06-07T03%3A27%3A07.000Z'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'merge_request_2'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emessage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'fix(button)%3A%20%E4%BF%AE%E5%A4%8Dbug'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eparents%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espace%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etime%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%0A%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eauthor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%09%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'test4'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eavatar_url%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F140487515%3Fv%3D4'%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Edate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'2023-06-07T03%3A27%3A07.000Z'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'merge_request_1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emessage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'fix(button)%3A%20%E4%BF%AE%E5%A4%8Dbug'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eparents%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Erefs%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'ceshi'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espace%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etime%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%0A%09%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%09%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%09%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ecommit_url%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'http%3A%2F%2Fwww.google.cn%2F'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%09%09%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Ereturn%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20data%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",desc:"",demoList:v(a),targetFilePath:""},{highlight:D(()=>[T]),default:D(()=>[F(e)]),_:1},8,["demoList"]),Z])}}}));export{L as __pageData,P as default};
