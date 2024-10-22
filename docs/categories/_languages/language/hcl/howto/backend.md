---
draft : true
mx:
  ref:
    content:
      - it/tool/terraform/definition/backend
---

# Define
## Example
define as local 
```hcl
# in main.tf
terraform {
  backend "local" {
    path = "relative/path/to/terraform.tfstate"
  }
}
```

## Example
define as remote
```hcl
# in main.tf
terraform {
  backend "remote" {
    organization = "example_corp"

    workspaces {
      name = "my-app-prod"
    }
  }
}
```
