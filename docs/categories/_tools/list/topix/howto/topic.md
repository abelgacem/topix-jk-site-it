---
mx:
  description: A tool to author documentation
---



# get the name of a {{site.data.topix.topic}}
```liquid
# input
{% assign lTOPIC_NAME    = page.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
page : path         = {{ page.path  }}
page : topic : name = {{ lTOPIC_NAME  }}

# output

```

