---
draft : true
mx:  
  lp: 1
  ref:
    child:
      - definition/terraform
---


# Process
- generate 1 plan
- check    1 plan
- apply    1 plan


# Cli

|Param|Object|Verb|Description|
|--|--|--|--|
|Apply|Infra|Build, Update|
|Get|Module|Detect|
|Destroy|Infra|Delete|
|Import|Infra|Import|
|Init|<li>Provider</li><li>Module</li>||store in folder **.terraform/**<li>provider:code</li><li>module:metadata</li><li>tfstate:metadata</li>|
|Providers|Provider|Display|Dependency
|Plan|Action|Display, Rundry|
|Refresh|Tfstate|Update|Local
|Show|Plan, Tfstate|Display|
|Validate|Syntax|Validate



# Help
```bash
terraform -version
terraform -help
terraform plan -help
terraform init -help
```

# Other Example
## Apply
```bash
## Play > Action
terraform apply -auto-approve
terraform apply -auto-approve -var-file="env/sandbox.tfvars"



## Manage > Dependency
terraform apply -target=module.docker
terraform apply -target=module.postgres
```

## Init
```bash
terraform init
```

## Destroy
```bash
terraform destroy -var-file="xxx.tfvars"
```

[//]: #(Reference.Std)

[Terraform_Whatis]:         ../whatis/terraform_whatis
