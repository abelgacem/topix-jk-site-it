---
draft : true
mx:  
---


# checkout
```bash
sFOLDER="abtit/library"
git --git-dir=$g_FOLDER_GIT/$sFOLDER/.git checkout main
```

# See what will be pushed
```bash
# what will be pushed on branch@remote named sit
lBRANCH_NAME="sit"
git diff --stat --cached origin/${lBRANCH_NAME}
```





# step
- cd ~/debug/git/abtit
- ltoken="glpat-nDq2tx556zfZrUPshBus"
- git clone https://xx:${ltoken}@gitlab.com/glabtit/project/topix
- create branch ccf from branch main
```bash
# action
git checkout -b ccf

# check
git branch
```

- git:remove all unneded file of main 
```bash
git rm -r *-master*
```

- create needed files and folders 
```bash
mkdir folderO1-ccf
mkdir folderO2-ccf
touch README-ccf
```

- commit delete to branch ccf 
```bash
# check before
git status

# action
git commit -m "commit only delete"

# check after
git status
```

- push changes to branch ccf 
```bash
git push --set-upstream origin ccf
```

- merge ccf on main
```bash
git checkout main

git merge --no-ff --no-commit ccf
```

- get-out files not belong to ccf 
```bash
# action
git reset HEAD README-master.md
git reset HEAD *-master*

# check
git status
```


- commit changes to branch main
```bash
# check before
git status

# action
git commit -m "merge branch ccf into main"

# check after
git status
```

# other
```
git ls-files --stage
```

# check
```shell
# check folder .git exists => fata or true
git rev-parse --is-inside-work-tree
```

`



# display branch infos

## info about the last commit
```shell
git show dev
```

## Only the last commit's hash
```shell
git showrev-parse main
```

## The list of commits
```shell
# aka. history
git log main
```

## The list of all branches
```shell
# with their last commit and name
git branch -v
```

## list of all actions - TODO
```shell
git reflog [HEAD]
git reflog main
git reflog dev
```




I want a 2 or 3 lines definition of git. gives a good one inspired by the following:
# Definition
Denote a repoitory that can be managed by 1 Cli, 1 Gui or 1 Api


# Viewing Objects:

You can use commands like 
```shell
# get the type of an object (blob, tree, or commit)
git cat-file -t <hash>
# get the contents of an object (blob, tree, or commit)
git cat-file -p <hash>
# get the contents of a blob
git cat-file -p <blob_hash>
# get the contents of a commit
git cat-file -p <commit_hash>
```



# Todo - config
```
- core.autocrlf = true
- core.fscache = true
```

# Todo - Lexical field
- master, main
- detached
- Head
- Branch
- push, pull, clone

[remote "origin"]
    url = git@github.com:yourusername/your-repo.git
    fetch = +refs/heads/*:refs/remotes/origin/*

[remote "upstream"]
    url = git@github.com:opensourceproject/main-repo.git
    fetch = +refs/heads/*:refs/remotes/upstream/*

[remote "feature"]
    url = git@github.com:featureteam/feature-repo.git
    fetch = +refs/heads/*:refs/remotes/feature/*

$ lURL='https://gitlab.com/glabtit/project/prj-bash/ibshell.git'
$ git remote add origin ${lURL}
$ lURL='https://gitlab.com/glabtit/project/prj-python/rstdlib.git'
$ git remote add origin ${lURL}