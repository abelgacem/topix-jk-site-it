---
date  : 2023-02-03T07:58:55Z
draft : true
mx:  
  type:     whatis
  lp:       2
---

# Todo - ref 

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Port|[Definition][Port_Whatis]|-|
|Socket|[Definition][Socket_Whatis]|-|
|Service|[Definition][Service_Whatis]|-|
<br>

# Definition
Is1 1 process that usually
  - runs in background
  - communicate with other process [via 1 port or socket]
  - listens to query on this port sent by
    - Cli / Api
    - process

# Definition by extension
## Process@zombie
is 1 daemon that
  - Consume and lock resourcres but is no longer used by any process
  - must be killed
## Process@server
is1 synomym for daemon
