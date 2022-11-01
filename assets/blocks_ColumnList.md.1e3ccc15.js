import{_ as s,c as a,o as n,a as l}from"./app.5c6dca7c.js";const i=JSON.parse('{"title":"Column list","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create","slug":"create","link":"#create","children":[]},{"level":2,"title":"Add column","slug":"add-column","link":"#add-column","children":[]},{"level":2,"title":"Change columns","slug":"change-columns","link":"#change-columns","children":[]}],"relativePath":"blocks/ColumnList.md","lastUpdated":1667337292000}'),o={name:"blocks/ColumnList.md"},p=l(`<h1 id="column-list" tabindex="-1">Column list <a class="header-anchor" href="#column-list" aria-hidden="true">#</a></h1><p>Column lists are blocks that contains <a href="./Column.html">Columns</a> as children.</p><h2 id="create" tabindex="-1">Create <a class="header-anchor" href="#create" aria-hidden="true">#</a></h2><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Paragraph</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fromString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Column</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColumnList</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">col1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="add-column" tabindex="-1">Add column <a class="header-anchor" href="#add-column" aria-hidden="true">#</a></h2><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColumnList</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">col1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">addChild</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">col3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="change-columns" tabindex="-1">Change columns <a class="header-anchor" href="#change-columns" aria-hidden="true">#</a></h2><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColumnList</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">changeColumns</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">col1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">col3</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,8),e=[p];function c(t,r,F,D,y,C){return n(),a("div",null,e)}const d=s(o,[["render",c]]);export{i as __pageData,d as default};
