---
draft : false
mx:
  lp:
  ref:
    child:
---

# 


# get info
## organisations
```powershell
aws organizations list-accounts
aws organizations describe-organization
```

# get info
```powershell
## other
aws --version

## help
aws ec2 help

## profile
aws configure list-profiles
aws configure list

# define var
export AWS_REGION="$(aws configure get region)"
lROLE_NAME="$(aws configure get sso_role_name)"
lACCOUNT_ID="$(aws configure get sso_account_id)"
lACCESS_TOKEN=$(jq . ~/.aws/sso/cache/* | jq -r '.accessToken' | grep -v null)

# get standard credentials from SSO
aws sso get-role-credentials  --role-name ${lROLE_NAME}  --account-id ${lACCOUNT_ID}  --access-token ${lACCESS_TOKEN}

# get info
aws organizations list-accounts

# get info for a specific user
aws sso list-accounts         --access-token ${lACCESS_TOKEN}
aws sso list-account-roles    --account-id ${lACCOUNT_ID}  --access-token ${lACCESS_TOKEN}
``` 

# configure SSO for AWS IAM IC
Provide:
- SSO session name (Recommended): mx_ssoname_max
- SSO start URL [None]: https://abtit.awsapps.com/start/#
- SSO region [None]: eu-west-3
- SSO registration scopes [sso:account:access]: sso:account:access 
```poweshell
aws configure sso

You can close this window and start using botocore-client-mx_ssoname_max.

The only AWS account available to you is: 085860984338
Using the account ID 085860984338
The only role available to you is: AdministratorAccess
Using the role name "AdministratorAccess"

```

# Connect to AWS
## via AWS IA Identity Center
- the table provide an example of convention used for the name of the profile

|name|semantic|
|-|-|
|exxx_ryyy_uzzz|User@zzz assume role yyy in env xxx|
|eDev_rAdminTech_uSre|User@Sre assume role Addmin-Tech Dev in env Rev|
|eDev_rAdminBill_uFunc|User@Func assume role Admin-Bill in env Dev|
|ePrd_rAdminTech_uSre|User@Sre assume role Addmin-Tech in env Prd|
|ePrdIsoprd_rDev_uDev|User@Dev assume role Dev in env Prod-Isoprod|
|eStagingUat_rAdmin_uSre|User@Sre assume role Admin in env Staging-Uat|

- create the awscli config file with the following content

```ini
[default]
region         = eu-west-3

[profile eDev_rAdmin_uSre]
region         = eu-west-3
sso_session    = mx_sso_max     # custom 
sso_account_id = 085860984338   # from AWS access portal 
sso_role_name  = AdministratorAccess

[profile eDev_rDev_uDev]
region         = eu-west-3
sso_session    = mx_sso_max
sso_account_id = 085860984338
sso_role_name  = AnotherRole

[profile eProd_rAdmin_uSre]
region         = eu-west-3
sso_session    = mx_sso_max
sso_account_id = 111122223333
sso_role_name  = AdministratorAccess

[profile eProd_rAdminBill_uFunc]
region         = eu-west-3
sso_session    = mx_sso_max
sso_account_id = 111122223333
sso_role_name  = AnotherRole

[sso-session mx_sso_max]
sso_region     = eu-west-3                          # from AWS AP
sso_start_url  = https://abtit.awsapps.com/start/#  # from AWS AP
sso_registration_scopes = sso:account:access
```
- sign in to AWS access portal and let the session open 
- init awscli (interactive action)
  - this action create 2 files@JSON in folder `$HOME/.aws/sso/cache`

```powershell
# define var
export AWS_DEFAULT_PROFILE="dev"
# cli
aws sso login
```

- get the credentials

```powershell
# define var
lAWS_PROFILE_NAME="dev"
lAWS_REGION_NAME="eu-west-3"
lABTIT_ROLE_NAME="AdministratorAccess"
lABTIT_SSO_PROFILE_NAME="AdministratorAccess"
#
aws sso get-role-credentials --profile ${lAWS_PROFILE_NAME} --region ${lAWS_REGION_NAME}   --role-name ${lABTIT_SSO_PROFILE_NAME}


aws sso get-role-credentials help
--profile your-profile-name 
--account-id your-account-id 
--role-name your-permission-set-arn

```
# Install

# Other
## no TLS
```shell
--no-verify-ssl
```

## get certificate
```shell
openssl s_client -connect {HOSTNAME}:{PORT} -showcerts
```

# transfrom ceertificate format
- openssl x509 -inform der -in "C:\Users\UserX\Documents\RootCert.der" -out RootCert.pem


# Todo
# Install on ubuntu 20.04
- apt-get install awscli -y
  - Geographic Area : europe : 8
  - Time Zone : Paris : 37
# Test
``` 
aws --version
aws configure list
```





# Toknow
Awscli can use 1..N Profile for the same Aws:Compte:User

# Create Access Token to use Aws cli
- IAM > left > user > \${User} > Security and identification > Access key > Create Access Key

# Aws configure
```bash
# Define profile
aws configure --profile access.admin
# Define defautlt profile
```
