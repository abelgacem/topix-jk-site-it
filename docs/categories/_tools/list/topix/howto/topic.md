---
mx:
  description: A tool to author documentation
---



# get the name of a {{site.data.topix.topic}}
```shell
# input
{% assign lTOPIC_NAME    = page.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
page  : path = {{ page.path  }}
topic : name = {{ lTOPIC_NAME  }}

# output
page : path = _tools/list/topix/whatis/topix.md
topic: name = topix
```