<head><link rel="stylesheet" href="../../md.css"/></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md

[Os_Install_Howto]:   ../../doc-it/linux/howto/update_howto.md
[Ovh_Howto]:          ../../doc-it/ovh/ovh_howto.md


# [&larr;][Repo_Readme]Domain > Computer Science > Bashrc file

# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Os|pre|[Howto][Os_Install_Howto] install|
|Ovh|see|[Howto][Ovh_Howto]|-|
<br>

# Content for a remote custom bashrc  via ssh

|Seq|Task|idempotent
|-|-|-|
|01|update rc file **once**|no 
|02|define content of rcfile@custom|n/a
|03|copy rcfile@custom to destination|yes

# update rc file once
```bash
# define var
lHOST_REMOTE_NAME="o1u"

# task
ssh ${lHOST_REMOTE_NAME} "echo '. .bashrc.custom' >> .bashrc"
```

# copy file to dest
```bash
# define var
lHOST_REMOTE_NAME="o1u"

# task
ssh ${lHOST_REMOTE_NAME} "echo '${lCONTENT}' > ~/.bashrc.custom"
```

# content of rcfile@custom
## Example 
```bash
# define var
## simple quote are important in var
lCONTENT='
# file .bashrc.custom
## add line . .bashrc.custom in .bashrc

# define var  - idempotent
sgUSER_WKSPC="${HOME}/wkspc"
sgGIT_FOLDER="${sgUSER_WKSPC}/git"
sgGIT_ABTIT_FOLDER="${sgGIT_FOLDER}/abtit"

sgGIT_REPO_LIBRARY_NAME="library"
sgGIT_REPO_LIBRARY_WEB_PATH="gitlab.com/glabtit/${sgGIT_REPO_LIBRARY_NAME}.git"
sgGIT_REPO_LIBRARY_LOCAL_PATH="${sgGIT_ABTIT_FOLDER}/${sgGIT_REPO_LIBRARY_NAME}"

sgGIT_REPO_IMAGE_NAME="image"
sgGIT_REPO_IMAGE_WEB_PATH="gitlab.com/glabtit/${sgGIT_REPO_IMAGE_NAME}.git"
sgGIT_REPO_IMAGE_LOCAL_PATH="${sgGIT_ABTIT_FOLDER}/${sgGIT_REPO_IMAGE_NAME}"

# creat folder - idempotent
mkdir -p ${sgUSER_WKSPC}
  mkdir -p ${sgGIT_ABTIT_FOLDER}

# clone repo when - folder not exists AND - ${tGIT_TOKEN} exists (ie. exits in env)
[ ! -d ${sgGIT_REPO_LIBRARY_LOCAL_PATH} ] && [ -n "${teGIT_TOKEN}" ] && {  
  git -C ${sgGIT_ABTIT_FOLDER} clone https://xxx:${teGIT_TOKEN}@${sgGIT_REPO_LIBRARY_WEB_PATH}
  cd ${sgGIT_REPO_LIBRARY_LOCAL_PATH}
  git config user.email "amarbelgacem@hotmail.fr"
  git config user.name "Amar BELGACEM"
}

# # clone repo when - folder not exists AND - ${tGIT_TOKEN} exists (ie. exits in env)
# [ ! -d ${sgGIT_REPO_IMAGE_LOCAL_PATH} ] && [ -n "${teGIT_TOKEN}" ] && {  
#   git -C ${sgGIT_ABTIT_FOLDER} clone https://xxx:${teGIT_TOKEN}@${sgGIT_REPO_IMAGE_WEB_PATH}
#   cd ${sgGIT_REPO_IMAGE_LOCAL_PATH}
#   git config user.email "amarbelgacem@hotmail.fr"
#   git config user.name "Amar BELGACEM"
# }
cd
# source file if exits
[ -d ${sgGIT_REPO_LIBRARY_LOCAL_PATH} ] && . ${sgGIT_REPO_LIBRARY_LOCAL_PATH}/dockerfile/cli/lm.docker.sh 
# # checkout work to branch on
# [ -d ${sgGIT_REPO_IMAGE_LOCAL_PATH} ] && git -C ${sgGIT_REPO_IMAGE_LOCAL_PATH} checkout develop
'
```
