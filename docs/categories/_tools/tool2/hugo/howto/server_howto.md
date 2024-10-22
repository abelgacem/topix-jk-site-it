<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:  ../list/object_list.md
[Item_Whatis]:  ../whatis/server_whatis.md

# [&larr;][Repo_Readme] Hugo > Server > Howto ([Definition][Item_Whatis])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# build site and start server
```powershell
# define var
lPORT_CONT=1313
```

```powershell
# listen request coming from client on the vm where server is running
hugo server

# listen request coming from client:outside the vm where server is running
hugo server --bind 0.0.0.0 -p ${lPORT_CONT}

# content@draft is visible
hugo server -D --bind 0.0.0.0 -p ${lPORT_CONT}

```




