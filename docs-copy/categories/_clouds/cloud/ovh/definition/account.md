---
draft : false
mx:
  ref:
    child:
      - definition/identity
      - definition/gui
      - definition/action
      - definition/policy
---

# Definition
- login to gui (aka control pannel)
- act on ovh
  - resource
  - product
  
- used to login to the url
  - https://www.ovh.com/auth/?onsuccess=https%3A//www.ovh.com/manager&ovhSubsidiary=FR
  - https://www.ovh.com/manager/#/hub

# Type
- root
- local user
- service
- federated

## root account
- Should only be used only to create 1..N local users with admin access
- Member
  - login:name (eg.baxxx-ovh)
  - login:pwd 

## local user
- used for human interaction with ovh services and products

## service account
- Should only be used for automated (aka app) interaction with ovh services and products

## Member
- login:name
- login:pwd

# Operation
