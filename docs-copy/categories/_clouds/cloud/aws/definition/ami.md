---
draft : false
mx:
  lp:
  ref:
    child:
      - definition/resource
---

# Definition
- 1 acronym
- 1 VM image (e.g Os@Linux, Os@Windows)
- can be loaded into EC2

# Member
  - 1..N snapshot@EBS 


# Type 
Related to accessibility
- [not]public (i.e private)

Related to provider
- [not]Aws (i.e Community)

Related to os
- [not]Linux (i.e Windows)

Related to storage

|Name|tag|Description| 
|-|-|-| 
|EBS||backed by Amazon EBS
|S3||backed by instance store

# Operation
- Launch 1 EC2 instance from 1 AMI
- Copy 1 AMI
- Create 1 AMI from 1 AMI
- [De]register

# Good to know
- authaurization:  which AWS accounts can use the AMI to launch instances
- Ami:Id is specific to 1 aws:region
- mandatory to launch 1 EC2 instance
- It is possible to launch multiple instances from a single AMI 
