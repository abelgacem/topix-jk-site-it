---
draft : true
mx:  
---

# Step 01 - In Playbook
- become: yes 
=> Execute Instruction on Host as root
# Step 02 - In Playbook
- become: yes 
- become_user: nginx
=> Execute Instruction on Host as nginx

