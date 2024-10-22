---
mx:  
  lp: O
  ref:
    child:
      - howto/pull
      - howto/merge
---

# Generic
```shell
git fetch <options> <remote name> <branch name>
```
# Example
```shell
git fetch myrepo
```
meaning:
- `myrepo` 1 alias to repo:remote define in `.git/config`
- get all changes concerning this remote:repo

This does:
- create or update files in folders :`.git/refs/remotes/myrepo/*`

advantages
- Useful for reviewing changes before merging them.
- Allows to see what has changed on the repo:remote before integrating them into repo:local.

# Example
```shell
git fetch --all
```
meaning:
- `--all` all the remote repo
- get all changes concerning these remote:repo

This does:
- create or update files in folders:`.git/refs/remotes/*/*`

# Use case
```shell
git fetch --prune myrepo 
```
meaning:
- `myrepo` 1 alias to repo:remote define in `.git/config`
- get all changes concerning this remote:repo
- delete repo:local:branches that have been deleted from this remote:repo


# Example
```shell
git fetch myrepo master
```
meaning:
- `myrepo` 1 alias to repo:remote define in `.git/config`
- `master` 1 repo:remote:branch
- get changes concerning only this repo:remote:branch

# Use case
```shell
git fetch myrepo master:tmp-branch
```
meaning:
- `myrepo` 1 alias to repo:remote define in `.git/config`
- `master` 1 repo:remote:branch
- `tmp-branch` 1 repo:local:branch
- get changes concerning only this repo:remote:branch
- create repo:local:branch:`tmp-branch`
- integrate the changes into the new created repo:local:branch

