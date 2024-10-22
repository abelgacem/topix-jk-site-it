<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md
[Dag_Whatis]:  ../whatis/dag_whatis.md

# [&larr;][Repo_Readme]Airflow > Howto > Cli > airflow
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dag|see|[Definition][Dag_Whatis]|-|


# List all `Dag`
```bash
airflow dags list
```

# List 1 `Dag`:tasks
```bash
lDAG_NAME="example_xcom_args"
airflow tasks list ${example_xcom_args}
```

# Execute 1 data pipeline with a defined execution date:
```bash
airflow dags trigger -e 2022-02-02 example_xcom_args
Conclusion
```

```
# infpo on db
```bash
airflow config get-value database sql_alchemy_conn
```

# List
```bash
airflow list_dags
```

# Info
```bash
airflow  -h
airflow info
airflow webserver -h
airflow db -h
```
