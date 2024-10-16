---
layout: topic
mx:  
  lp: 0
  ref:
    root:
      - concept/container/definition/container
      - concept/container/definition/image
---

# Definition
- 1 CLI
- manages images and containers

# Worko

<!-- define var -->
{% assign lTOPIC_NAME    = page.path | split: '/' | slice: 2, 1 | first | downcase | strip %}

{% for lFILE in site[page.collection] %}
  {% assign lFILE_XXXXX  = lFILE.path | split: '/' | slice: 1   %}
  {% assign lFILE_DEPTH  = lFILE.path | split: '/' | size | minus: 2 %}
  {% unless lFILE_DEPTH == 0 %}
    {{ lFILE_DEPTH }} - {{ lFILE.path }} - {{lFILE_XXXXX}}
  {% endunless %}
{% endfor %}
