<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Item_Whatis]:  ../whatis/theme_whatis.md
[Reference_List]:    ../list/reference_list.md

# [&larr;][Repo_Readme] Hugo > i18n > Howto ([Definition][Item_Whatis])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# Add
## step 
```toml
# config.yaml
languages:
  en:
    languageName: English
    weight: 1
  fr:
    languageName: Français
    weight: 2
  es:
    languageName: Spanish
    weight: 3
```

# Declare
```powershell
lTHEME_NAME="ananke"
lTHEME_NAME="hugo-theme-relearn"
#echo "theme = 'ananke'" >> hugo.toml
echo "theme = ${lTHEME_NAME}" >> hugo.toml
```
