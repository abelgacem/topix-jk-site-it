<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/module_whatis.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > module ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# import
```python
import module_name
```


# get file
```python
import inspect
print(f'lMODULE_LIBNAME > {inspect.__file__}')
```


# Todo
```python
from xxx import yyy
```
- `xxx` is a **module** or **package**
- `yyy` is a **submodule** or **attributes** (ie. methode, var)

## usecase
```python
from os   import path
```
- `os` is a module
- `path` is a submodule

```python
from json import dumps, loads
```
- `json` is a module
- `dumps` is a method
- `loads` is a method

## usecase
```python
import pprint, sys

# working usage
pprint.pprint(sys.path)
```

```python
from pprint  import pprint
import sys

# working usage - but less readability
pprint(path)
```

```python
import sys
from pprint  import pprint

# working usage - better readability
pprint(sys.path)
```

