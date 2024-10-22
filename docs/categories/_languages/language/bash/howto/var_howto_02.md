<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../../../whatis/variable_whatis.md

[Array_Whatis]:    ../../../whatis/array_whatis.md
[Array_Howto]:     ../howto/array_howto.md

[String_Whatis]:    ../../../whatis/string_whatis.md
[String_Howto]:     ../howto/string_howto.md

# [&larr;][Repo_Readme]Domain > Language > Bash > Howto > Var ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|array||||[Definition][Array_Whatis], [Howto][Array_Howto]|
|string||||[Definition][String_Whatis], [Howto][String_Howto]|
<br>

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Substitution|See|[Definition][Substitution_Whatis]|
<br>



# Example
```powershell
# delete each occurence of 1 substr
lSUB_STR="toto"
result=${MyVar/${lSUB_STR}/}

# delete shortest of mxi/dev/aws:ubuntu
lIMAGE_SRC_REGISTRY="${lIMAGE_SRC_PATH#*/}"  # output > dev/aws:ubuntu
# delete shortest of mxi/dev/aws:ubuntu
lIMAGE_SRC_REGISTRY="${lIMAGE_SRC_PATH##*/}" # output > aws:ubuntu
```
# tr
```bash
# remove 
tr -d " \'\t\n\r"
# remove several by 1
tr -s "\n"
```

# Todo
```bash
${varName?Error varName is not defined}
${varName:?Error varName is not defined or is empty}
${1:?"mkjail: Missing operand"}
MESSAGE="Usage: mkjail.sh domainname IPv4" # define error message
_domain=${2?"Error: ${MESSAGE}"}           # you can use $MESSAGE too
${varName?Error varName is not defined}
_domain="${1:?Usage: mknginxconf domainName}"
${parameter:-defaultValue}
${var:=value}
${var%pattern}
${var%%pattern}
${varName/Pattern/Replacement}
${varName/word1/word2}
${os/Unix/Linux}
${parameter:offset}
${parameter:offset:length}
${variable:position}
var=${string:position}
VECH="Bus"
VECH1="Car"
VECH2="Train"
echo "${!VECH*}"
```
# List of references
- https://www.cyberciti.biz/tips/bash-shell-parameter-substitution-2.html