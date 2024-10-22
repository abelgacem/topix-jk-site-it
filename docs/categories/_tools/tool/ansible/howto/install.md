---
draft : true
mx:  
  ref:
    child:
      - howto/pip
---


# cf.
pip

# Install on ubuntu 22.04
```powershell
lPACKAGE_OS_LIST="python3-pip python3-argcomplete"
lPACKAGE_PYTHON_LIST="ansible"
sudo apt update -y
sudo apt install -qq -y ${lPACKAGE_OS_LIST} > /dev/null
sudo pip install        ${lPACKAGE_PYTHON_LIST}
```

# Install module openstack
```bash
lPACKAGE_PYTHON_LIST="openstacksdk"
lPACKAGE_ANSIBLE_LIST="openstack.cloud"
# action
sudo pip install        ${lPACKAGE_PYTHON_LIST}
ansible-galaxy collection install ${lPACKAGE_ANSIBLE_LIST
```

# On Alpine
```bash
apk add --no-cache ansible
```
# On Ubuntu
```bash
apt install -y python3-pip
pip3 install ansible
pip3 install ansible==2.9.2
```
# On MobaXterm
```powershell
# Define Var
Url="https://github.com/ownport/portable-ansible/releases/download"
Version="v0.5.0"
App="portable-ansible-${Version}-py3.tar.bz2"
DstFolder="/home/mobaxterm/MyDocuments/MxRoot/MxApp/"
AppName="ansible.tar.bz2"

# Action
cd /tmp
wget ${Url}/${Version}/${App} --no-check-certificate -O ${AppName} 

# Deploy
tar -xjf /tmp/${AppName} -C ${DstFolder}
mv ${DstFolder}/ansible ${DstFolder}/MxAnsible

# Post Install
## Install Python
apt-get install -y python3
python3 --version
## Install Python Packager
cd /bin
ln -s ./pip3.6 ./pip
pip3 --version
## Define Path to Lib.Python of Ansible
export PYTHONPATH="${DstFolder}/MxAnsible"
## Define Link
ln -s /home/mobaxterm/MyDocuments/MxRoot/MxApp/MxAnsible/bin/ansible


# Install Lib for VMware
pip install pyvmomi
# Install Lib for WinRM
apt-get install -y gcc-core
pip install pywinrm
```



# Install on any Os:Linux
|StepId|Verb|Noun|Description|
|--|--|--|--|
|[01](#01)|Install|Python On Os||
|[02](#02)|Install|Pip On Os||
|[02](#03)|Install|Ansible with Pip||

## <a id="01"></a> Step01 
```bash
# On centos v7
# On alpine v3.13.5
# On debian v10
```
## <a id="02"></a> Step02
```bash
# On alpine v3.13.5
pip install 
```
## <a id="03"></a> Step03
```bash
pip install ansible
```
