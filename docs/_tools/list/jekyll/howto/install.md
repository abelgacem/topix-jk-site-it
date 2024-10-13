---
---







# install os dependencies
```shell
# on ubuntu
sudo apt-get install -y ruby-full build-essential zlib1g-dev
```

# create and define udef rc file 
```shell
# var
lFILE_PATH_RC_SDEF="${HOME}/.bashrc"
lFILE_PATH_RC_UDEF="${HOME}/.profile.custom"

# action
touch ${lFILE_PATH_RC_UDEF}
echo "# define a udef rcfile"       >> ${lFILE_PATH_RC_SDEF}
echo "source ${lFILE_PATH_RC_UDEF}" >> ${lFILE_PATH_RC_SDEF}
```

# define udef rc file content
```shell
# var
lFOLDER_GEM_UDEF="${HOME}/wkspc/tool/gems"

# action
mkdir -p ${lFOLDER_GEM_UDEF}
echo "# Install Ruby Gems in a udef folder (ie. ${lFOLDER_GEM_UDEF})" >> ${lFILE_PATH_RC_UDEF}
echo "export GEM_HOME=${lFOLDER_GEM_UDEF}"      >> ${lFILE_PATH_RC_UDEF}
echo "export PATH=${lFOLDER_GEM_UDEF}/bin:${PATH}" >> ${lFILE_PATH_RC_UDEF}
```

# install jekyll and dependencies
```shell
gem install jekyll bundler
```

# Check install
```shell
ruby -v
gem -v
bundle -v
```

# Todo

### create a local group folder for git and then for Jekyll
```shell
lFOLDER_GIT_ROOT="${HOME}/wkspc/git"
lFOLDER_GIT_ROOT_JEKYLL="${lFOLDER_GIT_ROOT}/jekyll"
mkdir -p ${lFOLDER_GIT_ROOT_JEKYLL}
```

### clone a  jekyll project
```shell
lPRJ_GIT_JEKYLL="https://github.com/abelgacem/project.git"
git clone ${lPRJ_GIT_JEKYLL}
```




