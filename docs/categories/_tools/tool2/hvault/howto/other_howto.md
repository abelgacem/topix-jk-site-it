<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:     ../list/object_list.md
[Server_Whatis]: ../whatis/server_whatis.md

# [&larr;][Repo_Readme] Vault > Howto > Manage > Other
# List of references
|Name|Order|Seq|View|Description|
|-|-|-|-|-|
|Server|||[Definition][Server_Whatis]|
<br>

# List

```powershell
# determine the paths it responds to
vault path-help
```

# Todo
## docker + hVault
https://github.com/morningconsult/docker-credential-vault-login
This program is a Docker credential helper for the Docker daemon
When you run **docker pull** it automatically 
- authenticates to your Vault server
- Fetches your Docker credentials, 
- Login to your Docker registry using these credentials
- Pull the Docker image.

ref:
  - https://developer.hashicorp.com/vault/tutorials/secrets-management/static-secrets
