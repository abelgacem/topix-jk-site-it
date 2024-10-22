<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md

[Array_Whatis]:   ../../../whatis/array_whatis.md
[Var_Whatis]:     ../../../whatis/variable_whatis.md
[Var_Howto]:      ../howto/var_howto.md
[String_Whatis]:  ../../../whatis/string_whatis.md
[String_Howto]:   ../howto/string_howto.md
[Compgen_Whatis]: ../whatis/compgen_whatis.md
[Var_Substitution_Whatis]: ../whatis/var_substitution_whatis.md
[Var_Substitution_Howto]:  ../howto/var_substitution_howto.md

# [&larr;][Repo_Readme]Domain > Language > Bash > Howto > Array

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|array||||[Definition][Array_Whatis]&uarr;,|
|variable||||[Definition][Var_Whatis]&uarr;, [Howto][Var_Howto]|
|variable|substitution|||[Definition][Var_Substitution_Whatis], [Howto][Var_Substitution_Whatis]|
|string||||[Definition][String_Whatis]&uarr;, [Howto][String_Howto]|
|compgen||||[Definition][Compgen_Whatis]|
<br>

# Define empty array
```bash
COMPREPLY=()
lLIST_STRING=()
```

# Define array
```bash
lTEMP01="me"
lTEMP02="split $lTEMP01"
lLIST_STRING=("apple" "'banana $lTEMP02'" "banga" "orange" "grape" "cherry" "avocado")
```
# list elements
##  as sequence of strings
```bash
echo ${lLIST_STRING[*]}
```
##  one per line
```bash
## whitout quote for elements with space and/or var
compgen -W "${lLIST_STRING[*]}"
```

## some element
```bash
lSTARTING_WITH="a"
## whitout quote for elements with space and/or var
compgen -W "${lLIST_STRING[*]}" ${lSTARTING_WITH}
# todo
### compgen -W "${lLIST_STRING[*]}" -X ...
```


# Nb of elements
```bash
echo ${#lLIST_STRING[@]}
```

# add 1 element
## at the end
```bash
#   - check the number of elements is incremented by 1 (depend on OS)
lLIST_STRING+=("'grenade $lTEMP02'")
```
## in a position@sdef
```bash
# Todo
```

# remove elements
## by its key
```bash
# define var
lELEMENT_KEY="2"

# remove element - check the number of elements is decremented by 1 (depend on OS)
unset lLIST_STRING[lELEMENT_KEY]
```

## by element's value
```bash
# define var
lELEMENT_VALUE="avocado"
lELEMENT_VALUE="banga"

# remove element - after removing that way: a "whole" called gaps exists
lLIST_STRING=( "${lLIST_STRING[@]/${lELEMENT_VALUE}}" )

lLIST_STRING=("${lLIST_STRING[@]}")
lLIST_STRING=($(printf '%s\n' "${lLIST_STRING[@]}" | awk NF))
eval lARRAY=($(compgen -W "${lLIST_STRING[*]}"))
read -a lARRAY <<< $(compgen -W "${lLIST_STRING[*]}")
eval "lARRAY=($my_string)"



```
# list index and elements
```bash
for idx in "${!lLIST_STRING[@]}"; do echo $idx;echo ${lLIST_STRING[$idx]}; done
for idx in "${!lARRAY[@]}"; do echo $idx;echo ${lARRAY[$idx]}; done
```
