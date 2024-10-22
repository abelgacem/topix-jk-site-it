<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

# [&larr;][Repo_Readme] Linux > Howto > Update OS

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Docker_Install_Howto]: ../../../doc-it/docker/howto/install_howto.md
[Bashrc_Define_Howto]:  ../../../doc-it/bashrc/README.md
[Ovh_Howto]:            ../../../doc-it/ovh/ovh_howto.md

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Ovh|see|[Howto][Ovh_Howto]|-|
|Docker|see|[Howto][Docker_Install_Howto] install|-|
|Bashrc|see|[Howto][Bashrc_Define_Howto] define content|define an rc file - **not specific to bash**|


# update os:ubuntu 22.04 Remotely via ssh

## 1 line code
```bash
# upgrade os core packages
lHOST_NAME="o1u" && lLOG_PATH="/tmp/${lHOST_NAME}.log" && nohup ssh ${lHOST_NAME} "sudo apt update -y && sudo apt upgrade -y && sudo reboot"  > ${lLOG_PATH} &
```

## display information on os installed
```bash
# prerequisit
## the ssh:client is configured via fle:~/.ssh/config
## ${Ssh_Server_User} is sudo
lHOST_NAME="o1u"
ssh ${lHOST_NAME} "uname -r"  # os:kernel:release
```

## check upgrade progression
```bash
tail -f ${lLOG_PATH}
```

## check upgrade is done
```bash
# check kernel release - or check reboot has occured
ssh ${lHOST_NAME} "uname -r"  # os:kernel:release
```
# update os:ubuntu 22.04 localy
```bash
# check os:name
lsb_release -a

# check os:kernel:version
uname -r

# update apt:repository && update os:package:verion to latest && reboot
sudo apt update -y && sudo apt upgrade -y && sudo reboot
```


# update os:rocky 9
## localy
```bash
sudo dnf update -y  && sudo reboot
```

## Remotely via ssh

### display information on os installed
```bash
# prerequisit
## the ssh:client is configured via fle:~/.ssh/config
## ${Ssh_Server_User} is sudo
lHOST_NAME="o2r"
ssh ${lHOST_NAME} 'uname -a'
```
### upgrade os core packages
```bash
lLogPathName="/tmp/${lHOST_NAME}.log"
nohup ssh ${lHOST_NAME} "sudo dnf update -y && sudo reboot"  > ${lLogPathName} &
```

### check upgrade progression
```bash
tail -f ${lLogPathName}
```

### check upgrade is done
```bash
# check core version - or check reboot has happen
ssh ${lHOST_NAME} 'uname -a'
```


# update os:alpine 
```bash

```