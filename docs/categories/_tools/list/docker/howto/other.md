---
draft : true
mx:  
  lp:
  ref:
    - child: definition/port
---


# Copy several files
```shell
lCONTAINER_ID="7e"
lHOST_FILES_PATTERN="/Users/max/wkspc/git/abtit/library2/lib-bash/libm.hugo.*"
for file in ${lHOST_FILES_PATTERN}; do docker cp $file ${lCONTAINER_ID}:/tmp; done
```

# list images filtered by label
```bash
# list images having this key
docker images --filter "label=com.example.version"
# list images having a value for a key
docker images --filter "label=com.mx.type=golden=xxx"

```
# ptf specific image with mac m1
```bash
docker buildx build --platform=linux/amd64 -t myorg/mytag:1.0.0 .
```

# allow 1 container to access host:services
```bash
docker run -d --add-host host.docker.internal:host-gateway mycontainer
```


# Allow to control docker@remote
## Method
```bash
# create context to connest to remote docker daemon
docker context create --docker host=ssh://max@host.docker.internal --description="Remote engine" mx-docker-remote
# allow docker client to use this context
docker context use mx-docker-remote
# 
docker info
docker container list
# Switch back to default(local) daemon
docker context use default
```
## Method
```bash
# create varenc
export DOCKER_HOST=ssh://docker-user@host1.example.com
# 
docker info
docker container list
```
