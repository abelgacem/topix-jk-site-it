---
draft : false
mx:
---

# define variables
```yaml
variables:
  DEPLOY_CREDENTIALS:
    description: "The deployment credentials."
  DEPLOY_ENVIRONMENT:
    description: "Select the deployment target. Valid options are: 'canary', 'staging', 'production', or a stable branch of your choice."
    value: "canary"
```


# define variables@dropdown_list
```yaml
variables:
  DEPLOY_ENVIRONMENT:
    description: "The deployment target. Set to 'staging' by default."```
    value: "staging"
    options:
      - "production"
      - "staging"
      - "canary"

# List all var accessible to all jobs
```yaml
thejob:
  stage:thestage
  script:
    - export
```

# Define var accessible to all jobs and services
```yaml
variables:
  TEST_VAR: "var:value is accessible to All jobs and all services"

job1:
  variables:
    TEST_VAR_JOB: "var:value is accessible to this job only"
  script:
    - echo "$TEST_VAR" and "$TEST_VAR_JOB"
```
# Define var in GitlabCIFile
```yaml
test_variable:
  stage: test
  script:
    - echo "$CI_JOB_STAGE"  # var@predefined
    - echo "$TEST"          # var@(custom,env_var)
    - echo "$GREETING"      # var@(custom,file)
    - cat "$GREETING"       # var@(custom,file)
```    





# Use var in var
## Example
```yaml
job:
  variables:
    CLI_ARG: '-ial'
    CLI: 'ls "$CLI_ARG"'
  script:
    - 'eval "$CLI"'  # Executes 'ls -ial'
```
## Example - that allow to use var@env defined in the runner
```yaml
job:
  variables:
    CLI_ARG: '-ial'
    CLI: 'ls "$CLI_ARG" $$TMP_DIR'
  script:
    - 'eval "$CLI"'  # Executes 'ls -al $TMP_DIR'
```

# Passing Var

# Pass var from 1 job to another job
jobs are in the same GitlabCIFile
```yaml
job_build:
  stage: build
  script:
    # 1 var per line
    # Value can be wrapped in quotes, but cannot contain newline
    - echo "BUILD_VARIABLE=value_from_build_job" >> build.env
  artifacts:
    reports:
      dotenv: build.env

job_deploy:
  stage: deploy
  variables:
    BUILD_VARIABLE: value_from_deploy_job
  script:
    - echo "$BUILD_VARIABLE"  # Output is: 'value_from_build_job' due to precedence
```
# Pass Var@Gitlab to Service
```yaml
# Pass var@gilab to GitlabCI file then service has access to var@script
variables:
  SA_PASSWORD: $SA_PASSWORD
```

# Simulate List
```yaml
job1:
  variables:
    LIST: src test docs
  script:
    - |
      for item in $LIST
        do
          echo "The path is root/${item}"
        done
```        