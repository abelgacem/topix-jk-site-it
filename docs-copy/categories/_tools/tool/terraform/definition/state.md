---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:
  ref:
    child:
      - definition/infrastructure
      - definition/backend
      - definition/workspace
---

# Definition
- 1 json txt file (when local)
- default name:  `terraform.state`
- Record all resources Terraform manages
  - contains the current state of one infrastructure (i.e components that make the infrastructure)
  - 1 image of part or all of 1 infra
  - map real world resources to the instruction:`resource` via 1 identifier
  - contains resource IDs and all resource attributes (even sensitive data)
- configured by a backend
- improve performance for large infrastructures

# Good to know
remote TFS can be in 
- consul
- gitlab
- AWS:s3
- GCP
- AZURE
- OSS


# Oparation
- refresh (-refresh-only)
 - update it contents without real apply
- migrate from local to remote
