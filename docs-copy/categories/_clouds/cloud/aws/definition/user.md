---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/group
      - howto/user
---

# Definition
- created with one of the following services
  - AWS IAM
  - AWS IAM Identity Center

# Type
- IAM user with long-term credentials
- IAM role with short-term credentials

# Operation
- create
- delete
- enable MFA


# Best practice
- should belongs to a group

# Todo

## Type
- `Root`
- `Iam`
- `Federated`

### Root user
- the user created when the AWS account is created (usually this is 1 Organization:Account)
- the aws account owner
- has full access to all resources in the account


### Iam user
1 user created by 
  - the Root user **OR**
  - 1 IAM user that has permission:administrator 


#@@ Federated user
- identity managed (created, authenticated) using an external identity provider
- Federated users assume a role when accessing AWS accounts. 

## Operation
- Create User

## Best practice
- create a user@Iam in `IAM Identity Center` with administrator permissions for everyday AWS tasks
- lock away the credentials for the root user
