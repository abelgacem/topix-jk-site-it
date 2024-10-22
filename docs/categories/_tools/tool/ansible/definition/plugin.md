---
draft : true
mx:  
  lp:
  ref:
    child:
      - definition/ansible-doc
      - howto/plugin
---

# type
|Category|Description|
|-|-|
|Action|Execute tasks in Ansible playbooks, extending Ansible's capabilities beyond built-in modules.|
|Callback|Customize output and behavior of Ansible runs, hooking into events during playbook execution.|
|Connection|Determine how Ansible connects to remote hosts, defining communication protocols and methods.|
|Filter|Manipulate data within Ansible templates, modifying or transforming data before rendering output.|
|Inventory|Generate inventory of hosts managed by Ansible, dynamically creating inventory from various sources.|
|Lookup|Retrieve data dynamically during playbook execution, fetching data from various sources for tasks.|
|Module|Carry out specific tasks on managed nodes, providing built-in modules for common operations.|
|Strategy|Control task execution across multiple hosts, defining parallelism and task execution order strategies.|
|Test|Validate playbooks and roles, defining custom tests to ensure infrastructure meets specified criteria.|
<br>

# Other type
- cf. cli: `ansible-doc -l`
  - become
  - cache
  - cliconf
  - httpapi
  - netconf
  - shell
  - vars
  - role
  - keyword

