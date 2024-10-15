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
category: classic hollywood
# will be processed as an array of 2 strings
categories: classic hollywood
```  

# To know
- All categories registered in the current site are exposed to Liquid templates via `site.categories`.
- categories are visible in the URL.
  
  # Rules
- Tags for a post are defined in the post’s front matter using either the key tag for a single entry or tags for multiple entries.

# 