---
mx:
  description: A tool to author documentation
  ref: 
    - tool:jekyll:whatis: config
---



# get the name of a {{site.data.topix.category}}
```liquid
# input
{% assign lCATEGORY    = page.collection %}
page : path      = {{ page.path   }}
topic : category = {{ lCATEGORY   }}

# output
page  : path     = _tools/list/topix/whatis/topix.md
topic : category = tools
```

# get an array of all {{site.data.topix.category}}
