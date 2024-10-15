---
---






# create a local group folder for git and then for Jekyll
```shell
lFOLDER_GIT_ROOT="${HOME}/wkspc/git"
lFOLDER_GIT_ROOT_JEKYLL="${lFOLDER_GIT_ROOT}/jekyll"
mkdir -p ${lFOLDER_GIT_ROOT_JEKYLL}
```

# clone a  jekyll project
```shell
# var
lGIT_URL_JEKYLL="https://github.com/abelgacem/project.git"

# action
git -C ${lFOLDER_GIT_ROOT_JEKYLL} clone ${lGIT_URL_JEKYLL}
```

# get a `~/.gitconfig`
define or use a `.gitconfig` file with a `user.email` and `user.name` defined
```shell
# Eg. copy file from src into dst (ie. vm:o1u, folder:~)
scp ~/.gitconfig o1u:~
```


