---
draft : true
mx:  
  lp: 1
  ref:
    child:
      - definition/resource
      - definition/cli
      - definition/infrastructure
---


# Process
|verb|object|description|
|-|-|-|
|create|infrastructure|use HCL to define the targeted infrastructure|
|initialize|plugins|Install the plugins Terraform needs to manage the infrastructure
|plan|infrastructure|preview (i.e dry-run the code) the changes Terraform will make to match your configuration.
|apply|infrastructure|create/update the infrastructure


# Process
- `git clone`  a GITLAB repository containing TERRAFORM code
- create a branch for you code from the good branch
- create/upddate the needed TERRAFORM files
- `gi commit`  the changes
- `git merge`  your code back to that branch
- `git push`  the changes
- an existing pipeline is launched that
  - check the code
  - create a  `merge request`
- validate the  `merge request`  (auto or manual)
- an existing pipeline is launched that
  - play the TERRAFORM code

