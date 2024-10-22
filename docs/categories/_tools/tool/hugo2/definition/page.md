---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: 3
  ref:  
    child:
      - definition/content
      - definition/site
      - definition/frontmatter
      - howto/page
      - definition/bundle
---

# Definition
- a static `.html` file served by the server
- can contains javascript, typescript,css, ...
- Is built at a specific point in time


# Category

|name|desc|
|-|-|
|single|
|list|list other content|
|Home|by default is a "page@list"|
|baseof|

# good to know
- by default, a page child of folder: `content`
  - is of type  **`page`**
  - uses a layout called  **`single`**
  - exception: a page named  **`_index.md`**  uses a layout called  **`list`**
- a home page child of folder: `content`
  - is of type  **`page`**
  - can use a layout called  **`index`**

# Todo

- ths type of page are Accessed via `.Page.Type`  in templates
- this type can be overriden by **`frontmatter`:key:`type`**
