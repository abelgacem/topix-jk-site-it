---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  lp:
  ref:
    child:
      - definition/state
    content:
      - language/vocabulary/hcl/howto/backend
---

# Definition
- Define where the TFS is stored

# Type
- local
  - default path: `./.terraform/terraform.tfstate`
- remote
  - gitlab
  - consul
  - cloud
    - Aws:S3
    - Azure:bmlob storage
    - Gcp
  - ...  
# Good to know
- you configure a backend that defines all information about the TFS
- If the code contains a  block:`cloud`, it cannot includes a  block:`backend`