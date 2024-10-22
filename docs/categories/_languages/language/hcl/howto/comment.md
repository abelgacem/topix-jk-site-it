---
draft : true
mx:
  ref:
    content:
      - organization/org/hashicorp
      - it/tool/terraform
---

# Use
```hcl

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}```
