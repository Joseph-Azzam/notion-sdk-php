import{_ as s,c as n,o as a,a as l}from"./app.5c6dca7c.js";const o="/notion-sdk-php/assets/column-create.5286a6d6.png",h=JSON.parse('{"title":"Column","description":"","frontmatter":{},"headers":[{"level":2,"title":"Create","slug":"create","link":"#create","children":[]},{"level":2,"title":"Add child block","slug":"add-child-block","link":"#add-child-block","children":[]},{"level":2,"title":"Change children","slug":"change-children","link":"#change-children","children":[]}],"relativePath":"blocks/Column.md","lastUpdated":1667337292000}'),p={name:"blocks/Column.md"},e=l(`<h1 id="column" tabindex="-1">Column <a class="header-anchor" href="#column" aria-hidden="true">#</a></h1><p>Columns should be used inside a <a href="./ColumnList.html">ColumnList</a> block.</p><p>The block&#39;s children will define the content of the column.</p><h2 id="create" tabindex="-1">Create <a class="header-anchor" href="#create" aria-hidden="true">#</a></h2><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Heading1</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fromString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Column 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Paragraph</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fromString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is column 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Heading1</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fromString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Column 2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Paragraph</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fromString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is column 2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">columnList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ColumnList</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">column1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">column2</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p><img src="`+o+`" alt=""></p><h2 id="add-child-block" tabindex="-1">Add child block <a class="header-anchor" href="#add-child-block" aria-hidden="true">#</a></h2><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Heading1</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fromString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Column 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">)-&gt;</span><span style="color:#82AAFF;">addChild</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">Paragraph</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fromString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is column 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>All blocks, but <code>Column</code> are allowed as children.</p></div><h2 id="change-children" tabindex="-1">Change children <a class="header-anchor" href="#change-children" aria-hidden="true">#</a></h2><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#FFCB6B;">Column</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">()-&gt;</span><span style="color:#82AAFF;">changeChildren</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Paragraph</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">fromString</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is column 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,11),c=[e];function t(r,F,D,y,i,d){return a(),n("div",null,c)}const u=s(p,[["render",t]]);export{h as __pageData,u as default};
