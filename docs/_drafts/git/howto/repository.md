---
draft : true
mx:  
---

# Create a local repo
```shell
lFOLDER_REPO_LOCAL='/tmp/myrepo'
git init "${lFOLDER_REPO_LOCAL}"
```
This action create the folder: `${lFOLDER_REPO_LOCAL}/.git`

# List repo@remote of 1 repo@local
```bash
# cd repo@local
git remote -v # read file@local:.git/config
```


# Update repository:name
- update repository@remote:name
- update in repository@local:name of repo@remote

# update repo@remote:name
```bash
## in gitlab.com
## in github.com
## in repo@(remote, custom)
```
# update in repository@local:name of repo@remote
1. cd repo@*git*
1. cd folder:*.git*
1. update file:config > section:[remote "origin"]
    - update value of key:*url*
 
# Push to 1..N repo@remote
## 

# Synchronize Repo

# Todo
```powershell
git remote add origin https://gitlab.com/glabtit/ansible.git

```
