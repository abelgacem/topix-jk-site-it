<head><link rel="stylesheet" href="../../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]: ../list/object_list.md
[Var_Whatis]:  ../whatis/var_whatis.md

# [&larr;][Repo_Readme]Airflow > Howto > manage > variable
# List of references
|Name|Learning Path|Seq|View|Description|
|-|-|-|-|-|
|Variable|||[Definition][Var_Whatis]|-|


# howto
```python
from airflow.models import Variable

# get var:value@string
test = Variable.get("test_var")

# get var:value@json
sAIRFLOW_JSON_VAR="ccf_cfdi_com"
json_var = Variable.get(sAIRFLOW_JSON_VAR, deserialize_json=True)

# get var:value@json:key
key = var.json.json_var.key01

# get var:value@string else sting:None if not exists
default_var = Variable.get("default var", default var=None)
```

# file containing ccf_cfdi_com
```json
{
    "ccf_cfdi_com" = {
        ...
    }
}
```

# Template
```python
json_var = Variable.get("json _var", deserialize_json=True)
bash_task = BashOperator(
    task_id="bash_task",
    bash_command='{{ var.json.json_var.key01 }} ',
    dag=dag,
)
```