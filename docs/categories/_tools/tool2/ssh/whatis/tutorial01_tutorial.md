<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH > What is > TLS
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|





# Allow 1 User to ssh fom 1 Client to 1 Server
-  (Check | Test) no Ssh.Key.Public exist on the Host.Server for that User

Info: ~ Denote the home of the user on the Host.Server (usually /home/${Username})

    ls -ial ~/.ssh/
     
- [Create 1 Pair of Ssh.Key][Howto_CreateSshKey]
_ [Put the Ssh.Key.Public on the SSH Server][Howto_PutSshKeyPublic]
- [Put the Ssh.Key.Private on the SSH Client][Howto_PutSshKeyPrivate]

Toknow: The Home of the User on the Host.Server and Host.Client can be different

- ssh from Host.Client to Host.Server 

ssh john@dev.example.com -p 2322

## Configure ssh client to simplify connection
- Create the file [if not exists]

~/.ssh/config

     mkdir -p ~/.ssh
     chmod 700 ~/.ssh
     touch ~/.ssh/config
     chmod 600 ~/.ssh/config

- Update the file

~/.ssh/config

    Host ovhmx22
      HostName 51.77.210.73
      StrictHostKeyChecking no
      User mx
      Port 22
      IdentityFile /Users/Max/.ssh/id_rsa
  
- ssh from Host.Client to Host.Server 

Cde on Host.Client

    ssh ovhmx22






