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
# rename several file in place
lOLD_NAME="terminology_list.md"
find . -type f -name ${lOLD_NAME} -print0 | xargs -0 -I {} sh -c 'dir=$(dirname "{}"); mv "{}" "$dir/term_list.md"'
```

# Example
```powershell
# generic
[command-providing-input] | xargs -I % sh -c '[command-1] %; [command-2] %'

# Create folder for each string in file
cat file | xargs -I % sh -c 'echo %; mkdir %'
```

# Example with find
```powershell
# generic
find [location] -name "[search-term]" -type f | xargs [command]

# Example
find . -name "*.ssh*" -type f -print0 | xargs -O rm -f
find . -name "*.ssh*" -type f -print0 | xargs grep 'example'
```

# delete files
```bash
ls xxxx | grep yyyy | xargs -0 rm -f --
```