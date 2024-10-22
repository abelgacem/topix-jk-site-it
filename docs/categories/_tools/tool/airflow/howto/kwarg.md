---
draft : false
mx:
  index: list
  lp:    1
---

# Use case
## Example
```python 
# method - used by an operator - that have access to op_kwargs
def _process_array(mFILE_TIMESTAMP, **kwargs):
  # define var@local from var@argument
  lFILE_TIMESTAMP = mFILE_TIMESTAMP
  # extract usefull info from var
  lTASK_ID        = f't01_sftpls_file_{lFILE_TIMESTAMP}'  
  # get content put by a specific task@previous
  array_rf_json_in = kwargs['ti'].xcom_pull(task_ids=lTASK_ID, key='array_json')
  # debug
  print(f"lFILE_TIMESTAMP: {lFILE_TIMESTAMP}")
...
# operator - used by a task
t02_process_array   = PythonOperator(
    task_id           = f't02_process_array_{lFILE_TIMESTAMP}',
    dag               = dag_main,
    provide_context   = True,
    op_kwargs         = {'mFILE_TIMESTAMP': lFILE_TIMESTAMP}, 
    python_callable   = _process_array
)
```
## How it works
- `task:t02_xxx:op_kwargs`define the var `mFILE_TIMESTAMP` used by the method `_process_array`
- `method:_process_array` 
  - define the arg `mFILE_TIMESTAMP` that will receive the value passed by the first step

# Use case
## Example
```python 
# method - used by an operator - that not have access to op_kwargs
def _create_file(**kwargs):
  # define var@local from var@script
  ## the name of the task:id allows to access a var from wich is extracted a usefull info
  lFILE_TIMESTAMP     = kwargs['ti'].task_id.split('_')[-1]
  # get content put by a specific task@previous
  lCSV_DATA_VAR       = kwargs['ti'].xcom_pull(task_ids=f't02_process_array_{lFILE_TIMESTAMP}', key='array_rf_array_out')
  # pass this var to another method that create a file on the worker and return a reference on this file 
  return _csv_create_file(lCSV_DATA_VAR, lLOCAL_FILEPATH, lFILE_TIMESTAMP)
...
# operator - used by a task
t03_sftpput_file = SFTPOperator(
    task_id           = f't03_sftpput_file_{lFILE_TIMESTAMP}',
    dag               = dag_main,
    ssh_conn_id       = lCONID_SFTP_PUT_TIN,
    local_filepath_generator = _create_file,
    remote_filepath   = lREMOTE_FILEPATH,
    operation         = "put"
)
```
## How it works
- `task:t02_xxx:op_kwargs`define the var `mFILE_TIMESTAMP` used by the method `_process_array`
- `method:_process_array` 
  - define the arg `mFILE_TIMESTAMP` that will receive the value passed by the first step
