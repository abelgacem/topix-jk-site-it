# [&larr;][Repo_Readme]Domain > Computer Science > gpg > Howto > manage > key

[//]: #(Reference)
[Repo_Readme]:    ../whatis/gpg_whatis.md

[Keypair_Whatis]: ../../../whatis/kvpair_whatis.md


# List of references

|name|type|learning path|sequence|view|desc|
|-|-|-|-|-|-|
|keypair||||[Whatis][Keypair_Whatis]
<br>

# List
```bash
gpg --list-keys
```

# Create kvpair
## interactive method
```bash
gpg --gen-key
gpg --full-generate-key --openpgp
```
## batch method
```bash
# with no passphrase and inline
gpg --batch --gen-key <<EOF
Key-Type: RSA
Key-Length: 2048
Name-Real: Your Name
Name-Email: your.email@example.com
Expire-Date: 0
%commit
EOF

# with no passphrase and inline
gpg --batch --gen-key <<EOF
Key-Type: DSA
Key-Length: 2048
Name-Real: Your Name
Name-Email: your.email@example.com
Expire-Date: 0
%commit
EOF

# with no passphrase and inline
gpg --batch --gen-key <<EOF
Key-Type: ElGamal
Key-Length: 2048
Name-Real: Your Name
Name-Email: your.email@example.com
Expire-Date: 0
%commit
EOF

# with no passphrase and inline
gpg --batch --gen-key <<EOF
Key-Type: ECC
Key-Curve: NIST P-256
Name-Real: Your Name
Name-Email: your.email@example.com
Expire-Date: 0
%commit
EOF

# with no passphrase and a file
## define file:example.conf content
%no-protection
Key-Type: default
Subkey-Type: default
Name-Real: YOUR NAME
Name-Email: YOUR EMAIL@example.com
Expire-Date: 0
## play cli
gpg --batch --gen-key example.conf

```

# export kvpair:key@pub
```bash
gpg --export -a "User Name" > publickey.asc
```

# export kvpair:key@priv
```bash
gpg --export-secret-keys -a "User Name" > privatekey.asc
```

# import
```bash
lKEY_FINGERPRINT="EC2392F2EDE74488680DA3CF5F2B4756ED873D23"
gpg --import [filename]
gpg --keyserver pgp.mit.edu --search-keys eliasen@mindspring.com
gpg --keyserver pgp.mit.edu --recv-keys ${lKEY_FINGERPRINT}

```