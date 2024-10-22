<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/cli_list.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH > Cli > Howto > use > ssh-keyscan
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
<br>



# Display info
```bash
# get host@remote fingerprint (ie. key@pub)
lHOST_DNSOIP="51.210.10.195"
ssh-keyscan -H ${lHOST_DNSOIP} >> ~/.ssh/known_hosts
```

# Example
```bash
ssh $lHOST_NAME "echo export FOLDER_GIT_ABTIT=~/wkspc/git/abtit >> ${lFILE_PATH}"
ssh $lHOST_NAME "echo mkdir -p \\\$FOLDER_GIT_ABTIT             >> ${lFILE_PATH}"
ssh $lHOST_NAME "echo cd \\\$FOLDER_GIT_ABTIT/image             >> ${lFILE_PATH}"
ssh $lHOST_NAME "echo git checkout develop                      >> ${lFILE_PATH}"
ssh $lHOST_NAME "echo . \\\$FOLDER_GIT_ABTIT/image/container/dockerfile/cli/lm.docker.sh >> ${lFILE_PATH}"
ssh $lHOST_NAME "echo cd                                        >> ${lFILE_PATH}"

```