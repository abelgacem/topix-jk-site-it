---
mx:
  ref:
    - dsl/var/content
---



# define a layout for content type
```yaml
# Applies to all content types (ie. page, post, collection) 
defaults:
  -
    scope:
      path: "" # Applies to all files
    values:
      layout: "project"
```

```yaml
# apply only to content type "page"
  -
    scope:
      path: "" # Applies to all files
      type: "pages"
    values:
      layout: "project"
```

```yaml
# apply only to content type "page"
defaults:
  -
    scope:
      path: ""
      type: "pages"
    values:
      layout: "my-site"
  -
    scope:
      path: "projects"
      type: "pages" # previously `page` in Jekyll 2.2.
    values:
      layout: "project" # overrides previous default layout
      author: "Mr. Hyde"
```
