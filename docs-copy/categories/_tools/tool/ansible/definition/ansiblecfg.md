---
draft : true
mx:  
---

# Conf Type
- /etc/ansible/ansible.cfg
- Cli

# Name
- ansible.cfg

# Location
- Define by ENVVAR
- In Folder:Playbook
- In Folder:~/.ansible/ansible.cfg_
- In Folder:/etc/ansible/ansible.cfg

# Kvpair
```bash
[defaults]
# Parallelisation
gather_facts    = no
forks           = 30
host_key_checking   = False
# Measure time
callback_whithelist = profile_task  
# Caching gather_facts with file
fact_caching            = jsonfile
fact_caching_timeout    = 3600
fact_caching_connection = /tmp/mxcachedir
# Caching gather_facts with redis
fact_caching            = redis
fact_caching_timeout    = 3600
fact_caching_connection = localhost:6379:0
[ssh_connection]
# more performant if no connection.loss 
pipelining      = True
ssh_args        = -o -ControlMaster=auto -o ControlPersist=120s -o PrefferedAuthentications=publickey
[other]
inventory       = /etc/ansible/hosts
sudo_user       = root
ask_sudo_pass   = True
gethering       = implicit
gether_subset   = all
role_path       = /etc/ansible/roles
log_path        = /var/log/ansible.log
pipelinig       = false
vault_password_file      = /path/to/vault_pasword_file
fact_caching_connection  = /tmp
```

