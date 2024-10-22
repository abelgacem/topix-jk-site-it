<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../howto/secret_howto.md
[Secret_Whatis]: ../whatis/secret_whatis.md
[Secret_Howto]:  ../howto/secret_howto.md
[Engine_Whatis]: ../whatis/engine_whatis.md
[Engine_Howto]:  ../howto/engine_howto.md
[Path_Whatis]:   ../whatis/path_whatis.md

# [&larr;][Repo_Readme] Vault > Howto > Manage > Secret@Kv
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Secret|||[Howto][Secret_Howto], [Definition][Secret_Whatis]|
|Engine|||[Definition][Engine_Whatis]|
|Path|||[Definition][Path_Whatis]|
<br>



# Create

```powershell
# method
vault kv put strin01 strin02
# create@generic
vault kv put strin01 strin02
```

## example
```bash
# Define var
lENGINE_KV_PATH="kv1"
lKEY_PATH="aws"
lKEY_NAME="key_id"
lKEY_VALUE="AKIARH7NWUYJKHQSWKUB"

# create
## method
vault kv put ${lENGINE_KV_PATH}/${lKEY_PATH}        ${lKEY_NAME}=${lKEY_VALUE}
## method
vault kv put -mount=${lENGINE_KV_PATH} ${lKEY_PATH} ${lKEY_NAME}=${lKEY_VALUE}
```
## example
```bash
# Define var
lENGINE_KV_PATH="kv1"           ## define Path to store:name
lKEY_PATH="gitlab/accesstoken"  ## define Path to store:folder
# store file
lKEY_NAME="abtit"
lKEY_VALUE="bshdhsdnbsdsddnf"
vault kv put ${lENGINE_KV_PATH}/${lKEY_PATH}        ${lKEY_NAME}=${lKEY_VALUE}

# 
lKEY_NAME="str"
lKEY_VALUE="bd§hbddççè"

# create
vault kv put ${lENGINE_KV_PATH}/${lKEY_PATH}        ${lKEY_NAME}=${lKEY_VALUE}
vault kv put -mount=${lENGINE_KV_PATH} ${lKEY_PATH} ${lKEY_NAME}=${lKEY_VALUE}
```

# List all
```bash
# generic
vault kv list ${lENGINE_KV_PATH}[/${lKEY_PATH}]
```

# Get 1
```bash
# generic
vault kv get ${lENGINE_KV_PATH}/${lKEY_PATH}/${lKEY_NAME}

# Secret@kv
vault kv get ${lENGINE_KV_PATH}/${lKEY_PATH}
vault kv get -mount=${lENGINE_KV_PATH} ${lKEY_PATH}
vault kv get -mount=${lENGINE_KV_PATH} -format=json ${lKEY_PATH} | jq -r .data.data.excited
```

# Delete 
```bash
vault kv delete ${lENGINE_KV_PATH}/${lKEY_PATH}
```

# Recover
```bash
vault kv undelete -mount=${lENGINE_KV_PATH} -versions=2 ${lKEY_PATH}
```

