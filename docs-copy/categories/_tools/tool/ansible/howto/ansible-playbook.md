---
draft : true
mx:  
  ref:
    child:
      - definition/ansible-playbook
---


# Todo
```bash
ansible-playbook --e    'targets=webservers' 
ansible-playbook --limit webservers
```

```bash
ansible-playbook -i inventory_file -c httpapi playbook.yml
```
1. use the `plugin@connection:httpapi` to connect to the host in the `inventory`
2. play the playbook:playbook.yml
