---
draft : true
mx:
  ref:
    child:
      - list/file
      - definition/module
---


# Todo
## Create Account
- Browser > Url > https://app.terraform.io/signup/account
- Confirm e-mail
- select > 
- Create > 1 > organization
- select workflow:type
  - cli
  - git
  - api
- Create Workspace
- invite User
- Add user to team  

## Install Terraform in Container.Docker
### Authenticate to TFC
```bash
# access_key will be stroed in ~/.terraform.d/credentials.tfrc.json
terraform login
```

## Tutorial
```bash
git clone https://github.com/hashicorp/tfc-getting-started.git
cd tfc-getting-started
scripts/setup.sh
```
