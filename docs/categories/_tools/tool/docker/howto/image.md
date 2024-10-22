---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:
  ref:
    child:
      - definition/image
      - howto/install
---

# Pull image
```bash
docker pull --platform linux/amd64 apache/airflow:1.10.15
docker pull --platform linux/arm64/v8 apache/airflow:1.10.15

```


# List
```bash
# image@dangling
docker images -f       "dangling=true"
docker images --filter "dangling=true"
docker images -f       "dangling=true"  -q --no-trunc

# image built before
docker images -f "before=ubuntu"
# image built after
docker images -f "since=ubuntu"
# image using regexp
docker images -f "reference='m*'"
```

## Filter
```bash
docker image ls -a | grep "mxi/.*/aws"
docker image ls -a --format {{.Repository}} | tr -s ' ' | grep "mxi/.*/aws^"
```

# create 1 file@tgz from 1..N images
```powershell
lIMAGE_01="registry.aduneo.com/client-dinum/dinum-jason:00.00.00.00"
lIMAGE_02="registry.aduneo.com/client-dinum/dinum-neopage:01.00.00.00"
lIMAGE_03="registry.aduneo.com/aduneo-docker/backup-images/nginx:1.22.0-alpine"

lFILE_NAME="i.docker.neopage"
lFILE_FOLDER="/tmp/neopage"
lFILE_PATH="${lFILE_FOLDER}/${lFILE_NAME}"


docker save lIMAGE_01 lIMAGE_02 lIMAGE_03 -o ${lFILE_PATH}
docker save lIMAGE_01 lIMAGE_02 lIMAGE_03 >  ${lFILE_PATH}
cd ${lFILE_FOLDER}
tar cvzf ${lFILE_NAME}.tgz ${lFILE_NAME}
```
# Create image

## from container@running
```bash
lCONTAINER_NAME="cdevops"
lIMAGE_NAME="mxi/devops-git:ubuntu"
lIMAGE_NAME="mxi/devops:ubuntu"
lIMAGE_NAME="mxi/ubuntu:dind"
# Create image @untagged
docker commit ${lCONTAINER_NAME} ${lIMAGE_NAME}
```

## image@(docker local) from targz 

```bash
# Method
lTARGZ_FULLPATH="/var/tmp/mxi-neopage.tgz"
docker load < ${lTARGZ_FULLPATH}  
# Method
tar -xvzf  ${lDST_FILE}.tgz 
docker load < ${lDST_FILE}
docker load -i ${lDST_FILE}
```

## from dockerfile
```powershell
# defione var
lIMAGE_REGISTRY="mxi"
lIMAGE_REGISTRY_PATH="dev"
lIMAGE_NAME="ubuntu"
lIMAGE_TAG="22.04"
lIMAGE_PATH="${lIMAGE_REGISTRY}/${lIMAGE_REGISTRY_PATH}/${lIMAGE_NAME}:${lIMAGE_TAG}"
#
docker build -t ${lIMAGE_PATH} .
```

## from 1 file@tgz
```powershell
# the targz can contains 1..N image
docker load <  ${lFILE_NAME}
docker load -i ${lFILE_NAME}
```

# delete
```bash
# image:all
docker image rm -f     $(docker container list -aq)

# image@dangling
docker image rm $(docker images -f "dangling=true")
docker rmi $(docker images -f dangling=true -q)
# image with pattern
## method
pattern="ansible"
pattern="tmp"
docker image list -a | grep ${pattern} | xargs docker image rm -f 
## method
docker image list --format '{{.Repository}}:{{.Tag}}' | grep ${pattern} | xargs docker rmi
# Be carefull
docker image prune -af


```
## [all | only] Image@none 

```bash
# Method
docker image rm -f  $(docker images -f dangling=true -q)
# Method
docker rmi $(docker images -f dangling=true -q)
```

# tag image@local
```powershell
# define var
lIMAGE_SRC_REGISTRY="mxi"
lIMAGE_DST_REGISTRY="registry.gitlab.com/glabtit/image"
lIMAGE_REGISTRY_PATH="dev"
lIMAGE_NAME="aws"
lIMAGE_TAG="ubuntu"
lIMAGE_SRC_PATH="${lIMAGE_SRC_REGISTRY}/${lIMAGE_REGISTRY_PATH}/${lIMAGE_NAME}:${lIMAGE_TAG}"
lIMAGE_DST_PATH="${lIMAGE_DST_REGISTRY}/${lIMAGE_REGISTRY_PATH}/${lIMAGE_NAME}:${lIMAGE_TAG}"
#
docker tag ${lIMAGE_SRC_PATH} ${lIMAGE_DST_PATH}
```
# Create targz from image@(docker local)
## Method
```bash
lIMAGE_NAME="docker-registry.maq.aduneo.com/neopage"
lIMAGE_TAG="latest"
lTARGZ_FULLPATH="/tmp/mxi-neopage.tgz"

lIMAGE_NAME="nginx"
lIMAGE_TAG="latest"
lTARGZ_FULLPATH="/tmp/mxi-nginx.tgz"

lIMAGE_NAME="tomcat"
lIMAGE_TAG="9.0-jdk8-adoptopenjdk-openj9"
lTARGZ_FULLPATH="/tmp/mxi-tomcat.tgz"

lIMAGE_FULLNAME="${lIMAGE_NAME}:${lIMAGE_TAG}" 
docker save -o ${lTARGZ_FULLPATH} ${lIMAGE_FULLNAME} 
```
## Method
```bash
lIMG_01="registry.aduneo.com/client-dinum/dinum-jason"
lIMG_02="registry.aduneo.com/client-dinum/dinum-neopage"
lIMG_03="registry.aduneo.com/aduneo-docker/backup-images/nginx"
lDST_FILE="image.aduneo"
docker save ${lIMG_01} ${lIMG_02} ${lIMG_03}  > ${lDST_FILE}
tar -cvzf ${lDST_FILE}.tgz ${lDST_FILE}
```

# Pull
```bash
#Define var
lREGISTRY_HOST="registry.gitlab.com" 
lREGISTRY_PATH="glabtit/image/dev" 
lIMAGE_NAME="aws" 
lIMAGE_PATH="" 
lIMAGE_TAG="ubuntu" 
#
docker pull ${lREGISTRY_HOST}/${lREGISTRY_PATH}/${lIMAGE_PATH}/${lIMAGE_NAME}:${lIMAGE_TAG}
docker pull registry.gitlab.com/glabtit/image/dev/aws:ubuntu
```
# Push
```bash
#Define var
lREGISTRY_HOST="registry.gitlab.com" 
lREGISTRY_PATH="glabtit/image/dev" 
lIMAGE_NAME="aws" 
lIMAGE_PATH="" 
lIMAGE_TAG="ubuntu" 
#
docker pull ${lREGISTRY_HOST}/${lREGISTRY_PATH}/${lIMAGE_PATH}/${lIMAGE_NAME}:${lIMAGE_TAG}
docker pull registry.gitlab.com/glabtit/image/dev/aws:ubuntu
