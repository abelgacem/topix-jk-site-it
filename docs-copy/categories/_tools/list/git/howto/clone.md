---
mx:  
---


# Clone 1 repository in 1 folder with original name
```bash
# use option: -C to play the cde as if you are in the folder
git -C /tmp clone https://xxx:yyy@gitlab.com/glabtit/library.git
```

# Clone 1 repository
```bash
# var@common
export GIT_TOKEN="xx"
export GIT_URL="gitlab.factory.cloud.mymoneybank.fr"

# example
export GIT_FOLDER="mmb/mecanismes-generaux/outillage/scheduling/dags"
export GIT_REPO_NAME="dags-ccf-batch"

# example
export GIT_FOLDER="mmb/ccf/gestion-cre/"
export GIT_REPO_NAME="mit1-site"

# action: clone repo
git clone https://xx:${GIT_TOKEN}@${GIT_URL}/${GIT_FOLDER}/${GIT_REPO_NAME}.git

# clone the content in the current folder
git clone https://gitlab.com/glabtit/project/prj-hugo/content/skeleton.git .

# clone the content in the folder skeleton
git clone https://gitlab.com/glabtit/project/prj-hugo/content/skeleton.git
```
