---
draft : true
mx:  
  lp: 1
  ref:
    content:
      - language/vocabulary/hcl/howto/resource
    child:
      - definition/infrastructure
      - definition/provider
      - definition/module
      - definition/terraform
---

# Definition
- model 1 infrastructure's object
  - a member of 1 infrastructure 
  - is defined by the code:  `resource`  in a  `module`
- managed by 1 provider
- sent to provider by terraform

# Member
- name
- resource type (member of a provider)
- set of kvpair 

# Category
- [Not]Provider
- Read
- Read/Write

# Operation
  - Create, Add
  - Read
  - Delete
  - Update
  - Reference

# Example
- virtual networks
- compute instances
- DNS records

# Manage infrastructure's objects
- the process to manage resources is the following:
  - **create** the resources that exist in the code **but** are not associated with a real infrastructure object in the TFS
  - save theses resources identifier in the TFS
  - **destroy** resources that exist in the TFS **but** no longer exist in the code
  - **Update** in-place resources whose arguments have changed
  - destroy and re-create resources whose arguments have changed **but** which cannot be updated in-place due to remote API limitations


# dependency
- Most resource dependencies are handled automatically
- 
# Good to know
- before defining a resource, it is mandatory to initialize terraform to reference the provider that provide this type of resource
- the following key can be define for any tpe of reource
  - `depends_on`
  - `count`
  - `for_each`
  - `provider`
  - `lifecycle`
  