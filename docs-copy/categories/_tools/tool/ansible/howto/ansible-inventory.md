---
draft : true
mx:  
  ref:
    child:
      - definition/ansible-inventory
---

# ansible-inventory
```bash
ansible-inventory -i xxx --list --yaml
``` 
# Display inventory
```bash
ansible-inventory -i inventory --list
ansible-inventory -i inventory --list --yaml
ansible-inventory -i inventory --list --export
ansible-inventory -i inventory --graph
ansible-inventory -i inventory --graph --vars
```

# Display inventory:tree
```bash
lINVENTORY_FILE_PATH="/tmp/my_inventory.yml"
lINVENTORY_FILE_PATH="~/data/git/abtit/library/ansible/.../vm-mx.hosts"
ansible-inventory -i ${lINVENTORY_FILE_PATH} --graph
```

# Check inventory:syntax
