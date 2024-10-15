---
draft : true
mx:  
  lp: O
  ref:
    child:
      - howto/pull
      - howto/merge
---


# Create a reference to remote repo
```shell
# define var
lURL_REPO_REMOTE_PRIV='https://gitlab.com/glabtit/project/prj-bash/ibshell.git'
lALIAS_REPO_REMOTE='privrepo'

# action
$ git remote add "${lALIAS_REPO_REMOTE}" "${lURL_REPO_REMOTE_PRIV}"
```
This implies:
- `${lURL_REPO_REMOTE_PRIV}` is an existing remote repository 
- `${lALIAS_REPO_REMOTE}`   will be the alias of the remote repo in the current local repo

This says:
- add this alias to the file `.git/config`
- add the git object: `.git/refs/remote/${lALIAS_REPO_REMOTE}`

Check with `git remote -v`:
```
$ git remote -v
privrepo	https://gitlab.com/glabtit/project/prj-bash/ibshell.git (fetch)
privrepo	https://gitlab.com/glabtit/project/prj-bash/ibshell.git (push)
```
This says:
- when you do a fetch from the  repo@local, it will **fetch changes** from privrepo
- when you do a push  from this repo@local, it will **push  changes** into privrepo


# delte reference to remote repository

- delete remote reference aliased as `origin`
```shell
lREPO_ALIAS='origin'
$ git remote remove origin
# check action
$ git remote -v
```

# create an additional Url@push
```shell
lURL_REPO_REMOTE_PUB='https://gitlab.com/glabtit/public/pubtest.git'
lREPO_ALIAS='privrepo'
git remote set-url --add --push ${lREPO_ALIAS} ${lURL_REPO_REMOTE_PUB}
```
This implies:
- `${lURL_REPO_REMOTE_PUB}` is an existing remote repository 
- `${lALIAS_REPO}`          will be the alias of the remote repo in the current local repo

This says:
- add this alias to the file `.git/config`
- when you do a push  from this repo@local, it will **push  changes** into privrepo

