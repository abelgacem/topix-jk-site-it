---
draft : true
mx:  
  lp:
  ref:
    child:
      - definition/group
      - howto/inventory
---

# Definition
- define/describe 1..N hosts and their properties
- define 1..N groups of 
  - hosts
  - group
- define variable values for groups
- allow Inheritance

## Member
- 1 folder tree
- 1 TXT file in one of the following format that describes and groups the VMs  
  - JSON
  - YAML
  - INI

## purpose
- describe/define all the VMs properties of the company for all env (e.g dev, staging, prod)
  - Vm
  - Vm:Var
  - Vm:Type
  

# Category 
related to xx
- [Not]Core, [Not]Builtin
- [Not]External
- [Not]Custom, [Not]Thirdpart


# process
- define VMs properties
- define groups
- group VMs


# Good to know
- the way the inventory is built define the way you will code in Ansible
- the folder tree must be located in the same folder as the inventory



# Example
1 Postgres Server in env prod-preprod for a named project `Comarch` should belong to group 
- [db] [postgres] [comarch] [stg]

1 SQL Server in env staging-uat for an tool named `Blueway` in project Comarch should belong to group 
- [db] [sqlserver] [comarch] [blueway] [recette]

# Example
## an inventory in INI format
```Ini
[Parent1]
Srv4
[Enfant1]
Srv1
Srv2
[Enfant2]
Srv3
[Enfant3]
Srv5
[Parent1:children]
Enfant1
Enfant2
[Enfant2:children]
Enfant3
```
## the same inventory in YAML format
```yaml
## Format.Yml ## Format.yml
---
all:
  children:
    Parent1:
      hosts: srv4
      children:
        Enfant1:
          hosts:
            srv1
            srv2
        Enfant2:
          hosts:
            srv3
          children:
            Enfant3:
              hosts:
                Srv5
    Parent2:
      hosts:
        Srv6
        Srv7
        Srv8
        Srv9
```
# Example
## an inventory in INI YAML
```yaml
---
all:
  children:
    Common:
      ServerWeb:
        hosts:
          Srv[1:4]
      ServerDb: 
        hosts:
          Srv[5:6]
      AppDocker: 
        hosts:
          Srv[7:10]
      AppNotDocker: 
        hosts:
          Srv[11:15]
    Monitoring:
      children:
        Common
    
```
# Example
```bash
.
├── group_vars
│   ├── serverbb.yml
│   ├── serverweb.yml
│   └── all.yml
└── host_vars
    ├── srv1
    │   ├── srv.yml
    └── srv2.yml
```

# Example
```bash

.
├── dev
│   ├── group_vars
│   │   ├── serverbb.yml
│   │   ├── serverweb.yml
│   │   └── all.yml
│   └── host_vars
│   ├── srv1
│   │   ├── srv.yml
│   └── srv2.yml
├── prod
    ├── group_vars
    │   ├── serverbb.yml
    │   ├── serverweb.yml
    │   └── all.yml
    └── host_vars
    ├── srv1
    │   ├── srv.yml
    └── srv2.yml
```



## example
```bash
Vm:~/debug/git/aduneo/dinum-ansible/inventory/inventory-infra$ ll
2229339 drwxr-xr-x  3 dockadm dockadm 4096 Aug 17 21:31 .
2229337 drwxr-xr-x  4 dockadm dockadm 4096 Aug 17 21:31 ..
2229341 drwxr-xr-x 13 dockadm dockadm 4096 Aug 17 21:31 group_vars
2229413 -rw-r--r--  1 dockadm dockadm 1186 Aug 17 21:31 hosts
```
# To know
- 1 host can and should belongs to 2..N group
- Group can be nested
- Ansible loads files containing var@host and var@group relative to
  - inventory file
  - playbook file

- Ansible:Inventory defines both
  - Target@(Ansible, ops:project) to provision
  - Var (key/value) 
    - Available
    - Inheritance
    - overiding (Var:Value)

# Todo
This repo@git:Folder is 1 Ansible:inventory that is
  - used to 
    - provision 1..N Vm
  - designed to allow Ansible:var:value to be
    - inherit from parent
    - override by child

