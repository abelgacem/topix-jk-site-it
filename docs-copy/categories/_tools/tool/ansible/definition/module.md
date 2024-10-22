---
draft : true
mx:  
  lp:
  ref:
    child:
---

# definition
- 1 libary of code
- used in 
  - CLI
  - `playbook`

# Member
- Collection
- Name


# Type
- [Not]Core, [Not]Builtin
- [Not]External
- [Not]Custom, [Not]Thirdpart

# Example
- ansible.builtin.command
- ansible.builtin.shell
- ansible.builtin.file


# Todo
## Ansible > Module > Raw
- only module that not use Python

```bash
ansible myhost --become -M raw -a "yum install -y python2"
```

## Ansible > Module > Command
- uptime

# Toknow
- There is 1 subtil difference between Module.Command and Module.Shell and Module.Raw
  - If the command uses IO redirection of ANY sort, use shell
  - If the command only contains CLI flags, command module will suffice.


# Ansible > Module
- authorized_key
  - what machines can access what hosts

# Ansible > Module > Copy
- Copy File from Local to Remote
- Copy File from Remote to Remote

