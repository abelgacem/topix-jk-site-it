---
mx:  
---



# List all branches
```bash
## on repo@remote
git branch -r

## on repo@local
git branch

## on repo@(local, remote)
git branch -a
```

# Display all branches:infos
```bash
# get commit@latest on all branch
git branch -v
```

## List all branches:unmerged
```bash
# 
git branch --no-merged main
```



# rename
```shell
# rename branch:current
lNAME_BRANCH_NEW='main'
git branch -m "${lNAME_BRANCH_NEW}"

# rename another branch
lNAME_BRANCH_OLD='master'
lNAME_BRANCH_NEW='main'
git branch -m "${lNAME_BRANCH_OLD}" "${lNAME_BRANCH_NEW}"
```

# switch branch
```shell
lBRANCH_NAME='develop'
git checkout "${lBRANCH_NAME}"
```

# create local:branch
```shell
# create branch and not switch to it
git branch ${BRANCH_NAME}
# create branch and switch on it
git branch ${BRANCH_NAME} main
```

# create remote:branch
```shell
lALIAS_REPO='pubrepo'
lBRANCH_NAME='test'
# from local:branch
git push --set-upstream "${lALIAS_REPO}" "${lBRANCH_NAME}"
git push --set-upstream pubrepo test
```



# Get on repo@local all reference of branch in repo@remote
```bash
git pull --all
```

# delete remote:branch
```shell
lALIAS_REMOTE='origin'
lNAME_BRANCH='old-branch-name'
git push "${lALIAS_REMOTE}" --delete "${lNAME_BRANCH}"
```

# delete branch@local that not exists in git@remote
```
git remote prune origin
```

# Delete branch@local 
```bash
# delete branch@local
git branch -d ${BRANCH_NAME}
# delete branch@local that not exists on repo@remote
git remote prune origin
# force delete a branch@local
git branch -D ${BRANCH_NAME}
```


# Synchronize branch@local with branch@remote
```bash
# delete branch@local
git branch -D ${lLOCAL_BRANCH_NAME}

# remove branch@local (display) that is not in remote
git fetch --prune
``` 

# Delete branch
```bash
# list repo@remote:all
git remote -v
# define var
## On which repo@remote should branch be de
lREMOTE_REPO_NAME="origin"

# list all branch
lREMOTE_BRANCH_NAME="develop_terminology"
lLOCAL_BRANCH_NAME="${lREMOTE_BRANCH_NAME}"
git branch -a

# delete branch@remote BEFORE branch@local
git push ${lREMOTE_REPO_NAME} --delete ${lREMOTE_BRANCH_NAME}

# delete branch local
git branch -D ${lLOCAL_BRANCH_NAME}
```

# TODO

```powershell
git branch -M main
git push -uf origin main

```


## Good Cmd
```powershell

# branch:local:develop track branch:remote:develop from 'origin'.
git checkout develop => lots of default cf. above
# get in local branch that exists in remote and not in local and be on that branch in local
git checkout develop
```
## Get 1 branch
```bash
# list branch@remote
git fetch
git branch -r
  origin/HEAD -> origin/main
  origin/develop_git
  origin/develop_gitlab
  origin/main

# list branch@local
git branch
* main

# list branch@all (remote and local)
git fetch
git branch -a
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/develop_git
  remotes/origin/develop_gitlab
  remotes/origin/main
  remotes/origin/mit1/return_stream/test/sit
  remotes/origin/pilco/sit
  remotes/origin/prod
  remotes/origin/referentiel/sit
  remotes/origin/sit
  remotes/origin/sit-assurance-ccf
  remotes/origin/test_1
  remotes/origin/test_2
  remotes/origin/uat
# get branch@remote on local
git checkout  origin/develop_gitlab
git checkout  origin/mit1/return_stream/test/sit

# define current working branch
git checkout  origin/develop_gitlab

```
