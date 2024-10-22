<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md
[Server_Howto]:    ../howto/server_howto.md

# [&larr;][Repo_Readme] Vault > What is > Server
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Server|[Howto][Server_Howto]|
<br>

# Member
- state
- type

# State
- Can Accept Request
- Can Respond to Request
- Cannot Respond to Request
- Cannot Accept Request
- Is Sealed
- Is in 1 Sealed state
- Is UnSealed
# Type
Type01
- [Not]Dev

Type02
- [Not]Sealed

# Server@Dev
- uses for test purpose
- is unsealed
- put secrets in Memory
- Can use TLS or not

# Server@NotDev
- Is sealed and need to be unseald before being accessible
- Can use TLS or not