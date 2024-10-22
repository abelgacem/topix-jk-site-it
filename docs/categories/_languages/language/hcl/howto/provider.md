---
draft : true
mx:
  ref:
    content:
      - it/tool/terraform/definition/provider
---

# declare the provider
```hcl
terraform {
  required_providers {
    
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }

    awscc = {
      source  = "hashicorp/awscc"
      version = "~> 0.73"
    }    

    aws = {
      source = "hashicorp/aws"
      version = "5.43.0"
    }
  }
}
```


# configure the provider
```yaml
# example
provider "aws" {
   region     = "eu-central-1"
   access_key = "AKIATQ37NXB2AYK7R6PQ"
   secret_key = "S1Yg1Qm2JNSej8EHdhPTiu5l5ZD36URsedf32kNT"
}

# example - values are provided as envar
provider "aws" {}

```


# Todo

```hcl
provider "kubernetes" {
  version = "~> 1.10"    
}
```

