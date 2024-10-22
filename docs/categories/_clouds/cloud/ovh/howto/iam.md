---
draft : false
mx:
  ref:
    child:
      - definition/policy
---

# Howto
- gui > manager > iam > 
  - policy:name: mx_policy_vps_admin
  - policy:type: vps
  - resources: vm.ovh.*
  - actions: all

account:apiovh:me/get
account:apiovh:me/supportLevel/get
account:apiovh:me/certificates/get
account:apiovh:me/tag/get
