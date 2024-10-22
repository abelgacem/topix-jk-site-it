---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/account
      - definition/landing
      - howto/act
---



# Definition
- 1 AWS service
- make usage of several other AWS services
- uses best practice to create and manage organization's landing zone
# Lexical field
- template
- provision
## funciunality
- create account
- provision account:resources and account:permissions 
- create landing zone
- create infrastructure

# process
- define the landing zone for 1 organization
- create the following acccount that appear in the **Security OU** within the ACT landing zone
  - create 1 audit account: log actions taken by your team in 1 Audit archive
  - create 1 logging account: log actions taken by your team in 1 Log archive

# Operation
- start