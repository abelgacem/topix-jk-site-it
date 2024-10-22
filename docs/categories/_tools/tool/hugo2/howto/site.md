---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:       2
  ref:  
    child:
      - definition/site
---


# Create
```powershell
# create a site = create a folder tree
lSITE_NAME="DOC_OMT"
hugo new site ${lSITE_NAME}
cd ${lSITE_NAME}
tree
```


# Publish
- to publish/build the site: 
  - in dev mode: start the server
  - in prod mode: todo



# todo
- link to
  - server
  - process

## build and deploy
- a push to the repo should triggers a build and deployment