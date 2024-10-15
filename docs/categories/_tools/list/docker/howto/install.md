---
mx:  
  lp:
  ref:
    child:
      - os/howto/update
      - ovh/howto/update
---


# [&larr;][Repo_Readme] Docker > Howto > install

# On 1 Vm with os:ubuntu 22.04
## install via ssh
### 1 line code
```bash
lUserSudoName="ubuntu" && lHostRemoteName="o1u" && lLogPathName="/tmp/${lHostRemoteName}.log" && lListPackage="tree docker.io docker-compose" && nohup ssh ${lHostRemoteName} "sudo apt install ${lListPackage} -y && sudo usermod -aG docker ${lUserSudoName} && sudo reboot" > ${lLogPathName} & 
```

### Method
```bash
lHostRemoteName="o1u"
lHostRemoteName="vmw-bastion"
lHostRemoteName="ovhops_front"

lListPackage="tree docker.io docker-compose"
lLogPathName="/tmp/${lHostRemoteName}.log"

lUserSudoName="support"
lUserSudoName="ubuntu"
# Chek value before
ssh ${lHostRemoteName} "uname -a | cut -d' ' -f3 | cut -d'-' -f2"

# Upgrade Os
nohup ssh ${lHostRemoteName} "sudo apt update -y && sudo apt upgrade -y && sudo reboot"  > ${lLogPathName} &

# Chek value after - must be 41
ssh o1u "uname -a | cut -d' ' -f3 | cut -d'-' -f2"

# Install package - ubuntu denote user@sudo on remote
nohup ssh ${lHostRemoteName} "sudo apt install ${lListPackage} -y && sudo usermod -aG docker ${lUserSudoName} && sudo reboot" > ${lLogPathName} &
```

## install Docker

### Method
```bash
# Docker
sudo apt install -y docker.io
# Docker-compose
sudo apt install -y docker-compose
# Grant user@(sudo, current) to play cli:docker
sudo usermod -aG docker $USER
# Reboot - for grant to take effect
sudo reboot
```

### Method
```bash
# define var
lURL_DNSORIP="download.docker.com"
lURL_PATH_01="linux/ubuntu"
lURL_PATH_02="gpg"
lEDITOR="docker"
lKEY_FILE="/usr/share/keyrings/${lEDITOR}-archive-keyring.gpg"
lARCH=$(dpkg --print-architecture)
# update OS

# install key
curl -fsSL https://${lURL_DNSORIP}/${lURL_PATH01}/${lURL_PATH02} | sudo gpg --dearmor -o ${lKEY_FILE}
# install repo
echo "deb [arch=${lARCH} signed-by=${lKEY_FILE}] https://${lURL_DNSORIP}/${lURL_PATH01} $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/{lEDITOR}.list
# install package
sudo apt update -qq -y && sudo apt install -y containerd.io
```


### Method
```bash
# Install package@needed
lListPackage="gnupg software-properties-common"
sudo apt install ${lListPackage} -y
# Install key@gpg - check install with apt-key list
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
# add repo@package
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
# update repo@package
sudo apt update -y
# Update Package:All to version latest
apt upgrade -y
# install package
sudo apt install docker.io -y
# start service & enable at reboot
sudo systemctl enable --now docker
# grant user to use docker
sudo usermod -aG docker ${USER}
```

### Method
```bash
# ssh host
ssh ${lHOST_NAME}

# define var
lURL_DNSORIP="download.docker.com"
lURL_PATH_01="linux/ubuntu"
lURL_PATH_02="gpg"
lEDITOR="docker"
lKEY_FILE="/usr/share/keyrings/${lEDITOR}-archive-keyring.gpg"
lARCH=$(dpkg --print-architecture)


# install gpg key 
curl -fsSL https://${lURL_DNSORIP}/${lURL_PATH_01}/${lURL_PATH_02} | sudo gpg --dearmor -o ${lKEY_FILE}

# install repository
echo "deb [arch=${lARCH} signed-by=${lKEY_FILE}] https://${lURL_DNSORIP}/${lURL_PATH_01} $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/${lEDITOR}.list

# Update repo
sudo apt update -qq -y

# list available version
apt-cache madison docker-ce | awk '{ print $3 }'
apt-cache madison docker-compose-plugin | awk '{ print $3 }'

# install latest version in the list
VERSION_STRING="5:20.10.23~3-0~ubuntu-jammy"
sudo apt update -qq -y && sudo apt-get install docker-ce=${VERSION_STRING} -y && sudo apt-get install docker-compose-plugin -y

# Grant 1 user docker usage
Docker_User="ubuntu"
sudo usermod -aG docker ${Docker_User} && sudo reboot

# check out version installed
# prerequisit: ${lHOST_NAME} is configured with ${Docker_User}
ssh ${lHOST_NAME} 'docker -v'
ssh ${lHOST_NAME} 'docker version'
ssh ${lHOST_NAME} 'docker compose version'

# test install
docker image list
docker compose ls
```


# On 1 Vm with os:rocky 9
## update OS
cf. [Update Os][UopdateOs_Howto]&#8594;


## install Docker

# On 1 docker container from alpine 3.17


# Install Docker-compose on linux/x86_64
```bash
# define var
lIp="github.com"
lResPath="docker/compose/releases/download/1.29.2"
lResName="docker-compose-Linux-x86_64"
lFileDstFolder="/usr/local/bin"
lFileDstName="docker-compose"
lFileDstPath="${lFileDstFolder}/${lFileDstName}"
lUrl="https://${lIp}/${lResPath}/${lResName}"
# Update repo@Package
sudo apt update -y
# Update Package to version latest
sudo apt upgrade -y
# Install
sudo curl -L ${lUrl} -o ${lFileDstPath}
sudo chmod +x ${lFileDstPath}
```
# todo
## Install Docker - Method
```bash
lFileName="docker.list"
lFileFolder="/etc/apt/sources.list.d"
lFilePath="${lFileFolder}/${lFileName}"
lUrl01="https://download.docker.com/linux/ubuntu"
lUrl02="https://download.docker.com/linux/ubuntu/gpg"
echo "deb [arch=amd64] ${lUrl01} ${VERSION_CODENAME} stable" | sudo tee ${lFilePath};
sudo wget --quiet -O - ${lUrl02} | sudo apt-key add -
sudo apt-get update -y;
```

```bash
#ssh ${lHOST_NAME} 'uname -a'
#ssh ${lHOST_NAME} "uname -a | cut -d' ' -f3 | cut -d'-' -f2"
#sudo apt update -qq -y && sudo apt-get install docker-ce=$VERSION_STRING docker-ce-cli=$VERSION_STRING containerd.io docker-compose-plugin
#sudo apt update -qq -y && sudo apt install -y docker.io && sudo apt install -y docker-compose
```


# todo
### Method
```bash
lHostRemoteName="o1u"
lHostRemoteName="vmw-bastion"
lHostRemoteName="ovhops_front"
lListPackage="tree docker.io docker-compose"
lLogPathName="/tmp/${lHostRemoteName}.log"
lUserSudoName="support"
lUserSudoName="ubuntu"
# Chek value before
ssh ${lHostRemoteName} "uname -a | cut -d' ' -f3 | cut -d'-' -f2"

# Upgrade Os
nohup ssh ${lHostRemoteName} "sudo apt update -y && sudo apt upgrade -y && sudo reboot"  > ${lLogPathName} &

# Chek value after - must be 41
ssh o1u "uname -a | cut -d' ' -f3 | cut -d'-' -f2"

# Install package - ubuntu denote user@sudo on remote
nohup ssh ${lHostRemoteName} "sudo apt install ${lListPackage} -y && sudo usermod -aG docker ${lUserSudoName} && sudo reboot" > ${lLogPathName} &

```
### Method
```bash
# Docker
sudo apt install -y docker.io
# Docker-compose
sudo apt install -y docker-compose
# Grant user@(sudo, current) to play cli:docker
sudo usermod -aG docker $USER
# Reboot - for grant to take effect
sudo reboot
```

