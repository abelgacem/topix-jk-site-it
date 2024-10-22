---
draft : true
mx:  
  lp: O
  ref:
    child:
      - howto/ansible
    content:
      - organization/org/redhat
---

# Definition
- 1 set of CLI, GUI
- written in language:`Python`
- maintained now by `Redhat`
- launch in 2012

## purpose
- provision VMs with (os, tool):(conf, tool) via
  - SSH for os@Linux
  - WinRM for os@windows
- provision infrastructures on cloud@`openstack`  if used with  `openstack:heat`

# Configuration

|Name|Tag|Location|Description|
|-|-|-|-|
|Inventory|File|/etc/ansible/hosts|default inventory|
|ANSIBLE_VAULT_PASSWORD_FILE|var@env||1 file containing 1 vault:key|
<br>


# todo
## other tool and version
- ansible now is v2.4
- awx is ansible tower gui and api

## trash code
```bash
# distrib: "{{ lookup('ansible.builtin.vars', 'ansible_facts') }}"
# user_dst_name: "{{ ansible_facts.user_id }}"  # user@sudo on the sshed vm
# {{ lookup('vars','licluster')['port'][node.type] }}
```


# Lexical Field
- Provision, Instal, Configure
- Code, File, App, Db
- Ssh, Python

# Vocabulary
- Collection, Role, Playbook, Play, Task, Module
- Inventory, Host, GroupVar, HostVar

# To know
- Host.Managed must have python installed
- By defaut Ansible uses remote:/usr/bin/python
- can provision Host@Local

# Good to know
- deployments with Ansible should be
  - repeatable
  - isoXXX
- the default module for the command is `ansible.builtin.command`
  - the following CLI are equivanlent
  ```powershell
   ansible ... -m ansible.builtin.command -a [module:option]
   ansible ... -a [module:option]
  ```