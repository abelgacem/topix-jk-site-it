<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:        ../list/object_list.md
[SshdConfig_Whatis]:  ../whatis/sshdconfig_whatis.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH > Howto > SSHD Config
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|SSHD Config|[Definition][SshdConfig_Whatis]|

# Keep connection open
```bash
sudo sed -ie 's/#TCPKeepAlive yes/TCPKeepAlive yes/'             /etc/ssh/sshd_config
# Check
cat /etc/ssh/sshd_config | grep ^TCPKeepAlive

sudo sed -ie 's/#ClientAliveInterval 0/ClientAliveInterval 30/'  /etc/ssh/sshd_config
# Check
cat /etc/ssh/sshd_config | grep ^ClientAliveInterval
```

# Vocabulary

- Host *
  - Match all host 
- 192.168.0.* 
  - Matches hosts in the 192.168.0.0/24 subnet.
- Host 10.10.0.?  
  - Matches hosts in the range 10.10.0.[0-9]
