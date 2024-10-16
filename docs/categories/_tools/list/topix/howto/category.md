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
```

