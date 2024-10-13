---
mx:
  lp:
  ref:
    - howto/tag
    - def/category
---


# definition
- are defined in the front matter
- exists for any content types: `page`, `post`, `collection`

# To know
```yaml
# will be processed as a string
tag: classic hollywood
# will be processed as an array of 2 strings
tags: classic hollywood
```  

# To know
- All tags registered in the current site are exposed to Liquid templates via site.tags.
- Iterating over the var site.tags on a page will yield another array with two items
  - first item is the name of the tag
  - second item is an array of posts with that tag.