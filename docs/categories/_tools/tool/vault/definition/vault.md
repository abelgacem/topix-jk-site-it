---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp: O
  ref:
    child:
      - howto/install
      - howto/terraform
      - definition/resource
      - definition/provider
    content:
      - organization/org/hashicorp
---

# Definition
- open source
- written in GO
- provided by Hashicorp
- 1 CLI
- allows to
  - manage some objects (a.k.a resources) via Api (a.k.a providers)
  - build and update virtual infrastructures via code



# Toknow
- `Terraform Plan`  is 1 diff between
  - the state.current and 
  - the state.before (in file tfstate or retrieve from provider by using resource:id) 
