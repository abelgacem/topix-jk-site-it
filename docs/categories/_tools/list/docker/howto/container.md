---
mx:  
  lp:
  ref:
    child: 
      - definition/container
---



# Delete

```bash
# container:all
docker container stop  $(docker container list -aq)
docker container rm    $(docker container list -aq)√
docker container rm -f $(docker container list -aq)
#
docker container list --quiet | xargs docker container rm -f

```
# List

```bash
# container|image
docker container|image list -a
# container|image:Id
docker container|image list -aq
```


# Create container from image
```bash
# Define var
lIMAGE_NAME="mxi/ubuntu:22.04"

# Do not > Play > file > .bashrc
docker run -it \
${lIMAGE_NAME}

# Play > file > .bashrc
docker run -it \
${lIMAGE_NAME} -c /bin/bash

# Play > infinite loop to stay alive cause no daemon is running
docker run -d --name cubuntu \
${lIMAGE_NAME} sleep infinity

```

# Create 1 container@noservice from image
```bash
lCONTAINER_NAME="cdevops"
lIMAGE_NAME="mxi/devops:ubuntu"
docker run --detach --name ${lCONTAINER_NAME} ${lIMAGE_NAME} -c "/usr/bin/sleep infinity"
docker run --detach --name ${lCONTAINER_NAME} ${lIMAGE_NAME} -c "sleep infinity"
```

# Enter into 1 Container
## from container@exist
```bash
lCONTAINER_NAME="cdevops"
docker exec -it ${lCONTAINER_NAME} /bin/bash -l
```

## Enter 1 container
```bash
lIMAGE_DOCKER_NAME="ubuntu:jammy"
lCONTAINER_DOCKER_NAME="mxc_ubuntu_2204"
docker container run -d --name ${lCONTAINER_DOCKER_NAME} ${lIMAGE_DOCKER_NAME}
docker exec -it ${lCONTAINER_DOCKER_NAME} /bin/bash -l
```

## from image
```bash
lIMAGE_ID="408a43fb7204"
docker run -it ${lIMAGE_ID}
```

## Start container
```bash
docker exec -it cairflow /bin/bash -c "su - lisa"
docker run -d --name cairflow mxi/airflow:python sleep infinity
```