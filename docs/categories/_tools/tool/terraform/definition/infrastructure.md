---
draft : true
mx:  
  lp: 1
  ref:
    child:
      - definition/state
    root:
      - definition/infrastructure
---

# Category
- target
  - the code to  `apply`
- current
  - the TFS

# Good to know
- when applying code to update/create components in one infrastructure, TERRAFORM  
  - compares the current infrastucture (in the TFS) and the targeted infrastucture (in the code)
  - creates/updtades resources according to this difference
