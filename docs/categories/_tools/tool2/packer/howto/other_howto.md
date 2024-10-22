# [&larr;][Repo_Readme]doc > [Packer][Topic_Readme] > [Howto][STopic_List] > manage > Other

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

## Play build

```powershell
# Example
cd /home/ubuntu/debug/git/docker/golden/ubuntu/tmp01
lVAR_FILE_01="/home/ubuntu/debug/git/docker/var.def.pkrvars.hcl"
lVAR_FILE_02="/home/ubuntu/debug/git/docker/ubuntu/var.def.pkrvars.hcl"
packer build -var-file ${lVAR_FILE_01} -var-file ${lVAR_FILE_02} .
```
