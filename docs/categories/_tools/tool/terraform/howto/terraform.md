---
draft : true
mx:  
  lp: 1
  ref:
    child:
      - definition/cli
---

# test
```powershell
# cat file at runtime
terraform plan -var-file=<(cat ../common/dev.tfvars ./dev.tfvars)
```


# terraform init
- create file@state 
  - `.terraform/terraform.tfstate`
  - `.terraform.lock.hcl`
- download provider to folder 
  - `.terraform/providers`

# Launch console
```powershell
# launch
terraform console
# test
split(",", "foo,bar,baz")
```

# Display infos
```powershell
# version
terraform -version 

# help
terraform -help
```

# Init
```powershell
terraform init
```

# Fmt
```powershell
# apply to file in current folder
terraform fmt

# apply to all file of the project
terraform fmt -recursive
```

# Apply
- play tasks
```powershell
## Play > Action
terraform apply -auto-approve
terraform apply -auto-approve -var-file="env/sandbox.tfvars"
```

- manage dependencies
```powershell
terraform apply -target=module.docker
terraform apply -target=module.postgres
```

- from another folder
```powershell
# chdir to the folder and execute tha apply
terraform -chdir=environments/production apply
```

# Destroy
```powershell
terraform destroy -var-file="xxx.tfvars"
```
