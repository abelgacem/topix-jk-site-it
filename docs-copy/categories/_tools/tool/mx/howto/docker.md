---
draft : true
mx:  
  lp:
  ref:
    child:
      - definition/docker
---

# inspect only mount
```bash
mx docker image list
```powershell
# inspect container mounts
docker inspect 47 | jq '.[0].Mounts' | nl
```

# list the images
```bash
mx docker image list
```

# list the containers
```bash
mx docker container list
```

# create an image
## generic actions
- update the file :  `libm.docker.image.sh`
- update the changes:  `. Path/To/lib-bash/mx.sh`
- create the image
  ```bash
  mx docker image build
  ```
## create an image of type OS
- update var **sLIST_OS_MANAGED** in the file  `libm.docker.image.sh`
- update the changes:
- create the image
  ```bash
  mx docker image build
  ```
## create an image of type PYTHON
- update var **sLIST_PYTHON_MANAGED** in the file  `libm.docker.image.sh`
- update the changes:
- create the image
  ```bash
  mx docker image build
  ```
## create an image of type OTHER
- update var **sLIST_IMAGE_MANAGED** in the file  `libm.docker.image.sh`
- update the changes:
- create the image
  ```bash
  mx docker image build
  ```

# Create a container from an image

# Create an application from severals images

# Enter a container
