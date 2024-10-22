---
draft : false
mx:
  lp:
  ref:
    root:
      - concept/identity/definition/identity
    child:
      - howto/region
      - definition/zone
      - definition/account
---

# todo todo

# Definition
- 1 identity that is associated to 1 person
- 1 identity with permissions and policies
- defines what the identity can and cannot do in an AWS account
- need to be associated with 1.N  persons
- intended to be assumable by anyone who needs it
- does not have standard long-term credentials
- when a user assumes a role, it provides temporary security credentials for the session
- Admins uses roles to delegate access to users, applications, or services that don’t normally have access to those AWS resources. 
- an dentity that is associate to 1..1 human
- Allow to delegate access and action on 1 User:resources
- Allow 1 user to operate on another User:Resources
- The account that creates a resource 
  - owns the resource
  - defines (ie. controls) who can operate on the ressource


# Category
related to service creator
- AWS IAM
- AWS IAM Identity Center


## Role

## Functuinality
- Allow to delegate access and action to  1 User:resources
- Allow 1 user to operate on another User:Resources


## Service role
- Is a role assume by one service to perfom actions on behalf someone
- can be operated (ie create, update, delete) by the admin 

## Service linked role
- Is a service role linked to one service to perfom actions on behalf someone
- Appear in the account
- Is owned by the service
- can not be operated  (ie create, update, delete) by the admin 

## Ec2 service role
- Is also named service role for Ec2 
- Is a role assume by 1 application runing on a VM (ie. Ec2)
- Is assigns to the Vm at starup
- allows this application to perform actions in the aws account

# Member
- account@trusting
  - the account that creates the resource
- account@trusted
  - located in the account@trusting 
  - define users that can operate on the resource owned by the account@trusting




# Operation
- Create Role
- Assume Role

# Step
- Create the role to assume in the account@dst
- Bind permission (list of operation on resources) to role

# Example
|name|tags|description|
|-|-|-|
|AWSControlTowerExecution|-|-|
# Example

- 1 account@trusting allow 1 account@trusted to create new resources (e.g new objects in an S3)
- The account@trusting
  - owns (i.e creates) the resource to be accessed
  - Controls who can access that resource

# process
- create 1 role (role-root) that can **only** assume roles (i.e role that has permission to assume RoleB)
- create roles (role-clid) that can
  - assume roles
  - have permissions on objects

# Good to know
- 1 role can be added to 1 account

- role does not have credential
- when you assume a role, it provides you with temporary security credentials for your role session.
- When you use a role, you don't have to 
  - distribute credentials 
  - manage credentials rotations
- Ec2 can assume role  (https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html)

