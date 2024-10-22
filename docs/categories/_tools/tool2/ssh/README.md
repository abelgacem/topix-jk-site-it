<head><link rel="stylesheet" href="../../md.css"/><script src="../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../README.md
[Object_list]:        ./list/object_list.md
[Reference_List]:     ./list/reference_list.md
[Term_list]:   #reference



# [&larr;][Repo_Readme]Domain > Computer Science > SSH
# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|Object|see|[List][Object_list]|List of Whatis,Howto, List
|Reference|see|[List][Reference_List]|List of *external* references
|Terminology|see|[List][Term_list]|List of *specific* terms
<br>

# Definition
- Is 1 
  - acronym
  - application of type client/server
  - `CLI`
- Allows to 
  - execute actions on 1 remote vm called the SSH server from 1 vm called the SSH Client
  - be connect to this vm remote (ie have 1 interactive shell on this server from the client)
  - have access 1 gui:web - running on 1 vm remote (the SSH server) - on another vm (the SSH client)

# Configuration file
||||
|-|-|-|
|Name|Location|Description
|SSH config file|<li>`~/.ssh/config`</li><li>`/etc/ssh/ssh_config`</li><li>`/etc/ssh/ssh_config.d/*.conf`</li>|Client configuration
|SSHD config file|`xxx`|Server configuration
|`Etchost`|`/etc/hosts`|Simple Dns configuration
|`KnownHost`|`~/Max/.ssh/known_hosts`|
<br>

# To know
1 ssh connection involve
- several Server SSH public key (can get it with *ssh_keyscan*)
- 1 Client SSH keypair (can create them with *ssh_keygen*)
  - 1 public key
  - 1 rivate key
- 2 os user that
  - 1 that exists and inits the connection from the client
  - 1 that exists on the server
- 1 server that
  - runs 1 SSH Daemon listening to incoming connections/requests
  - has the public key of the client keypair (in ~/.ssh/authorized_keys)
- 1 client that
  - makes an SSH request (usually on port 22) to the server's daemon via the ssh protocol 
  - has the private key of the client's keypair
  - has the server's shh public keys (in its ~/.ssh/known_hosts) - more secure but not mandatory




