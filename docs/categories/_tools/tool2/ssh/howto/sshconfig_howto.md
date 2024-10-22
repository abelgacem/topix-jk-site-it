<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:       ../list/object_list.md
[SshConfig_Whatis]:  ../whatis/sshconfig_whatis.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH > Howto > SSH Config
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|SSH Config|[Definition][SshConfig_Whatis]|
<br>


# info
```bash
man ssh_config
```

# Keep connection open
```bash
sudo sed -ie 's/#TCPKeepAlive yes/TCPKeepAlive yes/'             /etc/ssh/sshd_config
# Check
cat /etc/ssh/sshd_config | grep ^TCPKeepAlive

sudo sed -ie 's/#ClientAliveInterval 0/ClientAliveInterval 30/'  /etc/ssh/sshd_config
# Check
cat /etc/ssh/sshd_config | grep ^ClientAliveInterval
```


# Documentation
```bash
man ssh_config
```

# Example
```bash
# ~/.ssh/config
Include config.d/*
Host  *
  StrictHostKeyChecking no
  UserKnownHostsFile /dev/null
  LogLevel ERROR
  ControlMaster auto
  ControlPath /tmp/mx-ssh-socket-%r@%h-%p
  ControlPersist 600

# ~/.ssh/config.d/ovh
Host ovh*u
  User ubuntu
  IdentityFile /home/dockadm/debug/secret/keysshpriv/ksp.vm.ovh
Host ovh*d
  User debian
  IdentityFile /home/dockadm/debug/secret/keysshpriv/ksp.vm.ovh

# ~/.ssh/config.d/ovh1
Host ovh1*
  HostName 51.210.10.19

# ~/.ssh/config.d/ovh2
Host ovh2*
  HostName 51.77.213.243
```

# Example
```bash
# /etc/hosts
102.23.76.98 rie.qua.maim
102.24.74.98 rie.rec.maim

# ~/.ssh/config
Include config.d/*
Host  *
  StrictHostKeyChecking no
  UserKnownHostsFile /dev/null
  LogLevel ERROR
  ControlMaster auto
  ControlPath /tmp/mx-ssh-socket-%r@%h-%p
  ControlPersist 600

# ~/.ssh/config.d/opsdin
Host opsdin*
  User cloudadm
  IdentityFile /home/dockadm/debug/secret/keysshpriv/ksp.vm.ovh

# ~/.ssh/config.d/opsdin_qua_bastion
Host opsdin_qua_bastion
  HostName rie.qua.maim

# ~/.ssh/config.d/opsdin_rec_bastion
Host opsdin_rec_bastion
  HostName rie.rec.maim

```