<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:       ../list/object_list.md
[Server_Whatis]:    ../whatis/server_whatis.md
[Server_Howto]:     ../howto/server_howto.md
[Engine_Kv_Whatis]: ../whatis/engine_kv_whatis.md
[Engine_Kv_Howto]:  ../howto/engine_kv_howto.md
[Engine_Whatis]:    ../whatis/engine_whatis.md

# [&larr;][Repo_Readme] Vault > List > Engine
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Engine|||[Definition][Engine_Whatis]
<br>

# List of category of engine

|Name|Subcategory|View|Description|
|-|-|-|-|
|cubbyhole|||per-token private secret storage
|identity|||identity store
|kv|kv1, kv2|[Howto][Engine_Kv_Howto], [Definition][Engine_Kv_Whatis]|kvpair store
|aws||[Howto][Engine_Kv_Howto], [Definition][Engine_Kv_Whatis]|xxx
|system|||system endpoints used for control, policy and debugging
<br>

# Engine@Kv
## Definition
- is1 generic kv store 
- store arbitrary secrets within the configured physical storage for Vault
- Secrets written to Vault are encrypted and then written to backend storage
- the backend storage mechanism 
  - never sees the unencrypted value
  - doesn't have the means necessary to decrypt it without Vault

## Type
- v1: no versioning of secret
- v2: versioning of secret

# Engine@Aws
## Toknow
- when aws:credential are stored in
- The engine will use them to communicate with AWS in future requests (todo:use case)
## Toknow
- Vault knows how to create 1 user@Iam via the API:Aws BUT
- user@Iam have
  - permissions
  - groups
  - policies
