---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: O
  ref:
    parent:
      - definition/buildah
---


# Install on Centos7 or Centos8
```bash
dnf install buildah -y -q
```

# Display Info, Help
```bash
buildah version
buildah --version
sudo buildah info
buildah from --help
```

# Operation
```bash
buildah run
buildah run dnf -y install nginx
buildah from scratch
```


# Manage > Image
```bash
# Get
sudo buildah pull alpine:3.13.6
sudo buildah pull centos:centos7
sudo buildah pull centos:centos8
# List
sudo buildah images --all

```
# Manage > Container

## Create > Contrainer > from > image
```bash
# Generic
buildah from --name "mx.imagename" myregistry/myrepository/imagename:imagetag
# List
sudo buildah containers --all
````

# Use Case
```bash
```

# Member
- Runtime

# Type
- Docker
- Buildah


