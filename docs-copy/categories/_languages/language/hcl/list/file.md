---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  ref:  
    child:  
      - howto/modularization
---

# List of files when coding
- the following files are define by HASHICORP ONLY as naming conventions
- TERRAFORM loads all files with extension .TF in the root module
- the root module denote the working folder

|name|tags|description|
|-|-|-|
|backend .tf||configure the TFS backend
|main.tf||the **entry point** to build 1 infrastructure
|terraform.tf||contains only 1 instruction  `terraform`
|outputs.tf||define all output -  display var for debug
|variables.tf[.json]||declare variables
|variables.tfvars||define variables
|locals.tf||define local values
|override.tf||define local values
|terraform.lock.hcl|$HOME, file|
|.terraform|$HOME, folder|
|terraform.stats|$HOME, file|

# `override.tf`
- 
