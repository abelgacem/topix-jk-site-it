<head><link rel="stylesheet" href="../../../md.css"/></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Executor_List]:  ../list/executor_list.md
[Executor_Howto]: ../howto/executor_howto.md
[Task_Whatis]:    ../whatis/task_whatis.md

# [&larr;][Repo_Readme]Airflow > What is > Executor
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Executor|see|[List][Executor_List], [Howto][Executor_Howto]
|Task|see|[Definition][Task_Whatis]

# Type
- local
- remote
# Definition
- allow to run task
- default executor is SequentialExecutor

# To know
- Airflow can only have one executor configured at a time
- Executor’s logic runs inside the scheduler process
- if you’re running a scheduler, you’re running the executor.
