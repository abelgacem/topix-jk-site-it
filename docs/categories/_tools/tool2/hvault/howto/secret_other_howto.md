<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:   ../howto/secret_howto.md
[Secret_Whatis]: ../whatis/secret_whatis.md
[Secret_Howto]:  ../howto/secret_howto.md
[Engine_Whatis]: ../whatis/engine_whatis.md
[Engine_Howto]:  ../howto/engine_howto.md
[Path_Whatis]:   ../whatis/path_whatis.md

# [&larr;][Repo_Readme] Vault > Howto > Manage > Secret@Other
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Secret|||[Howto][Secret_Howto], [Definition][Secret_Whatis]|
|Engine|||[Definition][Engine_Whatis]|
|Path|||[Definition][Path_Whatis]|
<br>



# Create
```bash
# write secret in "generic secrets engine" according to doc
vault write secret/my-secret foo=bar

```bash
# write 1 new encryption key in "the transit secrets engine" according to doc
vault write -f transit/keys/my-key
```