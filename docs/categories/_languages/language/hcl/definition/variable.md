---
draft : true
mx:
  ref:
    child:
      - howto/variable
---

# Definition

** def was copy past from old => check if it is still true**

- Can > be > used > by
  - Resource
  - Data Source
- Can > be > defined > in > order > in
  - Env
  - File
    - terraform.tfvars
    - terraform.tfvars.json
    - *.auto.tfvars
    - *.auto.tfvars.json
  - Cli
    - -var
    - -var-file

# Category
- input
  - define variable pass to called module by the calling module
- output
  - define variable pass to calling module by the called module
- locals


# process
- declare variable in the root module
- define the variable via
  - CLI
  - envrironment variable

# process
- declare variable in a child module
- the calling module define the variable