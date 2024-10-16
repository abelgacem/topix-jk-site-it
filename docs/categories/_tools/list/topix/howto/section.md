---
mx:
  description: A tool to author documentation
  ref: 
    - tool:jekyll:whatis: config
---



# get the name of a {{site.data.topix.section}}
```liquid
# input
{% assign lSECTION    = page.path | split: '/' | slice: 1 | first | downcase | strip %}
page : path      = {{ page.path   }}
topic : category = {{ lCATEGORY   }}

# output
```

