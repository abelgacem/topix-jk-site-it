<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md
[Engine_Howto]:    ../howto/engine_howto.md
[Engine_List]:     ../list/engine_list.md
[Secret_Whatis]:   ../whatis/secret_whatis.md

# [&larr;][Repo_Readme] Vault > What is > Engine
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|engine|||[Howto][Engine_Howto], [List][Engine_list]|
|secret|||[Definition][secret_Whatis]|
<br>

# Type
- generic
- transit

# Definition
Is1 Vault core object that manages different category of secrets
  - stores secret
  - encrypts data into secret 
  - generates secret 
    - key@(ssh, priv)
    - certificate
    - dynamic credential on demand
    - ...

# process
When 1 request is sent to Vault server, the engine processes it

Set of verbs (ie interface, action) is unfied accross all the engine (exeption exits)
- Read
- Write
- Delete
- Put

# Member
- Mount point / Path  
- Name
- UUID 

# Operation

|name|type|description|
|-|-|-|
|Enable|-|Content is accesible via Api:Path|
|Disable|-|Content is deleted|
|Move|-||
|Tune|-|Configure the Engine. Act on Data and return Result
|

# To know
- there is different category of engines to manage different category of secrets