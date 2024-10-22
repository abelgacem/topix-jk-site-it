---
draft : true
mx:
  ref:
    child:
      - howto/resource
      - definition/variable
---

# Example
## Define
```hcl
variable "aws_region" {}

variable "base_cidr_block" {
  description = "A /16 CIDR range definition, such as 10.1.0.0/16, that the VPC will use"
  default = "10.1.0.0/16"
}

variable "availability_zones" {
  description = "A list of availability zones in which to create subnets"
  type = list(string)
}
```
## Reference
```hcl
provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "main" {
  # Referencing the base_cidr_block variable allows the network address
  # to be changed without modifying the configuration.
  cidr_block = var.base_cidr_block

resource "aws_subnet" "az" {
  # Create one subnet for each given availability zone.
  count = length(var.availability_zones)

  # For each subnet, use one of the specified availability zones.
  availability_zone = var.availability_zones[count.index]

  # By referencing the aws_vpc.main object, Terraform knows that the subnet
  # must be created only after the VPC is created.
  vpc_id = aws_vpc.main.id

  # Built-in functions and operators can be used for simple transformations of
  # values, such as computing a subnet address. Here we create a /20 prefix for
  # each subnet, using consecutive addresses for each availability zone,
  # such as 10.1.16.0/20 .
  cidr_block = cidrsubnet(aws_vpc.main.cidr_block, 4, count.index+1)
}
```
# Example
## Define
- define variables in file   `variables.tf`
```hcl
variable "high_availability" {
  type        = bool
  description = "If this is a multiple instance deployment, choose `true` to deploy 3 instances"
  default     = true
}
```

## Reference
- reference in the file `main.tf`  variables define in file   `variables.tf` 
```hcl
resource "aws_instance" "ubuntu" {
  count                       = (var.high_availability == true ? 3 : 1)
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = "t2.micro"
  associate_public_ip_address = (count.index == 0 ? true : false)
  subnet_id                   = aws_subnet.subnet_public.id
  tags                        = merge(local.common_tags)
}
```


# Define > var > in > Env
```bash
## In > Bash
export TF_VAR_MyStr="var-value"

## In > main.tf
output "yo" {
  value =  "${var.MyStr}"
}
```
# Define > var > in > file > terraform.tfvars
```bash
MyStr="var-value"
```

# Define > var > in > file > *.auto.terraform.tfvars
```bash
# in > file > prod.auto.terraform.tfvars
MyStr="var-value"
```
# Define > var > in > cli
```bash
# in > file > prod.auto.terraform.tfvars
terraform apply -var 'MyStr="var-value"'
```

# Define > var > in > file > *.tfvars
```bash
# in > file > myvar.tfvars
MyStr="var-value"
# In Cli
terraform apply -ver-file myvar.tfvars
```

