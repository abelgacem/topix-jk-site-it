<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/var_substitution_whatis.md

[array_Howto]:   ../howto/array_howto.md

# [&larr;][Repo_Readme]Domain > Language > Bash > Howto > Var Substitution ([Definition][Item_Whatis])


# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|array||||[Howto][array_Howto]|
<br>

# todo
```bash
  ## from code
  local lFOLDER_CURRENT="$(pwd)"
  local lTHIS_METHOD_FOLDER_PATH=$(dirname ${BASH_SOURCE[0]})
  local lTHIS_METHOD_NAME="${FUNCNAME[0]}"
  local lTHIS_METHOD_FILE_PARENT=$(basename ${BASH_SOURCE[0]})
  local lTHIS_METHOD_FOLDER_NAME=${lTHIS_METHOD_FOLDER_PATH##*/}
```

```bash
image="alpine:3.18"
tag=${image##*:}   # 3.18
name=${image%%:*} # alpine
```
