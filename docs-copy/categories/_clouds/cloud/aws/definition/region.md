---
draft : false
mx:
  lp:
  ref:
    child:
      - howto/region
      - definition/zone
---

# Definition
- 1 geographical location on earth

# Member
- zones



# Example
Region eu-west-3 (Paris) has following AZ
- eu-west-3a
- eu-west-3b
- eu-west-3c
 

# Good to know
- there is more than 80 existing regions
- there is more than 80 existing regions
- instances of 1 AWS resource (e.g EC2, SQS, ...) created in 1 region (e.g EC2, SQS, ...) are independant
- if a region becomes unavailable. resources should be available in another region
- fault tolerance concerns vailabiility of resource 
  - in different region:AZ
  - in different Aws:region

# Definition > Region
- Is 1 Location.Physical (i.e geographic Region)
- Member > 1..N > Zone

