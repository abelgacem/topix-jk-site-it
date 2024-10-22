<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md

[introspection_whatis]: .

# [&larr;][Repo_Readme]Domain > Language > Bash > Howto > introspection

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
introspection|||[Whatis][introspection_whatis]
<br>

# List
```powershell
lTHIS_FOLDER="$(dirname ${BASH_SOURCE[0]})"
lTHIS_FILE="$(basename ${BASH_SOURCE[0]})"
lTHIS_NAME="${FUNCNAME[0]}"
```

