---
draft : true
mx:  
  ref:
    child:
---

# Define Var accessible to 1 group:vm
## Method 01
- Define 1 File in folder group_vars
## Method 02
- Define Var in FileInventory
# Define Var accessible to 1 Vm
- Define 1 File in folder host_vars


# display var
```yaml
- name: role:main > task:display var@input
  ansible.builtin.debug: 
    msg: |
          Environment Variables ("environment"):
          --------------------------------
          {{ environment | to_nice_json }} 
          
          GROUP NAMES Variables ("group_names"):
          --------------------------------
          {{ group_names | to_nice_json }}
          
          GROUPS Variables ("groups"):
          --------------------------------
          {{ groups | to_nice_json }}
          
          HOST Variables ("hostvars"):
          --------------------------------
          {{ hostvars | to_nice_json }} 
          
          Module Variables ("vars"):
          --------------------------------
          {{ vars | to_nice_json }} 
          

```