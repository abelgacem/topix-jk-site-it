---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: 1
  ref:  
    child:
      - howto/site
      - definition/hugo
      - definition/page
      - definition/data
      - definition/theme
---

# Definition
- 1 static website

# possible operations

|name|description|
|-|-|
|create|create a **root folder** (from a skeleton and some inputs)|
|add content|
|configure|
|publish|create the folder: **`public`**
|deploy|provision a webserver with the folder: **`public`**


# Tree of the root folder
## version 
```
my-site/
├── archetypes/
│   └── default.md
├── assets/
├── content/
├── data/
├── i18n/
├── layouts/
├── static/
├── themes/
└── hugo.toml         <-- site configuration
```
## version 
```
my-site/
├── archetypes/
│   └── default.md
├── assets/
├── config/           <-- site configuration
│   └── _default/
│       └── hugo.toml
├── content/
├── data/
├── i18n/
├── layouts/
├── static/
└── themes/
```
## Zoom on folder  `layouts`
- files inside this folder defines the template that apply 
```bash
# contains only file@html called template
layouts/
├── _default/
│   └── single.html     # apply to page@single
│   └── list.html       # apply to page@list
│   └── baseof.html     # is inherited by others (single.html, list.html)
├── index.html          # apply to page@home
├── page/
│   ├── single.html     # apply to page@single inside folder page
│   ├── list.html       # apply to page@list inside folder page
│   ├── blog/
│   │   └── single.html # apply to page@single inside folder page/blog
│   └── docs/
│       └── single.html # apply to page@single inside folder page/docs

```

### Zoom on file: `baseof.html` 
- inherited by all other templates (list.html, single.html, index.html)
- other template  
    - must define the block:main
    - can override other block in this file by defining them
## Zoom on folder  `archetypes`
```bash
archetypes/
├── default.md # default for  kind:all
└── posts.md   # specififc to kind:posts
```

## Zoom on folder `themes`
```bash
themes/
├── todo.md
└── todo.md
```

## Zoom on folder  `data`
- act like the site database
- can contains file@(json, yaml, toml)
```bash
themes/
├── todo.md
└── todo.md
```

## Zoom on folder  `content`
## Zoom on folder  `static`
- files inside this folder defines resources/assets that
  - don’t need processing (e.g  images, fonts, pdfs, css, js)
  - are "only" injected in the final htmlfiles
## Zoom on folder  `public`
```shell
public/
├── categories/
│   ├── index.html
│   └── index.xml  <-- RSS feed for this section
├── post/
│   ├── my-first-post/
│   │   └── index.html
│   ├── index.html
│   └── index.xml  <-- RSS feed for this section
├── tags/
│   ├── index.html
│   └── index.xml  <-- RSS feed for this section
├── index.html
├── index.xml      <-- RSS feed for the site
└── sitemap.xml
```
