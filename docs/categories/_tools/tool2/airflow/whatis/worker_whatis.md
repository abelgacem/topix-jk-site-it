<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Task_Whatis]:    ../whatis/task_whatis.md
[Dag_Whatis]:     ../whatis/dag_whatis.md

# [&larr;][Repo_Readme]Airflow > What is > Worker
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dag|pre|[Definition][Dag_Whatis]
|Task|post|[Definition][Task_Whatis]

# Synonym
- Runner

# Definition
- Execute the code
- put info in DB when task is done


# To know 
- `Airflow`  uses  `Celery` (ie create queue of task) to load balance task on worker
