<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md
[Engine_Whatis]: ../whatis/engine_whatis.md

# [&larr;][Repo_Readme] Vault > Howto > Manage > Token
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Engine|||[Definition][Engine_Whatis]|
<br>

# manage secret@kv

```powershell
# generic
vault kv <subcommand> [options] [args]

# create kvpair
## mount path=secret (specific to engine@kv)
## path=Hello
## Key   = foo
## value = world
vault kv put -mount=secret hello foo=world
```

# Save Token and Key
```
Unseal Key: sVTjQPN1lG2iEe9tozDVNREoBHp6CeBgHVMa4cxewnQ=
Root Token: hvs.0zBg3MDwad7xPehyuwLknrU4
```