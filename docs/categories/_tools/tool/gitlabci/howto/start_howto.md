# [&larr;][Repo_Readme]doc > [GitlabCI][Topic_Readme] > [Howto][STopic_List] > Start

[//]: #(Reference)
[Repo_Readme]:     ../../README.md
[Topic_Readme]:    ../README.md
[STopic_List]:     ../list/obj_list.md

[Job_Whatis]:      ../whatis/job_whatis.md
[Stage_Whatis]:    ../whatis/stage_whatis.md
[Trigger_Whatis]:  ../whatis/trigger_whatis.md


# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Job|[Definition][Job_Whatis]|-|
|Stage|[Definition][Stage_Whatis]|-|
|Trigger|[Definition][Trigger_Whatis]|-|
<br>

# Remember 
## The basics
1. The location of the GitlabciFile: 
    - the root folder of 1 gitlab:repo
1. The name of the GitlabCiFile: 
    - gitlab-ci.yml
1. This file define
    - 1..N stages
    - 1..N jobs per stage
1. This file define
    - name and order of stages
    - 1..N job:action per stage defined
1. 1 job belongs to 1..1 stage OR 1 stage contains 1..N jobs
1. This GitlabCiFile when triggered generates 1 pipeline managed by gitlab
1. All jobs of 1 stage [can] runs in **parallel**
1. The representation of this pipeline indicates
      - Job:state of job@running
      - job@running:Stage

## The defaults
1. Gitlab define 1 sequence of 3 stage: build, tes, deploy
1. Job with no stage belongs to default stage test
