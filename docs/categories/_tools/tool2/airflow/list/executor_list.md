<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Executor_Whatis]:  ../whatis/executor_whatis.md
[Celery_Whatis]:    ../whatis/celery_whatis.md

# [&larr;][Repo_Readme]Airflow > List > Executor
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Executor|see|[Definition][Executor_Whatis]|-|
|Celery|see|[Definition][Celery_Whatis]|-|

# List
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|SequentialExecutor|local
|Local|local
|Kubernetes|
|Celery|remote
|CeleryKubernetes|remote
|Dask|remote
|Kubernetes|remote
|LocalKubernetes|remote
<br>


# SequentialExecutor

- is the default operator
- task are run in sequence on local airflow server ( where Airflow is installed)

# LocalExecutor

- Several tasks can be run in parallel
- This is 1 vertical scaling (more resource on vm => more task running in parallel)

# CeleryExecutor

- Airflow delegate tasks to Celery
- Celery distribute task to Worker
- This is 1 horizontal scaling (more worker => more task running in parallel)


