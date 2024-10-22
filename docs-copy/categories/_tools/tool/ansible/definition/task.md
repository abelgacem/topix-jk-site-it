---
draft : true
mx:  
  lp:
  ref:
    child:
---

# Type
- [Not]Atomic

# Definition
|Verb|rest|
|-|-|
|Define|  > 1..1 > Action [to be done]
|Is|      > member > of > 1..1 > [play][Play_whatis]

# Member
- [Module][Module_Whatis]




# Type
- Host
- Group
- Magik

# Toknow
- Ansible define 22 type of Var

# Rule for priority 
- host
- group
- all


# Var.Host
- Is also named host_vars
- Is 1 Folder
# Var.Group
- Is also named group_vars
- Is 1 Folder
- Hold Var for 1 Group


# Type
- Host
- Group
- Magik
- cli
- settings
- Playbook
- include
- role
- set_facts

# Toknow
- Ansible define 22 type of Var

# Rule for priority 
- host
- group
- all


# Var.Host
- Is also named host_vars
- Is 1 Folder
# Var.Group
- Is also named group_vars
- Is 1 Folder
- Hold Var for 1 Group

# Type
- Magic


# MagicVar
- hostvars : Allowto access variables for another host in 1 PB
 -- Example: {{ hostvars['test.example.com']['ansible_facts']['distribution'] }}
- groups: is a list of all groups and hosts in the inventory   
  -- Example:
  {% for host in groups['app_servers'] %}
   # something that applies to all app servers.
  {% endfor %}
- group_names:  is a list of groups the current host is in  

# Type
type00
- string
- list
- dictionary
type01
- ansible
- env

type02
- shared
- specific

type03
- host
- group


# Toknow
Var:value can be define
  - per host
  - per group

# Var@host
- is1 variable that is specific to 1 host

# Var@group
- is1 variable that is specific to 1 group of host
## Todo
Toknow
- Host and group variable files must use YAML syntax. 
Toknow
- You can define different variables for each individual host
- You can define different variables for a group of hosts in your inventory

Toknow
- Child groups override parent groups, and host variables override group variables. 
- All groups are children of the group named *all*

Toknow
- var can be defined in
  - inventory
  - playbook
  - external file called by
    -  playbook
    -  role
  - role
  - cli
    - batch     (--extra-vars -e)
    - interacti (vars_prompt)

