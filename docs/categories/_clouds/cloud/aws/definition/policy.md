---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/permission
      - definition/arn
---



# Definition
- 1 AWS object
- 1 JSON file
- linked to 1
  - IAM identity (ie. user, role, groups of users)
  - AWS resource
- denote permissions objects for that identity

## Funcyiunality
- [dis]allow (i.e denied) actions on objects


# Category
related to who manage
- managed policy
- customer managed policy
- inline policy

related to what id managed
- identity-based policies
- resource-based policies
- permissions boundaries
- Organizations SCPs
- ACLs
- session policies

# To Rewrite:Category
Subcategory
- Root
- OrganizationScp
- Iam

Subcategory
- Managed    (aka standalone)
- NotManaged (aka standalone)

Subcategory
- identity-based policies
- resource-based policies
- permissions boundaries
- Organizations SCPs
- ACLs
- session policies


## Managed Policy
- 1 policy that
  - is created, defined and managed by Aws
  - has 1 ARN
  - Cannot be update
  - provide permissions for many common use cases


## Customer managed policy
- 1 policy that
  - is defined by user

## Inline policy
- 1 Customer managed policy that
  - is linked to only 1..1 Identity (ie. user, group, role)

## Identity-based policies
- 1 policy that
  - is linked to 1 identity 
  - can inclde:
    - managed policies
    - customer managed policies
    - inline policies
## Todo:Resource-based policies
## Todo:Permissions boundaries
## Todo:Organizations SCPs
## Todo:ACLs
## Todo:Session policies


# Operation
- create
- update
- delete
- link to IAM identities

# Example

|name|type|description|
|-|-|-|
|||Allow usage of console, cli, sdk, api for 1 specific action|
|GetAction||Retrieves information about 1 User@Iam|
|CreateAccessKey|iam
|UpdateAccessKey|iam
|CreateUser|iam
|ListUsers|iam



## Example

|name|tags|description|
|-|-|-|
|`AmazonDynamoDBFullAccess`|-|define permissions for service administrators by granting full access to a service|
|`IAMFullAccess`|-||
<br>

# Good to know
- the policy is evaluated when the Identity makes a request
- Permissions in the policy determine whether the request is allowed or denied
