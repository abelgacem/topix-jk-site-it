<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/compgen_whatis.md


[Array_Whatis]:  ../../../whatis/array_whatis.md
[Array_Howto]:   ../howto/array_howto.md  

# [&larr;][Repo_Readme]Domain > Language > Bash > Howto > cli > compgen ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|array||||[Definition][Array_Whatis], [Howto][Array_Howto]|
<br>

# Generate list

## method 
```bash
# define var@string
s="split"
lLIST_STRING="apple 'banana $s' banga orange grape cherry avocado"

# display strings (1 per line) in $lLIST_STRING starting with $lChar
compgen -W "$lLIST_STRING" $lChar

# example
compgen -W "$lLIST_STRING" a
compgen -W "$lLIST_STRING" b
compgen -W "$lLIST_STRING" b
```


# Use compgen to generate a list of strings starting with "a"
compgen -W "$my_string" -X "!$substring*"







## method 
```bash
# define var@array
a="me"
s="split $a"
lLIST_STRING=("apple" "'banana $s'" "banga" "orange" "grape" "cherry" "avocado")
# display the list of word in $lLIST_STRING that start with $WORD_START_WITH
compgen -W ${lLIST_STRING[*]} $WORD_START_WITH
# example
compgen -W "${lLIST_STRING[@]}" a
compgen -W "$lLIST_STRING" b
compgen -W "$lLIST_STRING" b
```

# Other
```bash
# list shell built-in
compgen -c
# list alias
compgen -a
# list var
compgen -v
# list var stating with prefix "g"
compgen -v g
# list shell function - cf. typeset -F
compgen -k
# list signals
compgen -s
```

# Todo
```bash
# cli complete
# COMPREPLY=()
# COMPREPLY=($(compgen -W "${options[*]}" -- "$cur_word"))
# complete -F _mycommand_completion mycommand
```

# well known var
```
${COMP_WORDS[COMP_CWORD]}"   # The current word being completed
${COMP_WORDS[COMP_CWORD-1]}" # The previous word (the command)
```

# COMREPLY
- is a well known bash var
- is one list of string
- is used by 



# Generate list
## method 
```bash
# define var
lLIST_STRING="apple banana cherry avocado"
# display the list of word in $lLIST_STRING that start with $WORD_START_WITH
compgen -W $lLIST_STRING $WORD_START_WITH
# example
compgen -W $lLIST_STRING a
compgen -W $lLIST_STRING b
compgen -W $lLIST_STRING b
```
## method 
```bash
# define var
lLIST_STRING=("apple banana cherry avocado")
# display the list of word in $lLIST_STRING that start with $WORD_START_WITH
compgen -W ${lLIST_STRING[*]} $WORD_START_WITH
# example
compgen -W $lLIST_STRING a
compgen -W $lLIST_STRING b
compgen -W $lLIST_STRING b
```

# Other
```bash
# list shell built-in
compgen -c
# list alias
compgen -a
# list var
compgen -v
# list var stating with prefix "g"
compgen -v g
# list shell function - cf. typeset -F
compgen -k
# list signals
compgen -s
```

# Todo
```bash
# cli complete
# COMPREPLY=()
# COMPREPLY=($(compgen -W "${options[*]}" -- "$cur_word"))
# complete -F _mycommand_completion mycommand
```