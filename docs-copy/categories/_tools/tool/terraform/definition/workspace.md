---
draft : true
mx:  
  lp: 1
  ref:
    child:
      - definition/state
    content:
      - language/vocabulary/hcl/howto/workspace
---

# Definition
- 1 folder
- Allows to
  - isolate TFS (i.e 1 per workspace)
  - multiple deployments of the same code

# Good to know 
- each workspace contains its own TFS
- uses backend:key to name and locate the TFS
- create following files and folders
  - file   >  `$TFHOME/.terraform/environment`
  - folder >  `$TFHOME/terraform.tfstate.d`
    - 1 folder per env 
