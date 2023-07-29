import{_ as n,o as s,c as a,b as p}from"./app.ffbe3879.js";const y='{"title":"\u7EC4\u4EF6\u76EE\u5F55\u548C\u6587\u4EF6\u7EC4\u7EC7\u89C4\u8303","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784","slug":"\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784"},{"level":3,"title":"\u5165\u53E3\u6587\u4EF6 index.ts","slug":"\u5165\u53E3\u6587\u4EF6-index-ts"},{"level":3,"title":"\u7EC4\u4EF6\u6587\u4EF6 my-component.tsx","slug":"\u7EC4\u4EF6\u6587\u4EF6-my-component-tsx"},{"level":3,"title":"\u7C7B\u578B\u6587\u4EF6 my-component-types.ts","slug":"\u7C7B\u578B\u6587\u4EF6-my-component-types-ts"},{"level":3,"title":"Composable use-my-composable.ts","slug":"composable-use-my-composable-ts"},{"level":3,"title":"\u6837\u5F0F\u6587\u4EF6 my-component-scss","slug":"\u6837\u5F0F\u6587\u4EF6-my-component-scss"},{"level":3,"title":"\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6 my-component.spec.ts","slug":"\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6-my-component-spec-ts"}],"relativePath":"contributing/development-specification/directory-organization/index.md","lastUpdated":1689597175371}',t={},o=p(`__VP_STATIC_START__<h1 id="\u7EC4\u4EF6\u76EE\u5F55\u548C\u6587\u4EF6\u7EC4\u7EC7\u89C4\u8303" tabindex="-1">\u7EC4\u4EF6\u76EE\u5F55\u548C\u6587\u4EF6\u7EC4\u7EC7\u89C4\u8303 <a class="header-anchor" href="#\u7EC4\u4EF6\u76EE\u5F55\u548C\u6587\u4EF6\u7EC4\u7EC7\u89C4\u8303" aria-hidden="true">#</a></h1><p>Vue DevUI \u5305\u542B\u4E30\u5BCC\u7684\u7EC4\u4EF6\uFF0C\u90FD\u5728<code>devui-vue</code>\u5B50\u5305\u7684<code>devui</code>\u76EE\u5F55\u4E0B\uFF0C\u8BE5\u76EE\u5F55\u4E0B\u7684\u6BCF\u4E00\u4E2A\u5B50\u76EE\u5F55\u90FD\u662F\u4E00\u4E2A\u7EC4\u4EF6\u7684\u6E90\u7801\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\u4E00\u4E2A\u6216\u591A\u4E2A\u8D21\u732E\u8005\u3002</p><p>\u7EC4\u4EF6\u76EE\u5F55\u548C\u6587\u4EF6\u7EC4\u7EC7\u89C4\u8303\u7684\u76EE\u7684\u5C31\u662F\u89C4\u8303\u7EC4\u4EF6\u7684\u76EE\u5F55\u7ED3\u6784\u548C\u5404\u7EC4\u4EF6\u6587\u4EF6\u7684\u7EC4\u7EC7\u5F62\u5F0F\u3002</p><p>\u76EE\u5F55\u89C4\u8303\u5206\u6210\u4EE5\u4E0B\u90E8\u5206\uFF1A</p><ol><li>\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784</li><li>\u5165\u53E3\u6587\u4EF6 <code>index.ts</code></li><li>\u7EC4\u4EF6\u6587\u4EF6 <code>my-component.tsx</code></li><li>\u7C7B\u578B\u6587\u4EF6 <code>my-component-types.ts</code></li><li>Composable <code>use-my-composable.ts</code></li><li>\u6837\u5F0F\u6587\u4EF6 <code>my-component-scss</code></li><li>\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6 <code>my-component.spec.ts</code></li></ol><h3 id="\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h3><p>\u4EE5\u4E0B\u662F\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784\u7684\u57FA\u672C\u6A21\u677F</p><div class="language-"><pre><code>my-component
\u251C\u2500\u2500 __tests__                 // \u5355\u5143\u6D4B\u8BD5
|  \u2514\u2500\u2500 my-component.spec.ts
\u251C\u2500\u2500 index.ts                  // \u5165\u53E3\u6587\u4EF6
\u2514\u2500\u2500 src                       // \u7EC4\u4EF6\u6E90\u7801
   \u2514\u2500\u2500 components             // \u5B50\u7EC4\u4EF6
      \u251C\u2500\u2500 my-sub-component.ts
   \u2514\u2500\u2500 composables            // \u7EC4\u4EF6\u7684\u903B\u8F91\u90E8\u5206 composable
      \u251C\u2500\u2500 my-use-composable.ts
   \u251C\u2500\u2500 my-component-types.ts  // \u7EC4\u4EF6\u7C7B\u578B
   \u251C\u2500\u2500 my-component.scss      // \u7EC4\u4EF6\u6837\u5F0F
   \u2514\u2500\u2500 my-component.tsx       // \u7EC4\u4EF6
</code></pre></div><h3 id="\u5165\u53E3\u6587\u4EF6-index-ts" tabindex="-1">\u5165\u53E3\u6587\u4EF6 <code>index.ts</code> <a class="header-anchor" href="#\u5165\u53E3\u6587\u4EF6-index-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> App <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">&#39;./src/my-component&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;./src/my-component-types&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> MyComponent <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;MyComponent \u6211\u7684\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
  category<span class="token operator">:</span> <span class="token string">&#39;\u901A\u7528&#39;</span><span class="token punctuation">,</span>
  status<span class="token operator">:</span> <span class="token string">&#39;100%&#39;</span><span class="token punctuation">,</span>
  <span class="token function">install</span><span class="token punctuation">(</span>app<span class="token operator">:</span> App<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">.</span>name<span class="token punctuation">,</span> MyComponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7EC4\u4EF6\u6587\u4EF6-my-component-tsx" tabindex="-1">\u7EC4\u4EF6\u6587\u4EF6 <code>my-component.tsx</code> <a class="header-anchor" href="#\u7EC4\u4EF6\u6587\u4EF6-my-component-tsx" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> SetupContext <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> myComponentProps<span class="token punctuation">,</span> MyComponentProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./my-component-types&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> useMyComposable <span class="token keyword">from</span> <span class="token string">&#39;./composables/use-my-composable&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token string">&#39;./my-component.scss&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;DMyComponent&#39;</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> myComponentProps<span class="token punctuation">,</span>
  emits<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span>props<span class="token operator">:</span> MyComponentProps<span class="token punctuation">,</span> ctx<span class="token operator">:</span> SetupContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> myProp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> myUseVar<span class="token punctuation">,</span> myUseMethod <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMyComposable</span><span class="token punctuation">(</span>myUseParam<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;devui-my-component&quot;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span> myProp<span class="token punctuation">.</span>value <span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="\u7C7B\u578B\u6587\u4EF6-my-component-types-ts" tabindex="-1">\u7C7B\u578B\u6587\u4EF6 <code>my-component-types.ts</code> <a class="header-anchor" href="#\u7C7B\u578B\u6587\u4EF6-my-component-types-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> PropType<span class="token punctuation">,</span> ExtractPropTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> myComponentProps <span class="token operator">=</span> <span class="token punctuation">{</span>
  myProp<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  myProp2<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token builtin">Array</span> <span class="token keyword">as</span> PropType<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> <span class="token keyword">const</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">type</span> <span class="token class-name">MyComponentProps</span> <span class="token operator">=</span> ExtractPropTypes<span class="token operator">&lt;</span><span class="token keyword">typeof</span> myComponentProps<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="composable-use-my-composable-ts" tabindex="-1">Composable <code>use-my-composable.ts</code> <a class="header-anchor" href="#composable-use-my-composable-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useMyComposable</span><span class="token punctuation">(</span>myUseParam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> myUseVar <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> <span class="token function-variable function">myUseMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> myUseVar<span class="token punctuation">,</span> myUseMethod <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6837\u5F0F\u6587\u4EF6-my-component-scss" tabindex="-1">\u6837\u5F0F\u6587\u4EF6 <code>my-component-scss</code> <a class="header-anchor" href="#\u6837\u5F0F\u6587\u4EF6-my-component-scss" aria-hidden="true">#</a></h3><div class="language-scss"><pre><code><span class="token keyword">@import</span> <span class="token string">&#39;../../styles-var/devui-var.scss&#39;</span><span class="token punctuation">;</span>

<span class="token selector">.devui-my-component </span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6-my-component-spec-ts" tabindex="-1">\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6 <code>my-component.spec.ts</code> <a class="header-anchor" href="#\u5355\u5143\u6D4B\u8BD5\u6587\u4EF6-my-component-spec-ts" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> mount<span class="token punctuation">,</span> DOMWrapper <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/test-utils&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> DMyComponent <span class="token keyword">from</span> <span class="token string">&#39;../src/my-component&#39;</span><span class="token punctuation">;</span>

<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;MyComponent&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;should render correctly&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      components<span class="token operator">:</span> <span class="token punctuation">{</span> DMyComponent <span class="token punctuation">}</span><span class="token punctuation">,</span>
      template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
        &lt;d-my-component my-prop=&quot;xxx&quot; /&gt;
      </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> myVar <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> myVar <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">expect</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>xxx<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>__VP_STATIC_END__`,20),e=[o];function c(u,l,k,i,r,d){return s(),a("div",null,e)}var f=n(t,[["render",c]]);export{y as __pageData,f as default};
