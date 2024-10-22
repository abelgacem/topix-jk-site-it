---
draft : false
mx:
  lp: 1
  ref:
    child:
      - myconf/account
      - myconf/amc
      - howto/organization
---

# AWS root user account

- mandatory to connect to AMC

|key|value|tag|description|
|-|-|-|-|
|account name|ABTIT|
|account id|085860984338|
|account mail|abtransitionit@hotmail.com|
|account type|root||
|account info||uses MFA|
|account pwd|-|


# AWS Organization
|key|value|description|
|-|-|-|
|id|o-v2vg5zf88j|
|account id|085860984338|

## management account
- is the AWS root user account

|key|value|description|
|-|-|-|
|name|ABTIT|
|id|085860984338|


## Structure
|name|id|tags|arn|
|-|-|-|-|
|ABTIT|085860984338|default|arn:aws:organizations::085860984338:account/o-v2vg5zf88j/085860984338|
|ROOT|r-r6fy|default|arn:aws:organizations::085860984338:root/o-v2vg5zf88j/r-r6fy|


# AWS IAM Identity Center
|key|value|description|
|-|-|-|
|arn|arn:aws:sso:::instance/ssoins-665692d510ae132d
|name|mx_ic_identity_provider
|Organization ID|o-v2vg5zf88j|
|instance id|ssoins-665692d510ae132d

# Ou todo
- tester
- developer
- devops
- indus
- prod
- dba
- security
