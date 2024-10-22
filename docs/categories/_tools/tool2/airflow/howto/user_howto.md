<head><link rel="stylesheet" href="../../../md.css"/></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Install_Howto]:  ../howto/install_howto.md

# [&larr;][Repo_Readme]Airflow > Howto > manage > user
# List of references
|Name|Learning Path|Seq|View|Description|
|-|-|-|-|-|
|Install||pre|[Howto][Install_Howto]|-|


# Step
## Init airflow:db
```bash
# init 1 db@sqlite 
cd ${AIRFLOW_HOME}
airflow db init 
```

## Create 1 gui:user@admin in Db
```bash
airflow users create  \
    --username appa   \
    --firstname Peter \
    --lastname Parker \
    --role Admin      \
    --password root   \
    --email ab@abtit.org
```

## Start scheduler
```bash
airflow scheduler
```

## Start gui
```bash

# activate python:venv
source ${AIRFLOW_HOME}/bin/activate

cd ${AIRFLOW_HOME}
airflow webserver -p 8081     # thios will init 1 db@sqlite 
```
