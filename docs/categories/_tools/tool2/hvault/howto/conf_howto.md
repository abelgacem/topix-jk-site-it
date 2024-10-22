<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md

[Engine_Whatis]: ../whatis/engine_whatis.md
[Secret_Whatis]:    ../whatis/secret_whatis.md
[Secret_Kv_Howto]:  ../howto/secret_kv_howto.md

# [&larr;][Repo_Readme] Vault > Howto > Manage > Configuration
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Engine|||[Definition][Engine_Whatis]|
|Secret|||[Definition][Secret_Whatis]|
|Secret Kv|||[Howto][Secret_Kv_Howto]|
<br>

# Define the backend for vault
## Method - folder with High Availability
```ini
# storage = HA
storage "raft" {
  path    = "./vault/data"
  node_id = "node1"
}
```
## Method - file
```ini
# storage = HA
storage "file" {
  path    = "vault-data"
}
```
## Method - envar
```ini
# storage = folder with HA
export VAULT_RAFT_PATH="./vault/data"
export VAULT_RAFT_NODE_ID="node1"
# because of mlock() with backend raft
export VAULT_DISABLE_MLOCK="TRUE"
```

# listen to client request 
```ini
# listen = http => VAULT_ADDR=http://127.0.0.1:8200
listener "tcp" {
  address     = "127.0.0.1:8200"
  tls_disable = "true"
}
```
# Define conf
```bash
api_addr      = "http://127.0.0.1:8200"
cluster_addr  = "https://127.0.0.1:8201"
ui            = true
# because of mlock() with backend reft
disable_mlock = true
```
