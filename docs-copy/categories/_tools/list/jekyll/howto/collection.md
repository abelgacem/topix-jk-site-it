---
mx:
  ref:
    - dsl/var/content
---



# define
```yaml
# in _config.yml
collections:
  my_collection:
    output: true
    permalink: /:collection/:name
```

```yaml
# in _config.yml
collections:
  - staff_members
```

```yaml
# in _config.yml
collections:
  - staff_members
```

# Loop collections
```html
{% for staff_member in site.staff_members %}
  <h2>{{ staff_member.name }} - {{ staff_member.position }}</h2>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %}
```

```html
{% for staff_member in site.staff_members %}
  <h2>
    <a href="{{ staff_member.url }}">
      {{ staff_member.name }} - {{ staff_member.position }}
    </a>
  </h2>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %}
```
