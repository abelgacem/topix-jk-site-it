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






{%- comment -%} 
# Todo 01
{% for lFILE in site[page.collection] %}
{% assign lFILE_DEPTH  = lFILE.path | split: '/' | size | minus: 2 %}
{% assign lFILE_FOLDER = lFILE.path | split: '/' | slice: 1, 1 | first | downcase | strip %}
{% assign lTOPIC_NAME  = lFILE.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
{% assign lSTOPIC_TYPE = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip %}
{% assign lFILE_EXPECTED = lTOPIC_NAME | append: '.md' %}
{% unless lFILE.name == 'index.md' and lFILE_DEPTH == 0  %} 
{% if  lFILE_DEPTH ==2  or lSTOPIC_TYPE == 'whatis' and lFILE.name == lFILE_EXPECTED %}
  <li>{{lTOPIC_NAME | append: '.md'}} - {{lFILE_DEPTH}} - {{lFILE_FOLDER}} - {{lTOPIC_NAME}} - {{lSTOPIC_TYPE}}  | name = {{ lFILE.name }} | title = {{ lFILE.title }} | type = {{lSTOPIC_TYPE}} - <!--url = {{ lFILE.url }} - path = {{ lFILE.path }} --></li>
{% endif %}
{% endunless %}
{% endfor %}
 {%- endcomment -%}



<table class="sortable">
  <thead>
    <tr>
      <th translate='no'>name</th>
      <th translate='no'>tag</th>
      <th >description</th>
      {%- comment -%} <th>debug</th> {%- endcomment -%}
    </tr>
  </thead>
  <tbody>
{% for lFILE in site[page.collection] %}
{% assign lFILE_DEPTH  = lFILE.path | split: '/' | size | minus: 2 %}
{% assign lFILE_FOLDER = lFILE.path | split: '/' | slice: 1, 1 | first | downcase | strip %}
{% assign lTOPIC_NAME  = lFILE.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
{% assign lSTOPIC_TYPE = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip %}
{% assign lFILE_EXPECTED = lTOPIC_NAME | append: '.md' %}
{% unless lFILE.name == 'index.md' and lFILE_DEPTH == 0  %} 
{% if  lFILE_DEPTH ==2  or lSTOPIC_TYPE == 'whatis' and lFILE.name == lFILE_EXPECTED %}
  <tr>
    <td translate='no'><a href='{{ lFILE.url }}'>{{lTOPIC_NAME}}</a></td>
    <td translate='no'>{{ lFILE.mx.tag }}</td>
    <td>{{ lFILE.mx.description }}</td>
    {%- comment -%} <td><li>depth = {{lFILE_DEPTH}} | title = {{ lFILE.title }} | type = {{lSTOPIC_TYPE}} </li> <li>url = {{ lFILE.url }}</li><li>path = {{ lFILE.path }}</li></td> {%- endcomment -%}
  </tr>
  {% endif %}
  {% endunless %}
  {% endfor %}
  </tbody>
</table>

