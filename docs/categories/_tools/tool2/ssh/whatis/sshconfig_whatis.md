<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:      ../list/object_list.md
[SshConfig_Howto]:  ../howto/sshconfig_howto.md

# [&larr;][Repo_Readme]Domain > Computer Science > What is > SSH Config
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|SSH Config|[Howto][SshConfig_Howto]|
<br>

# Definition
- Is 1 txt file 
- is used to configure the client application named ssh
- exists in different location 


- File to configure connection with Oom hosts
- File is read by tool like scp, sftp, and rsync.

|||
|-|-|
|/etc/ssh/ssh_config|
|~/.ssh/config|

  - Use by the Config.SSH_OPTION IdentityFile


# Example
```
Host hostname1
  SSH_OPTION value
  SSH_OPTION value

Host hostname2
  SSH_OPTION value

Host *
  SSH_OPTION value

Host dev
  HostName dev.example.com
  User     john
  Port     2322
```

## Example of usage 
- ssh ovhroot22
- ssh dev  
      

### Vocabulary

- Host *
  - Match all host 
- 192.168.0.* 
  - Matches hosts in the 192.168.0.0/24 subnet.
- Host 10.10.0.?  
  - Matches hosts in the range 10.10.0.[0-9]
</md>


## Other
  - mkdir -p ~/.ssh && chmod 700 ~/.ssh
  - touch ~/.ssh/config
  - chmod 600 ~/.ssh/config
