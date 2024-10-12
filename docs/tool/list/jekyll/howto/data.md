---
---



# Todo
```
---
filter: title
---

{% assign myData = site.data.configs.items | where_exp: 'item', 'item.title == page.filter' %}

{% for data in myData %}
  your code...
{% endfor %}
```

# Todo
```
---
filter: configs
---

{% assign myData = site.data[page.parent].items %}

{% for data in myData %}
  your code...
{% endfor %}```