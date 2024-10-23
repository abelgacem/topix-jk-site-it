---
mx:  
  ref:
    - whatis/cgroup
    - whatis/cgconfig
    - whatis/subsystem
    - concept/container/whatis/container
---

# Definition
- 1 daemon
- used in redhat os
- installed by os package:`libcgroup`
- uses 1 configuration file
- allows to
  - create tree as FS
  - mount tree
  - bind resource controler to tree
  - create control group
  - define property for Resource Controller   

# configuration file
- **`/etc/cgconfig.conf`**
  - mount:
    - create tree as fs
    - mount tree
    - bind resource controler to tree
  - group:
    - create control group
    - define ResourceController:property   

The configuration file is equivalent to some cli

