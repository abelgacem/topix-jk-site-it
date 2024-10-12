---
draft : true
mx:  
---

# Definition
- The action of having info on object in repo:local

## Type
- local
- remote

## 



# Get all tag from server to local
```powershell
git fetch –all
git fetch --all --tags –prune
```

# List tag
```powershell
git tag --list
```

# create tag@lightweight
```powershell
lTAG_NAME="v0.0.1"
lCOMMIT_MSG="my version "
git tag ${lTAG_NAME}
```
# create tag@annotated 
```powershell
lTAG_NAME="v0.0.1"
lCOMMIT_MSG="my version "
git tag -a ${lTAG_NAME} -m ${lCOMMIT_MSG}
```

# create a tag on an existing commit
- list the commits
```powershell
git log --pretty=oneline
    15027957951b64cf874c3557a0f3547bd83b3ff6 Merge branch 'feature'
    a6b4c97498bd301d84096da251c98a07c7723e65 add update method for thing
    0d52aaab4479697da7686c15f77a3d64d9165190 one more thing
    6d52a271eda8725415634dd79daabbc4d9b6008e Merge branch 'experiment'
```
- tag a commit
```powershell
lTAG_NAME="v0.0.1"
lCOMMIT_ID='15027957951b64cf874c3557a0f3547bd83b3ff6'
git tag -a ${lTAG_NAME} ${lCOMMIT_ID}
```

# Delete tag
```powershell
lTAG_NAME="v0.0.1"
git tag -d ${lTAG_NAME}
```

# Push tag
```powershell
git push --tags
```

# Checkout tagged version
```powershell
lTAG_NAME="v0.0.1"
git checkout ${lTAG_NAME}
git checkout tags/${lTAG_NAME}
```


# upadte an existing tag 
```powershell
lTAG_NAME="v0.0.1"
lCOMMIT_ID='15027957951b64cf874c3557a0f3547bd83b3ff6'
git tag -a -f ${lTAG_NAME} ${lCOMMIT_ID}
```






