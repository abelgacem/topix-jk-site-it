---
draft : false
mx:
  ref:
    child:
      - howto/policy
      - definition/resource
      - definition/identity
      - definition/action
      - definition/product
---

# Definition
- allows some identity to operate on resources owned by another identity

# meta member
- 1..1 name

# member
- 1..n identity
- 1..n resource
- 1..n action

# operation
- crud
