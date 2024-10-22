<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Operator_Whatis]:  ../whatis/operator_whatis.md
[task_Whatis]:      ../whatis/task_whatis.md

# [&larr;][Repo_Readme]Airflow > What is > Sensor
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Operator|see|[Definition][Operator_Whatis]
|Task|see|[Definition][Task_Whatis]

# Type
- poke (default)
- reschedule

# Definition
- is1 type of Operator
- wait for 1 event to occur then trigger the following task (i.e downstream task)

# Toknow
- event can be
  - time based
  - file to exists
  - ...