<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/xargs_whatis.md

# [&larr;][Repo_Readme]Domain > Language > Bash > Howto > Xargs ([Definition][Item_Whatis])

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Xargs|See|[Definition][Xargs_Whatis]|
<br>



# Example
```powershell
lTHIS_FOLDER="$(dirname ${BASH_SOURCE[0]})"
lTHIS_FILE="$(basename ${BASH_SOURCE[0]})"
lTHIS_NAME="${FUNCNAME[0]}"
```



# tricks
```bash
    lMETHOD_NAME_POSSIBLE=$(IFS=_; echo "${parts[*]:0:i}")
    lLIST_ARG_POSSIBLE=${parts[@]:i:length-i}  
    lMETHOD_FOUND=$(typeset -F  |  grep -w "${lMETHOD_NAME_POSSIBLE}" | grep -o "${lMETHOD_NAME_POSSIBLE}")
```bash
