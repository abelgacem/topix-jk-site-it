---
mx:
  description: A tool to author documentation
  ref: 
    - tool:jekyll:whatis: config
---



# get the name of a {{site.data.topix.topic}}'s {{site.data.topix.category}}
```liquid
# input
{% assign lCATEGORY    = page.collection %}
page : path      = {{ page.path   }}
topic : category = {{ lCATEGORY   }}

# output
page  : path     = _tools/list/topix/whatis/topix.md
topic : category = tools
```

# loop through all {{site.data.topix.category}}
```liquid
# input
<ul>
{% for collection in site.collections %}
{% unless collection.label == "posts" %}
  <li>{{ collection.label | capitalize }}</li>
{% endunless %}
{% endfor %}
</ul>

# output
page  : path     = _tools/list/topix/whatis/topix.md
topic : category = tools
```

