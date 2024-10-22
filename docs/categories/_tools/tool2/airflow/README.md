<head><link rel="stylesheet" href="../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md

[Airflow_Code]:        ../../../library/lib-airflow/README.md
[Object_list]:        ./list/object_list.md
[Organization_list]:  ../../doc-organization/README.md
[Aws_Whatis]:         ../../doc-it/aws/README.md
[Term_list]:   ./list/term_list.md
[Reference_List]:     ./list/reference_list.md


# [&larr;][Repo_Readme]Domain > Computer Science > Apache : Airflow

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Code|see|[EP][Airflow_Code]|List shared Code
|Object|pre|[List][Object_list]|List of Whatis, Howto, List
|Reference|pre|[List][Reference_list]|List of links and references
|Terminology|pre|[List][Term_list]|List of terms
<br>

# Configuration
- via file (eg $AIRFLOW_HOME/airflow.cfg)
- via envar

# Member
At least
- 1 Cli, Gui, Api
- 1 database
- 1..N Worker
- 1 Scheduler

# Definition
- is 1 `Apache` tool
- is written with python frameworks
- need strong python skills
- allow to code in python
  - orchestration of tasks (eg batch, not batch)
  - [batch-oriented] workflows
- allow to cron/schedule theses tasks, workflows
- allow to manually launch/trigger workflows
- offers 1 functiunal view of the orchestrattion, workflow define by the code
- provides metrics in prometheus format (eg for grafana:dashboard and App:alert manager) for dag
  - statistics
  - improvments

# To know
- like many IT tool, Aws provide 1 managed version of Airflow

# Startup
|Step|File|
|-|-|
||airflow/bin/airflow|
||venvpy/airflow/lib/python3.7/site-packages/airflow/utils/\_\_init\_\_.py|
||venvpy/airflow/lib/python3.7/site-packages/airflow/decorators/\_\_init\_\_.py|
||venvpy/airflow/lib/python3.7/site-packages/airflow/settings.py|
||venvpy/airflow/lib/python3.7/site-packages/airflow/settings.py|
||venvpy/airflow/lib/python3.7/site-packages/airflow/configuration.py|
||xxx/airflow/unittests.cfg|
