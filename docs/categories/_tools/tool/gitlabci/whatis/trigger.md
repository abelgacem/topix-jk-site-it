---
draft : false
mx:
  ref:
    child:
---

# Definition
- 1 concept
- is implementation in gitlab via Dsl:instruction:rule
- denote the excution of the code in the gitlabCI file by a runner



# Process
- 1 pipeline is always created
- Gitlab check the pipeline:conf to define if 1 job is include or exclude in the pipeline

# Toknow
the gitlabCI file can be triggered on
- action@manual
- action on repo@git (e.g push, pull, commit on 1 branch)
- action on repo@git:(folder, file) (e.g create, update) ??

the gitlabCI file can be triggerd on
- New commit
- New branch
- New tag
- Manual action
- Api call
- Scheduled

