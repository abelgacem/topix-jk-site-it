---
layout: index
title:  myIndex
---
[link]:        #
[repo_source]: #


<!-- define var -->
{% assign lLIST_TOPIC         = site.pages %}

# {{ site.data.name.introduction }}
- This documentation is built and deployed from a [GitHub repository][repo_source].

# {{ site.data.name.purpose }}
- Document IT {{ site.mx.domain | append: "s"}}.


# List


<!-- <table id="myTable"> -->
<table class="sortable">
  <thead>
    <tr>
      <th>project name</th>
      <th translate='no'>tag</th>
      <th>description</th>
      <th>path</th>
      <th>debug</th>
    </tr>
  </thead>
  <tbody>
    {% for lTOPIC in lLIST_TOPIC %}
      {% assign lTOPIC_DEPTH = lTOPIC.path  |  split: "/" | size %}
      {% assign lTOPIC_NAME  = lTOPIC.path  | split: "/"  | slice: 1, 1 | first | downcase | strip %}
      {% assign lTOPIC_TYPE  = lTOPIC.path  |  split: "/" | slice: 2, 1 | first | downcase | strip %}
      {% assign lTOPIC_FILE  = lTOPIC.path  |  split: "/" | last | remove: '.md' %}
      {% if lTOPIC_FILE == 'README' or lTOPIC_TYPE == 'whatis' and lTOPIC_NAME == lTOPIC_FILE %}
      <tr>
        <td translate='no'><a href="{{ lTOPIC.path | remove: '.md' }}">{{ lTOPIC_NAME }}</a></td>
        <td translate='no'>{{ lTOPIC.mx.domain }}</td>
        <td>{{ lTOPIC.mx.description }}</td>
        <td>{{ lTOPIC.path }}</td>
        <td>{{ lTOPIC_DEPTH }} - {{ lTOPIC_NAME }} - {{ lTOPIC_TYPE }} - {{ lTOPIC_FILE }} </td>
      </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


