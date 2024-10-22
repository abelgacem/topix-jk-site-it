<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/cli_list.md
[CliAD_Whatis]: ../whatis/cli_ansd_whatis.md

# [&larr;][Repo_Readme] Jq > Howto > Cli > Jq

# Display List of Method.Sdef

```bash
jq -nr 'builtins[]'
```
# List of options

|Option|Desc|
|--|--| 
|-r  | Remove quote from String when output is only seq of String
|-n  | Generate Data.Json
|-s  |-|
|-c  | Color
|-r  | 
| -S | Sort
| -f | File as List.Instruction
| --arg | Define Var
| --slurpfile | Define Var
| --rawfile | Define Var

# todo
     while read line; do
     echo $line
     done < <(jq -r ".widget.text|to_entries|map(\"\(.key)=\(.value)\")|.[]" < "example.json")
