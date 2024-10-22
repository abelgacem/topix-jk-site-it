<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md
[Server_Whatis]:   ../whatis/server_whatis.md
[Server_Howto]:    ../howto/server_howto.md
[Var_List]:        ../list/var_list.md

# [&larr;][Repo_Readme] Vault > Howto > Manage > Client
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Server|||[Definition][Server_Whatis], [Howto][Server_Howto]|
|Var|||[List][Var_List]|
<br>

# Configure vault:client to access vault:server
```bash
# define var
lTOKEN_ROOT='hvs.FlvQg1r0xqrUMtrzXUstjFg8'

# define vault:server:port 
export VAULT_ADDR='http://127.0.0.1:8200'

# define vault:server:token@root
## Method
export VAULT_TOKEN="${lTOKEN_ROOT}"
## Method
export VAULT_DEV_ROOT_TOKEN_ID="${lTOKEN_ROOT}"
```




