<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md
[Gitlab_Whatis]:  ../whatis/gitlab_whatis.md

# [&larr;][Repo_Readme]Project > Orlando > Howto > use > Gitlab
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Gitlab|see|[Definition][Gitlab_Whatis]|
<br>

# Clone 1 repository
```bash
# var@common
export GIT_TOKEN="KD99tmBPUBKxrEApbW5N"
export GIT_URL="gitlab.factory.cloud.mymoneybank.fr"

# example
export GIT_FOLDER="mmb/mecanismes-generaux/outillage/scheduling/dags"
export GIT_REPO_NAME="dags-ccf-batch"

# example
export GIT_FOLDER="mmb/ccf/gestion-cre/"
export GIT_REPO_NAME="mit1-site"

# action: clone repo
git clone https://xx:${GIT_TOKEN}@${GIT_URL}/${GIT_FOLDER}/${GIT_REPO_NAME}.git
```


## export in .bashrc
```bash
export gGIT_AT_ABTIT_GIT="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"
export gGIT_AT_ABTIT_GITLAB="glpat-w_nUeuzdzXiiZutEQfnc"
export gGIT_AT_FM="glpat-qsCF-9H9LDTZ-xpaxd42"
export gGIT_AT_ADUNEO="glpat-EnzrUH_ipK-N7QSoavch"
```
## usage

```bash
#  Geberic
git clone https://xx:${GIT_TOKEN}@${GIT_URL}/${GIT_FOLDER}/${GIT_REPO_NAME}.git

#  Example
git clone https://xx:${gGIT_AT_ABTIT_GIT}@github.com/abelgacem/snc.git
git clone https://xx:${gGIT_AT_ABTIT_GITLAB}@gitlab.com/glabtit/library/docker/dockerfile.git
git clone https://xx:${gGIT_AT_ABTIT_GITLAB}@gitlab.com/glabtit/library/docker/dockerfile.git
git clone https://xx:${gGIT_AT_ABTIT_GITLAB}@gitlab.com/glabtit/test/copycat/std/std01.git
git clone https://xx:${gGIT_AT_ABTIT_GITLAB}@gitlab.com/glabtit/test/copycat/std/std01.git
```
${gGIT_AT_ABTIT_GITLAB}

[//]: #(Reference)
