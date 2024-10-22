---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:
  ref:
    child: 
      - definition/dind
---

# List image
```powershell
# all
docker image list -a
docker image list --format "table {{ .Repository }} {{ .ID }}"
docker image list --format "      {{ .Repository }} {{ .ID }}"

# with pattern in name
## docker >= 2.10.16 
docker image list --filter "reference=*aduneo*"
##
lPATTERN_NAME="registry.aduneo.com"
docker image     list -a  | grep ${lPATTERN_NAME}
```

# List container
```powershell
docker container list -a
docker container list -aq

# container
lPATTERN_NAME="c_neo"
docker container list -a  | grep ${lPATTERN_NAME} 
```

# Delete Container
```bash
# All
docker container rm -f $(docker container list -aq)
docker rm -f $(docker container list -aq)
```


# Delete image, container
```powershell
# container
lPATTERN_NAME="c_neo"
docker container list -a  | grep ${lPATTERN_NAME} |  xargs docker rm -f
docker container list -a  | grep ${lPATTERN_NAME} |  xargs docker container rm -f

# image
lPATTERN_NAME="registry.aduneo.com"
docker image     list -a  | grep ${lPATTERN_NAME} |  xargs docker rmi -f
docker image     list -a  | grep ${lPATTERN_NAME} |  xargs docker image rm -f
```

