---
draft : true
mx:  
  ref:
    child:
---

# Target two sources
## Usecase
||||
|-|-|-|
|in inventory : staging|[all:vars] defines|myvar = 1
|in inventory : production|[all:vars] defines|myvar = 2
```bash
# playbook get_logs.yml uses myvar = 2
ansible-playbook get_logs.yml -i staging -i production

# playbook get_logs.yml uses myvar = 1
ansible-playbook get_logs.yml -i production -i staging 
```
