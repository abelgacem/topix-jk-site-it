---
mx:
  lp:
  ref:
    - whatis/tag
---



# List posts with an excerpt
```html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>
```