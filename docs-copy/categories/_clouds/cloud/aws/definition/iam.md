---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/ic
      - howto/iam
---



# Definition
- 1 acronym
- 1 service

## Purpose
- control authentication and authorization for 1 AWS account. 
- manage identity that connect to AWS
- manage access to AWS resources
- define who can access what  

## Lexecal Field
- account
- role
- user
- identification
- group
- authorization
- saml

# Definition
- Denote User:Role

# account
## Definition

## Type
- User@Root
- User@Iam

## Member

|Name|tags|Description|Example
|-|-|-|
|1 Id|Mandatory|12 integer Digits
|1 Alias|Optional|String
|1..N Group|
|1..N User|
|1..N Role|
|1 ConnectionString||<li>https://\${Id}.signin.aws.amazon.com/console</li><li>https://\${Alias}.signin.aws.amazon.console</li>


# Role
## Def
- is1 identity
## Toknow
- 1 User assume 1..N Role
- 1 role is usedd to be assumed by 1 user that need some authorization
- when 1 role is assumed. It provide temporary pwd or AccessToken
- can be assumed by
 - user
 - service


# User
## Def
- is1 identity
## Toknow
- 1 User endosse 1..N Role
- 1 role est conçu pour être endossé par tout utilisateur qui en a besoin. 
- lorsqu'un role est endossé, il fournit des informations d'identification de sécurité temporaires pour votre session de rôle.

## Reference
- https://docs.aws.amazon.com/fr_fr/IAM/latest/UserGuide/id_roles.html



# Toknow
- 1 User Have 1 Id
- 1 User connect to 1 Compte.Aws with 1 Role.Aws 
- 1 Role.Aws have 1..N Policy that specify what is Allowed on the Compte

# Todo
- Allows to manage
  - users, credentials
  - Access keys
  - Permissions (i.e which AWS resources users and applications can access)
