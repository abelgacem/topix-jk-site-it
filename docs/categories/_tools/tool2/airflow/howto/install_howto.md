<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Dag_Whatis]:     ../whatis/dag_whatis.md
[Python_Howto]:   ../../python/howto/install_howto.md
[Start_Howto]:    ../howto/start_howto.md

# [&larr;][Repo_Readme]Airflow > Howto > Install airflow
# List of references
|Name|Learning Path|Seq|View|Description|
|-|-|-|-|-|
|Python||pre|[Howto][Python_Howto]|-|
|Start||post|[Howto][Start_Howto]|-|


# Install Airflow
## Install python
cf. Reference
## Install Airflow
- define var
```bash
export AIRFLOW_HOME="/home/lisa/workspace/pyvenv/airflow" 
lAIRFLOW_VERSION="2.5.1" 
lPYTHON_VERSION="3.10"
lAIRFLOW_URL="https://raw.githubusercontent.com/apache/airflow/constraints-${lAIRFLOW_VERSION}/constraints-${lPYTHON_VERSION}.txt"
````

- create 1 python:venv
```bash
python -m venv ${AIRFLOW_HOME}   
```

- activate this python:venv
```bash
source ${AIRFLOW_HOME}/bin/activate
```

- install app@python:airflow in this python:venv
```bash
python -m pip install "apache-airflow==${lAIRFLOW_VERSION}" --constraint "${lAIRFLOW_URL}"
```