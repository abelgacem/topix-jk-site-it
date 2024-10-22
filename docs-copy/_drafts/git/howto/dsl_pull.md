---
mx:  
  lp: O
  ref:
    child:
      - howto/git
---

# Definition
- a combination of
  - `git fetch`
  - `git merge`
- Fetche (ie. download) changes from a repo:remote  AND
- Integrate changes in the repo:current:branch 

# Use case
```shell
git pull myr master
```
This implies:
- `myr` is a reference to a repo:remote (cf. .git/config)
- `master` is the name of
  - `myr`:branch
  - `repo:local`:branch

This says:
- get changes (if any) from `myr`:`master`
- integrate them into `repo:local:branch`:`master`

Possible issues
- a branch that exist in repo:remote does not exists in repo:local