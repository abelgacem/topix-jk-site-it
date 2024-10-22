---
draft : true
mx:  
  lp: 1
  ref:
    child:
      - howto/terraform
---

# Available options for the CLI

|learning path|Param|Object|Verb|Description|
|-|-|-|-|-|
|2|apply|infra|build, update|plan|
||console|code|debug|code, expression|
||destroy|infra|delete|
||fmt|code|apply|best practice, indentation, spaces|
||import|infra|import|
|0|init|working directory|init|Create Tree|
|1|plan|plan|create|display, dry run|
||refresh|TFS|update|Local|
||show|plan, TFS|Display|
||validate|code|check|code syntax|



# details of the tasks
- `init`
  - loads the needed plugins (aka  `providers`) in folder ./.terraform
- `Plan`
  - makes a diff bettween
    - the current state (i.e that is in the TFS or retrieve from provider by using resource:id)
    - the targetted state defined by the code (aka configuration)
- `apply`
  - applys the  `plan`  to build/uopdate the new infrastructure 
   

# Cli - Todo

|Param|Object|Verb|Description|
|--|--|--|--|
|Get|Module|Detect|
|Init|<li>Provider</li><li>Module</li>||store in folder **.terraform/**<li>provider:code</li><li>module:metadata</li><li>tfstate:metadata</li>|
|Providers|Provider|Display|Dependency



