<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>


[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > Other

# Display var *sys.path*
## method
```python
# call cli: python
python
>>> import sys
>>> from pprint import pprint
>>> pprint(sys.path)
['',
 '/usr/lib/python310.zip',
 '/usr/lib/python3.10',
 '/usr/lib/python3.10/lib-dynload',
 '/home/lisa/wkspc/pyvenv/airflow/lib/python3.10/site-packages']
>>>
```
```
python <<yy
import os
print(os.environ.get('PYTHONPATH', ''))
yy
```
# call cli: python
```python
python <<yy
import sys
for p in sys.path:
  print(p)
yy
```

# Add folder to *sys.path*
## method
```python
python <<yy
import sys
sys.path.append("/home/lisa/wkspc/pyvenv/airflow/dags")
yy
```
## method - work
```
export PYTHONPATH="/home/lisa/wkspc/pyvenv/airflow/dags"
```


# define the dag folder
config:key:dags_folder => default=$AIRFLOW_HOME/dags
# define the plugin folder
config:key:plugins_folder => default=$AIRFLOW_HOME/plugins


# Import module
```python
import mypath.module
# OR
from mypath import module

```


# Warning
``` bash
# disable
export PYTHONWARNINGS="ignore::DeprecationWarning"
# enable
export PYTHONWARNINGS="default"
# other possible values
export PYTHONWARNINGS="ignore"
 ```

# display folders
```bash
# display folder site-packages
python3 -c "import site; print(site.getsitepackages())"
``` 


