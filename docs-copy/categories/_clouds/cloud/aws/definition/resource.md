---
draft : false
mx:
  lp:
  ref:
    child:
      - howto/region
      - definition/zone
---

# Definition
- is owned by the person that create it

# Operator
- The owner of a resource defines who can operate on the ressource

# operation
- defined by the type of the resource

# Other definition

## Service role
- a role assume by 1 service to perfom actions on behalf someone
- can be operated (ie create, update, delete) by the admin 

## Service linked role
- a service role linked to 1 service to perfom actions on behalf someone
- Appear in the account
- owned by the service
- can not be operated  (ie create, update, delete) by the admin 

## Ec2 service role
- also named service role for Ec2 
- a role assumed by 1 application runing on a VM (ie. Ec2)
- assigns to the Vm at starup
- allows this application to perform actions in the aws account

# Member
- account@trusting
  - the account that creates the resource 
- account@trusted
  - the account that creates the resource 

## Account@trusting
Is the account that creates the resource

## Account@trusted
Is the account (in Account@trusting) that contains the users who need to operate on the resource



# Operation
- Create Role
- Assume Role

# Step
- Create the role to assume in the account@dst
- Bind permission (list of operation on resources) to role

# Example

- 1 account@trusting allow 1 account@trusted to create new resources (e.g new objects in an S3)
- The account@trusting
  - owns (i.e creates) the resource to be accessed
  - Controls who can access that resource

# Toknow
- role does not have credential
- when you assume a role, it provides you with temporary security credentials for your role session.
- When you use a role, you don't have to 
  - distribute credentials 
  - manage credentials rotations
- Ec2 can assume role  (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html)