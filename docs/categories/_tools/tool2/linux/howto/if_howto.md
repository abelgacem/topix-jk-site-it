# [&larr;][Repo_Readme] Linux > Howto > If

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Xargs_Whatis]:   ../whatis/xargs_whatis.md

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Xargs|See|[Definition][Xargs_Whatis]|
<br>



# Inline
```powershell
# exit with error
if [ "golden" == "${lFOLDER_NAME}" ]; then { echo "Mx > Todo > Update > golden"; exit 1; }; fi
```

# Shortcut
```powershell
# exit with no error
[ "golden" == "${lFOLDER_NAME}" ] && { echo "Mx > Todo > Update > golden"; exit; }
```