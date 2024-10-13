<!-- define var -->
{% assign lLIST_TOPIC         = site.pages %}


<!-- define var -->
{% assign lLIST_TOPIC  = site.pages %}
{% assign lTOPIC_NAME    = page.dir  | split: "/"  | slice: 2, 1 | first | downcase | strip %}
{% assign lTOPIC_FOLDER  = 'list/' | append: lTOPIC_NAME %}

<h1> {{ site.data.name.list }} of topics </h1>

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
  {% for lTOPIC in lLIST_TOPIC %}
  {% if lTOPIC.path contains lTOPIC_FOLDER %}
  {% assign lSTOPIC_PATH  = lTOPIC.path   %}
  {% assign lSTOPIC_TYPE  = lTOPIC.path  | split: "/"  | slice: 2, 1 | first | downcase | strip %}
  {% assign lSTOPIC_NAME  = lTOPIC.path  |  split: "/" | last | remove: '.md' %}
  <tr>
    <td translate='no'><a href="/{{ lSTOPIC_PATH | remove: '.md' }}">{{ lSTOPIC_NAME }}</a></td>
    <td translate='no'>{{ lSTOPIC_TYPE }}</td>
    <td>{{ lTOPIC.mx.description }}</td>
    <td>{{lTOPIC_NAME}} - {{lTOPIC_FOLDER}} - {{ lSTOPIC_PATH }} - {{ lSTOPIC_NAME }} - {{ lSTOPIC_FILE }}</td>
  </tr>
  {% endif %}
  {% endfor %}
  </tbody>
</table>



<!-- define var -->
{% assign lLIST_TOPIC  = site.pages %}
{% assign lTOPIC_NAME    = page.dir  | split: "/"  | slice: 2, 1 | first | downcase | strip %}
{% assign lTOPIC_FOLDER  = 'list/' | append: lTOPIC_NAME %}

<h1> {{ site.data.name.list }} of topics </h1>

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
  {% for lTOPIC in lLIST_TOPIC %}
  {% if lTOPIC.path contains lTOPIC_FOLDER %}
  {% assign lSTOPIC_PATH  = lTOPIC.path   %}
  {% assign lSTOPIC_TYPE  = lTOPIC.path  | split: "/"  | slice: 2, 1 | first | downcase | strip %}
  {% assign lSTOPIC_NAME  = lTOPIC.path  |  split: "/" | last | remove: '.md' %}
  <tr>
    <td translate='no'><a href="/{{ lSTOPIC_PATH | remove: '.md' }}">{{ lSTOPIC_NAME }}</a></td>
    <td translate='no'>{{ lSTOPIC_TYPE }}</td>
    <td>{{ lTOPIC.mx.description }}</td>
    <td>{{lTOPIC_NAME}} - {{lTOPIC_FOLDER}} - {{ lSTOPIC_PATH }} - {{ lSTOPIC_NAME }} - {{ lSTOPIC_FILE }}</td>
  </tr>
  {% endif %}
  {% endfor %}
  </tbody>
</table>



