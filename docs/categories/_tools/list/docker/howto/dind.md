---
mx:  
  lp:
  ref:
    child: 
      - definition/dind
---

# Get version of docker:engine
```powershell
# on host running docker
curl --unix-socket /var/run/docker.sock http://localhost/version
```
# Create 1 image with docker inside
- create 1 container
- install docker, docker-compose, acl inside the container
- instanciate 1 container from image
```powershell
# the docker client connect to VM:docker-engine through docker.sock
docker run  \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -it docker
# inside container - set ACL on shared socket
sudo setfacl -m u:dockadm:rw /var/run/docker.sock  
# when finish - remove the acl
sudo setfacl -b /var/run/docker.sock  
```

