# [&larr;][Repo_Readme]doc > [AI][Topic_Readme] > [Howto][STopic_List] > manage >  Variable

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/howto_list.md

[Variable_Whatis]: ../whatis/var_whatis.md
[Inventory_Whatis]: ../whatis/inventory_whatis.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Variable|[Definition][Variable_Whatis]|
|Inventory|[Definition][Inventory_Whatis]|
<br>

# Define var (common to | shared by) all roles

|Key|value|
|-|-|
|Location|roles/common_settings/vars/main.yml|
|Description|Var:Value in this file is accessible to all roles
|Comment|Var:Value can be override by var@(role, input) 

```bash
roles:
   - role: app_user
     vars:
        myname: Ian
   - role: app_user
     vars:
       myname: Terry
```       