---
mx:  
  ref:
    - howto/namespace
---

# Definition
- 1 Concept
- 1 file under **`/proc/<pid>/ns`**    
- Allows to
  - Isolate trees of processus
  - provide different views of  `Kernel`:Properties for each tree
    - `Hostname`
    - `Pid`
    - Network
    - `Port`
    - ...
# Category
|name|tag|type of isolation|
|-|-|-|
|`Cgroup`||the virtual `cgroup`:FS vs host:FS|
|`Ipc`||the interprocess communication utilities (e.g. shared segments, semaphores)|
|`Net`||the host network stack
|`Mnt`||the host FS mount points|
|`Pid`||the system tree of host processes|
|`Uts`||(Unix Time-Sharing) the hostname|
|`User`||the host system users IDs|

# Namespace of type Network
Member
- Network Interface
- Routing Table
- `Iptable` Rule

# List of references
- https://www.linuxembedded.fr/2020/11/namespaces-la-brique-de-base-des-conteneurs
- https://www.linuxembedded.fr/2015/07/comprendre-dbus
