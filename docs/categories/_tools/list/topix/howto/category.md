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
page  : path = {{ page.path  }}
topic : name = {{ lCATEGORY  }}

# output
page : path = _tools/list/topix/whatis/topix.md
topic: name = topix
```

