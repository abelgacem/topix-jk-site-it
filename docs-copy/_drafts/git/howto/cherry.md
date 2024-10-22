---
mx:  
---


# Usecase
## Prerequisit
- 1 repo@git (eg. airflow.git) accessible to multiple users has branches `dev`, `sit` , `uat` , `prod`.
- Pull changes made to repo:remote:**sit** 
- Create changes to repo:local:branch:**sit**
- Pull changes from repo:remote:**uat** 
## requirements
- Integrate **only [your] changes** made in branch:**sit** into repo:remote:branch:**uat**
- Do not integrate **changes** made by others in branch:**sit** into branch:**uat**

## Advantages
- I a shared env, push only that each team decided to push
