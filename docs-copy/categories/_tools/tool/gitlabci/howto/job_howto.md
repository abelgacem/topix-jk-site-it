# [&larr;][Repo_Readme]doc > [GitlabCI][Topic_Readme] > [Howto][STopic_List] > manage >  Job

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/obj_list.md


[Job_Whatis]:       ../whatis/job_whatis.md
[Language_Whatis]:  ../whatis/language_whatis.md
[Runner_Whatis]:    ../whatis/runner_whatis.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Job|[Definition][Job_Whatis]|
|Runner|[Definition][Runner_Whatis]|
|Language|[Definition][Language_Whatis]|
<br>

# Play 1 job on 1 specific runner
cf. runner > howto
```yaml
job:
  tags:
    RUNNER_NAME # mandatory for runner@specific
```

# Job dependency
- use *needs* to order job

# Comment code with dot
```yaml
.tests:                           # tests:
  script: rake test               #   script: rake test
  stage: test                     #   stage: test
  only:                           #   only:
    refs:              same as    #     refs:          
      - branches         ==>      #       - branches   
```
# Duplicate job:code with extends
```yaml
# merge key, not value (if exists)
.tests:                          rspec:
  script: rake test                stage: test
  stage: test                      script: rake test
  only:                            only:
    refs:              same as       refs:
      - branches        ==>            - branches
                                     variables:
                                       - $RSPEC
rspec:
  extends: .tests
  script: rake test
  only:
    variables:
      - $RSPEC
```      