---
draft : true
mx:  
  lp: O
  ref:
    child:
      - definition/ansible
      - definition/pattern
---

# Basic usage
```powershell
# generic syntax 
ansible [pattern] \
  -m [module:name] \
  -a "[module:options]"
ansible \
  -i ${INVENTORY_FILE_PATH} ${GROUP_NAME} \
  -m [module:name] \
  -a "[module:options]"

# example
ansible [pattern] \
  -m ansible.builtin.ping

ansible [pattern] \
  -m ansible.builtin.service 
  -a "name=httpd state=started"

ansible ... 
  -m ansible.builtin.command 
  -a "/sbin/reboot -t now"

```

# List facts:kvpair
```bash
# localhost
ansible all,localhost -m setup
# host@remote
ansible all -m setup
ansible all -m setup -a "filter=ansible_cmdline"
```


# Execute Shell on localhost without using ssh

```powershell
# localhost = host on which ansible is running
lCLI="ls -ial"
lCLI="ip a | grep ens"
lCLI="ip a | grep ens"
lCLI="echo 'MxInfo > User@Os:Home = $HOME'"
## Method
ansible -i "localhost," all -c local  -m ansible.builtin.shell -a "${lCLI}"
## Method
ansible --one-line localhost          -m ansible.builtin.shell -a "${lCLI}"

## Do 1 ping 
ansible --one-line localhost  -m ansible.builtin.ping
```
# Execute Shell on all inventory:vm

```powershell
lCLI="ls -ial"
lCLI="ip a | grep ens"
ansible -i ${lINVENTORY_PATH} all -m ansible.builtin.shell -a ${lCLI}
```

# Execute Shell on 1 inventory:group

```powershell
lCLI="ls -ial"
lCLI="ip a | grep ens"
lINVENTORY_PATH="/home/dockadm/debug/git/aduneo/dinum-ansible/inventory/inventory-test/hosts"
lGROUP_NAME="ovh"
lGROUP_NAME="aduneo"
ansible -i ${lINVENTORY_PATH} ${lGROUP_NAME} -m ansible.builtin.shell -a "${lCLI}"
```

# Execute Shell on 1 inventory@dynamic
```powershell
## openstack_inventory.py is 1 script in python that return 1 inventory
ansible -i openstack_inventory.py all -m ansible.builtin.ping
```


# Equivalence Cli vs Playbook
## Method
```bash
ansible -i xxx yyy -m ansible.builtin.service -a "name=httpd state=started"
```
## Method
```bash
- name: restart webserver
  ansible.builtin.service:
    name: httpd
    state: restarted
```


# check 
## ansible is installed
```bash
ansible --version
```

## wich ansible:package that are installed
```bash
ansible-community --version
```

## Template
ansible [pattern] -m [module] -a "[module options]"
## Ansible option
|Short|Long|Description|Comment|
|-|-|-|-|
|-u|Long|Remote User||
|-b|Long|Sudo|for Sudo|
|-k|--ask-pass|Description|ssh passwd|
|-K|Long|Description|sudo passwd|
|-C|--check|Dry Run||
|-D|--diff|Display output diff|??|
|-e|--extras-vars|Define var||
|-f x|--forks|Paralelisation||
|-vvv||Verbose||
||--ask-vault-pass|deciphered Var||
||--vault-password-file|File to Decipher||
||--ssh-extra-args|ssh Param|-o xxx=yyy -o ttt=ppp|

## Example
```bash
ansible all -i "localhost," -c local -m shell -a 'echo hello world'

ansible foo.example.com -m yum -a "name=httpd state=installed"
ansible foo.example.com -a "/usr/sbin/reboot"
ansible ovhmx22 -a "ls /etc" (Module.Command is used as default)
ansible -i "o1u," all -a "ls /usr/local/etc" # use Host define in SshConfig
ansible -i "o1u," all -e "mxvar=toto" -m command -a "uptime"
ansible -i "o1u," all -e "mxvar=toto" -m debug -a "msg={{mxvar}}" --one-line
ansible -i "o1u," all -e "mxvar=toto" -m shell -a "ps aux"
# No Need Python
ansible -i "o1u," all -b -e "lvPackagerName=apt" -m raw -a "{{lvPackagerName}} install -y tree" 
ansible -i "o1u," all -b -e  -m raw -a "{{lvPackagerName}} install -y tree"
ansible -i "o1u," all -b -e  -m apt -a "name=tree state=latest"
ansible -i "o1u," all -b -e  -m service -a "name=nginx state=stopped"
ansible -i "o1u," all -b -e  -m service -a "name=nginx state=absent"  # desinstall
ansible -i "o1u," all -m ping    # use Host define in SshConfig
ansible -i "o1u," all -m setup -a "filter=ansible_distribution"
ansible ovh -u "max"
ansible ovh -u "max"
ansible -i <InventoryLocation> all -m ping    # use Host define in SshConfig
ansible -i <InventoryLocation> <SelectetMachine> <PlaybookLocation> -l <LimitToHostList>    # use Host define in SshConfig
ansible -i inventory cluster -m ping
```
## Test Ansible is Installed
```powershell
ansible --version
ansible --help

```

## Test Ssh to Host
```powershell
ansible localhost -m ping
ansible localhost -m gather_facts
ansible all -m ping 
ansible all -m ping --ask-pass
```
# Display File.Config


# Display Help on Module
ansible-doc copy

# Ansible-Playbook
## Syntax
```powershell
ansible-playbook -i [InventoryFile] [PlaybookName] -l [GroupName]
```
- Run playbook named **[PlaybookName]** on
- Host that belong to goup named **[GroupName]** in the inventory **[InventoryFile]**

## Run 1 PB on 1 Specific.Host of 1 Specific Inventory
ansible-playbook -i Hostfile [Host] PbName -K -s

## Run 1 PB on 1..N Host
ansible-playbook playbooks/PLAYBOOK_NAME.yml --limit "host1,host2"
ansible-playbook playbooks/PLAYBOOK_NAME.yml --limit "host1"
ansible-playbook playbooks/PLAYBOOK_NAME.yml --limit 'all:!host1'
ansible-playbook playbooks/PLAYBOOK_NAME.yml --limit 'group1'

## Run 1 PB.Tag
ansible-playbook playbooks/PLAYBOOK_NAME.yml --tags 'install'
ansible-playbook playbooks/PLAYBOOK_NAME.yml --skip-tags 'sudoers'

## Check Syntax of 1 PB
ansible-playbook playbooks/PLAYBOOK_NAME.yml --syntax-check

# Test 1 PB
ansible-playbook playbooks/PLAYBOOK_NAME.yml --check




# Display Facts
```
ansible mac -m setup
ansible all -m gather_facts
```
# Display facts from all hosts and store them indexed by I(hostname) at C(/tmp/facts).
ansible all -m gather_facts --tree /tmp/facts

# Display List of Module
ansible-doc -l | wc -l

# Copy 1 File to All Host
ansible all -m copy -a 'src=dvd.repo dest=/etc/yum.repos.d owner=root group=root mode=0644' -b

# Speed Execution of 1 Playbook
- gather_facts: no | gather_facts: false
  - Info > It avoid of collecting 1 big amount of Data

# Use Facts in Playbook
tasks:
    - name: Classify hosts depending on their OS distribution
      group_by:
        key: os_{{ ansible_facts['distribution'] }}
tasks:
    - name: Set OS distribution dependent variables
      include_vars: "os_{{ ansible_facts['distribution'] }}.yml"
    - debug:
        var: asdf

# Simulate ssh-copy-id
ansible <HOST_GROUP> -m authorized_key -a "user=root key='ssh-rsa AAAA...XXX == root@hostname'"

# Run 1 Playbook for Host.Local
## Cli
- ansible-playbook --connection=local 127.0.0.1 playbook.yml
## Inventory
- 127.0.0.1 ansible_connection=local
## Ansible Conf
[defaults]
transport = local
## Playbook
- hosts: 127.0.0.1
  connection: local

# Encrypt Sensitive Var
- Create Folder.group_vars
- Create 
  - File.group_vars.vars   
  - File.group_vars.vault
- Define Var.Uncrypted in File.group_vars.vars
- Define Var.Uncrypted and Var.Crypted in File.group_vars.vars
- Copy Var.Crypted from File.group_vars.vars in File.group_vars.vault
- Prefix var in File.group_vars.vault with String."vault_"
- Point Var.Crypted in File.group_vars.vars to var in File.group_vars.vault using jinja2 syntax
- Encrypt File.group_vars.vault

# Whatis Sensitive Var
- Private key
- Credential to Git, Docker
- Port.Ssh
- Ovh.Vps.Ip

# Working with Facts
- gather_facts: yes => we can do the fommowing because the var gets available from facts
copy:
  src: /tmp/config
  dest: /tmp/config.{{ansible_date_time.date}}.bak
  remote_src: yes 

# Use Variable if set | define |  exist ifnot use default
handlers:
  - name: restart web service
    service:
      name: "{{ web_service_name | default('httpd') }}"
      state: restarted  
# Use Set of var based on 1 Var
tasks:
  - name: Set host variables based on distribution
    include_vars: "{{ ansible_facts.distribution }}.yml"
###
immediate: "{{ item.immediate | default(True) }}"
- default(True) return yes

# Check the Syntax of 1 Pb before run
ansible-playbook main.yml --syntax-check

# Simulate Execution of 1 Pb
ansible-playbook main.yml -C

# Create 1 folder role
ansible-galaxy init <ROLE_NAME>

# Define Custom Jso on Host known by Ansible
- Create 1 or more File in /etc/ansible/facts.d/XXX.fact
  or in 1 folder pointed by the Ansible.Keyword.fact_path
- This File can be
 -- 1 .Ini
 -- 1 .Json
 -- 1 Script returning 1 Json
- Content of this File
[general]
asdf=1
bar=2
[yo]
Yiyi=1
Toto=2
- Var can be referenced as:
 -- {{ansible_loca.preferences.general.asdf}}
 -- {{ ansible_local['preferences']['general']['asdf'] }}


# Display Custom Var define on Remote Host
ansible <hostname> -m setup -a "filter=ansible_local"
# Tips > Always  Use "host:all" in playbook
ansible-playbook --tags "debug_info" -i hosts/mvps.host mypb.yml
- Tips > 
 -- generate the file hosts in dynamic
 -- launch the cli thru 1 shell

# Tips > Always Include debug_info but skip them in standard PB.Running
ansible-playbook --tags "debug_info" -i hosts/mvps.host mypb.yml
ansible-playbook example.yml --tags "configuration,packages"
ansible-playbook example.yml --skip-tags "packages"

# List > Plugin.Callback
```bash
```
