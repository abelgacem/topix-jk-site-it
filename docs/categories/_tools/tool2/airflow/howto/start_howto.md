<head><link rel="stylesheet" href="../../../md.css"/></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Install_Howto]:  ../howto/install_howto.md

# [&larr;][Repo_Readme]Airflow > Howto > Start
# List of references
|Name|Learning Path|Seq|View|Description|
|-|-|-|-|-|
|Install||pre|[Howto][Install_Howto]|-|


# Method > env:dev
## Init airflow:db
```bash
# init 1 db@sqlite 
cd ${AIRFLOW_HOME}
source ${AIRFLOW_HOME}/bin/activate
airflow db init 
```

## Create 1 gui:user@admin in Db
```bash
airflow users create  \
    --username appa   \
    --password root   \
    --firstname Peter \
    --lastname Parker \
    --role Admin      \
    --email ab@abtit.org
```

## Start scheduler
```bash
```

## Start gui
```bash

# activate python:venv
source ${AIRFLOW_HOME}/bin/activate

# start scheduler
airflow scheduler

cd ${AIRFLOW_HOME}
airflow webserver -p 8081     # thios will init 1 db@sqlite 
```
