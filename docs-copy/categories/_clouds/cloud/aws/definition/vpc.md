---
draft : false
mx:
  lp:
  ref:
    content:
      - it/concept/network/definition/cidr
      - it/concept/network/definition/nat
---

# Definition
- 1 root private virtual network on aws
- 1 set of AWS services

# Member
- Cidr
- Subnet
- Security Group
- Network
  - routing table 
  - ACL


# Subnet
## Category
- Public
  - configure to accept traffic@Inoutbound from Internet
    - UseCase: LoadBalancer, Server@Web
- Private
  - configure to deny traffic@Inoutbound from Internet
  - configure to accept traffic@Inoutbound from Vpc
    - UseCase: Db, Server@Web

# UseCase
## Nat in Subnet@Public
- example: allow server to access patch from Microsoft/Linux

# Definition > Data Transfer > Type
- Inbound
- Outbound

# Good to know
- can be connected to "on premice" network by via
  - Gateway
  - `direct connect`


