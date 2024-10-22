---
draft : false
mx:
---


# Definition
 - 1 kvpair accessible to the gilabCI file

# Type
Type
- variable
- file

Type
- Instance (aka gitlab)
  - predefined
- [Sub]Group
- project
- script (aka gitlabci)

## Var@Variable
- the key denotes the Var.Env:Name in job

## Var@File
- is used when a file is needed rather than just 1 string
- the key denotes the Var.Env:Name in job
- the value denotes the file

# To know
- gitlab does not have array type, but it is possible to simulate array
- Tools like cli:Aws, Cli:kubectl uses var@file to configure the cli
- The following var are var@variable
  - All predefined CI/CD variables
  - Variables defined in the gitlabCI file
