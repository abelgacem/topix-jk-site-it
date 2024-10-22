---
---




## share kvpair across pages
define a same kvpair for several pages
```yaml
# in _config.yml
defaults:
  - 
    scope:
      path: "dir1"
    values:
      layout: "post"  
````

## use kvpair in a page
```yaml
---
...
title: my_page_name
...
---
... {{ page.title }}

```


## permalink
```yaml
permalink: /:category/:month/:day/:title
```

```yaml
permalink: /about
```

# To know
