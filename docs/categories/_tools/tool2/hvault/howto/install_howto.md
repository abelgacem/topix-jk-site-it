<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md



# [&larr;][Repo_Readme] Vault > Howto > Manage > Install
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
<br>

# Install on 1 Vm
## Method
```bash
# define var
lOS_ARCH="linux_386"    # linux on windows 
lOS_ARCH="darwin_arm64" # mac
lOS_ARCH="linux_arm64"  # linux on mac
lVAULT_VERSION="1.12.3"
lFOLDER_DST="/usr/local/bin"
lFOLDER_SRC="/tmp"
wget -P ${lFOLDER_SRC} "https://releases.hashicorp.com/vault/${lVAULT_VERSION}/vault_${lVAULT_VERSION}_${lOS_ARCH}.zip"
sudo unzip ${lFOLDER_SRC}/vault_${lVAULT_VERSION}_${lOS_ARCH}.zip -d ${lFOLDER_DST}
```

## Method
# Install on ubuntu 22.04
```powershell
# Define var
lPROTO="https"
lIPorDNS="apt.releases.hashicorp.com"
lRES_NAME="gpg"
lRES_PATH="${lPROTO}://${lIPorDNS}/${lRES_NAME}"
lARCH="amd64" # other = arm64
sudo apt install -y gng software-properties-common lsb_core
# add key@gpg
##wget -O-    ${lRES_PATH} | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg
curl -fsSL  ${lRES_PATH} | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null
#curl -fsSL  ${lRES_PATH} | gpg --dearmor  | sudo tee /etc/apt/trusted.gpg.d/haschicorp-packer.gpg > /dev/null
# add os:package:repo
sudo apt-add-repository -y "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main" > /dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt-add-repository -y "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" 

# update os:package:repo
sudo apt update  -qq -y > /dev/null 
# install package:packer
sudo apt-get install packer -y -qq > /dev/null
# Test install
packer
```

```
certificate in /opt/vault/tls
```
