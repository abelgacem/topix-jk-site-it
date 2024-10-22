---
mx:
  lp:
  ref:
    - def/content
---



# definition
- Set of {{site.data.name.kvpair}} in {{site.data.name.yaml}} format (ie. variable)
- Define in the begining of a content.
- Used at build time by jekyll.
- Can be used by a {{site.data.name.liquid}} expression to control the render.

# type
- {{site.data.name.sdef}}, {{site.data.name.udef }}

# Example of `frontmatter@sdef` 
```shell
layout: 'page'
title:  'about'
categorizations: 'cat01 cat02'
permalink: '/:category'
```

# Example of `frontmatter@udef`
```shell
mx: 
  lp:
  ref:
  var:
    title:  'about'
    tag: 'cat01 cat02'
```

# list
|name|type|description|
|-|-|-|
|layout||a page's CSS.|
|title||a browser's tab name.|
|permalink|parameterized|a page's URL.|
|catagories|seq. of string|

# Ref
- https://jekyllrb.com/docs/configuration/front-matter-defaults/
- https://jekyllrb.com/docs/static-files/
- https://jekyllrb.com/docs/front-matter/
- 