<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Dag_Howto_List]:  ../list/dag_howto_list.md
[Task_Whatis]:     ../whatis/task_whatis.md
[Workflow_Whatis]: ../whatis/workflow_whatis.md

# [&larr;][Repo_Readme]Airflow > What is > Dag
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dag|see|[Howto][Dag_Howto_List]|-|
|Task|see|[Definition][Task_Whatis]|-|
|Workflow|see|[Definition][Workflow_Whatis]|-|

# Type
- at runtime
- static
# Member
- status (running, failed, stop, history, ...)

# Dag
- is1 acronym
- denotes, represents 1 *workflow*
- is1 sequence of tasks
- is launch 
  - at a regular basis
  - via 1 trigger
- is saved in airflow:db
# Representation
```mermaid
graph LR;
 Task01-->Task02-->Task03-->Task04;    
```
## example
```mermaid
graph LR;
 Task01_wait_input-->Task02_donwload_file-->Task03_process_file-->Task04_upload_file;    
```

# Dag Run
- is1 instantiation of the DAG (in time)

# Toknow 
- Any time 1 DAG is executed, 1 DAG Run is created and all tasks inside it are executed
- 1..N Dag can runs at the same time

# Status
Can be:
- *success* if all of the leaf nodes states are either *success* or *skipped*,
- *failed* if any of the leaf nodes state is either *failed* or *upstream_failed*.

# Example
- Run a Spark job
- Move data between two buckets
- Send 1 email