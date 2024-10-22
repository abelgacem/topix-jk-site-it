---
draft : false
mx:
  lp:
  ref:
    child:
      - howto/account
      - myconf/account
      - definition/role
---

# Definition
## purpose
- connect to AWS Mnagement Console

# operation
- add role

# Type
- IAM
  - [not]root
- Organization
  - member
  - management

## IAM root user accout
- the owner of the AWS account
  
## AWS administrative user  
- an account that is not the IAM root user accout
- have attach the AWS managed policy:AdministratorAccess


## AWS account root user
- creates other types of users
  - IAM users
  - users in AWS IAM Identity Center
- assign theses users access credentials

## AWS administrative user  
- 1 identity **within** the AWS account that has specific custom permissions

# Good to know

# Best practices
