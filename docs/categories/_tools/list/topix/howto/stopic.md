---
mx:
  description: A tool to author documentation
---



# get the name of a {{site.data.topix.stopic}}
```shell
# input
{% assign lTOPIC_NAME    = page.path | split: '/' | last | downcase | strip %}
page   : path = {{ page.path  }}
stopic : name = {{ lTOPIC_NAME  }}

# output
page : path = _tools/list/topix/whatis/topix.md
topic: name = topix
```

# get an array of all {{site.data.topix.stopic}}
