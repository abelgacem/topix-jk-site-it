<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]: ../list/object_list.md
[item_howto]:  ../howto/archetype_howto.md

[site_whatis]:      ../whatis/site_whatis
[content_whatis]:   ../whatis/content_whatis

# [&larr;][Repo_Readme] Hugo > archetype > Whatis ([Howto][item_howto])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|page|
|content|||[definition][content_whatis]
<br>

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