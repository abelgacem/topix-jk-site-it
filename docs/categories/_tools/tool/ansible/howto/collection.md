---
draft : true
mx:  
  lp: O
  ref:
    child:
      - definition/collection
---

# List
```powershell
# List collaction@installed & display path
ansible-galaxy collection list
ansible-galaxy collection list -vv
ansible-galaxy collection list -vvv
```
# Create

```powershell
# define var
lCOL_FOLDER_ROOT="ansible"
lCOL_NAMESPACES_ROOT="mx"
lCOL_PATH="${lCOL_FOLDER_ROOT}/${lCOL_NAMESPACES_ROOT}"
lCOL_NAME="ops"
lCOL_NAME="docker"
# create skeleton
mkdir -p ${lCOL_PATH}
cd    ~/data/git/abtit/library/ans
ansible-galaxy collection init ${lCOL_NAME}
# updte file:galaxy.yml 
```

# Install 
```bash
# install inventory@folder to location@default
ansible-galaxy collection install ${lCOL_PATH}
# re-install or update
ansible-galaxy collection install ${lCOL_PATH} --force
# install inventory@folder to location@custom
ansible-galaxy collection install ${lCOL_PATH} -p ./collections
# install inventory@tgz to location@custom
ansible-galaxy collection install my_namespace-my_collection-1.0.0.tar.gz -p ./collections
```
