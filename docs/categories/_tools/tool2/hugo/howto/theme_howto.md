<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[Item_Whatis]:  ../whatis/theme_whatis.md
[Reference_List]:    ../list/reference_list.md

# [&larr;][Repo_Readme] Hugo > Theme > Howto ([Definition][Item_Whatis])
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# Define var
```toml
lTHEME_NAME="ananke"
lTHEME_GIT="https://github.com/theNewDynamic/gohugo-theme-ananke.git"
lTHEME_VERSION="2.9.1"

lTHEME_NAME="hugo-theme-relearn"
lTHEME_GIT="https://github.com/McShelby/hugo-theme-relearn.git"
lTHEME_VERSION="5.32.2"

lTHEME_NAME="ga-hugo-theme"
lTHEME_GIT="https://github.com/giraffeacademy/ga-hugo-theme.git"
lTHEME_VERSION="master"

lTHEME_RELPATH="themes/${lTHEME_NAME}"
```

# Add
```powershell
# make this folder a git repo - if needded
git init
# git submodule add ${lTHEME_GIT} themes/${lTHEME_NAME}
git submodule add -b ${lTHEME_VERSION} ${lTHEME_GIT} ${lTHEME_RELPATH}
git submodule init
git submodule update
# update config file
## method
echo "theme = ${lTHEME_NAME}" >> hugo.toml
## method
sed -i "/^theme = \${lTHEME_NAME}/!s/^theme.*/theme = \${lTHEME_NAME}\n&/" hugo.toml
```

# Delete
- delete a theme consist of delting a git module
```powershell
# delete entry from file:.git/config
git submodule deinit -f ${lTHEME_RELPATH}
# delete module from file:.git/module/
rm -rf .git/modules/${lTHEME_RELPATH}
# delete entry from .gitmodules and ${lTHEME_RELPATH}
git rm -rf ${lTHEME_RELPATH}
# delete entry config file
sed -i '/^theme/d' hugo.toml

```
# Create