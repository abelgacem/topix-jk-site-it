# [&larr;][Repo_Readme] Linux > What is > smod

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Lsmod_Howto]:    ../howto/lsmod_howto.md
[Sysctl_Whatis]:  ../whatis/sysctl_whatis.md

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Lsmod|See|[Howto][Lsmod_Howto]|
|Sysctl|Postrequisit|[Definition][Sysctl_Whatis]|
<br>

# Definition
- Is1 > Cli
- Manage > Kernel:Module

# Configuration
- /etc/modules-load.d/*
  - load Module.Kernel

# Process
- load kernel:module with **lsmod** or **lsmod:file@conf**
- load kernel:module:kvpair with **modprobe** or **modprobe:file@conf**

# toknow
- Kernel:Module@loaded ar in folder **/lib/modules/$(uname -r)/kernel**
- some Kernel:Module are in 
  - **/etc/module**
  - **/etc/module-load.d/**