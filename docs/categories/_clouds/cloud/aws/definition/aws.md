---
draft : false
mx:
  lp: 0
  ref:
    child:
      - definition/region
      - howto/aws
---

# Definition
- 1 acronym (**A**mazon **W**eb **S**ervices)
- a meta-sevice that acts as provider of cloud resources

## Lexical field
- cloud
- resource
- datacenter
- virtual
- region

## Purpose
- extend company infrastructures
- manage (i.e run, launch, create, test, monitor, ... ) any type of *applications, services* on any type of *datas, resources* in any *infrastructure*
- provides AWS cloud resources on demand (via CLI, GUI, API, SDK) that can be fully or patially managed by AWS:
  - AWS infrastructures
  - AWS Applications
  - AWS Datastore (e.g S3, Database, ...)
  - AWS services (250+)
  - AWS tools (100+)

# some configuration files

|Name|Cat.|Default Loc.|Description|
|-|-|-|-|
|config|File|/.aws||
|credentials|File|/.aws||
|AWS_REGION|varenv||1 file containing 1 vault:key|
|AWS_PROFILE|varenv||define the defaut profile used by awscli|
<br>


# Good to know
- Customer use security tools to monitor and protect the flow of information into and out cloud
- AWS resourses are available in regions (25+)
