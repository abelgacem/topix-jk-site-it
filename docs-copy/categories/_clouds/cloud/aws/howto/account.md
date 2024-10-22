---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/account
---



# connect as AWS account root user
|step|tags|description|
|-|-|-|
|Browser > Url: https://account_alias_or_id.signin.aws.amazon.com/console/|provided by administrator|
|Choose > Root User||

# create administrative user
- 
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
