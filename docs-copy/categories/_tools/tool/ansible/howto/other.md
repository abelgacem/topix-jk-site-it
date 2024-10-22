---
draft : true
mx:  
  ref:
    child:
---

# Runs a local script on a remote node after transferring it
- `ansible-doc -s script`

# Lookup
```bash
distrib: "{{ lookup('ansible.builtin.vars', 'ansible_facts') }}"

```
# Install@generic package
```yaml
- hosts: all
  tasks:
  - package:
      name: "httpd"
      state: present
    when ansible_facts["os_name"] == "RedHat"
  - package:
      name: "apache2"
      state: present
    when ansible_facts["os_name"] == "Ubuntu"
```    

# Define var (common to | shared by) all roles

|Key|value|
|-|-|
|Location|roles/common_settings/vars/main.yml|
|Description|Var:Value in this file is accessible to all roles
|Comment|Var:Value can be override by var@(role, input) 

```bash
roles:
   - role: app_user
     vars:
        myname: Ian
   - role: app_user
     vars:
       myname: Terry
```       