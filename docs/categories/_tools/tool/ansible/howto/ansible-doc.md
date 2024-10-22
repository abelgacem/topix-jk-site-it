---
draft : true
mx:  
  ref:
    child:
      - definition/ansible-doc
      - howto/plugin
---

# List all module
```bash
ansible-doc -l
ansible-doc -t module -l
```

# List specific plugin
```bash
# generic
ansible-doc -t xxx -l
## possible values are in {become,cache,callback,cliconf,connection,httpapi,inventory,lookup,netconf,shell,vars,module,strategy,test,filter,role,keyword}

# Example
## plugin@lookup
ansible-doc -t lookup -l

## plugins@callback
ansible-doc -t callback -l

## plugins@inventory
ansible-doc -t inventory -l
```

# Display Plugin:Info
```bash
# define var
lNAME_PLUGIN="ansible.builtin.default"
ansible-doc -t callback $lNAME_PLUGIN
``` 

# Display module:Info
```bash
ansible-doc ansible.builtin.shell
```

