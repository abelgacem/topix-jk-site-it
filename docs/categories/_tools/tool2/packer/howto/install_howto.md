# [&larr;][Repo_Readme]doc > [Packer][Topic_Readme] > [Howto][STopic_List] > manage > Install

[//]: #(Reference)
[Repo_Readme]:   ../../README.md
[Topic_Readme]:  ../README.md
[STopic_List]:   ../list/howto_list.md

[Todo_Whatis]: ./install_howto.md

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Todo|[Definition][Todo_Whatis]|
<br>

# Install on ubuntu 22.04
```powershell
# Define var
lDNSORIP="apt.releases.hashicorp.com"
lURL="https://${lDNSORIP}"
lKEY_FILE="/usr/share/keyrings/hashicorp-archive-keyring.gpg"
lREPO_FILE="/etc/apt/sources.list.d/hashicorp.list"
lARCH="amd64" # other = arm64, x86_64
# get key@gpg
wget -O-    ${lURL}/gpg | gpg --dearmor | sudo tee ${lKEY_FILE} > /dev/null
curl -fsSL  ${lURL}/gpg | gpg --dearmor | sudo tee ${lKEY_FILE} > /dev/null
# create os:package:repo
echo "deb [              signed-by=${lKEY_FILE}] ${lURL} $(lsb_release -cs) main" | sudo tee ${lREPO_FILE} > /dev/null
# install
sudo apt update -qq -y && sudo apt install packer -qq -y
# test
packer
# todo
echo "deb [arch=${lARCH} signed-by=${lKEY_FILE}] ${lURL} $(lsb_release -cs) main" | sudo tee ${lREPO_FILE} > /dev/null
sudo apt install -y software-properties-common gpg 
sudo apt-add-repository -y "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main" > /dev/null
```