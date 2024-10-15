---
mx:  
  lp:
  ref:
    child: 
      - definition/cli
---

# most used cli
```bash
lIMAGE_LOCAL="mxi/jdk:ubuntu"
lCONTAINER_NAME="cjdk"
docker run -it --rm ${lIMAGE_LOCAL} /bin/bash -l
docker run -d --name ${lCONTAINER_NAME} ${lIMAGE_LOCAL} /bin/bash -l
docker container exec  -it ${lCONTAINER_NAME} /bin/bash -l
```