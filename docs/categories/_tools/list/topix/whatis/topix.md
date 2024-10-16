---
mx:
  description: A tool to author documentation
---



# {{ site.data.name.description }}
- {{ page.mx.description}}.
- A web application.
- Uses the following tools and {{site.data.name.framework}}:
  - {{site.data.name.bootstrap}}
  - {{site.data.name.jekyll}}

# input
{% assign lCATEGORY    = page.collection %}
{% assign lSECTION     = page.path | split: '/' | slice: 1    | first | downcase | strip %}
{% assign lTOPIC_NAME  = page.path | split: '/' | slice: 2, 1 | first | downcase | strip %}
- page : path      = {{ page.path   }}
- topic : category = {{ lCATEGORY   }}
- topic : section  = {{ lSECTION   }}
- topic : name     = {{ lTOPIC_NAME }}

# work
<!-- define var -->
{% assign lTOPIC_NAME    = page.path | split: '/' | slice: 2, 1 | first | downcase | strip %}

{% for lFILE in site[page.collection] %}
  {% assign lFILE_XXXXX  = lFILE.path | split: '/' | slice: 1   %}
  {% assign lFILE_DEPTH  = lFILE.path | split: '/' | size | minus: 2 %}
  {% unless lFILE_DEPTH == 0 %}
    {{ lFILE_DEPTH }} - {{ lFILE.path }} - {{lFILE_XXXXX}}
  {% endunless %}
{% endfor %}
