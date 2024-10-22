<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md
[Server_Whatis]:   ../whatis/server_whatis.md
[Client_Howto]:    ../howto/client_howto.md
[Var_List]:        ../list/var_list.md

# [&larr;][Repo_Readme] Vault > Howto > Manage > Server
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Server|||[Definition][Server_Whatis]|
|Client|||[Howto][Client_Howto]|
|Var|||[List][Var_List]|
<br>

# Start Server
## Method
```powershell
# Define var
lFILE_LOG='/tmp/vault.log'

# Type:Dev with tty dependency
vault server -dev > ${lFILE_LOG} 2>&1 &

# Type:NoDev - use 1 ConfFile
vault server -config=config.hcl > /tmp/vault.log &
```

- save the following info in the log: 
```bash
# in dev mode
Unseal Key: yFZ+/5cDejIDRm0RJvn7ZVQzoPZZp4xS5Z50HencUlw=
Root Token: hvs.FlvQg1r0xqrUMtrzXUstjFg8
```

## Method
```powershell
# Type:NoDev - for test - to avoid mlock() call
export VAULT_DISABLE_MLOCK="TRUE" OR (disable_mlock = true in config.hcl)

# Type:NoDev - use 1 ConfFile
vault server -config=config.hcl > /tmp/vault.log &

# Export var
export VAULT_ADDR='http://127.0.0.1:8200'

# init vault
vault operator init > /tmp/vault.operator.log &
# Status server
vault status
```

# Stop server
```bash
ps -ef
kill -9 xx
```

# Status server
```bash
vault status
```
