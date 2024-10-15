---
layout: topic
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

# list all {{name.data.topy.section}} of a {{name.data.topy.category}}

# list {{lTOPIC_NAME}} : STopic - V01


<!-- define var -->
{% assign lLIST_SECTION = "toto titi tata" | split: ", " %}
{{ lLIST_SECTION }}


# list {{lTOPIC_NAME}} : STopic - V02

<div class="container my-4">
  <!-- Navigation Tabs -->
  <ul class="nav nav-tabs" id="myTab" role="tablist">
    {% for SECTION in lLIST_SECTION %}
    <li class="nav-item" role="presentation">
        <button class="nav-link {% if forloop.first %}active{% endif %}" id="{{ SECTION }}-tab" data-bs-toggle="tab" data-bs-target="#{{ SECTION }}" type="button" role="tab" aria-controls="{{ SECTION }}" aria-selected="true">
        {{ SECTION | capitalize }}
        </button>
      </li>
    {% endfor %}
  </ul>

  <!-- Tab Content -->
  <div class="tab-content" id="myTabContent">
    {% for section in lLIST_SECTION %}
      <div class="tab-pane fade {% if forloop.first %}show active{% endif %}" id="{{ section }}" role="tabpanel" aria-labelledby="{{ section }}-tab">
        <div class="list-group mt-3">
          {% for lFILE in site[page.collection] %}
            {% assign lSTOPIC_CLASSIFIER = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip %}
            {% if lSTOPIC_CLASSIFIER == section %}
              <a href="{{ lFILE.url }}" class="list-group-item list-group-item-action">
                <h5 class="mb-1">{{ lFILE.title }}</h5>
                <p class="mb-1">{{ page.mx.description }}</p>
                <small>Path: {{ lFILE.path }}</small>
              </a>
            {% endif %}
          {% endfor %}
        </div>
      </div>
    {% endfor %}
  </div>
</div>

# list {{lTOPIC_NAME}} : STopic - V03

<div class="container my-4">
  <div class="accordion" id="sectionAccordion">
    
    {% for section in lLIST_SECTION %}
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading-{{ section }}">
          <button class="accordion-button {% unless forloop.first %}collapsed{% endunless %}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-{{ section }}" aria-expanded="true" aria-controls="collapse-{{ section }}">
            {{ section | capitalize }}
          </button>
        </h2>
        <div id="collapse-{{ section }}" class="accordion-collapse collapse {% if forloop.first %}show{% endif %}" aria-labelledby="heading-{{ section }}" data-bs-parent="#sectionAccordion">
          <div class="accordion-body">
            <ul class="list-unstyled">
              {% for lFILE in site[page.collection] %}
                {% assign lSTOPIC_CLASSIFIER = lFILE.path | split: '/' | slice: 3, 1 | first | downcase | strip %}
                {% if lSTOPIC_CLASSIFIER == section %}
                  <li>
                    <a href="{{ lFILE.url }}" class="text-primary">{{ lFILE.title }}</a> - {{ page.mx.description }} <br>
                    <small>Path: {{ lFILE.path }}</small>
                  </li>
                {% endif %}
              {% endfor %}
            </ul>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</div>


