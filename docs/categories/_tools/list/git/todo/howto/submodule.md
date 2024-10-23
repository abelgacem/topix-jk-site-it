---
mx:  
---

# list
```powershell
git config --list|egrep ^submodule
cat .gitmodules
```


# Add a submodule
```powershell
# Clone it in the GIT parent repo
## This action  add an entry to the repo@(git, parent):confile:.git/config
## if there is no folder:`.git`. it fails

### use case
l_SRC="https://gitlab.com/glabtit/project/prj-python/rstdlib.git"
l_DST="./toto"

### use case
l_SRC="https://gitlab.com/glabtit/project/prj-hugo/theme/mxtheme01.git "
l_DST="themes/mxthemeperso"

## CLI
git submodule add ${l_SRC}   ${l_DST}
```
# Delete a submodule


# init and update submodule
```powershell
git submodule update --init --recursive
```

# delete
## example
```powershell
# delete entry from file:.gitmodules 
# stage and commit only file file:.gitmodules 
# delete entry from file:.git/config
# Run (no trailing slash)
git rm --cached ${path_to_submodule}
# delete module from folder:.git/modules/
rm -rf .git/modules/${path_to_submodule}
# commit changes
# delete module from project
rm -rf path_to_submodule
```
## example
```powershell
# delete entry from file:.git/config
git submodule deinit -f $submodule_path
# delete module from folder:.git/modules/
rm -rf .git/modules/${path_to_submodule}
```
