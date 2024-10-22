---
draft : true
mx: 
  lp:
  ref:
    child:
      - definition/cve
---


# display vulnerabilities in docker containers
```bash
# login to docker
docker login

# search vuln
lIMAGE="mxi/library/ubuntu:23.10"
docker scout cves ${lIMAGE}
```
