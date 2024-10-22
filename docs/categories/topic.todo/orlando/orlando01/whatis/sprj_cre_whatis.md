<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/subproject_list.md


[Dataplatform_List]:  ../whatis/dataptf_whatis.md

# [&larr;][Repo_Readme]Project > Orlando > Subproject > Cre Integration

# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Dataplatform |pre|[Definition][Dataplatform_List]|
<br>

# Responsability
- team MIT1

# Purpose
- ingest, transform and orgarnise objects coming from stakeholder's service *Arkea:Baf*
- Make availbale data from this input to *MMG* consumers via it service *Mmg:Dataplatform*

# The Process
## To know
- *Arkea* has 1 service called *Baf*
- *MMG* has 1 service called *Dataplatform*
- *MMG:Stream:Mit1* is responsible for managing data into *MMG:Dataplatform*
- *Vacation* Is1 file named *xxx.tar.bz2*
## Step
Step
|Seq|Action|Description|
|-|-|-|
|0|*Hsbc* send files to *Arkea*|out of scope|
|2|*Arkea:Baf* sends vacations 6 times a day to *MMG:Dataplatform*|
|3|*MIT1* collects theses vacations
|4|*MIT1* ingests, transforms theses vacations into data available to other *MMG:streams*
|4|*MIT1* sends data to *Arkea*| outgoing flow, pivot

# Step Details
## Step2

# Howto
- *Create 1 application* that is 1 automated batch application
- this application feed
  - *Mmg Dataplatform* with *Arkea* data flow
  - *Arkea ABS System* with *Mmg* data flow

## Step
- integrate data in the dataptf:landing area
- put theses files in dataptf:zone
- model data in the dataptf:structured zone 

# Tooling of the App
- backuping
- monitoring
- alerting
- Securing
- Other
  - rolling back
  - Fault tolerance
  - Error detection
  - file recovery

## Monitoring

- Monitor this application
  - functional monitoring
  - technical monitoring

## Alerting
  - trigger alert


# Todo
## distinguish
- *Mmg* dataplatform that ingest/accept data from *Arkea*
- *Arkea ABS* that ingest/accept data from *Mmg* data flow ... from *Mmg* dataplatform ??


## clear
- where data lives (are stored) for
  - flow Mmg --> Arkea 
  - flow Arkea --> Mmg

## In detail 
- Arkea sends 6 times a day 1 vacation (1 file tar.bz2)

- this file is maped into 6 type of file
  - Cre
  - Gesparam
  - Meta
  - Monitor

## 

Transform this vacation into 6 types of files
  - Store theses files in 1 location called the *Proxy Producer zone*

