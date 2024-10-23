---
mx:  
  ref:
    - whatis/runc
    - whatis/cri
    - whais/cnpf
---


# Definition
- 1 container runtime
- provided by  `cnpf`
- implements  `cri`
- 1 low level daemon
- Dependency:tool:`runc`  
- Used by cli:`docker`, cli:`crictl`
- Manages containers lifecycle
  - Image: Transfert, Store
  - Container: Execute, Supervision
  - Network: ...
  - ...

# Configuration files
- `/var/lib/containerd/`
- `/var/run/containerd/`
- `/usr/local/bin`
