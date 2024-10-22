---
draft : true
mx:  
  lp: 1
  ref:
    child:
      - definition/terraform
      - definition/resource
      - definition/registry
    content:
      - language/vocabulary/hcl/howto/provider
      - language/vocabulary/hcl/definition/datasource
---

# Definition
- denote 1 set of resource types
- provide 1 API to manage it resources (via Terraform)
- allows to manage resources 
- defines objects via the  `ResourceType` 
- member of 1 registry

# member
- resource
- datasource

# Category
related to definition
- [Not]Core

related to expotion
- [Not]Private (i.e Public)

# Example
|name|description| 
|-|-| 
|`hashicorp/aws`|manage resource:`aws_instance` that denote 1 `aws:instance`|
|`kreuzwerker/docker`|manage resource:`docker_instance` that denote 1 `docker:instance`|
|`hashicorp/null`|manage resource:`null_resource` that denote 1 resource|

# Operation
- declare
- configure

# Good to know
- provider belongs to registry
- terraform:provider only map Editor:API (e.g AWS) to Terraform:Hcl:syntax (with some extra subtle changes sometime to keep HCL unified accros multiple providers)
  - to understand how to use a Terraform:provider when no doc/example is provided, it is mandatory to be aware of the underlying Editor:API
- https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/welcome.html


