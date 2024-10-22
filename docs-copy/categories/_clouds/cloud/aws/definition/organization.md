---
draft : false
mx:
  lp:
  ref:
    child:
      - howto/organization
      - definition/ic
      - definition/org-ou
---

# Definition
- 1 AWS resource

## purpose
- manage multiple aws accounts

## member
- 1..1 management account
- 1..N member organization unit

# Operation
- create
- enable AWS Identity Center
- enable other services



# Todo

- apply policies for governance
- simplify billing by using a single payment method for all accounts
- centralize 
  - configurations
  - security mechanisms
  - audit requirements
  - resource sharing across accounts

# process
- create 1 organization
- enable AWS Identity Center
- create accounts
- group accounts into OUs (aka team)
  - tester
  - developer
  - devops
  - indus
  - prod
  - dba
  - security
- Apply policies to OU (e.g SCP)  



# Good to know
- when creating an organization the AWS the root user account becomes the owner of the organizational management account
- this acccount creates 
  - the organizations resources
  - the OUs
  - the policies that manage the member accounts
  - **BUT** Permissions are delegated to member accounts by the management account