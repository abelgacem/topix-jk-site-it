---
draft : true
mx:  
  lp: O
  ref:
    child:
      - definition/reference
      - definition/commit
---

# Definition
- display info

# list commit

```shell
git log ..myr/master
```
meaning:
- `myr` is a reference to a repo:remote (cf. .git/config)
- `master` is the name of
  - `myr`:branch
  - `repo:local`:branch
- list commits of `myr`:`master`
