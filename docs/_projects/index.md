---
layout: collection_index
title:  Projects title
description: Entry point for exploring current and past projects.
---

# {{ site.data.name.introduction }}
- {{ page.description }}

<!-- define var -->
{% assign lLIST_FILE = site[page.collection] %}

<!-- 
{% assign lLIST_FILE = site[page.collection] | where_exp: "item", "item.path contains '_drafts'" %} -->




# Todo 01
{% assign folders = "" %}
{% for file in lLIST_FILE %}
{% assign test = file.path | split: '/' | slice: 1, 1 | first | downcase | strip %}
{% unless file.name == "index.md" %}
  <li>{{ file.name | remove: '.md' }} - {{ file.title }} - {{ file.path }} - {{ test }}</li>
{% endunless %}
{% endfor %}

# Todo 02


<table class="sortable">
  <thead>
    <tr>
      <th translate='no'>topic</th>
      <th translate='no'>tag</th>
      <th >description</th>
      <th>debug</th>
    </tr>
  </thead>
  <tbody>
  {% for item in site[page.collection] %}
  <tr>
    <td translate='no'><a href='{{ item.url }}'>{{item.title}}</a></td>
    <td translate='no'></td>
    <td>{{ item.mx.description }}</td>
    <td>{{ item.url }} - {{ item.title }} - {{ item.path }} - {{ lSTOPIC_NAME }} - {{ lSTOPIC_FILE }}</td>
  </tr>
  {% endfor %}
  </tbody>
</table>

