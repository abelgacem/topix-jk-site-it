---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/account
      - definition/landing
---



# Definition
- AWS services for IAC (analogous to Terraform)

## template
- describes all resources and their properties
- creates a cloudformation stack
- txt file: Json or yaml
- define a stack to be created


## stack
- a set of resources
- an instanciation of a template

## change sets
- update of a runing stack
- this change must be reflect in the template

# Lexical field
- template
- provision

## funciunality
- create account
- provision account:resources and account:permissions 
- create landing zone
- create infrastructure

# Good to know
- if template create a postgres AWS RDS than this DB get filled with data. How to reflect this changes in temlplate
- you create stack via GUI, CLI, API