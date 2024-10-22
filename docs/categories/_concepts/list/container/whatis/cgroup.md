---
mx:  
  ref:
    - whatis/containerd
    - whatis/cgconfig
    - whatis/subsystem
    - whatis/cgroup
---

# Definition
- 1 concept
- allows to
  - isolate set of Processus
  - control this set better than  `nice`  does
- Like processes
  - `cgroups`  are organize in a tree where children inherit some properties of parent
- Unlike trees of processes
  - It can exists 2..N trees (at the same time)
- Allows to
  - Define, Isolate  set of Processes
  - Control, Restrict, Manage ressources (e.g. ram, cpu, network, io) used by these set


# Operation
- Group process into 1..N Cgroup
- Bind > Controler > to > Cgroup

# Operation
- Group process into 1..N  `Cgroup`
- Bind resource controler to  `cgroup`
- mount tree
- create `cgroup`:`tree`
- Define `cgroup`:`parameter`
- Create
  - Create  `Cgroup` of type NotPersistent
  - Create  `Cgroup` of type Persistent
  - Create  `Cgroup`:Configuration File
- Delete  `Cgroup`
- Update
  - `Cgroup`
  - `Cgroup`:Configuration File

# Toknow
library **`libcg`** 
  - model the `Cgroup`:FS
  - provide 1 API to manage  `Cgroup`

