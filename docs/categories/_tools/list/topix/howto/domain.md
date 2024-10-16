---
mx:
  description: A tool to author documentation
---



# get the name of the {{site.data.topix.domain}}
- it is define in {{site.data.topix.config}}
```liquid
# input
{% assign lTOPIC_DOMAIN    = site.mx.domain %}
page  : path         = {{ page.path  }}
topic : domain = {{ lTOPIC_NAME  }}

# output
page : path         = _tools/list/topix/whatis/topix.md
page : topic : name = topix
```

# get an array of all {{site.data.topix.domain}}
