---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/organization
      - howto/console
      - howto/ic
---

# Operation with console
## create
prerequisits
 - connect to the AWS management console with AWS root user account
 - check no AWS organization is created

tasks
 - access > console > AWS Organizations
 - click > create an organization
 - check IAM Identity Center is disabled 
 - enable IAM Identity Center
 - check IAM Identity Center is enabled for the organization 
 - create temporary admin user

## check IAM Identity Center is enabled/disabled for the organization 
tasks
 - access > console > AWS Organizations
 - services > AWS IAM Identity Center (AWS Single Sign-On) > enabled/disabled



# Operation with terraform
tasks
- easy to create organization
- impossible to enable Identity Center
- pbs concerning automatic mail for enrollement
 
# create temporary admin user 
tasks
- create temporary 
  - identity_center:persission_set (mx_icps_admin_tmp)
  - identity_center:user (tmp_admin)
- add the couple (user/ps) to the organization management account


# add couple (user|group/permission set) to management account
cf. identity center > howto
