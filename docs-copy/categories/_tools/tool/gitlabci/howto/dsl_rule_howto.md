
# Generic
```powershell
rules:
    - ...
```
- `rules` allows to define conditions when the job runs.

# job will run only when triggered manually

```powershell
job1:
  ...

job2:
  ...
  rules:
    - if: '$CI_PIPELINE_SOURCE == "web"'

job3:
  ...
```
- `$CI_PIPELINE_SOURCE == "web"` means only the job2 will run when the pipeline is triggered manually from the GitLab UI (web interface).
## if commit/push is on branch:develop
```powershell
job:
  ...
  rules:
    - if: $CI_COMMIT_BRANCH == "develop" 
```

## if in MR
```yaml
myjob:
  rules:
   - if: $CI_MERGE_REQUEST_IID
  script:
    - echo "I only run inside MR"
```




# Exaple
```yaml
job:
  rules:
  - if $CI_COMMIT_BRANCH  == "develop"
    when: alwasys
  - if $GITLAB_USER_LOGIN == "max"
    when: manual
    allow_failure: true
  - when: never
  script:
    - echo "Hello"

```

# Todo
## Commit on any branch execpt the default
```bash

```
