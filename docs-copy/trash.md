
<h1>List classifier for a topic</h1>
<li> page.path = {{ page.path }} </li>
{% assign lTOPIC_NAME    = page.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
{% assign lTOPIC_EXPECTED    = '/' | append: lTOPIC_NAME | append: '/' %}
{% assign lIST_CLASSIFIER = '' | split: ','%}
{% assign lIST_CLASSIFIER = '' | split: ','%}
{% for lFILE in site[page.collection] %}
  {% assign lFILE_DEPTH        = lFILE.path | split: '/' | size | minus: 2 %}
  {% unless lCLASSIFIER.label == "posts" or lFILE.name == 'index.md' and lFILE_DEPTH == 0 %}
    {% if lFILE.path contains lTOPIC_EXPECTED %}
      {% assign lSTOPIC_CLASSIFIER = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip | remove: '.md' %}
      {% assign lIST_CLASSIFIER = lIST_CLASSIFIER | push: lSTOPIC_CLASSIFIER %}
      <!-- <li>{{ lIST_CLASSIFIER}} - {{ lFILE.path }}</li> -->
    {% endif %}
  {% endunless %}
{% endfor %}

{% assign lIST2 = lIST_CLASSIFIER | sort | uniq %} </li>
<li>{{ lIST2 }}</li>
{% assign lIST2 = lIST_CLASSIFIER | sort | uniq | split: ',' %} </li>
<li>{{lIST2 }}</li>
{% assign lIST2 = lIST_CLASSIFIER | sort | uniq | split: ',' | join: ','%} </li>
<li>{{lIST2 }}</li>



# pretty table
<div class="container my-4">
  <table class="table table-striped table-bordered sortable">
    <thead>
      <tr>
        <th>name</th>
        <th>section</th>
        <th>Path</th>
      </tr>
    </thead>
    <tbody>
      {% for lFILE in site[page.collection] %}
        {% assign lFILE_DEPTH        = lFILE.path | split: '/' | size | minus: 2 %}
        {% assign lSTOPIC_CLASSIFIER = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip %}
        {% assign lTOPIC_EXPECTED    = '/' | append: lTOPIC_NAME | append: '/' %}
        
        {% unless lFILE.name == 'index.md' and lFILE_DEPTH == 0 %}
          {% if lFILE.path contains lTOPIC_EXPECTED %}
            <tr>
              <td><a href="{{ lFILE.url }}" class="text-primary">{{ lFILE.title }}</a></td>
              <td>{{ lSTOPIC_CLASSIFIER }}</td>
              <td>{{ lFILE.path }}</td>
            </tr>
          {% endif %}
        {% endunless %}
      {% endfor %}
    </tbody>
  </table>
</div>





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

<!--   
<img src="{{ collection.icon }}"                                              alt="{{ collection.label }} icon" class="img-fluid" style="width: 100px; height: 100px;">
<img src="{{ '/assets/icons/' | append: collection.label | append: '.svg' }}" alt="{{ collection.label }} icon" class="img-fluid" style="width: 100px; height: 100px;">
 -->


<!-- <h1>Browse by categories</h1>

{% for collection in site.collections %}
{% unless collection.label == "posts" %}
<li>
<img src="{{ collection.icon }}" alt="{{ collection.label }} icon" style="width: 20px; height: 20px;"/>
<a href="{{ site.baseurl }}/{{ collection.label }}/index.html">{{ collection.label | capitalize }}</a>
</li>
{% endunless %}
{% endfor %}
 -->



<!-- 


<table class="sortable">
  <thead>
    <tr>
      <th>name</th>
      <th translate='no'>tag</th>
      <th>description</th>
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
        <td>{{ lTOPIC.path }} - {{ lTOPIC_DEPTH }} - {{ lTOPIC_NAME }} - {{ lTOPIC_TYPE }} - {{ lTOPIC_FILE }} </td>
      </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table> -->
