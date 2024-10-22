# [&larr;][Repo_Readme] Linux > Howto > Other

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

[Anaconda_Howto]:   ../../ai/howto/conda_howto.md


# linux info
```bash
# alpine, ubuntu
cat /etc/os-release
```

# uninstall package on ubuntu
```bash
lPACKAGE_NAME="runc"
sudo apt-get -y autoremove --purge ${lPACKAGE_NAME}
```
# echo string@multi-line to file
```bash
# define var
lFILE_FOLDER="/home/ubuntu/.docker"
lFILE_NAME="config.json"
lFILE_PATH="${lFILE_FOLDER}/${lFILE_NAME}"
#
mkdir ${lFILE_PATH}
cat <<EOT >> ${lFILE_PATH}
EOT
```

# See Also 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>

