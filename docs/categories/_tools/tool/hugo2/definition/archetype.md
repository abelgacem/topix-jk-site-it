---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:       2
---

# Definition
- a file, folder or folder tree located in folder:`archetypes` 
- allows (only) to create files, folders or folder trees in folder:`content`
- used by cli: 
  - **hugo new content       $\cdots$**
  - **hugo new \<archetype\> $\cdots$**

# Toknow
- files and folders in folder:`archetypes` 
  - only allows to create files and folder tree in folder:`content`

# Lookup oder
when creating content from archetype in folder:`content`, hugo as a lookup algo, that is the following

```shell
# example
hugo new content posts/my-first-post.md
```

hugo lookup algo is:
1. `archetypes/posts.md`
1. `archetypes/default.md`
1. `themes/my-theme/archetypes/posts.md`
1. `themes/my-theme/archetypes/default.md`
1. sdef in binary (ie. `frontmatter`= `title`, `date`, `draft`)