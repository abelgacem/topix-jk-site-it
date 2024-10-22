---
draft : true
mx:  
  ref:
    child:
---

# Install package on ubuntu via apt
```yaml
- name: install > docker > on > ubuntu > 22.04
  become: yes
  become_user: root
  ansible.builtin.apt:
    pkg:
      - docker.io 
      - docker-compose 
```
