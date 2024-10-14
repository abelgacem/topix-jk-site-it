---
mx:
  tag: 
  domain: tool
  description: A framework to create static website.
---


# {{ site.data.name.description }}
- {{ page.mx.description }}
- Written in Ruby.
- {{ site.data.name.liquid }} is used as the templating language.


# {{ site.data.name.process }}
- Create an empty {{ site.data.name.jekyll }} project.
  - This generate a basic directory structure.

- Make changes inside this folder:
  - layout
  - content  
  - ...

- Build the project. It consist of the  following tasks {{site.data.name.sdef}}
  - set up plugins
  - read src file.
  - run generators.
  - render template:
    - evaluate {{site.data.name.liquid}} expression
    - convert {{site.data.name.markdown}} to {{site.data.name.html}}
    - populate layout like Russian dolls
  - create the artifact ({{site.data.name.ie}} folder named `_site`)
- Deploy the artifact and browse the site:
  - In a local environment while coding.
  - In any shared other environment ({{site.data.name.eg}} dev, test, pprod, prod) for testing.


# {{site.data.name.reference}}
- https://jekyllrb.com/docs/liquid/filters/
- https://probot.github.io/community/
- https://probot.github.io/
- https://probot.github.io/

# {{ site.data.name.contributor }}
- Amar

<!-- define var -->
{% assign lTOPIC_NAME    = page.path | split: '/' | slice: 2, 1 | first | downcase | strip %}

# list {{lTOPIC_NAME}} : STopic

yo {{ lTOPIC_NAME }}

{% for lFILE in site[page.collection] %}
{% assign lFILE_DEPTH    = lFILE.path | split: '/' | size | minus: 2 %}
{% assign lSTOPIC_CLASSIFIER   = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip %}
{% assign lTOPIC_EXPECTED = '/' | append: lTOPIC_NAME | append: '/' %}
{% unless lFILE.name == 'index.md' and lFILE_DEPTH == 0  %} 
{% if lFILE.path contains lTOPIC_EXPECTED  %} 

<li>{{lFILE_DEPTH}} -  <a href='/{{ site.baseurl }}/{{ collection.label }}/index.html'>{{lSTOPIC_CLASSIFIER}}</a> - {{ lFILE.title }} - {{lFILE.path}}</li>

{% endif %}
{% endunless %}
{% endfor %}