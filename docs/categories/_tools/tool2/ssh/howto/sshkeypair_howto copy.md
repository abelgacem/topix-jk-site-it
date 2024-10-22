<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:        ../list/object_list.md
[SshKeypair_Whatis]:  ../whatis/sshkeypair_whatis.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH > Howto > manage > SSH Keypair
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|SSH Keypair|[Definition][SshKeypair_Whatis]|
<br>


# Create 1  Keypair
```bash
lKEY_PASSPHRASE=""
lKEY_PUB_COMMENT="skouant001@externe.botanic.com"
lKEY_PUB_COMMENT="ssh@intocontainer"
lKEY_ENCRYPTION="ed25519"

lKEY_LOCATION="./id_ed25519"
ssh-keygen -t ${lKEY_ENCRYPTION} -C ${lKEY_PUB_COMMENT}  -f ${lKEY_LOCATION} -N ${lKEY_PASSPHRASE}

lKEY_LOCATION="/tmp/test"
lKEY_ENCRYPTION="rsa"
Key_Length="2048"
ssh-keygen -o -t ${lKEY_ENCRYPTION} -b ${Key_Length} -N ${lKEY_PASSPHRASE} -f ${lKEY_LOCATION}


lKEY_PASSPHRASE=""
lKEY_LOCATION="/tmp/mmg"
lKEY_ENCRYPTION="rsa"
Key_Length="4096"
ssh-keygen -o -t ${lKEY_ENCRYPTION} -b ${Key_Length} -N ${lKEY_PASSPHRASE} -f ${lKEY_LOCATION}

ssh-keygen -t rsa -b 4096 -C "you@example.com


lKEY_PUB_COMMENT="your_email@example.com"
lKEY_ENCRYPTION="ed25519"
ssh-keygen -o -t ${lKEY_ENCRYPTION} -C ${lKEY_PUB_COMMENT} -N ${PassPhrase}

lKEY_LOCATION="/tmp/PubKeyForEncaiStg"
ssh-keygen -o -t ${lKEY_ENCRYPTION} -b ${Key_Length} -f ${lKEY_LOCATION} -N ${PassPhrase}

lKEY_LOCATION="/tmp/keygitomt"
ssh-keygen -t ${lKEY_ENCRYPTION} -N ${PassPhrase} -f ${lKEY_LOCATION}

lKEY_ENCRYPTION="eddsa"
ssh-keygen -t ${lKEY_ENCRYPTION} -b 521

lKEY_PUB_COMMENT="Pawel.Kowalski@comarch.com"
lKEY_ENCRYPTION="ed25519"
lKEY_LOCATION="/home/$mxuser/.ssh/id_ed25519"

mxcde="ssh-keygen -t ${lKEY_ENCRYPTION} -C ${lKEY_PUB_COMMENT} -f ${lKEY_LOCATION}"
${mxcde}

User_Name="kkoryluk001"
cat /home/${User_Name}/.ssh/id_ed25519.pub > /home/${User_Name}/.ssh/authorized_keys
chmod 600 /home/${User_Name}/.ssh/* && chown ${User_Name}:${User_Name} /home/${User_Name}/.ssh/*
```


# To know
default value for `ssh-keygen` are:
- lKEY_ENCRYPTION="rsa" (old format prefer using format:`ED25519`)
- Key_Length="2048"
- Key_Pubblic_Path="~/.ssh/rsa.pub"
- Key_Private_Path="~/.ssh/rsa"

If 1 Passphrase is given 1 user agent is needed to automate the ssh





# Todo
## Install Key for Git Server
- Generate Kvpair
- Update ~/.ssh/config
- Test connectin to Github (cf. file ~/.ssh/config)

## Copy SSH Public key on 1 SSH server
```bash
# same as: ssh root@[IP of the management system] 'cat ~/.ssh/id_ed25519.pub' | cat - >> ~/.ssh/authorized_keys
# /home/user/.ssh/authorized_keys
ssh-copy-id -i ~/.ssh/id_rsa.pub root@123.123.123.123
```


## Put the Ssh.Key.Public on the Host.Server
- Append the Ssh.Key.Public on the Host.Server.File::~/.ssh/authorized_keys
  - Info: ~ denote the home of the user
- chmod 700   ~/.ssh
- chmod 600   ~/.ssh/authorized_keys

## Put the Ssh.Key.Private on the Host.Client
- Copy the Ssh.Key.Private in the folder Host.Client::~/.ssh/
  - Info : ~ denote the home of the user 
