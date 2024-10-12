---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: O
  ref:
    child:
      - howto/git
---

# Definition
- Push (upload) repo:local:changes to a repo:remote

# Use case
```shell
git push --all myr
```
This implies:
- `myr` is the alias to a repo:remote (cf. .git/config)
- `--all` denotes/indicates all repo:local branches

This says:
- push repo:local:changes of all branches into `myr`

Possible issues
- a branch that exist in repo:local does not exists in repo:remote
- a branch that exist in repo:remote does not exists in repo:local

```shell
git push myr main
```
This implies:
- `myr` is the alias to a repo:remote (cf. .git/config)
- `main` denotes/indicates  repo:local:branch:`main`

This says:
- push repo:local:branch:`main` to remote:repo:`myr`
