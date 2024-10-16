---
mx:
  description: A tool to author documentation
---



# get the name of the {{site.data.topix.domain}}
- it is define in {{site.data.topix.config}}
```liquid
# input
{% assign lTOPIC_NAME    = page.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
page : path         = {{ page.path  }}
page : topic : name = {{ lTOPIC_NAME  }}

# output
page : path         = _tools/list/topix/whatis/topix.md
page : topic : name = topix
```

