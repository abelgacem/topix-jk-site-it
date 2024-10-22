---
draft : true
mx:  
  lp: 0
  ref:
    child:
      - definition/gpg
---

# Create a custom GPG home
```bash
# define var
lFOLDER="/tmp/test"
export GNUPGHOME=${lFOLDER}

# create folder
mkdir ${GNUPGHOME}

# create new empty store
gpg --list-keys
```

# List
```bash
# fingerprint - line below pub
gpg --fingerprint | grep pub -A1 | grep -v pub

# key-id - ligne starting with sig
gpg --list-signatures | grep sig
```