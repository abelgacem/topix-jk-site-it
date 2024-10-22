<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md
[Executor_Whatis]:  ../whatis/executor_whatis.md

# [&larr;][Repo_Readme]Airflow > Howto > manage > Executor
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Executor|see|[Definition][Executor_Whatis]|-|




# Configure
```bash
# in the conf file
[core]
executor = KubernetesExecutor
```
# Dsiplay
```bash
airflow config get-value core executor
```
