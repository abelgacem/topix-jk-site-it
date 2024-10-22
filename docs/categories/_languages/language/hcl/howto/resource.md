---
draft : true
mx:
  ref:
    content:
      - it/tool/terraform/definition/resource
    child:
      - definition/expression
---

# Define
## Generic
- the key  `res_name:res_type`  must be unique in a  MODULE
- each type of resource has its own set of  `attXX`
- `valXX`  can be 1 expression
```hcl
resource "res_name" "res_type" {
  att01         = val01
  att02         = val02
  ...
  
  att_nested01  {
  att01         = val01
  att02         = val02
  ...
  }
  
  att_nested02  {
  att01         = val01
  att02         = val02
  ...
  }

}
```

## Example

```hcl
# define 1 aws_instance
resource "aws_instance" "web" {
  ami           = "ami-a1b2c3d4"
  instance_type = "t2.micro"
}

# define 1 random_id
resource "random_id" "id" {
  byte_length = 8
}
```

## Example
```hcl
resource "aws_vpc" "example" {
  cidr_block = "10.1.0.0/16"
}

resource "aws_subnet" "example" {
  vpc_id = aws_vpc.example.id

  availability_zone = "us-west-2b"
  cidr_block        = cidrsubnet(aws_vpc.example.cidr_block, 4, 1)
}
```



## Example
```hcl
resource "aws_instance" "web" {
  coun  = 10    
  arg   = "value"
}

// Define > 1 > Var
variable "MyVar" {
  type =  "map"
  default = {
    key01 = "Value01"
    key02 = "Value02"
    key03 = "Value03"
  }
}

// Define > 3 > Aws:Instance (That will be passed to 1 Provider)
resource "aws_instance" "myvm" {
  // Iterate > throug > Var (of type map) > named > MyVar
  for_each      = var.MyVar
  // Define > 3 > Aws:Ami
  ami           = each.value
  instance_type = "t2.micro"
  tags = {
    Name = each.key
  }
}

```



# Reference 1 resource
## Generic
- use the following expression
```hcl
<RESOURCE TYPE>.<NAME>.<ATTRIBUTE>
```

## Example
### Define 1 resource
- define 1 resource in the file  `main.tf`

```hcl
resource "aws_instance" "ubuntu" {
  availability_zone = "us-east-1a"
  ami                         = data.aws_ami.ubuntu.id
  instance_type               = "t2.micro"
  associate_public_ip_address = true
  subnet_id                   = aws_subnet.subnet_public.id
  tags                        = local.common_tags
}
```

### Reference 1 resource
- reference the resource in the file  `outputs.tf`

```hcl
output "tags" {
  description = "Instance tags"
  value       = aws_instance.ubuntu.tags
}

```