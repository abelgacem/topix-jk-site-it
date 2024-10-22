# display varenv
## Example
```powershell
variables:
  lFILENAME_INFO_SUMMARY: "summary.${CI_JOB_ID}.txt"

default:
  before_script: # play before each job
    - echo $USER
    - id
    - pwd
    - ls -ial
    - env | grep "GITLAB_"     | sort
    - env | grep "CI_SERVER"   | sort
    - env | grep "CI_REGISTRY" | sort
    - env | grep "CI_PROJECT"  | sort
    - env | grep "CI_BUILD"    | sort
    - env | grep "CI_COMMIT"   | sort
    - env | grep "PIPELINE_"   | sort
    - env | grep "CI_RUNNER"   | sort
    - env | grep "CI_JOB"      | sort
    - env | grep "CI_"         | egrep -v "CI_RUNNER|CI_PIPELINE|CI_PROJECT|CI_BUILD|CI_COMMIT|CI_JOB|CI_REGISTRY|CI_SERVER" | sort
    - env | grep "FF_"         | sort
    - env | egrep -v "CI_|FF_|GITLAB_" | sort
```
## Example

```powershell
variables:
  lFILENAME_INFO_SUMMARY: "summary.${CI_JOB_ID}.txt"

info_context:
  stage: context
  script:
    - |
      cat > ${lFILENAME_INFO_SUMMARY} << EOF 
      ******** sumup ****************************
      > Runner
      - arch        > "${CI_RUNNER_EXECUTABLE_ARCH}"
      - tags        > "${CI_RUNNER_TAGS}"
      - cli:gitlab-runner:version        > "${CI_RUNNER_VERSION}"
      - id                        > "${CI_RUNNER_DESCRIPTION}"
      - 
      > Repository
      - URL          > "${CI_REPOSITORY_URL}"
      - Commit Hash  > "${CI_COMMIT_SHA}"
      - Branch       > "${CI_COMMIT_REF_NAME}"
      - 
      > Pipeline
      - id           > "${CI_PIPELINE_ID}"
      - 
      > Job
      - name         > "${CI_JOB_NAME}"
      - stage         > "${CI_JOB_STAGE}"
      - id           > "${CI_JOB_ID}"
      - url           > "${CI_JOB_URL}"
      - image           > "${CI_JOB_IMAGE}"
      ******** sumup ****************************
      EOF
    - cat ${lFILENAME_INFO_SUMMARY}      
  rules:
    - if: $CI_PIPELINE_SOURCE == "web"  # run only this job when triggered manually

```