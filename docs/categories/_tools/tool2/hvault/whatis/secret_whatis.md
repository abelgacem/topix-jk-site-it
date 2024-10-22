<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md
[Secret_Howto]:    ../howto/secret_howto.md
[Engine_Whatis]:   ../whatis/engine_whatis.md

# [&larr;][Repo_Readme] Vault > What is > Secret
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Secret|||[Howto][Secret_Howto]|
|Engine|||[Definition][Engine_Whatis]|
<br>

# Type
Type
 - cf. engine:type

Type
 - dynamic
 - static

Type
 - In-Memory
 - In-File
 - In-Db

Type
 - kv
 - aws:role
 
# Toknow
- deleted data can be recovered if engine:property:destroyed is set to false

# Example
- Login: (name/pwd) to
  - app
  - db
- Api:token
- TLS certificates

# Secret@Dynamic
- Is generated when they are accessed
- Exists when it is read
- Can be revoked immediately after use
- is1 secret that is needed by  app that 
  - is ephemeral
  - has a short life
  - uniq to 1 app/service so revocation in case of compromised secret only affects 1 service

# To know
- the thoing about secrets, is: how can we periodically changes them