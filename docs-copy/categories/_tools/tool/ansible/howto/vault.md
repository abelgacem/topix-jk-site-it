---
draft : true
mx:  
  ref:
    child:
---

## Method 01 > Step
- Create folder *group_vars*
- Create file 
  - *group_vars/vars*
  - *group_vars/vault*
- Define Var.Secret & Var.NotSecret in *group_vars/vars*
- Copy Var.Secret from *group_vars/vars* to *group_vars/vault*
- Point var.Secret in *group_vars/vars* to var in *group_vars/vault* prefix with *vault*. See example below

```bash
db_passwd: {{ vault_db_passwd }}
```
- Encrypt file *group_vars/vault* with vault


