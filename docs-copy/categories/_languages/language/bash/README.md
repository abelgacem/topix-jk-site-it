<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../../list/language_list.md

[Term_List]:     ./list/term_list.md
[Object_List]:   ./list/object_list.md

# [&larr;][Repo_Readme]Domain > Language > Bash

# List of topics
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|object||1|pre|[List][Object_List]|
|terminology||||[List][Term_List]|
<br>


# Definition
```
find . -type f | xargs -I{} sh -c 'echo put $1 $1' -- {}

find . -type f | xargs dirname | xargs -I{} sh -c 'echo mkdir $1' -- {}
```

