<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:  ../list/object_list.md
[item_whatis]:  ../whatis/topix_whatis

# [&larr;][Repo_Readme] Hugo > topix > Howto ([Definition][item_whatis])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# create archetype
## create files and folders
```powershell
mkdir archetypes/domain
mkdir archetypes/domain/whatis
mkdir archetypes/domain/howto
mkdir archetypes/domain/list
mkdir archetypes/domain/topic
touch archetypes/domain/README.md
touch archetypes/domain/whatis/README.md
touch archetypes/domain/howto/README.md
touch archetypes/domain/list/README.md
touch archetypes/domain/topic/README.md
```

## define files content
```md
<!-- file:archetypes/domain/README.md -->
---
date: '{{ .Date }}'
draft: true
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
---


[//]: #(Reference)
[Repo_Readme]:  ../README.md
[item_whatis]:  ./whatis/DomainName_whatis.md

# [&larr;][Repo_Readme]Domain > DomainName

goto [DomainName_whatis][DomainName_whatis]
```

