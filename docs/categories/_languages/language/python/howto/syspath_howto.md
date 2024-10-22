<head><link rel="stylesheet" href="../../../../md.css"/><script src="../../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../list/object_list.md
[Item_Whatis]:   ../whatis/syspath_whatis.md


# [&larr;][Repo_Readme]Domain > Language > Python > Howto > sys.path ([Definition][Item_Whatis])

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

# create a .pth in site_package
- this file contains all searh path to add to sys.path
# Add a path at runtime
```python
import sys, os
sFOLDER_CURRENT       = os.path.dirname(os.path.realpath(__file__))
sFOLDER_LIB_NAME      = "libmx"
sFOLDER_LIB_PATH_01   = os.path.abspath(os.path.join(sFOLDER_CURRENT, '../..'))
sFOLDER_LIB_PATH_02   = os.path.abspath(os.path.join(sFOLDER_CURRENT, '../..',sFOLDER_LIB_NAME))

## method 01
if sFOLDER_LIB_PATH_01 not in sys.path : sys.path.insert(0, sFOLDER_LIB_PATH_01)
from libmx.mxclass import MyClass

## method 02
if sFOLDER_LIB_PATH_02 not in sys.path : sys.path.insert(0, sFOLDER_LIB_PATH_02)
from mxclass import MyClass

# instanciate object from class
myobj = MyClass("toto", "titi")

```

# Delete a path at runtime
```python
lPATH = '/path/to/unwanted/directory'
if lPATH in sys.path: sys.path.remove(lPATH)
```

# restore syspath at runtime
```python
import sys
# make a shallow copy
lSYSPATH_DEFAULT=list(sys.path)
# update sys.path
...
# restore sys.pathj
sys.path = lSYSPATH_DEFAULT
```
