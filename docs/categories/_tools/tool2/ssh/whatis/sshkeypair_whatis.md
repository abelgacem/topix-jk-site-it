<head><link rel="stylesheet" href="../../../md.css"/><script src="../../../md.js"></script></head>

[//]: #(Reference)
[Repo_Readme]:       ../list/object_list.md
[SshKeypair_Howto]:  ../howto/sshkeypair_howto.md

# [&larr;][Repo_Readme]Domain > Computer Science > SSH >  Whatis > 1 keypair
# List of references
|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|SSH Keypair|[Howto][SshKeypair_Howto]|
<br>

# Member
- Public key
- Private key

# Category
- Format:
  - DSA
  - ECDSA
  - ED25519
  - RSA (default and old format)
- Lenght:
  - 2K (ie 2048 - default length for rsa and old)
  - 4K (ie 4096)

# Public key
- is not a secret
- must exists on the ssh server, often at location: `~/.ssh/authorized_keys`

# Private key
- Is a secret
- must exists on the ssh client, often at location: `~/.ssh/id_xxx`
  - if not must be provide to CLI:ssh

# Toknow
- file:`~/.ssh/known_hosts` can be deleted on ssh client


