---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:
  ref:
    root: 
      - curl/definition/curl
---


# Whatis
- allow to manage image and container **directly** via **socket** and **api**

# Create contaoner
```bash
lSOCKET="/var/run/docker.sock -d"
lAPI="http://localhost/containers/create"
curl -XPOST --unix-socket ${lSOCKET} -d '{"Image":"nginx"}' -H 'Content-Type: application/json' ${lAPI}
```

# Start container
```bash
lAPI="http://localhost/containers/fcb6...7d65/start"
curl -XPOST --unix-socket ${lSOCKET} ${lAPI}
```
