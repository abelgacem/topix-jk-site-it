<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md
[Dag_Whatis]:  ../whatis/dag_whatis.md

# [&larr;][Repo_Readme]Airflow > Howto > connection
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dag|see|[Definition][Dag_Whatis]|-|

- https://airflow.apache.org/docs/apache-airflow/1.10.15/howto/connection/ssh.html


# define 1 connection to 1 vm
## with cli
airflow connections --add \
    --conn_id 'my_prod_db' \
    --conn_login 'login' \
    --conn_password 'password' \
    ...

## with gui
```bash
gui > admin > conections > create
```
# check connection
```python
from airflow.hooks.base_hook import BaseHook

conn = BaseHook.get_connection('postgres_default')
print(f"AIRFLOW_CONN_{conn.conn_id.upper()}='{conn.get_uri()}'")
```
# use 1 connection
