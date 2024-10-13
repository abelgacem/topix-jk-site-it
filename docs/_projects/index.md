---
layout: collection_index
title:  Projects title
description: Entry point for exploring current and past projects.
---

# {{ site.data.name.introduction }}
- {{ page.description }}


# Todo 01
  {% for lFILE in site[page.collection] %}
  {% assign lFILE_DEPTH  = lFILE.path | split: '/' | size | minus: 2 %}
  {% assign lSTOPIC_TYPE = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip %}
  {% assign lTOPIC_NAME  = lFILE.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
  {% unless lFILE.name == 'index.md' and lFILE_DEPTH == 0  %}
  <li>{{lFILE_DEPTH}} - {{lTOPIC_NAME}} - {{lSTOPIC_TYPE}}  | name = {{ lFILE.name }} | title = {{ lFILE.title }} | type = {{lSTOPIC_TYPE}} - <!--url = {{ lFILE.url }} - path = {{ lFILE.path }} --></li>
{% endunless %}
{% endfor %}

# List of {{ page.collection }}

<!-- define var -->

<table class="sortable">
  <thead>
    <tr>
      <th translate='no'>name</th>
      <th translate='no'>tag</th>
      <th >description</th>
      <th>debug</th>
    </tr>
  </thead>
  <tbody>
  {% for lFILE in site[page.collection] %}
  {% assign lFILE_DEPTH  = lFILE.path | split: '/' | size | minus: 2 %}
  {% assign lSTOPIC_TYPE = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip %}
  {% assign lTOPIC_NAME  = lFILE.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
  {% unless lFILE.name   == 'index.md' and lFILE_DEPTH == 0  %}
  {% if lSTOPIC_TYPE == 'whatis' and lTOPIC_NAME = 0  %}
  <tr>
    <td translate='no'><a href='{{ item.url }}'>{{lTOPIC_NAME}}</a></td>
    <td translate='no'>{{ lFILE.mx.tag }}</td>
    <td>{{ lFILE.mx.description }}</td>
    <td><li>depth = {{lFILE_DEPTH}} | title = {{ lFILE.title }} | type = {{lSTOPIC_TYPE}} </li> <li>url = {{ lFILE.url }}</li><li>path = {{ lFILE.path }}</li></td>
  </tr>
  {% endunless %}
  {% endfor %}
  </tbody>
</table>

