---
draft : true
mx:  
  lp: O
  ref:
    child:
---


# Todo Draft

## Pipeline:Member 
- Jobs that denote action (e.g compile, test)
- Stages that allow to seqeunce the job execution (e.g stages that run tests after stages that compile the code)

### To know
- In general, pipelines are executed automatically 
- In general, pipelines require no intervention once created
- In some use case it is posible to manually interact with a pipeline
<hr>

## Job:Member
- Each job contains scripts and stages
- Keyword:default is for custom defaults
  - for example with before_script and after_script.
- Keyword:stage describes the sequential execution of jobs
  - Jobs in a single stage run in parallel as long as there are available runners.
Use Directed Acyclic Graphs (DAG) keywords to run jobs out of stage order.
## Job
- Jobs are executed by runners
- 2..N jobs in the same stage are executed in parallel (if there are enough concurrent runners)
- If all jobs in a stage succeed, the pipeline moves on to the next stage
- If any job in a stage fails, the next stage is not (usually) executed and the pipeline ends.

## Pipeline@Standart
typical pipeline consist of four stages, executed in the following order:
- build stage
  - with a job called compile.
- test stage
  - with two jobs called test1 and test2.
- staging stage
  - with a job called deploy-to-stage.
- production stage
  - with a job called deploy-to-prod.

