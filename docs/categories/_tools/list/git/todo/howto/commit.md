---
mx:  
---

# list commits
```shell
# list all commits's hash only
git rev-list --all     | wc -l

# list all commits with some other infos
git log | grep ^commit | wc -l

# list the last commit of branch:currrent
git log -1

# list the last 2 commits of branch:current
git log -2

# list the last 2 commits of branch:dev
git log -2 dev
```




