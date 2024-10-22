---
draft : false
mx:
  lp:
  ref:
---

# Lecical Field
  - virtual firewall
  - manage Traffic@(Inbound, Outbound)
  - EC2
  - VPC

# Definition
  - 1 acronym
  - like firewall for
    - EC2 instances
    - VPC
  - manage
    - ec2 instance:Traffic@incoming
    - ec2 instance:Traffic@outgoing
  - associated to nstance network interface (eth0)

- Define > Traffic.Inbound > to > Ec2, Vpc
- Is > bind > to >  Network:Interface

# Member
- Rules

# Member
- 1 Name
- 1 Id
- 1..N Rules


# Category
- Default
- Custom


# Toknow
- 1 EC2 can have to 1..5 SG
- 1 EC2 mandatory have 1 SG


# Process
- Define rule concerning traffic@(inbound, outbound)
- associate rule to Ec2
