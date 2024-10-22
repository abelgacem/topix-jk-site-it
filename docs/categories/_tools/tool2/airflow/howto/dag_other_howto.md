<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/dag_howto_list.md
[Dag_Whatis]:  ../whatis/dag_whatis.md

# [&larr;][Repo_Readme]Airflow > Howto > manage > Dag
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dag|see|[Definition][Dag_Whatis]|-|


# List dags
```python
airflow dags list
```

# List dag:tasks
```python
# define var
lDAG_NAME="ccf_cre_ingestion.py"
#
airflow tasks list $dagid
airflow list_tasks ${lDAG_NAME} --tree
```

# Test 1 dag:task and see stdout
```bash
lDAG_ID="ccf_mit1_cre_rf_draft_v01"
lTASK_ID="top5_ssh_test"
lDATE_SCHEDULE_SIMULATION="2023-02-10"
# testing 1 task
airflow test ${lDAG_ID} ${lTASK_ID} ${lDATE_SCHEDULE_SIMULATION}
```



# List jobs
```python
airflow dags list-jobs
```

# Get var@env in dag
```python
# in Dag
path_script=variable.get("compta_ais_script_path")
```

# Define scheduling
## launch dag using cron format
```python
my_dag =  DAG(
    ...
    schedule_interval = Cron format, 
    ...
)

```
## launch dag manually (for test purpose)
```python
my_dag =  DAG(
    ...
    schedule_interval = None, 
    ...
)

    