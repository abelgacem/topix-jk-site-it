<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md

[Var_Whatis]:       ../../../whatis/variable_whatis.md
[Array_Whatis]:    ../../../whatis/array_whatis.md
[Array_Howto]:     ../howto/array_howto.md

[Var_Substitution_Whatis]: ..//whatis/var_substitution_whatis.md
[Var_Substitution_Howto]:  ../howto/var_substitution_howto.md

[String_Whatis]:    ../../../whatis/string_whatis.md
[String_Howto]:     ../howto/string_howto.md

# [&larr;][Repo_Readme]Domain > Language > Bash > Howto > Var

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|var||||[Definition][Var_Whatis]&uarr;|
|var substitution||||[Howto][Var_Substitution_Howto]|
|string||||[Howto][String_Howto]|
|array||||[Howto][Array_Howto]|
<br>

# define var
```bash
## var@string local to a method
local a="me"
local s="split $a"
local lVARNAME="varcontent"
local lLIST_STRING="apple 'banana $s' banga orange grape cherry avocado"

## var@string local to a method
```bash
local a="me"
local s="split $a"
local lLIST_STRING=("apple" "'banana $s'" "banga" "orange" "grape" "cherry" "avocado")

## associative array var - Todo

```

# export var
```bash
# define var
local lVAR="var content"

# export
export lVAR_01
export lVAR_02="var content"

```


# Nb of elements
```powershell
# in a string
${#lSTRING}

# in an array
${#lARRAY[@]}
```
# Substring 
```powershell
# get
${lSTRING:$Pos:$Length}

# remove shortest
${lSTRING#Substring}

# remove longest
${lSTRING##Substring}

# remove shortest
${lSTRING%Substring}

# remove longest
${lSTRING%%Substring}
```

# Replace
```powershell
# first occurence
${lSTRING/Substring/Replacement}

# all occurence
${lSTRING//Substring/Replacement}

# 
${lSTRING/#Substring/Replacement}

# 
${lSTRING/%Substring/Replacement}
```



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












# Var substitution with strings
```bash
Todo
```


# Var substitution with arrays
```bash
Todo
```

# Var substitution with associative array
```bash
Todo
```






