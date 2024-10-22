---
draft : true
mx:  
---


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



# Test01
- clone sit
- create branch mit1/sit 
- git rm all uneeded
- create files and folders
- git commit mit/sit
- git push mit/sit

- git checkout sit
- git merge --no-ff --no-commit mit1/sit
- ---- unstages deleted with vscode
- ---- discard change with vscode
- git commit ait
- push sit

en suite 

- commi mit1
- push mit1

- checkout sit
- mege mit1 on sit
- push sit



