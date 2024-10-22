---
draft : false
mx:  
  ref:
    child:
      - whatis/gitlabci
      - whatis/runner
      - whatis/dsl
---


# Definition
- 1 (script, file)@(Txt, Yaml) 
- named **.gitlab-ci.yml** 
- located in the root folder of 1 repo@git
- written in a **Dsl** call it **GitlabCiDsl**

# The Process
- When 
  - 1 GitlabCiFile exits in 1 repo@git AND
  - This repo@git is hosted on 1 server@gitlab
- Gitlab detects it and passes it to 1 runner
- The runner executes that file

# To know
- The file can be modularized
- Define variables, dependencies between jobs
- Specify when and how each job should be executed