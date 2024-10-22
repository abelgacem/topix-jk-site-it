<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Executor_Whatis]: ../whatis/executor_whatis.md
[Trigger_Whatis]:  ../whatis/trigger_whatis.md
[Operator_Whatis]: ../whatis/operator_whatis.md
[Sensor_Whatis]:   ../whatis/sensor_whatis.md
[Dag_Whatis]:      ../whatis/dag_whatis.md

# [&larr;][Repo_Readme]Airflow > What is > Task
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dag|see|[Definition][Dag_Whatis]
|Executor|see|[Definition][Executor_Whatis]
|Trigger|see|[Definition][Trigger_Whatis]
|Operator|see|[Definition][Operator_Whatis]
|Sensor|see|[Definition][Sensor_Whatis]

# Member
- status
- dependency (yes, no)
# Definition
- Is defined by 1 Operator
- Is python code (ie 1 class@python that genarate 1 action)
- can be 
  - operator  (e.g BashOperator)
  - decorator (e.g @task)
  - sensor
  - taskflow
# Status
can be
- success
- sailed
- skipped
- upstream_failed

# Example
```python
create_file = BashOperator(
  task_id='create_file',
  bash_command='echo "my line in file" > /tmp/file.txt',
)
```