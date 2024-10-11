---
layout: index
title:  myIndex
---
[link]:        #
[repo_source]: #


<!-- define var -->
{% assign lLIST_PAGE         = site.pages %}

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
    {% for lPAGE in lLIST_PAGE %}
      {% assign lPATH_SPLIT = lPAGE.path | split: "/"   | slice: 2, 1 %}
      {% assign lTOPIC_NAME  = lPAGE.path | split: "/"  | slice: 1, 1 | first | downcase | strip %}
      {% assign lNB         = lPAGE.path   |  split: "/" | size %}
      {% assign lTOPIC_TYPE = lPAGE.path |  split: "/" | slice: 2, 1 | first | downcase | strip %}
      {% assign lLAST       = lPAGE.path |  split: "/" | last | remove: '.md' %}
      {% if lTOPIC_NAME != ""  and (lLAST == 'README' or (lTOPIC_TYPE == 'whatis' and lTOPIC_NAME == lLAST ) %}
      <tr>
        <td translate='no'><a href="{{ lPAGE.path | remove: '.md' }}">{{ lTOPIC_NAME }}</a></td>
        <td translate='no'>{{ lPAGE.mx.domain }}</td>
        <td>{{ lPAGE.mx.description }}</td>
        <td>{{ lPAGE.path }}</td>
        <td>{{ lNB }} - {{ lTOPIC_NAME }} - {{ lLAST }} -{{ lTOPIC_TYPE }}</td>
      </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>


