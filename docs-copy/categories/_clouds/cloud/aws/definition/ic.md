---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/iam
      - howto/ic
      - definition/organization
      - definition/ic-ps
---


# Definition
- denotes AWS IAM Identity Center
## Purpose
- manage 

# Operation
- Enable
- create group
- create user
- create permission sets
- assign permission sets to account
- update AWS access portal URL

# Process
- create users
- create permission sets
- create groups
- add users to groups
- update AWS account
  - assign groups
  - assign permission sets


# Good to know
- When IC is enable
  - it becomes the default identity provider unless configure
  - the following can be customized
    - the instance name
    - the AWS access portal URL
  - the instance
    - works only in 1..1 region
    - is bound to 1..1 organizatio,n

# Best practices
- choose a region close to end-user
- enable IC in the same region


# Todo
- IC creates roles to give users permissions to resources
- IC manages the role
- IC allows the authorized users you’ve deﬁned to assume the role, by using the AWS access portal or AWS CLI
- when IC is enabled: it is possible to configure `AWS access portal URL` 
- can be use with following **`identity source`**
  - AWS Directory Service for Microsoft Active Directory
  - Microsoft Entra ID
  - Okta
- by default -use `Identity Center directory` as the default **`identity source`**
