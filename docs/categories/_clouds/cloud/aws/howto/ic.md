---
draft : false
mx:
  lp:
  ref:
    child:
      - howto/organization
      - howto/console
      - definition/ic
---


# Operation with console

## enable IAM Identity Center
prerequisits
- access > console > AWS IAM Identity Center
- AWS IAM identity center is disableb

tasks
- access > console > AWS IAM Identity Center
- click > Enable
- settings > details > edit instance name > define a name > "ic_abtit"
- settings > identity source > actions > customize portal URL > "https://abtit.awsapps.com/start"



## create group
- access > console > AWS IAM Identity Center
- console > groups > create group > provide infos
  - name (e.g mx_icgroup_admin_tmp)
- click > create  
## create user
- access > console > AWS IAM Identity Center
- console > users > adduser > provide infos
  - username (e.g admin_tmp) 
  - add user to group > if needed  

## Create permissions set
- access > console > AWS IAM Identity Center
- console > permission sets > create permission sets > provide infos
  - types  > predefined (possible values > predefined|custom)
  - policy > AdministratorAccess (possible values > several AWS managed policies)
- click > next > provide infos
  - description
  - duration
  - tags
- click > next > review and click > create  

## add couple (user|group/permission set) to management account
prerequisits
- ic:user exists
- ic:ps exists

tasks
- access > console > AWS IAM Identity Center
- console > Multi-account permissions > Aws account
- check box > management account > assign user or groups > provide info

# with terraform
- create group
- create user
- create permissions sets
  - based on AWS managed policy
- add user to group
