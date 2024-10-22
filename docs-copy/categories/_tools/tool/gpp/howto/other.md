
[//]: #(Reference)
[Repo_Readme]:    ../list/object_list.md




# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|SELinux|see|[Definition][SELinux_Whatis]|
<br>


# Create 1 revocation certificate
```bash
gpg --gen-revoke --armor --output=RevocationCertificate.asc your@email.address
```

# Put key in store
- 1 store shoud have
  - 1 priv key
  - N pub key

# crypt 1 msg with N pubkey
- When gpg crypt 1 msg with N keypub, any of the privkey can decrypt the msg
- When you crypt 1 msg with N pubkey do sign the msg with 1 privkey
# decrypt 1 msg with 1 privkey

 # todo
 ```bash
 gpg --list --keys
 gpg --list-secrets
 gpg -sea -r

```

# crypt a file
## symetric way
```bash
# using the public key
gpg --symmetric filename.txt
``` 

## asymetric way
```bash
# using the public key
gpg --encrypt --recipient recipient@example.com filename.txt
``` 

## both way
- 
