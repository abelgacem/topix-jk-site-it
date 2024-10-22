---
draft : true
mx:
  ref:
    content:
      - it/tool/terraform/definition/resource
---

# Example
## Define
```hcl
locals {
  name        = (var.name != "" ? var.name : random_id.id.hex)
  owner       = var.team
  common_tags = {
    Owner = local.owner
    Name  = local.name
  }
}
```

## Use

```hcl
resource "aws_vpc" "my_vpc" {
  cidr_block           = var.cidr_vpc
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags                 = local.common_tags
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.my_vpc.id
  tags   = local.common_tags
}

resource "aws_subnet" "subnet_public" {
  vpc_id     = aws_vpc.my_vpc.id
  cidr_block = var.cidr_subnet
  tags       = local.common_tags
}
```