---
layout: collection_index
title:  Projects title
description: Entry point for exploring current and past projects.
---

# {{ site.data.name.introduction }}
- {{ page.description }}

# Todo


<ul>
  {% for item in site[page.collection] %}
    <li>
      <a href="{{ item.url }}">{{ item.title }} - {{ item.path }} </a>
    </li>
  {% endfor %}
</ul>


