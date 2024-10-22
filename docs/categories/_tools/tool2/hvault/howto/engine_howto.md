<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md

[Engine_Whatis]: ../whatis/engine_whatis.md
[Secret_Whatis]:    ../whatis/secret_whatis.md
[Secret_Kv_Howto]:  ../howto/secret_kv_howto.md

# [&larr;][Repo_Readme] Vault > Howto > Manage > Engine
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Engine|||[Definition][Engine_Whatis]|
|Secret|||[Definition][Secret_Whatis]|
|Secret Kv|||[Howto][Secret_Kv_Howto]|
<br>

# List
```bash
# engine@enable
vault secrets list [--detailed]
```


# Enable / Create 1 engine
## engine@kv
```bash
# define var
lENGINE_TYPE="kv"

## Custom path
lENGINE_PATH="kv1"
lENGINE_DESC="Test engine kv-v1"
#
vault secrets enable -path="${lENGINE_PATH}" -description="${lENGINE_DESC}" "${lENGINE_TYPE}"
```
## engine@aws
```bash
# define var
lENGINE_TYPE="aws"

## Custom path
lENGINE_PATH="mxaws"
lENGINE_DESC="Test engine aws"
#
vault secrets enable -path="${lENGINE_PATH}" -description="${lENGINE_DESC}" ${lENGINE_TYPE}
```



# Configure
## engine@aws
```bash
# Define var
## Export Aws:credential
export AWS_ACCESS_KEY_ID="AKIAIOSFODNN7EXAMPLE"
export AWS_SECRET_ACCESS_KEY="wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
export AWS_DEFAULT_REGION="us-west-2"
lSECRET_PATH="config/adm"

# Configure engine@aws
lSECRET_PATH="config/root"
vault write ${lENGINE_PATH}/${lSECRET_PATH} \
    access_key=${AWS_ACCESS_KEY_ID}         \
    secret_key=${AWS_SECRET_ACCESS_KEY}     \
    region=us-east-1
```

# Diasable
```bash
vault secrets disable ${lENGINE_PATH}
```
# Display info
```bash
# on Path@custom
vault path-help ${lENGINE_PATH}
```
