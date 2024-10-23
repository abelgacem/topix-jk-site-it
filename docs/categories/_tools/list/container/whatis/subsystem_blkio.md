---
mx:  
  ref:
    - whatis/containerd
    - list/subsystem
    - whatis/cgroup
    - whatis/subsystem
---

# Definition
- 1 controller
- Allow to enable I/O resource usage policies
- Used to
  - Deny access to a specific device

# Member
- file (in  `cgroup`  v1):
  - `blkio.throttle.read_bps_device`
  - `blkio.weight`

- file (in  `cgroup`  v2):
  - `blkio.throttle.read_bps_device`
  - `io.weight`
