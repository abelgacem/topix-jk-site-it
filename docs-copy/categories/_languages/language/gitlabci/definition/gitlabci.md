---
draft : false
mx:
---


# Definition
1 DSL thta allows to use Gitlab CI/CD features
- Var 
  - declaration
  - definition
  - declaration and definition
- Control flow instructions
- directive to the parser
- instruction to the engine gitlab
- ...
- Access to variable
  - core or custom defined in Gitlab:project, group, ...

# Example

```yaml
# var accessible to jobs and services
variables:
  MxVar01: "var:value is accessible to jobs and services"

stages:
  - stage01

job-debug:
  stage: stage01
  tags:
    - o4u 
  script:
    - echo $USER
    - id
    - pwd
    - ls -ial
    - env | grep "GITLAB_" | sort
    - env | grep "CI_SERVER" | sort
    - env | grep "CI_REGISTRY" | sort
    - env | grep "CI_PROJECT" | sort
    - env | grep "CI_BUILD" | sort
    - env | grep "CI_COMMIT" | sort
    - env | grep "CI_RUNNER" | sort
    - env | grep "CI_JOB" | sort
    - env | grep "CI_" | egrep -v "CI_RUNNER|CI_PROJECT|CI_BUILD|CI_COMMIT|CI_JOB|CI_REGISTRY|CI_SERVER" | sort
    - env | grep "FF_" | sort
    - env | egrep -v "CI_|FF_|GITLAB_" | sort

job02:
  stage: stage01
  tags:
    - o4u 
  script:
    - packer --version
    - docker images

```