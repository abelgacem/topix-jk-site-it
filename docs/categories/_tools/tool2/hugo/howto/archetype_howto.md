<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:  ../list/object_list.md
[Item_Whatis]:  ../whatis/archetype_whatis.md

[content_howto]:  ../howto/content_howto.md

# [&larr;][Repo_Readme] Hugo > archetype > Howto ([Definition][item_whatis])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|content|||||[howto][content_howto]
<br>


# use an explicit archetype to create new content
```shell
## Usecase - the archetype is define at creation step
```
# use a default archetype to create new content
```shell
## Usecase - archetype is choosen by default
## Usecase - archetype is choosen by the location, name of the new content

```

# create an `archetype`
- create files/folders in folder:`archetypes`
```powershell
mkdir archetypes/domain
mkdir archetypes/domain/whatis
mkdir archetypes/domain/howto
mkdir archetypes/domain/list
touch archetypes/domain/README.md
touch archetypes/domain/whatis/domain_whatis.md
touch archetypes/domain/howto/domain_howto.md
touch archetypes/domain/list/term_list.md
```



# create files from existing archetype
- create tree in **folder:content**
# define var
```powershel
lFOLDER_NAME="doc-math"
lFILE_NAME="README.md"
lFILE_PATH="$lFOLDER_NAME/$lFILE_NAME"
```

# create content
```shell
# generic
## create files in sdef folder:content - create intermediate directory if not exists
hugo new content xxx
# shortcuts .. do not use it. it is confusing unless you do it 100 timles a day
hugo new xxx
```

```powershell
# create file     : README.md
# in folder SDEF  : content
# from archetype  : 
hugo new content README.md

# use    template : 
# create file     : README.md
# in folder SDEF  : content/toto/titi/tata
## create subfoders if not exists
## do not create file if already exists
hugo new content toto/titi/tata/README.md

# use    template : template:default TO
# create file     : content/default_name
hugo new content

# use    template : template:archetypes/default TO
# create file     : content/posts/my-first-post.md
hugo new content posts/my-first-post.md

# use    template : template:default TO
# create file     : content/${lFILE_PATH}
hugo new content ${lFILE_PATH}


# use    template    : template/domain TO
# create folder tree : content/domain/doc-math/
hugo new domain/domain-math
hugo new domain/domain-manguage
```








# Toknow
- folder allow to create folder tree
