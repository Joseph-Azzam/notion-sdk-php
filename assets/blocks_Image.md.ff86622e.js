import{_ as s,c as a,o as n,a as l}from"./app.5c6dca7c.js";const h=JSON.parse('{"title":"Image","description":"","frontmatter":{},"headers":[{"level":2,"title":"Upload","slug":"upload","link":"#upload","children":[]},{"level":2,"title":"Embed with link","slug":"embed-with-link","link":"#embed-with-link","children":[]},{"level":2,"title":"Change file","slug":"change-file","link":"#change-file","children":[]}],"relativePath":"blocks/Image.md","lastUpdated":1667337292000}'),e={name:"blocks/Image.md"},p=l(`<h1 id="image" tabindex="-1">Image <a class="header-anchor" href="#image" aria-hidden="true">#</a></h1><p>Upload or embed image with a link.</p><h2 id="upload" tabindex="-1">Upload <a class="header-anchor" href="#upload" aria-hidden="true">#</a></h2><p>The Notion API <a href="https://developers.notion.com/docs/working-with-files-and-media#uploading-files-and-media-via-the-notion-api" target="_blank" rel="noreferrer">currently does not support uploading new files</a>.</p><h2 id="embed-with-link" tabindex="-1">Embed with link <a class="header-anchor" href="#embed-with-link" aria-hidden="true">#</a></h2><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">File</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">createExternal</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.placecage.com/640/360.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Image</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="change-file" tabindex="-1">Change file <a class="header-anchor" href="#change-file" aria-hidden="true">#</a></h2><div class="language-php"><button class="copy"></button><span class="lang">php</span><pre><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">file </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">File</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">createExternal</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.placecage.com/640/360.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Image</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">file</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// Add to a Notion page...</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">newFile </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">File</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">creatExternal</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://www.fillmurray.com/640/360.png</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">block</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">changeFile</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">newFile</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,8),o=[p];function t(c,r,F,i,D,y){return n(),a("div",null,o)}const A=s(e,[["render",t]]);export{h as __pageData,A as default};
