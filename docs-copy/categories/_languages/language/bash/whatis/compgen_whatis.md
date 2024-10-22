<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Howto]:    ../howto/compgen_howto.md


[Array_Whatis]:    ../../../whatis/array_whatis.md
[Array_Howto]:     ../howto/array_howto.md
[Typeset_Whatis]:  ../../../whatis/array_whatis.md
[Typeset_Howto]:   ../howto/array_howto.md 

# [&larr;][Repo_Readme]Domain > Language > Bash > Whatis > cli > compgen ([Howto][Item_Howto])



# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|array||||[Definition][Array_Whatis], [Howto][Array_Howto]|
|typeset||||[Definition][Typeset_Whatis], [Howto][Typeset_Howto]|
<br>

# Definition
- compgen is the acronym from **comp**letion **gen**eration
- COMREPLY is the acronym from **comp**letion **reply**
- is a wall known bash array
- is ofteh used with the following well known bash objects in completion
  - compgen (cli)
  - complete (cli)# well known var
  - COMP_WORDS (array)
  - COMP_WORD  (integer)
  - COMREPLY (array)
```
${COMP_WORDS[COMP_CWORD]}"   # The current word being completed
${COMP_WORDS[COMP_CWORD-1]}" # The previous word (the command)
```

# COMREPLY
- is the acronym from **comp**letion **reply**
- is a well known bash var
- is a bash array
