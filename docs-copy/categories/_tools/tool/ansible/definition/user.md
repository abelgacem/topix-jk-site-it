---
draft : true
mx:  
  lp:
  ref:
    child:
---

# Type
- Local
- Remote
  - Ansible SSH connection with this user
  - Ansible do ssh ${REMOTE_USER}@remotehost
- Become
  - Ansible become this user after SSH connection is established.
# Type
- ansible_ssh_user

##### Howto
become: yes
become_user: some_user
