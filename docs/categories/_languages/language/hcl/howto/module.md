---
draft : true
mx:
  ref:
    child:
      - list/file
      - definition/module
---

# instanciate a child module
## instanciate
- define the instruction:`module` 
- `the_servers`  denote the name of the instanciated module 
- `source`   denote the path/url to the child/remote module
- `servers`  denote an input variable
```hcl
# this module define a file outputs.tf with instance_ids
module "the_servers" {
  source = "./app-cluster"

  servers = 5
}
```

## Use outputs as input by calling module
```hcl
resource "aws_elb" "example" {
  # ...

  instances = module.servers.instance_ids
}
```


# define 
- create a folder with .TF files
- create 