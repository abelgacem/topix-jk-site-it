---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:       0
---

# Definition
- provided by  `Apache`
- written with python frameworks
- allow to code in python
  - orchestration of tasks (eg batch, not batch)
  - [batch-oriented] workflows
- allow to cron/schedule theses tasks, workflows
- allow to manually launch/trigger workflows
- offers 1 functiunal view of the orchestrattion, workflow define by the code
- provides metrics in prometheus format (eg for grafana:dashboard and App:alert manager) for dag
  - statistics
  - improvments

# Configuration
- via file (eg $AIRFLOW_HOME/airflow.cfg)
- via envar

# Member
At least
- 1 Cli, Gui, Api
- 1 database
- 1..N Worker
- 1 Scheduler


# Good to know
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
