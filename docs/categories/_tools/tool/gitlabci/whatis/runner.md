---
draft : false
mx:
  ref:
    child:
      - whatis/gitlabci
      - whatis/gitlabcifile
      - whatis/job
---

# Definition
 - 1 agent, service (i.e os:process) running on 1 machine
 - called and used by GitlabCi
 - understands and executes the code contains in 1 GitlabCiFilethat 1 **runner** 

# Member
- name ???
# Type
- cf. executor
# Type
- Docker
- OS: Linux, Windows, Mac    
# Type
The type of the runner define wich gitlab:project can run the GitlabCiFile on this type of runner
- Shared
  - every project
- Group
  - every group:projects and subgroup:projects of 1 Gitlabrunner
- Specific
  - 1 project of 1 Gitlab

# Configuration file
- */etc/gitlab-runner/config.toml* (if run via user@root)
- *~/.gitlab-runner/config.toml*   (if run as user@notroot)

# Process
The GitlabciEngine:
  1. Read the gitlabCiFile.
  1. Find 1 available runner.

The runner:
  1. Read the gitlabCiFile.
  1. Instanciate 1 container from the image defined by keyword:`image`.
  1. Clone the gitlab project.
  1. Execute the job's instructions in that container or in anoter container (keyword:`image`).

# Operation
- Create
- Register

## Operation:Create
- Create Object:Runner
- Create Runner:Service

## Operation:Register
  - bind the runner to 1..N GitLab instances
  - Each register cde allow to register 1 runner on the same host with is specific conf

# To know
- 1 runner can run multiple job
- When one job is executed, the code has access to every resources in this container:
  - envvar
  - cli
  - ...
