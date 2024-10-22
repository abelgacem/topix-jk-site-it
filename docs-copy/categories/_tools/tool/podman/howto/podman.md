---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: O
  ref:
    child:
      - defin ition/podman
    parent:
      - buildah/howto/buildah
---

# Install
```bash
## Centos7
sudo yum install podman -y -q

## Ubuntu 20.10
sudo apt-get install -qq -y podman

# Install > on > ubuntu 20.04
RepoName="podman.list"
UbuntuVersion=$(lsb_release -rs)
Url="download.opensuse.org"
echo 'deb http://${Url}/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${UbuntuVersion}/ /' > ${RepoName}
wget -nv https://${Url}/repositories/devel:kubic:libcontainers:stable/xUbuntu_${UbuntuVersion}/Release.key -O- | sudo apt-key add -
$ sudo apt-get update -qq
$ sudo apt-get -qq --yes install podman
```

# Use > Podman > As > User.NotSudo
```bash
# Get > User:Id
id -u $(whoami)

# Display Mapping Between Hiost:Uid and Container:Uid
podman unshare cat /proc/self/uid_map

# Display Mapping Between Hiost:Gid and Container:Gid
podman unshare cat /proc/self/gid_map


```


# Cli

|Param|Object|Verb|View|Description|
|--|--|--|--|--|
||
||**Container**|
||
|container|Container|Manage||   Manage Containers
|create|Container|Create||      Create but do not start a container
|rm|Container|Delete||          Remove one or more containers
|ps|Container|List||          List containers
|init|Container|Initialize||        Initialize one or more containers
|start|Container|Start||       Start one or more containers
|restart|Container|Start||     Restart one or more containers
|exec|Container:Process|Run||        Run a process in a running container
|run|Container:Cli|Run||         Run a command in a new container
|stop|Container|Stop||        Stop one or more containers
|wait|Container|Block||        Block on one or more containers
|kill|Container|Kill||        Kill one or more running containers with a specific signal
|attach|Container|-||      Attach to a running container
|mount|Container||-|       Mount a working container's root filesystem
|stats|Container|-||       Display a live stream of container resource usage statistics
|umount|Container|-||      Unmounts working container's root filesystem
|unpause|Container|-||     Unpause the processes in one or more containers
|cp|Container:File|Copy||          Copy files/folders between a container and the local filesystem
|diff|Container:File|Inspect||        Inspect changes on container's file systems
|export|Container:Fs|Export||      Export container's filesystem contents as a tar archive
|logs|Container:Log|-||        Fetch the logs of a container
|pause|Container:Process|-||       Pause all the processes in one or more containers
|port|Container:Port|List||        List port mappings or a specific mapping for the container
|top|Container:Process|List||         Display the running processes of a container
|commit|-|||      Create new image based on the changed container
||
||**Image**|
||
|image|Image|Manage||       Manage images
|build|Image|Create||      Build an image using instructions from Containerfiles
|rmi|Image|Delete||         Removes one or more images from local storage
|images|Image|List||      List images in local storage
|pull|Image|Pull||        Pull an image from a registry
|push|Image|Push||        Push an image to a specified destination
|save|Image|Tar||        Save image to an archive
|search|Image|-||      Search registry for image
|history|Image:History|-||     Show history of a specified image
|import|Image:Fs|-||      Import a tarball to create a filesystem image
|tag|Image:Name|Add||         Add an additional name to a local image
||
||**Network**|
||
|network|Network|Manage||    Manage Networks
||
||**Volume**|
||
|volume|Volume|Manage||      Manage volumes
||
||**Pod**|
||
|play|Pod|Run||        Play a pod
|pod|Pod|Manage||         Manage pods
||
||**Info**|
||
|help|Info|-||        Help about any command
|info|Info|-||        Display podman system information
|version|Info|-||     Display the Podman Version Information
||
||**Other**|
||
|events|-|-||      Show podman events
|generate|-|-||    Generated structured data
|healthcheck|-|-|| Manage Healthcheck
|inspect|-|-||     Display the configuration of a container or image
|load|-|-||        Load an image from container archive
|login|-|-||       Login to a container registry
|logout|-|-||      Logout of a container registry
|system|-|-||      Manage podman
|unshare|-|-||     Run a command in a modified user namespace
|varlink|-|-||     Run varlink interface
<br>

# Help, Info

|Param|Object|Verb|View|Description|
|--|--|--|--|--|
|help|Info|-||        Help about any command
|info|Info|-||        Display podman system information
|version|Info|-||     Display the Podman Version Information
<br>

```bash
sudo podman info --debug
podman --help
```
# Folder
- /var/lib/containers (instead of Docker:/var/lib/docker)
- ~/.local/share/containers



# Manage Volume
|Param|Object|Verb|View|Description|
|--|--|--|--|--|
|volume|Volume|Manage||      Manage volumes
<br>

# Manage Network
|Param|Object|Verb|View|Description|
|--|--|--|--|--|
|network|Network|Manage||    Manage Networks
<br>


# Manage K8s
```bash
podman generate kube
podman pod ...
```

# Manage > Image
## Create > Image > from > Dockerfile
```bash
# 
podman build 
```



# Manage Other
|Param|Object|Verb|View|Description|
|--|--|--|--|--|
|events|-|-||      Show podman events
|generate|-|-||    Generated structured data
|healthcheck|-|-|| Manage Healthcheck
|inspect|-|-||     Display the configuration of a container or image
|load|-|-||        Load an image from container archive
|login|-|-||       Login to a container registry
|logout|-|-||      Logout of a container registry
|system|-|-||      Manage podman
|unshare|-|-||     Run a command in a modified user namespace
|varlink|-|-||     Run varlink interface
<br>



# Todo
```bash
podman pull|push|build|run|commit|tag
podman rm -a
podman rmi -a
podman pull fedora:latest
podman run -it fedora bash
podman push myfedora quay.io/myquayid/myfedora:latest
```

# Cli
```bash
# List > Container.All
podman ps --all --storage

# Delete > Container.All
podman rm --storage
```

# Example
```bash
# List > Container:Process
podman top <container_id>
```

# Install
```bash
## Centos7
sudo yum install podman -y -q

## Ubuntu 20.10
sudo apt-get install -qq -y podman

# Install > on > ubuntu 20.04
RepoName="podman.list"
UbuntuVersion=$(lsb_release -rs)
Url="download.opensuse.org"
echo 'deb http://${Url}/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${UbuntuVersion}/ /' > ${RepoName}
wget -nv https://${Url}/repositories/devel:kubic:libcontainers:stable/xUbuntu_${UbuntuVersion}/Release.key -O- | sudo apt-key add -
$ sudo apt-get update -qq
$ sudo apt-get -qq --yes install podman
```

# Use > Podman > As > User.NotSudo
```bash
# Get > User:Id
id -u $(whoami)

# Display Mapping Between Hiost:Uid and Container:Uid
podman unshare cat /proc/self/uid_map

# Display Mapping Between Hiost:Gid and Container:Gid
podman unshare cat /proc/self/gid_map


```


# Cli

|Param|Object|Verb|View|Description|
|--|--|--|--|--|
||
||**Container**|
||
|container|Container|Manage||   Manage Containers
|create|Container|Create||      Create but do not start a container
|rm|Container|Delete||          Remove one or more containers
|ps|Container|List||          List containers
|init|Container|Initialize||        Initialize one or more containers
|start|Container|Start||       Start one or more containers
|restart|Container|Start||     Restart one or more containers
|exec|Container:Process|Run||        Run a process in a running container
|run|Container:Cli|Run||         Run a command in a new container
|stop|Container|Stop||        Stop one or more containers
|wait|Container|Block||        Block on one or more containers
|kill|Container|Kill||        Kill one or more running containers with a specific signal
|attach|Container|-||      Attach to a running container
|mount|Container||-|       Mount a working container's root filesystem
|stats|Container|-||       Display a live stream of container resource usage statistics
|umount|Container|-||      Unmounts working container's root filesystem
|unpause|Container|-||     Unpause the processes in one or more containers
|cp|Container:File|Copy||          Copy files/folders between a container and the local filesystem
|diff|Container:File|Inspect||        Inspect changes on container's file systems
|export|Container:Fs|Export||      Export container's filesystem contents as a tar archive
|logs|Container:Log|-||        Fetch the logs of a container
|pause|Container:Process|-||       Pause all the processes in one or more containers
|port|Container:Port|List||        List port mappings or a specific mapping for the container
|top|Container:Process|List||         Display the running processes of a container
|commit|-|||      Create new image based on the changed container
||
||**Image**|
||
|image|Image|Manage||       Manage images
|build|Image|Create||      Build an image using instructions from Containerfiles
|rmi|Image|Delete||         Removes one or more images from local storage
|images|Image|List||      List images in local storage
|pull|Image|Pull||        Pull an image from a registry
|push|Image|Push||        Push an image to a specified destination
|save|Image|Tar||        Save image to an archive
|search|Image|-||      Search registry for image
|history|Image:History|-||     Show history of a specified image
|import|Image:Fs|-||      Import a tarball to create a filesystem image
|tag|Image:Name|Add||         Add an additional name to a local image
||
||**Network**|
||
|network|Network|Manage||    Manage Networks
||
||**Volume**|
||
|volume|Volume|Manage||      Manage volumes
||
||**Pod**|
||
|play|Pod|Run||        Play a pod
|pod|Pod|Manage||         Manage pods
||
||**Info**|
||
|help|Info|-||        Help about any command
|info|Info|-||        Display podman system information
|version|Info|-||     Display the Podman Version Information
||
||**Other**|
||
|events|-|-||      Show podman events
|generate|-|-||    Generated structured data
|healthcheck|-|-|| Manage Healthcheck
|inspect|-|-||     Display the configuration of a container or image
|load|-|-||        Load an image from container archive
|login|-|-||       Login to a container registry
|logout|-|-||      Logout of a container registry
|system|-|-||      Manage podman
|unshare|-|-||     Run a command in a modified user namespace
|varlink|-|-||     Run varlink interface
<br>

# Help, Info

|Param|Object|Verb|View|Description|
|--|--|--|--|--|
|help|Info|-||        Help about any command
|info|Info|-||        Display podman system information
|version|Info|-||     Display the Podman Version Information
<br>

```bash
sudo podman info --debug
podman --help
```
# Folder
- /var/lib/containers (instead of Docker:/var/lib/docker)
- ~/.local/share/containers



# Manage Volume
|Param|Object|Verb|View|Description|
|--|--|--|--|--|
|volume|Volume|Manage||      Manage volumes
<br>

# Manage Network
|Param|Object|Verb|View|Description|
|--|--|--|--|--|
|network|Network|Manage||    Manage Networks
<br>


# Manage K8s
```bash
podman generate kube
podman pod ...
```

# Manage > Image
## Create > Image > from > Dockerfile
```bash
# 
podman build 
```



# Manage Other
|Param|Object|Verb|View|Description|
|--|--|--|--|--|
|events|-|-||      Show podman events
|generate|-|-||    Generated structured data
|healthcheck|-|-|| Manage Healthcheck
|inspect|-|-||     Display the configuration of a container or image
|load|-|-||        Load an image from container archive
|login|-|-||       Login to a container registry
|logout|-|-||      Logout of a container registry
|system|-|-||      Manage podman
|unshare|-|-||     Run a command in a modified user namespace
|varlink|-|-||     Run varlink interface
<br>



# Todo
```bash
podman pull|push|build|run|commit|tag
podman rm -a
podman rmi -a
podman pull fedora:latest
podman run -it fedora bash
podman push myfedora quay.io/myquayid/myfedora:latest
```

