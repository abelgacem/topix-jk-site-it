---
layout: topic
---

# Term
- PM = Physical Machine
- VM = Virtual Machine
- OS = Operating System


# Good container
- any services
- db services
  - postgres
  - Mysql
  - ...
- web services
  - nginx
  - apache
  - ...

# To know
- The container should or not the same in the different environment (eg. test, dev, uat, staging, prod, test, homol, preprod, isoprod)

# Todo
- dind = docker in docker
- vnv  = vm in vm
# container as a services
a container that provide one or more services. eg.
- container:ansible   as a service to provision          1 Vm or Container
- container:vault     as a service to provide secret to  1 Vm or Container
- container:terraform as a service to provision infra on 1 Vm or Container
- container:aws       as a service to act on 1 Aws

